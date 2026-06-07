---
title: "Security"
type: "page"
layout: "security"
description: "Security architecture and practices protecting CCASH infrastructure, platform, and client data."
keywords:
  - security
  - platform security
  - data protection
  - infrastructure security
ogImage: "/og-security.png"
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
    <h1 class="section-title">Security Architecture</h1>
    <p class="section-desc">How CCASH protects platform infrastructure, client operations, and data — from cryptographic signing to encrypted storage to multi-party control.</p>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Security by Design</h2>
        <p>CCASH security is built in, not bolted on. Every state-changing action is cryptographically signed. Every audit row carries a verifiable signature. No stored payment instruments — every transaction mints one-time settlement instructions that expire in 48 hours. Access controls are enforced at the application layer with role-based permissions.</p>

        <h2>Key Security Properties</h2>
        <ul>
            <li><strong>Cryptographically signed audit trail.</strong> Every state change is signed and logged to an append-only journal. Tamper-evident. Independently verifiable. Seven-year retention.</li>
            <li><strong>No stored payment instruments.</strong> Contacts are identity-only — name, country, tax ID. No IBANs, card numbers, or crypto addresses on file. Every transaction mints fresh, one-time settlement instructions.</li>
            <li><strong>Encrypted at rest.</strong> All data is encrypted at rest using per-operator keys. Encrypted SQLite database with envelope encryption anchored to per-grain key material.</li>
            <li><strong>Risk-tiered approval gates.</strong> Every transaction is classified Low, Medium, or High by amount, currency, and method. Each tier requires step-up verification — OTP, biometric, or multi-party approval.</li>
            <li><strong>Multi-party (four-eyes) control.</strong> Critical operations require two distinct signers. The second signer's approval is cryptographically chain-committed to the first. No single party can move money alone on protected operations.</li>
            <li><strong>Role-based access.</strong> Seven distinct roles with enumerated permissions — from admin to view-only auditor. Every action attributed to one person.</li>
        </ul>

        <h2>Infrastructure Security</h2>
        <p>The CCASH platform runs on Melusina grain architecture — each client account is an isolated grain with its own encrypted storage, capability-based inter-grain communication, and no shared database surface. Capability-security discipline governs every cross-grain call.</p>
    </div>
</section>
