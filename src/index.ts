// SPDX-License-Identifier: (BlueOak-1.0.0 OR BSD-2-Clause-Patent OR ISC)

export function* queryNodeGenerator(xpath: string, on: Node = document) {
    const results = document.evaluate(xpath, on, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);

    for (let i = 0; i < results.snapshotLength; i++) {
        const result = results.snapshotItem(i);
        if (result != null) {
            yield result;
        }
    }
}

export default function queryNodes(xpath: string, on: Node = document) {
    return [...queryNodeGenerator(xpath, on)];
}

export function queryNumber(xpath: string, on: Node = document) {
    const results = document.evaluate(xpath, on, null, XPathResult.NUMBER_TYPE);
    return results.numberValue;
}

export function queryString(xpath: string, on: Node = document) {
    const results = document.evaluate(xpath, on, null, XPathResult.STRING_TYPE);
    return results.stringValue;
}

export function queryBool(xpath: string, on: Node = document) {
    const results = document.evaluate(xpath, on, null, XPathResult.BOOLEAN_TYPE);
    return results.booleanValue;
}

export function queryNode(xpath: string, on: Node = document) {
    const results = document.evaluate(xpath, on, null, XPathResult.FIRST_ORDERED_NODE_TYPE);
    return results.singleNodeValue;
}
