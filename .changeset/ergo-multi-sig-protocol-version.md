---
'@rosen-bridge/ergo-multi-sig': major
---

`MultiSigHandler` now declares a `protocolVersion`, taken from this package's own version and signed/enforced by `Communicator`; guards on a different major multi-sig protocol version are rejected instead of processed
