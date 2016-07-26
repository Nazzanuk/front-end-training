# Part 9 - Back End JavaScript
---
## 1.
### Create a new file `server.js`. 

```javascript
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

```json
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "dependencies": {
    "express": "^4.14.0"
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





