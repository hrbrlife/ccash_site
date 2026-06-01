---
title: "Token Standard - Documentation"
type: "doc"
description: "CCASH token standard — compliance-enabled SPL tokens with metadata, transfer hooks, and governance extensions for community economies."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Token Standard

CCASH tokens are built on top of the SPL token standard with compliance extensions that enforce regulatory rules at the protocol level.

### Base Standard

Tokens follow the SPL token standard for compatibility with the broader Solana ecosystem. Standard fields include mint authority, freeze authority, supply, decimals, and metadata.

### Compliance Extensions

CCASH tokens carry additional compliance fields that the transfer hook reads before every transaction:

- **Compliance Config PDA** — On-chain account encoding the token's compliance rules
- **Identity Requirements** — Required verification level for holders (none, basic, standard, enhanced)
- **Governance Authority** — The NFT or multi-signature arrangement that can update token parameters

### Metadata

Token metadata follows the SPL metadata standard with CCASH-specific extensions for regulatory and governance information. Metadata is stored both on-chain (for tamper-evidence) and in grain journal stores (for operational access).

### Migration

Token standard upgrades are governed by the token's governance authority. On the shared platform, CCASH manages standard compliance. After graduation, the self-hosted operator has full control over token standards and upgrades.
