---
'@rosen-bridge/tss': patch
---

Verify the signature (and, for ECDSA, its recovery id) against the chain's trusted public key before accepting a TSS sign result delivered via `handleSignData`
