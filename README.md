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
Previous Gmail tests passed SPF and DKIM but failed DMARC. Retest with a **new** email after publishing DNS TXT `_dmarc` value `v=DMARC1; p=none`; do not claim DMARC is working without PASS.

## Sales automation
Connected ChatGPT Gmail is personal Gmail, not the Namecheap Private Email account. No automated prospect sends from hello@avorlume.com are currently configured or authorized. Use internal lead research/drafts and manual sending until a real integration is proven.

## Operational tracking
See `docs/QA-AND-LAUNCH.md` for the launch gate, accessibility/UX review and deferred improvements.
