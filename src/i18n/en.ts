import { product } from '../data/product';
import { de } from './de';

/**
 * English texts (served under /en/).
 * Kept structurally identical to the German dictionary — the type annotation
 * enforces that both language versions stay in sync.
 */
export const en: typeof de = {
  lang: 'en',
  htmlLang: 'en',
  otherLangUrl: '/',
  meta: {
    title: 'Blitztext Linux – Speech becomes text on Linux',
    description:
      'Blitztext Linux is an open-source desktop app for KDE Plasma and Wayland: record speech via hotkey, transcribe locally with Whisper, optionally improve it with AI, and paste it straight into the active application.',
    ogImage: '/images/og-en.png',
    ogImageAlt: 'Blitztext Linux – Your local AI voice assistant for KDE Plasma and Wayland',
  },
  skipLink: 'Skip to content',
  nav: {
    features: 'Features',
    flow: 'How it works',
    screenshots: 'Screenshots',
    install: 'Install',
    faq: 'FAQ',
    github: 'GitHub',
    githubLabel: 'Blitztext Linux on GitHub (opens the app repository)',
    langSwitch: 'Deutsch',
    langSwitchLabel: 'Zur deutschen Version wechseln',
    menuLabel: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    homeLabel: 'Blitztext Linux – Home',
  },
  hero: {
    badge: `Version ${product.version}`,
    badgeLabel: `Version ${product.version} – view release notes on GitHub`,
    title: 'Speech becomes text on Linux.',
    lead: 'Blitztext Linux records your voice via hotkey or click, transcribes it locally with Whisper by default, and puts the text on your clipboard – with optional automatic pasting into the active application. Optional AI workflows polish the text before you use it.',
    ctaPrimary: 'See installation',
    ctaSecondary: 'Source code on GitHub',
    imgAlt: 'Blitztext Linux main window with workflow selector, writing-style preset, record button, and “Ready” status indicator',
    imgCaption: 'The real Blitztext Linux v0.8.1 main window',
    facts: [
      { label: 'License', value: 'MIT, open source' },
      { label: 'Focus', value: 'KDE Plasma & Wayland' },
      { label: 'Transcription', value: 'Local with Whisper' },
    ],
  },
  benefits: {
    title: 'Why Blitztext Linux?',
    items: [
      {
        title: 'Dictate fast',
        text: 'Press a hotkey or click, speak, done. Recording, transcription, and output run without detours through other programs.',
      },
      {
        title: 'Transcribe locally',
        text: 'Speech recognition runs on your machine by default – with openai-whisper or faster-whisper, without audio leaving your computer.',
      },
      {
        title: 'Improve optionally',
        text: 'AI workflows rephrase, smooth the tone, or add emojis – only when you deliberately select them and have configured an API key.',
      },
      {
        title: 'Copy or auto-paste',
        text: 'The finished text lands on the clipboard. With ydotool 1.0 or newer, Blitztext can paste it right at your cursor position.',
      },
      {
        title: 'Compact desktop app',
        text: 'A lean PyQt6 application with tray icon, main window, and a German/English interface – built for KDE Plasma on Wayland.',
      },
    ],
  },
  flow: {
    title: 'How it works',
    steps: [
      {
        title: 'Start recording',
        text: 'Via global hotkey (e.g. Meta+H) or a click in the main window or tray menu. The tray icon shows the state: green ready, red recording.',
      },
      {
        title: 'Transcribe and optionally rewrite',
        text: 'Whisper turns the recording into text locally. If you want, an AI workflow rewrites the result – with a selectable writing style and an inspectable prompt.',
      },
      {
        title: 'Copy or paste',
        text: 'The text is on your clipboard. With auto-paste enabled, Blitztext inserts it directly into the application where your cursor is.',
      },
    ],
    imgAlt: 'Blitztext Linux main window during an active recording with a red status indicator',
  },
  features: {
    title: 'Features',
    lead: 'Everything described here ships in the current release v0.8.1 and is documented in the app repository.',
    cards: [
      {
        title: 'Five workflows via hotkey',
        text: 'From plain dictation to AI rephrasing: every workflow has its own global hotkey and is also reachable via the tray menu and main window.',
      },
      {
        title: 'Writing-style presets',
        text: 'Nine ready-made presets – from “Email formal” and “Bullet points” to “Short & precise” – plus a fully custom preset of your own.',
      },
      {
        title: 'Compose window',
        text: 'Type or paste text and let the AI rewrite it without a microphone – with workflow, preset, and tone selection plus signature support.',
      },
      {
        title: 'Variant history',
        text: 'The last ten AI results of a session stay available in the Compose window – compare them anytime and restore one with a click.',
      },
      {
        title: 'Prompt transparency',
        text: 'Before every AI call you can view and fully edit the system prompt and user message. No black box.',
      },
      {
        title: 'Dictation mode and history',
        text: 'In dictation mode every transcript is saved as a Markdown note and can be merged on demand. The history keeps your recent transcripts at hand.',
      },
      {
        title: 'Read aloud with audio export',
        text: 'Have any text read aloud – locally with Piper TTS (default) or optionally via OpenAI Cloud TTS – and export the output as an audio file.',
      },
      {
        title: 'Custom terms',
        text: 'Store names, technical terms, and special vocabulary so transcription and AI workflows spell them correctly.',
      },
      {
        title: 'German and English',
        text: 'The app interface is fully available in German and English – switchable in the settings.',
      },
      {
        title: 'Configuration and secrets kept apart',
        text: 'The configuration lives under ~/.config/blitztext-linux/ with restrictive permissions (0600). API keys are never stored in the config – they come from environment variables (secrets.env).',
      },
    ],
    workflowsTitle: 'The five workflows',
    workflowsNote:
      'Workflows marked as AI require an API key for OpenAI, OpenRouter, or a custom OpenAI-compatible endpoint. Without a key they stay disabled – dictation and local transcription keep working.',
    colWorkflow: 'Workflow',
    colHotkey: 'Hotkey',
    colLlm: 'AI',
    colDesc: 'Description',
    llmYes: 'Yes',
    llmNo: 'No',
    workflows: [
      { name: 'Blitztext', hotkey: 'Meta + H', llm: false, desc: 'Default: record, transcribe, output the text.' },
      { name: 'Blitztext Local', hotkey: 'Meta + Shift + H', llm: false, desc: 'Forces a purely local offline transcription.' },
      { name: 'Blitztext+', hotkey: 'Meta + Shift + T', llm: true, desc: 'Rephrases your recording professionally – with a selectable writing style.' },
      { name: 'Blitztext $%&!', hotkey: 'Meta + Shift + D', llm: true, desc: 'Steam release: turns frustration into a matter-of-fact message.' },
      { name: 'Blitztext :)', hotkey: 'Meta + Shift + E', llm: true, desc: 'Enriches your message with fitting emojis.' },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    lead: 'Real views from Blitztext Linux v0.8.1 – no mockups.',
    items: [
      {
        src: '/screenshots/main-window-en.png',
        alt: 'Main window with workflow dropdown, writing-style preset, record button, “Ready” status, and buttons for dictation and history',
        caption: 'Main window',
      },
      {
        src: '/screenshots/recording-en.png',
        alt: 'Main window during an active recording with a red status dot and a running timer',
        caption: 'Active recording',
      },
      {
        src: '/screenshots/compose-en.png',
        alt: 'Compose window with the draft pane on the left, the AI result on the right, workflow and preset selectors, and buttons to improve, copy, and insert',
        caption: 'Compose window (draft)',
      },
      {
        src: '/screenshots/settings-speech-en.png',
        alt: 'Settings, Speech Recognition tab: Whisper model, backend, language, hotkey mode, and recording key',
        caption: 'Settings: Speech recognition',
      },
      {
        src: '/screenshots/settings-ai-workflows-en.png',
        alt: 'Settings, AI Workflows tab: LLM provider, API key environment variable, base URL, model, tone, and writing-style preset',
        caption: 'Settings: AI workflows',
      },
      {
        src: '/screenshots/settings-general-en.png',
        alt: 'Settings, General tab: auto-paste, notes folder, history size, interface language, and signature',
        caption: 'Settings: General',
      },
      {
        src: '/screenshots/history-en.png',
        alt: 'History window with recent transcripts and buttons to copy or delete individual entries',
        caption: 'Transcript history',
      },
      {
        src: '/screenshots/tts-en.png',
        alt: 'Read-aloud window with text input, voice selection, and buttons to read aloud and export as an audio file',
        caption: 'Read aloud with audio export',
      },
      {
        src: '/screenshots/tray-menu-en.png',
        alt: 'Tray context menu with all five workflows, the Compose window, writing-style presets, dictation mode, history, and settings',
        caption: 'Tray menu',
      },
    ],
    trayTitle: 'Status at a glance',
    trayLead: 'The tray icon always shows what Blitztext is doing:',
    trayStates: [
      { src: '/screenshots/tray-idle.png', alt: 'Green microphone tray icon', label: 'Green: ready' },
      { src: '/screenshots/tray-recording.png', alt: 'Red microphone tray icon', label: 'Red: recording' },
      { src: '/screenshots/tray-processing.png', alt: 'Orange microphone tray icon', label: 'Orange: transcription/AI working' },
      { src: '/screenshots/tray-error.png', alt: 'Gray microphone tray icon', label: 'Gray: error' },
    ],
  },
  localCloud: {
    title: 'Local-first – cloud only if you want it',
    lead: 'Blitztext draws a clear line between local processing and optional cloud features.',
    localTitle: 'Runs locally on your machine',
    localItems: [
      'Whisper transcription (openai-whisper or faster-whisper) – the “Blitztext Local” workflow even enforces it explicitly',
      'Read aloud with Piper TTS (the default provider)',
      'Dictation notes and history – stored exclusively inside your home directory',
      'Configuration under ~/.config/blitztext-linux/ with 0600 file permissions',
    ],
    cloudTitle: 'Optional: cloud features',
    cloudItems: [
      'AI workflows (Blitztext+, Blitztext $%&!, Blitztext :)) and the Compose window use an LLM provider: OpenAI, OpenRouter, or a custom OpenAI-compatible endpoint',
      'Cloud TTS via OpenAI as an alternative to Piper – with a one-time, explicit confirmation before first use',
      'An API key is only needed for these optional features – provided as an environment variable, never stored in the configuration file',
    ],
    note: 'Important: when you enable cloud features, the text to be processed (or the transcript) is transmitted to the provider you selected. Without enabled cloud features and without an API key, recording and transcription stay on your machine.',
  },
  install: {
    title: 'Installation',
    lead: 'The recommended path is the install script from the app repository. It is idempotent, checks your system (Ubuntu/Debian base), and sets everything up – including the Python virtual environment and Whisper.',
    steps: [
      {
        title: '1. Install',
        cmd: 'git clone https://github.com/TimInTech/blitztext-linux.git\ncd blitztext-linux\nbash scripts/install.sh',
        text: 'The script asks for the operating mode: global hotkeys (requires the input group) or window/tray-only operation.',
      },
      {
        title: '2. Verify the installation',
        cmd: 'bash scripts/verify.sh',
        text: 'Important for hotkey mode: log out and back in (or reboot) once so the input group becomes active. The script provides diagnostics for X11/Wayland and clipboard backends.',
      },
      {
        title: '3. Start manually',
        cmd: './run.sh',
        text: 'Does the tray icon appear and do the hotkeys respond? Then everything is set up.',
      },
      {
        title: '4. Enable autostart (optional)',
        cmd: 'systemctl --user start blitztext-linux',
        text: 'Runs Blitztext as a systemd user service.',
      },
    ],
    copy: 'Copy command',
    copied: 'Copied!',
    docsText: 'All details, manual installation, and troubleshooting:',
    docsLink: 'Setup documentation in the app repository',
    flatpakTitle: 'A note on Flatpak',
    flatpakText:
      'The app repository contains an experimental Flatpak manifest spike. It is not a release channel and not published on Flathub. Inside the sandbox, global hotkeys, auto-paste, and local Whisper transcription are unavailable. The install script remains the recommended path.',
  },
  compat: {
    title: 'Compatibility',
    lead: 'Blitztext Linux is developed and systematically tested on Kubuntu with KDE Plasma on Wayland. Other Ubuntu/Debian-based systems may work but are not systematically tested.',
    colSystem: 'System',
    colSession: 'Session',
    colStatus: 'Status',
    colNotes: 'Notes',
    statusTested: 'Tested',
    statusUntested: 'Untested',
    rows: [
      { system: 'Kubuntu 26.04, KDE Plasma', session: 'Wayland', tested: true, notes: 'Reference environment; ydotool ≥ 1.0 available directly via apt.' },
      { system: 'Ubuntu 24.04, GNOME', session: 'Wayland', tested: false, notes: 'apt only ships ydotool 0.1.x → no auto-paste (clipboard works); tray needs the AppIndicator extension.' },
      { system: 'Ubuntu 26.04, GNOME', session: 'Wayland', tested: false, notes: 'Tray needs the AppIndicator extension; Whisper wheels may lag behind new Python releases.' },
      { system: 'Linux Mint 22.x, Cinnamon', session: 'X11', tested: false, notes: 'xclip instead of wl-copy as the clipboard backend; apt ydotool 0.1.x → no auto-paste.' },
      { system: 'Lubuntu 24.04 / 26.04, LXQt', session: 'X11 / Wayland', tested: false, notes: 'The session type decides the clipboard backend – scripts/verify.sh shows which one applies.' },
    ],
    note: 'This matrix comes from the project’s diagnostic documentation. It describes expected behavior and known risks – it is not a support promise.',
    limitsTitle: 'Limitations you should know about',
    limits: [
      'Auto-paste requires ydotool 1.0 or newer. Ubuntu 24.04 and 22.04 only ship 0.1.x via apt – the clipboard works there, but there is no automatic pasting (unless you build ydotool from source).',
      'Global hotkeys use evdev and require membership in the input group. At the system level, this means all of the user’s processes could read input – only use Blitztext in environments you trust.',
      'Without global hotkeys, Blitztext remains fully usable – via the main window and the tray menu.',
      'If no tray area is available, the icon falls back to the system theme; the color coding may then not apply.',
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Does Blitztext run fully locally?',
        a: 'Transcription runs locally with Whisper by default, and read-aloud runs locally with Piper. Blitztext stays fully local as long as you don’t use AI workflows or Cloud TTS. If you enable those optional features, the text to be processed is transmitted to the provider you selected (e.g. OpenAI or OpenRouter).',
      },
      {
        q: 'Do I need an API key?',
        a: 'Only for the optional AI features: the workflows Blitztext+, Blitztext $%&!, and Blitztext :), the Compose window, and Cloud TTS. Dictation and local transcription work without a key. The key is provided as an environment variable (e.g. in ~/.config/blitztext-linux/secrets.env), never stored in the configuration file.',
      },
      {
        q: 'Which Linux systems are tested?',
        a: 'Kubuntu with KDE Plasma on Wayland is systematically tested. Ubuntu (GNOME), Linux Mint (Cinnamon), and Lubuntu (LXQt) share the package base and are supported by the install script, but are not systematically tested – the compatibility matrix above is diagnostic guidance, not a support promise.',
      },
      {
        q: 'Does auto-paste work on Wayland?',
        a: 'Yes, via ydotool 1.0 or newer – verified on the reference environment. On systems whose package sources only ship ydotool 0.1.x (e.g. Ubuntu 24.04/22.04 via apt), there is no auto-paste; the text still lands on the clipboard. Building ydotool ≥ 1.0 from source is documented.',
      },
      {
        q: 'Can I use Blitztext without a global hotkey?',
        a: 'Yes. The install script offers a mode without global hotkeys. Recording, workflows, dictation, and history are fully usable via the main window and the tray menu.',
      },
      {
        q: 'Where are configuration and secrets stored?',
        a: 'The configuration lives at ~/.config/blitztext-linux/config.json and is written with restrictive permissions (0600). API keys are never stored in that file – they are read from environment variables at runtime, preferably via ~/.config/blitztext-linux/secrets.env.',
      },
      {
        q: 'Is Blitztext free and open source?',
        a: 'Yes. Blitztext Linux is open source under the MIT license and free of charge. The entire source code is public on GitHub. Costs can only arise with the optional cloud providers if you use their APIs with your own key.',
      },
      {
        q: 'Is Flatpak already the recommended installation path?',
        a: 'No. There is an experimental Flatpak spike in the repository, but no Flatpak release channel and no Flathub publication. Inside the sandbox, global hotkeys, auto-paste, and local Whisper are unavailable. The recommended path is the install script scripts/install.sh.',
      },
    ],
  },
  cta: {
    title: 'Ready to dictate?',
    text: 'Blitztext Linux is open source, free, and set up in a few minutes.',
    primary: 'Install now',
    secondary: 'View the latest release',
  },
  footer: {
    productTitle: 'Product',
    links: {
      repo: 'App repository',
      releases: 'Releases',
      install: 'Installation',
      license: 'License (MIT)',
      setupDocs: 'Setup documentation',
    },
    legalTitle: 'Legal',
    legal: {
      privacy: 'Privacy',
      imprint: 'Imprint (German)',
    },
    websiteTitle: 'This website',
    tagline: 'Blitztext Linux is an open-source project under the MIT license.',
    langNote: 'This page is also available in German.',
  },
  notFound: {
    title: 'Page not found',
    text: 'The requested page does not exist or has been moved.',
    back: 'Zur deutschen Startseite',
    backEn: 'To the English homepage',
  },
};
