---
path: async-await-map
date: 2020-04-07T11:58:10.954Z
title: How to use Async and Await with JavaScript Map
description: Practical guide to using map in async await
---

Using JavaScript Async Await feature with Array map is a handy tool to have in your toolkit when manipulating data coming from a remote API. This is especially crucial if you don’t have access to make modifications on the backend where the data is generated.

Despite being a handy tool, it can take a little while to wrap your head around it. In this article, we will take a practical look at how this tool can be used to structure sample data to suit our needs.

### Deep Dive

```js
const list = ["a", "b", "c", "d", "e"]
const promiseReturningFunction = (elem) => {
  // return resolved promise
  return Promise.resolve("done")
}

// sample async function
const asyncFunction = async (elem) => {
  return promiseReturningFunction(elem)
}

const responseData = async () => {
  return Promise.all(
    list.map((elem) => {
      // this could be a database call to find data based on the `elem` value provided
      return asyncFunction(elem)
    })
  )
}

responseData()
  .then((res) => {
    console.log("res", res)
  })
  .catch((err) => {
    console.error("err", err)
  })
```

An important part of the code snippet above is the use of `Promise.all` which returns a single promise that is fulfilled when all other promises or iterable passed to it has been fulfilled. You could check out more on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank">MDN ↗︎</a>.

Bear in mind that the code above is simplified to focus on the main issue at hand, but opens up a lot of possibilities when handling data from a remote source.
