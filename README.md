# Bergen Psychology Services

Static website for Dr. Alan Sheinfil, PhD. The revision introduces a concise homepage, dedicated therapy and approach pages, clear fees and consultation information, and a shared responsive design.

## Publication

The site is maintained on `main`. This revision was prepared in [pull request #1](https://github.com/bergenpsychservices/bergen-psych-srvcs-site/pull/1) and approved for publication on October 28, 2026. It preserves `CNAME` and the existing hosting configuration. Use a separate branch to review future changes before merging them into `main`.

## Preview locally

From the repository directory:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. There is no build step or package installation. The consultation form uses the existing live StaticForms endpoint; do not submit test messages unless you intend to send them to the practice. The separately supplied review preview disables submissions.

## Pages and assets

- `index.html`: homepage
- `about.html`: professional background
- `services.html`: individual therapy overview
- `trauma-therapy.html`, `anxiety-mood-therapy.html`, `substance-use-therapy.html`: focused service information
- `approach.html`: collaborative CBT/ACT-informed treatment
- `faq.html`: practical details, fees, insurance, and appointments
- `get-started.html`: consultation request and contact details
- `thank-you/index.html`: confirmation at `/thank-you/` after successful form submission
- `privacy.html`, `good-faith-estimate.html`: website privacy and estimate rights
- `assets/site.css`, `assets/site.js`: shared styling and navigation enhancements
- `assets/fonts/`: self-hosted Source Serif 4 and Source Sans 3, with licenses
- `sitemap.xml`, `robots.txt`: search discovery

Pages are plain HTML. Shared navigation, footer, metadata, and contact details must be kept consistent when editing. Original portrait, favicon, and logo source remain in `Images/`; the recolored logo is in `assets/`.

See [revision notes](docs/REVISION-NOTES.md) for scope, verification, and launch considerations.

Homepage links use `/` for the canonical homepage URL. The consultation form uses StaticForms’ `redirectTo` field to send successful submissions to `https://bergenpsychologyservices.com/thank-you/`. The confirmation page is excluded from the sitemap and has a `noindex` directive.

The shared footer includes Psychology Today’s official verified seal for profile `1844879`, using badge `11`. Keep the seal link immediately before the provider script: the script relies on this placement. The link has an accessible label and visible fallback text when the seal is unavailable. The privacy notice identifies this external service.

Cloudflare Web Analytics is installed once before the closing body tag on all 12 pages, using the existing analytics site for `bergenpsychologyservices.com`. Automatic injection is disabled to avoid duplicate beacons. View reports in the practice’s Cloudflare account under **Web Analytics → bergenpsychologyservices.com**. The beacon token in the HTML is a public site identifier. Form fields are not passed to analytics. Keep the privacy notice current when changing analytics providers or behavior.

Page copy and search metadata use age-neutral wording. The homepage identifies online therapy coverage in New Jersey, New York, and Texas. The homepage and consultation form state the free 15-minute consultation and 24–48-hour response window. The form offers email or phone contact; JavaScript requires a phone number when phone is selected. All office-address links open Google Maps directions. Social previews use `assets/social-preview.png`, with an editable vector source at `assets/social-preview.svg`.

Google Search Console uses the URL-prefix property `https://bergenpsychologyservices.com/` and the ownership verification file `google103dbca191251484.html`. Keep that file at the website root, unchanged, to maintain verification for the practice’s Google account. The sitemap is `https://bergenpsychologyservices.com/sitemap.xml`.
