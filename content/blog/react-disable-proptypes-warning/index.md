---
path: react-disable-proptypes-warning
date: 2020-11-14T02:20:02.754Z
title: Disable PropType warnings in Jest and React
description: A quick look at how to disable proptype warnings in React and Jest
---

Jest is a testing framework built by <a href="https://jestjs.io"  target="_blank" rel="nofollow">Facebook</a> which is especially great for testing your frontend code. This could be code written in React or any of the other supported libraries.

This post shows how to disable proptype warning messages that might be in your test. Why would you want to do this? 🤔 Different reasons, depending on your use case, the error might be coming from a third party library you are using or you simply want to temporarily disabled the warning.

Below we disable proptype warnings but show all other warnings that occur in our tests:

```js
// home.test.js

import React from "react"
import Home from "./home"

const homepageErrors = console.error.bind(console)
beforeAll(() => {
  console.error = (errormessage) => {
    /*
      if error is a proptype error and includes the following string: `Warning: Failed prop type:`
      suppress the error and don't show it
      if it is not a proptype error, we show it
    */
    const suppressedErrors = errormessage
      .toString()
      .includes("Warning: Failed prop type:")

    !suppressedErrors && homepageErrors(errormessage)
  }
})
afterAll(() => {
  console.error = homepageErrors
})

describe("when home page renders", () => {
  it("should display brand logo", () => {
    // test goes here
  })
})
```

Hope you found this helpful😊\
Follow Fred on Twitter ☞ [@fuchodeveloper](https://twitter.com/fuchodeveloper)
