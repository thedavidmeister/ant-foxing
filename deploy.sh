#!/bin/sh
echo "checking out master...";
git checkout master;

echo "fetching from git...";
git fetch;

echo "building gh-pages directory...";
boot gh-pages;

echo "committing gh-pages directory to git..."
git add .;
git commit -am "Deploy to github pages";

echo "deploying to remote gh-pages branch..."
# git subtree push --prefix gh-pages origin gh-pages;
# https://stackoverflow.com/questions/13756055/git-subtree-subtree-up-to-date-but-cant-push/30715198#30715198
git push origin `git subtree split --prefix gh-pages master`:gh-pages --force;

# Keep origin/master up to date as well
echo "pushing to master..."
git push;
