rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git checkout -b gh-pages &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:kakmsaikou/big-screen.git &&
git push -f -u origin "gh-pages" &&
cd -