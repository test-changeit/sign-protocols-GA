---
'@rosen-bridge/tss': major
---

`TssSigner` now declares a `protocolVersion` ('1.0'), signed and enforced by `Communicator`; guards on a different tss protocol version are rejected instead of processed
