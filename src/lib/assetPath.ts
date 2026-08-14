// Prefixes a root-relative asset path (as stored in src/data/*.ts, e.g.
// "/images/hero/profile.jpg") with Vite's configured base URL, so images and
// downloads resolve correctly whether the site is served from "/" (local dev)
// or a subpath like "/portfolio/" (GitHub Pages). Plain `src="/images/..."`
// strings are NOT rewritten by Vite — only assets referenced through
// `import`/`new URL()` or crawled from index.html get the base prefix
// automatically, so runtime string paths from data files need this helper.
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
