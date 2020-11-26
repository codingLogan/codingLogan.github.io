---
tags: [100DaysOfCode, kotlin, android]
---

Notes on Android with Kotlin

## Activies
- Draws user Iterface
- Declared in the manifest with correct <intent-filter>
    - <action... MAIN>
    - <category... LAUNCHER>
- Have associated layout.xml file
- Layout Inflation happens when an Activity is started

## View Elements
TextView
- android:textSize="30sp" sp means "scale independent pixels"

Example of how to View Bind...
```kotlin
// Create a binding for activity_main.xml layout
binding = ActivityMainBinding.inflate(layoutInflater)

// reference the view with the id incredible_id
binding.incredibleId
```

## Other things used
Toast
Random (java util)
minimize calls to findViewById (helps prevent lag in more robust apps)

How to initialize NON NULL variables in Android.  A use of this is to get reference to a regularly referenced view element
- lateinit keyword

### Adding xCompat (backwards compatible code)
- add to app build.gradle
- use it in layout file
- add to namespace of layout