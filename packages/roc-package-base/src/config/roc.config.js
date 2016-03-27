import {
    listSettings,
    markdownSettings,
    markdownHooks,
    markdownActions
} from '../commands';

const config = {
    settings: {},

    commands: {
        'list-settings': listSettings,
        'markdown-settings': markdownSettings,
        'markdown-hooks': markdownHooks,
        'markdown-actions': markdownActions
    },

    plugins: [],

    packages: [],

    action: undefined
};

/**
 * Gives the package configuration.
 *
 * @returns {object} - Returns the package configuration.
 */
export default config;
