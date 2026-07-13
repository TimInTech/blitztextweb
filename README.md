# blitztextweb

Statische Produktwebsite für [Blitztext Linux](https://github.com/TimInTech/blitztext-linux),
veröffentlicht über GitHub Pages unter `https://timintech.github.io/blitztextweb/`.

Dieses Repository enthält **ausschließlich die Website**. Die Desktop-App lebt im
getrennten Repository [TimInTech/blitztext-linux](https://github.com/TimInTech/blitztext-linux).
Die Website ist eigenständig klonbar und baubar – sie hat keine Build- oder
Laufzeitabhängigkeit zum App-Repository.

## Stack

- [Astro](https://astro.build/) mit statischer Ausgabe (`output: 'static'`)
- TypeScript (strict), reines CSS, minimales Vanilla-JS (Mobile-Navigation, Copy-Buttons)
- Keine externen CDN-Ressourcen, keine Webfonts, keine Analytics, keine Cookies

## Voraussetzungen

- Node.js ≥ 20
- npm

## Entwicklung

```bash
npm ci            # Abhängigkeiten installieren (nutzt package-lock.json)
npm run dev       # Entwicklungsserver (http://localhost:4321)
npm run check     # Astro-/TypeScript-Prüfung
npm run build     # Produktionsbuild → dist/
npm run preview   # gebauten Stand lokal ansehen
```

Der Produktionsbuild landet im Ordner **`dist/`** und ist für die Auslieferung
unter dem GitHub-Pages-Unterpfad **`/blitztextweb/`** gebaut
(`base: '/blitztextweb'` in `astro.config.mjs`).

## Seiten

Alle Routen werden unter dem Unterpfad `/blitztextweb/` ausgeliefert.

| Route | Inhalt |
| :--- | :--- |
| `/blitztextweb/` | Deutsche Startseite |
| `/blitztextweb/en/` | Englische Startseite |
| `/blitztextweb/impressum/` | Impressum (Vorlage mit markierten Platzhaltern) |
| `/blitztextweb/datenschutz/` | Datenschutzerklärung (Deutsch) |
| `/blitztextweb/en/privacy/` | Datenschutzerklärung (Englisch) |
| `/blitztextweb/404.html` | Fehlerseite |

## Herkunft der Blitztext-Assets

Logo, Screenshots und Tray-Icons in `public/brand/`, `public/screenshots/` und
`public/images/` stammen unverändert bzw. verlustfrei optimiert aus dem
App-Repository [TimInTech/blitztext-linux](https://github.com/TimInTech/blitztext-linux)
(Stand v0.8.1):

- `public/brand/` ← `app/assets/logo-mark*.svg`
- `public/screenshots/` ← `docs/screenshots/linux/` (Dateinamen für das Web vereinheitlicht)
- `public/images/og-*.png` ← `docs/screenshots/linux/Banner-{de,en}.png`

## Deployment

Gehostet wird **ausschließlich über GitHub Pages** (Project Page) unter:

`https://timintech.github.io/blitztextweb/`

Es wird **keine Custom Domain** verwendet – es gibt keine `CNAME`-Datei und
keine DNS-Konfiguration.

- Deployment über GitHub Actions, Workflow `.github/workflows/deploy-pages.yml`
  (Trigger: Push auf `main` oder manueller `workflow_dispatch`). Der
  Produktionsbuild in **`dist/`** wird als Pages-Artefakt veröffentlicht.
- Pull Requests werden nur von `.github/workflows/ci.yml` geprüft (Build ohne
  Deploy) und deployen niemals.
- Die Schreibrechte `pages: write` / `id-token: write` gelten ausschließlich für
  den Deploy-Job; Build und Workflow-Ebene laufen mit `contents: read`.
- Die eigentliche **Aktivierung von GitHub Pages** (Settings → Pages → Source:
  *GitHub Actions*) erfolgt manuell und ist nicht Teil dieses Repos.

## Noch offen vor dem öffentlichen Deployment

- **Rechtliche Angaben:** Das Impressum enthält deutlich markierte
  `[PLATZHALTER]` (Betreiber, Anschrift, Kontakt). Diese sind rechtlich
  erforderlich (u. a. § 5 DDG) und müssen vom Betreiber ausgefüllt werden, bevor
  GitHub Pages öffentlich aktiviert wird.
