# express.js web boilerplate

## Quick Start

Clone the boilerplate:
```
$ git clone git@github.com:dominiklessel/express-web-boilerplate.git my_web_app && cd my_web_app
```

Install dependencies:
```
$ npm install
```

Create logs folder
```
$ mkdir logs
```

Start the server:
```
$ node app
```

## Asset management

[jam.js](https://github.com/caolan/jam) is used for asset management, but still has a bug, which forces you to fix paths inside `require.config.js` and `require.js` manually.

## Module dependencies

- express (v3.0.0)
- nconf (v0.6.4)
- jog (v0.5.1)
- jade (v0.27.6)
- stylus (v0.30.1)
- lingua (v0.3.2)