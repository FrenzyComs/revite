#!/bin/bash
# Build and publish release to production server

# Remote Server
if [ -z "$REMOTE" ]; then
    echo "Please set REMOTE!"
    exit
fi

# Remote Directory
REMOTE_DIR=/root/revite

# Post-install script
POST_INSTALL="pm2 restart revite"

# Assets
export REVOLT_SAAS=https://github.com/FrenzyComs/assets


# Exit when any command fails
set -e

# 1. Build Revite
yarn build:highmem

# 2. Archive built files
tar -czvf build.tar.gz dist

# 3. Upload built files
scp build.tar.gz $REMOTE:$REMOTE_DIR/build.tar.gz
rm build.tar.gz

# 4. Apply changes
ssh $REMOTE "cd $REMOTE_DIR; tar -xvzf build.tar.gz; rm build.tar.gz; $POST_INSTALL"

