# Purpose-led footer and enquiry UX, 29 October 2026

Purpose: help a prospective client understand the practice, establish fit and begin a useful conversation. The user preferred the earlier visual direction to the Taste restyle. Restored its typography, copy, palette and surface treatment from 2d169e8, while retaining the useful keyboard/mobile interaction improvements. Taste's stylesheet remains in history but is not imported or shipped.

Skills used: frontend-design for hierarchy; User Interface Wiki for feedback and progressive disclosure; Taste for restraint where appropriate, subordinated to the explicit visual preference; Web Interface Guidelines fetched from the Vercel source for form semantics, focus, navigation and content handling.

## Addressed findings

- src/app/components/contact.tsx:7 - replaced decorative step labels with a native-progressbar semantic, a clear track and three named stages.
- src/app/components/contact.tsx:11 - removed unreachable saved-receipt state from the static public form. The site no longer contains a misleading local saved-confirmation branch.
- src/app/components/contact.tsx:12 - blank/invalid fields receive specific inline feedback and first-invalid-field focus.
- src/app/components/contact.tsx:14 - a review stage makes service, contact, timing and message visible before the external handoff. Edit preserves entered values.
- src/app/components/contact.tsx:15 - inputs remain enabled during native POST so form values are not dropped through disabled controls. Only the pending submit button is disabled.
- src/app/components/contact.tsx:16 - explicit labels, help associations, character count, consent and provider disclosure.
- src/app/components/site.tsx:9 - footer now has meaningful navigation groups, direct email and one project-brief action on non-form pages.
- src/app/page.tsx:5 - home footer omits a duplicate large contact CTA immediately after the actual form.
- src/app/about/page.tsx:5 and corresponding Services/Work/Projects pages - removed the duplicated pre-footer ProjectCTA in favour of the shared footer contact band.
- src/app/enquiry-footer.css:1 - restores the earlier visual base with targeted new control and footer styling. Anchor navigation is immediate so focus and clicks do not trail moving targets.

## Form behaviour

Three stages: Service, Project details, Review. Progress represents the current stage, not successful transmission. Help me decide is the neutral default. Service query links preselect a service. Back and edit actions keep values. There is no invented completion-time promise, no client-side persistence and no automatic submission. Existing FormSubmit endpoint, spam check and pending delivery-verification notice remain. The direct email alternative is present. No email delivery claim is made.

## Verification

Production build passed. Local browser checks at 1440, 390 and 320 pixels: step transitions, empty-field errors, first-field focus, valid review, editing with preserved values, native field enablement, progress semantics and absence of horizontal phone overflow. The footer project action and home hero action reach the form. Footer links use real destinations and email uses mailto. No external enquiry was submitted. Screenshots captured of desktop review, phone progress and the desktop/phone footer. Standalone Taste inspector was not used, in accordance with the approved browser-control workflow.

Remaining operational item: FormSubmit inbox delivery must be verified before treating the form as a confirmed lead-delivery channel. This is disclosed on the review stage. Company and client confidentiality preserved.
