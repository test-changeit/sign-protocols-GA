---
'@rosen-bridge/ergo-multi-sig': patch
---

- Avoid sending messeges to own guard which causes signing issues
- Sign() only starts the signing process when it is the correct turn
