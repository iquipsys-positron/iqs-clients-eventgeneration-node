import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IEventGenerationClientV1 } from './IEventGenerationClientV1';
import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';

export class EventGenerationHttpClientV1 extends CommandableHttpClient implements IEventGenerationClientV1 {       
    
    constructor(config?: any) {
        super('v1/event_generation');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        this.callCommand(
            'generate_events_for_state', 
            correlationId,
            {
                state: state
            }, 
            callback
        );
    }

    public generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        this.callCommand(
            'generate_events_for_states', 
            correlationId,
            {
                states: states
            }, 
            callback
        );
    }
    
}
