---
tags: git
---

In this post I will show you how to use _git bisect_ to help you find an erroneous test breaking commit. If you've ever spent time _hunting down what commit broke a feature_, or started a chain of test failures I hope this will be of use to you!

## Git Bisect Cheat Sheet
### The commands used in this post

Start the bisect process
```
$ git bisect start
```

Mark currently checked out commit as bad
```
$ git bisect bad
```

Mark a specific tag or commit as good
```
$ git bisect good [tag or commit]
```

Continue marking the commits it checks out for you as good or bad until the process is complete
```
git bisect good
git bisect bad
```

## The Example Commits
I'm using my repository for this blog as my example so I have real hashes to use, even though there are no real problems.

Now, if there was an issue, and I had to go through and test every single one of these to find the culprit, it would be a painful experience...  Lets see if _git bisect_ can help prevent us from so much effort!  I'd rather not test 17 different commits 1 by 1 from the top if I don't have to.

```
897598c588a29aff03e5bfea96a321d5bc0b032e (HEAD)
b8c2b6422040db5318edc60a42635a21f7b07e30
3a0c4a19767ee53f4021e9acf074e346b59d97ed
0d48f4e5f691e82ea00eb86eecc6e6295ec5c6a4
9e7c78bf04201a3e57c2526752c22d5c6b927edc
1d7ba118397235f363529b09a2f294d3006da94c
4dd56307d366ea9c80657884d33840abaac47311
5e7af86fffb6c211f7e0fed099f0d2bc868dc99b
8171ce8b83716ebc2675a732f7747b343ee34549
8384d36957cb43a6c616e88f04fc4f3dabe19d28
d2f61161855a7ace77a450e00b18fe09fcd8dd84
1d3c1e58d97c704406f6521913d9ff31f7d46ef4
e0aec5ded852ce9a09f40e0a60f7beb6cffe81d0
06935607d89364a37244607169ac48eb7d0e5f7c
e9de0adddc3dec603194c01c90a7efa68703f862
7393d724ca3c900e138e3e132e8a9e7b1fbd09cf
c9a55226909479bf3fd70f4c75053c447e6241f6 (Culprit commit, can bisect find it?)
905d75a6f4fd36ab130486c973c9de077af8f540
261a23286ab2d275f8f12a724e32caa244c26478
f94cf1190d9f41d43888484d1a31c22af03c62f2
d98809a1eb4c085f2c4a75fcf7b7182c4d0aaf64
d6c3950d96303f4a9b94edf1e167fe91d563242d
9243fb1c6f3b4c13a40f1a314512e713823b2d89
97b18c3b73af9b263762666e79afc92d9abe068f
211cd00af648d1e805cc22135de3b1db79640645 (A long long time ago)
```

## The git-bisect Process
1. Start the process using `git bisect start`
1. Specify a known bad commit. Here's I'm going to say that my currently checked out commit is _bad_ using `git bisect bad`
1. Specify a known good commit.  From my list above I'm going to say that the good commit was some time ago using `git bisect good 211cd00af648d1e805cc22135de3b1db79640645`

Now the process is running.  In the terminal I get this output, telling me what git bisect is doing for me.  Note, it actually checks out the commit so you can test it out to determine if it's good or bad.
```
Bisecting: 11 revisions left to test after this (roughly 4 steps)
[e0aec5ded852ce9a09f40e0a60f7beb6cffe81d0] Add current navigation style
```

Now looking at our list of commits above, we see it chose a commit right in the middle, which in the Results section below I labeled _(bisect 1)_.  This is still a bad commit, so I'm going to say `git bisect bad`.
```
Bisecting: 5 revisions left to test after this (roughly 3 steps)
[261a23286ab2d275f8f12a724e32caa244c26478] Merge pull request #5 from Loganras/jekyll-tags-post
```

It now checked out a new commit for me to test... I will continue labelling and marking the commits as good or bad with `git bisect good` or `git bisect bad` and save you the reading of all the output ;).

## Results

```
897598c588a29aff03e5bfea96a321d5bc0b032e (Known bad commit)
b8c2b6422040db5318edc60a42635a21f7b07e30
3a0c4a19767ee53f4021e9acf074e346b59d97ed
0d48f4e5f691e82ea00eb86eecc6e6295ec5c6a4
9e7c78bf04201a3e57c2526752c22d5c6b927edc
1d7ba118397235f363529b09a2f294d3006da94c
4dd56307d366ea9c80657884d33840abaac47311
5e7af86fffb6c211f7e0fed099f0d2bc868dc99b
8171ce8b83716ebc2675a732f7747b343ee34549
8384d36957cb43a6c616e88f04fc4f3dabe19d28
d2f61161855a7ace77a450e00b18fe09fcd8dd84
1d3c1e58d97c704406f6521913d9ff31f7d46ef4
e0aec5ded852ce9a09f40e0a60f7beb6cffe81d0 (bisect 1 - bad)
06935607d89364a37244607169ac48eb7d0e5f7c
e9de0adddc3dec603194c01c90a7efa68703f862
7393d724ca3c900e138e3e132e8a9e7b1fbd09cf (bisect 3 - bad)
c9a55226909479bf3fd70f4c75053c447e6241f6 (bisect 4 - bad) (Culprit commit, bisect FOUND it!)
905d75a6f4fd36ab130486c973c9de077af8f540 (bisect 5 - good)
261a23286ab2d275f8f12a724e32caa244c26478 (bisect 2 - good)
f94cf1190d9f41d43888484d1a31c22af03c62f2
d98809a1eb4c085f2c4a75fcf7b7182c4d0aaf64
d6c3950d96303f4a9b94edf1e167fe91d563242d
9243fb1c6f3b4c13a40f1a314512e713823b2d89
97b18c3b73af9b263762666e79afc92d9abe068f
211cd00af648d1e805cc22135de3b1db79640645 (Known good commit)
```

Once the process has been followed all the way through, _git bisect_ printed this out for me :D
```
c9a55226909479bf3fd70f4c75053c447e6241f6 is the first bad commit
```

That's the one I picked to be the trouble-maker for my example!  So, it does indeed find it, if your tools and checking are effective enough with each commit.

## Conclusion

In this example, I had already determined the good/bad so it was very fast.  In the real environment, you'd want some quality tests and QA with each commit to find if it was indeed good/bad.

_git bisect_ is a useful feature of git that splits the number of potential commits to check in half each time.

The reason I posted about this was because I did this process manually without knowing about the feature git provided...  When I happened to read about it, I was shocked git actually had a feature to help find problem commits!  Next time I'll use the tool, because it's cool.

If you want to learn more about git bisect check out [The Docs](https://git-scm.com/docs/git-bisect)