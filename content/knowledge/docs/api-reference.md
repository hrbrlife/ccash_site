---
title: "API Reference - Documentation"
type: "doc"
description: "CCASH platform API reference — capability-based endpoints for wallets, money movement, verification, and governance."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-06"
---

## API Reference

The CCASH platform provides capability-based APIs for programmatic access to wallet, money-movement, and compliance operations. This reference covers the available endpoints and their usage.

### Authentication

API access requires a valid capability token. Tokens are issued per-session through the Powerbox and grant access only to the specific capabilities they encode. No API key, no shared secret — every request carries its own authority.

### Wallet Management

- **List Wallets** — Query wallets and balances across fiat, stablecoin, and crypto currencies
- **Get Wallet** — Retrieve wallet details including balance, currency, and transaction history
- **Create Wallet** — Provision a new multi-currency wallet for a client

### Money Movement

- **Send** — Initiate an outbound transfer with risk-tiered approval gate. Returns settlement instructions valid for 48 hours.
- **Receive** — Generate a one-time payment link for inbound transfers. Payment-request flow with expiry.
- **Swap** — Exchange one currency for another with quoted FX rate. Both legs settle atomically.

### Travel Cheques

- **Issue** — Create a travel cheque with specified amount, currency, and payee
- **Redeem** — Present a travel cheque for redemption
- **Convert** — Convert a travel cheque between currencies
- **Cancel** — Cancel an outstanding travel cheque

### Identity & Verification

- **Verify Identity** — Initiate KYC/KYB verification for a client
- **Check Status** — Query verification status for any participant
- **Update Profile** — Update client profile metadata

### Approval Gates

- **Check Approval** — Determine the approval tier for a proposed transaction (Low / Medium / High)
- **Submit OTP** — Submit one-time password for transaction approval
- **Request Co-Signer** — Request four-eyes approval from a second authorized party

### Compliance

- **Screen Transaction** — Run a proposed transaction through sanctions screening
- **Monitor Activity** — Query recent flagged transactions
- **Export Audit Trail** — Export cryptographically signed audit trail for regulatory review
- **Travel Rule Envelope** — Attach originator/beneficiary data to a qualifying cross-border transfer

### Governance

- **List Roles** — Query user roles and permissions for the current operation
- **Update Permissions** — Modify role assignments (admin only)

### Contacts

- **List Contacts** — Query the identity-only contacts directory
- **Create Contact** — Add a contact (name, country, tax ID — no stored payment instruments)
- **Update Contact** — Update contact details
