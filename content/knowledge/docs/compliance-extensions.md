---
title: "Compliance Extensions - Documentation"
type: "doc"
description: "CCASH compliance extensions — on-chain enforcement of regulatory rules for community token economies."
ogImage: "/og-compliance.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Compliance Extensions

Compliance extensions are the mechanism by which CCASH enforces regulatory rules at the protocol level. Rather than relying on off-chain agreements and manual oversight, compliance rules are encoded directly into the token's transfer logic — making violations structurally impossible.

### Transfer Hooks

Every CCASH token carries a compliance extension that executes before any transfer. The hook inspects the sender, receiver, and amount against active compliance rules and either permits or denies the transfer atomically.

### Compliance Rules

CCASH supports configurable compliance rules per token economy:

- **Verification Requirements** — Minimum verification level for holders
- **Velocity Limits** — Maximum transfer volume per time window per participant
- **Whitelist/Blacklist** — Approved or excluded addresses
- **Geography Filters** — Restricted jurisdictions for holding or transferring
- **Freeze Authority** — Ability to halt transfers in emergencies

### Audit Trail

Every compliance check — pass or fail — is recorded in the grain's append-only journal. Failed checks include the reason for denial and the specific rule that triggered it. This creates a tamper-evident record suitable for regulatory examination.

### Configurability

Compliance rules are configured per token economy. A fan token's compliance rules differ from a loyalty token's, and both can be tuned by the token economy creator. On the shared platform, CCASH provides the compliance infrastructure. After graduation, you manage compliance on your own instance.
