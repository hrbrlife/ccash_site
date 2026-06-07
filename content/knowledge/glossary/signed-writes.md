---
title: "Signed Writes - Glossary"
category: "technology"
relatedTerms:
  - slug: audit-trail
    label: Audit Trail
  - slug: journal-store
    label: Journal Store
  - slug: approval-gate
    label: Approval Gate
date: "2026-06-01"
lastmod: "2026-06-01"
---

Signed Writes mean every state-changing action is cryptographically signed (Ed25519) before it is committed. On CCASH each ledger posting, approval, and configuration change is signed by the authority that initiated it and appended to the journal, producing a tamper-evident record. This makes the audit trail provable: who did what, when, and under whose authority.
