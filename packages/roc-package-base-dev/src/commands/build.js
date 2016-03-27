import { invokeHook } from '../roc/util';

export default function build({
    configObject,
    parsedArguments
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = configObject.settings.build.targets;
    }

    invokeHook('run-build-command', targets);
}
