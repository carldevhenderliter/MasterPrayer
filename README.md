# Blessing Studio

A single-page React app for tracking people you bless and pray for: store names, relationships, focus areas, scriptures, declarations, and prayer notes. Dark/light mode, fully static, runs from `index.html`.

## Run locally

1. Open `index.html` in a browser (double-click or `open index.html`).
2. Add a person with name, relationship, and focus areas.
3. Click a person to open their Blessing Card:
   - Add scriptures (reference + text).
   - Add blessing declarations.
   - Add prayer notes (sets “last prayed” date).
   - Toggle Pray Mode for a clean reading layout.
4. Theme toggle in the header switches light/dark. Data saves to `localStorage`.

## Deploy

- Push these files to a GitHub repo and enable GitHub Pages from the root (no build step required).
- Any static host works—only `index.html`, `styles.css`, and `script.js` are needed.
- `blessings.json` provides preset blessing templates used in the app (auto-loaded).

## Data shape

```ts
type FocusArea = "healing" | "provision" | "freedom" | "marriage" | "salvation" | "calling" | "other";

interface PersonBlessing {
  id: string;
  name: string;
  relationship?: string;
  focusAreas: FocusArea[];
  scriptures: { reference: string; text: string }[];
  declarations: string[];
  notes: { date: string; text: string }[];
  lastPrayedAt?: string; // ISO date string
}
```
