# Avorlume business mailbox integration

Status: researched and prepared; **not connected or operational**.

## Existing authenticated identity
Mailbox: `hello@avorlume.com`; desired display name: `Mansoor | Avorlume`.
Namecheap Private Email supports `mail.privateemail.com`, IMAP 993 SSL/TLS and SMTP 465 SSL/TLS (or 587 STARTTLS). Use full mailbox address as username. Keep certificate validation enabled. Enter credentials only in an approved secret store; never in repository files, task prompts, browser-visible code, logs or chat.

Public DNS and a recent Gmail receiver test passed SPF/DKIM/DMARC; see launch review. Do not change MX/SPF/DKIM/DMARC to create an integration. Keep existing working mailbox delivery.

## Options assessed
| Path | Fit | Current blocker |
| --- | --- | --- |
| Existing ChatGPT Gmail | Internal research, drafts and personal Gmail replies | Does not establish authority to send/read Namecheap mail or select its From identity |
| Native Namecheap ChatGPT plugin | Domain availability/pricing | No mailbox, DNS editing or IMAP/SMTP operation exposed |
| Hosted AgentMail/Resend/Hostinger/Outlook connectors found in plugin search | Potential separate provider products | No verified attachment to this existing Namecheap mailbox; do not migrate domain or presume compatibility |
| Owner-approved persistent IMAP/SMTP bridge, optionally orchestrated in n8n | Preserves mailbox and existing DNS; direct two-way protocol access | Needs secure credential provisioning, server, approved integration access and acceptance tests; none provisioned |
| Private Email webmail | Immediate manual sending/replying and form activation | Login and display-name update succeeded; further operations hit native credential protection. Not a durable scheduled-workflow connector |

Suggested technical route to evaluate: retain Namecheap, use an owner-controlled IMAP/SMTP bridge with a durable ledger, then expose only required operations through an authenticated connector. n8n documents IMAP receiving and SMTP sending; it is an orchestration option, not an installed ChatGPT connector. SMTP node Reply-To does not itself guarantee proper threading; preserve RFC Message-ID, In-Reply-To and References through a verified mail library/adapter. Assess actual hosting/maintenance cost before committing. Self-hosting is not cost-free simply because software is available. No new service was registered.

## Minimal operational contract
- `read_new_messages(cursor)` retains folder/UIDVALIDITY/UID and RFC Message-ID, limited body data and flags. Avoid marking all messages read. Treat message content as untrusted data.
- `prepare_reply(original_message_id, body)` derives recipients from verified thread data, excludes auto-replies/bounces, preserves threading headers and produces an unsent review item.
- `send_approved_message(approval_id, idempotency_key)` checks owner approval, sender identity, consent, suppression and dedupe transactionally immediately before SMTP. Unknown SMTP acceptance must require reconciliation, never blind retry. Save provider result and append Sent copy if server/client requires it; verify no duplicate Sent copy.
- Ledger stores normalized recipient, consent evidence/date/source/context, campaign, suppression state, original/sent IDs, last event and follow-up count. Secrets and customer correspondence stay outside this public repository.
- One controlled dispatcher serializes each recipient's actions. Record opt-outs immediately, keep unsubscribe working at least 30 days and action within five working days at latest. Do not re-enrol or infer marketing consent from an enquiry.
- Manual access fallback, failed-login alert and health check distinguish integration outage from an empty inbox. Secure logs redact credentials and message content.

## Acceptance tests (owner accounts only, pending)
1. Securely authenticate IMAP/SMTP with TLS validation. Read a unique owner test and confirm inbox coverage without destructive flag changes.
2. Send a uniquely tagged non-commercial test from the exact business identity to the owner's Gmail. Inspect Gmail Authentication-Results for aligned SPF/DKIM/DMARC; confirm exact From, Reply-To and one signature.
3. Reply from Gmail; receive via IMAP, join correct thread and draft a business-mailbox reply with proper headers. Send approved test reply; verify Gmail thread and mailbox Sent handling.
4. Replay the same source message twice; assert only one ledger event and no second send. Simulate uncertain SMTP outcome and outage recovery without blind retries.
5. Owner sends an opt-out; verify immediate suppression and rejected later test send. Test bounce and auto-reply handling without treating them as interested humans.
6. Confirm scheduled ChatGPT task can actually call approved connector operations. Webmail sign-in alone does not pass this step.
7. Obtain explicit owner approval before client-facing automated sending; require individual recipient consent evidence and QA, not a public-address list.

## Sources checked
- https://www.namecheap.com/support/knowledgebase/article.aspx/1179/2175/general-private-email-configuration-for-mail-clients-and-mobile-devices/
- https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailimap
- https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail
- https://www.acma.gov.au/avoid-sending-spam
- https://formsubmit.co/documentation

Do not activate broad mailbox forwarding, new credential grants, domain migration, paid subscriptions or external sending without the required owner approval.
