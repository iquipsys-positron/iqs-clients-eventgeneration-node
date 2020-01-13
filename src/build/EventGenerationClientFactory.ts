import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { EventGenerationNullClientV1 } from '../version1/EventGenerationNullClientV1';
import { EventGenerationDirectClientV1 } from '../version1/EventGenerationDirectClientV1';
import { EventGenerationHttpClientV1 } from '../version1/EventGenerationHttpClientV1';
import { EventGenerationLambdaClientV1 } from '../version1/EventGenerationLambdaClientV1';
import { EventGenerationHttpProxyClientV1 } from '../version1/EventGenerationHttpProxyClientV1';

export class EventGenerationClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-eventgeneration', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-eventgeneration', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-eventgeneration', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-eventgeneration', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-eventgeneration', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-eventgeneration', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EventGenerationClientFactory.NullClientV1Descriptor, EventGenerationNullClientV1);
		this.registerAsType(EventGenerationClientFactory.DirectClientV1Descriptor, EventGenerationDirectClientV1);
		this.registerAsType(EventGenerationClientFactory.HttpClientV1Descriptor, EventGenerationHttpClientV1);
		this.registerAsType(EventGenerationClientFactory.LambdaClientV1Descriptor, EventGenerationLambdaClientV1);
		this.registerAsType(EventGenerationClientFactory.HttpProxyClientV1Descriptor, EventGenerationHttpProxyClientV1);
	}
	
}
