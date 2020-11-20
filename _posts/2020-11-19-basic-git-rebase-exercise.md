---
tags: git
---

Here is an example of how to use git rebase to create a clean branch history. This post follows the format of an exercise you can follow to understand the concepts, or you can just read through it, you do you 👍

### Visual Summary of Moving your branch's base to another
Go from this
```
-(0)--(1)--(2) master
    \ 
    (R1)--(R2) rebase1
```
To This
```
You'll get something like this:
-(0)--(1)--(2) master
                \ 
                (R1)--(R2) rebase1
```
Bonus: after a clean rebase, you can merge _rebase1_ to _master_ cleanly
```
You'll get something like this:
-(0)--(1)--(2)--(R1)--(R2) master
```
### Steps Summary
* Make a feature branch
* Make commits on feature branch
* Make commits on master
* Rebase feature branch (move the branch start to the tip of master)
* Move the feature branch into master (merge, with no extra commit)

## Exercise

### Make a feature branch
Create a new _rebase1_ branch off of _master_

```
git checkout master
git branch rebase1
git checkout rebase1
```
### Make commits on feature branch
Make a few commits while on the _rebase1_ branch.  For convenience, make commit messages something like the following so you can easily follow your own messages from each branch

```
rebase1 R1
rebase1 R2
etc...
```
### Make commits on master
Make a few commits on the _master_ branch.  This will allow us to see how our history moves when we rebase.  Follow a similar commit message format
```
master 1
master 2
```
Stop and observe what your commits currently look like.  You can use _git log_ while on each branch to see the recent commits.  I'm a very visual person so here's a diagram of what it should be
```
-(0)--(1)--(2) master
    \ 
    (R1)--(R2) rebase1
```
### Rebase feature branch (move rebase1's base to the tip of master)
Rebase _rebase1_ to the _master_ branch.  What you're really asking git to do is _"attempt to move the start of my branch to the current HEAD of master"_
```
git checkout rebase1
git rebase master

You'll get something like this:
-(0)--(1)--(2) master
                \ 
                (R1)--(R2) rebase1
```
- Using _git log_ while on _rebase1_ you'll see all 5 commits in that order

### Move the feature branch into master (merge, with no extra commit)

Once you've done a rebase successfully with no conflicts, you can now do a _merge_ and it won't leave any extra commits in your history since no additional change was made
```
git checkout master
git merge rebase1

You'll get something like this:
-(0)--(1)--(2)--(R1)--(R2) master
```
- use _git log_ to checkout your commit messages if you want to verify this really happened

## Conclusion

Using rebase properly can result in a very clean looking branch history.