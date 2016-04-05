import isStringLodash from 'lodash/isString';
import { isArray, isString, isObject, isFunction } from 'roc/validators';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

import { name } from './util';

export default {
    config,
    meta,
    name,
    packages: [
        require.resolve('roc-package-base')
    ],
    actions: {
        beforeClean: {
            extension: name,
            hook: 'before-clean',
            action: () => ({ settings }) => () => () => {
                return isStringLodash(settings.build.output) ?
                    [settings.build.output] :
                    Object.keys(settings.build.output)
                        .map((prop) => settings.build.output[prop]);
            },
            description: 'Runs before clean command is executed. Returns an array of strings that should be removed.'
        },
        afterClean: {
            extension: name,
            hook: 'after-clean',
            action: () => () => () => () => {
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
            returns: isArray(isString)
        },

        'after-clean': {
            description: 'Hook point for adding code that runs after the clean command is invoked.'
        },

        'run-build-command': {
            description: 'Use to add things that should react to the build command being called.',
            arguments: [{
                name: 'targets',
                validation: isArray(isString),
                description: 'The targets to build for, will be based on settings or a possible argument if defined.'
            }],
            hasCallback: true,
            returns: isFunction
        },

        'run-dev-command': {
            description: 'Use to add things that should react to the dev command being called.',
            arguments: [{
                name: 'targets',
                validation: isArray(isString),
                description: 'The targets use for dev, will be based on settings or a possible argument if defined.'
            }]
        }
    }
};
