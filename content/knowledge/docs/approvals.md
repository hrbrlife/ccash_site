---
title: "Approval Gates & Multi-Party Control - Documentation"
description: "Risk-tiered, OTP-gated approval on CCASH — draft-to-approve-to-settle flow, four-eyes control, settlement instruction minting, and signed audit trail."
ogImage: "/og-docs.png"
keywords: ["approval gates", "OTP", "multi-party control", "four-eyes", "settlement instructions", "audit trail"]
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.5
  changefreq: "monthly"
ogtype: "article"
---
<p class="lead">No transfer settles on a single click. CCASH gates every movement of value behind a risk-tiered, OTP-protected approval step — and that approval step is what mints the settlement instructions a transfer needs to complete.</p>
<h2>Risk-Tiered OTP Approval</h2>
        <p>Approval is <strong>risk-tiered</strong>. The approval gate that applies to a transaction depends on its risk — driven by the value of the transfer and the risk classification of the counterparty. Higher-risk transactions face a stricter gate.</p>
        <p>The approval step is <strong>OTP-gated</strong>. To approve a transaction, the approver must supply a one-time password, proving possession of a second factor at the moment of sign-off. A transaction cannot leave the approval gate without a valid OTP. The thresholds that decide when OTP approval is required are part of the compliance configuration described in the <a href="/knowledge/docs/compliance-framework/">Compliance Framework</a>.</p>
        <h2>Draft → Approve → Settle</h2>
        <p>Approval sits in the middle of the transaction lifecycle. A transaction is drafted in the four-step wizard, then enters the lifecycle and queues at the approval gate before it can settle:</p>
        <ol>
            <li><strong>Draft</strong> — the operator builds the transaction in the four-step wizard and confirms it. The transaction is <code>initiated</code> and moves to <code>awaiting_approval</code>.</li>
            <li><strong>Approve</strong> — an approver clears the OTP-gated approval gate. The transaction becomes <code>approved</code>, and Settlement Instructions are minted at this moment.</li>
            <li><strong>Settle</strong> — the approved transfer completes against its settlement instructions and reaches the terminal <code>settled</code> state.</li>
        </ol>
        <p>The full set of lifecycle states and terminal outcomes is laid out in the <a href="/knowledge/docs/money-movement/">Send, Receive &amp; Swap documentation</a>.</p>
        <h2>Four-Eyes Multi-Party Control</h2>
        <p>The approval gate separates the operator who drafts a transaction from the approver who clears it. This is <strong>four-eyes control</strong>: the person who initiates a transfer is not the person who approves it, so no single individual can move value end to end on their own authority.</p>
        <p>Risk-tiered approval extends this into broader multi-party control — higher-risk transactions can require additional sign-off before they are released. The result is that value movement is always subject to more than one set of eyes, with the OTP requirement binding each approval to a specific person at a specific moment.</p>
        <h2>Approval Mints Settlement Instructions</h2>
        <p>The approval step is not just a checkpoint — it is the point at which payment routing comes into existence. When a transaction is approved, the platform <strong>mints its Settlement Instructions</strong>: the one-time, per-transaction routing details for that single transfer.</p>
        <p>These instructions <strong>expire 48 hours</strong> after they are minted. They are scoped to one transaction and are never stored against a contact for reuse — which is consistent with the identity-only contacts rule covered in the <a href="/knowledge/docs/wallets/">Wallets documentation</a>. Minting routing at approval time, with a short expiry, keeps sensitive payment data out of any standing directory and tightly bound to an approved transfer.</p>
        <h2>Signed Audit</h2>
        <p>Every state change in the approval flow — entering the gate, granting approval, minting settlement instructions, settling — is signed with a Solana Ed25519 key. Each row in the record carries a <code>SignerPubkey</code>, so the approval history is tamper-evident: you can verify who approved what, and when, against the signing key. This signed lifecycle feeds the seven-year audit trail described in the <a href="/knowledge/docs/compliance-framework/">Compliance Framework</a>. The cryptographic signing model itself is covered in the <a href="/knowledge/docs/authentication/">Authentication documentation</a>.</p>
    </div>
