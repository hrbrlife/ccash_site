---
title: "Platform Overview - Documentation"
description: "Complete architectural overview of the CCASH platform - three pillars, grain architecture, and data sovereignty model."
ogImage: "/og-image.png"
keywords: ["platform architecture", "sandstorm grains", "cap'n proto", "data sovereignty", "legal infrastructure"]
stylesheets:
  - "/css/main.css"
  - "/css/pages/glossary.css"
  - "/css/pages/docs.css"
heroDesc: "The three-pillar architecture that powers money-services infrastructure — capability-secured grain design, journal-based storage, and cryptographic authority."
draft: false
date: "2026-05-15"
lastmod: "2026-05-15"
sitemap:
  priority: 0.5
  changefreq: "monthly"
ogtype: "article"
---
<p class="lead">CCASH's capability-secured grain architecture powers everything from the shared platform to your self-hosted instance.</p>
<h2>Architecture Overview</h2>
        <p>CCASH is not a monolith. It is not a microservices cluster. It is a <strong>capability-secured grain architecture</strong> — every component isolated at the OS level, every interaction mediated by cryptographic authority, every byte of data sovereign to its owner. This is what regulated infrastructure demands, and this is what we built.</p>
        <p>The platform rests on three pillars, each independently auditable, each doing exactly one job with absolute fidelity:</p>
        <pre><code>┌─────────────────────────────────────────────────────┐
