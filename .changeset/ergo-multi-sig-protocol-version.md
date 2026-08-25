---
'@rosen-bridge/ergo-multi-sig': major
---

`MultiSigHandler` now declares a `protocolVersion` ('1.0'), signed and enforced by `Communicator`; guards on a different multi-sig protocol version are rejected instead of processed
