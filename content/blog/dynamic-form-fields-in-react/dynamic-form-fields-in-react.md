---
path: react-dynamic-form-fields
date: 2019-11-03T09:58:10.954Z
title: Dynamic Form Fields in React
description: Extending React form creation
---
![Dynamic Forms Thumbnail](./dynamic-forms-thumbnail.png "Dynamic Forms Banner")

If you've been building applications that accept user input via forms, you might have come across the need to make some form fields dynamic. This could be for various reasons, for instance, to add multiple members as part of a team during creation. If you've never been in this situation, this post might also be helpful for you at some point.

**Prerequisites:**

* Working knowledge of React Hooks
* npm installed in machine

We'll be illustrating dynamic form fields in React using a simple form that has two input fields. One for first name and another for last name, these would form the user data. These two fields would be dynamically duplicated to create more fields that are unique and can accept new user data.

## Getting Started

To quickly get started, we would be using the Create React App package, but the steps we would go over can be seamlessly integrated into your existing application.

Follow the steps below to create a new React app, navigate into the app directory and start it up in development mode.

```
npx create-react-app my-app
cd my-app
npm start
```

Open http://localhost:3000 to view it in the browser.

For some styling, we would install Bootstrap. This step is optional and only included here to give the form some good user interface. Knowledge of Bootstrap is not required.

```
npm i bootstrap
```

## Deep Dive

Open the project in your favourite text editor. Navigate to `App.js` and replace the content with the code snippet below:

```jsx
import React, { useState, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
    </>
  )
}

export default App;
```

This gives us a basic template on which to build our form component.

Using React Hooks, initialise the form input fields like so:

```jsx
...

const App = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' }
  ]);

...

}

...
```

In the above snippet, `inputFields` refers to the form fields, while `setInputFields` is the used to set the value for these form fields

Proceed to setup the form by updating the `App` component as shown below:

```jsx
const App = () => {
...

const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={inputField.firstName}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={inputField.lastName}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </>
  )

}

...
```

If that looks like a lot of code thrown right at you, don't worry, we'll go over it.
We have the function `handleSubmit` to log the value returned when the form is submitted. Here we are simply logging to the console, but you could use the data here for what ever you need depending on your specific use case.
The JavaScript `map` function is used to create an array of the form fields. `Fragment` from React allows us group a list of children without adding a new node to the DOM. 

## Adding Functionality to the Form

**Handling Changes**

At this point, the basic UI is done that means we are getting closer to our goal, but there is no functionality yet. Roll up your sleeves, let's get to work on the functionality!

Update the input fields to include a change handler to cater for user input action. See the change below:

```jsx
...

  <input
...
   onChange={event => handleInputChange(index, event)}
  />

...
```

The `handleInputChange` function does not exist. Let's create it in the `App` component right after `handleSubmit`. See below:

```jsx
...
const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "firstName") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };
...
```

In the above code snippet, we spread `inputFields` and do a simple check for the input field based on the `name` attribute of that field. Then we supply the value for the given index. The index is derived from the `map` function we used previously.

**Adding and Removing Form Fields**

Now comes the interesting part. Right after the `handleInputChange`, add the following code snippet to handling adding and removing form fields:

```jsx
...

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: '', lastName: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

...
```

To make use of these two new functions, update the `-` and `+` buttons to include click handlers to add and remove form fields.

```jsx
...
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
...
```

_Aside:_ To see a preview of the form input values, add the following code snippet before the closing form tag `</form>:`

```jsx
...
<br/>
<pre>
 {JSON.stringify(inputFields, null, 2)}
</pre>
...
```

There you go! To add more form fields, click on `+`, to remove click on `-`.
You can implement this functionality in your existing applications or new ones. 



Preview:

<iframe
     src="https://codesandbox.io/embed/epic-fire-3fjbd?fontsize=14"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-dynamic-form-fields"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>


Free free to share this with your team!
