---
tags: [books, developerTips]
---

The Pragmatic Programmer is a great resource I just started to read!

## Summary

Over the last few days I've started to read the book, [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/ref=pd_lpo_14_t_0/145-1066234-6416535?_encoding=UTF8&pd_rd_i=0135957052&pd_rd_r=1dd1e413-81d5-4bee-b691-831b009571ed&pd_rd_w=fqPGk&pd_rd_wg=toThk&pf_rd_p=a0d6e967-6561-454c-84f8-2ce2c92b79a6&pf_rd_r=8VMW8R34NHAGVJ0Z0V4E&psc=1&refRID=8VMW8R34NHAGVJ0Z0V4E), and I don't know why I let it sit closed for so long... (Got it back in December)

It's a great resource for learning about best practices for software developers, and it's just an overall refreshing read created by those who really care about software.

I'm almost 2 chapters in, and I'm already singing it's praises, I'll give you a taste of what they've mentioned so far, in my own words of course.  Pick up the book if you haven't already, you won't regret it.

## Care About Your Software

There are many levels to what this means, but to have a good piece of software that lasts over the tests of time, you'll need to _take care of it_.

First, start where you are at, and _don't cause more harm_ to your code.  Just because it's faster to copy something "for now", and you've already _seen this duplication before_, it doesn't mean you should follow suit and add to the problem.

Instead fix the duplication or other problem you're seeing as you run into it.  Or, bare minimum when in a crunch for time, call it out for future developers in a comment so it's flagged as a problem.

The main idea being, be sure to think about your software, critically think about your code, and face those harder choices when you need to.  It will make your project mature in good ways.

Don't neglect your code.  Like bad milk, it will spoil, and be a smelly experience dealing with the mess it causes.  It's better to clean it as you find problems.

## Easy To Change

Something significant that was mentioned is the idea that a good design typically makes it easier to make changes to the code.  There's a ton that can go into "design", but as an overall concept, this is really great!

The reason I like this so much, is it kind of helps a developer identify when a system might not be designed well, and when to point something out to the team.  If an area of code is hard to change, or unexpected side effects happen because of a change...  It might be time to reconsider the design of that system.

It may even be appropriate to call a meeting together to make sure everyone is aware of the side effects and what problems you're facing.  The result of the meeting may create a better developer experience, and who knows, you might be a hero by saying something.

## DRY Duplication

Most software developers have heard of this acronym before.  _Don't Repeat Yourself_!  The idea being, well... don't repeat yourself, right?  Most times this is resolved by creating abstractions in your code so you don't have repeated logic in your codebase.

However, this is not all it is meant to mean.

What the authors brought to light in the first few chapters of this book, is that it's way more than just abstractions into functions and classes.  It is a much broader concept and way of thinking.  Rather, it includes all aspects of duplication.  Code, documentation, data, API interfacing, third party library's providing the same services, etc.  All of these have levels of duplication you need to be aware of it all so you can minimize it.

It isn't just about creating functions and classes.  It's about reducing any level or system of duplication that surrounds your software.

## Orthogonality

This concept really hooked me as I read through it.  It's one of those ideas and systematic thinking I've tried to implement as I code, but it was amazing to read it well defined in a book.

_The idea of Orthogonality is that a change to one thing, does not affect or change another._

If you are able to change an area of code and nowhere else in the system "cares" about that change, it probably means your system is well designed.  On top of that, it's easier to write tests for that code because it is so isolated from the other systems.

So, the tip being, write your code in a way that changes to one feature/system don't cause side effects to other areas of the software.  It remains isolated.

I've been in code bases where this is very much NOT the case, and I've been in others where it is.  Orthogonal systems are so much more rewarding to work in, and the stress you get when making changes is much much lower.  (also, tests are typically written in well designed systems so that's a HUGE bonus)

Push your system designs forward in a way where changes to one area, don't affect another.

## Reversibility

_If a system or library you've relied on suddenly goes away, what will happen to your software?_

The idea of reversibility is to allow yourself the flexibility to change the underlying implementations to those types of problems.  To do so, you can abstract your usage of those libraries into your own interfaces and APIs.

An example, would be to abstract what kind of database you use.  Right now you might be implementing your code directly with only MySQL, but what if you were required to move to Microsoft SQL next week?  Will your software crumble, or are you flexibly designed to minimize the required change?

These types of considerations need to be taken into account, and in the long run a design with reversibility makes your software more robust.

## Conclusion

There are so many other things they've been sharing in the book, I'm excited to uncover what next.