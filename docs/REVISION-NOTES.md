# Website revision

## Result

Visitors can now identify the practice's adult therapy focus, understand what working with Dr. Sheinfil involves, find fees and appointment information, and reach a consistent consultation request page. Detailed material has moved from one long homepage into focused pages.

The visual design uses deep sage, warm ivory, linen, restrained clay contour lines, Source Serif 4 headings, and Source Sans 3 body text. The existing portrait and brand mark are retained. Practice photographs and fonts load locally without external font requests. The footer’s Psychology Today verified seal loads from Psychology Today. Cloudflare Web Analytics measures aggregate website traffic and page performance, as described in the website privacy notice.

The clinical copy emphasizes collaborative CBT/ACT-informed therapy and practical examples, without treatment guarantees or claims about questionnaires that have not been established. Testing and adolescent services are not promoted in this adult-focused revision.

## Existing practice details preserved

- $250 per 50-minute individual session and a free 15-minute consultation.
- Private-pay, out-of-network status and superbills for possible reimbursement.
- Direct phone: (201) 366-2442; email: alan@bergenpsychologyservices.com.
- Office: 2 University Plaza Drive, Suite 100, Hackensack, NJ 07601.
- Telehealth and in-person sessions by arrangement; stated licensure in New Jersey, New York, and Texas.
- The original payment methods and StaticForms destination/public form identifier.

The directory phone number in the recommendation document was not substituted for the direct number already used by the practice website. Appointment availability, sliding-scale openings, and cancellation terms have not been invented.

## Consultation and privacy

The form requests name and email, with optional phone and preferred contact time. The clinical free-text field has been removed. Native validation and a normal POST are used; no client-side success message pretends to confirm delivery. The privacy notice describes the form/email flow and avoids claiming that the website inquiry channel is HIPAA compliant.

Automated form checks intercepted the POST locally. No inquiry was delivered, and delivery through the practice's actual provider account has not been tested. Before launch, the practice should verify delivery and confirm that its form/email workflow and clinical privacy materials match its operations.

## Verification

Verified on October 28, 2026:

- All 11 pages at widths of 1440, 1024, 768, 390, and 320 pixels: no horizontal overflow, missing images, or font-loading failures.
- Automated axe checks using WCAG 2 A/AA, 2.1 AA, and 2.2 AA tags: no violations on all 11 desktop pages, plus the mobile FAQ with an answer expanded. Automated scans do not establish complete accessibility conformance.
- 355 internal links, file references, and fragments; unique page titles, descriptions, and element IDs; one H1 and valid JSON-LD per page.
- Keyboard skip link, mobile menu, Escape behavior, FAQ disclosure, consultation navigation, required-field validation, and intercepted form fields.
- No JavaScript errors or external page-load requests.
- Visual review of desktop and mobile homepage layouts and the consultation page.

## Sources and publication

Professional background: [FDU faculty profile](https://www.fdu.edu/profiles/a-sheinfil/).

Good Faith Estimate information: [CMS estimate guidance](https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/get-help/guides-resources/what-good-faith-estimate) and [CMS uninsured/self-pay rights](https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance), checked October 28, 2026. The website notice is not an individualized estimate.

The practice owner approved publication on October 28, 2026. [Pull request #1](https://github.com/bergenpsychservices/bergen-psych-srvcs-site/pull/1) records the revision and its merge status. The revision preserves `CNAME` and the existing hosting configuration; it does not configure DNS or enroll Search Console. Actual form delivery remains unverified, as described above.

## Navigation and consultation confirmation

Logo, Home, and footer brand links point to `/`, so visitors return to the clean homepage URL. Successful consultation submissions use the documented StaticForms `redirectTo` field to reach the site’s `/thank-you/` page. Its message states that Dr. Sheinfil will reach out within 24–48 hours at the visitor’s preferred contact time, as requested by the practice owner.

The confirmation page uses the shared visual design and provides homepage and FAQ links. It is marked `noindex` and omitted from the sitemap. Form processing remains with StaticForms; the site does not show success before the provider accepts a request.

Reference: [StaticForms success redirect documentation](https://www.staticforms.dev/docs/quick-start).

Verification: checked all 12 pages at five widths, 48 shared homepage links, and 398 internal references. The confirmation page passed desktop/mobile axe checks. Browser checks covered clean homepage navigation, required fields, an intercepted success redirect, a provider error response, and the native form flow with JavaScript disabled. All form submissions were intercepted locally; no email was sent.
