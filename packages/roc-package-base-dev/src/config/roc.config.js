import build from '../commands/build';
import clean from '../commands/clean';
import dev from '../commands/dev';

const config = {
    settings: {
        dev: {
            // We define this here since this is something that several packages might want to use.
            debug: 'roc:*'
        },

        build: {
            targets: [],
            input: '',
            output: ''
        }
    },

    commands: {
        clean,
        build,
        dev
    }
};

/**
 * Gives the package dev configuration.
 *
 * @returns {object} - Returns the package configuration.
 */
export default config;
