---
title: "Getting Started - Documentation"
description: "Your onboarding guide to the CCASH platform - choose your role, complete verification, and start working with the platform."
ogImage: "/og-image.png"
keywords: ["getting started", "onboarding", "verification", "deployment", "configuration", "grain provisioning"]
stylesheets:
  - "/css/main.css"
  - "/css/pages/glossary.css"
  - "/css/pages/docs.css"
heroDesc: "From deployment to your first operation on the platform - everything you need to get moving with CCASH."
draft: false
date: "2026-05-15"
lastmod: "2026-05-15"
sitemap:
  priority: 0.5
  changefreq: "monthly"
ogtype: "article"
---
<h2>Welcome to CCASH</h2>
        <p>CCASH is a legal infrastructure and technology platform for regulated financial services. It provides entity frameworks, compliance operations, and a Go + HTMX application platform — all designed to deploy on your own infrastructure. CCASH enables regulated operators to establish and run compliant financial services with full control over their data and operations.</p>
        <p>This guide walks you through deploying and configuring the platform: from infrastructure setup to your first operational workflow. If you want the full architectural picture first, start with the <a href="/knowledge/docs/platform-overview/">Platform Overview</a>.</p>
        <h3>What You Need</h3>
        <ul>
            <li>A Linux server (bare metal, VM, or cloud instance)</li>
            <li>Domain name and TLS certificate for your deployment</li>
            <li>Administrative access to configure DNS and networking</li>
            <li>For compliance workflows: identity verification procedures and documentation</li>
        </ul>
        <h2>Deployment Options</h2>
        <p>CCASH can be deployed in multiple configurations depending on your operational requirements. Every deployment uses the same core platform components, with configuration determining the operational scope.</p>
        <table>
            <thead>
                <tr>
                    <th>Deployment Type</th>
                    <th>Typical Use Case</th>
                    <th>Infrastructure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Single Instance</strong></td>
                    <td>Small-scale operations, testing, evaluation</td>
                    <td>Single Linux server</td>
                </tr>
                <tr>
                    <td><strong>Distributed</strong></td>
                    <td>Production operations with multiple compartments</td>
                    <td>Multiple servers with network isolation</td>
                </tr>
                <tr>
                    <td><strong>High Availability</strong></td>
                    <td>Mission-critical operations requiring redundancy</td>
                    <td>Clustered deployment with load balancing</td>
                </tr>
            </tbody>
        </table>
        <h2>Step 1: Infrastructure Setup</h2>
        <p>Deploy the CCASH platform on your chosen infrastructure. The platform runs on standard Linux distributions and requires no specialized hardware. Setup involves provisioning your server, configuring networking and DNS, and installing the CCASH platform components.</p>
        <p>During setup, the platform provisions a root grain that serves as your administrative entry point. This grain establishes the foundational capability hierarchy and provides the tools for further configuration.</p>
        <h2>Step 2: Configure Entity Framework</h2>
        <p>CCASH provides pre-built legal entity frameworks that you can configure for your operational needs. The platform supports Series LLC and DAO LLC structures, each providing legal isolation between operational compartments.</p>
        <p>Configuration includes defining your entity structure, establishing governance rules, and setting up participant roles. Each role receives specific capabilities through the NFT authority hierarchy.</p>
        <h2>Step 3: Configure Compliance Workflows</h2>
        <p>Set up your compliance operations including identity verification procedures, document management, and audit trail configuration. Compliance workflows are configurable to meet your regulatory requirements.</p>
        <p>The compliance framework includes:</p>
        <ul>
            <li>Identity verification workflows with document upload and verification</li>
            <li>Configurable risk assessment and screening procedures</li>
            <li>Audit trail generation with append-only journal storage</li>
            <li>Regulatory reporting templates</li>
        </ul>
        <h2>Step 4: Provision Operational Grains</h2>
        <p>With the platform deployed and configured, provision the operational grains needed for your specific use case. Each grain is an isolated process with its own journal store, capability set, and security boundary.</p>
        <h3>Station Grains (Orchestrators)</h3>
        <p>Long-lived components that manage multiple workflows and participants. Station grains provide dashboards, coordination, and oversight functions.</p>
        <h3>Instance Grains (Workers)</h3>
        <p>Per-entity components that handle specific workflows. One per operation, one per participant — isolated and sovereign.</p>
        <h2>Authentication Model</h2>
        <p>Every action on CCASH passes through multiple authentication layers. No single layer is sufficient — all must agree before any operation proceeds:</p>
        <ol>
            <li><strong>Cryptographic Signature</strong> - Proves identity via cryptographic key. The foundation of the authentication model.</li>
            <li><strong>NFT Verification</strong> - Proves role authorization. Your credential must hold the correct NFT for the action you are requesting.</li>
            <li><strong>Grain Session</strong> - Proves component access. OS-level isolation ensures you can only reach grains you have been granted access to.</li>
            <li><strong>Powerbox Capability</strong> - Proves inter-grain authority. A claim token becomes a sturdyRef, granting persistent cross-session access to specific capabilities.</li>
        </ol>
        <p>This is defense in depth — not as a buzzword, but as architecture. Compromise one layer and three remain. See the <a href="/knowledge/docs/authentication/">Authentication documentation</a> for the complete model.</p>
        <h2>Next Steps</h2>
        <p>Your CCASH platform is deployed and configured. Here is where to go from here:</p>
        <ul>
            <li><a href="/knowledge/docs/platform-overview/">Platform Overview</a> - The three-pillar architecture, grain types, and data sovereignty model</li>
            <li><a href="/knowledge/docs/compliance-framework/">Compliance Framework</a> - Identity verification, audit trails, and regulatory reporting</li>
            <li><a href="/knowledge/docs/authentication/">Authentication</a> - The multi-layer authentication model in detail</li>
            <li><a href="/knowledge/docs/hybrid-architecture/">Hybrid Architecture</a> - How legal and technology layers interoperate</li>
            <li><a href="/knowledge/docs/api-reference/">API Reference</a> - Cap'n Proto schemas and programmatic access</li>
        </ul>
    </div>
