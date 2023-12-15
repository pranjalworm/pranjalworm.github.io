#! /bin/bash

echo -e "\n\nDeleting previous build...\n\n"
rimraf out && rimraf docs

echo -e "Running npm run next-build...\n\n"
npm run next-build