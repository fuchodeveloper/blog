---
path: typescript-optional-chaining-nullish-coalescing
date: 2019-11-14T10:10:52.954Z
title: Optional Chaining and Nullish Coalescing in TypeScript
description: A practical guide to TypeScript's new features
---

I picked up interest in <a href="https://www.typescriptlang.org/index.html" target="_blank" rel="nofollow">TypeScript</a> a while ago and started playing around with it on a personal project. A few months later, my engineering team at work started adopting TypeScript as the language of choice on the web over JavaScript. In my experience, I would say it is a language that takes some getting used to. This is especially true if you're moving from a <a href="https://en.wikipedia.org/wiki/Strong_and_weak_typing" target="_blank" rel="nofollow">loosely typed</a> language like JavaScript to TypeScript, which is a typed superset of the former.

In this post, we'll be taking a practical look at some of the new features introduced in TypeScript; specifically <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining" target="_blank" rel="nofollow">Optional chaining</a> and <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing" target="_blank" rel="nofollow">Nullish Coalescing</a>. These were introduced in <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html" target="_blank" rel="nofollow">TypeScript 3.7</a>. It is important to highlight here that Optional Chaining is a feature that is well on its way to having native support in JavaScript, currently a Stage 3 draft as at the time of writing this post - <a href="https://tc39.es/proposal-optional-chaining" target="_blank" rel="nofollow">see more</a>.

## Optional Chaining

Optional chaining allows you to write code that will immediately stop running expressions if it hits a `null` or `undefined`.

**Syntax**

The Optional Chaining operator can be represented in three positions:

```ts
obj?.prop // Property access
obj?.[expr] // Optional element access
func?.(...args) // Optional function or method call
```

**Property Access**

A typical use case of this would be when looking for a value in a property that has a tree-like structure. In such a situation, we only want to proceed deeper into the tree if intermediate nodes exist. Let's illustrate this with an example:

```ts
type UserResponse = {
  firstName: string
  lastName: string
  age: number
  occupation?: string
  jobHistory?: {
    firstJob?: string
  }
  favoriteFoods?: string[]
}

const user: UserResponse
```

Say we want to display the user's occupation, we could implement this like so:

```ts
// without optional chaining
const userOccupation = user && user.occupation

// with optional chaining
const userOccupation = user?.occupation
```

With optional chaining in the code above, we're checking if a user exists then we attempt to return the user's occupation. It is important to note here that `?.` checks if the value on the immediate **left** of it is `null` or `undefined`. What this means is, if we tried to access the user's first job using `user?.jobHistory.firstJob`, the code would return an error if there is no job history.

**Optional Element Access**

This is another variant of Optional Chaining used to access non-identifier properties such as arbitrary strings, numbers, and symbols. This can be illustrated like so:

```ts
const userOccupation = user?.["occupation"]

// or

const favFood = user?.favoriteFoods?.[0]
```

**Optional Function or Method Call**

Optional Chaining can also be used in function calls. They come in handy when you need to call a function conditionally at runtime, i.e only call the function if it exists. This can be implemented like so:

```ts
const callFakeApi = async (url: string, log?: (user: object) => void) => {
  const response = await fetch(url)
  const data = await response.json()
  log?.(data)
}

callFakeApi("https://jsonplaceholder.typicode.com/todos/1", console.log)
```

In the code snippet above, we only log the data if a function, e.g `console.log` is passed to `callFakeApi`.

<a href="https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=8&pc=74" target="_blank" rel="nofollow">Try it here</a>

## Nullish Coalescing

`Nullish Coalescing` is another new feature in TypeScript 3.7 which is closely related to Optional Chaining. It uses a unique operator: `??`, which serves as the default or “fall back” value when an expression evaluates to `null` or `undefined`.

**Nullish Coalescing Operator Cheatsheet**

```ts
// null value
null || 20 // returns 20
null ?? 20 // returns 20

// undefined value
undefined || 20 // returns 20
undefined ?? 20 // returns 20

// boolean
true ?? 10 // returns trueb
false ?? 10 // returns false

// NaN
NaN ?? 20 // returns NaN

// empty string
"" ?? 5 // returns ''
```

<a href="https://gist.github.com/fuchodeveloper/a0e0b6e032e37f11504681905cf8a5a1" target="_blank" rel="nofollow">Gist link</a>

The code snippets above illustrate that the `Nullish Coalescing Operator` comes into play specifically for `nullish` values, not `boolean` or other data types.

Don't forget to share this post if you found it helpful 🥳.
