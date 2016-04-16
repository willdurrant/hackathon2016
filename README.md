# hackathon2016
Repo for the Feb 2016 Hackathon Team 1


## Prerequisites 

Install
* Node.js
* Mongo
* Git
* Webstorm
 

## Gotchas

* Make sure npm is configured for external and bash proxy's aren't set
* Make sure .bowerrc & .npmrc hasn't any proxy details set
* If using ```yo angular-fullstack:route``` make sure the url is different from the route name
* When running ```grunt build``` this doesn't copy any new html templates over so you need to manually copy these over into the dist folder
* To validate a ```grunt build``` you can run the app from the dist folder with the following and then navigate to http://localhost:8080/

    ```NODE_ENV=production node dist/server/app.js```

## Contributing

* Make sure you have a Github account
* Clone this Github repo - https://github.com/willdurrant/hackathon2016

    ```git clone https://github.com/willdurrant/hackathon2016.git```
    
* Subsequent updates via git pull

    ```git pull origin master```

* Run npm & bower install at root of project

    ```npm install```

    ```bower install```

## To run locally

* Start server using grunt

    ```grunt serve```

    ```grunt serve:livereload```

* Deployed application URL locally - http://localhost:9000/
	
## Build a release
* From project root

    ```grunt build```
* Have commented out grunt imagemin from Gruntfile.js so images need to be copied manually
* New .html template files don't seem to be copied during ```grunt build``` so need to be copied manually
* To verify the build you can run the app from the dist dir

    ```NODE_ENV=production node dist/server/app.js```


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

  ```git push openshift```
	
* Deployed application URL on Openshift - http://hackathon-tubcat74.rhcloud.com/


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
