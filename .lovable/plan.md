

## Problem

The 404.html → index.html SPA redirect mechanism is working (the redirect happens), but the **redirect script in index.html** isn't restoring the URL correctly on the production domain. The URL stays as `/?/de/ferienhaus-tysnes` instead of being rewritten to `/de/ferienhaus-tysnes`.

The issue is on line 26: `l.pathname.slice(0, -1)` — this removes the trailing slash from `/`, leaving an empty string, so the final URL becomes `/?/de/ferienhaus-tysnes` visible in the address bar but React Router never sees `/de/ferienhaus-tysnes`.

Additionally, the `public/404.html` only exists in `public/` — after Vite builds, it gets copied to `dist/404.html`, which is correct. But the redirect script in the **built** `index.html` needs to work properly.

The real fix: The redirect handler script in `index.html` looks correct per the standard spa-github-pages pattern. The `l.pathname.slice(0, -1)` for a pathname of `/` gives `""`, then `"" + decoded` should give `/de/ferienhaus-tysnes`. The `history.replaceState` should update the URL before React Router initializes.

The likely issue is that this script runs **after** React has already mounted (it's placed after `<div id="root">`), or there's a timing issue. But actually it's an inline script that runs synchronously before the module scripts, so timing should be fine.

Let me re-examine: when visiting `www.lauvlidcottage.com/de/ferienhaus-tysnes`:
1. GitHub Pages serves 404.html
2. 404.html redirects to `www.lauvlidcottage.com/?/de/ferienhaus-tysnes`
3. index.html loads, the inline script checks `l.search[1] === '/'` → `l.search` is `?/de/ferienhaus-tysnes`, so `l.search[1]` is `/` ✓
4. `decoded` = `l.search.slice(1)` = `/de/ferienhaus-tysnes`
5. `l.pathname.slice(0, -1)` = `""` (pathname is `/`)
6. `history.replaceState(null, null, "" + "/de/ferienhaus-tysnes" + "")` = `/de/ferienhaus-tysnes` ✓

This should work. The user says it's NOT working on production. The URL stays as `/?/de/ferienhaus-tysnes`. This could mean the script isn't running, or there's a caching issue with the old 404.html.

Wait — the user said they reverted to an earlier commit. Let me check: the 404.html in `public/` was created in the last edit, but the **old** `public/404.html` from before the revert was a simple meta refresh redirect. The current `public/404.html` shown above is the SPA redirect version.

The real issue might be simpler: **the built `dist/` folder on GitHub Pages might have an outdated 404.html** or the redirect script might not be in the built index.html. The Lovable preview won't show this issue since it has its own server-side routing.

Actually, re-reading the user message: "I still get 404" — this is on the **production** GitHub Pages site. The fix in this codebase looks correct. The problem is likely that:

1. The site hasn't been rebuilt and redeployed to GitHub Pages after these changes
2. OR the built HTML doesn't include the redirect handler script

Since Vite processes `index.html`, the inline script should be preserved in the build output. Let me verify the vite config has no `base` setting issues.

The vite config has no `base` set (defaults to `/`), which is correct for a custom domain.

## Plan

The code changes look correct already. The issue is likely deployment-related. However, there are two small improvements to make it more robust:

1. **Move the redirect handler script to `<head>`** in `index.html` so it runs as early as possible, before any other scripts or DOM parsing.

2. **Ensure `public/CNAME`** exists with `lauvlidcottage.com` (check if it's already there — it was mentioned in earlier context as existing).

### Changes

**`index.html`** — Move the SPA redirect handler script from `<body>` to `<head>` to ensure it executes before anything else:

```html
<head>
  ...existing meta tags...
  <script type="text/javascript">
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
</head>
```

This is a minor robustness improvement. The main thing the user needs to do is **rebuild and redeploy** to GitHub Pages so the updated `index.html` and `404.html` are both in `dist/`.

