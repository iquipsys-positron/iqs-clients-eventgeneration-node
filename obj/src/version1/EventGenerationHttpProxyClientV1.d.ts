import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';
import { IEventGenerationClientV1 } from './IEventGenerationClientV1';
import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';
export declare class EventGenerationHttpProxyClientV1 extends ClustersProxyHttpClientV1<IEventGenerationClientV1> implements IEventGenerationClientV1 {
    constructor(config?: any);
    generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, callback?: (err: any, activations: EventGenerationV1[]) => void): void;
    generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], callback?: (err: any, activations: EventGenerationV1[]) => void): void;
}
