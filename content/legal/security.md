---
layout: "page"
title: "Security"
description: "Security disclosures and responsible disclosure policy for CCA.SH."
keywords: ["security", "disclosure", "vulnerability", "responsible disclosure"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
scripts:
  - "/js/nav.js"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.4
  changefreq: "yearly"
---

<section class="page-hero bg-soft">
    <span class="section-label">Security</span>
    <h1 class="section-title">Security at CCA.SH</h1>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Security Principles</h2>
        <p>CCA.SH runs on least privilege, defense in depth, capability security, secrets-in-vault-only, four-eyes on critical actions, and per-file isolation. These principles are the substrate of customer trust.</p>

        <h2>Responsible Disclosure</h2>
        <p>If you discover a security vulnerability, please report it to <a href="mailto:security@cca.sh">security@cca.sh</a>. We commit to acknowledging receipt within 48 hours and providing an initial assessment within 5 business days.</p>

        <h2>Infrastructure</h2>
        <p>Multi-signature HSM-backed custody for digital assets. On-chain identity verification through Melusina OS shared identity gate. All mutating endpoints verify admin envelopes through the shared gate module.</p>
    </div>
</section>
