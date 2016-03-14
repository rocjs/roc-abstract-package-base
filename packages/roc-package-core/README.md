# roc-package-core
Package forming an abstract foundation of the Roc ecosystem.  
The package serves as a base from which other packages within the ecosystem are to be constructed. It is therefore _never to be included_ as a direct dependency in app or component projects.  

## Exposes
In general; for a package to be considered valid it must export a `roc` object that will export the name of the package and an additional thing, [see documentation here](#).

It may or may not provide additional exports.

## Documentation
- [Action](/packages/roc-package-core/docs/Actions.md) _(Has no actions)_
- [Commands](/packages/roc-package-core/docs/Commands.md)
- [Hooks](/packages/roc-package-core/docs/Hooks.md) _(Has no hooks)_
- [Settings](/packages/roc-package-core/docs/Settings.md) _(Has no settings)_

## Development
Used with [roc-package-core-dev](https://github.com/rocjs/roc-package-core/blob/master/packages/roc-package-core-dev/README.md).
