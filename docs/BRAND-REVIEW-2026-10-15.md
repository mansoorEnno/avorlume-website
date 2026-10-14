# Avorlume — brand and interface review, second implementation

## The problem this pass addresses
The earlier source was truthful but repetitive. It relied on similar reassuring headlines, repeated eyebrow/paragraph/link layouts and a text-only identity. It did not show an inspectable example of development. The owner specifically asked for deeper brand and detail work, not another layer of generic marketing copy.

## Research and direction
Public primary-source content was researched from Humaan, ED and Honest Fox. Humaan's project-led structure and Honest Fox's separation of experience and technology informed the decision to demonstrate work before listing capabilities. ED's homepage could not be meaningfully inspected through search extraction. Live visual inspection of these references was blocked by the browser's retained credential protection, so this is not a claim of a visual comparative audit. No third-party artwork, wording, client names, awards or case studies were copied.

- https://www.humaan.com/
- https://ed.studio/
- https://www.honestfox.com.au/agency

Chosen direction: an independent development practice that shows a working example, names the person doing the work and gives buyers two concrete starting points. Green remains a brand colour, balanced by a warm light page; a single sans-serif type family replaces the previous serif/system-font pairing.

## Implemented details and verification
| Element | Decision | Evidence / limitation |
| --- | --- | --- |
| Logo | Geometric A mark with outlined lowercase wordmark, dark and light SVG versions | Raster rendered and inspected for clipping and legibility; viewBox corrected. Independent reviewer found it credible but correctly described the A as relatively generic. No trademark uniqueness claim. |
| Favicon | Same A geometry, high contrast compact tile | Source checked; actual browser/favicon cache not tested. |
| Type | Self-hosted Manrope variable font, Latin subset, OFL licence included | Font metadata supports 200–800; asset about 34 KB. Not a page-speed measurement. No external font-provider request at runtime. |
| Hero | Websites/Salesforce stated directly, named independent developer | No team, office, guaranteed results or customer claims. |
| Page rhythm | Introduction → working example → two service situations → founder/process → contact | Removes repeated standalone FAQ/process/founder pitches. |
| Working example | Interactive request queue with fictional data | Selection, filters, stages, owner, history and reset are implemented. Local-only; no real customer records, email or Salesforce connection. |
| Demo state | New → Assigned → In progress → Complete | Five Node tests pass for progression/history, terminal state, dynamic filters, independent reset and invalid inputs. These are model tests, not rendered browser tests. |
| Demo focus | Restore focus when advancing disables/hides the focused control | Independently identified and corrected in source; selection change announced. Browser keyboard verification pending. |
| Failure state | Explanatory demo text stays visible until module initialisation succeeds | Handles disabled JS and module failure; source checked. |
| Readability | Body copy generally 15–16px; supporting UI text no smaller than 12px | Source checked. Browser zoom, font load and real line breaks pending. |
| Colour | Muted text #52635a on #f5f4ed = 5.79:1; light section text #cfdbca on #153d32 = 8.39:1 | Calculated palette samples only. Large headline accent #6b7f61 on paper = 3.94:1, used for large text. Not a complete automated accessibility audit. |
| Navigation | Shorter links, mobile breakpoint 850px, Escape/outside closing, bounded menu scroll | Source checks; 320px, tablet and short landscape still require browser tests. |
| Contact | Direct email primary; copy control revealed only after its handler installs | Mailto is a user's email-client action, not guaranteed delivery. Copy failure has a readable fallback. |
| Form | Retained on separate /enquire.html with explicit unverified-delivery disclosure | No false receipt claim. Existing FormSubmit activation/delivery blocker remains. |
| Auxiliary pages | Shared font, palette and exact logo assets | Local paths checked; live appearance pending. |
| Sharing | Purpose-designed PNG with actual brand/type plus OG/Twitter metadata | PNG inspected; external social-network fetch/cache not tested. |
| Assets | Explicit static deployment allowlist plus assets directory | Internal docs remain outside Pages artifact. Repository itself is public. |

## Independent challenge and fixes
A specialist agent reviewed the new implementation and the logo raster. It identified keyboard focus loss on completion, missing module-failure fallback, inactive no-JS copy control and an overly broad demo title. These were corrected. It did not certify the full page visually.

## Per-detail rendered release checks still required
Use desktop 1440px and 1024px, tablet 850px/851px and mobile 390px/320px, then 200% zoom and short landscape. Check:
1. Logo baseline/clear space, font load/fallback shift, first-screen content and CTA visibility.
2. Hero line breaks, email fit, paragraph width, divider alignment and real spacing between unlike sections.
3. Demo queue horizontal scrolling on mobile, selection visibility, all/open/complete filter counts, every stage, terminal state, reset and all empty states.
4. Tab order and visible focus, especially completion under Open filter; screen-reader announcements should identify both the completed request and a newly selected request.
5. JS disabled and module unavailable: honest explanation, usable navigation/contact, hidden inactive copy control.
6. Every mailto subject, copy-success/failure, privacy link, enquiry form, 404 and thank-you page.
7. Full contrast/axe pass and Lighthouse only after valid public HTTPS. Record actual results; do not infer scores from source size.
8. Ask target Australian business owners what is offered and who delivers it after a short view. Brand impact and conversion improvement remain unmeasured.

## Current access limits
Public custom-domain HTTPS still showed a certificate hostname mismatch in the cloud browser. Browser visual research later encountered retained credential protection following the earlier sign-in handoff. No security warning was bypassed. Website source, tests, SVG/PNG inspection and GitHub deployment can be completed; full live visual QA cannot truthfully be marked passed until access works.
