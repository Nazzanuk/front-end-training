# Part 1 - Starting with Angular

### First we are going to create a blank HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
```

##### Note - Include `<script>` tags just before the end of the `</body>` and `<link>` tags in the `<head>`.

### Include Jquery
`https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js`

### Include Bootstrap
`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css`
`https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js`

### Include Angular
`https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.min.js`

### Add Angular app attribute to `<body>` element
`ng-app="app"`

This attribute assigns Angular functionality to everything contained within.

### Add this to the body of your HTML
```html
<div class="container">
    <h1>Angular App</h1>

    <div ng-controller="MainController">
        <p>{{text}}</p>
    </div>
</div>
```

### Initialise our Angular app.
```html
<script>
    var app = angular.module('app', []);

    app.controller('MainController', function ($scope) {
        $scope.text = "Hello World";
    });
</script>
```

