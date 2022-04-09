#!/bin/sh
rm -r dist
npm run build && git add dist && git commit -m "Updated Dist"
git subtree push --prefix dist origin gh-pages