import { invokeHook } from '../roc/util';

/**
 * Starts the project in development mode.
 *
 * @property {object} config - The roc configuration object.
 * @property {object} parsedArguments - The parsed arguments from roc.
 */
export default function dev({
    context: { config },
    parsedArguments,
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = config.settings.build.targets;
    }

    invokeHook('run-dev-command', targets);
}
