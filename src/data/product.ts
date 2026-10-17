/**
 * Zentrale, im App-Repository (TimInTech/blitztext-linux) verifizierte
 * Produktmetadaten. Einzige Stelle, an der Version und URLs gepflegt werden.
 *
 * Stand: Commit 8d75114 / Release v0.9.0 (2026-10-18).
 */
export const product = {
  name: 'Blitztext Linux',
  version: '0.9.0',
  license: 'MIT',
  os: 'Linux',
  // Origin der GitHub-Pages-Auslieferung. Der Unterpfad (`base`) wird zentral
  // über `withBase` bzw. `import.meta.env.BASE_URL` ergänzt.
  siteUrl: 'https://timintech.github.io',
  repoUrl: 'https://github.com/TimInTech/blitztext-linux',
  releasesUrl: 'https://github.com/TimInTech/blitztext-linux/releases',
  latestReleaseUrl: 'https://github.com/TimInTech/blitztext-linux/releases/tag/v0.9.0',
  setupDocUrl: 'https://github.com/TimInTech/blitztext-linux/blob/main/docs/setup.md',
  licenseUrl: 'https://github.com/TimInTech/blitztext-linux/blob/main/LICENSE',
  // Installationsbefehle: wörtlich aus dem README des App-Repositorys übernommen.
  install: {
    quick: 'git clone https://github.com/TimInTech/blitztext-linux.git\ncd blitztext-linux\nbash scripts/install.sh',
    verify: 'bash scripts/verify.sh',
    run: './run.sh',
    autostart: 'systemctl --user start blitztext-linux',
  },
} as const;
