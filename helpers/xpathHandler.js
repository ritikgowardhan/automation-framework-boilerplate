import { Selector } from 'testcafe';

/**
 * Allows XPath selectors in TestCafe.
 * Usage: xPathSelector`//div[@class='example']`
 */
export const xPathSelector = Selector(xpath =>
    document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue
);
