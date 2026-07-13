/**
 * Zentrale Base-URL-Behandlung für die Auslieferung als GitHub-Pages-
 * Project-Page unter einem Unterpfad (z. B. `/blitztextweb/`).
 *
 * `import.meta.env.BASE_URL` wird von Astro aus `base` in `astro.config.mjs`
 * abgeleitet (hier `/blitztextweb/`). Ohne konfiguriertes `base` ist der Wert
 * `/`, sodass sich `withBase` neutral verhält (Auslieferung am Domain-Root).
 */

/** Präfixiert einen absoluten internen Pfad mit der konfigurierten Base-URL. */
export function withBase(path: string): string {
  // Externe URLs, Anker und relative Pfade bleiben unverändert.
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
