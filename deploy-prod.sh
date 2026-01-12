#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# make sure we're on the right node version
nvm use node

# stop app before build
pm2 stop ssh-app-prod || true

# install deps
pnpm install --no-frozen-lockfile

# build server
npm run build

# reload app
pm2 reload ecosystem.config.cjs --only ssh-app-prod
