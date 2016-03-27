import config from './config/roc.config.js';
import meta from './config/roc.config.meta.js';

const name = require('../package.json').name;

/**
* Roc
*
* This need to be exported for something to be considered a valid Roc package or plugin.
* There is also a requirement on that a `name` is defined and at least one more thing.
*/
export const roc = {
    name,
    config,
    meta
};
