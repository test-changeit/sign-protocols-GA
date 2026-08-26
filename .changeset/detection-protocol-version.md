---
'@rosen-bridge/detection': major
---

`GuardDetection` now declares a `protocolVersion`, taken from this package's own version and signed/enforced by `Communicator`; guards on a different major detection protocol version are rejected instead of processed
