import isStringLodash from 'lodash/isString';
import { isArray, isString, isObject } from 'roc/validators';

import config from './config/roc.config.js';
import meta from './config/roc.config.meta.js';

import { name } from './util';

export default {
    config,
    meta,
    name,
    packages: [
        require.resolve('roc-package-core')
    ],
    actions: {
        beforeClean: {
            extension: 'roc-package-core-dev',
            hook: 'before-clean',
            action: () => () => (settings) => {
                return isStringLodash(settings.build.output) ?
                    [settings.build.output] :
                    Object.keys(settings.build.output)
                        .map((prop) => settings.build.output[prop]);
            },
            description: 'Runs before clean command is executed. Returns an array of strings that should be removed.'
        },
        afterClean: {
            extension: 'roc-package-core-dev',
            hook: 'after-clean',
            action: () => () => () => {
                /* eslint-disable no-console */
                console.log('Cleaned build directories!');
                /* eslint-enable */
            },
            description: 'Runs after clean command is executed. Logs that the action has been completed successfully.'
        }
    },
    hooks: {
        'before-clean': {
            description: 'Hook point for adding code that runs before the clean command is invoked.',
            returns: isArray(isString),
            arguments: [{
                name: 'settings',
                validation: isObject(),
                description: 'The settings object that is received from Roc.'
            }]
        },

        'after-clean': {
            description: 'Hook point for adding code that runs after the clean command is invoked.'
        }
    }
};
