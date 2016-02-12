# Hooks for `roc-package-core-dev`

## Hooks
* [roc-package-core-dev](#roc-package-core-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)

## roc-package-core-dev

### after-clean

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

### before-clean

Hook point for adding code that runs before the clean command is invoked.

__Initial value:__ _Nothing_  
__Expected return value:__ `[String]`

#### Arguments

| Name     | Description                                    | Type |
| -------- | ---------------------------------------------- | ---- |
| settings | The settings object that is received from Roc. | `{}` |

