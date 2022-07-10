---
path: react-useid-hook
date: 2022-07-10T20:06:12.754Z
title: React useId Hook
description: The React Hooks buzz continues with more hooks introduced in React 18 including useId
---

![Hook image](./hook.jpg "Hook image by Thirdman: https://www.pexels.com/photo/black-and-silver-fishing-rod-5538151/")

React 18 came in with a big BANG! A number of interesting features and improvements to improve the user experience of working with React were introduced, a part of these include the new React Hooks: `useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore` and `useInsertionEffect`.

In this article, we will be taking a look at the new `useId` hook and testing it out using a [Create React App (CRA)](https://github.com/facebook/create-react-app) application.

Let's get started!

## React 18 Hooks

<h3 id="use-id">#useId</h3>

This is a newly introduced hook that can be used to generate unique IDs that are stable both on the client and on the server. If you have had a need to generate unique IDs in your app in the past to build forms that are accessible (a11y compliant) or for some other reason, chances are that you might have used some JavaScript built-in utilities like: `Math.random`, `Date.now` or external libraries such as <a href="https://www.npmjs.com/package/uuid" target="_blank">uuid ↗︎</a>, Lodash' <a href="https://www.npmjs.com/package/lodash.uniqueid" target="_blank" >uniqueid ↗︎</a> or some other approach. With React 18, this problem has been solved. You can remove one extra dependency from your app by using the `useId` hook which is native to React 🥳.

However, there are a few things to note:
1. The `useId` hook does not replace using the `id` provided by your API data when iterating over a list of items.
2. The string returned by the hook contains the special character, `:`, which ensures it is unique but the downside is that this makes the string unsupported in CSS selectors such as `querySelector` or `querySelectorAll`.

Let's get our hands dirty with some demo!

**Demo 1: ID for single HTML form element in a component**

In this first demo, we will build a simple form with a select dropdown. This is a stripped down version of a subscription form that allows us to focus on the usage of the `useId` hook:

```js
import { useId } from 'react';

const SubscriptionForm = () => {
  const selectorId = useId();

  return (
    <div>
      <label htmlFor={selectorId}>Choose subscription:</label>
      <select name="subscription" id={selectorId}>
        <option value="">--Please choose an option--</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};
```

**Demo 2: Mulitple IDs for different HTML form elements in a component**

In the example below we prepend additional information to the ID string generated, ie `~email`. 

Why are we doing this? If your form contains multiple fields, you could follow this approach by adding an extra piece of information to the ID generated. This way, you do not need to call the `useId` hook multiple times for each form field.

```js
import { useId } from 'react';

const UserForm = () => {
  const id = useId();

  return (
    <>
      <div>
        <label htmlFor={`${id}~email`}>Email Address:</label>
        <div>
          <input id={`${id}~email`} type="email" />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}~password`}>Password:</label>
        <div>
          <input id={`${id}~password`} type="password" />
        </div>
      </div>
    </>
  );
};
```

The final ID for the form fields above will be like so: `:r1:~email` and `:r1:~password`.
