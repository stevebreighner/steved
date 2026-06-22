#!/bin/bash

echo "Building site..."
npm run build

echo "Syncing to iMac..."
rsync -av dist/ stephenbreighner@192.168.0.26:~/Desktop/steved/

echo "Done."
