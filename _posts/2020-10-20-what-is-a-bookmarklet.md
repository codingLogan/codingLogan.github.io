---
tags: javascript
---
A _Bookmarklet_ is a mechanism in browsers (at least Chrome and FireFox) where you can run JavaScript just by clicking on a bookmark.  It's an incredible shortcut!

### Why use a Bookmarklet?

As you go through a day in the life of a programmer, sometimes you find yourself repeating actions on a web page.  Then, you say to yourself...  "I'm a _lazy programmer_, I don't want to do this by hand again".

If you are doing something simple on a webpage repeatedly that could be automated via JavaScript, a bookmarklet may just be what you've been looking for.  During my regular work day I have a specific API function to call to enable or disable features, and it's a perfect use case for this.

Let's run through a super fast example of how you can create a bookmarklet.  I'll use chrome as an example.

### Create a Good 'ol Bookmark

In Google Chrome create a bookmark by clicking on the star in the URL bar

![Chrome bookmark star icon](/images/chromeStar.PNG)

Now you need to select the More option in order to _edit the url_, which is going to be the home for our custom JavaScript.

![More button in chrome bookmark menu](/images/bookmarkMore.png)

Now, the bookmarklet syntax...  Really it's just a single line of javascript preceded by _javascript:_.  But if it's more complex you can wrap a whole function in an _immediately invoked function expression_ or IIFE.

For clarity...

For simple lines of JavaScript
```js
javascript:confirm("Do it!");
```

For more complex bookmarklets (this is the IIFE)
```js
javascript:(() => {
    confirm("Do it!");
    /* additional lines */
})();
```

This is what it will look like when you edit the bookmark.  Replace the actual URL with your new javascript code.

![A line of JavaScript code that is inside the URL text box](/images/bookmarklet.png)

Now when you click the bookmark, it will run your code, and give you a confirm box that says "Do it!".

### Gotchas

I had a larger piece of javascript in a bookmarklet, and I had to work around a few things
* No single line comments with the double slash `// this will break the bookmarklet`.  Use `/* */` instead
* Make sure to have semicolons `;` at the end of your javascript lines if you have more than one. I had issues when I omitted them since it all goes into a single line in the URL textbox.

### Go Forth and Be Lazy!

Congratulations! You now know at least one more tool to make your life ~~a little more lazy~~ more productive!

### A Few Examples And Credit

My good friend Ethan, [@_estewart on Twitter](https://twitter.com/_estewart), is the one who introduced me to the concept of the bookmarklet.  He's given me permission to share some of them, which may give you some more ideas of what you can create.  In these examples the commented and minified line of code is what would actually be placed in the URL textbox.

An example which toggles designMode
```js
document.designMode = document.designMode === `off` ? `on` : `off`
// javascript:document.designMode=`off`===document.designMode?`on`:`off`
```

Video Ad skip
```js
document.querySelector(`video`).currentTime = document.querySelector(`video`).duration
// javascript:document.querySelector(`video`).currentTime=document.querySelector(`video`).duration
```

A more complex example for Twitch
```js
/** Autoclick Twitch Channel Points (Mutation Observer) */
(() => {
  const cb = mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === `childList`) {
        document.querySelector(`.community-points-summary .tw-button`)?.click()
      }
    })
  }
  const observer = new MutationObserver(cb)
  observer.observe(document.body, { childList: true, subtree: true })
  document.querySelector(`.community-points-summary .tw-button`)?.click()
})()
// javascript:(() => {const cb=ml=>{ml.forEach(m=>{if(m.type===`childList`){document.querySelector(`.community-points-summary .tw-button`)?.click()}})};const o=new MutationObserver(cb);o.observe(document.body,{childList:true,subtree:true});document.querySelector(`.community-points-summary .tw-button`)?.click()})()
```
