#!/bin/sh
boot gh-pages;
git add gh-pages;
git commit -am 'Deploying to gh-pages';
git subtree push --prefix gh-pages origin gh-pages;
