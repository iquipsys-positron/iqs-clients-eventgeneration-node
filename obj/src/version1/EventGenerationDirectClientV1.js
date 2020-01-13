"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class EventGenerationDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-eventgeneration", "controller", "*", "*", "*"));
    }
    generateEventsForState(correlationId, orgId, state, callback) {
        let timing = this.instrument(correlationId, 'event_generation.generate_events_for_state');
        this._controller.generateEventsForState(correlationId, state, (err, activations) => {
            timing.endTiming();
            if (callback)
                callback(err, activations);
        });
    }
    generateEventsForStates(correlationId, orgId, states, callback) {
        let timing = this.instrument(correlationId, 'event_generation.generate_events_for_states');
        this._controller.generateEventsForStates(correlationId, states, (err, activations) => {
            timing.endTiming();
            if (callback)
                callback(err, activations);
        });
    }
}
exports.EventGenerationDirectClientV1 = EventGenerationDirectClientV1;
//# sourceMappingURL=EventGenerationDirectClientV1.js.map