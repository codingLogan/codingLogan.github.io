A quick summary of what I went over last time.  We ran through a very fast tutorial of setting up a jekyll website on GitHub Pages in about 10m or so.  Now, maybe like me, you have that urge to start customizing it at least a little.  Bare minimum, I like to at least tweak the website to have colors of my choosing.

This post will give you the very basics of creating small customizations that will help you make the site feel more like yours, and less like the trailblazers before you.  After all, you probably want to stand out at least a little from the crowd right... right?!

&nbsp;
## Styles & Colors

In order to change the colors and styles of a selected theme, you need to _discover how a style is being applied_ in the theme itself.  Once you know how that is being applied, you create a style of your own with that same selector to _override the style_.

The best way to discover how to override a style is to check out the theme's README, and search through the _sourcecode_.  I've noticed, for example, the Cayman Theme gives a very helpful and short explaination of how to change styles right on the README.

(_hallelujah for good documentation!_  Imagine if documentation wasn't written well, or written at all... I'm getting side-tracked, let's move on...)

The instructions go something like this... See the [Cayman GitHub README](https://github.com/pages-themes/cayman), and checkout the _Stylesheet section_ for better specifics.
1. Create a file called /assets/css/style.scss in your site
1. Add an @import near the top with the `site.theme`
1. Add custom CSS after the import of the theme

Essentially, you are applying your CSS after the theme, so that _your styles win_

Note from the README: If you'd like to change the theme's Sass variables, you must set new values before the @import line in your stylesheet.

That's about it for styles.  Recap, _check the theme's README, and create your style_.

&nbsp;
## Layouts

Theme's have a folder called `_layouts`.  This is a _special little place_ for you to place any HTML templates that you want to _reuse_ in the pages you build.

Common layouts are
* default - used as a _shell for the site_.  It imports stylesheets and it contains the `<html>` and `<body>` tags,sets up the navigatin, etc.
* post - used as a _shell for all posts_, and it commonly uses the default layout

Here's the basic idea of how to create and use layouts
1. You create an HTML file in `_layouts`
1. In that HTML file, add a special _{{content}}_ variable where you want the child page to be inserted.  This will make sense in a moment...
1. Create an html page that uses the layout by telling jekyll you want to use it.  This is done by adding something called _Front Matter_ to the very top of your HTML page and signify which layout you want your page to use, see the tripple dashes:
    ```
    ---
    layout: default
    ---
    <p>Some neat paragraph</p>
    ```
1. Now that _Some neat paragraph_ element will show up where you defined the _content variable_ in your layout, in this case `_layouts/default.html`.

Layouts are a great way to create reusable components of your site.
