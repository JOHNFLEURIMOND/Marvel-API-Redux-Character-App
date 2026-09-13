import { access, readFile } from 'node:fs/promises';

const requiredFiles = ['site/index.html', 'site/_redirects', 'netlify.toml'];

await Promise.all(requiredFiles.map((file) => access(file)));

const [page, redirects, netlify] = await Promise.all([
  readFile('site/index.html', 'utf8'),
  readFile('site/_redirects', 'utf8'),
  readFile('netlify.toml', 'utf8'),
]);

const assertions = [
  [page.includes('<main'), 'Retirement page must contain a main landmark.'],
  [page.includes('retired portfolio project'), 'Retirement status must be visible.'],
  [!page.includes('MARVEL_PRIVATE_KEY'), 'Retirement page must not reference a private key.'],
  [redirects.trim() === '/* /index.html 200', 'All legacy routes must resolve to the static page.'],
  [netlify.includes('publish = "site"'), 'Netlify must publish the static site directory.'],
];

for (const [condition, message] of assertions) {
  if (!condition) {
    throw new Error(message);
  }
}

console.log('Static retirement site verified.');
