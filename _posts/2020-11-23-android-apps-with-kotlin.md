Notes on Android with Kotlin

## Getting started

What you need to start learning Android
- Android Studios

## Virtual or Real Device
Tools > AVD Manager.  When I installed Android Studio there was already a Virtual Device (Pixel 3) ready for me to use, convenient!
- Version of Android
- Device to Emulate

## Understanding Project Options
- Project - show files as they are on the filesystem
- Android - shows files in a way that's "helpful"

## Android Project View
- manifests - essential app details so an OS can launch the app, defines permissions
- java - all Kotlin code lives here
- java(generated) - files built by Android Studio, don't edit these
- res (resources) - static content to be used in the app
    - drawables (images)
- Gradle Scripts - Files used to build and run the app
## Resources
[Udacity Course - Developing Android Apps With Kotlin](https://classroom.udacity.com/courses/ud9012)

## Activies
- Draws user Iterface
- Declared in the manifest with correct <intent-filter>
    - <action... MAIN>
    - <category... LAUNCHER>
- Have associated layout.xml file
- Layout Inflation happens when an Activity is started

## View Groups
Help layout multiple elements
- LinearLayout - One after another, vertical or horizontal

## View Elements
TextView
- android:textSize="30sp" sp means "scale independent pixels"

## Strings
Move them out of your code
Android Studio will help you move them to _res/values/strings.xml_ if you click on the lightbulb in the editor.

## Layout Properties
All of these are preceded with _android:
- layout_width: the width of your element
- layout_height: the height of your element
- orientation: vertical | horizontal for LinearLayout
- layout_gravity: where the element should be positioned
- text: display text
- id: example... android:id="@+id/roll_button", notice the _@+/_ this helpe Android Studio generate the integer ID with the R class

Layout that need to have programmable reference need an _id_
- When you give an id to an element, the R (resource to view ids mapping) class generates a unique integer for it
- use findViewById(R.id.yourIdHere) to get reference to it

View Binding - Alternative to using findViewById in Android Studio 3.6+
- Get a reference to the full xml layout, and reference the id you need
- Type Safety, you don't have to guess what type a view element is
- Null Safety, you don't pass a resource number, so you can't guess wrong

Example of how
```kotlin
// Create a binding for activity_main.xml layout
binding = ActivityMainBinding.inflate(layoutInflater)

// reference the view with the id incredible_id
binding.incredibleId
```

## Adding Images
- Place Images into the drawables folder
- Drawables automatically get a generated id, access them with R.id.your_resource

## Other things used
Toast
Random (java util)
minimize calls to findViewById (helps prevent lag in more robust apps)

How to initialize NON NULL variables in Android.  A use of this is to get reference to a regularly referenced view element
- lateinit keyword

## Gradle
- Target devices
- Compile to executable code
- Dependency management
- App Signing for Google Play
- Automated Tests

Different files
- Modules
- Project

### Adding xCompat (backwards compatible code)
- add to app build.gradle
- use it in layout file
- add to namespace of layout