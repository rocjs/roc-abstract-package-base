import log from 'roc/log/default/small';

import { invokeHook } from '../roc/util';

/**
 * Builds the project.
 */
export default async function build({
    context: { config },
    arguments: { managed },
}) {
    let { targets } = managed;

    if (!targets) {
        targets = config.settings.build.targets;
    }

    try {
        const builders = [];
        invokeHook('run-build-command', targets)((builder) => {
            builders.push(builder);
        });

        for (const builder of builders) {
            await builder();
        }
    } catch (error) {
        log.error('An error happened while building', error);
    }
}
