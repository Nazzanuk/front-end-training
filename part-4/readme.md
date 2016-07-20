# Part 4 - Directives
---
## 1.
### Start again with an the following HTML and empty JavaScript.

```html
<div class="container">
    <h1>Angular App</h1>
    <hr>

    <div ng-controller="MainController">
        <div class="pull-left">
            <p style="text-align: center">Image <strong>34</strong></p>
            <img src="https://randomuser.me/api/portraits/women/34.jpg" class="img-thumbnail">
        </div>
        <div class="pull-left">
            <p style="text-align: center">Image <strong>45</strong></p>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" class="img-thumbnail">
        </div>
        <div class="pull-left">
            <p style="text-align: center">Image <strong>22</strong></p>
            <img src="https://randomuser.me/api/portraits/women/22.jpg" class="img-thumbnail">
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
## 2.
### Now we are going to create an `<img-item>` directive to create this automatically 
### Change your HTML to have the following directive declaration and template
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
    <div class="pull-left">
        <p style="text-align: center">Image <strong>{{img.number}}</strong></p>
        <img src="https://randomuser.me/api/portraits/women/{{img.number}}.jpg" class="img-thumbnail">
    </div>
</script>
```

### Add this after the JavaScript declaration for the controller
```javascript
app.component('imgItem', {
    controllerAs:'img',
    templateUrl: 'img-item.html',
    bindings: {
        number: '@'
    }
});
```

##### NOTE: The bindings object allows us to pass information into the directive - `'@'` means pass by value, `'='` means pass by reference. 

### Open your browser and check the output
---
## 3.
### Attach an array to the scope that will hold a collection numbers.

### Use `ng-repeat` to duplicate the `<img-item>` as many times as is necessary
---
## 4.
### Create a function that will generate a random number between 1-99 every time a button is clicked, and add it to the array