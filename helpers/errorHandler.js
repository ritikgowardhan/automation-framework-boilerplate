import { t } from 'testcafe';

/**
 * Logs and handles errors during test execution.
 */
export async function handleError(testName, error) {
    console.error(`❌ Error occurred in test: ${testName}`);
    console.error(`Message: ${error.message}`);
    console.error(`Stack:\n${error.stack}`);

    // Fails the test with a custom message
    await t.expect(false).ok(`❌ Test Failed: ${testName}\n\nError: ${error.message}`);
}
