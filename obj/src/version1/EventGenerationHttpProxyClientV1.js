"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const EventGenerationHttpClientV1_1 = require("./EventGenerationHttpClientV1");
class EventGenerationHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(EventGenerationHttpClientV1_1.EventGenerationHttpClientV1, 'iqs-services-eventgeneration', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    generateEventsForState(correlationId, orgId, state, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.generateEventsForState(correlationId, orgId, state, callback);
        });
    }
    generateEventsForStates(correlationId, orgId, states, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.generateEventsForStates(correlationId, orgId, states, callback);
        });
    }
}
exports.EventGenerationHttpProxyClientV1 = EventGenerationHttpProxyClientV1;
//# sourceMappingURL=EventGenerationHttpProxyClientV1.js.map