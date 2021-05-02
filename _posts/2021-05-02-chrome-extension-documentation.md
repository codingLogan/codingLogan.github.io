---
tags: [javascript]
---

I spent a few hours building a Chrome Extension this weekend, and I have a few thoughts and/or tips that I've encountered as I learn about this dev environment...

## Summary

In the last two weeks (during weekend hours) I've created of very simple Chrome Extension that downloads a CSV file of data on a very specific website page.  It's been fun to have an extension that I built in my browser, but I definitely spent a lot of time in the Chrome Extension docs in order to get things rolling forward.

I wanted to go over _a few tips_ that people should probably be aware of when they dive into creating Chrome Extension.  It's been some trial and error for me to get to where I'm at, and hopefully this will give you a good heads up.

This is a pretty short read, but here's the outline
- [Manifest Version](#manifest-version)
- [Online Examples](#online-examples)
- [Understand The Components](#understand-the-components)

## Manifest Version

To create the most updated version of a Chrome Extension you should be using _Manifest Version 3_.  It is the latest version of the manifest, therefore, it wil be the most supported version going forward.  _If you can, use this version of the manifest_!  It will keep you updated (as of May 2021) and help you avoid the need to migrate too soon after creating your extension.

Start with v3 first.

According to the docs, there are some things that are not in V3, like browser actions, and page actions (sad faces).  Some of these features have been moved to the _actions api_, but there are also some parts that just don't exist in v3 yet if I understand the docs correctly.

So, if you start in V3, and find you actually need V2, only then, should you actually start in V2 instead.  The only downside here is you'll have to be in an understanding that you'll be migrating up to V3 at some point.

Start in V2 if you can't use V3 for something specific.

## Online Examples

In my short experience, most examples I've run into online have been for the previous manifest version (2).  Keep this in mind when you are looking to do something specific, and you've been reading up in a tutorial or video made by somebody else.

Keep in mind if you are using V3, you may run into things that won't work for you the way tutorials say they should.

In particular for me, I've been having trouble figuring out how to _disable and grey out my extension_ on specific page.  My understanding is that I can use the _chrome.action.disable()_ (chrome action API), but it doesn't actually grey out the icon...  It does disable my extensions UI from popping up on click, but it doesn't grey out the icon like I expect it to.  It feels like it only does half of what is supposed to happen.

(Maybe I've just totally missed it in the docs, and I understand the docs wrong, but it seems that's when you call disable() it is supposed grey out the icon and prevent the popup from appearing.  If anyone has done this with V3, please share!)

## Understand Environment Isolation

I jumped straight in, no mentor, no previous knowledge, ready to make a mess of things :D.  It went something like this:
1. Looked up Chrome Developer Extensions in Google
1. I wrote some JavaScript that does what I needed, loosely following some examples.
1. I successfully made the extension do what I wanted and got it to show in the browser (bare minimum viable product)
1. Used my extension, showed it off to a few people who might also use it, that's always fun to do :) .
1. I reviewed my code knowing it's in a messy state, since I didn't deep dive into the concepts while making it.  (Like I mentioned, I just dove straight in)
1. I'm now learning the concepts of the extension ecosystem so I can provide a clean modern extension for myself and my small target user-base.

A great place to start is the [Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted/) directly from Google.

If you breeze through that Getting Started extension example above, it indeed builds you an extension, but it doesn't really solidify the concepts of what is going on.  To understand the concepts you actually need to follow the links, read up more on what is going on, and overall be interested in learning more about how the architecture actually works.  If you follow the additional links you'll have a better chance at building something solid and less thrown together.

In particular, the distinction that _execution environments are isolated_ makes simple enough sense in theory.  But depending on your extension's purpose, you might need to understand it more in depth to accomplish your goals.  The extension's execution environment is separate from the page's execution environment, so you have to plan for that in your design.

For example, my extension really does a very minimal amount of work, but it does need to know about both environments.  Here's what it does.
1. Extension has a _download button_ in its UI that can be clicked
1. Queries the page's DOM for data in a specific table
1. Uses the data to create a downloadable CSV for the user's device

For each of those steps above, I had to understand where that work was being done before I was able to get it to work correctly.  I changed my code around a few times before I understood it correctly.
1. Extension Environment (download button)
1. Page Environment (table of data on the page)
1. Page Environment (use data to create download)

In order for my extension to start acting on the page, I had to use script injection.  In particular, when the extension button is clicked, I inject a script into the page that does the rest of the work, on the page.

Extension Environment --> script --> Page Environment

_TIP_ - When injecting a script into a page, you can't use functions that are declared in your extension's js file.  They won't be defined when the page environment tries to use them, since the environments are isolated.  You have to inject the functions into the page, as well as the code that uses them.

## Conclusion

I've been having fun building an extension, even if it's the only one I ever build.  I use chrome a lot, so it's fun to see my extension icon floating up there next to my staples that I always have!

Anyway, extensions so far feel very different to develop, and I'm still learning about them, but so far, I know to
- Watch out for the correct manifest version in the docs
- Carefully choose examples to follow, keeping manifest version in mind
- Pay attention to which environment a piece of code should run