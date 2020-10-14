---
tags: javascript
---

"It's dangerous to go alone... Take this!"  Here are a few tools to throw into your JavaScript tool belt!
* Object Spreading
* Object Destructuring
* Object Rest Parameter

&nbsp;
### Why these tools are awesome

All of these features of JavaScript help you write more concise code.  I'll go over a very minimal set of examples, and give you a few keywords to search for if you want to learn more.

&nbsp;
### Object Spreading

You can use the special triple-dot "..." operator to spread _object properties as arguments_ into a function call or other piece of code.
```js
// Assume we have diabloReference(stay: string, and: string)
// Let's set up an object for an example
const deckardCain = {stay: "awhile", and: "listen" }

// You could pass them like this
diabloReference(deckardDain.stay, deckardCain.and)

// or you can use spread operator
diabloReference(...deckardDain)
```

You can also use the spread operator to _combine_, and _override props_ of another object
```js
const firstTry = {hero: "batman", color: "black"}
// Note, the order matters, the last value for a prop wins
const secondTry = {
    ...firstTry,
    color: "reallyReallyDarkGray",
    optional: "sidekick"
}
console.log(secondTry)
// Here, batman prefers gray because that color value came last
// {hero: "batman", color: "reallyReallyDarkGray", optional: "sidekick"}

const thirdTry = {
    color: "reallyReallyDarkGray",
    ...firstTry
}
console.log(thirdTry)
// But here, batman prefers black because it was applied last
// {color: "black", hero: "batman"}
```

&nbsp;
### Object Destructuring

This is super helpful for _quick variable assignment_.  Have you ever written code like this?  (note this is a bad example... but it still shows the power of what you can do :D)
```js
const mario = getMario()
const hat = mario.hat
const power = mario.power
// ... more props extracted for good reasons of course
```

With destructuring you can do this instead
```js
const {hat, power} = getMario();
```

See the power there?  All assignment done in one line, and it _reads really clean_!

&nbsp;
### Object Rest Parameter

I have to admit, I'm not as familiar with the _rest operator_, but here's one way to use it, which I ran in to while working on a piece of open source code.
```js
// Assume an object with a structure like this
const mario = {
    hat: "cappy",
    power: "flower",
    style: "oldSchool",
    game: "Mario Odyssey"
}

// You extract specific props, and group the "rest" into a named object
// Here, the triple dot is called a "rest" operator
const {hat, power, ...extras} = mario
console.log(hat, power, extras);
// cappy flower {style: "oldSchool", game: "Mario Odyssey"}
```

You can see that the _extras_ variable now contains the props that _weren't specifically extracted_.  The clever naming of the _rest operator_ makes a lot of sense here.  It now contains the rest of the props.

&nbsp;
### Conclusion

Hopefully you are beginning to see the power of these features.  They've definitely changed the way I write my JavaScript.  What I showed here is just scratching the surface, and there are a lot of docs and other blog posts to read.

It's probably good to note, spreading and destructuring _also work with arrays_.  If you want great articles to look over, there are plently.

I'd recommend using a GOOGLE search for these terms to learn more
* _javascript spread operator_
* _javascript rest operator_
* _javascript destructuring_

Have fun writing cleaner JS code!