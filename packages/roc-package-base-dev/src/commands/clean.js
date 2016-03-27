import cleanPromise from '../helpers/clean-promise';

import { invokeHook } from '../roc/util';

/**
 * Cleans the build files.
 */
export default function clean() {
    /*
    * Using hooks here more for documentation purposes than for actual functionality.
    * Will consider to revert back to not using hooks here, we should only use them when we need to.
    */
    const toClean = invokeHook('before-clean');
    Promise.all(toClean.map((path) => cleanPromise(path)))
        .then(invokeHook('after-clean'));
}
