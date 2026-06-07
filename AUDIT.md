# CCASH Site Audit & Repositioning Plan

**Status:** Audit complete — awaiting founder approval before any edits.
**Date:** 2026-06-01
**Canonical working copy:** `/home/user/sailsto_website/ccash_site/` (active `main`).
**Do not edit:** `/home/user/.local/share/Trash/files/ccash_site/` — stale Trash duplicate.

---

## 0. The core correction

The site was wrongly reframed (commit `62e3757 "reframe for community tokenization audience"`) as a **community tokenization platform**. It is not. Verified against the real product (`/home/user/Desktop/ccash_go_htmx`) and the legal entity docs (`/home/user/Desktop/CCASH_Legal`):

**CCASH is a whitelabel MSB / PSP / VASP + Corporate Treasury platform with a path to independence.**

- The Go app self-describes as an **"MSB / PSP / VASP operator console"** — multi-currency wallets (fiat/stablecoin/crypto), Send/Receive/Swap, travel-cheque buy/redeem, risk-tiered OTP approval gates, signed (Ed25519) audit trail, KYC + travel-rule, cards/projects/recurring/requests.
- It is **whitelabel by design**: same binary boots as `ccash`/`popaye`/`paype` from a `site-profile.json`. Roles include `whitelabel_oversight`.
- The legal entity, **CCA.SH Money Services (US) Series LLC**, is a **FinCEN-registered MSB (US-federal + Montana only)**. Clients launch as a **Client Series / Agent MSB** under CCASH's registration, then graduate via **P8** (self-hosted instance) and/or **P3** (own FinCEN/state license).

### Decisions locked with founder
1. **Purge tokens entirely** — tokenization is not a product we sell. Token/community pages and token/securities glossary terms are removed, not demoted.
2. **"It's both"** — present BOTH the platform-capability story (software that runs MSB/PSP/VASP/treasury ops, self-hostable) AND the Agent-MSB-under-CCASH's-US-FinCEN-registration story, with the path to independence.
3. **Audit first**, approve before edits (this document).

### ⚠️ Two flags for the founder
- **Legal repo currently contradicts this.** `CCASH_Legal/CLAUDE.md` still states the *website* should use the *"community token economy / graduation model"* framing. The founder is overriding it for the site; the legal-repo positioning doc should be reconciled separately.
- **Compliance guardrails (from `CCASH_Legal`).** PSP/VASP are EU/foreign regulatory terms; the CCA.SH legal entity holds only a **US FinCEN MSB** registration. So PSP/VASP must describe **what the platform runs / the client types it serves**, never a claim that CCASH itself holds foreign licenses. Also avoid: **"bank", "deposit", "investment", "insured", "regulated financial services"**, and any foreign regulator (GDPR, MiCA, PSD2, FATF-as-authority, EU, Mauritius). US/Montana only.

---

## 1. Language rules for the rewrite (reference)

**Replacement vocabulary** — when removing "community tokenization / regulated financial services", replace with:
- Product identity: *"whitelabel MSB, PSP, VASP and corporate-treasury platform"* / *"money-services operator console"*.
- The model: *"Launch as a Client Series operating as an Agent MSB under CCASH's US FinCEN registration. Graduate to your own self-hosted instance, or your own license. No lock-in."*
- Capability: *"The platform runs payments, FX, custody, treasury and compliance operations."*

**DO NOT use:** community, community token, tokenize/tokenization, fan/loyalty/membership/security token, "regulated financial services", bank, deposit, investment, insured, foreign regulators.
**Note:** several sub-agent suggestions used "regulated financial services / regulated operators" as the *replacement* — that phrase is itself on the banned list. Use MSB/PSP/VASP/treasury + "money services" instead.

---

## 2. Workstream A — Framing fixes (pages & templates)

### A1. DELETE (token/community-only pages, no MSB/PSP/VASP/treasury purpose)
- `content/knowledge/docs/launching-your-token.md`
- `content/knowledge/docs/token-economy-design.md`
- `content/knowledge/docs/community-governance.md`
- `content/knowledge/docs/token-standard.md`
- `content/knowledge/guides/community-launch.md`
- `content/knowledge/guides/choosing-your-model.md`
- `content/knowledge/guides/token-utility-design.md`

(Deleting pages requires updating any nav/index links that point to them — tracked in Phase 1.)

