let process = require('process');

import { ConfigParams } from 'pip-services3-commons-node';

import { EventGenerationClientFixtureV1 } from './EventGenerationClientFixtureV1';
import { EventGenerationLambdaClientV1 } from '../../src/version1/EventGenerationLambdaClientV1';
import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';
import { EventRulesMemoryClientV1 } from 'iqs-clients-eventrules-node';

suite('EventGenerationLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        "lambda.connection.protocol", "aws",
        "lambda.connection.arn", AWS_LAMDBA_ARN,
        "lambda.credential.access_id", AWS_ACCESS_ID,
        "lambda.credential.access_key", AWS_ACCESS_KEY,
        "lambda.options.connection_timeout", 30000
    );
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: EventGenerationLambdaClientV1;
    let fixture: EventGenerationClientFixtureV1;

    setup((done) => {
        client = new EventGenerationLambdaClientV1();
        client.configure(lambdaConfig);

        let organizationsClient = new OrganizationsMemoryClientV1();
        let eventRulesClient = new EventRulesMemoryClientV1();

        fixture = new EventGenerationClientFixtureV1(client, organizationsClient, eventRulesClient);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Generate for Single State', (done) => {
        fixture.testActivateForSingleState(done);
    });

    test('Generate for Multiple State', (done) => {
        fixture.testActivateForMultipleStates(done);
    });

    test('Avoid Sending Duplicates', (done) => {
        fixture.testAvoidSendingDuplicates(done);
    });

});