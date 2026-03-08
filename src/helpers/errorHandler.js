/**
 * errorHandler.js
 *
 * Description:
 * Centralized error handling utility for the automation framework.
 *
 * Responsibilities:
 * - Capture and log test execution errors
 * - Provide meaningful error messages
 * - Improve debugging and troubleshooting
 */

import { t } from 'testcafe';

export async function handleError(testName, error) {
    console.error(`❌ Error occurred in test: ${testName}`);
    console.error(`Message: ${error.message}`);
    console.error(`Stack:\n${error.stack}`);

    // Fails the test with a custom message
    await t.expect(false).ok(`❌ Test Failed: ${testName}\n\nError: ${error.message}`);
}
