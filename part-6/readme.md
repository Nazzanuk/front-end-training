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

### Change your HTML to show the output from the service
---
## 4.
##### NOTE: As we add more and more files, scaling this becomes a problem. So we will use a task runner to automate this process
 
### In your terminal at the root of your directory run 

`npm install --global gulp-cli # Install Gulp globally`
`npm init # Initialize your project directory`
`npm install --save gulp # Install gulp in your project`

### Create a `gulpfile.js` at the root of your project:

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('run default task');
    // place code for your default task here
});
```

### Run gulp:

`gulp`

The default task will run and do nothing.

To run individual tasks, use `gulp <task>`.

---
## 5.
### 