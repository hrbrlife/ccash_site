---
title: "Wallets - Documentation"
description: "Multi-currency CCASH wallets — fiat, stablecoin, and crypto balances, workspace dashboard, identity-only contacts that store no payment instruments."
ogImage: "/og-docs.png"
keywords: ["wallets", "multi-currency", "stablecoin", "crypto", "balances", "dashboard", "contacts"]
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
<p class="lead">A CCASH wallet is multi-currency by design. A single wallet holds fiat, stablecoin, and crypto balances side by side, and the workspace dashboard surfaces everything an operator needs to act on at a glance.</p>
<h2>Multi-Currency Wallets</h2>
        <p>Every wallet on the platform can hold three classes of asset at once:</p>
        <ul>
            <li><strong>Fiat</strong> — currency balances such as US Dollar, tracked to the cent.</li>
            <li><strong>Stablecoin</strong> — fiat-referenced digital currency such as USD Coin.</li>
            <li><strong>Crypto</strong> — native digital assets held directly in the wallet.</li>
        </ul>
        <p>Each asset a wallet holds carries its own balance line. A wallet is not pinned to one currency or one asset class — fiat, stablecoin, and crypto coexist in the same wallet, each with its own independent balance. The asset metadata behind each balance (name, symbol, decimals, asset type) is described in the <a href="/knowledge/docs/metadata/">Metadata documentation</a>.</p>
        <h2>Balances</h2>
        <p>The wallet exposes a per-asset balance for every currency it holds. Balances reflect settled state: a balance changes only when a transaction reaches its terminal <code>settled</code> state. Funds tied up in transactions that are still <code>initiated</code>, <code>awaiting_approval</code>, or <code>approved</code> are not yet reflected as available balance. The full transaction lifecycle that drives these balance changes is covered in the <a href="/knowledge/docs/money-movement/">Send, Receive &amp; Swap documentation</a>.</p>
        <h2>The Dashboard</h2>
        <p>The workspace dashboard is the operator's home view. It pulls the wallet's state together into a single screen:</p>
        <ul>
            <li><strong>Total balance</strong> — the aggregate value across all of the wallet's fiat, stablecoin, and crypto balances.</li>
            <li><strong>Quick actions</strong> — direct entry points into the core money-movement flows: Send, Receive, and Swap.</li>
            <li><strong>Recent activity</strong> — the latest transactions, showing their current lifecycle state so the operator can see what is awaiting approval, what has settled, and what failed or was cancelled.</li>
        </ul>
        <p>From the dashboard, an operator can read the wallet's position and launch any of the four-step money-movement wizards without leaving the screen.</p>
        <h2>Contacts Are Identity-Only</h2>
        <p>Contacts on the platform are <strong>identity records, not payment records</strong>. A contact captures only who a counterparty is:</p>
        <ul>
            <li><strong>Name</strong> — the counterparty's name.</li>
            <li><strong>Country</strong> — the counterparty's country.</li>
            <li><strong>Email</strong> — a contact email address.</li>
            <li><strong>Self-description</strong> — an optional free-text description.</li>
        </ul>
        <p>The platform stores <strong>no payment instruments against a contact</strong>. There are no IBANs, no card numbers, and no crypto addresses held on a contact record. A contact tells you <em>who</em> you are dealing with — never <em>how</em> the money moves.</p>
        <p>Payment routing is never persisted on the contact. Instead, the routing details for any given transfer are minted fresh at approval time as one-time Settlement Instructions that expire in 48 hours. This keeps sensitive payment data out of the standing contact directory entirely. See the <a href="/knowledge/docs/money-movement/">Send, Receive &amp; Swap documentation</a> for how settlement instructions are produced, and the <a href="/knowledge/docs/approvals/">Approval Gates documentation</a> for the approval step that mints them.</p>
        <p>Because contacts hold identity only, the compliance checks that gate transactions — KYC validity, jurisdiction whitelisting, sanctions screening — operate on verified identity rather than on stored account numbers. The <a href="/knowledge/docs/compliance-framework/">Compliance Framework</a> describes how identity drives transfer enforcement.</p>
    </div>
