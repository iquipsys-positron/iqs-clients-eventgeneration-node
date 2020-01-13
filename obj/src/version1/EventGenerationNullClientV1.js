"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventGenerationNullClientV1 {
    generateEventsForState(correlationId, orgId, state, callback) {
        if (callback)
            callback(null, []);
    }
    generateEventsForStates(correlationId, orgId, states, callback) {
        if (callback)
            callback(null, []);
    }
}
exports.EventGenerationNullClientV1 = EventGenerationNullClientV1;
//# sourceMappingURL=EventGenerationNullClientV1.js.map