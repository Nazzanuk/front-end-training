# Part 10 - Mongo
---
## 1.
### Create a new file `server.js`. 

```javascript
//server.js

console.log('May Node be with you');

```
### Run `node server.js` in your terminal.

### Let's initialise our `package.json`.
```bash
npm init
```

### We are going to use the `express` library to build our server.

```bash
npm install express --save
```

### Open your `package.json` and check the file contents. You should see something like this:

```javascript
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "dependencies": {
    "express": "^4.14.0" //dependency
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}

```

---
## 2.
### Next, we use express in server.js by requiring it.

The first thing we want to do is to create a server where browsers can connect to. We can do so with the help of the `listen` method provided by Express:


```javascript
//server.js

var express = require('express');
var app = express();

app.listen(3000, () => console.log('listening on 3000'));
```

### Now, run `node server.js` and navigate to `localhost:3000` on your browser.

You should see a message that says `“cannot get /“`.

We can now communicate to our express server through the browser.

---
## 3.

In Express, we handle a GET request with the get method:
```javascript
app.get(path, callback);
```

### Let’s write “Hello World” back to the browser.
```javascript
app.get('/', (req, res) => { //req = request, res = response
  res.send('Hello World');
});
```

### Stop (Ctrl + C) and restart your server. 

You should now see `“Hello World“`.

---
## 4.

It can get a bit tedious always stopping and restarting your server.

`Nodemon` is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.

### Install `nodemon` globally `npm install -g nodemon`

### Now start your server with `nodemon server.js` and navigate to `localhost:3000` on your browser.

### Change "Hello World" to say "Hello Browser" and refresh the page. 

The changes should be picked up automagically.

---
## 5.
### Create an `index.html` in your root folder

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MY APP</title>
</head>
<body>
    May Node and Express be with you.
</body>
</html>
```

### Update your `server.js` to send this file
```javascript
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // Note: __dirname is the path to your current working directory
});
```

___
## 6.
### Create an array that will hold a list of Pokemon

### Add some dummy data, each pokemon needs a field for `name` and `cp (number)` 

### Create a GET request for route `/pokemon` so that this array will be printed when we navigate to `localhost:3000/pokemon`

### Confirm that your code works
---
## 7.
We are going to add a route for a POST request.

```javascript
app.post('/pokemon', (req, res) => {
    //do something
});
```

Express doesn’t handle reading data from the body of a request on it’s own. We have to add another package called body-parser to gain this functionality.

### Install the body parser
```bash
npm install body-parser --save
```

### Add the body parser dependency
```javascript
//server.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
```

### Modify the POST request

```javascript
app.post('/pokemon', (req, res) => {
    res.json(req.body);
});
```

### Add this form to your HTML

```html
<form action="/pokemon" method="POST">
    <input type="text" placeholder="name" name="name">
    <input type="number" placeholder="CP" name="cp">
    <button type="submit">Submit</button>
</form>
```

### When you submit your form you should now see the submitted object

---
## 8.
### Modify your `server.js` to add this new object to the existing array and print the array