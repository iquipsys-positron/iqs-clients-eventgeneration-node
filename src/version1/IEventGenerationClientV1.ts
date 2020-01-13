import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';

export interface IEventGenerationClientV1 {
    generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void;

    generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void;
}
