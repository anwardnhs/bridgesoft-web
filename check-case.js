const fs = require('fs');
const path = require('path');
const root = process.cwd();
const fileExts = ['.js', '.jsx', '.ts', '.tsx', '.css'];
const assetExts = ['.png', '.jpg', '.jpeg', '.svg', '.avif'];
const results = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (fileExts.includes(path.extname(p))) checkFile(p);
  }
}
function checkFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  const regex = /(?:from|require\(|new URL\(|url\()\s*['\"]([^'\"]+\.(?:png|jpe?g|svg|avif))['\"]/g;
  let match;
  while ((match = regex.exec(text))) {
    const imp = match[1];
    let target = imp;
    if (imp.startsWith('@/')) {
      target = path.join(root, 'src', imp.slice(2));
    } else if (imp.startsWith('/')) {
      target = path.join(root, imp.slice(1));
    } else {
      target = path.resolve(path.dirname(file), imp);
    }
    const bad = checkPathCase(target);
    if (bad) results.push({ file, imp, target, bad });
  }
}
function checkPathCase(p) {
  const parts = path.relative(root, p).split(path.sep);
  let current = root;
  for (const part of parts) {
    if (!part) continue;
    if (!fs.existsSync(current)) return 'missing root';
    const entries = fs.readdirSync(current);
    const found = entries.find((e) => e === part);
    if (!found) {
      const lower = entries.find((e) => e.toLowerCase() === part.toLowerCase());
      return lower ? `case mismatch: expected ${part}, actual ${lower}` : 'not found';
    }
    current = path.join(current, found);
  }
  return null;
}
walk(path.join(root, 'src'));
if (results.length === 0) {
  console.log('No case-sensitive asset import issues found.');
} else {
  console.log('Case-sensitive asset import issues:');
  for (const r of results) {
    console.log(`${r.file}: ${r.imp} -> ${r.target} (${r.bad})`);
  }
}
