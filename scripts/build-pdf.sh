#!/usr/bin/env bash
# Render a markdown file to PDF using marked + Chrome headless.
# Requires: node, npm, Google Chrome (macOS).
#
# Usage:
#   scripts/build-pdf.sh                  # index.md -> index.pdf
#   scripts/build-pdf.sh resume.md        # resume.md -> resume.pdf
#   scripts/build-pdf.sh resume.md out.pdf

set -euo pipefail
cd "$(dirname "$0")"

INPUT="${1:-../index.md}"
OUTPUT="${2:-../$(basename "${INPUT%.md}").pdf}"
TMP_HTML="$(mktemp -t md2pdf.XXXXXX).html"

[ -d node_modules/marked ] || npm install --silent

node md2pdf.mjs "$INPUT" "$TMP_HTML"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUTPUT" "file://$TMP_HTML"

rm -f "$TMP_HTML"
echo "Generated: $OUTPUT"
