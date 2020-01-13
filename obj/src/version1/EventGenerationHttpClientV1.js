"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventGenerationHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/event_generation');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    generateEventsForState(correlationId, orgId, state, callback) {
        this.callCommand('generate_events_for_state', correlationId, {
            state: state
        }, callback);
    }
    generateEventsForStates(correlationId, orgId, states, callback) {
        this.callCommand('generate_events_for_states', correlationId, {
            states: states
        }, callback);
    }
}
exports.EventGenerationHttpClientV1 = EventGenerationHttpClientV1;
//# sourceMappingURL=EventGenerationHttpClientV1.js.map