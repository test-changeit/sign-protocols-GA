# @rosen-bridge/ergo-multi-sig

## 1.0.7

### Patch Changes

- - Avoid sending messeges to own guard which causes signing issues
  - Sign() only starts the signing process when it is the correct turn

## 1.0.6

### Patch Changes

- Improve transaction state cleaning when turn changes

## 1.0.4

### Patch Changes

- Fix input verification of singed tx

## 1.0.3

### Patch Changes

- Update license to MIT
- Updated dependencies
  - @rosen-bridge/communication@1.0.2
  - @rosen-bridge/encryption@0.1.2
  - @rosen-bridge/detection@1.0.2

## 1.0.2

### Patch Changes

- Fix key mixing of TSS and Ergo

## 1.0.1

### Patch Changes

- Remove unused packages and update dependencies

- Updated dependencies
  - @rosen-bridge/communication@1.0.1
  - @rosen-bridge/detection@1.0.1
  - @rosen-bridge/encryption@0.1.1

## 1.0.0

### Major Changes

- Made Ergo MultiSignature procedure more efficient
- Refactor constructor interfaces, add messageEnc and remove unnecessary secrets

### Patch Changes

- Updated dependencies
  - @rosen-bridge/communication@1.0.0
  - @rosen-bridge/detection@1.0.0
