# roc-package-core-dev
Package forming an abstract foundation of the Roc ecosystem.  
The package serves as a base from which other `dev` packages within the ecosystem are to be constructed. It is therefore _never to be included_ as a direct dependency in app or component projects.  

## Exposes
In general; for a package to be considered valid it must export a `roc` object that will export the name of the package and an additional thing, [see documentation here](#).

It may or may not provide additional exports.

## Documentation
- [Action](/packages/roc-package-core-dev/docs/Actions.md)
- [Commands](/packages/roc-package-core-dev/docs/Commands.md)
- [Hooks](/packages/roc-package-core-dev/docs/Hooks.md)
- [Settings](/packages/roc-package-core-dev/docs/Settings.md)

## Runtime
Used with [roc-package-core](/packages/roc-package-core).