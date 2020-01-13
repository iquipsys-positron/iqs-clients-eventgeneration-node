let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';
import { ControlObjectsMemoryClientV1 } from 'iqs-clients-controlobjects-node';
import { EventRulesMemoryClientV1 } from 'iqs-clients-eventrules-node';
import { ZonesMemoryClientV1 } from 'iqs-clients-zones-node';
import { OperationalEventsNullClientV1 } from 'iqs-clients-opevents-node';
import { IncidentsNullClientV1 } from 'iqs-clients-incidents-node';
import { SignalsNullClientV1 } from 'iqs-clients-signals-node';
import { StatisticsNullClientV1 } from 'pip-clients-statistics-node';
import { MessageDistributionNullClientV1 } from 'pip-clients-msgdistribution-node';

import { EventGenerationController } from 'iqs-services-eventgeneration-node';
import { EventGenerationMemoryPersistence } from 'iqs-services-eventgeneration-node';
import { IEventGenerationClientV1 } from '../../src/version1/IEventGenerationClientV1';
import { EventGenerationHttpClientV1 } from '../../src/version1/EventGenerationHttpClientV1';
import { EventGenerationClientFixtureV1 } from './EventGenerationClientFixtureV1';
import { EventGenerationHttpServiceV1 } from 'iqs-services-eventgeneration-node';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EventGenerationHttpClientV1', ()=> {
    let service: EventGenerationHttpServiceV1;
    let client: EventGenerationHttpClientV1;
    let fixture: EventGenerationClientFixtureV1;
    let persistence: EventGenerationMemoryPersistence;
    
    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new EventGenerationController();
        let organizationsClient = new OrganizationsMemoryClientV1();
        let eventRulesClient = new EventRulesMemoryClientV1();
        
        persistence = new EventGenerationMemoryPersistence();

        service = new EventGenerationHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-organizations', 'client', 'memory', 'default', '1.0'), organizationsClient,
            new Descriptor('iqs-services-controlobjects', 'client', 'memory', 'default', '1.0'), new ControlObjectsMemoryClientV1(),
            new Descriptor('iqs-services-eventrules', 'client', 'memory', 'default', '1.0'), eventRulesClient,
            new Descriptor('iqs-services-zones', 'client', 'memory', 'default', '1.0'), new ZonesMemoryClientV1(),
            new Descriptor('iqs-services-opevents', 'client', 'null', 'default', '1.0'), new OperationalEventsNullClientV1(),
            new Descriptor('iqs-services-incidents', 'client', 'null', 'default', '1.0'), new IncidentsNullClientV1(),
            new Descriptor('iqs-services-signals', 'client', 'null', 'default', '1.0'), new SignalsNullClientV1(),
            new Descriptor('pip-services-statistics', 'client', 'null', 'default', '1.0'), new StatisticsNullClientV1(),
            new Descriptor('pip-services-msgdistribution', 'client', 'null', 'default', '1.0'), new MessageDistributionNullClientV1(),
            new Descriptor('iqs-services-eventgeneration', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-eventgeneration', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-eventgeneration', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EventGenerationHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EventGenerationClientFixtureV1(client, organizationsClient, eventRulesClient);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    setup((done) => {
        persistence.clear(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Generate for Single State', (done) => {
        fixture.testActivateForSingleState(done);
    });

    test('Generate for Multiple State', (done) => {
        fixture.testActivateForMultipleStates(done);
    });

    test('Avoid Sending Duplicates', (done) => {
        fixture.testAvoidSendingDuplicates(done);
    });
    
});
