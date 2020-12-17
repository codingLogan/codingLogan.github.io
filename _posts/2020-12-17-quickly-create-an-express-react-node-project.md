---
tags: [javascript]
---

This will be a pretty brief post, showing how you can quickly set up an Express app that can also be deployed to Heroku with minimal effort.

# Summary (you're welcome)
1. Create a folder for your project and run _git init_ inside it
1. Run _npx express-generator_ to create a basic Express app
1. Run _npm install_
1. ignore _node_modules_
1. Run _npx create-react-app client_ to create a React client
1. Modify Express to serve React's static files
1. Create a root level package.json script to build client files, and run _npm run build_
1. Run your entire app with _npm start_.

In the end you will have a repository that is holding both your front end application AND your back-end server code.  It makes for really easy deploys of your code because it's all in one place.  This is how it will look at the top level when we're done.
```
bin/
client/
 |-node_modules/ (ignored)
 |-public/
 |-src/
 |-.gitignore
 |-package-lock.json
 |-package.json
 |-README.md
node_modules/ (ignored)
public/
routes/
views/
.gitignore
app.js
package-lock.json
package.json
```

There are improvements that could be made with this FOR SURE, but this should get you going like it did for me.

Read on if you want more details for each step.

## Create your project folder

Lets start by creating a folder for our project and initializing it with git.
```
mkdir your-app-name
cd your-app-name
git init
```

## Create the Express app

Now we need our express application, I found recently that you can generate one really quickly by running this command.  

(note - the npx package runner lets you run commands even if you don't have the packages installed with npm.  See [this great article](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/) for more info)
```
npx express-generator
```

This will create a folder structure that looks something like this.  Feel free to modify these files to your needs, but out of the box it's a _fully functional Express server_.
```
bin/
public/
routes/
views/
app.js
package.json
```

Now... this automated generation added the proper dependencies for your express app to package.json, but did not install them via npm.  Install them now by running _npm install_

## Sanity check, make sure it runs

Run _npm start_ to start up your new express server

Go to [http://localhost:3000/](http://localhost:3000/) and check to see if you get a friendly "Welcome to Express" message.  If you do, you're good to go!

## Git management

You'll want to create a _.gitignore file at the root_ of your project to ignore various files...  Specifically, for any npm project it's _recommended to ignore node_modules_, so let's add this to a .gitignore file so we're not saving tracking info for installed packages.
```
node_modules
```

At this point, you have a bunch of files generated for Express, and you should be ignoring node_modules, I'd recommend doing a git commit at this point but you do you.

## Create a React client for your app

Creating a React app structure has been made easy (makes me feel spoiled), by running this command from the root of the project.
```
npx create-react-app client
```

If successful you will have a new folder in your project called _client_ and it will have these contents
```
client/
 |-node_modules/ (ignored)
 |-public/
 |-src/
 |-.gitignore
 |-package-lock.json
 |-package.json
 |-README.md
```

Now, we're going to need to build the React app.  For convenience, lets create a build script at the root level, that will go into the client folder and run the build.

Open up your root level package.json and make the scripts look like this
```
"scripts": {
    "start": "node ./bin/www",
    "start-client": "npm start --prefix client"
    "build": "npm run --prefix client build"
},
```

- _start_ will run your Express server
- _start-client_ will run your client only
- _build_ will build your client files

I created the build and start-client commands on my own, and I'm not the most familiar with the syntax, but here's my shot at the explanation.  The command work for the client because when you run an npm command with the --prefix flag it runs the command (in our case _npm run_) as if you were in the _client_ folder.

Anyway, try it out, running _npm run build_ from the root of your project should generate a new _build_ folder inside of client.

Then run _npm run start-client_ to see your React app running.

You can still run _npm start_ and see your Express app running.

## Make Express serve the react app

All you need to do to serve React's files is tell Express to look for them in the right place.  This is all I've had to do so far in a simple React app.

Open up app.js and find the _express.static(_ line.  Make it look something like this, pointing to your React-built files
```
// Serve React's files instead of default public folder 
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));
```

Now when you start Express, it will first look for your /client/build/index.html file.  If it finds it, it will serve React for you.

To validate everything is working run _npm start_ and you will see React instead of Express

## Notes on Heroku deployment

The additional scripts we added earlier will allow Heroku to _build_ and _start_ your server thats holding your React files.  It looks for those two scripts when you deploy a Node project.

A few more configs
- To deploy to Heroku, they also want you to specify the Node version in your package.json, so lets add that.
- And, unless you add your client app as a dependency you'll get errors when trying to run the above build command.  The root level package.json should have a dependency of your _client_.
```
  "dependencies": {
    ...other entries...
    "client": "file:client"
  },
  "engines": {
    "node": "14.x"
  }
```

When you update package.json with _new dependencies_ be sure to run a fresh _npm install_ to update your lock file accordingly.  Push your changes to GitHub and you're ready to deploy.


1. Go to [Heroku.com](https://heroku.com)
1. Create a new app
1. Connect it to GitHub by choosing _Connect to GitHub_ in the deployment method section
1. Then you can deploy it automatically or manually.  Once you do, your app should be visible.

## Troubleshooting

As I was learning how to do this Heroku was actually pretty helpful in showing me the errors.  If you run into issues, watch the logging.

## Conclusion

Getting a basic site up and running isn't that bad when you have good tooling available to you, and free hosting like Heroku.

We just created a (M)ERN app without the M in a few minutes.