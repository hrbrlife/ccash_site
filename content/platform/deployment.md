---
layout: "page"
title: "Deployment"
description: "Deployment model for the CCASH platform — single static Go binary, no JS build step, mobile-first HTML/CSS, encrypted SQLite, Sandstorm .spk packaging."
keywords: ["deployment", "technical", "setup", "configuration", "Go", "binary", "Sandstorm", "CCASH"]
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.5
  changefreq: "yearly"
---

<p class="lead">Deploy your own self-hosted CCASH instance — the final step in graduating from the shared platform to full sovereignty over your money-services operation.</p>

<section class="page-hero bg-soft">
    <span class="section-label">Platform</span>
    <h1 class="section-title">Deployment</h1>
</section>

<section class="content-section">
    <div class="content-container">
        <h2>Single Binary Deployment</h2>
        <p>The CCASH platform is compiled into a single static Go binary. The binary contains the Go backend, the HTMX frontend templates, the CSS and JavaScript assets, and the encrypted SQLite storage engine. Deployment requires no JavaScript build step, no container runtime, no external database server, and no package manager. Copy the binary to the target system and run it.</p>

        <h2>No JavaScript Build Step</h2>
        <p>The frontend is built with HTMX, which extends HTML with attributes for dynamic interactions. There is no JavaScript framework, no bundler, no transpiler, and no build pipeline. The HTML templates are served directly by the Go backend and rendered in the browser with HTMX handling dynamic updates. This eliminates the entire frontend build and deployment chain.</p>

        <h2>Mobile-First Responsive Design</h2>
        <p>The interface is designed mobile-first with responsive HTML and CSS. The same application works on desktop browsers, tablets, and mobile devices without separate builds or app stores. The layout adapts to screen size automatically, providing full operational capability from any device.</p>

        <h2>Encrypted SQLite at Rest</h2>
        <p>All data is stored in an encrypted SQLite database. The database is encrypted at rest using strong encryption, with the encryption key managed through the platform's security infrastructure. No separate database server is required — the database is a single file managed by the Go application. Backups are encrypted database files that can be copied securely.</p>

        <h2>Sandstorm .spk Packaging</h2>
        <p>The CCASH platform can be packaged as a Sandstorm .spk package for deployment on Sandstorm servers. This provides additional sandboxing, access control, and identity management through the Sandstorm platform. The .spk package includes the complete platform with all dependencies in a single installable archive.</p>
    </div>
</section>
