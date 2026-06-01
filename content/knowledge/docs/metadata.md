---
title: "Metadata - Documentation"
type: "doc"
description: "CCASH metadata structure — token metadata, entity metadata, and compliance metadata for community token economies."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Metadata

CCASH uses structured metadata to describe tokens, entities, and compliance configurations. Metadata is stored on-chain where it forms part of the tamper-evident record, and in grain journal stores for operational use.

### Token Metadata

Each community token carries metadata that describes its identity and rules:

- **Name** — Human-readable token name (e.g., "Fan Token", "Loyalty Points")
- **Symbol** — Short ticker symbol (e.g., "FAN", "LOYAL")
- **Decimals** — Number of decimal places for token amounts
- **Total Supply** — Maximum token supply (fixed or dynamic)
- **Metadata URI** — Pointer to off-chain metadata (image, description, links)

### Entity Metadata

Operating compartments carry entity metadata that describes their legal structure and configuration:

- **Entity Type** — Series LLC, DAO LLC, or other structure
- **Jurisdiction** — Governing law and regulatory framework
- **Governance Model** — Founder-led, council, or token-weighted
- **Compliance Profile** — KYC requirements, transaction limits, restricted jurisdictions

### Compliance Metadata

Compliance configurations are stored as metadata that the transfer hook reads before every transaction:

- **Velocity Limits** — Maximum transfer volume per time window
- **Whitelist** — Approved addresses for holding and transferring
- **Geography** — Permitted and restricted jurisdictions
- **Freeze Status** — Whether transfers are currently halted

### Metadata Governance

Token and compliance metadata can be updated through governance actions. On the shared platform, CCASH facilitates metadata updates. After graduation, the self-hosted instance owner has full control over all metadata.
