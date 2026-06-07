---
layout: "page"
title: "Architecture"
description: "Architecture of the CCASH platform — legal entity structure, technology stack, and security architecture for money-services operations."
keywords: ["architecture", "technical", "legal architecture", "Go", "HTMX", "Melusina", "encrypted SQLite", "Ed25519", "CCASH"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.6
  changefreq: "monthly"
---

<p class="lead">The capability-secured grain architecture powers every stage of CCASH — from the shared platform to your self-hosted instance.</p>

<section class="page-hero bg-soft">
    <span class="section-label">Platform</span>
    <h1 class="section-title">Architecture</h1>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Legal Architecture</h2>
        <p>CCASH provides a legal entity framework built on established entity structures. Each operator operates within a defined legal structure with its own entity documentation, operating agreements, and governance procedures. Multi-entity configurations are supported with clearly defined relationships between entities, authority hierarchies, and governance models. Compliance policies and operational procedures are documented and maintained as part of the legal framework.</p>

        <h2>Technology Architecture</h2>
        <p>The CCASH technology platform is built on a Go backend serving an HTMX frontend. The application is compiled into a single static binary with no JavaScript build step, no container runtime dependency, and no external database server. Data is stored in an encrypted SQLite database at rest, with each write operation signed using Ed25519 keys for tamper evidence. The platform integrates with the Melusina operating system identity gate for cross-application authorization and envelope verification.</p>

        <h2>Security Architecture</h2>
        <p>Every write operation on the CCASH platform is cryptographically signed using Ed25519 keys. This creates a tamper-evident audit trail where every action can be independently verified. Multi-party signing controls ensure that critical operations require authorization from multiple authorized parties. Access controls operate on least-privilege principles with role-based permissions and defined authority tiers. The encrypted SQLite database provides data-at-rest protection, and all access is logged and signed.</p>

        <h2>Deployment Model</h2>
        <p>The CCASH platform deploys as a single static Go binary. No JavaScript build step, no container orchestration, no database configuration. The binary includes the HTMX frontend, the Go backend, and the encrypted SQLite storage layer. Deployment targets include traditional servers, virtual machines, and Sandstorm platform packages (.spk format).</p>

        <h2>Audit Trail</h2>
        <p>Every action on the platform is recorded in the cryptographic audit trail. Each audit entry includes the action performed, the actor identity, a timestamp, and a Ed25519 signature. The audit trail can be verified independently, providing complete transparency for regulatory review and auditor access.</p>
    </div>
</section>
