---
layout: "page"
title: "Deployment"
description: "Technical deployment appendix — how the CCA.SH operator console is deployed for a Series."
keywords: ["deployment", "technical", "setup", "configuration"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.5
  changefreq: "yearly"
---

<section class="page-hero bg-soft">
    <span class="section-label">Platform</span>
    <h1 class="section-title">Deployment</h1>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Deployment Cycle</h2>
        <p>Each Whitelabel Partner Series deployment follows the Melusina Services Nuclear Deployment Cycle. The deployment provisions: the Fineract Tenant, segregated wallets (on-chain authorized per D-CON-01), correspondent sub-accounts, the operator console grain, and compliance infrastructure.</p>

        <h2>Day-1 Gate</h2>
        <p>A Series does not go live until every correspondent in its declared routing footprint has a provisioned sub-account. This gate ensures operational readiness before any customer is onboarded.</p>

        <h2>Wallet Provisioning</h2>
        <p>Multi-signature HSM-backed hot and cold wallets per Series. Sidecar-approval mechanism for on-chain authorization. CCA.SH operates the keys exclusively — no self-custody on Series flows.</p>
    </div>
</section>
