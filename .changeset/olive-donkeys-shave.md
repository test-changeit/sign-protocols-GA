---
'tss-api': major
'@rosen-bridge/keygen-service': major
---

Rename the trustKey concept to apiKey and send it as an `api-key` header on every request to the guard, instead of in the request body. The CLI flag is now `-apiKey`.
