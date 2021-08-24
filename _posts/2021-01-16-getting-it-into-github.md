---
tags: [git]
---

GitHub is an amazing tool, and there are a few situations you can be in when looking to set up a repository in it.  You might have already started a code project locally, or you can create a repository in GitHub before you write any code.  I want to make a quick post about dealing with both of those situations.

## Before code has been written

If you already know you will want to put a new project in GitHub, creating the repository from GitHub itself is very easy.  All you'll have to do afterward is clone the project from GitHub onto your device, and then you can code locally and push your changes to GitHub in the cloud.

1. Navigate to [GitHub](https://www.github.com) and sign in.
1. Create a new repository.  At the time of writing there is a _+_ symbol you can click on the top right, and choose _New Repository_
1. Provide a new repository name that will identify your project
1. Choose public or private depending on your preference
1. I'd recommend adding a README file, unless you know for some reason it will cause you issues. Check the box to create the repository with a file.  Eventually this file should describe your project, how to get set up, and any meaningful notes about your project.
1. Finally, click _Create Repository_

Now GitHub has a git repository ready for you to start working in, you just have to get it locally on your machine.  You do this using the _git clone_ command.  You should have been taken to a page that shows your new git repository's information.  What you need to find is your git repository address.  You can find it in a few ways
- Address Bar of Browser: use the URL of the page, and add _.git_ to the end
- Look for a _Green Code Button_ (at the time of writing): clicking on it should reveal your repository address, with _.git_ already added to the end of the URL, copy that to your clipboard.

The address you find will look something like _https://github.com/codingLogan/temp-test.git_  Using that address, you can now _git clone_ your repository to your local machine.

1. Open a terminal and navigate to a folder that you'd like your project to exist in.
1. Run the following git clone command
```
git clone <address-of-git-repository>
```

For me it would look like this
```
git clone https://github.com/codingLogan/temp-test.git
```
1. You should now have a folder named the same as your repository.

You can open up that folder and begin coding as you would normally, making commits, branches etc, using _git_.  The only difference now, is you can use _git push_ to get your local changes of your current branch up to GitHub.

## After code has been written

In this situation you've already been coding locally and you have a set of files you want to get into GitHub.  To get this project into GitHub, you just have to be sure it's being tracked locally by git, and also create a repository on GitHub to push to.

(Pre-requisite) If it hasn't been done already, you need to be tracking your files in a git repository locally before you can push them to GitHub.  Navigate in the terminal to the root of your project and run these commands.
```
git init
git add .
git commit -m "First commit"
```

Now your files are ready to be pushed to GitHub, so let's set up a repository for GitHub to track it.

1. Navigate to [GitHub](https://www.github.com) and sign in.
1. Create a new repository.  At the time of writing there is a _+_ symbol you can click on the top right, and choose _New Repository_
1. Provide a new repository name that will identify your project
1. Choose public or private depending on your preference
1. (important) Be sure to _NOT ADD ANY FILES_ when creating the repository on GitHub.  You'll run into conflicts with your local files if you do
1. Finally, click _Create Repository_

Situation Review
- You have a _blank repository_ on GitHub
- You have a local git project you want to push to GitHub

To push your project up into GitHub, use these commands, which are actually provided to you on the GitHub website as well.  This will connect your local project with your remote repository in the cloud.  (It also renames your current branch to main and then pushes up the branch named _main_ to GitHub)
```
git remote add origin <address-of-git-repository>
git branch -M main
git push -u origin main
```

Now, you can continue editing your files, making commits, new branches, and then use _git push_ to put your changes into the cloud.

## Summary

I showed two scenarios which you may be in, and how to set up GitHub for them.

Before project code has been written
- Set up GitHub first (create at least a README.md)
- Clone that repository locally and start working

After project code has been written
- Start tracking your project locally with git
- Set up GitHub with a blank repository
- Push your project up to the blank repository