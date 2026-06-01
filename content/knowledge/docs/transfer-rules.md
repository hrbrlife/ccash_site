---
title: "Transfer Rules - Documentation"
type: "doc"
description: "CCASH transfer rules — compliance-enforced restrictions on token movement for community economies, from shared platform to self-hosted."
ogImage: "/og-compliance.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Transfer Rules

Transfer rules are the mechanism by which CCASH enforces compliance at the transaction level. Every token transfer must pass through the rule evaluation pipeline before execution. Rules are evaluated in order, and the first rule to deny the transfer halts processing immediately.

### Rule Pipeline

Transfer rules are evaluated in a deterministic sequence:

1. **Structural checks** — Does the token exist? Is the sender the legitimate owner? Is the receiver address valid?
2. **Authority verification** — Does the sender hold the required NFT permissions for this transaction type?
3. **Compliance filter** — Evaluate all active compliance rules against the transfer parameters
4. **Governance override** — Has a governance action authorized this specific transfer?
5. **Journal commit** — Record the transfer in the append-only journal

### Lock-Up Schedules

Tokens can be configured with time-based transfer restrictions:

- **Cliff lock-up** — No transfers permitted until a specified date
- **Vesting schedule** — Gradual release of transferable quantity over time
- **Holding period** — Minimum time an address must hold before transferring

### Velocity Controls

Velocity rules restrict the rate at which tokens can change hands:

- **Per-address limit** — Maximum transfer volume from a single address per period
- **Global limit** — Maximum total transfer volume across all holders per period
- **Concentration limit** — Maximum percentage any single address may hold

### Jurisdictional Filtering

When operating across jurisdictions, CCASH can restrict transfers based on geography:

- **Inbound restrictions** — Addresses in certain jurisdictions cannot receive the token
- **Outbound restrictions** — Holders in certain jurisdictions cannot transfer out
- **Cross-border limits** — Additional scrutiny for cross-jurisdictional transfers

### Audit Trail

Every rule evaluation produces a structured audit record: the rules evaluated, their outcomes, the data points that triggered any denial, and the timestamp. These records are queryable through the platform's audit API and exportable for regulatory review.
