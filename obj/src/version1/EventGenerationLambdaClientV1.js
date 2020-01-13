"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class EventGenerationLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('event_generation');
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
exports.EventGenerationLambdaClientV1 = EventGenerationLambdaClientV1;
//# sourceMappingURL=EventGenerationLambdaClientV1.js.map