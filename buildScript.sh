#! /bin/bash

echo -e "\n\nDeleting previous build...\n\n"
rimraf out && rimraf docs

echo -e "Running npm run build...\n\n"
npm run build

# renaming 'out' to 'docs' because nextjs.org doesn't provide any option to configure the output directory and github pages excepts only root or docs as source
echo -e "Renaming out folder to docs...\n\n"
mv out docs