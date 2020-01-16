#!/bin/bash

UNAME=$( command -v uname)

case $( "${UNAME}" | tr '[:upper:]' '[:lower:]') in
  darwin*)
    printf '##### iOS running #####\n'
    sh run-ios.sh
    ;;
  *)
    printf '##### Android running #####\n'
    sh run-android.sh
    ;;
esac
