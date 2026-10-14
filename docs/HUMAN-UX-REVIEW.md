# Avorlume: independent UX review and human QA plan

Reviewed: 15 October 2026 (Asia/Karachi). Review scope: the working-tree homepage, stylesheet, JavaScript, privacy page, thank-you page and 404 page.

## Evidence and limits

This document records **source inspection**, followed by a plan for **rendered and operational testing**. It does not record live screenshots, a completed browser accessibility audit, observed visitor behaviour or conversion gains. The parent launch investigation reported a TLS blocker on the public apex/www hosts; that finding must be rechecked before launch. No rendered item below is a pass until someone executes it and records evidence.

Statuses used here:

- **Source checked**: the intended implementation is present in the files. This does not prove browser behaviour.
- **Pending rendered check**: requires an actual browser at the stated viewport or interaction state.
- **Pending operational check**: requires the deployed site, form provider or mailbox.

## Second review: current judgment

The implementation has a clearer identity: two primary service areas, a named independent developer, an explicit Pakistan location, a restrained green/paper palette, serif heading accents and practical project-scoping language. It removes the need to pretend that a new practice has an established agency portfolio. The founder's Salesforce experience is explicitly separated from Avorlume client engagements.

Source inspected: service routes match enquiry select values; mobile CSS and JavaScript now meet at 850/851px; core service descriptions are more readable; privacy, thank-you and 404 use the shared visual shell; email is recommended while form delivery remains unverified. No invented testimonials, numerical performance claims, employees, client logos or Australian incorporation claims were found in the reviewed files.

### Remaining findings

| Priority | Finding | Evidence and required action |
| --- | --- | --- |
| P1 | Button keyboard focus can disappear into the dark surround | Global `:focus-visible` uses `currentColor`; `.btn` uses dark text `--bg`. An outer dark outline on the hero/page-shell background has no contrast. Set an accent outline or a clearly contrasting dual ring for buttons, then verify by keyboard. This is a source-derived defect, not a measured screenshot finding. |
| P1 | Enquiry delivery is unverified | The public disclosure is honest. Do not call the form activated, working or launch-ready until the complete authorised submission, receipt and reply path succeeds. |
| P1 | Public HTTPS remains an independent launch gate | A working-tree review cannot settle DNS, certificate validity, redirects or Pages enforcement. Record public results separately. |
| P2 | Short-height mobile navigation needs stress testing | The absolute menu has no viewport-based maximum height or internal overflow rule. In landscape or with enlarged text its lower links may become difficult to reach. Confirm with the menu open before deciding whether to add a scrollable panel. |
| P2 | Founder evidence is factual but still limited | The professional experience line improves specificity but is not a demonstrated project. Only add permissioned, accurately attributed examples, an owner-approved professional link or a genuine portrait. Do not manufacture proof to fill space. |
| P3 | Search/social presentation needs an actual preview | Title, description and canonical exist; no social share image is declared. A composed brand image is optional polish. Do not replace evidence with generic AI imagery. |

The source is suitable for a deployment candidate after the focus fix and normal code validation. It is **not an unconditional launch approval**: public HTTPS, live responsive QA and form delivery must still be verified. A responsible email-first soft launch may be possible once HTTPS and direct mailbox sending/receiving are confirmed, with the form's unverified status retained or the form temporarily removed.

## Test setup and evidence

Use desktop widths 1440 and 1280; intermediate widths 1050, 851 and 850; mobile widths 430, 390, 360 and 320 CSS pixels. Include a short landscape viewport such as 740 × 360. Test at 200% zoom and reflow equivalent to 320 CSS pixels. Check at least Chromium and Safari/iOS where available; clearly identify emulation versus a real device.

For each failure record URL, build/commit, browser, viewport, zoom, reproduction steps, expected result, actual result and a screenshot when possible. Retest the failure after fixing it; do not mark the entire site passed after one screenshot.

First inspect normal motion and then reduced motion. Test keyboard only, touch, pointer hover and JavaScript disabled. Use a screen reader where available; an automated scanner is supplementary, not a substitute for reading and operating the page.

## 1. First impression and header

**Source checked:** plain wordmark; descriptive home link; sticky header; navigation labels; menu expanded state and controls association; skip link; matching mobile breakpoint.

**Pending rendered checks:**

- At first load, read only the initial viewport for five seconds. Can a business owner identify the two services, the person delivering them and a next action? Record an observer's actual answers rather than presuming comprehension.
- Inspect the wordmark punctuation, spacing and baseline at normal and enlarged text sizes. Ensure the period reads as part of the mark rather than a detached decoration.
- Check header alignment, generous but intentional spacing and absence of overflow immediately above/below 850px.
- Open and close the mobile menu by touch, Enter and Space. Confirm expanded state matches visibility; hidden links must not remain in tab order.
- Use Escape and confirm focus returns to the menu control. Click outside, choose every menu item and resize across the breakpoint.
- In short landscape and at enlarged text sizes, reach the last menu item without it being trapped below the viewport.
- Tab from the address bar: the skip link must become visible and move the user to meaningful main content. Sticky header must not obscure anchor headings or focused elements.
- With JavaScript disabled, verify all navigation remains reachable and its increased height does not create awkward sticky obstruction.

