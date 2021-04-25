---
tags: [javascript]
---

Ever wondered how to generate a file's data and download it using JavaScript? I recently used a _Blob object_ and the _a_ tag with the _download_ attribute to accomplish what I needed.

## Summary

This will be a very quick post, getting straight to the point.  There's not too much fluff to get lost in, so let's just dive right into the code example!

I will show how to
- Create a Blob from a string (Blobs work well with the download attribute of the a tag)
- Create an Object URL for your downloadable blob.
- Create an a tag which powers the download
- Trigger the download programmatically, (or attach the link to the DOM if you want)
- Side note - It's best to release the URL afterward

```js
// Create the blob (file data) and trigger download:
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
const url = URL.createObjectURL(blob);

// This simple recipe uses the <a> tag, ends up something like:
// <a href="bloburl" download="filename.csv"></a>
const a = document.createElement("a");
a.href = url;
a.download = "filename.csv";

// Trigger the download
a.click();
```

## Create a Blob for download

```js
const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
```

There are a few assumptions about the above snippet
1. You want to generate a CSV file for download
1. You already have a javascript string formatted into a CSV string. (There are libraries and many other ways to accomplish this, so I will leave this out)

You could really create a file of many types, you'll just have to read up a little on your specific case.

If you want to know more about Blobs, the [mozilla docs about Blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob) are the way to read up!


## Create an Object URL

This one is in preparation for setting up the _download attribute of the a tag_

```js
const url = URL.createObjectURL(blob);
```

If you want to know more, the [mozilla docs about createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) are what I used.

## Create the a tag

```js
// This simple recipe uses the <a> tag, ends up something like:
// <a href="bloburl" download="filename.csv"></a>
const a = document.createElement("a");
a.href = url; // It's pointing to our Blob!
a.download = "filename.csv";
```

Go here to learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)

Then, as a final step you can actually download the file (without even attaching the element to the DOM!) using:

```js
// Trigger the download
a.click();
```

You can optionally attach the tag to the DOM, or manipulate an existing tag that is already on the DOM, etc.  This is just one of your options.

## Conclusion

I had to create a simple downloadable CSV template for a work assignment, so I figured I'd share this simple recipe of how to accomplish it.

I will also note, that the Mozilla Docs recommend _releasing the Object URL_ once you are done with it for proper memory management.  I'll leave that to you for further reading.

Anyway, I hope this helps somebody, including myself, in the future when dealing with downloads!