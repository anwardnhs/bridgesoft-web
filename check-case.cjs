const fs = require('fs');
const path = require('path');
const root = process.cwd();
const exts = ['.js', '.jsx', '.ts', '.tsx'];
const results = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (exts.includes(path.extname(p))) checkFile(p);
  }
}
function checkFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  const re = /import\s+.*?from\s+['\"]([^'\"]+)['\"]/g;
  let m;
  while ((m = re.exec(text))) checkImp(file, m[1]);
  const re2 = /require\(['\"]([^'\"]+)['\"]\)/g;
  while ((m = re2.exec(text))) checkImp(file, m[1]);
  const re3 = /new\s+URL\(['\"]([^'\"]+)['\"],\s*import\.meta\.url\)/g;
  while ((m = re3.exec(text))) checkImp(file, m[1]);
}
function checkImp(file, imp) {
  if (!/\.(png|jpe?g|svg|avif)$/.test(imp)) return;
  let target;
  if (imp.startsWith('@/')) target = path.resolve(root, 'src', imp.slice(2));
  else if (imp.startsWith('/')) target = path.resolve(root, imp.slice(1));
  else target = path.resolve(path.dirname(file), imp);
  if (!fs.existsSync(target)) results.push({ file, imp, target });
}
walk(path.join(root, 'src'));
if (results.length === 0) console.log('No missing asset imports found.');
else { console.log('Missing asset imports:'); results.forEach((r) => console.log(`${r.file}: ${r.imp} -> ${r.target}`)); }
