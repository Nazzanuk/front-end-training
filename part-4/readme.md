# Part 4 - Directives
---
1. hi
### Start again with an the following HTML and empty JavaScript.

```html
<div class="container">
    <h1>Angular App</h1>
    <hr>

    <div ng-controller="MainController">
        <div class="pull-left">
            <p style="text-align: center">Image <strong>{{img.number}}</strong></p>
            <img src="https://randomuser.me/api/portraits/women/{{img.number}}.jpg" class="img-thumbnail">
        </div>
        <div class="pull-left">
            <p style="text-align: center">Image <strong>{{img.number}}</strong></p>
            <img src="https://randomuser.me/api/portraits/women/{{img.number}}.jpg" class="img-thumbnail">
        </div>
        <div class="pull-left">
            <p style="text-align: center">Image <strong>{{img.number}}</strong></p>
            <img src="https://randomuser.me/api/portraits/women/{{img.number}}.jpg" class="img-thumbnail">
        </div>
    </div>
</div>
```

```javascript
var app = angular.module('app', []);

app.controller('MainController', function ($scope) {

});
```

### Open your browser and check the output
---
1. hello
### Now we are going to create an `<img-item>` directive to create this automatically 
### change your HTML to have the following directive declaration and template
```html
<div class="container">
    <h1>Angular App</h1>
    <hr>

    <div ng-controller="MainController">
        <img-item number="34"></img-item>
        <img-item number="45"></img-item>
        <img-item number="22"></img-item>
    </div>
</div>

<script type="text/ng-template" id="img-item.html"> <!-- angular directive template -->
    <img src="https://randomuser.me/api/portraits/women/{{img.number}}.jpg" class="img-thumbnail">
</script>
```

### Add this after the JavaScript declaration for the controller
```javascript
app.component('imgItem', {
    templateUrl: 'img-item.html',
    bindings: {
        number: '@'
    }
});
```

---
### Populate this array with dummy data for a couple users for all the necessary fields shown in the HTML.
### Use an `ng-repeat` to show a user in the html for each user in yur array
---
## 3.
### Convert each user into a directive
---
## 4.
### Convert each user into a directive
