# roc-package-core
Package forming an abstract foundation of the Roc ecosystem.  
The package serves as a base from which other packages within the ecosystem are to be constructed. It is therefore _never to be included_ as a direct dependency in app or component projects.  

## Exposes
In general; for a package to be considered valid it must export `rocPackageConfig` and `rocPackageMetaConfig`. It may or may not provide additional exports.

Please read the esdocs for details here (link pending).

### Runtime
Config: `rocPackageConfig`, `rocPackageMetaConfig`  
Commands: `listSettings`, `markdownSettings`

### Development
Used with [roc-package-core-dev](https://github.com/rocjs/roc-package-core/blog/master/dev/README.md)
