---
'@rosen-bridge/communication': major
---

`Communicator` now requires each extending class to declare its own `protocolVersion`; the version is included in the signed message payload and `handleMessage` rejects any message whose version doesn't match the local one
