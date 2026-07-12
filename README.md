# blitztextweb

Statische Produktwebsite für [Blitztext Linux](https://github.com/TimInTech/blitztext-linux) –
vorgesehen für die Domain `https://blitztext.timintech.de`.

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

Der Produktionsbuild landet im Ordner **`dist/`** und ist für das Hosting am
Domain-Root (`/`) gebaut.

## Seiten

| Route | Inhalt |
| :--- | :--- |
| `/` | Deutsche Startseite |
| `/en/` | Englische Startseite |
| `/impressum/` | Impressum (Vorlage mit markierten Platzhaltern) |
| `/datenschutz/` | Datenschutzerklärung (Deutsch) |
| `/en/privacy/` | Datenschutzerklärung (Englisch) |
| `/404.html` | Fehlerseite |

## Herkunft der Blitztext-Assets

Logo, Screenshots und Tray-Icons in `public/brand/`, `public/screenshots/` und
`public/images/` stammen unverändert bzw. verlustfrei optimiert aus dem
App-Repository [TimInTech/blitztext-linux](https://github.com/TimInTech/blitztext-linux)
(Stand v0.8.1):

- `public/brand/` ← `app/assets/logo-mark*.svg`
- `public/screenshots/` ← `docs/screenshots/linux/` (Dateinamen für das Web vereinheitlicht)
- `public/images/og-*.png` ← `docs/screenshots/linux/Banner-{de,en}.png`

## Noch offen vor dem öffentlichen Deployment

- **Rechtliche Angaben:** Impressum und Datenschutzerklärung enthalten deutlich
  markierte `[PLATZHALTER]` (Betreiber, Anschrift, Kontakt, Hosting-Anbieter/Logdaten).
  Diese müssen vor der Veröffentlichung ausgefüllt werden.
- **Deployment und DNS** waren nicht Bestandteil des Erstellungsauftrags dieser Website.
