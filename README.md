# ECMS Frontend
This would be frontend of the main system used by wildlife, forestry, and environment institutions to view and manage complaints.

## Install
```
git clone https://github.com/SDP-Group-Js/ECMS.git

cd ECMS-Frontend

npm install

npm run dev
```
You would need to go into both frontend and backend directories and run this code.

## How start to developing
The server directory contains an api directory which contains all the main routes. The assigned member would be responsible for their route.

First checkout your remote module branch

```
git fetch [component-branch-name]
git checkout [component-branch-name]
```

Then create your feature branch within your component branch
```
git checkout -b [component-branch-name]/[feature-name]
git add .
git commit -m "Starting work on [component-branch-name]/[feature-name]
git push -u origin [component-branch-name]/[feature-name]
```

## How to keep contributing
Once you have started development and you are implement your component feature. Make sure to commit your changes once you have done a certain amount of work. For example completing a function or part of a function that can be commit.

Once you are ready to make a commit do the follow steps
```
git add ./file-name
git commit -m "Commit Message"
git push -u origin [component-branch-name]/[feature-name]
```
**Make sure you are working in your module feature branch!!!**

If you are encountering bugs and need help with fix it. Create a bugfix branch
```
git add ./file-name
git commit -m "Describe bug/error"
git push -u origin bugfix/[component-name]/[bug-name]
```