# SEO audit

Site: https://ieee-pune-blockchain-group.vercel.app/

Checked against the Next.js app in `nextjs-app` before this pass. Issues below were confirmed in the source, not assumed.

## Issues found

| Issue | Affected URL | Evidence | SEO impact | Priority | Fix in this pass |
| --- | --- | --- | --- | --- | --- |
| No robots.txt | all | No `app/robots.ts` or `public/robots.txt` | Crawlers have no sitemap pointer | P0 | Added `app/robots.ts` |
| No XML sitemap | all | No `app/sitemap.ts` | Public URLs are not listed for discovery | P0 | Added `app/sitemap.ts` with six routes |
| No canonical base | all | `layout.tsx` had no `metadataBase` | Relative Open Graph URLs | P0 | `metadataBase` set to the production URL |
| Gallery and Lab had no unique titles | `/gallery`, `/lab` | Both `page.tsx` files were client components and exported no metadata | They shared the homepage title | P1 | Server pages now export titles and descriptions |
| Events title said Activities | `/activities` | `title: 'Activities \| IEEE Pune Blockchain Group'` while the menu says Events | Title did not match the page name | P1 | Title is now Events |
| No structured data | all | No JSON-LD in the app | Entity relationship was only in visible text | P1 | Organization, WebSite, and BreadcrumbList |
| Homepage title was not the official-site title | `/` | Previous title ended in “IEEE Blockchain Technical Community” | Branded query was less direct | P1 | Title is now “IEEE Pune Blockchain Group \| Official Community Website” |
| Search Console not connected | production | No verification token in the repo | Index coverage cannot be confirmed from this repo | P2 | Not configured. Add the HTML tag or DNS record from Search Console when an owner provides it. Do not invent a token. |

## Not in this pass

- There are no separate event URLs. Events stay on `/activities`, so Event JSON-LD for each program was not added.
- Google Search Console, Analytics, and the Indexing API are not connected. This repo has no credentials.
- Indexing and rankings were not checked in live search.

## Search Console

1. Open Google Search Console and add the property `https://ieee-pune-blockchain-group.vercel.app/`.
2. Verify with the method Google offers (DNS or an HTML meta tag). Put a real token in `layout.tsx` only after Search Console issues it.
3. Submit `https://ieee-pune-blockchain-group.vercel.app/sitemap.xml`.
4. Use URL inspection on `/` after deployment. Submission does not guarantee indexing.
