---
title: "Security Setup - Documentation"
type: "doc"
description: "CCASH operator-side security — Ed25519-signed writes, multi-party control, capability security, encrypted-at-rest storage, and least privilege."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Security Setup

<p>CCASH's security model is built into the operator-side architecture rather than bolted on. The same properties that make transactions trustworthy — signed writes, separation of authority, fine-grained capabilities, encrypted storage, and least privilege — apply to operating the instance itself. This page covers the operator-facing security controls; for the user-facing authentication model, see the <a href="/knowledge/docs/authentication/">Authentication documentation</a>.</p>

<h2>Ed25519-Signed Writes</h2>
<p>Every write operation is signed with an Ed25519 key pair before it is accepted. A signature proves the request originated from the holder of the corresponding private key, and the signed payload includes the action parameters and ordering information so a request cannot be replayed or reordered. Because each accepted write is persisted with its signature to an append-only audit log, the record is tamper-evident: an entry cannot be altered after the fact without invalidating its signature. See <a href="/knowledge/docs/back-office/">Back-Office Surfaces</a> for how the audit log surfaces these records.</p>

<h2>Multi-Party Control</h2>
<p>Authority on CCASH is deliberately split so that no single party can move funds alone. An initiator drafts a transaction; an approver — almost always client-side — authorizes it; and operator-side staff who draft and settle do not hold the authority to approve client transactions. Sensitive operations can require multiple authorized parties to sign before they execute. This separation, detailed across <a href="/knowledge/docs/roles/">Roles &amp; Permissions</a> and the <a href="/knowledge/docs/approvals/">Approvals documentation</a>, is enforced structurally, not by policy alone.</p>

<h2>Capability Security</h2>
<p>Components do not authenticate to each other with shared passwords or long-lived API keys. Each component holds only the specific capabilities it has been explicitly granted, and a capability conveys exactly one authority — fine-grained, revocable, and auditable. A component cannot reach a surface or perform an action for which it holds no capability, so the blast radius of any single compromised component is bounded by the narrow set of capabilities it was given.</p>

<h2>Encrypted-at-Rest Storage</h2>
<p>Operational data is encrypted at rest. The append-only journal that backs each surface — including the signed audit records — is stored encrypted, so a copy of the underlying storage is not readable without the keys. This protects records both in normal operation and in backup and disaster-recovery copies.</p>

<h2>Least Privilege</h2>
<p>Every role is granted the minimum authority required for its job and no more. The <code>collaborator</code> role can operate but cannot manage users or change fundamental settings; <code>auditor</code>, <code>client_view_only</code>, and <code>whitelabel_oversight</code> are read-only; and <code>whitelabel_oversight</code> additionally never sees end-client PII, with 22+ PII gates enforcing that boundary. Combined with capability security and multi-party control, least privilege ensures that authority is always scoped, observable, and recorded. The full role breakdown lives in <a href="/knowledge/docs/roles/">Roles &amp; Permissions</a>.</p>
