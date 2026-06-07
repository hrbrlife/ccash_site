---
title: "Roles & Permissions - Documentation"
type: "doc"
description: "CCASH roles and permissions — the seven user roles across admin, client, and whitelabel surfaces, with a full capability matrix."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Roles &amp; Permissions

<p>CCASH defines seven distinct user roles across three surfaces — the admin side run by the operator, the client side used by the account owner and their delegates, and a single pseudonymous oversight role for the whitelabel brand team. Every role maps to a precise set of capabilities, and every state change a role performs is signed and persisted to the audit log.</p>
<p>Two terms recur throughout the platform. The <strong>initiator</strong> is the user who drafts a transaction. The <strong>approver</strong> is the user who authorizes it — almost always client-side. A draft never moves on its own; it waits for an approver. See the <a href="/knowledge/docs/approvals/">Approvals documentation</a> for the full draft-to-settlement flow.</p>

<h2>Admin-Side Roles</h2>
<p>Admin-side roles belong to the operator running the instance. They draft and operate, but the authority to approve client funds stays with the client.</p>

<h3>admin</h3>
<p>Full operational access. An <code>admin</code> can manage users, contacts, and wallets; draft transactions for client approval; mark approved transactions as settled; and change fundamental settings (the configuration the grain reads on boot — legal identity, currencies, fees, approval thresholds, support contact, FAQ). This is the highest-privilege role on the operator side. See <a href="/knowledge/docs/configuration/">Configuration</a> for what fundamental settings cover.</p>

<h3>collaborator</h3>
<p>An operational delegate. A <code>collaborator</code> can draft transactions for approval, mark transactions settled, and manage contacts and wallets. A collaborator <strong>cannot</strong> manage users and <strong>cannot</strong> change fundamental settings — those remain reserved to <code>admin</code>.</p>

<h3>auditor</h3>
<p>Read-only across <em>both</em> the admin and the client side. An <code>auditor</code> can see every record and every transaction timeline but cannot mutate any state — no drafting, no approving, no settling, no configuration changes. This role exists for internal review and examination without granting any write authority.</p>

<h2>Client-Side Roles</h2>
<p>Client-side roles belong to the account owner and the people they delegate to. The defining property of this surface is that authority to approve transactions against the client's funds lives here, not with the operator.</p>

<h3>client</h3>
<p>The account owner — one or more authorised persons on the account. A <code>client</code> can approve or reject drafts submitted for their account, and can initiate and approve their own transactions. This is the role that holds final authority over the movement of the client's funds.</p>

<h3>client_assistant</h3>
<p>A delegate who acts on the client's behalf. A <code>client_assistant</code> can draft transactions for the client, but every draft waits for the client's explicit confirmation before it can proceed. An assistant cannot self-approve — the confirmation gate is structural.</p>

<h3>client_view_only</h3>
<p>A read-only client view, intended for external accountants, bookkeepers, and auditors-of-record. A <code>client_view_only</code> user sees the client's records and transaction history but cannot draft, approve, or settle anything.</p>

<h2>Whitelabel Role</h2>

<h3>whitelabel_oversight</h3>
<p>The whitelabel brand team's role. <code>whitelabel_oversight</code> is a pseudonymous, view-only role across operational metrics. It <strong>never</strong> sees end-client personally identifiable information — 22+ PII gates enforce this boundary throughout the stack, so the brand team can monitor operations without ever touching customer identity data. See the <a href="/knowledge/docs/whitelabel-deployment/">Whitelabel Deployment documentation</a> for how this role fits a branded deployment.</p>

<h2>Permissions Matrix</h2>
<p>The matrix below summarises what each role can do. "Draft" means initiate a transaction for approval; "Approve" means authorize a draft so it can proceed; "Mark settled" means record an approved transaction as completed; "Manage users" means create and administer other users; "Manage wallets" means manage wallets and contacts; "Read-only" means the role cannot mutate state; "Sees PII" means the role can view end-client personally identifiable information.</p>
<table>
    <thead>
        <tr>
            <th>Role</th>
            <th>Draft</th>
            <th>Approve</th>
            <th>Mark settled</th>
            <th>Manage users</th>
            <th>Manage wallets</th>
            <th>Read-only</th>
            <th>Sees PII</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>admin</strong></td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>collaborator</strong></td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>auditor</strong></td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>client</strong></td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>client_assistant</strong></td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>client_view_only</strong></td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><strong>whitelabel_oversight</strong></td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
        </tr>
    </tbody>
</table>
<p>Read the matrix by surface. The admin side (<code>admin</code>, <code>collaborator</code>, <code>auditor</code>) drafts and operates but does not approve client transactions. The client side (<code>client</code>, <code>client_assistant</code>, <code>client_view_only</code>) holds approval authority, with the <code>client</code> as the only approver. The whitelabel side (<code>whitelabel_oversight</code>) is the sole role barred from end-client PII, and it is purely observational. Identity for every role is established cryptographically; see the <a href="/knowledge/docs/authentication/">Authentication documentation</a>.</p>
