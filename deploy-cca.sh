#!/bin/bash
# Deploy Hugo static site to CCA.sh ws4 endpoint (public_static branch)
# Usage: ./deploy-cca.sh [--dry-run]

set -e

DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
fi

REMOTE="ws4"
BRANCH="public_static"

echo "========================================="
echo "Deploy CCASH site to CCA.sh ($REMOTE)"
echo "========================================="
echo ""

# 1. Build the Hugo site
echo "🏗️  Building Hugo site for production..."
hugo --minify
echo "✅ Build complete!"
echo ""

# 2. Check the public directory exists
if [ ! -d "public" ]; then
  echo "❌ public/ directory not found!"
  exit 1
fi

echo "📊 $(find public -type f | wc -l) files to deploy"
echo ""

# 3. Push public/ to the public_static branch on ws4
if [ "$DRY_RUN" = true ]; then
  echo "🔍 DRY RUN: Would run:"
  echo "   git subtree split --prefix public -b deploy-temp"
  echo "   git push $REMOTE deploy-temp:$BRANCH --force"
  echo ""
  echo "   Push skipped. public/ is ready to deploy."
else
  echo "🚀 Deploying to $REMOTE/$BRANCH..."
  git subtree split --prefix public -b deploy-temp
  git push "$REMOTE" deploy-temp:"$BRANCH" --force
  git branch -D deploy-temp
  echo ""
  echo "✅ Deploy complete! Site live at:"
  echo "   https://api-96159560b06c44ff026a2e572ce25d3b.app.cca.sh/"
fi
echo ""
