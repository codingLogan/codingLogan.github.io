---
tags: [developerTips]
---

It is not uncommon to come across code that looks very similar to other bits of code, but it's hard to pick out exactly what is duplicate and what is actually different.  I want to share how I use VS Code to help me deduplicate my code.

## Summary

This post will have a few short sections.

- [Example Code](#example-code) - showing a few similar pieces of code that could be refactored.
- [Using VS Code's Compare Feature](#using-vs-codes-compare-feature) - This helps you visualize what is actually the same in two different snippets of code.
- [Move Similar Code to a Function](#move-similar-code-to-a-function) - This shows the refactored version of the code.

## Example Code

Here is a snippet of code, note, it hasn't actually been tested or used, but is for an example.  Two main sections, both loading data into elements on the page.  You may notice that the code is essentially doing the same thing in both sections.

```js
// loading super nintendo console
const snesData = {
    description: "Super Nintendo Entertainment",
    games: [
        {title: "Super Mario World"},
        {title: "Donkey Kong Country"},
    ]
}

const snesDescription = document.getElementById('snes')
snesDescription.innerText = snesData.description

let snesGamesList = document.createElement('ul')
snesData.games.forEach((game) => {
    const gameElement = document.createElement('li')
    gameElement.innerText = game.title
    snesGamesList.appendChild(gameElement)
})
const snesGames = document.getElementById('snesGames')
snesGames.innerHTML = snesGamesList.toString()


// loading nintendo 64
const n64Data = {
    description: "Nintendo 64",
    games: [
        {title: "Super Mario 64"},
        {title: "Donkey Kong 64"},
    ]
}

const n64Description = document.getElementById('n64')
n64Description.innerText = n64Data.description

let n64GamesList = document.createElement('ul')
n64Data.games.forEach((game) => {
    const gameElement = document.createElement('li')
    gameElement.innerText = game.title
    n64GamesList.appendChild(gameElement)
})
const n64Games = document.getElementById('n64Games')
n64Games.innerHTML = n64GamesList.toString()
```

## Using VS Code's Compare Feature

It would be nice to visually see what exactly is different between the two sections, and VS Code provides such a feature.

In order to use the feature, do the following
1. Copy the text of the first section into a new file (you don't have to save it)
1. Copy the text of the second sections into a new file as well
1. In the top left of VS Code, you can see your Open Editors (files).  You will see your two unsaved documents listed there.
1. Right click one of them, and select _Select for Compare_
1. Right click the other one, and select _Compare with Selected_
1. A new two-paned editor will open showing you the changes between the two files.

![A two paned window showing differences of text between the two](/images/fileCompare.PNG)

You can see in the image above, that it highlights the words and lines that are different between the two.  Using that information as a hint for yourself, you can then refactor both sections of code in a way that you see fit.

This is a very simple example, where a lot of the lines are similar.  In other _real world_ scenarios it might not be quite as obvious, and there may be extra lines in the left file that don't exist in the right and vice versa.  The idea behind the feature and this strategy is to be able to quickly observe the differences without painstakingly reading each line of both sections.

## Move Similar Code to a Function

For my code above, I'm able to refactor it to this based on the hints in the two panes.

```js
const snesData = {
    description: "Super Nintendo Entertainment",
    games: [
        {title: "Super Mario World"},
        {title: "Donkey Kong Country"},
    ]
}

const n64Data = {
    description: "Nintendo 64",
    games: [
        {title: "Super Mario 64"},
        {title: "Donkey Kong 64"},
    ]
}

updateConsoleInformation('snes', 'snesGames', snesData)
updateConsoleInformation('n64', 'n64Games', n64Data)

function updateConsoleInformation(consoleId, gamesId, consoleData) {
    const descriptionElement = document.getElementById(consoleId)
    descriptionElement.innerText = consoleData.description

    let gamesList = document.createElement('ul')
    consoleData.games.forEach((game) => {
        const gameElement = document.createElement('li')
        gameElement.innerText = game.title
        gamesList.appendChild(gameElement)
    })
    const gamesElement = document.getElementById(gamesId)
    gamesElement.innerHTML = gamesList.toString()
}
```

You can see in the above snippet, that I was able to entirely eliminate a section of DOM related code.  The hints provided in the two-paned comparison show that most of the code was actually duplicate, but just different variable names, ids, and data.  So, I threw those differences into a function via the parameters.

## Conclusion

When you see a few pieces of code that look fairly similar, and you want to know at a glance what actually is duplicate, give VS Codes _compare feature_ a try.