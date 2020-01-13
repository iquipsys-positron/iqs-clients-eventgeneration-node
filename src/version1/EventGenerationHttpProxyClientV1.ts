import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { IEventGenerationClientV1 } from './IEventGenerationClientV1';
import { EventGenerationV1 } from './EventGenerationV1';
import { EventGenerationStateV1 } from './EventGenerationStateV1';
import { EventGenerationHttpClientV1 } from './EventGenerationHttpClientV1';

export class EventGenerationHttpProxyClientV1 extends ClustersProxyHttpClientV1<IEventGenerationClientV1>
    implements IEventGenerationClientV1 {       
    
    constructor(config?: any) {
        super(EventGenerationHttpClientV1, 'iqs-services-eventgeneration', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public generateEventsForState(correlationId: string, orgId: string, state: EventGenerationStateV1, 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.generateEventsForState(correlationId, orgId, state, callback);
        });
    }

    public generateEventsForStates(correlationId: string, orgId: string, states: EventGenerationStateV1[], 
        callback?: (err: any, activations: EventGenerationV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.generateEventsForStates(correlationId, orgId, states, callback);
        });
    }
    
}
