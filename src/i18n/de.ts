import { product } from '../data/product';

/**
 * Deutsche Texte (Standardsprache unter /).
 * Alle Produktaussagen sind im App-Repository TimInTech/blitztext-linux
 * (README.md, docs/setup.md, Release v0.8.1) verifiziert.
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
    imgAlt: 'Hauptfenster von Blitztext Linux mit Workflow-Auswahl, Schreibstil-Vorlage, Aufnahmeknopf und Statusanzeige „Bereit“',
    imgCaption: 'Das echte Hauptfenster von Blitztext Linux v0.8.1',
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
        text: 'Der fertige Text landet in der Zwischenablage. Mit ydotool ab Version 1.0 fügt Blitztext ihn auf Wunsch direkt an der Cursorposition ein.',
      },
      {
        title: 'Kompakte Desktop-App',
        text: 'Eine schlanke PyQt6-Anwendung mit Tray-Icon, Hauptfenster und deutsch-englischer Oberfläche – gebaut für KDE Plasma unter Wayland.',
      },
    ],
  },
  flow: {
    title: 'So funktioniert es',
    steps: [
      {
        title: 'Aufnahme starten',
        text: 'Per globalem Hotkey (z. B. Meta+H) oder per Klick im Hauptfenster bzw. Tray-Menü. Das Tray-Icon zeigt den Status: grün bereit, rot Aufnahme.',
      },
      {
        title: 'Transkribieren und optional überarbeiten',
        text: 'Whisper wandelt die Aufnahme lokal in Text um. Auf Wunsch überarbeitet ein KI-Workflow das Ergebnis – mit wählbarem Schreibstil und einsehbarem Prompt.',
      },
      {
        title: 'Kopieren oder einfügen',
        text: 'Der Text liegt in der Zwischenablage. Ist Auto-Paste aktiv, fügt Blitztext ihn direkt in die Anwendung ein, in der dein Cursor steht.',
      },
    ],
    imgAlt: 'Hauptfenster von Blitztext Linux während einer laufenden Aufnahme mit rotem Statusindikator',
  },
  features: {
    title: 'Funktionen',
    lead: 'Alles hier Beschriebene ist im aktuellen Release v0.8.1 enthalten und im App-Repository dokumentiert.',
    cards: [
      {
        title: 'Fünf Workflows per Hotkey',
        text: 'Vom reinen Diktat bis zur KI-Umformulierung: Jeder Workflow hat einen eigenen globalen Hotkey und ist auch per Tray-Menü und Hauptfenster erreichbar.',
      },
      {
        title: 'Schreibstil-Presets',
        text: 'Neun fertige Vorlagen – von „E-Mail formell“ über „Stichpunkte“ bis „Kurz & präzise“ – plus eine frei definierbare eigene Vorlage.',
      },
      {
        title: 'Compose-Fenster',
        text: 'Text tippen oder einfügen und ohne Mikrofon per KI überarbeiten lassen – mit Workflow-, Preset- und Tonfall-Auswahl sowie Signatur-Unterstützung.',
      },
      {
        title: 'Variantenverlauf',
        text: 'Die letzten zehn KI-Ergebnisse einer Sitzung bleiben im Compose-Fenster erhalten – jederzeit vergleichen und per Klick wiederherstellen.',
      },
      {
        title: 'Prompt-Transparenz',
        text: 'Vor jedem KI-Aufruf lassen sich System-Prompt und Nutzernachricht anzeigen und vollständig bearbeiten. Keine Blackbox.',
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
      { name: 'Blitztext', hotkey: 'Meta + H', llm: false, desc: 'Standard: aufnehmen, transkribieren, Text ausgeben.' },
      { name: 'Blitztext Local', hotkey: 'Meta + Shift + H', llm: false, desc: 'Erzwingt eine rein lokale Offline-Transkription.' },
      { name: 'Blitztext+', hotkey: 'Meta + Shift + T', llm: true, desc: 'Formuliert die Aufnahme professionell um – mit wählbarem Schreibstil.' },
      { name: 'Blitztext $%&!', hotkey: 'Meta + Shift + D', llm: true, desc: 'Dampf ablassen: macht aus Frust eine sachliche Nachricht.' },
      { name: 'Blitztext :)', hotkey: 'Meta + Shift + E', llm: true, desc: 'Reichert die Nachricht mit passenden Emojis an.' },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    lead: 'Echte Ansichten aus Blitztext Linux v0.8.1 – keine Mockups.',
    items: [
      {
        src: '/screenshots/main-window-de.png',
        alt: 'Hauptfenster mit Workflow-Dropdown, Schreibstil-Vorlage, Aufnahmeknopf, Status „Bereit“ sowie Schaltflächen für Diktat und Verlauf',
        caption: 'Hauptfenster',
      },
      {
        src: '/screenshots/recording-de.png',
        alt: 'Hauptfenster während einer laufenden Aufnahme mit rotem Statuspunkt und laufender Zeitanzeige',
        caption: 'Laufende Aufnahme',
      },
      {
        src: '/screenshots/compose-de.png',
        alt: 'Compose-Fenster mit Entwurfsbereich links, KI-Ergebnis rechts, Workflow- und Vorlagenauswahl sowie Schaltflächen zum Verbessern, Kopieren und Einfügen',
        caption: 'Compose-Fenster (Entwurf)',
      },
      {
        src: '/screenshots/settings-speech-de.png',
        alt: 'Einstellungen, Tab Spracherkennung: Whisper-Modell, Backend, Sprache, Hotkey-Modus und Aufnahmetaste',
        caption: 'Einstellungen: Spracherkennung',
      },
      {
        src: '/screenshots/settings-ai-workflows-de.png',
        alt: 'Einstellungen, Tab KI-Workflows: LLM-Anbieter, API-Key-Umgebungsvariable, Basis-URL, Modell, Tonfall und Schreibstil-Vorlage',
        caption: 'Einstellungen: KI-Workflows',
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
        alt: 'Tray-Kontextmenü mit allen fünf Workflows, Compose-Fenster, Schreibstil-Vorlagen, Diktatmodus, Verlauf und Einstellungen',
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
      'KI-Workflows (Blitztext+, Blitztext $%&!, Blitztext :)) und das Compose-Fenster nutzen einen LLM-Anbieter: OpenAI, OpenRouter oder einen eigenen OpenAI-kompatiblen Endpoint',
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
    lead: 'Blitztext Linux wird auf Kubuntu mit KDE Plasma unter Wayland entwickelt und systematisch getestet. Andere Ubuntu-/Debian-basierte Systeme können funktionieren, sind aber nicht systematisch getestet.',
    colSystem: 'System',
    colSession: 'Session',
    colStatus: 'Status',
    colNotes: 'Hinweise',
    statusTested: 'Getestet',
    statusUntested: 'Ungetestet',
    rows: [
      { system: 'Kubuntu 26.04, KDE Plasma', session: 'Wayland', tested: true, notes: 'Referenzumgebung; ydotool ≥ 1.0 direkt über apt verfügbar.' },
      { system: 'Ubuntu 24.04, GNOME', session: 'Wayland', tested: false, notes: 'apt liefert nur ydotool 0.1.x → kein Auto-Paste (Zwischenablage funktioniert); Tray benötigt AppIndicator-Erweiterung.' },
      { system: 'Ubuntu 26.04, GNOME', session: 'Wayland', tested: false, notes: 'Tray benötigt AppIndicator-Erweiterung; Whisper-Wheels können neuen Python-Versionen hinterherhinken.' },
      { system: 'Linux Mint 22.x, Cinnamon', session: 'X11', tested: false, notes: 'xclip statt wl-copy als Clipboard-Backend; apt-ydotool 0.1.x → kein Auto-Paste.' },
      { system: 'Lubuntu 24.04 / 26.04, LXQt', session: 'X11 / Wayland', tested: false, notes: 'Session-Typ bestimmt das Clipboard-Backend – scripts/verify.sh zeigt, was gilt.' },
    ],
    note: 'Diese Matrix stammt aus der Diagnose-Dokumentation des Projekts. Sie beschreibt erwartetes Verhalten und bekannte Risiken – sie ist keine Supportzusage.',
    limitsTitle: 'Einschränkungen, die du kennen solltest',
    limits: [
      'Auto-Paste benötigt ydotool ab Version 1.0. Ubuntu 24.04 und 22.04 liefern über apt nur 0.1.x – dort funktioniert die Zwischenablage, aber kein automatisches Einfügen (oder ydotool selbst kompilieren).',
      'Globale Hotkeys nutzen evdev und erfordern die Mitgliedschaft in der input-Gruppe. Systemweit können damit alle Prozesse des Benutzers Eingaben mitlesen – Blitztext daher nur in vertrauenswürdigen Umgebungen einsetzen.',
      'Ohne globale Hotkeys bleibt Blitztext voll bedienbar – über Hauptfenster und Tray-Menü.',
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
        a: 'Nur für die optionalen KI-Funktionen: die Workflows Blitztext+, Blitztext $%&! und Blitztext :), das Compose-Fenster und Cloud-TTS. Diktat und lokale Transkription funktionieren ohne Key. Der Key wird als Umgebungsvariable hinterlegt (z. B. in ~/.config/blitztext-linux/secrets.env), nie in der Konfigurationsdatei.',
      },
      {
        q: 'Welche Linux-Systeme sind getestet?',
        a: 'Systematisch getestet ist Kubuntu mit KDE Plasma unter Wayland. Ubuntu (GNOME), Linux Mint (Cinnamon) und Lubuntu (LXQt) teilen die Paketbasis und werden vom Installationsskript unterstützt, sind aber nicht systematisch getestet – die Kompatibilitätsmatrix oben ist eine Diagnose-Einordnung, keine Supportzusage.',
      },
      {
        q: 'Funktioniert Auto-Paste unter Wayland?',
        a: 'Ja, über ydotool ab Version 1.0 – auf der Referenzumgebung ist das verifiziert. Auf Systemen, deren Paketquellen nur ydotool 0.1.x liefern (z. B. Ubuntu 24.04/22.04 via apt), gibt es kein Auto-Paste; der Text liegt dann trotzdem in der Zwischenablage. Ein Selbstbau von ydotool ≥ 1.0 ist dokumentiert.',
      },
      {
        q: 'Kann ich Blitztext ohne globalen Hotkey verwenden?',
        a: 'Ja. Das Installationsskript bietet einen Modus ohne globale Hotkeys an. Aufnahme, Workflows, Diktat und Verlauf sind vollständig über das Hauptfenster und das Tray-Menü bedienbar.',
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
    websiteSource: 'Quellcode der Website',
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
