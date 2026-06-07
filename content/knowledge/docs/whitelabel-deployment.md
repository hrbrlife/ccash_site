---
title: "Whitelabel Deployment - Documentation"
type: "doc"
description: "How one CCASH binary deploys as ccash, popaye, or paype — same binary, different brand via site-profile.json. Oversight metrics without end-client PII."
ogImage: "/og-platform.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Whitelabel Deployment

CCASH ships as a single whitelabel platform. The product is one Go + HTMX binary — a Melusina grain — and every brand running on the platform runs that exact same binary. There is no per-brand fork, no separate codebase, and no branch to maintain. The brand a grain presents is determined entirely at deploy time by configuration, not by compiling a different program. The principle is simple: **same binary, different brand.**

### Same Binary, Different Brand

The grain reads its identity from a single file dropped into the grain at deploy time: `/var/site-profile.json`. That one binary deploys as `ccash`, `popaye`, or `paype` depending only on the profile it finds. Swap the profile, restart the grain, and the same code now presents an entirely different brand — same money-movement flows, same compliance enforcement, same API, different name on the door.

This keeps every brand on a single, continuously updated security and compliance baseline. A fix or feature lands in the grain once and every brand inherits it; no brand drifts onto a stale fork.

### The Site Profile

`/var/site-profile.json` is the whitelabel control surface. The profile sets:

- **Brand name** — the name presented throughout the UI and customer-facing flows.
- **Legal entity** — the Client Series and trade names the deployment operates under (see the [Client Series & Agent MSB documentation](/knowledge/docs/client-series/)).
- **Currencies** — the fiat, stablecoin, and crypto assets the brand supports.
- **Fees** — the fee schedule applied to transfers and swaps.
- **FAQ** — the brand's customer-facing help content.
- **Approval thresholds** — the values that trigger risk-tiered OTP and multi-party approval on money movement.

Because brand, entity, currencies, fees, and approval policy all come from the profile, standing up a new brand is a configuration exercise. The configurable surface is described in the [Configuration documentation](/knowledge/docs/configuration/).

### One Grain, One Client, One Account

A grain is not multi-tenant. **One grain = one client account = one customer.** Each brand runs in its own grain with its own journal store, its own capability set, and its own security boundary. There is no shared database across brands, so one brand cannot read another's data by construction. Each deployment maps one-to-one to a single Client Series operating under CCASH's US FinCEN MSB registration.

### The whitelabel_oversight Role

A whitelabel brand team needs to see how their deployment is performing without ever touching their end-customers' personal data. The `whitelabel_oversight` role provides exactly that boundary.

A holder of `whitelabel_oversight` gets **pseudonymous, view-only, aggregate operational metrics** at `/whitelabel-overview`. They can see operational health — volumes, counts, and aggregate activity — for the brand. They **never** see end-client PII. There is no view, export, or query in this role that returns a customer's name, contact details, or identity records.

### The PII Boundary

The PII boundary is not a UI convention — it is enforced in code. **22+ handler-level PII gates** sit between the `whitelabel_oversight` role and any data path that could carry end-client personal information. Every handler that could surface customer-level data checks the caller's authority before responding, and the oversight role is rejected at each of those gates. The aggregate view is the only thing it can reach.

This is the same model that lets a brand team monitor their operation while the underlying Client Series retains sole control of its end-customer relationships. The authority model behind these gates is described in the [Authentication documentation](/knowledge/docs/authentication/), and the relationship between a deployment and its legal entity is covered in the [Client Series & Agent MSB documentation](/knowledge/docs/client-series/).
