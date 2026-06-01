---
layout: "page"
title: "Security"
description: "Security practices and responsible disclosure policy for CCASH."
keywords: ["security", "disclosure", "vulnerability", "responsible disclosure", "CCASH"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
scripts:
  - "/js/nav.js"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.4
  changefreq: "yearly"
---

<section class="page-hero bg-soft">
    <span class="section-label">Security</span>
    <h1 class="section-title">Security at CCASH</h1>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Security Principles</h2>
        <p>CCASH operates on least privilege, defense in depth, capability security, secrets-in-vault-only, multi-party controls on critical actions, and per-tenant isolation. These principles are enforced at the architecture level, not by policy alone.</p>

        <h2>Infrastructure Independence</h2>
        <p>CCASH runs on independent infrastructure, not big-tech cloud providers. This reduces supply chain risk and ensures that platform operations are not subject to the terms, policies, or outages of a single hyperscaler. Infrastructure is distributed across multiple independently-operated providers.</p>

        <h2>Encryption at Rest</h2>
        <p>All persistent data is stored using encrypted SQLite databases. Encryption keys are managed through a secure key hierarchy and are never stored alongside the data they protect. Each tenant's data is isolated and encrypted separately.</p>

        <h2>Signed Writes with Ed25519</h2>
        <p>Every write operation on the CCASH platform is signed using Ed25519 cryptographic signatures. This provides a tamper-evident audit trail for every state change, enabling independent verification of data integrity at any point in time. Signatures are verified before any write is committed.</p>

        <h2>No Single Point of Failure</h2>
        <p>The CCASH platform is designed with no single point of failure. Critical systems are redundantly distributed, failover is automated, and the platform continues operating through infrastructure disruptions. Multi-region and multi-provider strategies ensure availability.</p>

        <h2>Multi-Party Controls</h2>
        <p>Critical actions require authorization from multiple independent parties. This four-eyes (and where appropriate, n-eyes) principle ensures that no single individual can unilaterally perform sensitive operations. Authorization policies are enforced in code, not by convention.</p>

        <h2>Encryption in Transit</h2>
        <p>All communications with CCASH services are encrypted using TLS. Internal service-to-service communication is also encrypted. The platform does not transmit unencrypted sensitive data over any network.</p>

        <h2>Incident Response</h2>
        <p>CCASH maintains a documented incident response procedure covering detection, containment, eradication, recovery, and post-mortem analysis. Security incidents are escalated according to severity and are communicated to affected parties in accordance with applicable legal obligations.</p>

        <h2>Responsible Disclosure</h2>
        <p>If you discover a security vulnerability, please report it to <a href="mailto:security@cca.sh">security@cca.sh</a>. We commit to acknowledging receipt within 48 hours and providing an initial assessment within 5 business days. We ask that you refrain from publicly disclosing vulnerabilities until we have had a reasonable opportunity to address them.</p>
    </div>
</section>
