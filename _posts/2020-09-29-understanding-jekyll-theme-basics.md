A quick summary of what I went over last time.  We ran through a very fast tutorial of setting up a jekyll website on GitHub Pages in about 10m or so.  Now, maybe like me, you have that urge to start customizing it at least a little.  Bare minimum, I like to at least tweak the website to have colors of my choosing.

This post will give you the very basics of creating small customizations that will help you make the site feel more like yours, and less like the trailblazers before you.  After all, you probably want to stand out at least a little from the crowd right... right?!

&nbsp;
## Styles & Colors

In order to change the colors and styles of a selected theme, you need to _discover how a style is being applied_ in the theme itself.  Once you know how that is being applied, you create a style of your own with that same selector to _override the style_.

The best way to discover how to override a style is to check out the theme's README, and search through the _sourcecode_.  I've noticed, for example, the Cayman Theme gives a very helpful and short explanation of how to change styles right on the README.

(_hallelujah for good documentation!_  Imagine if documentation wasn't written well, or written at all... I'm getting side-tracked, let's move on...)

The instructions go something like this... See the [Cayman GitHub README](https://github.com/pages-themes/cayman), and checkout the _Stylesheet section_ for better specifics.
1. Create a file called /assets/css/style.scss in your site with this content
    ```
    ---
    ---

    @import "{% raw %}{{ site.theme }}{% endraw %}";
    ```
1. To add your own style, just insert some sweet CSS after the import of the theme.

Essentially, you are applying your CSS after the theme, so that _your styles win_

Note from the README: If you'd like to change the theme's Sass variables, you must set new values before the @import line in your stylesheet.

That's about it for styles.  Recap, _check the theme's README, and create your sweet sweet style_.

&nbsp;
## Layouts

Theme's have a folder called `_layouts`.  This is a _special little place_ for you to place any HTML templates that you want to _reuse_ in the pages you build.

Common layouts are
* default - used as a _shell for the site_.  It imports stylesheets and it contains the `<html>` and `<body>` tags,sets up the navigation, and other general site setup.
* post - used as a _shell for all posts_, and it commonly uses the default layout

Here's the basic idea of how to create and use layouts
1. Create a file in `_layouts`.  For this example let's create `/_layouts/foo.html`
1. In that HTML file, place the content variable where you want the child page to be inserted.  Let's create an incredible layout that adds a Foo paragraph above our page, cuz we really like foo.  (also, we'll have it use the default layout as a base as well)
    ```
    ---
    layout: default
    ---
    <p>Some Foo for your</p>
    {% raw %}{{ content }}{% endraw %}
    ```
1. Create a new `/bar.html` file that uses the new layout by adding a snippet with something similar to this
    ```
    ---
    layout: foo
    ---
    <p>Bar</p>
    ```
1. Now, what you should see when you visit /bar.html on your site is the two paragraphs, and the default layout around those two paragraphs.
    ```
    <p>Some Foo for your</p>
    <p>Bar</p>
    ```

Give it a shot and see what you can come up with for layout uses.  I feel like it's a really neat feature, and it _feels great to not duplicate code for each page_.

Layouts are a great way to create reusable HTML for your site, especially for things like posts, which is what I've used in this site.  I'm sure there will be more to come later.

&nbsp;
## Some Other Tips

If you are enjoying jekyll in my posts, I would recommend doing the [Step By Step Guide](https://jekyllrb.com/docs/step-by-step/01-setup/), it is what I used to really get going with jekyll.

&nbsp;
## Next Up

I want to add _categories_ and _tags_ to my site, but I still have to figure out what options I have in jekyll to do something like that.  As I have been blogging for a few weeks now, I've had a few other blog post ideas that are on totally different topics, like how I _used git to find a culprit commit_ that caused a test failure.  Or how I _use rem and em to scale my font to different screen sizes_

There are so many cool things to learn and blog about...  It's time to get organized, and share the fun bits I've experienced!

See you next time.