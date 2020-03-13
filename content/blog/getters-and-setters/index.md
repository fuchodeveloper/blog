---
path: getters-and-setters
date: 2020-03-11T07:32:05.954Z
title: Property getters and setters
description: Quick overview of JavaScript Property getters and setters
---


JS offers two type of properties for objects: data properties and accessor properties. We would focus on accessor properties in this post as data properties refer to the more common ways of interacting with JavaScript objects.

### Accessor properties or getters and setters
These are denoted by `get` or `set`. The getter is used when a value is read, for instance,
returning the details of a user or a config after computing it. While setters are used to provide data to the object,
in a similar way, this could be providing the first and last names of the user we described in the setter.

Demo:
```js
let user = {
    firstName: 'Fredrick',
    lastName: 'Mgbeoma',

    get fullName() {
        return `${firstName} ${lastName}`,
    }

    set fullName(names) {
        [this.firstName, this.lastName] = names.split(' ');
    }
};
```

Reading data using getters:
```js 
user.fullName; // Fredrick Mgbeoma
```

Providing data using setters:
```js
user.fullName = 'Jane Doe';
```
