---
title: "API Reference - Documentation"
type: "doc"
description: "CCASH platform API reference — capability-based endpoints for community token management, verification, and governance."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## API Reference

The CCASH platform provides capability-based APIs for programmatic access to community token operations. This reference covers the available endpoints and their usage.

### Authentication

API access requires a valid capability token. Tokens are issued per-session through the Powerbox and grant access only to the specific capabilities they encode. No API key, no shared secret — every request carries its own authority.

### Token Management

- **Create Token** — Deploy a new community token with specified parameters (supply, decimals, metadata)
- **Transfer Token** — Execute a token transfer subject to compliance checks (velocity, whitelist, geography)
- **Freeze Token** — Temporarily halt transfers for a specific token or address (governance action)
- **Burn Token** — Permanently remove tokens from circulation

### Identity

- **Verify Identity** — Initiate KYC/KYB verification for a community member
- **Check Status** — Query verification status for any participant
- **Update Profile** — Update community member metadata

### Governance

- **Propose** — Submit a governance proposal for token holder vote
- **Vote** — Cast a vote on an active proposal
- **Execute** — Execute an approved governance action
- **Query** — List active and historical proposals

### Compliance

- **Configure Rules** — Set compliance parameters for a token (velocity limits, whitelist, geography)
- **Monitor Activity** — Query recent flagged transactions
- **Export Records** — Export audit trail for regulatory review
