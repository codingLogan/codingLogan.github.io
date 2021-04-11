---
tags: [javascript]
---

This weekend I had some fun with some light-weight data scraping from popular Pokemon sites.  In this post I'll describe what data I needed and how I scraped it off the sites for my own use.

## Summary

I have an upcoming personal project that deals with ordering Pokemon in various ways.  Since there are so many Pokemon, I wanted to take some shortcuts to get all the data I needed.  Luckily for me there are many sites out there that already have most of the info I need.  Pokemon has many fans, so a big _thanks to all of you data contributors_ out there!

_Side Note - There's probably already a spreadsheet, or json file somewhere that has what I need, but I wanted to data-scrape just for fun_

Now, let's get to what in the world I was doing :D. 

## Decide On Data

Ok data, let's talk data... what do I need in order to complete my project? 🤔
- A list of Pokemon by national pokedex number
- A list of Pokemon by Johto pokedex number
- Multiple lists of Pokemon trading card sets

So, almost a direct correlation, here are the sites I got info from in my adventure this weekend.
- pokemondb.net (A list of all Pokemon by national pokedex number)
- pokemon.fandom.com (A list of all Pokemon by Johto-dex number)
- pokellector.com (Lists of Pokemon card sets, which is a major piece of my project)

So, why is this information going to be useful?  For those that aren't familiar, Pokemon are all assigned a unique number for identification, and these number-to-pokemon correlations make up what is called a pokedex.  Basically a dictionary listing them all out.  My project's purpose is to help in ordering pokemon card sets in their pokedex order, so this information will be vital for success.

Alright, so now that we know what data we are after and where we can get some of it, let's go get it!

## Inspect the page

I went to [pokemondb.net](https://pokemondb.net/pokedex/all) to get the list of all pokemon...  Open that page if you're curious enough to see what the table looks like.  In order to scrape the data with JavaScript I need to know the structure of the page so I can select the appropriate pieces from it, so let's take a look.

_Inspect the DOM of page_

Right-click on the table and inspect it.  Here's a snippet of what it looked like.

```html
<table id="pokedex">
<tbody>
<tr>
    <td class="cell-num cell-fixed" data-sort-value="1">
        <span class="infocard-cell-img">
            <img 
                class="img-fixed icon-pkmn" 
                src="https://img.pokemondb.net/sprites/sword-shield/icon/bulbasaur.png"
                alt="Bulbasaur icon"
            >
        </span>
        <span class="infocard-cell-data">001</span>
    </td>
    <td class="cell-name">
        <a 
            class="ent-name" 
            href="/pokedex/bulbasaur"
            title="View Pokedex for #001 Bulbasaur"
        >
            Bulbasaur
        </a>
    </td>
    ...
</tr>
```

I want 2 pieces of information from this table, the name, and the national number.  Using the above inspect information, I can construct various selectors to get it!

## Run console commands

All of the following code was placed directly into the Chrome Dev Tools, no servers, no Node, or anything else is required.  The only other tool I used was VSCode for writing code before placing it into the console.  (syntax highlighting and proper editing!)

First, let's figure out how to select all the rows of our pokemon.  I ended up constructing something like this:
```js
// An array of nodes, each holding a <tr> with a Pokemon's data
const rowNodes = document.querySelectorAll('table#pokedex tbody tr')
```

Awesome, that's how we get the _tr elements_ that each hold a Pokemon.  The next few pieces of information assume we have a _rowNode_ variable available to us in JavaScript to act on.  Specifically, I looped through the above nodes array in a _forEach_ and used a rowNode variable for the element argument.

Alright we're moving forward, let's get the actual info now.  In order to get the number:
```js
// This will select the number text
rowNode.querySelector('td:first-child span.infocard-cell-data')?.innerText
```

In order to get the name:
```js
// This will select the name text
rowNode.querySelector('td:nth-child(2) a').innerText
```

Now you can gather up the Pokemon data into a list using those pieces of data!
```js
pokedex.push({
    name,
    nationalNumber,
});
```

Alright, with those pieces explained so you can better understand what's going on, here's my code that grabs the full table, and turns in into _console printable json_, which I can then copy-paste into a new file and save for my own purposes.
```js
// Pokemondb.net/pokedex/all Screen Scrape
// returns object of pokemon
// optionally print the JSON to console
function grabPokedex(printJson = false) {   
    let pokedex = [];
    document.querySelectorAll('table#pokedex tbody tr').forEach((rowNode) => {
        const nationalNumber = rowNode.querySelector('td:first-child span.infocard-cell-data')?.innerText || 0;
        const name = rowNode.querySelector('td:nth-child(2) a').innerText || "";
        pokedex.push({
            name,
            nationalNumber,
        });
    });

    if ( printJson ) {
        prettyPrint(pokedex)
    }

    return pokedex;
}

// Just a bonus for fun
// This helps print the whole object to the console
// This make it copy friendly
function prettyPrint(anyValue) {
    console.log(JSON.stringify(anyValue, null, 2));
}
```

## Conclusion

It was a fun little adventure.  In general for screen scraping, all you need to do is
1. Identify what you need (find the site and page with your info)
2. Find the structure of the data (inspect the page)
3. Build JavaScript to select the right pieces of data (then copy paste)

I followed a similar process for each site I scraped data from.  Now I have enough information to start compiling it together in the format I actually want it for my project.  If I wanted, I could even drop it straight into a database like Mongo!

For fun, I also made a CSV output of the same data using the same concept.  I just didn't want to bore you with more detail than was needed.

Anyway, hopefully you've got at least an idea of what it might take to do a small amount of screen-scraping if you ever find the need to.  Have fun out there, until next time!

Bonus: It would be more automated to just have it download a file directly, but browser limitations block this behavior without a server doing that work.