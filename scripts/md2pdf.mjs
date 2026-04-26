import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

const [, , inputPath, outputHtmlPath] = process.argv;
if (!inputPath || !outputHtmlPath) {
  console.error('Usage: node md2pdf.mjs <input.md> <output.html>');
  process.exit(1);
}

const md = readFileSync(inputPath, 'utf-8').replace(/^---[\s\S]*?---\n/, '');
const body = marked.parse(md);

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>付瑶 · Yao Fu</title>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  html { -webkit-print-color-adjust: exact; }
  body {
    font-family: -apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #1a1a1a;
    max-width: 100%;
    margin: 0;
  }
  h1 {
    font-size: 22pt;
    font-weight: 600;
    margin: 0 0 4px 0;
    border: none;
    padding: 0;
  }
  h1 + p { color: #555; margin: 0 0 14px 0; font-size: 10pt; }
  h2 {
    font-size: 13pt;
    font-weight: 600;
    margin: 18px 0 8px 0;
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    page-break-after: avoid;
  }
  h2:first-of-type { margin-top: 12px; }
  ul { margin: 6px 0; padding-left: 1.2em; }
  li { margin: 3px 0; }
  li > p { margin: 2px 0; }
  p { margin: 6px 0; }
  a { color: #0366d6; text-decoration: none; }
  code {
    font-family: "SF Mono", Menlo, Consolas, monospace;
    font-size: 9.5pt;
    background: #f3f3f3;
    padding: 1px 4px;
    border-radius: 3px;
  }
  strong { font-weight: 600; }
  hr { border: none; border-top: 1px solid #eee; margin: 14px 0; }
</style>
</head>
<body>
${body}
</body>
</html>`;

writeFileSync(outputHtmlPath, html);
console.log('Wrote', outputHtmlPath);
