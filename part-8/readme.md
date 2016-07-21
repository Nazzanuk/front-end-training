# Part 7 - Project structure
---
## 1.
### Add a new folder in components called `star-warrior`. 
### This folder will contain the JavaScript and HTML for your new directive `<star-warrior>`. 
### This directive will take one argument, an ID, and print the character's name using this api `http://swapi.co/api/people/4/.json`

*NOTE: A directive can have it's own controller. see below:*

```javascript
app.component('starWarrior', {
    controllerAs:'warrior',
    templateUrl: 'star-warrior.html',
    bindings: {
        id: '@'
    },
    controller: function ($http) {
        var data;
    
        $http.get('http://swapi.co/api/people/4/.json').then((response) => {
            var data = response.data
        });
        
        this.getData = () => data;
    }
    
});




