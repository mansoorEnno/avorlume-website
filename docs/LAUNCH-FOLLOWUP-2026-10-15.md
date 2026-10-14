# Avorlume launch follow-up — 15 October 2026

## Result

The refreshed repository at baseline commit `ab55e0cf8e95c5e6b0df3d93dc4fceacbff9b8b0` has a successful GitHub Pages deployment. Full launch is still blocked by custom-domain TLS and unverified form delivery. This follow-up preserves the newer design and does not replace the earlier design reviews.

## Changes in this follow-up

- Added FormSubmit's documented `_url` source-page field to `enquire.html`. The provider documents this field as a remedy for the earlier “Make sure you open this page through a web server” rejection. This is a source fix; successful delivery still needs verification.
- Added a polite status region for the transition to FormSubmit. It describes the next step without claiming inbox delivery.
- Improved name/project validation to reject whitespace-only values, trim surrounding spaces, and show a specific message for the affected field. Returning with browser Back restores the original submit label and usable button.
- Added `_url` validation to the existing deployment checks.

## Current launch checks

| Area | Evidence | Status |
| --- | --- | --- |
| Deployment | GitHub Actions run 38637692278 succeeded for the baseline commit | Baseline confirmed; follow-up deployment recorded in GitHub Actions |
| HTTP | `http://avorlume.com/` returned 200 with the current 10,809-byte homepage | Serving, but HTTPS enforcement not established |
| HTTPS | Apex and www shell requests returned 502; cloud browser rendered “Certificate verify failed: hostname mismatch” | Blocked; certificate state requires authenticated Pages settings |
| Website DNS | Four apex A records 185.199.108–111.153; www CNAME mansoorenno.github.io; no CAA answer | Matches the recommended GitHub Pages values |
| Business email DNS | MX mx1.privateemail.com and mx2.privateemail.com, priority 10; SPF include:spf.privateemail.com; DKIM at privateemail._domainkey; DMARC v=DMARC1; p=none | Present and unchanged; no DNS mutations performed |
| Source checks | Existing check-site.py passes for 29 public files and 13 HTML pages, links/fragments, metadata and form safeguards | Pass |
| JavaScript | Syntax checks for form.js, site.js and demo.js; five existing workflow-model tests | Pass |
| Accessibility source | One H1 and language on each page; image alt attributes; labels/required fields and ARIA references inspected | Source review complete; screen-reader/browser testing pending |
| Contrast | Muted copy/paper 5.97:1; muted copy/pale-green 5.39:1; footer copy/dark-green 8.00:1; hero green/paper 4.81:1 | These sampled colour pairs pass normal-text AA contrast; not a complete accessibility certification |
| Responsive UI | Mobile breakpoints, single-column layouts, font sizes, navigation fallback and overflow rules reviewed | Source review only; desktop/mobile screenshots, touch, zoom and keyboard interaction remain pending |
| SEO | Page titles/descriptions, canonical URLs, sitemap, robots, social-card references and founder schema checked | Source configured; indexing and Core Web Vitals not measured |
| Credibility | Named founder, Pakistan location, remote Australian audience, explicit demonstration labels and individually scoped specialist work | No invented testimonials, customers, results or Australian office claims |
| Lead conversion | Primary direct-email route retained while form delivery is unverified; copy-email fallback, service-specific pages and written scope/handover explained | Logical path reviewed; no measured conversion uplift claimed |

## Form test

One owner-authorised endpoint test, `AV-QA-20261015-02`, sent dummy project information and the public business mailbox address, with `_url` and CAPTCHA enabled. The provider returned HTTP 403. No successful submission, activation email, mailbox receipt, Reply-To, spam handling or thank-you redirect is established. No CAPTCHA was solved or disabled. This endpoint test does not replace a real browser submission and inbox verification.

## Access and approval gates

GitHub's connected tools support repository and workflow operations but expose no Pages administration. The cloud browser is signed out of GitHub. Secure GitHub authentication is needed to inspect custom-domain/certificate state; approval is required before any consequential domain reset or account change. Do not remove/re-add the domain speculatively.

Namecheap's connector exposes domain availability/pricing only. Any account-level DNS or domain-status checks require secure browser access. Preserve nameservers, Mail Settings, MX, SPF, DKIM, DMARC and other business-email records. Public DNS is already correct; no Namecheap change is justified by these checks.

After TLS is fixed, complete actual desktop/mobile QA, submit the live enquiry, inspect the hello@avorlume.com inbox and spam folder, activate FormSubmit if required, and submit a second unique test. Verify the actual receipt, reply address and thank-you redirect. Any CAPTCHA interaction needs action-time confirmation. No purchases or subscriptions were made.

## Primary references

- https://formsubmit.co/help — source URL field, activation and missing-email guidance.
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https — DNS and HTTPS enforcement.
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages — certificate provisioning and custom-domain troubleshooting.
