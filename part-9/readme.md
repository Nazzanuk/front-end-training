# Part 9 - Back End JavaScript
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

app.listen(3000, function() {
  console.log('listening on 3000')
})
```

### Now, run `node server.js` and navigate to `localhost:3000` on your browser. You should see a message that says `“cannot get /“`.

We can now communicate to our express server through the browser.

## 3.
---

In Express, we handle a GET request with the get method:
```javascript
app.get(path, callback);
```

### Let’s write “Hello World” back to the browser.
```javascript
app.get('/', function(req, res) { //req = request, res = response
  res.send('Hello World')
})
```
