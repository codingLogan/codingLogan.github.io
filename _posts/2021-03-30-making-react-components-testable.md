---
tags: [react]
---

Sometimes React components end up being written too complex as requirements change.  When this happens I like to create custom hooks in order to make them easier to understand and test.

## Summary

In order to Unit test a React component you need to be able to control the props and the state that it deals with.  Otherwise, it's really hard to be able to know what to expect in the tests you write.  So how do we deal with components that are too coupled with business logic?

So far in my experience, _separating the business logic out into custom hooks_ allows for better and easier testing, and reusable logic.  In this post I will go over refactoring a React Component by separating out some logic into a custom hook. This enables you to later user that logic elsewhere _(avoiding copy pasta)_, and to mock that hook for testing the specific parts of the component.  (This post won't go into the actual testing, just getting ready for it)

## A Complex Component

Take a look at this pseudocode component, it has few things going on
- Its purpose is to display a list of users
- Admins are the only ones who should see other admins
- It knows how to grab the users
- It gets a permission, applies some logic, and filters the list

```js
function UserList() {
    // State, holds the user data
    // Determine if admins can be shown
    const [users, setUsers] = useState([])
    const [hasAdmin, setHasAdmin] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    // Get the users in a useEffect since it is an async task
    useEffect( () => {
        // Some async code that grabs the users
        // ...code...
        setUsers(newUsersResult)
    }, [])

    useEffect( () => {
        // Async call to get the permission
        // ...code...
        setHasAdmin(newPermissionValueResult)
    }, [])

    useEffect( () => {
        // Admin users can view them all
        if ( hasAdmin ) {
            setFilteredUsers(users)
        }

        // Non-admin users get a filtered list
        const nonAdminList = users.filter((user) => {
            return user.isAdmin ? false : true
        })
        setFilteredUsers(nonAdminList)
    }, [users, hasAdmin])

    return (
        <>
            {
                // Map over all the remaining users so
                // they can be displayed
                filteredUsers.map( (user) => {
                    return (
                        <div>{user.name}</div>
                    )
                })
            }
        </>
    )
}
```

It knows... too much...  Let's make it a little more dumb, and a little less smart. 🙃

Up above you can see that React Component currently has some http fetch type logic directly inside of it, and it handles some business logic for admins.  What I'd like to do is make these pieces of logic exist in a separate hook to keep the component clean and focused on what it should actually be doing, just displaying users.

Again, doing this will allow me to do a few things (I think I've mentioned these before...):
- Reuse the same hook in other components that need an admin-permissioned list
- Test the component by mocking the hook with returned list of Users

## A Custom Hook

Give a gander at this new organization of the code.  See if you can spot the difference, it's really not too different at all.  I just moved some chunks around.

```js
function useAdminRestrictedList() {
    // State, holds the user data
    // Determine if admins can be shown
    const [users, setUsers] = useState([])
    const [hasAdmin, setHasAdmin] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    // Get the users in a useEffect since it is an async task
    useEffect( () => {
        // Some async code that grabs the users
        // ...code...
        setUsers(newUsersResult)
    }, [])

    useEffect( () => {
        // Async call to get the permission
        // ...code...
        setHasAdmin(newPermissionValueResult)
    }, [])

    useEffect( () => {
        // Admin users can view them all
        if ( hasAdmin ) {
            setFilteredUsers(users)
        }

        // Non-admin users get a filtered list
        const nonAdminList = users.filter((user) => {
            return user.isAdmin ? false : true
        })
        setFilteredUsers(nonAdminList)
    }, [users, hasAdmin])

    return filteredUsers
}

// The UserList now only needs to know one thing...
// What hook to call to get the correct list :D
// The users will just be displayed
// (You could also pass them in as a prop to really
// separate that logic out)
function UserList() {
    const users = useAdminRestrictedList()

    return (
        <>
            {
                // Map over all the remaining users so
                // they can be displayed
                users.map( (user) => {
                    return (
                        <div>{user.name}</div>
                    )
                })
            }
        </>
    )
}
```

See how much dumber the _UserList_ component is now?  It doesn't need to know
- how to filter the list
- it isn't holding onto the full user list

It only needs to know the users to show, and now we have that.

This is an extremely simple example, but hopefully you can see how I've separated out the business logic into a hook instead of keeping it within the component.  Now to get a list of users that should be viewable into any React component you only have to call that hook.  (Goodbye copy pasta, we won't miss you)

For example an EditableUserList might render editable fields for the users, not just display their name.  Now you have two components that can share the same hook, and the _admins won't show up_ for users who shouldn't see them.

## Mock the Hook and Test

I'm not going to go over the testing of the component here, but I did want to make it a point of this article that now you can easily test the component.

Having the component separated from the business logic will allow me to test the component's functionality without worrying about the implementation of the hook, by mocking the hook's return value in a test.

To write a test for the component, all I have to do is generate any list of Users and have a mock of the hook return them.  Now I can focus on specifically what my component should be doing with that list.  (and depending on your use case, you could even just have the _users passed in via a prop_ instead.  There are always options to consider)

To write a test for the hook... like most, I'll be looking up what the standard is currently, but there's a library for that no doubt.

## Conclusion

I like keeping my components as clean as I can.  Separating logic out in this way is my preference because I can easily look at the component code and decipher what it's actually supposed to do.

My rule of thumb is if I can't glance at the code for under a few minutes and then understand what's being rendered...  There's probably too much logic going on inside of the component.  That's me though, let me know if you feel the same.

Thanks for reading!