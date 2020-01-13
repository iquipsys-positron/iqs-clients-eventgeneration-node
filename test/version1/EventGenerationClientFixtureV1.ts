let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';
import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';
import { EventRulesMemoryClientV1 } from 'iqs-clients-eventrules-node';
import { EventRuleTypeV1 } from 'iqs-clients-eventrules-node';

import { EventGenerationV1 } from '../../src/version1/EventGenerationV1';
import { EventGenerationStateV1 } from '../../src/version1/EventGenerationStateV1';
import { IEventGenerationClientV1 } from '../../src/version1/IEventGenerationClientV1';

let STATE1: EventGenerationStateV1 = {
    org_id: '1',
    object_id: '1',
    time: new Date(new Date().getTime() - 10000),
    lat: 32,
    lng: -110,
    alt: 750,
    angle: 0,
    speed: 100,
    connected: true,
    online: 100,
    offline: 0,
    freezed: 0,
    immobile: 100,
    pressed: true
};
let STATE2: EventGenerationStateV1 = {
    org_id: '1',
    object_id: '2',
    time: new Date(new Date().getTime() - 10000),
    lat: 33,
    lng: -111,
    alt: 750,
    angle: 0,
    speed: 1,
    online: 0,
    offline: 1000,
    freezed: 0,
    immobile: 0
};

export class EventGenerationClientFixtureV1 {
    private _client: IEventGenerationClientV1;
    
    constructor(client: IEventGenerationClientV1, 
        organizationsClient: OrganizationsMemoryClientV1, eventRulesClient: EventRulesMemoryClientV1) {
        this._client = client;

        organizationsClient.createOrganization(
            null, 
            { id: '1', name: 'Test organization', create_time: new Date(), creator_id: null, active: true },
            () => {}
        );

        eventRulesClient.createEventRule(
            null, 
            { id: '1', org_id: '1', name: 'Test Rule 1', type: EventRuleTypeV1.ShowUp, interval: 300, all_objects: true, all_zones: true }, 
            () => {}
        );
        eventRulesClient.createEventRule(
            null, 
            { id: '2', org_id: '1', name: 'Test Rule 2', type: EventRuleTypeV1.Disappear, interval: 300, all_objects: true, all_zones: true }, 
            () => {}
        );
        eventRulesClient.createEventRule(
            null, 
            { id: '3', org_id: '1', name: 'Test Rule 3', type: EventRuleTypeV1.ButtonPressed, interval: 300, all_objects: true, all_zones: true }, 
            () => {}
        );
    }
        
    public testActivateForSingleState(done) {
        this._client.generateEventsForState(
            null, '1', STATE1,
            (err, activations) => {
                assert.isNull(err);

                assert.isArray(activations);
                assert.lengthOf(activations, 2);

                done();
            }
        );
    }

    public testActivateForMultipleStates(done) {
        this._client.generateEventsForStates(
            null, '1', [ STATE1, STATE2 ],
            (err, activations) => {
                assert.isNull(err);

                assert.isArray(activations);
                assert.lengthOf(activations, 3);

                done();
            }
        );
    }

    public testAvoidSendingDuplicates(done) {
        async.series([
            // Activate rules once
            (callback) => {
                this._client.generateEventsForState(
                    null, '1', STATE1,
                    (err, activations) => {
                        assert.isNull(err);
        
                        assert.isArray(activations);
                        assert.lengthOf(activations, 2);
        
                        callback();
                    }
                );
            },
            // Activate rules once again
            (callback) => {
                this._client.generateEventsForState(
                    null, '1', STATE1,
                    (err, activations) => {
                        assert.isNull(err);
        
                        assert.isArray(activations);
                        assert.lengthOf(activations, 0);
        
                        callback();
                    }
                );
            }
        ], done);
    }

}
