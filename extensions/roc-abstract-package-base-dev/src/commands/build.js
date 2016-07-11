import { invokeHook } from '../roc/util';

/**
 * Builds the project.
 *
 * @property {object} config - The roc configuration object.
 * @property {object} parsedArguments - The parsed arguments from roc.
 */
export default async function build({
    context: { config },
    parsedArguments,
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = config.settings.build.targets;
    }

    const builders = [];
    invokeHook('run-build-command', targets)((builder) => {
        builders.push(builder);
    });

    for (const builder of builders) {
        await builder();
    }
}
