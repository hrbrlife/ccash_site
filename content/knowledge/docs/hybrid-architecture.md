---
title: "Hybrid Architecture - Documentation"
type: "doc"
description: "CCASH's hybrid architecture — combining legal entity frameworks with capability-secured technology for money-services operations."
ogImage: "/og-platform.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Hybrid Architecture

CCASH operates at two layers simultaneously — legal infrastructure and technology platform — that work together as an integrated system. This hybrid architecture is what makes the graduation model possible.

### Legal Layer

The legal layer provides the entity structures, compliance frameworks, and governance documentation that underpin every money-services operation. On the shared platform, operations operate under CCASH's MSB registration. After graduation, the same legal frameworks can be adapted to the operator's own regulatory standing.

### Technology Layer

The technology layer is a capability-secured grain architecture running on Sandstorm/Melusina OS. Every component is an isolated grain with its own journal store, capability set, and security boundary. Grains communicate through Cap'n Proto RPC via the Powerbox — no HTTP bridges, no shared databases.

### How the Layers Connect

The legal and technology layers are not independent — they reinforce each other. Legal governance structures are enforced by technology controls. Compliance policies are encoded as on-chain transfer hooks. Audit logs from the technology layer satisfy legal record-keeping requirements. When you graduate to self-hosted, both layers transfer with you.

### Shared Platform Architecture

On the shared platform, multiple money-services operations operate on CCASH's infrastructure. Each economy is legally isolated through Series LLC architecture and technically isolated through grain boundaries. No economy can access another's data, capabilities, or compliance configuration.

### Self-Hosted Architecture

A self-hosted instance runs the same software stack on the operator's own infrastructure. The only difference is control — the operator manages their own deployment, infrastructure, and upgrades. The architecture is identical, ensuring graduation is a data migration, not a rewrite.
