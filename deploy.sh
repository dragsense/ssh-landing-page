#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# make sure we're on the right node version
nvm use node

# install deps
pnpm install --frozen-lockfile

# build server
npm run build

# reload app
pm2 reload ecosystem.config.cjs --only ssh-app
