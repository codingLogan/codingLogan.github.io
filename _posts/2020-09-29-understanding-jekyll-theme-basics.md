---
---

A quick summary of what I went over last time.  We ran through a very fast tutorial of setting up a jekyll website on GitHub Pages in about 10m or so.  Now, maybe like me, you have that urge to start customizing it at least a little.  Bare minimum, I like to at least tweak the website to have colors of my choosing.

This post will give you the very basics of creating small customizations that will help you make the site feel more like yours, and less like the trailblazers before you.  After all, you probably want to stand out at least a little from the crowd right... right?!

&nbsp;
## Colors

In order to change the colors of a selected theme, you need to _know how a color is being applied_ in the theme itself.  Once you know how that is being done, you _create a style of your own_ with that same selector to override the color.  I've noticed, for example, the Cayman Theme gives a short explaination of how to change styles right on the theme's GitHub page.

Here's a little more concrete example.  On the [Cayman GitHub](https://github.com/pages-themes/cayman), they have a small _Stylesheet section_ that explains how to add custom styles to the theme.

The basic idea for Cayman or any other theme; check the README of the theme you choose and it should help you know how to customize it.  It might be different in some cases.  (_hallelujah for good documentation!_  Imagine if documentation wasn't written well, or written at all... I'm getting side-tracked, let's move on...)

The instructions go something like this
1. Create a file called /assets/css/style.scss in your site
1. Add an @import near the top
1. Add custom CSS after the import of the theme

Essentially, you are applying your CSS after the theme, so that _your styles win_

Note from the README: If you'd like to change the theme's Sass variables, you must set new values before the @import line in your stylesheet.

That's about it for colors.  Check the README, and create your style.

&nbsp;
## Layouts

Theme's have a folder called `_layouts`.  This is a _special little place_ for you to place any HTML templates that you want to _reuse_ in the pages you build.

Common layouts are
* default - used as a _shell for the site_.  It imports stylesheets and it contains the `<html>` and `<body>` tags,sets up the navigatin, etc.
* post - used as a _shell for all posts_, and it commonly uses the default layout

Here's the basic idea of how to use layouts
1. You create an HTML file in `_layouts`
1. In the HTML file, add a special _content variable_ where you want the child page to be inserted.  Thsi will make sense in a moment...
1. Create an html page that uses the layout by telling jekyll you want to use it.  This is done by adding something called _Front Matter_ to the very top of your HTML page:
    ```
    ---
    layout: default
    ---
    <p>Some neat paragraph</p>
    ```
1. Now that _Some neat paragraph_ element will show up where you defined the _content variable_ in your layout, in this case `_layouts/default.html`.

Layouts are a great way to create reusable components of your site.
