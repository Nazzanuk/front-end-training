# Part 4 - Directives
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

### Attach an array to the scope that will hold a collection of Users.
---
## 2.
### Populate this array with dummy data for a couple users for all the necessary fields shown in the HTML.
### Use an `ng-repeat` to show a user in the html for each user in yur array
---
## 3.
### Convert each user into a directive
---
## 4.
### Convert each user into a directive
