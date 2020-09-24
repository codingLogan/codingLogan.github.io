---
---

Alright, it is time to get in and get technical with jekyll in a new repository.  By the end of this short _How To_ post you should have a very minimal jekyll site up and running.

If you want to learn more about jekyll, check out their site at [jekyllrb.com](https://jekyllrb.com/).

Before we start, here are some benefits of using jekyll with GitHub Pages
- No Server back-end
- No Dev Environment
- Focus on Content
- Can be totally customized
- Free

&nbsp;
## What You'll need
- GitHub account
- About 10m of time

&nbsp;
## Ready Set Go
1. Sign in to GitHub.
1. Create a new repository.  At the time of writing you can find a large plus icon near the top right of the browser.  Click it and click `New Repository`.
1. Name the repository whatever you like.  (I chose `jekyll-intro` for the sake of the series.)
1. Check the box to `Add a README file` as a starting point.  (We will use this file later to test out the various themes that are available)
1. Click `Create Repository`

&nbsp;
## Nice Work!
You now have a nice clean repository to mess with, I mean... to work with.  Yes, to work with.  :D.  The next step is to `Activate GitHub Pages` inside of this repository, so let's get to it, shall we?

&nbsp;
## Activate GitHub Pages
With your repository open in a browser
1. Navigate to the `Repository Settings` by clicking on the Gear Icon.
    - Make sure you are in the `Options` section/tab of the Settings
1. Scroll way down to the `GitHub Pages` section
1. Locate the `Source` dropdown and choose `master`.
    - Or, another branch if you're going rogue... Also, that's awesome!
1. In the `Folder Dropdown` you can choose to serve your GitHub Pages from root, or another if you so choose.  I'm going to select `/root` for this tutorial
1. Click `Save` to apply these settings.

&nbsp;
## Congratulations!  Pages Is Serving Your New Website
Once the `Settings` page refreshes after saving, scroll back down to the GitHub Pages section.  Above the area where you made your selections of a _branch_ and _folder_ it will say something similar to this (but your repo instead):

_Your site is ready to be published at https://loganras.github.io/jekyll-intro/._

If you click on that link, you will be taken to your GitHub Pages website, which is currently serving your README file as your landing page.

Go check it out, and then come back when you want to apply a theme!

&nbsp;
## Choose Your Theme
Ok, so you've seen that your `website` is now being served.  Let's look at a fast way to get it styled and ready to create content, `like your own blog posts`.

Navigate back to the GitHub Pages section of the Settings page.
1. Under Theme Chooser, click `Choose a Theme`
2. On this page you can preview what a theme might look like on your site.  I'm going to Choose `Cayman` since it has green headers and it will be easy to see that it actually applied some styling.
3. After you click the `Select Theme` button it will also offer to modify your README so that you can easily see your newly styled site.  `Commit` those changes to your branch.

### Hot Tips
After a few short moments, your site will be rebuilt and republished.  Once it is done you can view your newly styled site.  Each commit you make to your repository will trigger a rebuild/redeploy of your site.  (No dev environment required!)

For when you pick a theme - Every theme comes with different features, colors and layouts.  Some have blog layouts out of the box, some don't.  Your mileage and support for each will vary greatly.

&nbsp;
## Jobs Done

And that's it, you went from having a desire, to actually having a website in 10m or so of time!  Now you can feed it with incredible content for yourself or others.

Next Up - `Understanding Jekyll Themes`.  I was having difficulty applying a theme to an existing site I had started to create.  Colors weren't showing up, styles weren't applying, etc...  Since then, I've learned more about how themes do what they do and I hope to share the basics that can get you going.
