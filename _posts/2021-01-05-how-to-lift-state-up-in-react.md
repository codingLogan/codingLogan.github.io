---
tags: [react]
---

In React you will eventually find a need to share state between components.  Here is one example of how you can share state between two components that share a common parent.

## Overview

Here are the sections of this article

[End Goal](#end-goal)

[The Component Tree](#the-component-tree)

[Lift State Up](#lift-state-up)

## End Goal

The goal of this post is to show how you can _communicate between two different depth child components_.  I want an event fired by one child component to trigger a specific action on the other child.  One way to do this is to create some form of state in the _parent component_ that both children can access via their props.

I'm using this pattern to create a set of controls that are always visible to the user (up, down, left, right, accept, and decline buttons), but depending on the current Screen and the currently active item on that screen, those actions can behave differently.

For clarity, in a recent project I'm emulating a old school GameBoy interface, which is pretty unique, but I'll try to expose the fundamentals of the pattern in this post so it is useful for all cases.

## The component tree

Let's assume we have a component tree that looks like this
```
[Parent component]
  |           |
[Controls]  [other children]
              |
             [Screen]
```

Components
- Parent: Holds the _state_ of what items are available for navigation, and creates a handler function to pass down to children so items can be interacted with.
- Controls: Child of Parent who's specific purpose is to fire an action.  The example I'd like to use in this post is firing a "move down" event when a button is clicked.
- Screen: Creates the items you can interact with, and renders them.

### Example event desires
Ok, so lets think through what we want to happen.  On my Screen, I want to have a "currently selected item", and when the down button is pressed on the Controls, the active menu item should move to the next available item if it can.

Visually...

```
first menu item <-- active
second menu item
```

Pressing down

```
first menu item
second menu item <--
```

Ok, looking at the two components we want to interact, we have these two specific things we want to happen, but they aren't hook up to work together yet.
1. Controls component fires "down" event
1. Screen should create a list of items to interact with and render them, and re-render them when the active item changes

## Lift state up

Let's play matchmaker and get these two components "hooked up".  To do that we will use the _lift state up_ strategy.  These components need to interact with a common piece of _state_ that we'll place _into the parent component_.

### Parent

On the parent we are going to do two things.
1. Set a piece of state in Parent called "navItems", and we'll pass this state as a props to Screen
2. Create a downHandler function that we'll pass to Controls as a prop so it can fire the event

_navItems_: Object containing the list of items you can navigate through, and the currently active item's index.

_downHandler function_: This function will be called by Controls to signify the "down action" has taken place.  The _items state_ will be used in the function to determine what the effect of that action should be.

Code snippet for Parent
```
const [items, setItems] = useState({ activeIndex: null, items: [] });

const downHandler = function () {
    if (navItems.activeIndex < navItems.items.length - 1) {
        setNavItems({
            items: navItems.items,
            activeIndex: navItems.activeIndex + 1,
        });
    }
};
```

Parent markup snippet
```
<Controls
    downHandler={downHandler}
/>
```

Notice, we are not actually setting the items to anything but an empty array.  It will be up to the Screen to do that.  All we are doing in the function is changing the active index to be the next one in the list if we can.

### Controls

Use the handler function (which should be passed as a prop) from Parent in your markup.  This will make Controls call the function that is defined Parent.

```
function Controls({downHandler}) {
    return (
        <button onClick={downHandler}>Down</button>
    )
}
```

### Screen

Ok then, Screen needs to set the items that are available, while also accepting the items from the parent so it knows which one is active.

(side note - As I am writing this I'm realizing that the Screen component probably only needs the index information passed to it from the parent, not all the items, I'll play with that later)

Here's a snippet of the setup for Screen

```
function ScreenContent({ navItems, setNavItems }) {

    // Define the items that should appear on the screen
    const initialItems = [
        {
            text: "View Games",
        },
        {
            text: "Borrowers",
        },
    ];

    // Only on FIRST RENDER, set the initialItems on the Parent
    useEffect(() => {
        setNavItems({
            activeIndex: 0,
            items: initialItems,
        });
    }, []); // This empty array signifies the "first render only"

    // Render the list of items
    return (
        <>
            {navItems.items.map((item, index) => (
                <p className={navItems.activeIndex === index ? "active_item" : ""}>
                    {item.text}
                </p>
            ))}
        </>
    );
}
```

## Conclusion

And there you have it.  You have two separate children of Parent talking to the same data through their parent.

We set up a Parent component with
- a handler function to pass down to children
- a piece of application state, that the handler uses, and the other child component consumes.

I hope you found this useful in your React adventures.  This is just one way to set of sharing state, as there are other ways like using the Context providers as well.  But, this is how I achieved what I needed for my little side project that I'm having a blast with.

Go out there and have fun with React!