# Avorlume company positioning: independent source review

Date: 15 October 2026 (Asia/Karachi).
Scope: current homepage, services hub, all six service pages, shared JavaScript and CSS, and the relocated request-workflow lab. This reviewer may edit this document only.

## Decision

The new information architecture fits the owner's stated direction better than the previous website/Salesforce-only homepage. It introduces Avorlume as a technology practice, gives the broader services meaningful destinations, explains how systems connect, and keeps the owner/location clear. The approved logo remains unchanged.

Recommended disposition: the lab stylesheet leakage, generated CTA capitalisation and stale fallback were fixed and source-rechecked during this review. Address the remaining semantic/polish findings below, then deploy as a candidate for browser QA. Source review is not visual approval or evidence of a functioning live enquiry journey.

## Research-informed rationale

Primary-source service pages checked during this review:

- Thoughtworks, What we do: https://www.thoughtworks.com/what-we-do
- thoughtbot, Services: https://thoughtbot.com/services

The former exposes named technology capabilities and delivery areas; the latter organises development help around product/project needs and stages. The transferable principle is a service architecture that helps visitors find relevant work, rather than a homepage that simply lists technologies. This is an interpretation of their information structure, not evidence that copying their presentation will improve conversions.

Their enterprise/team scale and client evidence are not transferable to Avorlume. No enterprise footprint, large staff, partner status or historical delivery record should be inferred from a comparable navigation structure. Other reference firms were researched by the coordinating agent; this document does not claim a fresh rendered review of their sites.

## What the source now gets right

- A full-sentence headline gives the broader offer a business purpose.
- Six destinations cover websites, ecommerce, custom software/portals, AI/automation, Salesforce/CRM and cloud/integrations.
- Service pages include different business situations, potential scope, required inputs and boundaries. They are not empty landing pages.
- Salesforce is specifically grounded in the owner's professional experience. Other CRM platforms require a fit review.
- AI starts with a scoped pilot; commerce platform and payment needs are assessed; cloud wording does not promise managed infrastructure or continuous support.
- The practice is explicitly independent, led by Mansoor Ijaz from Pakistan. The page does not claim Australian incorporation, offices, a staff roster or fabricated client results.
- Contact accepts a business problem without requiring the customer to select a technology.
- The request desk is a separate, honestly labelled fictional browser demonstration rather than the homepage's central service proposition.
- Shared JavaScript checks whether page-specific elements exist before accessing them.

## Findings for implementation

| Priority | Finding | Specific evidence | Recommended correction |
| --- | --- | --- | --- |
| Resolved in source | The lab initially imported the previous complete site stylesheet | `demo.css` contains its own `:root`, body, global headings, `.wrap`, navigation, buttons, footer and page-shell rules. It loads after `styles.css`, changing the lab page's palette, max width, gutters, typography and shared shell. | Extract only workbench, request/detail, activity, status, work-heading/caption and their responsive rules. Use the new shared stylesheet for site shell. Avoid solving this with another layer of global overrides. |
| Resolved in source | Generated CTA labels initially damaged proper naming | Service links read `Discuss salesforce & crm` and `Discuss ai & automation`. | Use `Discuss Salesforce & CRM` and `Discuss AI & automation`. Check all labels for automatic lowercasing. |
| Resolved in source | Lab fallback initially referred to content no longer on the page | It tells visitors to read development services "below", but the services moved to their own hub. | Link directly to `/services.html`; keep fallback visible until successful module initialisation. |
| P2 | Parent navigation incorrectly identifies an exact current page | Individual service pages mark the Services hub link `aria-current="page"` although the current page is a child service. Breadcrumbs already identify the actual current page. | Remove page-current from the parent hub link on child pages; use a visual current-section class if needed. Keep exact page-current on the hub itself and the active breadcrumb. |
| P2 | Internal link arrow conventions are inconsistent | Homepage service destinations and the lab link use a diagonal arrow; Explore services uses a down arrow despite navigating to another page. | Use a right arrow for site-page destinations and a down arrow only for same-page sections. Treat email/external arrows consistently. This is a clarity recommendation, not a broken-link finding. |
| P3 | Public copy contains implementation-policy artifacts | AI scope says no unattended commercial outreach is promised; software says a demonstration is not a production-ready system; integration scope references secrets never being collected through the public form. | Retain relevant pilot, data, hosting and support boundaries. Remove unrelated policy disclaimers or place privacy/security guidance where visitors share information. These artifacts can make the offer sound assembled from internal instructions. |
| P3 | Service hub heading levels skip from H1 to H3 | Each service-directory heading is an H3 with no intervening H2. | Use H2 for the six directory entries while preserving styling with the appropriate selector/class. Do not treat this alone as proof of a WCAG failure. |

