// Post-process the PREVIEW build so every root-absolute URL becomes relative.
// Lets the flat build work wherever it is mounted (artifact hosting, file://, a sub-path).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
const root = 'dist-preview';
function walk(d) { return readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; }); }
for (const file of walk(root).filter((f) => f.endsWith('.html') || f.endsWith('.css'))) {
  const depth = relative(root, dirname(file)).split('/').filter(Boolean).length;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);
  let s = readFileSync(file, 'utf8');
  s = s.replace(/(href|src|action|content)="\/(?!\/)/g, `$1="${prefix}`);
  s = s.replace(/url\(\/(?!\/)/g, `url(${prefix}`);
  s = s.replace(/"\.\/index\.html"/g, '"./index.html"');
  writeFileSync(file, s);
}
console.log('relativised');
