---
tags: [react]
---

Sometimes React components end up being written too complex to Unit Test.  When this happens I like to create custom hooks in order to make them easier to understand, and to test.

## Summary

In order to test a React component you need to be able to control the props and the state that it deals with.  Otherwise, it's really hard to be able to know what to expect in the tests you write.  So how do we deal with components that are too coupled with business logic?

So far in my experience, _separating the business logic out into custom hooks_ allows for better and easier testing.  In this post I will go over an example of separating some logic out into a custom hook so that you can later mock that hook to test the specific parts you want.

## A Complex Component

Here you can see a React Component that currently has some http fetch type logic directly inside of it.  What I'd like to do is make this piece of logic exist in a separate hook.  This will allow me to do a few things:
- Reuse the same hook in other components
- Test the component by mocking the hook

## A Custom Hook

Here you can see how I've separate out the fetching logic into a hook instead of keeping it within the component.

Having them separated will allow me to test the component's functionality without worrying about the implementation of the hook, by mocking the hook's return value in a test

## Mock the Hook and Test

Here's an example test for the component, using a mocked version of the hook so I can test the component specifically and explicitly.

## Conclusion