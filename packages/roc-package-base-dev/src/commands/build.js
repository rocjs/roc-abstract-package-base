import { invokeHook } from '../roc/util';

export default async function build({
    configObject,
    parsedArguments
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = configObject.settings.build.targets;
    }

    const builders = [];
    invokeHook('run-build-command', targets)(function getBuilder(builder) {
        builders.push(builder);
    });

    for (const builder of builders) {
        await builder();
    }
}
