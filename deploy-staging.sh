#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# make sure we're on the right node version
nvm use node

# stop app before build
pm2 stop ssh-app-staging || true

# install deps
pnpm install --no-frozen-lockfile

# build client and server
npm run build:static

# ensure server.js is in the right place (it should be copied to dist or run from root)
# The server.js references dist/client and dist/server, so it should be run from project root

# reload app
pm2 reload ecosystem.config.cjs --only ssh-app-staging
