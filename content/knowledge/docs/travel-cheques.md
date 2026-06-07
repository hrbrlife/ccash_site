---
title: "Travel Cheques - Documentation"
description: "CCASH travel cheques — ChequeBuy debits a wallet for an SBR-issued cheque, ChequeRedeem credits a wallet from one, alongside Send, Receive, and Swap."
ogImage: "/og-docs.png"
keywords: ["travel cheques", "ChequeBuy", "ChequeRedeem", "SBR", "money movement", "wallet"]
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
<p class="lead">Travel cheques convert wallet value into a portable SBR-issued instrument and back again. They sit alongside Send, Receive, and Swap as a fourth way value moves on CCASH.</p>
<h2>What a Travel Cheque Is</h2>
        <p>A travel cheque is an SBR-issued instrument that represents value held outside the day-to-day wallet balances. Value enters and leaves a travel cheque through two operations — buying one and redeeming one — each of which moves value directly against a wallet.</p>
        <h2>ChequeBuy — Wallet Debit to SBR Cheque</h2>
        <p><strong>ChequeBuy</strong> takes value out of a wallet and puts it into a travel cheque:</p>
        <ul>
            <li>The wallet is <strong>debited</strong> by the cheque amount.</li>
            <li>An <strong>SBR-issued travel cheque</strong> is created for that value.</li>
        </ul>
        <p>The net effect is a wallet debit in exchange for an SBR-issued travel cheque.</p>
        <h2>ChequeRedeem — SBR Cheque to Wallet Credit</h2>
        <p><strong>ChequeRedeem</strong> reverses the movement, bringing value back from a travel cheque into a wallet:</p>
        <ul>
            <li>An <strong>SBR-issued travel cheque</strong> is redeemed.</li>
            <li>The wallet is <strong>credited</strong> by the cheque amount.</li>
        </ul>
        <p>The net effect is a wallet credit drawn from an SBR-issued travel cheque.</p>
        <h2>Where Travel Cheques Fit in Money Movement</h2>
        <p>The three core money-movement flows — Send, Receive, and Swap — move value between a workspace and a contact, or between a workspace's own wallets. Travel cheques are the fourth movement type: instead of moving value to a counterparty or between wallets, they convert wallet value to and from an SBR-issued instrument.</p>
        <ul>
            <li><strong>ChequeBuy</strong> is an outbound conversion: wallet balance becomes a travel cheque.</li>
            <li><strong>ChequeRedeem</strong> is an inbound conversion: a travel cheque becomes wallet balance.</li>
        </ul>
        <p>The three core flows and their four-step wizard are described in the <a href="/knowledge/docs/money-movement/">Send, Receive &amp; Swap documentation</a>. Like every other transfer, travel-cheque movements are subject to compliance enforcement through the platform's transfer compliance engine — see the <a href="/knowledge/docs/compliance-framework/">Compliance Framework</a> — and each state change is signed into the tamper-evident audit trail with a <code>SignerPubkey</code>.</p>
    </div>
