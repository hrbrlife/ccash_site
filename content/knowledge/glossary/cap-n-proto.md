---
category: technology
date: '2026-06-01'
description: A zero-copy serialization protocol used for inter-grain RPC in CCASH's
  architecture.
lastmod: '2026-06-01'
relatedTerms:
- label: Grain
  slug: grain
- label: Powerbox
  slug: powerbox
tags:
- glossary
- technology
title: Cap'n Proto - Glossary
---
Cap'n Proto is a zero-copy serialization protocol — data is read directly from the wire format with no encoding or decoding step. CCASH uses Cap'n Proto for inter-grain RPC communication, enabling native Sandstorm integration without an HTTP bridge.
