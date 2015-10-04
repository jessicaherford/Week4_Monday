#Outline for Monday, October 5th
- Review Wednesday's Exercises
- ###jQuery

##Review

[Wednesday's Material](https://github.com/calebatwood/Week3_Wednesday)

##jQuery
jQuery is a JavaScript library

The jQuery library contains the following features:

- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

##jQuery Syntax

The jQuery syntax is tailor made for selecting HTML elements and performing some action on the element(s).

Basic syntax is:
```javascript
 $(selector).action();
```
- A $ sign to define/access jQuery
- A (selector) to "query (or find)" HTML elements
- A jQuery action() to be performed on the element(s)

jQuery uses CSS syntax to select elements.
```javascript
$("#idElement").action();

$(".classElement").action();

$("table").action();
```

##The Document Ready Event
All jQuery methods in the examples are inside a document ready event:
```javascript
$(document).ready(function(){
   // jQuery methods go here...
});
```
This is to prevent any jQuery code from running before the document is finished loading (is ready).

Here are some examples of actions that can fail if methods are run before the document is fully loaded:

- Trying to hide an element that is not created yet
- Trying to get the size of an image that is not loaded yet

##jQuery Selectors

jQuery selectors allow you to select and manipulate HTML element(s).

jQuery selectors are used to "find" (or select) HTML elements based on their id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

All selectors in jQuery start with the dollar sign and parentheses:

```javascript
 $("tbody").action();
 /// the tbody element will have subsequent actions performed on it
```

When a user clicks on a button, all `<p>` elements will be hidden:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```
You can also use classes(“.jumbotron”) and ids (“#user-menu”).
