---
layout: "page"
title: "How It Works"
description: "How CCASH works — from multi-currency wallets and money movement to compliance and graduation. The complete lifecycle of a money-services operation on CCASH."
keywords: ["how it works", "CCASH platform", "money services", "wallets", "payments", "compliance", "graduation"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
scripts:
  - "/js/nav.js"
date: "2026-06-06"
lastmod: "2026-06-06"
sitemap:
  priority: 0.8
  changefreq: "monthly"
---

<section class="page-hero bg-soft">
    <span class="section-label">Platform</span>
    <h1 class="section-title">How CCASH Works</h1>
    <p class="section-desc">A complete money-services operator console — multi-currency wallets, money movement, travel cheques, compliance, and the path to independence.</p>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>The Operator Console</h2>
        <p>CCASH is a mobile-first back office for money-services operators. One console. Every operation. Here's what's in the box.</p>

        <h2>1. Multi-Currency Wallets</h2>
        <p>Hold and manage balances across fiat, stablecoin, and crypto in a single console. Default currencies include USD, EUR, GBP, JPY, INR (fiat); USDT, USDC (stablecoin); BTC, ETH (crypto). Every wallet is segregated per client with full balance visibility.</p>

        <h2>2. Send, Receive &amp; Swap</h2>
        <p><strong>Send.</strong> Initiate outbound transfers with a multi-step wizard. Risk-tiered OTP approval gates — every transaction classified Low, Medium, or High with appropriate verification. Settlement instructions minted per transaction, expiring in 48 hours.</p>
        <p><strong>Receive.</strong> Generate one-time payment links for inbound transfers. The payment-request flow creates a link the payer uses to complete the transfer. No stored payment instruments — every receive instruction is single-use.</p>
        <p><strong>Swap.</strong> Exchange one currency for another at the quoted FX rate. Both legs settle atomically — one balance is debited and the other credited in a single operation. No settlement risk.</p>

        <h2>3. OTC — Negotiated FX Deals</h2>
        <p>Execute negotiated foreign-exchange deals with counterparties. The OTC surface handles the full lifecycle — create a new deal, agree on rate and amounts, settle atomically across both legs. Unlike automated swap, OTC lets you negotiate terms directly, lock in agreed rates, and settle with full audit trail. Every deal is cryptographically signed by both parties.</p>

        <h2>4. Travel Cheques</h2>
        <p>Issue, redeem, convert, and cancel travel cheques — a tradable instrument under UCC Article 3. Full lifecycle management: issue to a payee, track outstanding instruments, process redemptions, convert between currencies, cancel when needed.</p>

        <h2>5. Approval Gates</h2>
        <p>Every money-movement instruction passes through risk-tiered approval:</p>
        <ul>
            <li><strong>Low risk</strong> — Standard transfers below $1,000. Standard OTP verification.</li>
            <li><strong>Medium risk</strong> — Transfers above $1,000 or higher-risk corridors. Enhanced OTP gate.</li>
            <li><strong>High risk</strong> — Transfers above $10,000, crypto currencies, or flagged methods. Multi-factor OTP plus four-eyes approval.</li>
        </ul>
        <p>High-risk currencies (BTC, ETH, USDT, USDC) and methods (SWIFT, card, Western Union) are automatically classified higher. Every threshold is configurable per operator.</p>

        <h2>6. Proof-of-Reserves</h2>
        <p>Cryptographically verifiable proof that assets match liabilities. The platform exposes a public verification endpoint (<code>/api/por/verify</code>) that allows independent verification of reserve coverage — any observer can confirm that the operator's stated balances match on-chain holdings. No trusted-third-party dependency. Part of the platform's commitment to verifiable trust.</p>

        <h2>7. Four-Eyes Control</h2>
        <p>Critical operations require two distinct signers. The operator drafts the transaction. The client reviews and approves. Both signatures are cryptographically chain-committed — the second signer verifies the first before adding their own. No single party can move money alone on protected operations.</p>

        <h2>8. Back Office</h2>
        <p>Cards, projects, recurring requests, and a filterable transaction history with per-transaction timeline. Contacts directory — identity-only (name, country, tax ID). No stored IBANs, card numbers, or crypto addresses. Every transaction mints fresh settlement instructions.</p>

        <h2>9. Compliance Operations</h2>
        <p>Operator-facing Know Your Customer / Know Your Business (KYC/KYB) intake and review screens for every client. Sanctions screening verdicts surfaced for operator review. Travel Rule envelope handlers for cross-border transfers. Transaction review dashboards with automated flagging of unusual patterns. Full Suspicious Activity Report / Suspicious Transaction Report (SAR/STR) drafting and filing workflow with tipping-off discipline.</p>

        <h2>10. The Seven User Roles</h2>
        <table>
            <thead><tr><th>Role</th><th>Side</th><th>What They Can Do</th></tr></thead>
            <tbody>
                <tr><td><strong>Admin</strong></td><td>Operator</td><td>Full access — manage users, contacts, wallets, settings. Draft for client approval. Mark settled.</td></tr>
                <tr><td><strong>Collaborator</strong></td><td>Operator</td><td>Draft for approval. Mark settled. Manage contacts and wallets. No user management or settings changes.</td></tr>
                <tr><td><strong>Auditor</strong></td><td>Both</td><td>Read-only across admin and client sides. Audit trail, approval history. Cannot mutate state.</td></tr>
                <tr><td><strong>Client</strong></td><td>Client</td><td>The account owner. Approves or rejects drafts. Initiates and approves own transactions.</td></tr>
                <tr><td><strong>Client Assistant</strong></td><td>Client</td><td>Drafts on the client's behalf. Every draft waits for explicit client confirmation.</td></tr>
                <tr><td><strong>Client View-Only</strong></td><td>Client</td><td>Read-only client view — for external accountants, bookkeepers, auditors-of-record.</td></tr>
                <tr><td><strong>Whitelabel Oversight</strong></td><td>Whitelabel</td><td>Aggregate operational metrics, queue depths, settlement times. Never sees end-client PII.</td></tr>
            </tbody>
        </table>

        <h2>11. Audit Trail</h2>
        <p>Every state-changing action is cryptographically signed (Ed25519) and logged to an append-only journal. Tamper-evident. Independently verifiable. Seven-year retention. Deterministic replay for audit and disaster recovery.</p>

        <h2>12. The Graduation Path</h2>
        <p>Start on CCASH's shared platform as a Client Series operating as an Agent Money Services Business (MSB) under CCASH's US Financial Crimes Enforcement Network (FinCEN) registration. When you're ready, choose your path:</p>
        <p><strong>Path A — Technology graduation.</strong> Deploy your own self-hosted CCASH instance on your infrastructure. Stay on CCASH's FinCEN registration. Your brand, your servers, your control. Reversible.</p>
        <p><strong>Path B — Legal graduation.</strong> Obtain your own FinCEN Money Services Business (MSB) registration and state money-transmitter licenses (MTLs). Leave CCASH's registration. Your own compliance program. Irreversible. We help you make the transition.</p>

        <h2>Life of a Transaction</h2>
        <p>Here's what happens when a client initiates a $15,000 wire transfer:</p>
        <ol>
            <li><strong>Draft.</strong> The operator's collaborator drafts the transfer — amount, currency, beneficiary, settlement method.</li>
            <li><strong>Risk classification.</strong> The platform classifies the transaction as High risk (above $10,000 threshold).</li>
            <li><strong>OTP gate.</strong> The system sends a one-time password to the client's registered channel.</li>
            <li><strong>Sanctions screening.</strong> Sender and beneficiary identities submitted for OFAC sanctions screening; verdict returned to the platform for operator review.</li>
            <li><strong>Four-eyes.</strong> The client reviews the draft and approves with their cryptographic signature. The collaborator's signature and the client's signature are chain-committed.</li>
            <li><strong>Settlement.</strong> One-time settlement instructions are minted. The transfer executes. Both legs post to the ledger.</li>
            <li><strong>Audit.</strong> The entire event — draft, classification, screening, signatures, settlement — is written to the append-only journal with cryptographic signatures. Immutable. Verifiable.</li>
            <li><strong>Travel Rule.</strong> If cross-border, the Travel Rule envelope is attached with originator and beneficiary information.</li>
        </ol>
    </div>
</section>

<section class="cta-section">
    <h2>Ready to see it in action?</h2>
    <p>Start on the shared platform. Graduate to your own. No lock-in.</p>
    <a href="mailto:legal@cca.sh?subject=CCASH%20Demo%20Request" class="btn btn-primary">Request a Demo</a>
</section>
