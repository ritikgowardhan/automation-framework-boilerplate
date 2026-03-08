/**
 * xpathHandler.js
 *
 * Description:
 * Utility for generating or managing dynamic XPath selectors.
 *
 * Responsibilities:
 * - Handle dynamic XPath creation
 * - Simplify complex locator strategies
 * - Improve selector reusability
 */

import { Selector } from 'testcafe';
export const xPathSelector = Selector(xpath =>
    document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue
);
