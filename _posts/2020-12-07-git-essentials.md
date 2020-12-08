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

Collaborate with other developers

If you want to use git, you must first install it by following the instructions at [https://git-scm.com/](https://git-scm.com/)

### What Git is and is not
I want to start by clarifying a piece of confusion that I had when I first heard of Git.  Git is _not the same thing as GitHub_.

Git is a version control system.  It keeps track of the changes to your files.  As part of its tracking, it also provides you with an evolving history of each of file.  What this means is you can look into the past and see previous saved "states" of your file, which is called a _commit_.

_GitHub is just one place you can store your code_ in the cloud, there are many other options as well. To use Git, you do not even have to use GitHub, or any cloud service.  What these services allow you to do is share your code and collaborate with other people.

In this post I am going to just cover what Git is, and in a future post I'll cover the basics of using cloud services to collaborate with others.


### Why you should use Git
I stated this already, but the benefits of using Git are these

#### Changes are tracked

Once you've initialized a folder as a Git repository, Git tracks all of the changes to your files within that folder.  "Changes" can be additional files, deleted files, more lines added to a file, lines removed from a file, etc.  Any changes to the files in the folder will now be tracked for you.  You choose when you want to save those changes to git by creating a _commit_.  Git will now use that commit as it's "clean" slate to track what has changed.

I will go over creating commits later in the post.

#### Ability to see history

Every commit you make is accessible in the future.  You can go back and view the differences between commits, or, if you want, you can actually get an old version of the file back on your system by using the _checkout_ command.

#### Experiment with features

By default Git creates a default branch called "master" or "main".  With Git you can create as many branches of your code as you wish.  Essentially, when you create a branch you are creating a new version of your code where you can make whatever changes you'd like, _without affecting your previous work_.  This is useful if you want to add a new feature, or try something completely different.  Often in practice a branch is created by a developer when they begin work on a particular task.

When work has been completed in a branch you can "merge" the branch back into the "main/master" branch so your work is all back in one place again.

### Create a Git repository

To initialize a folder of yours as a Git repository, you can use this simple command
```
git init
```

It will create a file named `.git`, and that's where all the _magic tracking_ information is stored.  I have never had to dive into the folder, but that's how you know if a folder is being tracked by Git or not.

### Track some files
When you're tracking files in Git you can have the files in a few different states

_Working or Un-staged Changes_:
These are differences in the files compared to the most recent commit (or staged changes).  You will typically only "stage" your changes when you are confident that the changes are ones you'll want to save in a commit.

_Staged Changes_:
These are changes that are being batched up in preparation to make a real commit.  When you make a commit, you are telling Git to put all of your staged changes into a commit and save it to the history of your project.

_Tracking the state of your files_:
In order to accurately track files with Git, it's good to know how to check on the status of your working changes and staged changes.  Use this command to see what files are new, deleted, or modified, or currently staged for a commit.
```
git status
```

To add a file to git for the first time, or it's current working changes, use:
```
git add <file>
```

To unstage a file, Git shows that you can use
```
git restore --staged <file>
```

### Hide some secrets
### Add a feature branch
### Merge a feature branch
### Store it in the cloud