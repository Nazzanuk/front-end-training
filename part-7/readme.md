# Part 7 - Gulp and Bower
---
## 1.
### Just like npm, Bower provides us with dependencies, but for the front end
### Install Bower

### Bower is a command line utility. Install it with npm.

```bash
npm install -g bower
```

### Install packages with `bower install`. Bower installs packages to bower_components/.

```bash
bower install <package>
```

### Let's install the packages we use in our project
```bash
bower install --save angular bootstrap jquery
```

### In the `bower_components` folder we will finda folder for each dependency
---
## 2.
### Create two Gulp tasks `gen-lib-js` and `gen-lib-css` you will need to find the specific files for 
each and generate `lib.js` and `lib.css` respectively.


---
## 3.