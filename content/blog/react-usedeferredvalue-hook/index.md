---
path: react-usedeferredvalue-hook
date: 2022-07-24T23:55:50.754Z
title: React useDeferredValue Hook
description: React useDeferredValue hook and why you should use it
---

![neon sign](./useDeferredValue.jpg "Photo by Erik Mclean on Unsplash: https://unsplash.com/photos/7lyRKyKIdJY")
> useDeferredValue can be used to throttle expensive re-renders.

This hook allows us to fix the problem of slow re-renders by deferring the computation of a part of the DOM tree. You might be familiar with using debounce in a form to specify actions performed after a set number of milliseconds.

`useDeferredValue` works similar to debounce with one key difference, which is that the deferred value is only computed by React after more urgent updates are completed.
The `useDeferredValue` hook is convenient when implementing features like typeahead where we only want to make an API request sometime after the user stops typing. This means you don't have to specify a fixed time like you would with debounce. Specifying an arbitrary time for a debounce operation has been the _de facto_ approach to optimise the performance of forms designed to fetch the results of a query after a user stops typing. `useDeferredValue` takes this optimisation technique to the next level by removing the arbitrary time and guesswork associated with debounce.

Let's illustrate the usage of `useDeferredValue` hook below:

```js
// App.js

import { useState } from "react"
import SearchResult from "./SearchResult"
import "./styles.css"

export default function App() {
  const [query, setQuery] = useState("")

  const handleChange = (event) => setQuery(event.target.value)

  return (
    <div className="App">
      <h3>Search: </h3>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter search value..."
      />
      <SearchResult query={query} />{" "}
    </div>
  )
}
```

```js
// SearchResult

import { useDeferredValue, useMemo } from "react"

const SearchResult = ({ query }) => {
  const deferredQuery = useDeferredValue(query) // hook usage

  return useMemo(() => {
    const result = []
    for (let i = 0; i < 10000; i++) {
      result.push(<div key={i}>{deferredQuery}</div>)
    }
    return result
  }, [deferredQuery])
}

export default SearchResult
```

**Demo with `useDeferredValue` hook:**

<iframe src="https://codesandbox.io/embed/usedeferredvalue-84v4gy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useDeferredValue"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

NOTE: The demo above contains a loop to mimic a delay in our app.

`useDeferredValue` hook is really useful for cases where you might be consuming an external library for which you are not able to set the state directly in your code.

**Takeaways:**

- The `useDeferredValue` hook should be used for updates that potentially expensive on your application.
- If your application is really slow, then it might be better to address the cause instead of using the hook to cover it up.