## Template consistency versus duplication

A shared service-page structure is appropriate. The six pages have distinct situations and scope lists, which is useful rather than empty SEO duplication. However, repeated generic headings such as Start with the business need and Start the conversation should not substitute for service-specific information. The current paragraphs supply that information; further differentiation should come from real delivery examples, not invented projects or random layout changes.

Header and footer repetition across static files creates a maintenance risk: current-state annotations and shared labels can drift. For this release, keep them consistent through source validation. A static build/template system is an optional future implementation choice, not a reason to delay publication of a small static site.

## Capability and credibility assessment

No unsupported numerical outcomes, testimonials, named clients, team size or platform partnerships were found in the reviewed copy. Prospective AI and commerce work is qualified by assessment and scope; this is an offer to evaluate suitable work, not proof of past delivery. Maintain that distinction in proposals and later portfolio additions.

The phrase The right expertise is a broad marketing proposition. It should not be expanded into unsupported claims about specialist staff. The later independent-practice explanation is important context. A small firm can have a broad offer while declining or arranging specialist work when needed; the site must not imply pre-existing partner capacity that has not been established.

## Required browser and live checks

None of the following is certified by this source review:

1. Desktop/mobile composition, line wrapping, contrast measurements, typography rendering or actual touch targets.
2. Navigation at 850/851px, open-menu landscape/zoom behaviour, sticky section-introduction behaviour and keyboard focus visibility.
3. Service pages at 320px, including long headings, breadcrumbs, two-column scope lists and CTA wrapping.
4. The lab after isolating CSS: same header/footer as the main site, readable stage track, horizontal request scrolling and focus recovery after completing the last Open request.
5. JavaScript-disabled fallback and module-network-failure fallback.
6. Current deployment completion, custom-domain certificate validity, redirects or public assets loading.
7. Receipt/reply of direct email or activation and delivery of the separate form.

The coordinating agent reports source/path/ARIA checks over 29 public files and 13 pages, plus five passing state-model tests. Those results are supporting evidence, not independently rerun results from this reviewer and not substitutes for browser interaction tests.

## Final release boundary

The broad positioning is supportable with the existing scope qualifications. The main concrete engineering issue from this pass was copied global CSS leaking into the relocated lab. The lab stylesheet is now isolated, the AI/Salesforce CTA labels are corrected, and fallback content links to the service hub; these three changes were independently source-rechecked. Remaining findings concern navigation semantics, arrow conventions, service-hub heading structure and policy-like public copy. No further source-level engineering blocker was identified in this pass. Public HTTPS and a dependable, verified contact route remain launch requirements. Do not report visual acceptance, user-testing results or conversion improvement without the corresponding evidence.

## Final implementation polish
Before publication, the engineer corrected child-page parent navigation to aria-current="location", changed service-directory headings to H2, replaced internal destination arrows with right arrows, and removed unrelated automation/demo policy wording from service descriptions. Scoped pilot, platform, data and support boundaries remain. Source checks and JS/model checks are rerun after these edits.
