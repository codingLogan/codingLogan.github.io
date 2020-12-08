---
tags: [git]
---

Git is essential for every flavor of developer out there, so it's good to understand the basics.  In this post I explain my thoughts on what every developer should know about git.

### Summary of contents

[What Git is not](#what-git-is-and-is-not)

[Why you should use Git](#why-you-should-use-git)

[Create a Git repository](#create-a-git-repository)

[Track some files](#track-some-files)

[Hide some secrets](#hide-some-secrets)

[Add a feature branch](#add-a-feature-branch)

[Merge a feature branch](#merge-a-feature-branch)

[Store it in the cloud](#store-it-in-the-cloud)


If you want to use git, you must first install it by following the instructions at [https://git-scm.com/](https://git-scm.com/)

&nbsp;
### What Git is and is not
I want to start by clarifying a piece of confusion that I had when I first heard of Git years ago.  Git is _not the same thing as GitHub_.

_Git is a version control system_.  It keeps track of the changes to your files.  As part of its tracking, it also provides you with an evolving history of each of file.  What this means is you can look into the past and see previous saved "states" of your file, which is called a _commit_.

_GitHub is just one place you can store your code_ in the cloud, there are many other options as well. To use Git, you do not even have to use GitHub, or any cloud service.  What these services allow you to do is share your code and collaborate with other people.

In this post I am going to just cover what Git is, and in a future post I'll cover the basics of using cloud services to collaborate with others.

&nbsp;
### Why you should use Git
I stated this already, but the benefits of using Git are these

##### Changes are tracked

Once you've initialized a folder as a Git repository, Git tracks all of the changes to your files within that folder.  "Changes" can be additional files, deleted files, more lines added to a file, lines removed from a file, etc.  Any changes to the files in the folder will now be tracked for you.  You choose when you want to save those changes to git by creating a _commit_.  Git will now use that commit as it's "clean" slate to track what has changed.

I will go over creating commits later in the post.

##### Ability to see history

Every commit you make is accessible in the future.  You can go back and view the differences between commits, or, if you want, you can actually get an old version of the file back on your system by using the _checkout_ command.

This is the basis of how libraries and frameworks have multiple versions you can choose from, different commits are flagged as those versions.

##### Freedom to Experiment

By default Git creates a default branch called "master" or "main".  With Git you can create as many branches of your code as you wish.  Essentially, when you create a branch you are creating a new version of your code where you can make whatever changes you'd like, _without affecting your previous work_.  This is useful if you want to add a new feature, or try something completely different.  Often in practice a branch is created by a developer when they begin work on a particular task.

When work has been completed in a branch you can "merge" the branch back into the "main/master" branch so your work is all back in one place again.

&nbsp;
### Create a Git repository

To initialize a folder of yours as a Git repository, you can use this simple command while currently in the folder
```
git init
```

It will create a folder named _.git_, and that's where all the _magic tracking_ information is stored.  I have never had to dive into the folder, but that's how you know if a folder is being tracked by Git or not.

&nbsp;
### Track some files
When you're tracking files in Git you can have the files in a few different states

_Untracked Files_:
Git will show you when files are completely Untracked.

_Working or Un-staged Changes_:
These are files that have differences compared to the most recent commit or staged changes.  You will typically only "stage" your changes when you are confident that the changes are what you'll want to save in a commit.

_Staged Changes_:
These are changes that are being batched up in preparation to make a real commit.  When you make a commit, you are telling Git to put all of your staged changes into a commit and save it to the history of your project.

It's worth noting, most developer tools will help you readily see your changes. When I work in VS Code frequently, there's a sidebar that shows me all of this information.

&nbsp;
#### Tracking the state of your files

In order to accurately track files with Git, it's good to know how to check on the status of your new files, working changes and staged changes.

Use this command to see what files are new, deleted, or modified, or currently staged for a commit.
```
git status
```

If I use git status right now for this post I have in progress, I get this output showing that I have a modified file, and it gives instructions for how to stage or commit them.
```
loganras.github.io$ git status
On branch git-basics
Your branch is up to date with 'origin/git-basics'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   _posts/2020-12-07-git-essentials.md

no changes added to commit (use "git add" and/or "git commit -a")
```

If you want to review the actual changes made to that file, you use the _git diff_ command.  Honestly, it's kind of hard to read, but it shows additions and deletions made to the file.  There are many tools that make viewing the diff much easier.
```
git diff <filename>
```

To stage a file to git for the first time or to stage a file's modifications use:
```
git add <file>
```

To unstage a file, Git shows that you can use
```
git restore --staged <file>
```

Once you have staged all the changes you want to save to Git history, you can commit them.
```
git commit
```

When you use the command like this it will open an editor to add a message to your commit.  The editor may be different for you, but typically it's a _vim editor_

In order to write a message in a vim editor you'll have to do the following
1. Hit the "i" key to enter _Insert Mode_
1. Type your message
1. Hit "Esc" to exit Insert Mode
1. Type a ":wq" and hit Enter (saying you want to write and quit)

You can optionally give the commit a message from the command line
```
git commit -m "Finish commit example message"
```


&nbsp;
### Hide some secrets

What do I mean by secrets?  Well, there are projects that contain secrets, or API keys, or passwords, etc, that are needed in order to communicate with other services.  Sometimes these are stored in files in the project, which is ok, but...

_DO NOT COMMIT ANY SECRETS TO GIT!_

I'll say it one more time, I want to be sure it's clear...  Saving secrets to Git will permanently save those secrets to Git's history.  If you don't want the world to know your secrets, don't ever commit any.

_PLEASE, DO NOT COMMIT ANY SECRETS TO GIT!_

When a project needs to hold any secrets you should ignore those files and set them up manually wherever you need them.  Luckily Git provides you with a mechanism to prevent you from saving them in Git.

Introducing the _.gitignore_ file.  The "." is part of the filename, as it's a hidden file.

A very fast example for you.  Let's say we have a file named secrets.json, and we want to prevent Git from tracking it.
1. create a .gitignore file at the root of your project
1. Edit .gitignore and add _secrets.json_ to it
    ```
    secrets.json
    ```

Now, Git will not tell you about changes that happen to that file 👍.  (Phew... crisis averted)

&nbsp;
### Add a feature branch

Branches are basically different volumes of code. I like to think of branches like library books because you
- Can only have _one branch checked out at a time_, similar to library cards limiting you to a certain number of books.
- Check them out to start working on them
- Commit to them when you're done
- Checkout another branch.

Here are some useful commands with branches

To view all branches you have on your machine
```
git branch
```

To create a branch, but don't check it out yet, then checkout the branch with the second command
```
git branch <branchname>
git checkout <branchname>
```

To create a branch and check it out immediately, it's the same thing as running both commands above (I use this one all the time)
```
git checkout -b <branchname>
```

Here's a concrete example to create a branch called "fantastic-feature" and start working on that branch
```
git branch fantastic-feature
git checkout fantastic-feature
```

Remember, you can always verify what branch you are on by using either of these commands (I prefer git branch, but both work)
```
git branch
git status
```

Once you have created a branch, made some commits, and you feel the work is done, you are probably going to want to merge your code back into the "main/master" branch.  Unless you want to indefinitely have separate versions of your code (like Linux).

&nbsp;
### Merge a feature branch

To get your changes into a branch we need to do a few things
1. Checkout the _destination branch_ you want all code to end up in
1. Attempt a merge of your _feature branch_ into your _destination branch_
    - (Maybe a future post) If the two branches have conflicting changes git won't be able to merge them automatically.  When this happens you'll need to resolve the conflicts manually.  This usually happens if both branches have changes to the same area of a file, so it doesn't know how to choose which change to keep.

Use this set of commands to merge your branch
```
git checkout <destination>
git merge <feature>
```
or concretely...
```
git checkout master
git merge fantastic-feature
```

Master will now have ALL of your work, congrats!!! 👏👏👏

&nbsp;
### Store it in the cloud

I mostly wanted to bring to attention what options you have for storing your code for collaboration with other people.

Popular choices are
- [GitHub](https://github.com/)
- [BitBucket](https://bitbucket.org/)
- [GitLab](https://about.gitlab.com/) I'm not too familiar with this one, but I've seen it around

&nbsp;
### Conclusions

I hope this post helped in explaining a few of the basics of Git for you.
- What Git is
- How to track changes
- How to create branches
- How to merge branches back together