---
path: vimium-the-hackers-browser
date: 2023-01-15T01:18:20.954Z
title: Vimium the hacker's browser
description: Dive deep into using Vimium on the browser and how to customise the extension with custom keyboard mappings. Only keyboard, no mouse!
---

Over the past few months, I’ve been experimenting with a browser extension which in my opinion, is one of the best ways to increase your productivity when using the Chrome browser. It’s called Vimium, the hacker’s browser.

And the best part, it’s open source!

GitHub repo - https://vimium.github.io

## What is Vimium?

Well, I’m glad that you asked. The official GitHub page for the browser extension describes it like so:

**Vimium is a Google Chrome extension which provides keyboard shortcuts for navigation and control in the spirit of the Vim editor.**

If you’re not familiar with Vim editor, it is basically a text editor that allows you to make changes to text files using only your keyboard without the need to use a mouse. 

**What are the features offered by this extension and why should I use it?**

The features of the extension include the following:

- Helps you navigate the web without touching the mouse.
- Uses a clever highlighting method to navigate using links.
- Customizable keyboard shortcuts
- Has an in-page help dialog to remind you of your personalized shortcuts.

How do I install the extension:

Chrome web store - [https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

Firefox - [https://addons.mozilla.org/en-GB/firefox/addon/vimium-ff/](https://addons.mozilla.org/en-GB/firefox/addon/vimium-ff/)

My settings:

- My custom key mappings - [https://gist.github.com/fuchodeveloper/6ea7afd338945c2c4aea0967febec731](https://gist.github.com/fuchodeveloper/6ea7afd338945c2c4aea0967febec731)

**Demo:**

- To get started, you need to install the browser extension for chrome or firefox.
- After installing the extension, you can make changes to the keymappings or use the default. To make changes to Vimium, you simply click on the extension icon, click on “options”, which opens the Vimium options in a new tab. I added my own custom key mappings, but you don’t have to do so if you’re okay with the default

**How do you start using the extension?**

- To activate Vimium on a webpage, simply click the **F** key on your keyboard.
- This shows some key combinations that are highlighted in a yellow background. Typing out any of these key combinations will open the link or execute the action you would have otherwise used a mouse for.

### Shortcuts

1. To start Vimium: type `f`
2. go to link in current tab: type highlighted key combination displayed
3. go back to previous page history: shift+H
4. go to next history next page: shift+L
5. open link in new tab: Shift+F
6. go to previous tab: shift+J
7. to to next tab: shift+K
8. Restore closed tab: Shift + X
9. what is insert mode
    1. enter insert mode: type i - `enter insert mode -- all commands will be ignored until you hit Esc to exit`
10. how to exit Vimium highlighted key combinations:
    1. using ESC
    2. typing: X or XX → X is not used for links, in my experience
11. how to exit Vimium when filling a form field
    * ctrl+[

**Conclusion:**

This was a short summary of my experience with the extension but there are a lot more customisations that you could make to the extension to make it even more personalised for you and how you use your browser.
