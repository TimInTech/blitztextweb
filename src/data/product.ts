/**
 * Zentrale, im App-Repository (TimInTech/blitztext-linux) verifizierte
 * Produktmetadaten. Einzige Stelle, an der Version und URLs gepflegt werden.
 *
 * Stand: Commit c30d0d0 / Release v0.8.1 (2026-07-04).
 */
export const product = {
  name: 'Blitztext Linux',
  version: '0.8.1',
  license: 'MIT',
  os: 'Linux',
  siteUrl: 'https://blitztext.timintech.de',
  repoUrl: 'https://github.com/TimInTech/blitztext-linux',
  releasesUrl: 'https://github.com/TimInTech/blitztext-linux/releases',
  latestReleaseUrl: 'https://github.com/TimInTech/blitztext-linux/releases/tag/v0.8.1',
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
