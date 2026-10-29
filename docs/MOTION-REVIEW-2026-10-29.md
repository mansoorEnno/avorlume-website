# Avorlume motion and layout review, 29 October 2026

## Purpose and choice
Help a prospective client understand Mansoor's capabilities, assess the evidence and begin a scoped enquiry. Preserve the approved typography, portrait, colours and layered diagram. This is a component motion refinement, not a new visual direction, so no random direction draw or new imagery was introduced.

Reference reviewed: https://www.tasteskill.dev/ in a real browser. Its hero uses coordinated entrances and its interactive surfaces respond quickly. The transferable idea is a controlled reading order, not copying its cream palette, card stacks or page layout.

Additional research: https://github.com/emilkowalski/skills, especially animate and find-animation-opportunities. These distinguish feedback, state changes and explanation from distracting decoration. Existing Taste motion references and User Interface Wiki cover the implementation needs, so no extra package or overlapping skill was installed. Vercel Web Interface Guidelines were fetched afresh for accessibility review.

## Decisions and findings

- src/app/components/site.tsx:13 - long service titles were moving as a second navigation menu. Retain one slim platform band with short capability labels, real existing platform logos and working links. The full service comparison remains stationary.
- src/app/components/site.tsx:15 - track now runs only while intersecting the viewport. Pause/resume remains available. Pointer hover and focused interaction pause it. Keyboard users get a static scrollable row with duplicate links hidden.
- src/app/components/motion-layer.tsx:6 - the previous page had no coordinated section entrances. Progressive enhancement now introduces hero elements in reading order, followed by headings, portfolio previews, founder content and relevant inner-page sections. Each runs once, with different image and text treatments.
- src/app/components/motion-layer.tsx:11 - animate opacity and transform through the native Web Animations API. No library, layout animation or scroll interception. Server HTML is visible and functional without the enhancement. Keyboard focus cancels active entrances. Reduced-motion preference is checked initially and changes cancel running animations.
- src/app/motion-polish.css:13 - service selection settles in 220 ms. Diagram nodes transition in 240-260 ms, with a slower explanatory connection trace. Hover image travel is restrained and pointer-gated.
- src/app/motion-polish.css:31 - tablet About layout had excessive headline wrapping because of the column gap. Narrow the gap and tune the existing type scale at that breakpoint, preserving the portrait and desktop/phone direction.

## Hierarchy
Keep the hero and primary enquiry action first, followed by a quiet platform overview, credential evidence and detailed expertise. Work examples then demonstrate the offer, founder information identifies the actual delivery contact, process explains the engagement, and FAQ precedes the enquiry. No section was moved merely to create novelty. No automatic service cycling, scroll hijacking, pointer-following objects, forced loading screens or looping portrait effects.

## Verification
Production build passes. Taste source lint on the new motion component and stylesheet: 0 FAIL, 0 WARN. Real-browser checks at 1440, 768, 390 and 320 px found no horizontal page overflow in the inspected views. Verified pause/resume, AI diagram selection, desktop security selection, phone Claude selection, offscreen track pause and static keyboard links. Emulated reduced motion: no track animation, no duplicate set, no entrance targets. Restored normal emulation afterward. The form endpoint and existing validation are untouched. No external enquiry submitted.

The standalone Taste browser inspector was not run because browser interaction is restricted to the approved CUA workflow. Screenshots and DOM checks used that workflow. No frame-rate benchmark or full accessibility certification is claimed.

## Visual critique
ROUND 1
Seen in one second: an independent Salesforce architecture practice with a direct contact path.
Idea: the relationship between Salesforce, governed AI and location context becomes the interactive system diagram.
Live thing: selectable system connections and an expertise explorer with actual deliverables.
Layout: split hero / slim platform band / credential proof / master-detail expertise / work pair / founder introduction / process / FAQ / enquiry.
Scores: design 6.5, usability 8, creativity 6.5, content 8; weighted 7.1, capped at 6.5 under Taste's strict house rubric.
Caps applied: the user's preferred existing multi-line headings, quiet labels, surface outlines and diagram shadows are intentionally retained. This is not a full compliance redesign.
Top three problems addressed: moving long service names competed with scanning; flat page arrivals lacked hierarchy; tablet About headline wrapped excessively. Remaining limitation: public work evidence contains personal demonstrations and service concepts, not claimed client case studies. Genuine completed-project evidence would strengthen trust more than further decorative motion.
