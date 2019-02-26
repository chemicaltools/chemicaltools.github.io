#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepress/dist
echo 'chem.njzjz.win' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:njzjz/Chemical-Tools-page.git master:gh-pages
cd -