## 2. Hero and starting routes

**Source checked:** one H1; direct owner identification; two service statements; primary project action; two routes with matching service values; no imaginary dashboard, client logos or claimed results.

**Pending rendered checks:**

- Inspect serif/sans pairing and italic line breaks. Avoid a single short word stranded on a line or an excessive heading dominating the small screen.
- Compare text and cream panel balance at 1440, 1050, 851 and 850px. Check that the card's increased body size does not make it visually dominate the message.
- On mobile, confirm the owner and main action appear before the secondary card and that the first viewport is not mostly ornamental spacing.
- Hover and keyboard-focus each route. Confirm the full route is clickable and the focus perimeter remains visible.
- Activate both routes; verify the correct service is selected and the contact destination is visible below the header. Confirm the rest of the form stays unchanged and nothing submits automatically.
- Check that the primary CTA remains a clear visual choice alongside the secondary text link without requiring colour alone to distinguish them.
- Check body text and secondary labels in low brightness; measure relevant foreground/background contrast rather than assuming the palette passes.

## 3. Service section

**Source checked:** two scoped services; specific deliverables; additional services conditional on a fit review; supporting text increased; compact deliverables stack below 450px.

**Pending rendered checks:**

- Read the section as a small-business owner unfamiliar with Salesforce. Verify the customer-facing website need and internal-system need are distinguishable. Observe actual comprehension when a real reviewer is available.
- Check that the cream section feels intentional, not like a disconnected template. Inspect gutters, heading margins, row dividers and CTA placement.
- At 451 and 450px verify deliverable headings/descriptions transition cleanly from columns to a single stack.
- Confirm long labels never squeeze descriptions into tiny columns or overflow. Inspect typography at 320px and at 200% zoom.
- Activate website/workflow links and verify service preselection. The website link currently selects a new business website; decide whether a visitor seeking improvement would find that misleading in context.
- Ensure the additional-services note does not compete with the two core offers. It should communicate assessment, not promise expertise in every technology.

## 4. Founder and professional credibility

**Source checked:** named owner, location and independent model; professional background separated from Avorlume client work; no fabricated portfolio.

**Pending rendered checks:**

- Read hero and founder together: eliminate repeated paragraphs that do not add useful information. Check whether the experience note adds enough concrete substance.
- Verify the experience separator and smaller type remain readable and do not make genuine evidence look like fine print.
- Check two-column alignment on desktop and the stacked reading order on mobile.
- Inspect every claim as a prospective buyer: who delivers, what they can actually build, how decisions are agreed, and what happens if specialist expertise is needed.
- Add further evidence only when it exists and can be shared. A real portrait or verified professional profile can help; neither is required to justify fake project cards.

## 5. Process

**Source checked:** four steps; written scope, price and responsibilities; review/testing; separate ongoing support.

**Pending rendered checks:**

- Read the process aloud. Verify it describes actions the owner will actually carry out rather than an agency slogan sequence.
- Inspect step-number alignment, divider rhythm and text density. On mobile, no number should consume an excessive share of line width.
- Confirm the content answers what happens after an enquiry and before payment or development without inventing fixed turnaround commitments.
- Keyboard-check the process CTA and confirm it reaches the contact section cleanly.

## 6. FAQs

**Source checked:** native details/summary; questions address rebuild, service scope, Australia, cost, support and rough ideas; no unsupported prices or turnaround guarantees.

**Pending rendered checks:**

- Open every question with pointer, touch, Enter and Space. Multiple open answers are allowed by this implementation; confirm that is intentional.
- Check plus/minus visibility, summary wrapping, target size and baseline alignment on narrow screens.
- Read expanded content at 200% zoom and verify answers remain inside the layout without clipping.
- With a screen reader, confirm the question and expanded/collapsed state are announced intelligibly. Decorative plus/minus should not confuse the meaning.
- Check that expansion does not leave a focused question hidden under the sticky header or fixed CTA.

## 7. Contact and form

**Source checked:** direct mail link recommended; form verification warning; real labels and autocomplete; native required fields, email type and length limits; consent specific to enquiry; honeypot; provider CAPTCHA requested; status text and disabled submit; pageshow recovery; no newsletter consent bundled.

**Pending rendered checks:**

