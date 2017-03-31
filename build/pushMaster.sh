#!/bin/bash
msg='PM:_'

if [ -n "$1" ]
then
  msg=$msg$1
fi

git add .
git commit -m $msg
git push origin dev
git checkout master
git merge dev
git push origin master
git checkout dev
