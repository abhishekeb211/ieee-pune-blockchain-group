# Registration data flow

Confirmed from `nextjs-app/components/JoinForm.tsx` and `nextjs-app/app/api/join/route.ts`.

The join form does not use a project database. A valid submission is forwarded by the server to the Google Apps Script endpoint that was previously called directly from the browser. That script is outside this repository. Who can open the resulting spreadsheet, and how long rows are kept, is not visible in this code.

## Fields

| Field | Required | Purpose |
| --- | --- | --- |
| Full name | Yes | Identify the person asking to join |
| Email | Yes | Reply about group activities |
| Phone | No | Optional contact |
| IEEE membership number | No | Optional member reference |
| Primary affiliation | Yes | Student, researcher, academician, or industry |
| Organization | No | Institution or employer named by the person |
| Technical interests | Yes, from the listed areas | Match the person to group topics |
| Comments | No | Optional note |
| Company | Hidden | Left empty by people; filled values are discarded and not forwarded |

## Path

Browser form, then `POST /api/join`, then server-side checks, then the Apps Script. The script URL is no longer called from the browser. Requests larger than 8,000 bytes are rejected. Unexpected fields are rejected. The route does not write the submission into application logs.

There is no durable rate limit in this repository. A single serverless instance cannot enforce a global limit without an external store, and none is configured.

Correction or deletion requests go to sonalimpatil@gmail.com, as stated on the join page. This note is not a legal compliance opinion.