- Verify email remains the obvious reliable option while the form is unverified. Ensure the warning is readable before someone invests time completing the form.
- Activate mail links on a device with and without a configured email application. The address should still be easy to select and copy manually.
- Tab through every field. Check visible focus, labels, select options, textarea resizing, checkbox label click and privacy link operation.
- On mobile, open the software keyboard, enter an email, switch fields, scroll to consent and submit. No control or error should be obscured by the fixed CTA or browser UI.
- Test blank required fields, whitespace-only name/details, malformed email, short details, maximum lengths and a valid example. Check blur, click-submit and Enter-submit paths. Record actual browser errors; source attributes alone are not a completed validation test.
- Test both service route preselection and changing the selection manually. Ensure the empty disabled option cannot be submitted as a real choice.
- Use Back from the provider and the thank-you page; the submit button should recover through pageshow. Test network failure and unavailable provider without losing sight of the email fallback.
- Confirm the page explains the third-party transition and spam check before the user leaves the site.

**Pending operational checks (authorised owner test only):**

1. Submit a clearly marked dummy enquiry using an owner-controlled address and no sensitive content.
2. Complete required activation and provider verification only through authorised account access.
3. Confirm the real business inbox receives all submitted fields and the subject. Check inbox and spam; record receipt time/message identifier privately where appropriate.
4. Verify replying addresses the test submitter, not the form provider, and the test account receives that reply.
5. Confirm the intended HTTPS thank-you destination after the provider check; manually visiting it is not proof of delivery.
6. Confirm spam mechanisms are enabled and observe a normal legitimate submission. Do not claim the form is spam-proof or perform abuse/load tests.
7. Retain truthful delivery wording until the full path has passed. Remove test personal data according to normal mailbox handling.

## 8. Footer and mobile CTA

**Source checked:** owner/location, privacy/email/top links, dynamic year with fallback; mobile CTA observes contact visibility; footer has bottom clearance.

**Pending rendered checks:**

- Confirm footer line breaks feel deliberate and links remain distinct at every width.
- Verify Back to top reaches the top of main content without hiding the first heading under the sticky header.
- On touch devices, verify CTA safe-area spacing, full target size and contrast. Test bottom browser controls and landscape.
- Scroll slowly through the first contact pixels: CTA should disappear and reappear predictably without flicker or obstructing focused controls.
- Disable IntersectionObserver or JavaScript and ensure the content remains usable. A persistent CTA must not cover the final footer links.

## 9. Privacy, thank-you and 404

**Source checked:** common stylesheet, palette and home mark; readable single-column layout; privacy provider links; conditional rather than false inbox-delivery claim; thank-you and 404 noindex.

**Pending rendered checks:**

- Open each page directly, not only through homepage links. Confirm styling, favicon and home navigation load at nested/unknown URLs.
- Check the long privacy page at 320px and 200% zoom. Provider URLs and email links must wrap without horizontal scrolling.
- Test keyboard focus on page-shell buttons against the dark background after the focus fix.
- Request a nonexistent public route and confirm the server actually returns the intended 404 document with appropriate status. A file named 404.html alone is not evidence.
- Confirm the thank-you text remains useful when visited directly and does not assert inbox receipt.
- Open third-party policy links and confirm they reach current provider information. Source URLs are not evidence of availability.

## 10. Technical finish and independent acceptance

**Source checked:** metadata/canonical, matching theme colour, Australian language tag, structured identity, reduced motion rule, no intentional third-party analytics script in reviewed homepage.

**Pending rendered/operational checks:**

- Visit apex and www over HTTP and HTTPS; record redirect destinations, certificate validity and absence of mixed content. Check both with a fresh browser session.
- Confirm deployed files match the reviewed commit. Check CSS/JS/favicon and robots/sitemap responses where present.
- Check the browser console and network for errors. Run a measured performance audit on mobile and desktop; do not invent Lighthouse scores from file size or simplicity.
- Run an accessibility scanner, measure contrast, then complete manual keyboard, screen-reader and zoom checks. Record limits of browser/device coverage.
- Check real search/social previews. Ensure titles describe the actual services and do not imply Australian incorporation or a larger staff.
- Conduct a final independent pass starting from the public homepage, without relying on the implementer's memory. Walk a website-improvement enquiry and a Salesforce enquiry separately.

## Release acceptance and follow-up

A finished source patch is not the same as a finished customer journey. Record each pending item as pass, fail or blocked with evidence. Public TLS, usable navigation and a dependable contact route are release gates. The form becomes a release gate whenever it is presented as a dependable enquiry route.

After launch, gather actual feedback from a small number of intended business owners with their permission: what Avorlume offers, what felt credible or uncertain, and whether they could find the right contact route. Treat those observations as qualitative evidence; measure enquiries and qualified conversations before claiming a conversion improvement.

## Implementation response
The primary engineer corrected the dark-button focus ring with an accent outline/contrasting separator, bounded mobile-menu height with scrolling, and changed the general website CTA to a neutral enquiry preselection. Syntax/link checks are rerun before publication. Rendered verification remains pending.
