---
title: "Authentication - Documentation"
type: "doc"
description: "CCASH authentication model — Ed25519 signatures, NFT hierarchy, and capability-based access for community token operations."
ogImage: "/og-docs.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/docs.css"
date: "2026-06-01"
lastmod: "2026-06-01"
---

## Authentication

CCASH uses a multi-layer authentication model rooted in public-key cryptography. Every action on the platform is authenticated through a combination of cryptographic signatures, NFT authority verification, and capability grants.

### Ed25519 Signatures

Every write operation on the CCASH platform is signed using an Ed25519 key pair. The signature proves that the request originated from the holder of the private key. The signed request includes the action parameters, a timestamp to prevent replay, and a sequence number for ordering.

### NFT Authority

In addition to cryptographic signatures, actions require proof of role authorization via the NFT hierarchy. A user must hold the appropriate NFT for the action they're requesting — for example, only a License NFT holder can create new community tokens; only a Share NFT holder can participate in governance.

### Capability-Based Access

The Powerbox mediates inter-component authentication. When one grain needs to call another, it doesn't share a password or API key — it presents a capability that was previously granted. Capabilities are fine-grained, revocable, and auditable.

### Session Management

User sessions are managed through Sandstorm's web session mechanism. Each session carries the user's identity, their NFT holdings, and the capabilities they've been granted. Sessions expire after inactivity and require re-authentication for sensitive operations.

### Multi-Party Authorization

Critical operations — governance execution, compliance overrides, system parameter changes — require threshold signing. A minimum number of authorized parties must each sign before the operation can execute. No single party can act alone.
