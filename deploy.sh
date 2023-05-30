#i/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate intp the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain 
# echo 'www.example.com' > CNAME

git init 
git checkout -B main
git add -A 
git commit -m 'deploy'

# if you are deploying to a https://<USENAME>.github.io
# git push -f git@github.com:<USENAME>/<USENAME>.github.io.git main

# if you are deploying to a https://<USENAME>.github.io/<REPO>
# git push -f git@github.com:beeawwad/Weather_App.git main:gh-pages

cd -