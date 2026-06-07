---
title: "Authentication - Documentation"
type: "doc"
description: "CCASH authentication model — Ed25519 signatures, authority hierarchy, and capability-based access for money-services operations."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-06"
---

## Authentication

CCASH uses a multi-layer authentication model rooted in public-key cryptography. Every action on the platform is authenticated through a combination of cryptographic signatures, role-based authority verification, and capability grants.

### Ed25519 Signatures

Every write operation on the CCASH platform is signed using an Ed25519 key pair. The signature proves that the request originated from the holder of the private key. The signed request includes the action parameters, a timestamp to prevent replay, and a sequence number for ordering.

Every state-changing audit row carries a `SignerPubkey` — a base58-encoded Ed25519 public key. No unsigned path exists. No grandfathered exceptions.

### Authority Verification

In addition to cryptographic signatures, actions require proof of role authorization. A user must hold the appropriate authority credential for the action they're requesting. The platform enforces a 4-layer authority hierarchy — from root authority down through per-user credentials — and every operation traces its authority back through this chain.

### Capability-Based Access

The Powerbox mediates inter-component authentication. When one grain needs to call another, it doesn't share a password or API key — it presents a capability that was previously granted. Capabilities are fine-grained, revocable, and auditable.

### Session Management

User sessions carry the user's identity, their authority credentials, and the capabilities they've been granted. Sessions expire after inactivity and require re-authentication for sensitive operations. Per-tab unlock: the browser builds a canonical payload, the user signs it with their wallet, and the grain verifies before serving any protected surface.

### Multi-Party Authorization

Critical operations — high-value transactions, compliance overrides, system parameter changes — require threshold signing. A minimum number of authorized parties must each sign before the operation can execute, with the second payload chain-committed to the first. No single party can act alone.
