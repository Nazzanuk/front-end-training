# Part 10 - Mongo and Mongoose
---
## 1.
### Install Mongoose from the command line using npm:
    
```bash
npm install mongoose 
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

```

### Test that this works
---
## 3.

### With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our pokemon.
  
```
var pokemonSchema = mongoose.Schema({
    name: String, //shorthand declaration of only field type
    cp: {type: Number, default:0}
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);
```

### Lets test our schema by creating a new object
  
```
var pikachu = new Pokemon({ name: 'Pikachu' });
console.log(fluffy.number); // 0
```

We have a pokemon! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its `save` method. This will return a promise, like an AJAX call in Angular.

### Next we will save our Pikachu
```javascript
pikachu.save().then(pikachu => {
    console.log('saved pikachu');
}, console.error);
```

### We want to display all the pokemon we have in our db. We can access all of the documents through our Pokemon model.
```javascript
Pokemon.find().then(response => {
  console.log('Pokemon Array: ', response);
}, console.error);
```