---
tags: [100DaysOfCode, kotlin]
---

So, what is Kotlin, and why is it worth learning?

## Kotlin

Apparently, Kotlin has grown into many areas and has been around for 8+ years now.  I thought it was a language only used in Android development, but it is used for at least the following [see official uses here](https://kotlinlang.org/)
- Mobile Cross-Platform
- Native
- Data Science
- Server Side
- Web Development
- Android

That is quite the list of uses, and I want in on that!

I have had an itch to begin learning Kotlin, even before realizing it has such a large breadth of uses.  My desire is to venture into _Android development_, so, for the next while I will be blogging about what I learn in Kotlin, and what I learn during my _100DaysOfCode Challenge_.  See next section :)

## The 100DaysOfCode Challenge

While reading many different posts on Twitter, I kept coming across this _#100DaysOfCode_ hashtag...  So I finally looked it up, and decided to join in!  You can check it out [on the official site](https://www.100daysofcode.com/)

The simple point of it is, you _spend 1 hour a day_ learning some new development or code related thing you're interested in.  Then, you report on your progress publicly on Twitter, by tweeting out the hashtag.  (no wonder I kept seeing it all over the place...)  It has a great community from what I've seen.

In addition to tweeting about my progress in the challenge, I'll be regularly blogging about my experience with the Language.

## Kotlin Spotlights (Challenge Days 1 - 5)

I am really liking what Kotlin provides so far.  It's claim to fame is that it is a very concise and expressive language that makes developers happy.  I honestly have to say, so far, I agree with them!  Check out this snippet as an example of how concise the language is.

## Concise Switch Statement With When

In JavaScript you can do something like this, but it feels unwieldy with all the returns, and declaring each case...  Or all the if statements...

```js
// JavaScript Code
function conciseSwitchStatement(value) {
    // Either this...
    switch (true) {
        case (value === 0):
            return "zero"
        case (value < 51):
            return "a good amount"
        case (value <= 100):
            return "plenty of value"
        default:
            return "over achiever"
    }
    
    // Or a series of if else statements
    if ( value === 0 ) return 0
    else if ( value > 0 && value < 51 ) return "a good amount"
    else if ( value >= 51 && value <= 100 ) return "plenty of value"
    else return "over achiever"
}
```

But in Kotlin, this is what you can do!
```js
// Kotlin Code
fun conciseSwitchStatement(value: Int): String {
    return when(value) {
        0 -> "zero"
        in 1..50 -> "a good amount"
        in 51..100 -> "plenty of value"
        else -> "over achiever"
    }
}
```

It reads really nicely, and feels very clean. You don't have to use keywords like _break_ or _case_, and also notice, _you return a value from the when_ statement.  If you want to, you can assign that to a variable.

```js
val result = when (value) {
    0 -> "zero"
    1..100 -> "a real value"
}
```

This is just one example of the concise nature of Kotlin.  It _favors less code, and easy use_, and I will continue to share more as I learn and experiment with it.