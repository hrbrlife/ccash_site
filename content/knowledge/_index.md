---
layout: "knowledge-index"
title: "Knowledge Base"
description: "Learn everything about CCASH's legal infrastructure and technology platform, compliance framework, and platform architecture."
keywords:
  - CCASH guide
  - knowledge base
  - legal infrastructure
  - technology platform
ogImage: "/og-image.png"
stylesheets:
  - "/css/main.css"
  - "/css/pages/glossary.css"
  - "/css/pages/knowledge-index.css"
scripts:
  - "/js/pages/kb-filters.js"
  - "/js/pages/knowledge-index.js"
date: "2026-06-01"
lastmod: "2026-06-01"
sitemap:
  priority: 0.7
  changefreq: "monthly"
---

<section class="page-hero">
    <span class="section-label">Learn</span>
    <h1 class="section-title">Knowledge Base</h1>
    <p class="section-desc">Everything you need to understand CCASH's legal infrastructure and technology platform — from the dual-layer model to compliance and technical specifications.</p>
</section>

<section class="kb-tabs-section">
    <div class="kb-container">
        {{ partial "kb-tabs.html" . }}
    </div>
</section>

<section class="kb-featured">
    <div class="kb-container">
        <h2 class="kb-section-title">Featured Resources</h2>
        <div class="kb-featured-grid">
            <a href="{{ "knowledge/docs/getting-started/" | relURL }}" class="kb-card kb-card-featured" data-category="docs">
                <div class="kb-card-icon"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                <div class="kb-card-content">
                    <span class="kb-card-category">Getting Started</span>
                    <h3>Quick Start Guide</h3>
                    <p>New to CCASH? This guide walks you through the platform, from introduction to your first deployment.</p>
                </div>
                <span class="kb-card-arrow">→</span>
            </a>
            <a href="{{ "knowledge/docs/platform-overview/" | relURL }}" class="kb-card kb-card-featured" data-category="docs">
                <div class="kb-card-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></div>
                <div class="kb-card-content">
                    <span class="kb-card-category">Architecture</span>
                    <h3>Platform Architecture</h3>
                    <p>How CCASH's dual-layer model provides legal infrastructure and technology platform capabilities.</p>
                </div>
                <span class="kb-card-arrow">→</span>
            </a>
            <a href="{{ "knowledge/faq/" | relURL }}" class="kb-card kb-card-featured" data-category="faq">
                <div class="kb-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                <div class="kb-card-content">
                    <span class="kb-card-category">Support</span>
                    <h3>Frequently Asked Questions</h3>
                    <p>Answers to the most common questions about CCASH's legal framework, platform architecture, and scaling.</p>
                </div>
                <span class="kb-card-arrow">→</span>
            </a>
        </div>
    </div>
</section>
