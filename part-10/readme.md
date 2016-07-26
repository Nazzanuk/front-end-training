# Part 10 - Mongo and Mongoose
---
## 1.
### Install Mongoose from the command line using npm:
    
```bash
npm install mongoose --save
```

### Add Mongoose to your project
```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://....');
```

---
## 2.
### Log on to https://mlab.com/ -> sign up and create a new Single-node Sandbox instance (the free one).

### Once this is done, head into it and create a database user and database password. 

Remember the database user and database password because you’re going to use it to connect the database you’ve just created.

### Finally, grab the MongoDB url and add it to your `mongoose.connect`

```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://....');
```

### Connect to the database using `db.once('open',...)`

```javascript
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
});
```

### Test that this works
---
## 3.

### With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our pokemon.

### Create a new file called `pokemon.js`
  
```
//pokemon.js

var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
    name: String, //shorthand declaration of only field type
    cp: {type: Number, default:0}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
```

`module.exports` determines what this file makes publicly available

### Add a reference in `server.js`
```
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Pokemon = require('./pokemon'); //local reference
```

### Lets test our schema by creating a new object
  
```javascript
var pikachu = new Pokemon({ name: 'Pikachu' });
console.log(pikachu.cp); // 0
```

We have a pokemon! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its `save` method. This will return a promise, like an AJAX call in Angular.

### Next we will save our Pikachu
```javascript
//put inside of db.once
var pikachu = new Pokemon({ name: 'Pikachu' });

pikachu.save().then(pikachu => {
    console.log('saved pikachu', pikachu);
}, console.error);
```

### We want to display all the Pokemon we have in our db. We can access all of the documents through our Pokemon model.
```javascript
Pokemon.find().then(response => {
  console.log('Pokemon Array: ', response);
}, console.error);
```

---
## 4.
### Modify `server.js` to: 
- Show all Pokemon in the database with the GET request,
- Add a new Pokemon to the database with the PUT request and also return the new list of pokemon

---
## 5.
### You can pass arguments into the `find` function to filter the returned results.

```
Users.find({ age: 23 }); //will return an array with all users with `age`, `23`.
```

### In express we can get route parameters, simply specify the route parameters in the path of the route as shown below.
```
app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});
```
```
//for this example
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

### Modify `server.js` to: 
- Show the Pokemon with the name passed in with the GET request `/pokemon/name/:name`. for example `/pokemon/name/Pikachu` shoulw return an array with all Pokemon named Pikachu