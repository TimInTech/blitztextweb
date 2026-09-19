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
    imgAlt: 'Blitztext Linux single-panel widget with a gold microphone button, “Ready” status, and a tool row for compose, history, read aloud, and settings',
    imgCaption: 'The real Blitztext Linux single-panel widget',
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
        text: 'The finished text lands on the clipboard. With a running ydotoold service, Blitztext can paste it right at your cursor position.',
      },
      {
        title: 'Compact desktop app',
        text: 'A lean, frameless PyQt6 widget with a tray icon and a German/English interface – built for KDE Plasma on Wayland.',
      },
    ],
  },
  flow: {
    title: 'How it works',
    steps: [
      {
        title: 'Start recording',
        text: 'Via global hotkey (hold Alt) or a click on the gold microphone in the widget or the tray menu. Widget and tray icon show the state: green ready, recording with a live timer and wave bars.',
      },
      {
        title: 'Transcribe and optionally rewrite',
        text: 'Whisper turns the recording into text locally. If you want, an AI workflow rewrites the result – with a selectable text action and an inspectable prompt.',
      },
      {
        title: 'Copy or paste',
        text: 'The text is on your clipboard. With auto-paste enabled, Blitztext inserts it directly into the application where your cursor is.',
      },
    ],
    imgAlt: 'Blitztext Linux single-panel widget during an active recording with a timer and animated wave bars',
  },
  features: {
    title: 'Features',
    lead: 'Everything described here is documented in the app repository and visible in the interface.',
    cards: [
      {
        title: 'Five workflows via hotkey',
        text: 'From plain dictation to AI rephrasing: every workflow has its own global hotkey and is also reachable via the tray menu and the widget.',
      },
      {
        title: 'Single-panel widget',
        text: 'A compact, frameless window with a gold microphone button, status dot, timer, wave bars, and a tool row for compose, history, read aloud, and settings.',
      },
      {
        title: 'Five text actions',
        text: 'Improve text, Shorten, Expand, Change tone, or a custom instruction – selectable in the widget, the Compose window, and the settings.',
      },
      {
        title: 'Compose window',
        text: 'Type, paste, or dictate text and let the AI rewrite it without a microphone detour – with text action, tone selection, and signature support.',
      },
      {
        title: 'Variant history',
        text: 'The AI results of a session stay available in the Compose window – step through them with the arrows above the result pane.',
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
      { name: 'Dictate', hotkey: 'Alt (hold)', llm: false, desc: 'Default: record, transcribe, output the text.' },
      { name: 'Dictate · local', hotkey: 'Meta + Shift + H', llm: false, desc: 'Forces a purely local offline transcription.' },
      { name: 'Dictate & improve', hotkey: 'Meta + Shift + T', llm: true, desc: 'Transcribes and rewrites the result with the selected text action.' },
      { name: 'Make it factual', hotkey: 'Meta + Shift + D', llm: true, desc: 'Steam release: turns frustration into a matter-of-fact message.' },
      { name: 'Add emojis', hotkey: 'Meta + Shift + E', llm: true, desc: 'Enriches your message with fitting emojis.' },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    lead: 'Real views from Blitztext Linux – no mockups.',
    items: [
      {
        src: '/screenshots/main-idle-en.png',
        alt: 'Single-panel widget with a gold microphone button, green status dot, “Ready” label, and tool row',
        caption: 'Widget: ready',
      },
      {
        src: '/screenshots/main-recording-en.png',
        alt: 'Single-panel widget during an active recording with an amber status dot, running timer, and animated wave bars',
        caption: 'Widget: recording',
      },
      {
        src: '/screenshots/main-processing-en.png',
        alt: 'Single-panel widget while transcribing, with a rotating gold progress ring around the microphone',
        caption: 'Widget: transcribing',
      },
      {
        src: '/screenshots/main-menu-en.png',
        alt: 'Widget options menu with Dictate & improve, text action, custom instruction, batch dictation, and discard',
        caption: 'Widget: options menu',
      },
      {
        src: '/screenshots/compose-en.png',
        alt: 'Compose window with the draft pane on the left, the AI result on the right, the text action selector, and buttons to improve, copy, and insert',
        caption: 'Compose window (draft)',
      },
      {
        src: '/screenshots/compose-prompt-en.png',
        alt: 'Compose window with the custom instruction editor expanded and a button to inspect the prompt',
        caption: 'Compose window: custom instruction',
      },
      {
        src: '/screenshots/settings-speech-en.png',
        alt: 'Settings, Speech Recognition tab: Whisper model, backend, language, hotkey mode, and recording key',
        caption: 'Settings: Speech recognition',
      },
      {
        src: '/screenshots/settings-ai-en.png',
        alt: 'Settings, Text & AI tab: system prompt, API key environment variable, LLM provider, base URL, model, text action, and emoji density',
        caption: 'Settings: Text & AI',
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
        alt: 'Tray context menu with all five workflows, the Compose window, text actions, dictation mode, history, and settings',
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
      'AI workflows (Dictate & improve, Make it factual, Add emojis) and the Compose window use an LLM provider: OpenAI, OpenRouter, or a custom OpenAI-compatible endpoint',
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
    lead: 'Blitztext Linux is developed on Kubuntu with KDE Plasma on Wayland and tested there as well as on Ubuntu 24.04 and 26.04 with GNOME on Wayland. Linux Mint and Lubuntu remain untested.',
    colSystem: 'System',
    colSession: 'Session',
    colStatus: 'Status',
    colNotes: 'Notes',
    statusTested: 'Tested',
    statusUntested: 'Untested',
    rows: [
      { system: 'Kubuntu 26.04, KDE Plasma', session: 'Wayland', tested: true, notes: 'Reference environment; ydotool ≥ 1.0 available directly via apt.' },
      { system: 'Ubuntu 24.04, GNOME', session: 'Wayland', tested: true, notes: 'Clean install and live test completed; ydotool 0.1.8 is supported through symbolic shortcuts.' },
      { system: 'Ubuntu 26.04, GNOME', session: 'Wayland', tested: true, notes: 'Clean install and live test completed: GUI, tray, recording, local Whisper, hotkey, clipboard, auto-paste, and autostart verified.' },
      { system: 'Linux Mint 22.x, Cinnamon', session: 'X11', tested: false, notes: 'Untested. xclip is expected to be the clipboard backend; verify the session and ydotoold separately.' },
      { system: 'Lubuntu 24.04 / 26.04, LXQt', session: 'X11 / Wayland', tested: false, notes: 'Untested. The session type decides the clipboard backend – scripts/verify.sh shows which one applies.' },
    ],
    note: 'This matrix describes verified tests and known prerequisites. It is not a support promise for untested systems.',
    limitsTitle: 'Limitations you should know about',
    limits: [
      'Auto-paste requires a running ydotoold service. Blitztext supports Ubuntu 24.04’s ydotool 0.1.8 with symbolic shortcuts and ydotool ≥ 1.0 with raw keycodes.',
      'Global hotkeys use evdev and require membership in the input group. At the system level, this means all of the user’s processes could read input – only use Blitztext in environments you trust.',
      'Without global hotkeys, Blitztext remains fully usable – via the widget and the tray menu.',
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
        a: 'Only for the optional AI features: the workflows Dictate & improve, Make it factual, and Add emojis, the Compose window, and Cloud TTS. Dictation and local transcription work without a key. The key is provided as an environment variable (e.g. in ~/.config/blitztext-linux/secrets.env), never stored in the configuration file.',
      },
      {
        q: 'Which Linux systems are tested?',
        a: 'Tested systems are Kubuntu with KDE Plasma on Wayland and Ubuntu 24.04 and 26.04 with GNOME on Wayland. Linux Mint (Cinnamon) and Lubuntu (LXQt) remain untested; the compatibility matrix above is diagnostic guidance, not a support promise.',
      },
      {
        q: 'Does auto-paste work on Wayland?',
        a: 'Yes. Tested on Kubuntu with KDE Plasma and on Ubuntu 24.04 and 26.04 with GNOME on Wayland. Ubuntu 24.04’s ydotool 0.1.8 uses symbolic shortcuts, while ydotool ≥ 1.0 uses raw keycodes. A running ydotoold service remains required; this is not a support promise for untested systems.',
      },
      {
        q: 'Can I use Blitztext without a global hotkey?',
        a: 'Yes. The install script offers a mode without global hotkeys. Recording, workflows, dictation, and history are fully usable via the widget and the tray menu.',
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
