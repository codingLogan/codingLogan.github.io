---
tags: [developerTips]
---

Automated testing provides confidence!

## Summary

When I say _testing_ I actually mean _automated testing through code_ in this post.  I don't mean having someone manually clicking around in the application trying to notice any problems.  What I'm talking about is explicit pieces of code that test the software for exact output.

Here are three questions I'd like to explore
- [Who benefits from automated testing?](#who-benefits)
- [What benefits do you get from automated testing?](#testing-benefits)
- [What cost makes automated testing possible?](#costs)

## Who Benefits

The benefits of automated testing are "many", and it can benefit many different people.  So, with automated testing in place what individuals actually end up benefiting from it?

The person, organization, or company who owns the software ultimately benefits the most from implementing automated testing since they sit at the highest level.  The goal of this party is to deliver a working product to a paying customer.  Hopefully, a customer who will pay again for the services to keep that revenue stream flowing.  In order to deliver a product that works as expected there are many teams and man-hours involved.

At a very high level (leaving out a lot), these are some of the teams and resources that may be managed by an organization, and _all_ can benefit uniquely from automated testing.
- Software/Product Design & UX
- Developers
- Quality Assurance
- Data Management
- Software Training
- General Personnel training
- Customer Satisfaction

Each of those teams takes ownership of the software at a different lifecycle. They each have to apply their time and effort every single day to meet the demands of the customers.  If each of these groups has to _manually validate everything they do_, every single day, with every process, scaling into a larger company will become a _gigantic hurdle_.

Some questions to consider
- Is it better to hire more people so the company can scale, since there is so much to do?
- Should a company require overtime hours on the weekend to make sure things are working?
- With each delivery of the product does the whole team have to be _on call just in case_ something goes wrong?

The old saying _"work smarter, not harder.."_ really applies to this scenario.  If a company requires more hours, and more effort than a normal workday from its employees, _burnout_ may become a real problem, I've seen it.

## Testing Benefits

These are the primary benefits I see with automated testing
- Confidence
- Consistency
- Bug Prevention
- Clean Code Design
- Features can be clearly explained

### Confidence

When software is properly tested you can be confident that the time, money, and other resources spent on it will have been worth it.  The goal after all, is to provide value to the people that use it.

Proper testing provides the confidence that what is said about the application's features is actually what they get.  If they get what was promised from it, they'll be confident in their choice to trust it.

### Consistency

What does the software do today?  Can it promise that all working features will still work tomorrow when new features are released?

Sometimes features in software are intertwined in the _data in the back end, or the UI components of the front_, so how can software stay consistent for its users while evolving forward?

With proper tests that cover the functionality that shouldn't be changing, it can deliver a consistent product with confidence, even while features are added.

### Bug Prevention

Software bugs...  Some are harmless (and even hilarious), but some are devastating.
- Consider a scenario where a system accidentally charges a customer $10,000 when it was meant to charge $1,000 or $100...  Ouch.
- Or another scenario where a bug fix was delivered to production, but another area gets broken unknowingly... (I just thought of this term now, so bear with me, but this could be described as a _wormhole bug_.  The software went from having a bug in one place, to having one pop up somewhere else.)  In my experience, these are not fun to deal with, as it means code was coupled in a way that wasn't obvious to the developer, and it may need a considerable refactor to fix.

If the software is tested thoroughly, the chances of these scenarios happening are _considerably less_.

### Clean Code Design

This is an interesting benefit, but is one that I'm most familiar with since I'm in the code daily.  For a software product to be properly tested, it also needs to be designed and written to be _test friendly_.  I don't want to dive deeply into this topic in this post, but I'll go over some of the main points.

Software can be tested at various levels, and these are some mentioned by _Kent C Dodds_ who has a course about [testing javascript code](https://testingjavascript.com/).  I'm using my own words to describe them.
- Static: Using editor tools to help the code be clean from the start.  This helps catch the simplest bugs.
- Unit: Testing the smallest pieces of code in isolation.  Like testing a single function or class for its expected behavior at the simplest level.
- Integration: Testing multiple pieces (Units) of code together as one.
- End to End: Testing the app like users would (Just like manually clicking through the application to make sure it is acting correctly)

In order to test code at the Unit level, the code must written in a way that it _can be tested in isolation_ from the rest of the code.  For example, if you want to test a function that displays a name a certain way, you don't want to also get the name from the database, render a page, and update records.  You want to have the code's concerns separated enough to _do just one thing_ so you can test just that one thing.

Integration tests would be similar, just at a higher level.  The concerns should be separated enough so the system can test ONLY the feature being worked on.  Maybe it is best to leave out the 3rd party APIs for this kind of test, so the code should be written so it can be tested that way without calling those particular APIs.

A great benefit of having clean code with separated concerns, is a developer will have a better idea of what is happening when reading through it.  Separation of concerns allows the developer to not have to understand the entire system as a whole before they can start making changes and fix that bug.

### Features can be explained

Everyone involved with building or supporting the software should be aware of the feature and what it will do.

The great part about having to write tests, is that a developer _has to understand the feature in order to test it_.  This means all teams involved from design, to programming, to QA, to customer support, all need to know what's going on so the expectation is clear.

Before developers start on the feature, there should be an explicit expectation about what it should do.  That way a test of the feature can cover exactly that, it _runs the software and expects the result_ of the feature to be what the developer tells it to be.  The clear expectation should have been agreed upon by those requesting the feature.  If it isn't clear more discussions are needed.  If unclear expectations of a feature are given to a developer it will be impossible for them to write a proper test for it (and to build the feature correctly anyway).

The process of writing tests can also help discover unknown scenarios surrounding the feature.  It's likely that Customer Support employees may be questioned about these scenarios.  I've run into plenty of _"what if..."_ questions during development that nobody considered before production started.  After these were found, they could be distributed and discussed to all teams to keep things clear for everyone.

In summary of this section... By discussing feature expectations and writing proper tests, all the teams involved will gain a better understanding of the scenarios that exist inside of the software.

## Costs

Hopefully you've been able to see some of the benefits of testing software, but what are the costs to getting this all going?  Mostly _time, education, and money_

### Time

This one is _hard to swallow if you're just getting started with testing_ and already have an application in use.  Sometimes the amount of time it would take to "just fix" a problem would be _minutes_, but if a test needs to be written in software that's not designed with testing in mind, _it could take hours_ or longer...  So it's obvious that a manager would hesitate to allow the time for testing.  They have other things they need to deliver and get done.

There is not one-size-fits-all answer of how to convince management to allow the time, but I would say the _up front time IS costly, but the time NOT SPENT rehashing future issues will make up for it in the long run_

### Education

There are many courses and tons of technologies to learn in order to test your whole application.  You will need to invest in learning, on or off the job, to be able to do it effectively.

Each programming language will have its own tools and libraries for writing tests, so you will have to research what fits best for your software and team.

### Money

Some testing may require a whole new infrastructure to support it.  This should definitely be part of the considerations and discussions.

For example, entire testing environments can be set up with databases, APIs, etc, so the entire application can be tested from End to End.  Basically, everything is set up like your production app, but just for testing and keeping data isolated.  (Though, depending on set up, it may only need to run during the tests running time so cost can be minimized)

## Conclusion

Automated Testing...  I feel like the benefits far outweigh the costs!
- Static Tools: Help me avoid simple mistakes and typos
- Unit Tests: give me confidence that I wrote good code
- Integration Tests: give confidence that other areas don't break because of my changes
- End to End Tests: MORE CONFIDENCE

Not all developers write all levels of tests, as I've written mostly Unit Tests.  Sometimes entire teams write Integration and End to End tests, like qualified Quality Assurance Engineers who specialize in it.

I love that when features are properly tested, I (as a developer) don't have to worry about unknowingly breaking something that I didn't intentionally touch.

My suggestions for you...

If you aren't testing your software or application currently, I would urge you to look into how you can get started at any level.  You'll love the confidence it gives you.

If you want to learn more about testing and what it can do, I'd check out [testingjavascript.com](https://testingjavascript.com), and expand your research from there.  Though it is a JavaScript focused page and course he does explain the benefits very well on that site, so read over his reasoning of why testing is great if nothing else.