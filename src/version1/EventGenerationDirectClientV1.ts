import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEventGenerationClientV1 } from './IEventGenerationClientV1';
//import { IEventGenerationController } from 'iqs-services-eventgeneration-node';
import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';

export class EventGenerationDirectClientV1 extends DirectClient<any> implements IEventGenerationClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-eventgeneration", "controller", "*", "*", "*"))
    }

    public generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        let timing = this.instrument(correlationId, 'event_generation.generate_events_for_state');
        this._controller.generateEventsForState(correlationId, state, (err, activations) => {
            timing.endTiming();
            if (callback) callback(err, activations);
        });
    }

    public generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        let timing = this.instrument(correlationId, 'event_generation.generate_events_for_states');
        this._controller.generateEventsForStates(correlationId, states, (err, activations) => {
            timing.endTiming();
            if (callback) callback(err, activations);
        });
    }
    
}