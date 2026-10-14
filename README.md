# Avorlume website

Independent technology studio website for **https://avorlume.com**, operated by Mansoor Ijaz.

## Design and content strategy
- High contrast, calm visual identity; honest service positioning and clear CTAs
- Australian small-business focus without pretending to be located in Australia
- Useful niches: business websites, existing-site improvements, ecommerce, custom software, automation/AI, CRM/Salesforce
- Never invent customer testimonials, success statistics or client case studies

## Deployment
This repository contains a static website and a GitHub Pages Actions workflow in `.github/workflows/deploy.yml`.

1. Go to **Settings → Pages** and select **GitHub Actions** as the source.
2. The workflow deploys pushes to `main`. Watch **Actions** for success.
3. The `CNAME` file declares **avorlume.com**. GitHub Pages may ask you to verify ownership in your GitHub account.
4. In Namecheap Domain List → Manage → Advanced DNS, remove only the old URL redirect at `@` and the parking CNAME at `www`, then configure:
   - Four A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME `www` to `mansoorEnno.github.io`
5. Do **not** remove or modify email MX, SPF, DKIM, DMARC or Private Email Mail Settings. Do not change nameservers.
6. When GitHub issues an HTTPS certificate, enable **Enforce HTTPS** in Pages settings.

## Enquiry form — not operational until activated
Form endpoint: `https://formsubmit.co/hello@avorlume.com`. The first enquiry prompts FormSubmit activation at hello@avorlume.com. Follow activation instructions then submit a second test; verify message content and successful redirect. Until then, direct mailto links are available.

## Email deliverability
Public `_dmarc` TXT is `v=DMARC1; p=none`. A recent received owner test (14 October 2026, 19:41 UTC) has Gmail receiver SPF, DKIM and DMARC PASS. This resolves the earlier DMARC FAIL evidence for that test; retest after any integration change. Actual webmail display-name update and a new integration test remain pending secure login.

## Sales automation
Connected ChatGPT Gmail is personal Gmail, not the Namecheap Private Email account. No automated prospect sends from hello@avorlume.com are currently configured or authorized. Use internal lead research/drafts and manual sending until a real integration is proven.

## Operational tracking
See `docs/QA-AND-LAUNCH.md` for the launch gate, accessibility/UX review and deferred improvements.

## Latest review and checks
See [15 October launch review](docs/LAUNCH-REVIEW-2026-10-15.md) for verified results and blockers, and [mailbox integration](docs/MAILBOX-INTEGRATION.md) for the prepared two-way integration design. TLS and enquiry receipt are not yet verified.

Run `python3 scripts/check-site.py` and `node --check site.js` before publishing. Actions stages only the public allowlist in `_site/`; internal documentation and brand signature files are not web pages.

## Current brand/workflow implementation
The homepage now presents a local-only working request workflow demonstration, two core services and email-first contact. The optional FormSubmit form is at `/enquire.html` and remains unverified. See [brand review](docs/BRAND-REVIEW-2026-10-15.md) for implementation rationale, independent findings and exact evidence limits.

Checks: `python3 scripts/check-site.py`, `node --check site.js`, `node --check demo.js`, `node --check form.js`, and `node --test scripts/workflow.test.mjs`. Manrope is self-hosted under the licence in `assets/fonts/OFL-Manrope.txt`.
