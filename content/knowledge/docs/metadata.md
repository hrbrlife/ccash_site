---
title: "Metadata - Documentation"
type: "doc"
description: "CCASH platform configuration — site profile, entity metadata, and compliance configuration for money-services operations."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-06"
---

## Platform Configuration

CCASH uses structured metadata to describe platform configuration, entities, and compliance settings. Configuration is stored in the `site-profile.json` and in grain journal stores for operational use.

### Site Profile

The `site-profile.json` file parameterizes a CCASH instance for a specific operator brand. The same binary boots as any operator name by dropping this file into the grain:

- **Brand name** — The operator's brand as displayed throughout the console
- **Currencies** — Default production currencies (USD, EUR, GBP, JPY, INR fiat; USDT, USDC stablecoin; BTC, ETH crypto) plus test assets (devnet) for demos
- **Fees** — Fee schedules for transactions, swaps, and travel cheques
- **Approval tiers** — Risk thresholds for Low / Medium / High classification (default: high ≥ $10,000, medium ≥ $1,000)
- **Travel-cheque issuer** — Legal entity name printed on issued instruments
- **FAQ** — Operator-customizable FAQ entries

### Entity Metadata

Operating compartments carry entity metadata that describes their legal structure and configuration:

- **Entity Type** — Montana Series LLC structure
- **Jurisdiction** — US federal and Montana law
- **Governance Model** — Admin-managed with client-approval gates
- **Compliance Profile** — KYC requirements, transaction limits, risk classification

### Compliance Configuration

Compliance parameters are configured per operation:

- **Velocity Limits** — Maximum transfer volume per time window
- **Approval Tiers** — Risk thresholds and required OTP channels per tier
- **Currency Risk** — High-risk currency classifications (e.g., BTC, ETH, USDT, USDC)
- **Method Risk** — High-risk payment method classifications (swift, card, westernUnion)
- **Geography** — Permitted and restricted jurisdictions

### Configuration Governance

Platform configuration can be updated by administrators. On the shared platform, CCASH facilitates configuration changes. After graduation, the self-hosted instance owner has full control over all configuration.
