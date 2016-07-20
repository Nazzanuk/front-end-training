# Part 5 - Directives
---
## 1.
### Start again with an the following HTML and empty JavaScript.

```html
<div class="container">
    <h1>Angular App</h1>
    <hr>

    <div ng-controller="MainController">
        <div class="row">
            <div class="col-sm-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Mrs Laurie Cole</div>
                    <img src="https://randomuser.me/api/portraits/women/78.jpg" style="width: 100%">
                    <div class="panel-body">
                        <p><strong>Email:</strong> laurie.cole@example.com</p>
                        <p><strong>DOB:</strong> 1078494582</p>
                        <p><strong>Phone:</strong> (179)-102-8139</p>
                        <hr>
                        <div class="btn btn-danger">Delete</div>
                    </div>
                </div>
            </div>
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
### Convert the user into a directive
---
## 3.
### Attach an array to the scope that will hold a collection of Users.
### Populate this array with dummy data for a few users using all the necessary fields shown in the HTML.
### Use an `ng-repeat` to show a each user in the html for each entry in your array
### Open your browser and check the output
---
## 4.
### Using `$http` make a button that triggers an ajax call to `https://randomuser.me/api/?123` (number at the end should be random) and adds each result to your array
