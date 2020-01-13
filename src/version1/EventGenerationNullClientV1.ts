import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IEventGenerationClientV1 } from './IEventGenerationClientV1';
import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';

export class EventGenerationNullClientV1 implements IEventGenerationClientV1 {
            
    public generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        if (callback) callback(null, []);
    }

    public generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        if (callback) callback(null, []);
    }
    
}