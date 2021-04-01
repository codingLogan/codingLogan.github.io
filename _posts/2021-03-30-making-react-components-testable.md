---
tags: [react]
---

Sometimes React components end up being written too complex to Unit Test.  When this happens I like to create custom hooks in order to make them easier to understand, and to test.

## Summary

In order to test a React component you need to be able to control the props and the state that it deals with.  Otherwise, it's really hard to be able to know what to expect in the tests you write.  So how do we deal with components that are too coupled with business logic?

So far in my experience, _separating the business logic out into custom hooks_ allows for better and easier testing.  In this post I will go over an example of separating some logic out into a custom hook so that you can later mock that hook to test the specific parts you want.  (This post won't go into the actual testing, just getting ready for it)

## A Complex Component

Take a look at this pseudocode component, it has few things going on.
- Its purpose is to display users
- It knows how to grab the users
- It gets a permission, applies some logic, and filters the list

It knows too much...

```js
function UserList() {
    // State, holds the user data
    // Determine if a admins can be shown
    const [users, setUsers] = useState([])
    const [hasAdmin, setHasAdmin] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    // Get the users in a useEffect since it is an async task
    useEffect( () => {
        // Some async code that grabs the user and
        // ...code...
        setUsers(newUsers)
    }, [])

    useEffect( () => {
        // Async call to get the permission
        // ...code...
        setHasAdmin(newPermissionValue)
    }, [])

    useEffect( () => {
        // Admin users get them all
        if ( hasAdmin ) {
            setFilteredUsers(users)
        }

        // Non-admin users get a filtered list
        const nonAdminList = users.filter((user) => {
            return user.isAdmin ? false : true
        })
        setFilteredUsers(nonAdminList)
    }, [hasAdmin])

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

Here you can see a React Component that currently has some http fetch type logic directly inside of it, and, it handles some business logic for admins.  What I'd like to do is make these pieces of logic exist in a separate hook to keep the component clean and focused on what it should actually be doing, displaying users.  This will allow me to do a few things:
- Reuse the same hook in other components that need an admin-permissioned list
- Test the component by mocking the hook with a list of Users

## A Custom Hook

Give a gander at this new organization of the code.  See if you can spot the difference, it's really not too different at all.

```js
function useAdminRestrictedList() {
    // State, holds the user data
    // Determine if a admins can be shown
    const [users, setUsers] = useState([])
    const [hasAdmin, setHasAdmin] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    // Get the users in a useEffect since it is an async task
    useEffect( () => {
        // Some async code that grabs the user and
        // ...code...
        setUsers(newUsers)
    }, [])

    useEffect( () => {
        // Async call to get the permission
        // ...code...
        setHasAdmin(newPermissionValue)
    }, [])

    useEffect( () => {
        // Admin users get them all
        if ( hasAdmin ) {
            setFilteredUsers(users)
        }

        // Non-admin users get a filtered list
        const nonAdminList = users.filter((user) => {
            return user.isAdmin ? false : true
        })
        setFilteredUsers(nonAdminList)
    }, [hasAdmin])

    return displayedUsers
}

// The UserList now only needs to know what thing
// What hook to call to get the correct list :D
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

Here you can see how I've separated out the fetching logic and business logic into a hook instead of keeping it within the component.

Having them separated will allow me to test the component's functionality without worrying about the implementation of the hook, by mocking the hook's return value in a test.

## Mock the Hook and Test

I'm not going to go over the testing of the component here, but I did want to make it a point of this article, that now you can easily test the component.

## Conclusion