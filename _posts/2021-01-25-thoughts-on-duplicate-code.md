---
tags: [developerTips]
---

A lot of time over the course of my career has been spent de-duplicating code.  I want to go over a few different kinds of duplication that I've seen.  Many approaches can be taken to reduce duplication, and it's helpful to know what kinds of duplication you may run into.

&nbsp;
## Summary
[Duplicate Lines](#duplicate-lines)

[Duplicate Functions](#duplicate-functions)

[Duplicate Modules](#duplicate-modules)

&nbsp;
## Duplicate Lines

The most frequent kind of duplication that I've seen is lines of code within the same file.  More often than not, they aren't quite "duplicated", but they are changed just ever so slightly from each other.

Take this as an example, where we want to disable a few buttons, and the only difference is the ID being used in the selector.  Everything else is the same, repeating the document.getElementById multiple times along with other logic that looks repeated.
```js
document.getElementById('bigButton')
    .disabled = true
// other duplicated logic

document.getElementById('medButton')
    .disabled = true
// other duplicated logic

document.getElementById('smallButton')
    .disabled = true
// other duplicated logic
```

When I see code that looks similar like this my first approach is to create a reusable function to simplify the file.  It makes it look more like this:
```js
function disableButton(id) {
    document.getElementById(id)
        .disabled = true
    // other duplicated logic
}

disableButton('bigButton')
disableButton('medButton')
disableButton('smallButton')
```

Now there's no need to re-read through all that logic multiple times each time you have to edit the page.  You can read the function, and then just read where it's used.

Now, there are multiple ways you could handle this code, it all comes to preference and need.
- As a first step, you can always find and keep the similar logic, put it in the function, and add parameters for the parts that change.
- Since the logic that's going on is exactly the same, you could even have the parameter be _an array of ids_ to operate on and create a loop in the function instead of calling the function multiple times.
```js
function disableButtons(ids) {
    ids.forEach((id) => {
        document.querySelector(id).disabled = true
        // Other duplicate logic
    })
}
disableButtons([
    'bigButton',
    'medButton',
    'smallButton'
])
```

- You could use querySelectorAll to get a list of Nodes you can iterate through to disable.
- etc.

A lof of the decision just depends on your specific application, but personally, I feel that de-duplicating lines in at least one way is always worth it for readability, and maintenance reasons.

&nbsp;
## Duplicate Functions

Sometimes when you are reading through code, and writing some of your own, you'll find that there are multiple functions doing the exact same thing, but they are declared in different places and named slightly different.  The problem comes in when both are actually used in various places.

Following our example above, lets say we have two functions that are disabling buttons and running some other code, that take the string id as a parameter.
```js
function disableButtonById(id) {
    ...
}
function disableButton(id) {
    ...
}
```

Having two functions like this will just be confusing for a developer to maintain.  If I encounter this situation I have multiple questions going through my mind
- Which one is most current?
- Which one should I use?
- Are both of these used?
- Why is one better than the other?
- etc.

To reduce duplication you'll have to deprecate one, and choose to use the other one.  One strategy I've used to resolve this is to _function wrap_ one within the other and then mark the deprecated one as _deprecated_.
```js
// This is more descriptive, let's keep this
function disableButtonById(id) {
    ...
}

/**
* @deprecated - use disableButtonById
*/
function disableButton(id) {
    // Remove all previous code and call
    // the function you want to keep.
    // Once you've tested that this doesn't
    // break anything of course
    disableButtonById(id)
}
```

With this strategy, you can take an incremental approach to removing the usage of the old function.  If it's simple enough you could just remove the one and keep the other without the deprecation and function wrapping, but sometimes the scope of your task just doesn't allow you to do it all at once.  Or, the usage of the function is a public API so just removing it would be dangerous for your users.

You'll need to take care to test all areas as you deprecate it's usage, and then plan to chop the function out of your code in a future version when all code has been moved to the direct usage of the _chosen one_.

&nbsp;
## Duplicate Modules

With this one, I don't mean two of the same module, but rather two modules that solve the same problem.  It's very possible that you could remove one and not the other.

This one is a little more tricky to handle, and it will come down to coordination with your team.  Sometimes people prefer certain packages, but to reduce your code's bloat, you'll need to come to a decision of what to keep, and why.
- Is it worth cutting one of the modules that solve the same problem, or do they have unique situations that it's worth keeping both?
- Is the module size worth fighting over?
- Is it just a dev dependency, or is it bloating up your production application?

The main point here is, communicate what duplication you see and question the choices that have been made if you're not sure.  You might end up reducing your code when you do.  Chances are, _no one knows why it is included_ if you are in an older code base, so questioning it will lift the whole team up.

&nbsp;
## Conclusion

I went over Line Duplication, Function Duplication, and Module Duplication, and some strategies I've been involved with for resolving them.

I love when I can clean up some code, and most often, it's all about reducing duplication, get out there and have fun reducing your code!