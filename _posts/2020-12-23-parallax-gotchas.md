---
tags: [css]
---

I explain a few gotchas that I ran into when developing a parallax effect for a work project.  Css background, and a Firefox specific issue I ran into.

## Summary

Recently I've been working on a project at work where I've been applying this 3d effect to a set of mountain ranges and some clouds, with a sunset gradient background.  During it I ran into a few things that I'd like to share if it helps anyone else, including myself in the future.

_Key Points of the article_

Css Backgrounds should be applied to the parent that sets the perspective, otherwise you'll be painting the background in front of your other elements.
```
.parallax-parent {
    perspective: 1px;
    background: <your-gradient or color, or image>;
}
```

You can actually view the parallax examples in this post on GitHub at my [pokemon-parallax](https://github.com/codingLogan/pokemon-parallax) repository.  Look at the README and you can follow links to see those examples.

Firefox tip - If you are nesting parallax effects deeply for whatever reason, you MUST apply a _transform-style: preserve-3d;_ to every div that contains parallax elements or you'll lose your 3d perspective.  Chrome and Safari did not have this issue...

## Intro To Parallax

_Parallax_ is really just another way of saying that you've applied a 3d-like view to your page.  As the page adjusts its scrolled position, the view and arrangement of the elements changes as well, as if you were in a real 3d environment.  It's all about the perspective.

For example, if you're looking at a mountain and you are standing _at its base_, you can only see the mountain, and maybe taller mountains behind it.

But, if you have a drone _up high_, the perspective is up high, where you can see the front mountain, and down into some canyons, and you can see more of the back mountains.

In addition, if you are moving and looking at the mountain, things close to you appear to move faster than things that are further away.

These are the kinds of things you can achieve with CSS perspective or _parallax_.

## Quick CSS To Start Using Parallax

This is a very minimal intro to get you started.  If you want a really good article to learn how it works, check out [Keith's Blog Post about Parallax](https://keithclark.co.uk/articles/pure-css-parallax-websites/).  It's an incredible resource, and I don't want to copy his amazing content, credit is due where it is due and he's earned it.

To start using parallax there are a few things you'll need to set in CSS to get things rolling.  On a parent element containing your 3d-viewable elements, you should set these properties.
```
.parallax-parent {
    perspective: 1px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective-origin: center center;
}
```

- _perspective_ sets what depth the users view is at.
- _height_ and _overflow_ helps you set up a scrolling area so that you can see the perspective work.  If the content of the parallax-parent isn't tall enough to need scrolling you won't see any of the 3d effects.  Set these how you need them.
- _perspective-origin_ is used to set where the user's "eye" would be viewing the images from.  You'd adjust this depending on the desired effect, but center center is a good start.

Then on any _child element_ that you want to be part of the 3d effect, you have to apply a transform that pushes it to a different depth away from the user.
```
/* Set layer to be same distance as user
   Example - close mountains
*/
.layer1 {
    transform: translateZ(0px);
}

/* Push this element further away from the user
   Example - further mountains
*/
.layer2 {
    transform: translateZ(-1px);
}
```

Have fun and play around with these, and checkout out _Keith's article_, it's really informative.

Now, to the problems I ran into...

## The Background Problem

You have to be careful how you apply a CSS background.  You may end up covering elements that have been pushed back further when you don't mean to.  Especially when you apply a background to a group of 3d positioned elements.

Potential Solutions
- Move the background CSS to the parallax parent, or higher to get the background you want behind all elements.
- If you like the effect, you can create semi-transparent background colors to separate the sections.
- Have fun!  Play with it until you like it.

## The Firefox Problem

Firefox needs some hand holding to let parallax effects drill down into groups.  If you have html markup like this, Firefox will not have 3d effects.  But, Chrome will still work just fine.
```
<div class="parallax-parent">
    <div>
        <img src="bulbasaur.png" class="layer3" />
        <img src="ivysaur.png" class="layer2" />
        <img src="venusaur.png" class="layer1" />
    </div>
    <div>
        <img src="charmander.png" class="layer3" />
        <img src="charmeleon.png" class="layer2" />
        <img src="charizard.png" class="layer1" />
    </div>
    <div>
        <img src="squirtle.png" class="layer3" />
        <img src="wartortle.png" class="layer2" />
        <img src="blastoise.png" class="layer1" />
    </div>
</div>
```

So, what gives?  After some digging, I found this gem in the [docs on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style) that says

_As this property is not inherited, it must be set for all non-leaf descendants of the element._

So, if we modify our above markup with a new CSS class for each grouping, it will fix Firefox, and preserve the 3d effect as expected.
```
.parallax-group {
    transform-style: preserve-3d;
}
```
```
<div class="parallax-parent">
    <div class="parallax-group">
        <img src="bulbasaur.png" class="layer3" />
        <img src="ivysaur.png" class="layer2" />
        <img src="venusaur.png" class="layer1" />
    </div>
    <div class="parallax-group">
        <img src="charmander.png" class="layer3" />
        <img src="charmeleon.png" class="layer2" />
        <img src="charizard.png" class="layer1" />
    </div>
    <div class="parallax-group">
        <img src="squirtle.png" class="layer3" />
        <img src="wartortle.png" class="layer2" />
        <img src="blastoise.png" class="layer1" />
    </div>
</div>
```

## Conclusion

Parallax is a really cool effect to work with, and I'm still learning the tricks with it.  If you have anything you'd add to a gotcha list for parallax building, I'd love to discuss them, I look forward to hearing from you.