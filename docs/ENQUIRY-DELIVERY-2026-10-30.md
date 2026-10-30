# Project enquiry delivery

Replaced unavailable FormSubmit endpoint with owner-created Formspree form xyeepqrg. User completed password creation, terms acceptance and email verification. Notifications go to the owner’s requested Gmail. No provider credentials are in this repository.

The existing three-stage form now submits without leaving the website. It prevents concurrent sends, uses a 25-second timeout, shows success only for an affirmative provider response and keeps the brief available after failure. A prepared email alternative includes the entered brief. Formshield and submission archiving are enabled in Formspree. CAPTCHA was disabled by default and was not changed.

Validation: production build and public security/search checks passed. Local browser submission TEST AVORLUME-20261030-B was accepted, stored in the Formspree inbox and delivered to Gmail Inbox with every field. Reply-To matched the test sender. Free plan currently allows 50 submissions/month and retains dashboard records for 30 days. No automatic client acknowledgement is promised.

Owner workflow: https://formspree.io/forms/xyeepqrg/submissions. Gmail notifications have subject New Avorlume project enquiry. Reply to the message to contact the sender. Keep needed records in the business inbox; check quota and spam if notifications stop.
