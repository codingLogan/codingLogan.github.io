---
tags: jekyll
---
If you have a _jekyll blog_, and want to add a way to categorize your posts, I hope this helps you out and gives  you some inspiration.  Let's do this!

### Simplified steps, no fluff.
1. Create a new _tags collection_ by adding an entry in _config.yml
    ```
    collections:
        tags:
            output: true
    ```
1. Create a file for each tag you want to have in your blog under a new directory called __tags_.  An example would be _/_tags/jekyll.html_ for a _jekyll_ tag.  You then need to iterate over the posts to _display the ones with the tag_.  You can view posts for that tag if you navigate to _/tags/jekyll.html_
    ```
    ---
    name: jekyll
    ---
    {% raw %}
    <h1>Posts tagged with "{{page.name}}"</h1>

    <ul>
    {% for post in site.posts %}
    {% if post.tags contains page.name %}
    <li>
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
        {{ post.excerpt }}
    </li>
    {% endif %}
    {% endfor %}
    </ul>
    {% endraw %}
    ```
    * Note - it would probably be best to make this a reusable piece, via _jekyll includes_ since this code will have to exist in each tag file. (I still need to look into this as well)
1. In your _post files_ add the tags you want to assign to the post like this.  (space separated)
    ```
    ---
    tags: jekyll tutorial
    ---
    ```
1. Wherever you want to show your available tags, or other collections, you can iterate through them like this.
    ```
    {% raw %}
    {% for tag in site.tags %}
        <a href="{{tag.url}}">{{ tag.name }}</a>
    {% endfor %}
    {% endraw %}
    ```

&nbsp;
### A Few After Thoughts

It is worth noting that out of the box, _managing tags_ seems like it will have _some amount of duplication_.  I will most likely look into solutions of my own to reduce the amount of overhead for adding a new tag as I move forward.
* I particularly like the idea of _creating a script to create my tag files_ for me based on what my posts currently have.  This way all I will have to do is create my posts, add tags to them, and run a script.

&nbsp;
### Other Useful Resources

This [Step-By-Step Collections Tutorial](https://jekyllrb.com/docs/step-by-step/09-collections/) on jekyll's site is what I mainly used when creating my tags.  It runs through what a collection is, and how to set one up.

I also used this [post by Anna Ślimak](https://blog.lunarlogic.io/2019/managing-tags-in-jekyll-blog-easily/) when I was looking into my options.
