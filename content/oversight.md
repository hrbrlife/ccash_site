---
title: "Oversight"
type: "page"
layout: "oversight"
description: "Governance, monitoring, and oversight mechanisms ensuring integrity of CCASH platform operations."
keywords:
  - oversight
  - governance
  - monitoring
  - platform integrity
  - compliance oversight
ogImage: "/og-oversight.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/glossary.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.8
  changefreq: "monthly"
---

<section class="page-hero bg-soft">
    <span class="section-label">Platform</span>
    <h1 class="section-title">Oversight &amp; Governance</h1>
    <p class="section-desc">How CCASH maintains platform integrity through governance controls, monitoring, and the whitelabel oversight role — aggregate visibility without compromising end-client privacy.</p>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Governance Structure</h2>
        <p>The CCASH platform operates under a Manager-managed governance model. CCASH serves as Manager of the master Series LLC with enumerated authority over regulatory compliance, platform integrity, and operational safety. Each whitelabel client's Partner LLC — a separate Montana LLC the client owns and controls — carries the client's brand, domains, and documentation, with CCASH holding a Manager's Delegate supervisory role scoped to regulatory and platform matters.</p>

        <h2>Whitelabel Oversight Role</h2>
        <p>The whitelabel oversight role gives whitelabel brand teams aggregate operational visibility across their client base — operational metrics, queue depths, settlement times, and branding configuration. It is explicitly designed to never expose end-client personally identifiable information (PII) or compliance-sensitive surfaces. A build-failing architectural test enforces this PII discipline on every new mutating handler.</p>

        <h2>Multi-Party Governance (Four-Eyes Control)</h2>
        <p>Critical platform operations require two distinct signers with cryptographic signature verification. This applies to: high-value transactions above threshold, Know Your Customer (KYC) final approval, sanctions-hit override decisions, refunds over threshold, Manager resolutions, capital-adequacy attestation, Anti-Money Laundering (AML) annual approval, and Suspicious Activity Report (SAR) filing. The second signer's payload is cryptographically chain-committed to the first.</p>

        <h2>Audit &amp; Monitoring</h2>
        <p>Every state-changing action is cryptographically signed and logged to an append-only, tamper-evident audit journal with seven-year retention. The auditor role provides read-only access across both operator and client sides — audit trails, approval histories, and transaction logs — without the ability to mutate state. Platform monitoring surfaces aggregate operational metrics for oversight without exposing individual client data.</p>
    </div>
</section>
