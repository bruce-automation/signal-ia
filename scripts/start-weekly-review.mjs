import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const templatePath = path.join(root, 'reviews/weekly/template.md');
const targetDir = path.join(root, 'reviews/weekly');
const date = new Date().toISOString().slice(0, 10);
const targetPath = path.join(targetDir, `${date}.md`);

await mkdir(targetDir, { recursive: true });

try {
  await access(targetPath);
  console.log(`Weekly review already exists: ${path.relative(root, targetPath)}`);
  process.exit(0);
} catch {}

const template = await readFile(templatePath, 'utf8');
const content = template.replaceAll('{{DATE}}', date);
await writeFile(targetPath, content, 'utf8');
console.log(`Created ${path.relative(root, targetPath)}`);
