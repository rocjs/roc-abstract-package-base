import { invokeHook } from '../roc/util';

export default function dev({
    configObject,
    parsedArguments
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = configObject.settings.build.targets;
    }

    invokeHook('run-dev-command', targets);
}
