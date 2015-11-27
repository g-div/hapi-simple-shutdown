# hapi-simple-shutdown

[![npm](https://img.shields.io/npm/v/hapi-simple-shutdown.svg)](http://npmjs.org/package/g-div/hapi-simple-shutdown)

A very simple plugin to shutdown your hapi server in order to use it with nodemon in development

[![nodei.co](https://nodei.co/npm/hapi-simple-shutdown.png?downloads=true&downloadRank=true&stars=true)](http://npmjs.org/package/g-div/hapi-simple-shutdown)

[![](https://david-dm.org/g-div/hapi-simple-shutdown/status.svg)](https://david-dm.org/g-div/hapi-simple-shutdown)
[![](https://david-dm.org/g-div/hapi-simple-shutdown/dev-status.svg)](https://david-dm.org/g-div/hapi-simple-shutdown)

## Install

`npm install --save hapi-simple-shutdown`

## Use

```javascript
var Hapi = require('hapi');

var server = new Hapi.Server();

server.register(require('hapi-simple-shutdown'), function(err) {

});
```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.2.0 | ✔


## Author

g-div

## License

 - **MIT** : http://opensource.org/licenses/MIT
