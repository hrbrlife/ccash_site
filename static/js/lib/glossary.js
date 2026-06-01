/* ═══════════════════════════════════════════════════════════════
   CCASH GLOSSARY TOOLTIPS
   Automatic term detection and tooltip display
   
   Features:
   - First-occurrence-only: subsequent uses of same term are plain text
   - Audience-aware: pages with data-audience="professional" skip basic terms
   - Smart positioning: auto-adjusts to viewport boundaries
   ═══════════════════════════════════════════════════════════════ */

(function() {
    'use strict';
    
    // Glossary data - will be loaded from JSON
    let glossaryData = null;
    
    // Tooltip element
    let tooltipEl = null;
    let hideTimeout = null;
    
    // Track which terms have been seen on this page (first-occurrence-only)
    const seenTerms = new Set();
    
    // Basic terms that professionals already know - skip on professional pages
    const basicTermsForProfessionals = new Set([
        'kyc', 'aml', 'custody', 'liquidity', 'otc', 'compliance',
        'broker-dealer', 'accredited-investor', 'professional-investor',
        'escrow', 'distributions', 'cap-table'
    ]);
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    async function init() {
        // Create tooltip element
        createTooltip();
        
        // Load glossary data
        await loadGlossaryData();
        
        // Find and enhance glossary terms (with first-occurrence logic)
        enhanceGlossaryTerms();
        
        // Set up event listeners
        setupEventListeners();
    }
    
    function createTooltip() {
        tooltipEl = document.createElement('div');
        tooltipEl.className = 'glossary-tooltip';
        tooltipEl.innerHTML = `
            <div class="glossary-tooltip-content">
                <div class="glossary-tooltip-header">
                    <span class="glossary-tooltip-term"></span>
                    <span class="glossary-tooltip-category"></span>
                </div>
                <p class="glossary-tooltip-definition"></p>
                <a href="#" class="glossary-tooltip-link">
                    Read full definition
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
                <div class="glossary-tooltip-arrow"></div>
            </div>
        `;
        document.body.appendChild(tooltipEl);
    }
    
    async function loadGlossaryData() {
        // Try to determine the correct path based on current page location
        const paths = [
            '/assets/content/glossary.json',
            '../assets/content/glossary.json',
            '../../assets/content/glossary.json',
            '../../../assets/content/glossary.json',
            'assets/content/glossary.json'
        ];
        
        for (const path of paths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    glossaryData = await response.json();
                    return;
                }
            } catch (e) {
                // Try next path
            }
        }
        
        // Fallback: embedded data for essential terms
        glossaryData = getEmbeddedGlossary();
    }
    
    function getEmbeddedGlossary() {
        // Embedded fallback for all terms used across the site
        return {
            "security-token": {
                "term": "Security Token",
                "shortDefinition": "A digital representation of a traditional security (equity, debt, or fund share) issued on a blockchain with built-in compliance rules.",
                "category": "Finance"
            },
            "kyc": {
                "term": "KYC (Know Your Customer)",
                "shortDefinition": "Regulatory process to verify the identity of clients and assess their suitability for financial services.",
                "category": "Compliance"
            },
            "aml": {
                "term": "AML (Anti-Money Laundering)",
                "shortDefinition": "Laws and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income.",
                "category": "Compliance"
            },
            "grain": {
                "term": "Grain",
                "shortDefinition": "The fundamental isolation unit in Sandstorm/Melusina OS — a sandboxed application instance with its own journal store, capability set, and lifecycle.",
                "category": "Technology"
            },
            "entity-framework": {
                "term": "Entity Framework",
                "shortDefinition": "Pre-built legal structures (Series LLC, DAO LLC) that provide legal isolation between operating compartments.",
                "category": "Legal"
            },
            "series-llc": {
                "term": "Series LLC",
                "shortDefinition": "A corporate structure allowing multiple segregated series under one LLC, each with isolated assets and liabilities.",
                "category": "Legal"
            },
            "spv": {
                "term": "SPV (Special Purpose Vehicle)",
                "shortDefinition": "A subsidiary entity created to isolate financial risk and hold specific assets separate from a parent company.",
                "category": "Legal"
            },
            "accredited-investor": {
                "term": "Accredited Investor",
                "shortDefinition": "An individual or entity meeting SEC financial thresholds ($1M+ net worth or $200K+ income) to invest in unregistered securities.",
                "category": "Compliance"
            },
            "professional-investor": {
                "term": "Professional Investor",
                "shortDefinition": "Under EU MiFID II regulations, an investor with sufficient expertise and experience to make independent investment decisions.",
                "category": "Compliance"
            },
            "reg-s": {
                "term": "Regulation S",
                "shortDefinition": "SEC regulation providing safe harbor for securities offerings made outside the United States to non-US persons.",
                "category": "Compliance"
            },
            "reg-d": {
                "term": "Regulation D",
                "shortDefinition": "SEC regulation providing exemptions from registration for private placements to accredited investors in the US.",
                "category": "Compliance"
            },
            "credential-nft": {
                "term": "Credential NFT",
                "shortDefinition": "Non-fungible token representing verified identity and role authorization — used for capability-based access control.",
                "category": "Technology"
            },
            "smart-contract": {
                "term": "Smart Contract",
                "shortDefinition": "Self-executing code that automatically enforces agreement terms — handles operations, transfers, and compliance.",
                "category": "Technology"
            },
            "capability-based-access": {
                "term": "Capability-Based Access",
                "shortDefinition": "A security model where access is granted through unforgeable tokens (capabilities) rather than identity-based permissions.",
                "category": "Technology"
            },
            "custody": {
                "term": "Custody",
                "shortDefinition": "Safekeeping of assets by a regulated custodian — on CCASH, managed through the platform's capability-based access control and journal storage.",
                "category": "Finance"
            },
            "secondary-trading": {
                "term": "Secondary Trading",
                "shortDefinition": "Buying and selling securities between investors after the initial offering, through authorized channels.",
                "category": "Finance"
            },
            "cap-table": {
                "term": "Cap Table",
                "shortDefinition": "A record showing ownership stakes, equity dilution, and value of equity — maintained with transparency and auditability.",
                "category": "Finance"
            },
            "distributions": {
                "term": "Distributions",
                "shortDefinition": "Payments to security holders including coupon payments, dividends, or return of capital — automated via smart contract.",
                "category": "Finance"
            },
            "coupon": {
                "term": "Coupon",
                "shortDefinition": "Periodic interest payment on a bond, expressed as annual percentage of nominal value (e.g., 8% p.a.).",
                "category": "Finance"
            },
            "maturity": {
                "term": "Maturity",
                "shortDefinition": "The date when a bond's principal must be repaid to investors and the security terminates.",
                "category": "Finance"
            },
            "nominal-value": {
                "term": "Nominal Value",
                "shortDefinition": "Face value of a security — the amount used to calculate coupon payments and repaid at maturity ($150,000 minimum per unit).",
                "category": "Finance"
            },
            "escrow": {
                "term": "Escrow",
                "shortDefinition": "Funds held by a neutral third party until specified conditions are met — providing protection for all parties.",
                "category": "Finance"
            },
            "trustee": {
                "term": "Trustee",
                "shortDefinition": "Independent party who oversees compliance with governing documents and acts in participants' interests.",
                "category": "Legal"
            },
            "otc": {
                "term": "OTC (Over-the-Counter)",
                "shortDefinition": "Trading directly between parties rather than on a public exchange — facilitated through authorized intermediaries.",
                "category": "Finance"
            },
            "atomic-settlement": {
                "term": "Atomic Settlement",
                "shortDefinition": "Simultaneous exchange of assets and payment in a single transaction — impossible for one side to fail without the other.",
                "category": "Technology"
            },
            "governance-framework": {
                "term": "Governance Framework",
                "shortDefinition": "The rules and procedures governing decision-making within an entity structure, often encoded in the entity's operating agreement.",
                "category": "Legal"
            },
            "journal-store": {
                "term": "Journal Store",
                "shortDefinition": "Append-only encrypted log used by each grain for durable state storage — enables deterministic replay for audit and disaster recovery.",
                "category": "Technology"
            },
            "private-placement": {
                "term": "Private Placement",
                "shortDefinition": "Sale of securities directly to qualified investors without public offering registration.",
                "category": "Finance"
            },
            "offering-memorandum": {
                "term": "Offering Memorandum",
                "shortDefinition": "Legal document detailing terms, risks, use of proceeds, and issuer information — required for regulated offerings.",
                "category": "Legal"
            },
            "liquidity": {
                "term": "Liquidity",
                "shortDefinition": "Ease of buying or selling an asset without affecting its price.",
                "category": "Finance"
            },
            "compliance": {
                "term": "Compliance",
                "shortDefinition": "Adherence to legal and regulatory requirements — managed through automated workflows, identity verification, and audit trails.",
                "category": "Compliance"
            },
            "identity-verification": {
                "term": "Identity Verification",
                "shortDefinition": "Process confirming a participant's identity through document verification, credential checks, and ongoing monitoring.",
                "category": "Compliance"
            }
        };
    }
    
    function enhanceGlossaryTerms() {
        if (!glossaryData) return;
        
        // Check if this is a professional-audience page
        const isProfessionalPage = document.body.hasAttribute('data-audience') && 
            document.body.getAttribute('data-audience') === 'professional';
        
        // Also detect professional pages by URL pattern
        const path = window.location.pathname;
        const professionalPaths = ['/brokers/', '/regulated/', '/introducers/'];
        const isImplicitProfessionalPage = professionalPaths.some(p => path.includes(p));
        const skipBasicTerms = isProfessionalPage || isImplicitProfessionalPage;
        
        // Find all elements with data-term attribute (explicitly marked)
        const explicitTerms = document.querySelectorAll('[data-term]');
        
        explicitTerms.forEach(el => {
            const termKey = el.getAttribute('data-term');
            
            // Skip basic terms on professional pages
            if (skipBasicTerms && basicTermsForProfessionals.has(termKey)) {
                el.removeAttribute('data-term');
                el.classList.remove('glossary-term');
                return;
            }
            
            // First-occurrence-only: disable tooltip for subsequent uses
            if (seenTerms.has(termKey)) {
                el.removeAttribute('data-term');
                el.classList.remove('glossary-term');
                // Keep the text content, just remove the tooltip behavior
                return;
            }
            
            // Mark this term as seen
            seenTerms.add(termKey);
            
            if (!el.classList.contains('glossary-term')) {
                el.classList.add('glossary-term');
            }
        });
        
        // Also find elements with class glossary-term that might need data-term
        const classTerms = document.querySelectorAll('.glossary-term:not([data-term])');
        classTerms.forEach(el => {
            // Try to match text content to a glossary term
            const text = el.textContent.toLowerCase().trim();
            for (const [key, data] of Object.entries(glossaryData)) {
                if (data.term && data.term.toLowerCase() === text) {
                    // Check first-occurrence rule
                    if (!seenTerms.has(key)) {
                        // Skip basic terms on professional pages
                        if (skipBasicTerms && basicTermsForProfessionals.has(key)) {
                            el.classList.remove('glossary-term');
                            break;
                        }
                        el.setAttribute('data-term', key);
                        seenTerms.add(key);
                    } else {
                        el.classList.remove('glossary-term');
                    }
                    break;
                }
            }
        });
    }
    
    function setupEventListeners() {
        // Use event delegation for efficiency
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);
        document.addEventListener('click', handleClick, true);
        
        // Hide tooltip on scroll
        window.addEventListener('scroll', () => {
            hideTooltip();
        }, { passive: true });
        
        // Keep tooltip visible when hovering over it
        tooltipEl.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });
        
        tooltipEl.addEventListener('mouseleave', () => {
            hideTooltip();
        });
    }
    
    function handleMouseEnter(e) {
        const term = e.target.closest('.glossary-term');
        if (term) {
            clearTimeout(hideTimeout);
            showTooltip(term);
        }
    }
    
    function handleMouseLeave(e) {
        const term = e.target.closest('.glossary-term');
        if (term) {
            hideTimeout = setTimeout(() => {
                hideTooltip();
            }, 150);
        }
    }
    
    function handleClick(e) {
        const term = e.target.closest('.glossary-term');
        if (term && e.target.tagName !== 'A') {
            // On mobile, click toggles tooltip
            if (tooltipEl.style.opacity === '1') {
                hideTooltip();
            } else {
                showTooltip(term);
            }
        }
    }
    
    function showTooltip(termElement) {
        if (!glossaryData) return;
        
        const termKey = termElement.getAttribute('data-term');
        if (!termKey) return;
        
        const data = glossaryData[termKey];
        if (!data) return;
        
        // Populate tooltip content
        const termEl = tooltipEl.querySelector('.glossary-tooltip-term');
        const categoryEl = tooltipEl.querySelector('.glossary-tooltip-category');
        const definitionEl = tooltipEl.querySelector('.glossary-tooltip-definition');
        const linkEl = tooltipEl.querySelector('.glossary-tooltip-link');
        
        termEl.textContent = data.term;
        categoryEl.textContent = data.category;
        categoryEl.className = 'glossary-tooltip-category category-' + data.category.toLowerCase();
        definitionEl.textContent = data.shortDefinition;
        
        // Set link to glossary page
        const basePath = getGlossaryBasePath();
        linkEl.href = basePath + termKey + '.html';
        
        // Position tooltip
        positionTooltip(termElement);
        
        // Show tooltip
        tooltipEl.style.opacity = '1';
    }
    
    function hideTooltip() {
        tooltipEl.style.opacity = '0';
    }
    
    function positionTooltip(termElement) {
        const rect = termElement.getBoundingClientRect();
        const tooltipRect = tooltipEl.getBoundingClientRect();
        
        // Calculate position
        let top = rect.top - tooltipRect.height - 12;
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        
        // Check if tooltip would go above viewport
        if (top < 10) {
            // Position below instead
            top = rect.bottom + 12;
            tooltipEl.classList.add('tooltip-below');
        } else {
            tooltipEl.classList.remove('tooltip-below');
        }
        
        // Check horizontal bounds
        if (left < 10) {
            left = 10;
        } else if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        
        tooltipEl.style.top = top + 'px';
        tooltipEl.style.left = left + 'px';
    }
    
    function getGlossaryBasePath() {
        // Determine correct path based on current page
        const path = window.location.pathname;
        
        if (path.includes('/knowledge/glossary/')) {
            return '';
        } else if (path.includes('/knowledge/blog/') || path.includes('/knowledge/docs/') || path.includes('/knowledge/guides/')) {
            return '../glossary/';
        } else if (path.includes('/knowledge/')) {
            return 'glossary/';
        } else if (path.includes('/company/')) {
            return '../knowledge/glossary/';
        } else {
            return 'knowledge/glossary/';
        }
    }
    
})();
