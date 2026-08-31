---
'@rosen-bridge/communication': major
---

`Communicator` now requires each extending class to declare its own semantic-version `protocolVersion`; the version is included in the signed message payload and `handleMessage` rejects any message whose major version doesn't match the local one (minor/patch differences are treated as compatible)
