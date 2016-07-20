# Part 6 - npm and Gulp
---
## 1.
### Start again with an the following HTML and empty JavaScript.

```html
<div class="container">
    <h1>Angular App</h1>
    <hr>

    <div ng-controller="MainController">
        {{hello}}
    </div>
</div>
```

```javascript
var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.hello = "Hello World";
});
```

### Check that this works
---
## 2.
### We are going to extract our JavaScript to an external file

### Create a folder called `components` and place a new file in there called `main-controller.js`
```javascript
//main-controller.js

var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
    $scope.hello = "Hello World";
});
```

### Add a link in the HTML to this new file and remove the inline script

### Check that this works
---
## 3.
### Create a new file called `main-service.js` and include it in your HTML after `main-controller.js`

### Change the content of the files to the following.

```javascript
//main-controller.js

var app = angular.module('app', []);

app.controller('MainController', function ($scope, MainService) {
    $scope.getHello = MainService.getHello;
});
```

```javascript
//main-service.js

app.service('MainService', function () {
    var hello = "Hello World";
    
    var getHello = function () {
        return hello;
    };
    
    return {
        getHello:getHello
    }
});
```

*NOTE: We've created a service to handle the logic, a service can talk to multiple controllers and directives. 
It's good practice to put all business logic in services*

### Change your HTML to show the output from the service
---
## 4.
*NOTE: As we add more and more files, scaling becomes a problem. So we will use a task runner to automate this process*
 
### We are going to use Node Package Manager(npm) to download libraries for our project
### In your terminal, at the root of your directory run 

```bash
npm install --global gulp-cli # Install Gulp globally
npm init # Initialize your project directory
npm install --save gulp # Install gulp in your project
```

### Create a `gulpfile.js` at the root of your project:

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('run default task');
    // place code for your default task here
});
```

### Run gulpin your terminal:

```bash
gulp
```

The default task will run and do nothing.

To run individual tasks, use `gulp <task>`.

---
## 5.
### We are going to install `gulp-concat` to concatenate all of our files into one.

### Install `gulp-concat` via the terminal

```bash
npm install --save gulp-concat
```

### Add this declaration to the top of the gulpfile
```javascript
var concat = require('gulp-concat'); 
```

### Add the task `gen-js` to your gulpfile

```javascript
gulp.task('gen-js', function() {
    return gulp.src('./components/**/*.js') //wildcard
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/'));
});
```

*NOTE: This task uses a wildcard to find all of the js files in the components directory and then merges them into one file
 (`app.js`) and saves that file in the `public` directory.*

### run `gulp gen-js` via the terminal

```bash
npm install --save gulp-concat
```