### A2. REPURPOSE (salvageable concept, full rewrite)
| File | From | To |
|---|---|---|
| `content/knowledge/docs/hybrid-architecture.md` | "community token economies" | Hybrid legal + self-hosted operator architecture |
| `content/knowledge/docs/getting-started.md` | "community token economy" | Deploy & configure your MSB/PSP/treasury instance |
| `content/graduation/_index.md` | token graduation | Scaling your operation: shared → self-hosted → own license |
| `content/knowledge/docs/compliance-basics.md` | "compliance for token economies" | AML/KYC/travel-rule for MSB/PSP/VASP operators |

### A3. REFRAME-IN-PLACE (keep page, fix language) — ~26 files
Homepage & chrome: `layouts/index.html` (hero + "legal tab" that says *"designed for regulated financial services"*), `layouts/partials/footer.html` (description), `content/_index.md`.
Solutions: `content/solutions/_index.md`, `for-msbs.md`, `for-psps.md`, `for-vasps.md`, `for-family-offices.md` (titles currently say "Creators/Celebrities/Brands" — realign to MSBs/VASPs/PSPs while keeping the audience framing in the body).
Company: `content/company/about.md` + `layouts/page/company-about.html` (also remove Mauritius/Luxembourg/Estonia regulator refs), `content/company/legal.md` + `layouts/page/company-legal.html` (drop GDPR/FATF tab → US FinCEN MSB only).
Whitelabel/compliance/platform: `content/whitelabel/_index.md`, `onboarding.md`, `content/compliance/_index.md`, `content/compliance/coverage.md` (says "regulated financial services"), `content/platform/_index.md`, `content/platform/architecture.md`.
Knowledge: `content/knowledge/_index.md`, `content/knowledge/docs/_index.md`, `content/knowledge/faq.md`, `content/knowledge/docs/compliance-framework.md`, `content/knowledge/docs/authentication.md`, `content/knowledge/docs/metadata.md`, `content/knowledge/docs/transfer-rules.md`.
Templates: `layouts/page/knowledge-index.html`, `layouts/page/knowledge-faq.html`.

**Scope:** ~65 source files mention "community" (267 hits), ~50 mention "community token", 7 still say "regulated financial services" (`content/compliance/coverage.md`, `layouts/index.html`, `layouts/page/company-legal.html`, `layouts/page/company-about.html`, plus glossary).

---

## 3. Workstream B — Glossary (`content/knowledge/glossary/`, 71 terms)

- **DELETE (~17)** — token & securities products: `community-token`, `fan-token`, `loyalty-token`, `membership-token`, `security-token`, `cap-table`, `coupon`, `distributions`, `maturity`, `minimum-investment`, `offering`, `offering-memorandum`, `private-placement`, `qualified-investor`, `professional-investor`, `reg-d`, `reg-s`.
- **REFRAME (~9)** — valid term, token-flavored definition: `liquidity`, `atomic-settlement`, `broker-dealer`, `governance-framework`, `tokenization`(→ remove or redirect), and check `smart-contract`, `on-chain`.
- **REVIEW (open question)** — token-mechanics infra terms: `master-nft`, `nft-hierarchy`, `transfer-hook`. Keep only if a digital-asset/VASP custody story uses them; otherwise delete.
- **KEEP (~44)** — MSB/legal/infra terms: `msb`, `agent-msb`, `client-series`, `montana-series-llc`, `fincen`, `bsa-aml`, `aml`, `kyc`, `escrow`, `custody`, `four-eyes`, `threshold-signing`, `audit-trail`, `self-hosted`, `shared-platform`, `white-label`, `graduation`, `melusina`, `grain`, `sandstorm`, `capability-security`, etc.
- **ADD (missing, product-critical):** PSP, VASP, settlement instructions, travel rule, approval gate / OTP, multi-party control, signed writes / Ed25519, multi-currency wallet, swap (FX book transfer), travel cheque, FX rate, ledger, reconciliation, whitelabel oversight, site-profile, tenant isolation, corporate treasury.

---

## 4. Workstream C — Missing content / parity (the "~60%")

### Stub/thin pages needing real content
- `content/_index.md` (homepage — minimal body; the value prop lives in `layouts/index.html`, but copy is token-framed)
- `content/security.md`, `content/oversight.md` (frontmatter-only stubs)
- `content/company/about.md`, `contact.md`, `legal.md` (thin)
- `content/knowledge/roadmap.md`, `content/changelog/_index.md` (sparse)
- `content/knowledge/docs/api-reference.md` (placeholder bullets)
- `content/pricing/_index.md` (thin tiers)
- `content/knowledge/blog/` (effectively empty)

