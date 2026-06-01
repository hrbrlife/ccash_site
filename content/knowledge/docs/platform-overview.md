---
title: "Platform Architecture - Documentation"
description: "High-level overview of CCASH's platform architecture, dual-layer model, system components, and security."
type: "doc"
heroDesc: "How CCASH's dual-layer model provides legal infrastructure and technology platform capabilities for regulated financial services."
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
    <h2>Dual-Layer Model</h2>
    <p>CCASH is built on a dual-layer architecture. The <strong>legal infrastructure layer</strong> provides the entity structure, governance framework, and compliance policies. The <strong>technology platform layer</strong> provides the Go + HTMX application stack, encrypted data layer, and deployment tooling. Operators deploy within this combined framework, benefiting from both the legal foundation and the technology platform.</p>

    <h2>Entity Structure and Governance</h2>
    <p>The legal infrastructure layer defines an entity model with clear role separation. Operators establish their operating entities within this framework, with defined governance roles, approval workflows, and policy infrastructure. The four-eyes principle ensures that critical actions require multi-person approval.</p>

    <h2>Go + HTMX Application Architecture</h2>
    <p>The technology platform is built with Go for the backend and HTMX for the frontend, providing a modern, performant application stack. Key components include:</p>
    <ul>
        <li><strong>Go Backend:</strong> High-performance API server with built-in middleware for authentication, authorization, and audit logging</li>
        <li><strong>HTMX Frontend:</strong> Lightweight, hypermedia-driven interface that delivers a responsive user experience without heavy JavaScript frameworks</li>
        <li><strong>Encrypted SQLite Data Layer:</strong> Per-operator encrypted SQLite databases providing data isolation at rest</li>
        <li><strong>Deployment Tooling:</strong> Automated deployment scripts and configuration management</li>
    </ul>

    <h2>Security Model</h2>
    <p>The CCASH security model is built on least-privilege access, defense in depth, and cryptographic verification:</p>
    <ul>
        <li><strong>Solana Signatures:</strong> Critical actions require on-chain signature verification through Solana, providing a cryptographic audit trail</li>
        <li><strong>Encrypted SQLite:</strong> All data at rest is encrypted using per-operator keys, ensuring data isolation even at the storage layer</li>
        <li><strong>Four-Eyes Approval:</strong> Multi-person authorization for sensitive operations</li>
        <li><strong>Audit Trail:</strong> All actions are logged with cryptographic verification for non-repudiation</li>
    </ul>

    <h2>Data Isolation</h2>
    <p>Each operator's data is isolated at multiple levels. The encrypted SQLite data layer ensures that no operator can access another operator's data. Access controls are enforced at the application layer, and all data access is logged and auditable.</p>
</div>
