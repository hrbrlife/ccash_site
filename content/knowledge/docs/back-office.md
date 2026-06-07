---
title: "Back-Office Surfaces - Documentation"
type: "doc"
description: "CCASH back-office surfaces — Cards, Projects, Recurring, Requests, the filterable History log, and the signed Audit log."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Back-Office Surfaces

<p>Beyond drafting and approving transactions, CCASH provides a set of light back-office surfaces for organising work and keeping a complete, examinable record. These surfaces are deliberately thin — they organise and reference transactions rather than introducing a parallel ledger. Every state change they produce flows through the same draft-and-approve path (see the <a href="/knowledge/docs/approvals/">Approvals documentation</a>) and is captured in the audit log.</p>

<h2>Cards</h2>
<p>The Cards surface lists the payment cards associated with the account. It is a reference view for back-office staff: cards can be browsed and selected when drafting a transaction that involves a card, and their status is visible alongside the rest of the account's instruments. As with every operational surface, who can act here depends on role — see <a href="/knowledge/docs/roles/">Roles &amp; Permissions</a>.</p>

<h2>Projects</h2>
<p>Projects group related transactions under a single label so that work spanning many movements can be tracked together. A project is an organisational container: transactions can be attached to a project, and the project view rolls them up for review and reporting. Projects do not change how a transaction is authorized — each underlying transaction still passes through its own approval.</p>

<h2>Recurring</h2>
<p>The Recurring surface manages transactions that repeat on a schedule. A recurring entry defines the template for a repeating movement; each occurrence is materialised as an ordinary draft when it comes due, which then waits for approval exactly like a one-off transaction. Nothing settles automatically without passing the same gates.</p>

<h2>Requests</h2>
<p>Requests are inbound asks for a transaction — a way to record that someone has requested funds move, before any draft is created. A request can be reviewed and turned into a draft by an authorised user, at which point it joins the normal initiate-and-approve flow. The request itself carries no authority to move funds; it is a prompt, not an instruction.</p>

<h2>History</h2>
<p>History is the filterable transaction log. Every transaction the account has produced appears here and can be filtered — by status, type, date range, counterparty, project, and the other attributes the platform records. History is the primary surface for finding a given transaction.</p>
<p>Each entry in History opens a full <strong>per-transaction timeline</strong>: who drafted it, who approved or rejected it, when it was marked settled, and every intermediate state change in order. The timeline is the human-readable narrative of a single transaction's life, drawn from the same signed records that populate the audit log.</p>

<h2>Audit Log</h2>
<p>The audit log is the system of record for change. Every state change on the platform — a draft created, an approval granted, a settlement recorded, a wallet or contact edited, a fundamental setting changed — is signed with an Ed25519 signature and persisted to an append-only store. This makes the log tamper-evident: an entry cannot be altered or removed after the fact without breaking its signature.</p>
<p>Where History is the operational, filterable view of transactions, the audit log is the complete, cryptographically attested record of <em>all</em> state changes, suitable for examination. Read-only roles such as <code>auditor</code> and <code>client_view_only</code> can review it without any ability to mutate it. For the cryptographic details behind signed writes, see the <a href="/knowledge/docs/security/">Security Setup documentation</a> and the <a href="/knowledge/docs/authentication/">Authentication documentation</a>.</p>