### Product features the site barely/doesn't explain (biggest gap)
- Multi-currency **wallets**, **Send/Receive/Swap** wizards — not documented as features.
- **Travel-cheque** buy/redeem — absent.
- Risk-tiered **OTP approval gates** / **multi-party control** — minimal.
- **Cards / Projects / Recurring / Requests** back-office — absent.
- **7 user roles** (admin, collaborator, auditor, client, client_assistant, client_view_only, whitelabel_oversight) — undocumented; needs a roles/permissions page.
- **Whitelabel via `site-profile.json`** — minimal; needs a deployment/branding guide.
- **Client Series / Agent-MSB / FinCEN** model — glossary stubs only; needs a real explainer.
- **Corporate treasury / family-office** use cases — thin; needs depth.

### Useful patterns from the donor (sails.to) — structure only, not its language
- A **"How it works"** explainer (donor `whatsails.md`) and a **player-journey / "life of a deal"** page (donor `players.md`, with diagrams).
- Dedicated **audience entry pages** (donor: issuers/investors/brokers/introducers/trustees) → CCASH equivalents: MSBs, PSPs, VASPs, family offices/treasury, introducers/referral partners, service providers/trust companies.
- A **"Get started"** onboarding entry and (optional) a **compare** page.

---

## 5. Workstream D — Interactive features (reality check)

**The "every interactive feature is broken" claim is largely outdated.** Static audit (Hugo v0.139.0, builds clean, 143 pages, 0 errors):

| Feature | Status |
|---|---|
| Mobile nav toggle, FAQ accordion, FAQ scroll-spy, glossary search/filter, glossary tooltips, KB tabs/filters, smooth scroll, home parallax | **Wired correctly** (selectors match markup, JS included) |
| **Contact form** (`layouts/page/company-contact.html:44`) | **BROKEN** — Formspree action is placeholder `YOUR_FORM_ID` |
| Footer "3 broken links" (handoff item 1) | **Already fixed** in the in-flight edit (links now resolve); but description + labels still token-framed |

**Caveat:** this is static analysis. I have **not** yet verified at runtime in a browser, and the founder reports breakage — so Phase D includes a `hugo server` + browser pass to catch any runtime issues (e.g. the homepage tab-switcher) the static check can't see.

---

## 6. In-flight uncommitted edits — disposition

A prior session left 7 modified files that mix correct audience updates with the wrong community-token product identity:

| File | Keep | Redo |
|---|---|---|
| `content/knowledge/faq.md` | "Who can use" answer (audiences correct) | "What is CCASH?" + "legal infrastructure" answers (community-token) |
| `content/solutions/_index.md` | new Introducers + Service-Providers/Trust sections | remove "tokenization infrastructure" phrasing |
| `layouts/partials/footer.html` | fixed link targets | description ("Tokenize your community"); decide labels |
| `content/knowledge/docs/getting-started.md` | (purge of "regulated financial services") | "community tokenization platform" replacement |
| `layouts/page/knowledge-faq.html` | — | community-token answers |
| `content/platform/architecture.md` | — | meta desc → "community tokenization" |
| `public/solutions/index.html` | — | **hand-edited build artifact** — revert; `public/` is generated by `hugo`, never edited directly |

---

## 7. Proposed phased plan (for approval)

- **Phase 1 — Reposition (highest priority).** Purge token/community + "regulated financial services" language across pages & templates (A1 delete, A2 repurpose, A3 reframe); fix glossary (B delete/reframe/add); fix the in-flight edits; revert the hand-edited `public/`. Rebuild clean.
- **Phase 2 — Fill the gaps (C).** Homepage + stub pages; product-feature docs (wallets, send/receive/swap, OTP/approval, roles, whitelabel deploy); audience entry pages; Client-Series/Agent-MSB explainer; treasury depth.
- **Phase 3 — Interactive (D).** Fix contact form; `hugo server` + browser verification of all interactive features; fix anything runtime-broken.
- **Phase 4 — Deploy.** Build `public_static`, push to the Sandstorm grain.

---

## 8. Open questions for the founder
1. **Footer/solutions labels:** label by capability (*MSBs / PSPs / VASPs / Treasury*) or by audience (*Creators / Celebrities / Brands / Family Offices*)? (The body can keep audience language either way.)
2. **NFT/token-mechanics glossary** (`master-nft`, `nft-hierarchy`, `transfer-hook`): delete entirely, or keep for the VASP/crypto-custody story?
3. **New audience entry pages** (issuers→MSBs, investors, brokers equivalents): build in Phase 2, or keep the existing `/solutions/*` set only?
4. **Reconcile the legal repo** (`CCASH_Legal/CLAUDE.md` still says the website uses community-token framing) — founder to action separately.
