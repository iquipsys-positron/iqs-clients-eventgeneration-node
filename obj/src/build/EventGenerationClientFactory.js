"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const EventGenerationNullClientV1_1 = require("../version1/EventGenerationNullClientV1");
const EventGenerationDirectClientV1_1 = require("../version1/EventGenerationDirectClientV1");
const EventGenerationHttpClientV1_1 = require("../version1/EventGenerationHttpClientV1");
const EventGenerationLambdaClientV1_1 = require("../version1/EventGenerationLambdaClientV1");
const EventGenerationHttpProxyClientV1_1 = require("../version1/EventGenerationHttpProxyClientV1");
class EventGenerationClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EventGenerationClientFactory.NullClientV1Descriptor, EventGenerationNullClientV1_1.EventGenerationNullClientV1);
        this.registerAsType(EventGenerationClientFactory.DirectClientV1Descriptor, EventGenerationDirectClientV1_1.EventGenerationDirectClientV1);
        this.registerAsType(EventGenerationClientFactory.HttpClientV1Descriptor, EventGenerationHttpClientV1_1.EventGenerationHttpClientV1);
        this.registerAsType(EventGenerationClientFactory.LambdaClientV1Descriptor, EventGenerationLambdaClientV1_1.EventGenerationLambdaClientV1);
        this.registerAsType(EventGenerationClientFactory.HttpProxyClientV1Descriptor, EventGenerationHttpProxyClientV1_1.EventGenerationHttpProxyClientV1);
    }
}
exports.EventGenerationClientFactory = EventGenerationClientFactory;
EventGenerationClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'factory', 'default', 'default', '1.0');
EventGenerationClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'client', 'null', 'default', '1.0');
EventGenerationClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'client', 'direct', 'default', '1.0');
EventGenerationClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'client', 'http', 'default', '1.0');
EventGenerationClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'client', 'lambda', 'default', '1.0');
EventGenerationClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventgeneration', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=EventGenerationClientFactory.js.map