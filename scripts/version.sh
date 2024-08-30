#!/bin/bash

NPM_VERSION_COMMAND=$@
NPM_VERSION_ARGS="--no-commit-hooks --no-git-tag-version --no-workspaces-update"

# # Update the root version
npm version --quiet $NPM_VERSION_ARGS $NPM_VERSION_COMMAND

export NEW_VERSION=$(cat package.json | jq -r '.version')

npm i

echo $NEW_VERSION
exit 0