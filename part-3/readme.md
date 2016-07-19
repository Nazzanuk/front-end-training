# Part 3 - Ajax and $http
---
## 1.
### Start again with an empty controller fot the HTML and JavaScript.

```html
<div ng-controller="MainController">
       
</div>
```

```javascript
var app = angular.module('app', []);

app.controller('MainController', function ($scope) {

});
```

### Attach an array to the scope that will hold a collection of Pokémon objects

### Inject some dummy data into your controller
 
Each Pokemon will need to contain data for `name`, `imageUrl`, `height`, `weight` and `attack`

### Create an `ng-repeat` in your HTML which will loop through and display each Pokémon
---

## 2.
### Inject `$http` into your controller

`app.controller('MainController', function ($scope, $http) {`

We can use `$http` for all ajax requests.

### Using `$http.get` make a request to `http://pokeapi.co/api/v2/pokemon/1/` and then push the repsonse to your array

