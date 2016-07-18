# Part 2 - Angular binding

### Alternative way to bind

```html
<p>{{text}}</p>
<p ng-bind="text"></p> <!-- doesn't show up with ugly text initially
```

### Add an input element in your controller with attribute `ng-model="text"`
The content of the input text and the output in the `p` tag should now always be the same.


### Add an array to the scope called `names`

### Add a function to the scope `addName` where you push the current text to the `names` array

### Replace your controller HTML with the following:
```html
<div ng-controller="MainController">
    <input type="text" ng-model="text">
    <p ng-bind="text"></p>
    <div class="btn btn-primary" ng-click="addName()">Add Name</div>
    <hr>

    <p ng-repeat="name in names track by $index" ng-bind="name"></p>
</div>
```

We can now see the `ng-repeat` attribute which allows us to iterate over an array or object.
We use `track by $index` to prevent Angular throwing errors with duplicate values. 
`$index` tells us the current index of the array.

### Change the HTML so that we see the name printed along with the index e.g. `0. Hello World`, `1. Hello World` etc.





