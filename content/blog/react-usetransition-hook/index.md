---
path: react-usetransition-hook
date: 2022-07-18T01:06:30.754Z
title: React useTransition Hook
description: Exploring the new useTransition hook introduced in React 18
---

![Traffic light image](./transition.jpeg "Photo by Isabel Gonçalves on Unsplash: https://unsplash.com/photos/QSWC7BArVqs")

In this article, we will be exploring the `useTransition` hook which was introduced in React 18. Curious about the other hooks that were introduced? Then check out the [`useId` hook](/react-useid-hook) which allows you to generate unique IDs in your React app.

## useTransition

> A one-liner to describe this hook would be: "Hey React, do this non-urgent update later".

By default, state updates in React are treated as high priority or urgent. With the `useTransition` hook, we can specify to React that some updates should be treated as non-urgent. This means that the state update can be interrupted by more urgent updates like a user interaction on a form.

How does this work for non-function components?

Well, I'm glad you asked. For components that are not function components or in situations where using a hook would not be possible; you can use the `startTransition` function to achieve the same result.
One difference is that the `useTransition` hook returns two values: a pending state and a function to start the transition. This is not the case when using the `startTransition` function because it does not return the pending state. The `startTransition` function can only be called where you want the transition effect.

When should you use this hook:
For expensive operations which would result in a poor user experience, this hook might come in handy.

Let's illustrate this using a loop that runs for a reallly long time before printing values on the page:
```js
const App = () => {
  const [isPending, startTransition] = useTransition();
  const [listNumbers, setListNumbers] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 5000; i++) {
        arr.push(e.target.value);
      }
      setListNumbers(arr);
    });
  };
 
  return (
    <>
      <input type="number" value={input} onChange={handleChange} />
      {isPending
        ? "loading..."
        : listNumbers.map((item, i) => <div key={i}>{item}</div>)}
    </>
  );
};
```
In the code snippet above, priority is given to setting the user input `setInput(e.target.value);` while the really long loop and `setListNumbers(arr);` are marked as not urgent. The implication is that the user input is responsive and displayed as the user types because the expensive computation does not block the UI.

