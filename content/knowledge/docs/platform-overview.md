---
title: "Platform Architecture - Documentation"
description: "High-level overview of CCA.SH's platform architecture, system components, data flows, and integration points."
type: "doc"
heroDesc: "How CCA.SH's multi-entity, multi-Series structure provides legal separation, regulatory compliance, and operational efficiency."
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.5
  changefreq: "yearly"
---

<div class="docs-content">
    <h2>Architecture Overview</h2>
    <p>CCA.SH's platform is built on a two-entity structure: the CCA.SH Master Series LLC (FinCEN-registered principal MSB) contains Client Series (C-###) each paired with a standalone Partner LLC owned by the Whitelabel-Client.</p>

    <h2>Key Components</h2>
    <ul>
        <li><strong>Fineract Tenant:</strong> Dedicated core banking system tenant per Whitelabel-Client</li>
        <li><strong>Hot and Cold Wallets:</strong> Segregated per-Series, multi-signature, HSM-backed</li>
        <li><strong>Correspondent Sub-Accounts:</strong> Per-Whitelabel-Client at each banking partner</li>
        <li><strong>Melusina OS Identity Gate:</strong> Shared module for on-chain authorization and four-eyes enforcement</li>
        <li><strong>AITX:</strong> AI-assisted compliance workflow procedures</li>
    </ul>

    <h2>Security Architecture</h2>
    <p>Least privilege, defense in depth, capability security, secrets-in-vault-only, four-eyes on critical actions, and per-file isolation. All mutating endpoints verify admin envelopes through the shared Melusina OS identity gate.</p>
</div>
