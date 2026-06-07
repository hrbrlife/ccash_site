---
title: "Client Series & Agent MSB - Documentation"
type: "doc"
description: "How a CCASH client launches as a Client Series under CCA.SH's FinCEN registration, what the Series owns, and the two no-lock-in graduation paths."
ogImage: "/og-platform.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Client Series & Agent MSB

Every client launches on CCASH as a dedicated Client Series. This is the legal counterpart to a whitelabel grain deployment: the grain runs the technology, and the Client Series provides the entity structure and money-services registration the deployment operates under. Each client gets its own series, legally isolated from every other client on the platform.

### CCA.SH Money Services (US) Series LLC

The parent entity is **CCA.SH Money Services (US) Series LLC**, a Montana Series LLC and a FinCEN-registered Money Services Business. CCASH's registration is **US federal (FinCEN) plus Montana only**. The Montana Series LLC structure is what makes per-client isolation possible: each series is a legally distinct cell within the same parent LLC, with its own assets, obligations, and segregated balances walled off from the others.

### Your Client Series

When you launch, CCASH provisions a dedicated Client Series for you — numbered in the **C-001 through C-999** range. Your Client Series operates as an **Agent MSB** under CCASH's FinCEN registration, pursuant to **31 CFR §1022.380**. In practical terms, you run a live money-services operation under CCA.SH's federal MSB registration from day one — you do not need your own registration to start.

Your Client Series is yours. It owns:

- **Your brand** — the name your customers see.
- **Your trade names** — the names your Client Series does business as.
- **Your domains** — the web addresses your deployment is served from.
- **Your end-customer relationships** — your customers are your customers, not CCASH's.
- **Your segregated balances** — funds held for your operation, isolated within your series.

CCASH provides the registration umbrella and the platform; the Client Series owns the franchise that runs on top of it.

### Operating as an Agent MSB

As an Agent MSB under 31 CFR §1022.380, your Client Series conducts money services under CCA.SH Money Services (US) Series LLC's FinCEN MSB registration. The compliance program — BSA/AML obligations, KYC, recordkeeping, and the travel rule — is enforced by the platform on every transfer, so the obligations that attach to the registration are met operationally rather than reconstructed by hand. How those controls gate money movement is covered in the [Send, Receive & Swap documentation](/knowledge/docs/money-movement/).

### Two Graduation Paths, No Lock-In

The Client Series is a starting point, not a cage. There are two independent graduation paths, and you can take them in either order, together, or not at all. Crucially, there is **no lock-in** on either path. The full model is described in the [Graduation Model documentation](/knowledge/docs/graduation-model/).

- **P8 — Deploy your own self-hosted instance (technology graduation).** Run the same grain binary on your own infrastructure. This is a technology move: you take control of your deployment while **staying on the platform** and continuing to operate under CCASH's FinCEN registration. Your brand, data, and balances come with you.
- **P3 — Obtain your own FinCEN registration plus state money-transmitter licenses (legal graduation).** Stand up your own US federal FinCEN MSB registration and the state money-transmitter licenses you need, then **depart** CCASH's registration umbrella and run under your own legal standing.

P8 is a technology graduation that keeps you on the platform; P3 is a legal graduation that lets you depart. Neither is required, neither blocks the other, and nothing in the platform makes either path impractical.

### No Lock-In, by Design

Because your Client Series owns your brand, trade names, domains, end-customer relationships, and segregated balances, there is nothing for CCASH to hold hostage. You can graduate your technology (P8), graduate your registration (P3), or both, on your own timeline. The platform exists to remove the barrier to entry — not to become a barrier to exit.
