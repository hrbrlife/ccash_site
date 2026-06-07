---
title: "Configuration - Documentation"
type: "doc"
description: "CCASH configuration — the site-profile.json model the grain reads on boot to set legal identity, currencies, fees, FAQ, and approval thresholds."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Configuration

<p>A CCASH instance is configured through a single declarative file, <code>site-profile.json</code>, that the grain reads on boot. The profile is the source of truth for the instance's identity and operating parameters — the grain loads it at startup and applies it across every surface. Changing fundamental settings means changing this profile, an action reserved to the <code>admin</code> role (see <a href="/knowledge/docs/roles/">Roles &amp; Permissions</a>).</p>

<h2>What the Profile Sets</h2>
<p>The <code>site-profile.json</code> model groups configuration into a small number of areas:</p>
<table>
    <thead>
        <tr>
            <th>Area</th>
            <th>What it configures</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Legal identity</strong></td>
            <td>The operator's legal name, legal status, and registered office. These appear across the instance wherever the operating entity must be identified.</td>
        </tr>
        <tr>
            <td><strong>Currencies</strong></td>
            <td>The set of currencies the instance operates in, used when drafting transactions and presenting balances.</td>
        </tr>
        <tr>
            <td><strong>Fees</strong></td>
            <td>The fee schedule applied to transactions on the instance.</td>
        </tr>
        <tr>
            <td><strong>Support contact</strong></td>
            <td>The support contact details surfaced to users of the instance.</td>
        </tr>
        <tr>
            <td><strong>FAQ</strong></td>
            <td>The frequently-asked-questions content presented on the instance.</td>
        </tr>
        <tr>
            <td><strong>Approval thresholds</strong></td>
            <td>The value thresholds that govern when additional approval is required before a transaction can proceed. These feed the draft-and-approve flow described in the <a href="/knowledge/docs/approvals/">Approvals documentation</a>.</td>
        </tr>
    </tbody>
</table>

<h2>Read on Boot</h2>
<p>The grain reads <code>site-profile.json</code> when it starts. The values it contains are not scattered across the codebase or hard-coded — they live in one place and take effect when the grain boots with that profile. This keeps the instance's legal identity, currencies, fees, support contact, FAQ, and approval thresholds in a single auditable file.</p>

<h2>Who Can Change It</h2>
<p>Editing the profile is changing fundamental settings, so it is restricted to <code>admin</code>. The <code>collaborator</code> role can operate the instance — draft, mark settled, manage wallets and contacts — but cannot change these fundamental settings. Read-only roles cannot change them at all. Because a profile change is a state change, it is signed and recorded in the audit log like any other; see the <a href="/knowledge/docs/security/">Security Setup documentation</a>.</p>
