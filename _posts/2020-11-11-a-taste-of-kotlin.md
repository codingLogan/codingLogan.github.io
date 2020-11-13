---
tags: [100DaysOfCode, kotlin]
---

Let's explore the basics of a Kotlin application, and just a few of the crucial pieces of the language.

&nbsp;
## Contents
- [How to get started](#how-to-get-started)
- [Kotlin entry point](#kotlin-entry-point)
- [Variable types](#variable-types)
- [Function declarations](#function-declarations)

&nbsp;
## Foreword

I am actively learning about Kotlin, and have only been using the language for a couple of weeks while following tutorials.  I will try my best to explain these concepts.  If you notice something incorrect please point it out and I'll be more than happy to fix it.

With that out of the way, here are the basics of a Kotlin application, a "Hello World!" if you will.

&nbsp;
## How to get started

### Developer Environment
In the tutorials I followed they recommended to install _IntelliJ IDEA_ to work with Kotlin. In particular they had me do the following:
- install [the latest JDK from Oracle](http://www.oracle.com/technetwork/java/javase/overview/index.html)
- install [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/)
- Once IntelliJ is installed check for updates, mainly as a safeguard

### Create a Project
1. Open IntelliJ
1. Select _New Project_
1. Project Options
    1. Make sure _Kotlin_ is selected on the left
    1. Name your Project
    1. Choose to create an _Application_ on the right.
    1. Choose a build system, I chose _IntelliJ_

At this point you now have a blank slate to begin writing some code.  The project folder structure should contain a src directory that looks like this
```
src
  |--main
  |  |--kotlin
  |
  |--test
```

The kotlin code (_.kt files_) that we add will go into that kotlin folder.


&nbsp;
## Kotlin Entry Point
Kotlin applications start their execution in a _main() function_, so lets create one in a moment.  It typically looks something like this, if you want to pass arguments into the program:
```kotlin
fun main(args: Array<String>) {
    // Write your wizardry here
}
```

However, you can also have it even more simple if you don't want any arguments passed in.  I'm going to add a main function that does NOT have any arguments.

Let's add a main function now, and then run it in IntelliJ
1. Add a new main.kt Kotlin File to the project at _/src/main/kotlin/main.kt_ with this code
```kotlin
fun main() {
    println("Well done, it ran!")
}
```
1. Select the green triangle to the left of your main function and choose _run MainKt_

![Icon Button Next to main](/images/runKoltin.PNG)

To know if you're code ran how you expected, you can view the console output in the _Run_ section of the IDE (look at the bottom left of the IntelliJ window).  You should see the text you added into the println(...) function.

&nbsp;
## Variable Types

There are three different kinds of variables you'll frequently see.
1. var - variable which _can be reassigned_
1. val - variable which _cannot be reassigned_
1. const val - _global_ constant, which _cannot be reassigned_

Lets add a few variables as examples.  Replace the code of main.kt with this.  We're now using _var, val, and const val_ in our code.
```kotlin
fun main() {
    var greeting = "Well done"
    println(greeting)

    greeting = "HEY"
    println(greeting)

    // String template example
    println("$greeting, Listen!")

    println(NAVI_QUOTE)

    val newGreeting = "Hey Listen!"
    
    // The assignments below will not work
    // newGreeting = "nope"
    // NAVI_QUOTE = "value"
}

const val NAVI_QUOTE = "Hey! Listen!"
```

Example of val, it cannot be reassigned and the IDE warns you.
![Red squiggly warnings in editor](/images/valReassign.PNG)

&nbsp;
## Function Declarations

Functions can be declared in a standard way, or a very compact way.

### Standard
```kotlin
fun functionName(param: TYPE): RETURN_TYPE {
    // function body
}
```

### Compact
```kotlin
fun functionName(param: TYPE) = singleExpression
```

### New code for main.kt

Replace the content of main.kt with the following to see both types of functions in action. Run the program if you want to see the output :D.

```kotlin
fun main() {
    val standard = standardGreeting("standard!", "Listen!")
    val compact = compactGreeting("compact!", "Listen!")
    println(standard)
    println(compact)
}

fun standardGreeting(prefix: String, suffix: String): String {
    return "$prefix, $suffix"
}

// No need to declare the return type
// since it returns the single expression it can "infer" the type
fun compactGreeting(prefix: String, suffix: String) = "$prefix, $suffix"
```

### Takeaway for functions
If you are writing a function that can be returned in a single expression, write it in the compact form because you get these benefits
- You don't have to add curly braces
- You don't have to declare the return type
- Less code means less bugs

## Conclusion

This was just a small taste of Kotlin.  I showed you the basics of
- [How to get started](#how-to-get-started)
- [Kotlin's entry point](#kotlin-entry-point)
- [Variable types](#variable-types)
- [Function declarations](#function-declarations)

I have really been enjoying Kotlin.  I come from a background of JavaScript and PHP, so having a _static typing system_ has been a very different, but welcome change.  No more guesswork!

&nbsp;
## Additional Resources
- [Kotlin's official website](https://kotlinlang.org)
- I followed [Udacity's Kotlin Bootcamp for Programmers](https://www.udacity.com/course/kotlin-bootcamp-for-programmers--ud9011)