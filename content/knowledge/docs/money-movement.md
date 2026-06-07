---
title: "Send, Receive & Swap - Documentation"
description: "CCASH money movement — Send, Receive, and Swap flows, four-step wizard, settlement instructions at approval with 48-hour expiry, and transaction lifecycle."
ogImage: "/og-docs.png"
keywords: ["send", "receive", "swap", "money movement", "settlement instructions", "transaction lifecycle"]
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
<p class="lead">Money moves on CCASH through three core flows — Send, Receive, and Swap — plus travel cheques. Each core flow is a four-step wizard, and each transaction follows a single, signed lifecycle from initiation to settlement.</p>
<h2>The Three Core Flows</h2>
        <p>Every movement of value between a workspace and a counterparty, or between a workspace's own wallets, is one of three flows:</p>
        <ul>
            <li><strong>Send</strong> — an outbound movement from the workspace to a contact. The operator initiates it; value leaves the workspace wallet and is routed to the counterparty.</li>
            <li><strong>Receive</strong> — an operator-initiated inbound request. The operator raises the request, and value moves from the contact into the workspace wallet.</li>
            <li><strong>Swap</strong> — an internal wallet-to-wallet FX book transfer. Value moves between the workspace's own wallets, converting from one currency to another within the book.</li>
        </ul>
        <p>Alongside these three is a fourth movement type, travel cheques, which buy and redeem SBR-issued instruments against the wallet. See the <a href="/knowledge/docs/travel-cheques/">Travel Cheques documentation</a> for how they fit in.</p>
        <h2>The Four-Step Wizard</h2>
        <p>Each core flow — Send, Receive, and Swap — runs as the same four-step wizard. The operator works through the steps in order, and the transaction is not committed for execution until the wizard is complete:</p>
        <ol>
            <li><strong>Select</strong> — choose the counterparty (a contact, for Send and Receive) or the source and destination wallets (for Swap).</li>
            <li><strong>Amount</strong> — enter the amount and the asset, including the currency pair for a Swap.</li>
            <li><strong>Review</strong> — confirm the details before the transaction is initiated.</li>
            <li><strong>Confirm</strong> — submit the transaction, which enters the lifecycle and proceeds to the approval gate.</li>
        </ol>
        <p>Because contacts are identity-only, the wizard never reads stored payment instruments off a contact record — there are none. The routing details a transfer needs are produced later, as settlement instructions minted at approval time.</p>
        <h2>Settlement Instructions</h2>
        <p>Settlement Instructions are the one-time, per-transaction payment routing details for a single transfer. They are <strong>minted at approval time</strong> — the approval step is what produces them — and they are scoped to exactly one transaction.</p>
        <p>Settlement Instructions <strong>expire 48 hours after they are minted</strong>. They are not standing payment data: they exist only for the window in which the approved transfer is expected to settle, and they are not persisted against a contact for reuse. This keeps payment routing out of the standing contact directory and limits its lifetime to the transaction at hand. The approval step that mints them, and the OTP gate that guards approval, are described in the <a href="/knowledge/docs/approvals/">Approval Gates documentation</a>.</p>
        <h2>Transaction Lifecycle</h2>
        <p>Every transaction — Send, Receive, or Swap — moves through a single lifecycle. It begins when the wizard is confirmed and ends in a terminal state. Each state change is signed with a Solana Ed25519 key, so the lifecycle itself is a tamper-evident record.</p>
        <table>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Kind</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>initiated</code></td>
                    <td>Active</td>
                    <td>The transaction has been confirmed in the wizard and entered the lifecycle.</td>
                </tr>
                <tr>
                    <td><code>awaiting_approval</code></td>
                    <td>Active</td>
                    <td>The transaction is queued at the approval gate, pending OTP-gated sign-off.</td>
                </tr>
                <tr>
                    <td><code>approved</code></td>
                    <td>Active</td>
                    <td>Approval has been granted; Settlement Instructions are minted at this point.</td>
                </tr>
                <tr>
                    <td><code>settled</code></td>
                    <td>Terminal</td>
                    <td>The transfer has completed and balances reflect the movement.</td>
                </tr>
                <tr>
                    <td><code>failed</code></td>
                    <td>Terminal</td>
                    <td>The transfer did not complete.</td>
                </tr>
                <tr>
                    <td><code>cancelled</code></td>
                    <td>Terminal</td>
                    <td>The transaction was cancelled before settlement.</td>
                </tr>
            </tbody>
        </table>
        <p>The active path runs <code>initiated</code> → <code>awaiting_approval</code> → <code>approved</code> → <code>settled</code>. The terminal states are <code>settled</code>, <code>failed</code>, and <code>cancelled</code>; once a transaction reaches a terminal state it does not move again. Every one of these state changes carries a <code>SignerPubkey</code>, building the signed audit trail described in the <a href="/knowledge/docs/compliance-framework/">Compliance Framework</a>. The compliance checks each transfer must pass before it can settle are enforced through the platform's transfer compliance engine.</p>
    </div>
