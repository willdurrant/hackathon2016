# hackathon2016
Repo for the Feb 2016 Hackathon at work


## Prerequisites 

Install
* Node.js
* Mongo
* Git


## Gotchas

* Make sure npm is configured for external and bash proxy's aren't set
* Make sure .bowerrc & .npmrc hasn't any proxy details set


## Contributing

* Make sure you have a Github account
* Clone this Github repo - https://github.com/willdurrant/hackathon2016

```git clone https://github.com/willdurrant/hackathon2016.git```

* Run npm & bower install at root of project

```npm install```
```bower install```

## To run locally

```grunt serve```
```grunt serve:livereload```
	
## Build a release
* From project root

```grunt build```

* Navigate into create dist folder and add & commit

```cd dist```
```git add -A```
```git commit -m 'some comment...'```

## Deploy to Openshift	
	
* Associate Openshift remote repo with the dist folder

```git remote add openshift {ssh_url}```
	
* Verify remote repos

```git remote -v```

* Push dist folder to Openshift

```git push openshift master```
  (might need to do a git pull openshift master first and then redo the grunt build)
	
## Miscellaneous

To delete a project on window.
* Install npm package rimraf globally. This deletes the nested directories in node_modules which Windows has problems with

```npm install rimraf -g```
* Delete node_modules directory from project root

```rimraf node_modules```
* Then delete project

```cd ..```
```rm -rf hackathon/```
	
## Useful resources:
* https://developers.openshift.com/en/node-js-example-meanstack.html
* https://developers.openshift.com/en/managing-common-rhc-commands.html
* https://developers.openshift.com/en/node-js-getting-started.html
* https://github.com/angular-fullstack/generator-angular-fullstack#openshift
* https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
