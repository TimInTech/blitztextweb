import { product } from '../data/product';

/**
 * Deutsche Texte (Standardsprache unter /).
 * Alle Produktaussagen sind im App-Repository TimInTech/blitztext-linux
 * (README.md, docs/setup.md, Release v0.9.0 sowie App-Hauptbranch 6e82ae1) verifiziert.
 */
export const de = {
  lang: 'de',
  htmlLang: 'de',
  otherLangUrl: '/en/',
  meta: {
    title: 'Blitztext Linux – Sprache wird unter Linux zu Text',
    description:
      'Blitztext Linux ist eine Open-Source-Desktop-App für KDE Plasma und Wayland: Sprache per Hotkey aufnehmen, lokal mit Whisper transkribieren, optional per KI verbessern und direkt in die aktive Anwendung einfügen.',
    ogImage: '/images/og-de.png',
    ogImageAlt: 'Blitztext Linux – Dein lokaler KI-Sprachassistent für KDE Plasma und Wayland',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    features: 'Funktionen',
    flow: 'Ablauf',
    screenshots: 'Screenshots',
    install: 'Installation',
    faq: 'FAQ',
    github: 'GitHub',
    githubLabel: 'Blitztext Linux auf GitHub (öffnet das App-Repository)',
    langSwitch: 'English',
    langSwitchLabel: 'Switch to the English version',
    menuLabel: 'Menü',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    homeLabel: 'Blitztext Linux – Startseite',
  },
  hero: {
    badge: `Version ${product.version}`,
    badgeLabel: `Version ${product.version} – Release-Notes auf GitHub ansehen`,
    title: 'Sprache wird unter Linux zu Text.',
    lead: 'Blitztext Linux nimmt deine Stimme per Hotkey oder Klick auf, transkribiert sie standardmäßig lokal mit Whisper und legt den Text in die Zwischenablage – auf Wunsch mit automatischem Einfügen in die aktive Anwendung. Optionale KI-Workflows verbessern den Text, bevor du ihn weiterverwendest.',
    ctaPrimary: 'Installation ansehen',
    ctaSecondary: 'Quellcode auf GitHub',
    imgAlt: 'Single-Panel-Widget von Blitztext Linux mit goldenem Mikrofon-Button, Umschalter „Lokal | Mit KI“ und Werkzeugleiste für Compose, Verlauf und Vorlesen; das Einstellungs-Zahnrad sitzt in der Titelleiste',
    imgCaption: 'Das echte Single-Panel-Widget von Blitztext Linux',
    facts: [
      { label: 'Lizenz', value: 'MIT, Open Source' },
      { label: 'Fokus', value: 'KDE Plasma & Wayland' },
      { label: 'Transkription', value: 'Lokal mit Whisper' },
    ],
  },
  benefits: {
    title: 'Warum Blitztext Linux?',
    items: [
      {
        title: 'Schnell diktieren',
        text: 'Hotkey drücken oder klicken, sprechen, fertig. Aufnahme, Transkription und Ausgabe laufen ohne Umwege durch andere Programme.',
      },
      {
        title: 'Lokal transkribieren',
        text: 'Die Spracherkennung läuft standardmäßig auf deinem Rechner – mit openai-whisper oder faster-whisper, ohne dass Audio deinen Computer verlässt.',
      },
      {
        title: 'Optional verbessern',
        text: 'KI-Workflows formulieren um, glätten den Ton oder ergänzen Emojis – nur wenn du sie bewusst auswählst und einen API-Key hinterlegt hast.',
      },
      {
        title: 'Kopieren oder automatisch einfügen',
        text: 'Der fertige Text landet in der Zwischenablage. Mit aktivem ydotoold fügt Blitztext ihn auf Wunsch direkt an der Cursorposition ein.',
      },
      {
        title: 'Kompakte Desktop-App',
        text: 'Ein schlankes, rahmenloses PyQt6-Widget mit Tray-Icon und deutsch-englischer Oberfläche – gebaut für KDE Plasma unter Wayland.',
      },
    ],
  },
  flow: {
    title: 'So funktioniert es',
    steps: [
      {
        title: 'Aufnahme starten',
        text: 'Per globalem Hotkey (Alt halten) oder per Klick auf das goldene Mikrofon im Widget bzw. im Tray-Menü. Widget und Tray-Icon zeigen den Status: grün bereit, Aufnahme mit laufendem Timer und Wellenbalken.',
      },
      {
        title: 'Transkribieren und optional überarbeiten',
        text: 'Whisper wandelt die Aufnahme lokal in Text um. Auf Wunsch überarbeitet ein KI-Workflow das Ergebnis – mit wählbarer Text-Aktion und einsehbarem Prompt.',
      },
      {
        title: 'Kopieren oder einfügen',
        text: 'Der Text liegt in der Zwischenablage. Ist Auto-Paste aktiv, fügt Blitztext ihn direkt in die Anwendung ein, in der dein Cursor steht.',
      },
    ],
    imgAlt: 'Single-Panel-Widget von Blitztext Linux während einer laufenden Aufnahme mit Timer und animierten Wellenbalken',
  },
  features: {
    title: 'Funktionen',
    lead: 'Alles hier Beschriebene ist im App-Repository dokumentiert und in der Oberfläche nachvollziehbar.',
    cards: [
      {
        title: 'Fünf Workflows per Hotkey',
        text: 'Vom reinen Diktat bis zur KI-Umformulierung: Jeder Workflow hat einen eigenen globalen Hotkey und ist auch per Tray-Menü und Widget erreichbar.',
      },
      {
        title: 'Single-Panel-Widget',
        text: 'Ein kompaktes, rahmenloses Fenster mit goldenem Mikrofon-Button, Statuspunkt, Timer, Wellenbalken und einer Werkzeugleiste für Compose, Verlauf, Vorlesen und Einstellungen.',
      },
      {
        title: 'Fünf Text-Aktionen',
        text: 'Text verbessern, Kürzen, Ausformulieren, Tonfall ändern oder eine eigene Anweisung – wählbar im Widget, im Compose-Fenster und in den Einstellungen.',
      },
      {
        title: 'Compose-Fenster',
        text: 'Text tippen, einfügen oder hineindiktieren und ohne Mikrofon-Umweg per KI überarbeiten lassen – mit Text-Aktion, Tonfall-Auswahl und Signatur-Unterstützung.',
      },
      {
        title: 'Variantenverlauf',
        text: 'Die KI-Ergebnisse einer Sitzung bleiben im Compose-Fenster erhalten – jederzeit über die Pfeile am Ergebnisfeld durchblättern.',
      },
      {
        title: 'Prompt-Transparenz',
        text: 'Vor jedem KI-Aufruf lassen sich System-Prompt und Nutzernachricht anzeigen und vollständig bearbeiten. Keine Blackbox.',
      },
      {
        title: 'Aufnahmen verwerfen und Updates',
        text: 'Laufende Aufnahmen lassen sich ohne Transkription verwerfen. Öffentliche stabile Releases können auf Wunsch direkt in der App geladen und installiert werden.',
      },
      {
        title: 'Diktatmodus und Verlauf',
        text: 'Im Diktatmodus wird jedes Transkript als Markdown-Notiz gespeichert und auf Wunsch zusammengeführt. Der Verlauf hält die letzten Transkripte bereit.',
      },
      {
        title: 'Vorlesen mit Audio-Export',
        text: 'Beliebigen Text vorlesen lassen – lokal mit Piper TTS (Standard) oder optional per OpenAI Cloud TTS – und die Ausgabe als Audiodatei exportieren.',
      },
      {
        title: 'Eigene Begriffe',
        text: 'Namen, Fachwörter und Spezialbegriffe lassen sich hinterlegen, damit Transkription und KI-Workflows sie korrekt schreiben.',
      },
      {
        title: 'Deutsch und Englisch',
        text: 'Die App-Oberfläche gibt es vollständig auf Deutsch und Englisch – umschaltbar in den Einstellungen.',
      },
      {
        title: 'Konfiguration und Secrets getrennt',
        text: 'Die Konfiguration liegt mit restriktiven Rechten (0600) unter ~/.config/blitztext-linux/. API-Keys stehen nie in der Config, sondern kommen aus Umgebungsvariablen (secrets.env).',
      },
    ],
    workflowsTitle: 'Die fünf Workflows',
    workflowsNote:
      'Workflows mit KI-Kennzeichnung benötigen einen API-Key für OpenAI, OpenRouter oder einen eigenen OpenAI-kompatiblen Endpoint. Ohne Key bleiben sie deaktiviert – Diktat und lokale Transkription funktionieren weiterhin.',
    colWorkflow: 'Workflow',
    colHotkey: 'Hotkey',
    colLlm: 'KI',
    colDesc: 'Beschreibung',
    llmYes: 'Ja',
    llmNo: 'Nein',
    workflows: [
      { name: 'Diktieren', hotkey: 'Alt (halten)', llm: false, desc: 'Standard: aufnehmen, transkribieren, Text ausgeben.' },
      { name: 'Diktieren · lokal', hotkey: 'Meta + Shift + H', llm: false, desc: 'Erzwingt eine rein lokale Offline-Transkription.' },
      { name: 'Diktieren & verbessern', hotkey: 'Meta + Shift + T', llm: true, desc: 'Transkribiert und schreibt das Ergebnis mit der gewählten Text-Aktion um.' },
      { name: 'Sachlich formulieren', hotkey: 'Meta + Shift + D', llm: true, desc: 'Dampf ablassen: macht aus Frust eine sachliche Nachricht.' },
      { name: 'Emojis ergänzen', hotkey: 'Meta + Shift + E', llm: true, desc: 'Reichert die Nachricht mit passenden Emojis an.' },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    lead: 'Echte Ansichten aus Blitztext Linux – keine Mockups.',
    items: [
      {
        src: '/screenshots/main-idle-de.png',
        alt: 'Single-Panel-Widget mit goldenem Mikrofon-Button, Umschalter „Lokal | Mit KI“, Zustandszeile und Werkzeugleiste',
        caption: 'Widget: bereit',
      },
      {
        src: '/screenshots/main-recording-de.png',
        alt: 'Single-Panel-Widget während einer laufenden Aufnahme mit gelbem Statuspunkt, Timer und animierten Wellenbalken',
        caption: 'Widget: Aufnahme läuft',
      },
      {
        src: '/screenshots/main-processing-de.png',
        alt: 'Single-Panel-Widget während der Transkription mit rotierendem goldenem Fortschrittsring um das Mikrofon',
        caption: 'Widget: Transkription',
      },
      {
        src: '/screenshots/main-menu-de.png',
        alt: 'Detail-Popup des Widgets für „Mit KI“ mit Aktion, Schreibstil, KI-Anbieter, Whisper-Modell, Fertig, Sammel-Diktat und Verwerfen',
        caption: 'Widget: Lokal | Mit KI und Details',
      },
      {
        src: '/screenshots/compose-de.png',
        alt: 'Compose-Fenster mit Entwurfsbereich links, KI-Ergebnis rechts, Text-Aktion sowie Schaltflächen zum Verbessern, Kopieren und Einfügen',
        caption: 'Compose-Fenster (Entwurf)',
      },
      {
        src: '/screenshots/compose-prompt-de.png',
        alt: 'Compose-Fenster mit ausgeklappter eigener Anweisung und Schaltfläche zum Prüfen des Prompts',
        caption: 'Compose-Fenster: eigene Anweisung',
      },
      {
        src: '/screenshots/settings-speech-de.png',
        alt: 'Einstellungen, Tab Spracherkennung: Whisper-Modell, Backend, Sprache, Hotkey-Modus und Aufnahmetaste',
        caption: 'Einstellungen: Spracherkennung',
      },
      {
        src: '/screenshots/settings-ai-de.png',
        alt: 'Einstellungen, Tab Text & KI: System-Prompt, API-Key-Umgebungsvariable, LLM-Anbieter, Basis-URL, Modell, Text-Aktion und Emoji-Dichte',
        caption: 'Einstellungen: Text & KI',
      },
      {
        src: '/screenshots/settings-general-de.png',
        alt: 'Einstellungen, Tab Allgemein: Auto-Paste, Notizordner, Verlaufsgröße, Sprache der Oberfläche und Signatur',
        caption: 'Einstellungen: Allgemein',
      },
      {
        src: '/screenshots/history-de.png',
        alt: 'Verlaufsfenster mit den letzten Transkripten und Schaltflächen zum Kopieren und Löschen einzelner Einträge',
        caption: 'Transkript-Verlauf',
      },
      {
        src: '/screenshots/tts-de.png',
        alt: 'Vorlesen-Fenster mit Texteingabe, Stimmen-Auswahl und Schaltflächen zum Vorlesen und Exportieren als Audiodatei',
        caption: 'Vorlesen mit Audio-Export',
      },
      {
        src: '/screenshots/tray-menu-de.png',
        alt: 'Tray-Kontextmenü mit allen fünf Workflows, Compose-Fenster, Text-Aktionen, Diktatmodus, Verlauf und Einstellungen',
        caption: 'Tray-Menü',
      },
    ],
    trayTitle: 'Der Status auf einen Blick',
    trayLead: 'Das Tray-Icon zeigt jederzeit, was Blitztext gerade tut:',
    trayStates: [
      { src: '/screenshots/tray-idle.png', alt: 'Grünes Mikrofon-Tray-Icon', label: 'Grün: bereit' },
      { src: '/screenshots/tray-recording.png', alt: 'Rotes Mikrofon-Tray-Icon', label: 'Rot: Aufnahme läuft' },
      { src: '/screenshots/tray-processing.png', alt: 'Oranges Mikrofon-Tray-Icon', label: 'Orange: Transkription/KI arbeitet' },
      { src: '/screenshots/tray-error.png', alt: 'Graues Mikrofon-Tray-Icon', label: 'Grau: Fehler' },
    ],
  },
  localCloud: {
    title: 'Local-first – Cloud nur, wenn du willst',
    lead: 'Blitztext trennt klar zwischen lokaler Verarbeitung und optionalen Cloud-Funktionen.',
    localTitle: 'Läuft lokal auf deinem Rechner',
    localItems: [
      'Whisper-Transkription (openai-whisper oder faster-whisper) – der Workflow „Blitztext Local“ erzwingt sie sogar ausdrücklich',
      'Vorlesen mit Piper TTS (Standard-Anbieter)',
      'Diktat-Notizen und Verlauf – gespeichert ausschließlich in deinem Home-Verzeichnis',
      'Konfiguration unter ~/.config/blitztext-linux/ mit Dateirechten 0600',
    ],
    cloudTitle: 'Optional: Cloud-Funktionen',
    cloudItems: [
      'KI-Workflows (Diktieren & verbessern, Sachlich formulieren, Emojis ergänzen) und das Compose-Fenster nutzen einen LLM-Anbieter: OpenAI, OpenRouter oder einen eigenen OpenAI-kompatiblen Endpoint',
      'Cloud-TTS über OpenAI als Alternative zu Piper – mit einmaliger, ausdrücklicher Bestätigung vor der ersten Nutzung',
      'Ein API-Key wird nur für diese optionalen Funktionen benötigt – hinterlegt als Umgebungsvariable, nie in der Konfigurationsdatei',
    ],
    note: 'Wichtig: Wenn du Cloud-Funktionen aktivierst, wird der zu verarbeitende Text (bzw. das Transkript) an den von dir gewählten Anbieter übertragen. Ohne aktivierte Cloud-Funktionen und ohne API-Key bleiben Aufnahme und Transkription auf deinem Rechner.',
  },
  install: {
    title: 'Installation',
    lead: 'Der empfohlene Weg ist das Installationsskript aus dem App-Repository. Es ist idempotent, prüft dein System (Ubuntu/Debian-Basis) und richtet alles ein – inklusive virtueller Python-Umgebung und Whisper.',
    steps: [
      {
        title: '1. Installieren',
        cmd: 'git clone https://github.com/TimInTech/blitztext-linux.git\ncd blitztext-linux\nbash scripts/install.sh',
        text: 'Das Skript fragt den Betriebsmodus ab: globale Hotkeys (erfordert die input-Gruppe) oder Bedienung nur über Fenster und Tray.',
      },
      {
        title: '2. Installation prüfen',
        cmd: 'bash scripts/verify.sh',
        text: 'Wichtig bei Hotkey-Modus: einmal neu anmelden oder neu starten, damit die input-Gruppe aktiv wird. Das Skript liefert Diagnose zu X11/Wayland und Clipboard-Backends.',
      },
      {
        title: '3. Manuell starten',
        cmd: './run.sh',
        text: 'Erscheint das Tray-Icon und reagieren die Hotkeys? Dann ist alles eingerichtet.',
      },
      {
        title: '4. Autostart aktivieren (optional)',
        cmd: 'systemctl --user start blitztext-linux',
        text: 'Startet Blitztext als systemd-User-Service.',
      },
    ],
    copy: 'Befehl kopieren',
    copied: 'Kopiert!',
    docsText: 'Alle Details, manuelle Installation und Fehlersuche:',
    docsLink: 'Setup-Dokumentation im App-Repository',
    flatpakTitle: 'Hinweis zu Flatpak',
    flatpakText:
      'Im App-Repository existiert ein experimenteller Flatpak-Manifest-Spike. Er ist kein Release-Kanal und nicht auf Flathub veröffentlicht. In der Sandbox fehlen zudem globale Hotkeys, Auto-Paste und die lokale Whisper-Transkription. Empfohlen bleibt das Installationsskript.',
  },
  compat: {
    title: 'Kompatibilität',
    lead: 'Blitztext Linux wird auf Kubuntu mit KDE Plasma unter Wayland entwickelt und ist dort sowie auf Ubuntu 24.04 und 26.04 mit GNOME unter Wayland getestet. Linux Mint und Lubuntu bleiben ungetestet.',
    colSystem: 'System',
    colSession: 'Session',
    colStatus: 'Status',
    colNotes: 'Hinweise',
    statusTested: 'Getestet',
    statusUntested: 'Ungetestet',
    rows: [
      { system: 'Kubuntu 26.04, KDE Plasma', session: 'Wayland', tested: true, notes: 'Referenzumgebung; ydotool ≥ 1.0 direkt über apt verfügbar.' },
      { system: 'Ubuntu 24.04, GNOME', session: 'Wayland', tested: true, notes: 'Clean-Install und Live-Test abgeschlossen; ydotool 0.1.8 wird über symbolische Tastenkombinationen unterstützt.' },
      { system: 'Ubuntu 26.04, GNOME', session: 'Wayland', tested: true, notes: 'Clean-Install und Live-Test abgeschlossen: GUI, Tray, Aufnahme, lokales Whisper, Hotkey, Zwischenablage, Auto-Paste und Autostart geprüft.' },
      { system: 'Linux Mint 22.x, Cinnamon', session: 'X11', tested: false, notes: 'Ungetestet. xclip ist voraussichtlich das Clipboard-Backend; Session und ydotoold separat prüfen.' },
      { system: 'Lubuntu 24.04 / 26.04, LXQt', session: 'X11 / Wayland', tested: false, notes: 'Ungetestet. Der Session-Typ bestimmt das Clipboard-Backend – scripts/verify.sh zeigt, was gilt.' },
    ],
    note: 'Diese Matrix beschreibt verifizierte Tests und bekannte Voraussetzungen. Sie ist keine Supportzusage für ungetestete Systeme.',
    limitsTitle: 'Einschränkungen, die du kennen solltest',
    limits: [
      'Auto-Paste benötigt ein laufendes ydotoold. Blitztext unterstützt Ubuntu 24.04s ydotool 0.1.8 mit symbolischen Tastenkombinationen und ydotool ≥ 1.0 mit rohen Keycodes.',
      'Globale Hotkeys nutzen evdev und erfordern die Mitgliedschaft in der input-Gruppe. Systemweit können damit alle Prozesse des Benutzers Eingaben mitlesen – Blitztext daher nur in vertrauenswürdigen Umgebungen einsetzen.',
      'Ohne globale Hotkeys bleibt Blitztext voll bedienbar – über das Widget und das Tray-Menü.',
      'Fehlt ein Tray-Bereich, fällt das Icon auf das System-Theme zurück; die Farbkodierung kann dann entfallen.',
    ],
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        q: 'Läuft Blitztext vollständig lokal?',
        a: 'Die Transkription läuft standardmäßig lokal mit Whisper, ebenso das Vorlesen mit Piper. Vollständig lokal bleibt Blitztext, solange du keine KI-Workflows oder Cloud-TTS nutzt. Aktivierst du diese optionalen Funktionen, wird der zu verarbeitende Text an den gewählten Anbieter (z. B. OpenAI oder OpenRouter) übertragen.',
      },
      {
        q: 'Brauche ich einen API-Key?',
        a: 'Nur für die optionalen KI-Funktionen: die Workflows Diktieren & verbessern, Sachlich formulieren und Emojis ergänzen, das Compose-Fenster und Cloud-TTS. Diktat und lokale Transkription funktionieren ohne Key. Der Key wird als Umgebungsvariable hinterlegt (z. B. in ~/.config/blitztext-linux/secrets.env), nie in der Konfigurationsdatei.',
      },
      {
        q: 'Welche Linux-Systeme sind getestet?',
        a: 'Getestet sind Kubuntu mit KDE Plasma unter Wayland sowie Ubuntu 24.04 und 26.04 mit GNOME unter Wayland. Linux Mint (Cinnamon) und Lubuntu (LXQt) bleiben ungetestet; die Kompatibilitätsmatrix oben ist eine Diagnose-Einordnung, keine Supportzusage.',
      },
      {
        q: 'Funktioniert Auto-Paste unter Wayland?',
        a: 'Ja. Getestet auf Kubuntu mit KDE Plasma sowie Ubuntu 24.04 und 26.04 mit GNOME unter Wayland. Ubuntu 24.04s ydotool 0.1.8 nutzt symbolische Tastenkombinationen, ydotool ≥ 1.0 rohe Keycodes. Voraussetzung bleibt ein laufendes ydotoold; ungetestete Systeme erhalten daraus keine Supportzusage.',
      },
      {
        q: 'Kann ich Blitztext ohne globalen Hotkey verwenden?',
        a: 'Ja. Das Installationsskript bietet einen Modus ohne globale Hotkeys an. Aufnahme, Workflows, Diktat und Verlauf sind vollständig über das Widget und das Tray-Menü bedienbar.',
      },
      {
        q: 'Wo werden Konfiguration und Secrets gespeichert?',
        a: 'Die Konfiguration liegt unter ~/.config/blitztext-linux/config.json und wird mit restriktiven Rechten (0600) geschrieben. API-Keys stehen nie in dieser Datei – sie werden zur Laufzeit aus Umgebungsvariablen gelesen, empfohlen über ~/.config/blitztext-linux/secrets.env.',
      },
      {
        q: 'Ist Blitztext kostenlos und Open Source?',
        a: 'Ja. Blitztext Linux ist Open Source unter der MIT-Lizenz und kostenlos. Der gesamte Quellcode liegt öffentlich auf GitHub. Kosten können nur bei den optionalen Cloud-Anbietern entstehen, wenn du deren APIs mit eigenem Key nutzt.',
      },
      {
        q: 'Ist Flatpak bereits der empfohlene Installationsweg?',
        a: 'Nein. Es gibt einen experimentellen Flatpak-Spike im Repository, aber keinen Flatpak-Release-Kanal und keine Flathub-Veröffentlichung. In der Sandbox fehlen außerdem globale Hotkeys, Auto-Paste und lokales Whisper. Empfohlen ist das Installationsskript scripts/install.sh.',
      },
    ],
  },
  cta: {
    title: 'Bereit zum Diktieren?',
    text: 'Blitztext Linux ist Open Source, kostenlos und in wenigen Minuten eingerichtet.',
    primary: 'Jetzt installieren',
    secondary: 'Neuestes Release ansehen',
  },
  footer: {
    productTitle: 'Produkt',
    links: {
      repo: 'App-Repository',
      releases: 'Releases',
      install: 'Installation',
      license: 'Lizenz (MIT)',
      setupDocs: 'Setup-Dokumentation',
    },
    legalTitle: 'Rechtliches',
    legal: {
      privacy: 'Datenschutz',
      imprint: 'Impressum',
    },
    websiteTitle: 'Diese Website',
    tagline: 'Blitztext Linux ist ein Open-Source-Projekt unter MIT-Lizenz.',
    langNote: 'Diese Seite gibt es auch auf Englisch.',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    back: 'Zur Startseite',
    backEn: 'To the English homepage',
  },
};
