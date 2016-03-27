# roc-package-base-dev
Package forming an abstract foundation of the Roc ecosystem.  
The package serves as a base from which other `dev` packages within the ecosystem are to be constructed. It is therefore _never to be included_ as a direct dependency in app or component projects.  

## Exposes
In general; for a package to be considered valid it must export a `roc` object that will export the name of the package and an additional thing, [see documentation here](https://github.com/rocjs/roc/blob/master/docs/Extensions.md#general-structure).

It may or may not provide additional exports.

## Documentation
- [Action](/packages/roc-package-base-dev/docs/Actions.md)
- [Commands](/packages/roc-package-base-dev/docs/Commands.md)
- [Hooks](/packages/roc-package-base-dev/docs/Hooks.md)
- [Settings](/packages/roc-package-base-dev/docs/Settings.md)

## Runtime
Used with [roc-package-base](/packages/roc-package-base).
