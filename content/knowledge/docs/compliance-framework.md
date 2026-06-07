---
title: "Compliance Framework - Documentation"
description: "KYC/KYB intake, sanctions screening, transaction review, Travel Rule, four-eyes control, and 7-year signed audit trail — compliance for money-services."
ogImage: "/og-image.png"
keywords: ["compliance", "KYC", "AML", "sanctions screening", "audit trail", "Travel Rule", "four-eyes", "MSB compliance"]
stylesheets:
  - "/css/main.css"
  - "/css/pages/glossary.css"
  - "/css/pages/docs.css"
heroDesc: "Compliance enforced at every layer — because paper policies don't stop non-compliant transactions."
draft: false
date: "2026-02-24"
lastmod: "2026-06-06"
sitemap:
  priority: 0.5
  changefreq: "monthly"
ogtype: "article"
---
<p class="lead">The CCASH compliance framework travels with you — from the shared platform to your own self-hosted instance. Compliance is built in at every stage of the graduation journey.</p>
<h2>KYC / KYB Verification</h2>
        <p>Every client on the CCASH platform completes identity verification before any transaction can occur. The platform supports configurable verification tiers:</p>
        <ul>
            <li><strong>Basic verification</strong> — Email and identity document. For low-value, low-risk activity.</li>
            <li><strong>Standard verification</strong> — Identity document upload plus biometric verification (via integrated identity infrastructure). For standard money-services operations.</li>
            <li><strong>Enhanced due diligence (EDD)</strong> — Full KYC/KYB with source of funds, beneficial ownership, and background checks. Required for high-risk verticals and high-value transactions.</li>
        </ul>
        <p>Verification credentials carry cryptographic proofs — <strong>zero personally identifiable information</strong> is exposed in transit. The platform verifies identity status without revealing the underlying data.</p>
        <p>Credentials expire. When the expiry date passes, the platform rejects new transactions until a fresh verification is completed. The system tracks expiration windows and triggers re-verification workflows proactively.</p>
        <h2>Sanctions Screening</h2>
        <p>The platform integrates with dedicated compliance screening infrastructure that screens identities and transactions against OFAC sanctions lists. The platform surfaces screening verdicts at key checkpoints:</p>
        <ul>
            <li><strong>Onboarding</strong> — Client identity intake submitted for screening before account activation; verdict surfaced for operator review</li>
            <li><strong>Transaction initiation</strong> — Sender and receiver screened on every money-movement instruction; the platform receives and enforces the screening verdict</li>
            <li><strong>Ongoing review</strong> — Periodic re-screening of the client base against updated lists; results surfaced in the compliance dashboard</li>
        </ul>
        <p>Sanctions hits are surfaced in the compliance review queue for operator action. No automated override.</p>
        <h2>Transaction Review &amp; Risk Classification</h2>
        <p>Every transaction passes through a risk-tiered classification that surfaces operator-facing review responsibilities:</p>
        <ul>
            <li><strong>Low risk</strong> — Standard fiat transfers below threshold. Standard verification.</li>
            <li><strong>Medium risk</strong> — Transfers above $1,000 or involving higher-risk corridors. Enhanced verification.</li>
            <li><strong>High risk</strong> — Transfers above $10,000, crypto currencies, or flagged corridors. Multi-factor verification plus four-eyes approval required.</li>
        </ul>
        <p>Risk classification considers: transaction amount, currency pair, sender/receiver jurisdictions, and client risk rating. The platform flags unusual patterns — velocity spikes, structuring attempts, high-risk geography shifts — for operator review.</p>
        <h2>Travel Rule Compliance</h2>
        <p>Cross-border transfers carry Travel Rule envelope data as required under 31 CFR §1022.380. The platform's envelope handlers attach originator and beneficiary information to every qualifying transfer. For VASP-to-VASP transfers, the envelope protocol ensures both sides exchange the required identity information before settlement.</p>
        <p>Travel Rule data is cryptographically signed, logged to the audit trail, and retained for the regulatory period.</p>
        <h2>Four-Eyes Control</h2>
        <p>Critical operations require <strong>two distinct signers</strong> with cryptographic signature verification:</p>
        <ul>
            <li>High-value transactions above threshold</li>
            <li>KYC final approval</li>
            <li>Sanctions-hit override decisions</li>
            <li>Refunds over threshold</li>
            <li>SAR filing decisions</li>
        </ul>
        <p>The operator drafts. The client approves. Both signatures are chain-committed — the second signer verifies the first signature before adding their own. No single party can act alone on protected operations.</p>
        <h2>Regulatory Reporting</h2>
        <p>The platform generates the following regulatory reports, automated where possible, human-reviewed where required:</p>
        <table>
            <thead>
                <tr>
                    <th>Report</th>
                    <th>Authority</th>
                    <th>Frequency</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Suspicious Activity Report (SAR)</strong></td>
                    <td>FinCEN</td>
                    <td>As needed</td>
                    <td>Automated flagging based on transaction patterns, with human compliance officer review before filing. Tipping-off discipline enforced.</td>
                </tr>
                <tr>
                    <td><strong>Currency Transaction Report (CTR)</strong></td>
                    <td>FinCEN</td>
                    <td>Per transaction</td>
                    <td>Filed for cash transactions exceeding $10,000. Generated from platform transaction records.</td>
                </tr>
                <tr>
                    <td><strong>Agent List</strong></td>
                    <td>FinCEN</td>
                    <td>Annual (Jan 1)</td>
                    <td>Updated list of Agent MSBs operating under CCASH's FinCEN registration, retained ≥ 5 years.</td>
                </tr>
                <tr>
                    <td><strong>Transaction Ledger Export</strong></td>
                    <td>Internal / Auditors</td>
                    <td>On demand</td>
                    <td>Complete transaction history pulled from the cryptographically signed ledger. Immutable, verifiable, exportable.</td>
                </tr>
            </tbody>
        </table>
        <h2>Audit Trail</h2>
        <p>Every action across the platform is logged. This is not optional, not configurable, not something that can be turned off:</p>
        <pre><code>AuditEvent {
    id,                    // Unique event identifier
    timestamp,             // Precise event time
    severity,              // info, warning, critical
    category,              // auth, transfer, compliance, governance
    actor_id,              // Actor identity
    actor_role,            // admin, collaborator, auditor, client, etc.
    action,                // What was done
    resource,              // What it was done to
    success,               // Whether the action succeeded
    error_message,         // Why it failed (if applicable)
    signer_pubkey,         // Ed25519 public key of the signer
    metadata               // Additional context (JSON)
}</code></pre>
        <p><strong>Seven-year retention</strong> — required under the Bank Secrecy Act for MSB records. Every audit event is written to an append-only journal, encrypted at rest with AES-256. After the retention period, automated purge with legal-hold override ensures data is retained only as long as required.</p>
        <p>The audit trail is not just for regulators. It is the system's memory. Append-only journals support deterministic replay — given the same sequence of events, the system reconstructs identical state. This is how disaster recovery works: restore the journal, replay the events, verify the state. The log <em>is</em> the truth.</p>
    </div>
