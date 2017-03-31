#!/bin/bash
msg='PD:_'

if [ -n "$1" ]
then
  msg=$msg$1
fi

git add .
git commit -m $msg
git push origin dev
