---
'@rosen-bridge/tss': major
---

`TssSigner` now declares a `protocolVersion`, taken from this package's own version and signed/enforced by `Communicator`; guards on a different major tss protocol version are rejected instead of processed
