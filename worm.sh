################################################################################
#          A script to automate the website testing and deployment
################################################################################

# assigning command line argument
COMMIT_MESSAGE=$1

# delete the last created build
function deleteLastBuild() {

  printf "\n - Deleting previous build...\n"
  npx rimraf docs
}


# create a new build
function createNewBuild() {
  
  printf "\n - Creating a new build...\n\n"
  hugo
}


# git handler
function gitHandler() {

  # add file to git staging
  printf "\n - Adding git files to staging...\n\n"
  git add -A

  # create a commit with the message passed in as argument
  printf "\n - Creating a new commit...\n\n"
  git commit -m "$1"

  # push the changes to remote
  printf "\n - Pushing changes to remote...\n\n"
  git push
}


# function to serve the built website locally
function serveLocally() {
  
  # building and serving the website locally
  printf "\n - Serving the website locally...\n\n"
  hugo server -D
}


deleteLastBuild

# invoke git handler only if a commit message was passed in the command line argument
if [ -z "$COMMIT_MESSAGE" ]
then
  serveLocally
else
  createNewBuild
  gitHandler "$COMMIT_MESSAGE"
fi



