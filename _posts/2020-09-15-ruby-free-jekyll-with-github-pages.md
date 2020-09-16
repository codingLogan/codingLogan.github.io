---
---
`DRAFT IN PROGRESS`

If you've ever looked into using jekyll for a website, I know what you might be thinking...

_So... wait.  Jekyll is powered by Ruby right?  What could you possibly mean by a `Ruby free jekyll`?  How would something like that even be viable, and why would you even want that?_

Ok ok, you've got me there.  I want to go over a few reason why I've chosen to start using jekyll, and what I mean by _Ruby free_.

_Spoiler - it's not actyally Ruby free, but it feels that way, and I like it :D_

## My Current Problem

Over the course of my development career I've learned to solve unique problems, build web pages, write performant SQL, design databases, migrate data from servers to `the cloud`, review code, write documents, manage build proceses, and more...

But there is one major problem I'm sitting face to face with.  I need a place where I can re-invest what I've learned `back into the development community`.  It is time to build a home where I can share my development experiences with you, so jekyll, the lucky dog, will be my first attempt at `maintaining a blog`.

A well written blog post can be a life-saver, so lets dive in about how to start up a site/blog with GitHub Pages and jekyll.

## Goals

Simple... I want to focus on content, not creating a website.  This is where the Ruby free part comes in.  GitHub Pages by default can take care of the Ruby-business for you, and you `don't have to install any dev environment` if you use what is baked in for you.

A secondary goal of mine IS to actually refine the styling and the overall website code and theme.  I mean, I'm a developer, I want to tweak it, just for fun.

## Jekyll in a nut-shell
Jekyll is a tool that can turn various files into a static website, and it has a few things that ticked the boxes for me that made me choose it for now
- It has baked in functionality for blogging
- You can choose a theme
- You can choose to customize more in depth, if you want

## How To - get it running and themed
It was surprisingly difficult to find the right information about how to correctly get the site themed.  I followed the basic step to get rolling, but my themes were not applying like I thought they were supposed to...  I hope to clarify some of the confusion that I had for anyone else trying to get it rolling.

Follow the instructions here to get started: https://pages.github.com/.  Here's a quick summary of what you'll do:
1. Create a repository on GitHub
1. Create an index.html or README.md file in that repo
1. Select a theme from the `repository settings` page.

## Blog Posts
1. Create a `_posts` directory in the root of your pages.
1. Create a file in `_posts` named [YYYY-MM-DD]-dashed-title-here.md.  Jekyll works some magic to help manage the files and derives the _date_ and _title_ from the filename.