│  Sandstorm/Melusina OS                               │
│  ┌───────────────┐  ┌───────────────┐                │
│  │ Station Grain  │  │ Instance Grain │               │
│  │ (Orchestrator) │  │ (Worker)       │               │
│  │                │  │                │               │
│  │ Go binary      │  │ Go binary      │               │
│  │ FD3 → Cap'n    │  │ FD3 → Cap'n    │               │
│  │ Proto RPC      │  │ Proto RPC      │               │
│  │                │  │                │               │
│  │ UiView Server  │  │ UiView Server  │               │
│  │ WebSession     │  │ WebSession     │               │
│  │ (HTMX+Templ)   │  │ (HTMX+Templ)   │               │
│  │                │  │                │               │
│  │ Journal Store  │  │ Journal Store  │               │
│  │ Workflow Engine │  │ Process Engine │               │
│  │ WebSocket Hub  │  │ WebSocket Hub  │               │
│  └───────┬───────┘  └───────┬───────┘                │
│          │ Powerbox           │ Powerbox               │
│          └───────────────────┘                         │
│         Cap'n Proto capabilities                       │
└─────────────────────────────────────────────────────┘</code></pre>
        <h2>The Three Pillars</h2>
        <h3>Pillar 1: CCASH Website - The Business Layer</h3>
        <p>The marketing site, legal templates, and product definition. This is where the legal infrastructure is made real — audience-specific landing pages, a comprehensive knowledge base, legal templates, and every piece of content that makes CCASH legible to the world.</p>
        <h3>Pillar 2: Melusina - The On-Chain Authority Layer</h3>
        <p>The <span class="glossary-term" data-term="melusina">Melusina</span> program is the on-chain truth. NFT-based licensing, credentialing, hierarchical access control from <span class="glossary-term" data-term="master-nft">Master NFT</span> down through Reseller, License, and Share layers. Threshold crypto operations for critical governance actions. Every role, every permission, every compliance credential — cryptographically attested.</p>
        <h3>Pillar 3: BLOOM_FINAL - The Application Engine</h3>
        <p>The grain runtime. Sandstorm/Melusina OS <span class="glossary-term" data-term="grain">grains</span>, <span class="glossary-term" data-term="cap-n-proto">Cap'n Proto</span> RPC, Go+HTMX native stack. Workflow orchestration. <span class="glossary-term" data-term="powerbox">Powerbox</span>-based capability sharing between grains. No SPA, no JavaScript framework churn — server-rendered HTML fragments over WebSession, every interaction authenticated at the capability level.</p>
        <h2>Grain Types</h2>
        <p>Multiple grain types compose the application surface. Each grain is an isolated process with its own journal store, its own capability set, its own security boundary:</p>
        <table>
            <thead>
                <tr>
                    <th>Grain</th>
                    <th>Type</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Root Grain</strong></td>
                    <td>Station</td>
                    <td>Administrative entry point — establishes the capability hierarchy and provides tools for further configuration and management.</td>
                </tr>
                <tr>
                    <td><strong>Governance Grain</strong></td>
                    <td>Station</td>
                    <td>Central governance hub — creates compartments, configures governance rules, monitors compliance across all operations.</td>
                </tr>
                <tr>
                    <td><strong>Workflow Grain</strong></td>
                    <td>Instance</td>
                    <td>Lifecycle management for a single operational workflow — configure parameters, manage participant lists, execute operations, track state.</td>
                </tr>
                <tr>
                    <td><strong>Verification Grain</strong></td>
                    <td>Instance</td>
                    <td>Complete identity verification workflow for a single participant — from submission through document verification to credential issuance.</td>
                </tr>
                <tr>
                    <td><strong>Dashboard Grain</strong></td>
                    <td>Station</td>
                    <td>Oversight console — view all compartments, manage workflows, sign operations, maintain audit trail.</td>
                </tr>
                <tr>
                    <td><strong>Participant Grain</strong></td>
                    <td>Instance</td>
                    <td>Personal dashboard for each participant — view portfolio, track operations, manage credentials, access documents.</td>
                </tr>
                <tr>
                    <td><strong>Tracking Grain</strong></td>
                    <td>Instance</td>
                    <td>Pipeline management — generate referral links, track introductions, calculate commissions, generate reports.</td>
                </tr>
            </tbody>
        </table>
        <p><strong>Station grains</strong> are orchestrators — long-lived, managing multiple workflows and participants. <strong>Instance grains</strong> are workers — one per entity (one per workflow, one per participant, one per verification), isolated and disposable.</p>
        <h2>Data Sovereignty Model</h2>
        <p>Data lives where it belongs. This is not a design preference — it is a regulatory requirement, and we enforce it architecturally:</p>
        <table>
            <thead>
                <tr>
                    <th>Data Layer</th>
                    <th>What Lives Here</th>
                    <th>What Never Lives Here</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Credential Layer</strong></td>
                    <td>Wallet balances, authority credentials, compliance flags, operation records</td>
                    <td>Names, addresses, document images, phone numbers, emails — <em>zero PII, ever</em></td>
                </tr>
                <tr>
                    <td><strong>In-Grain Journal</strong></td>
                    <td>Encrypted PII, verification documents, audit trails, business logic state</td>
                    <td>Credential state (that belongs to the authority layer)</td>
                </tr>
                <tr>
                    <td><strong>External Systems</strong></td>
                    <td>Positions, custody records (when integrated with external systems)</td>
                    <td>Internal platform state (the bridge maintains integrity)</td>
                </tr>
            </tbody>
        </table>
        <p>Every grain journal is encrypted at rest with AES-256. right-to-erasure is handled via cryptographic shredding — delete the encryption key, and the data is gone. Append-only journals enable deterministic replay for audit and disaster recovery. Seven-year retention for regulatory compliance, with automated purge after expiration.</p>
        <h2>Authentication Layers</h2>
        <p>Multiple layers of authentication, each building on the last. No single layer is sufficient — all must agree before any operation proceeds:</p>
        <ol>
            <li><strong>Cryptographic Signature</strong> — proves identity. The foundation.</li>
            <li><strong>NFT Verification</strong> — proves role authorization. You don't just have a credential; you hold the right NFT for the action you're requesting.</li>
            <li><strong>Sandstorm Session</strong> — proves grain access. The OS-level isolation ensures you can only reach grains you've been granted access to.</li>
            <li><strong>Powerbox Capability</strong> — proves inter-grain authority. A claim token becomes a sturdyRef, granting persistent, cross-session access to specific capabilities.</li>
        </ol>
        <p>This is defense in depth — not as a buzzword, but as architecture. Compromise one layer and three remain. See the <a href="/knowledge/docs/authentication/">Authentication documentation</a> for the complete model.</p>
        <h2>The Native Stack</h2>
        <p>Every grain runs Go compiled to a native binary. No HTTP bridge — <span class="glossary-term" data-term="cap-n-proto">Cap'n Proto</span> on file descriptor 3 (FD3) directly. The Go binary implements <code>UiView</code> and <code>WebSession</code> natively. HTMX delivers server-rendered HTML fragments — no SPA, no client-side routing, no JavaScript framework. Journal-based storage gives every grain an append-only log with deterministic replay. WebSocket connections flow through Cap'n Proto's <code>WebSession_WebSocketStream</code> for real-time updates.</p>
        <p>This is the stack. It is simple. It is fast. It is correct. And it will outlast every framework that ships between now and when you read this.</p>
    </div>
