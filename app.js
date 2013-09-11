
/**
 * Module dependencies.
 */

var express = require('express');
var http    = require('http');
var path    = require('path');
var lingua  = require('lingua');
var stylus  = require('stylus');
var bunyan  = require('bunyan');
nconf       = require('nconf'); // note: global

/**
 * Logging
 */

// simple logging middleware
var logger = function( req, res, next ) {
  var AccessLog = bunyan.createLogger({
    name    : 'AccessLog',
    streams : [{
      path  : path.join( __dirname, 'logs', 'access.log' )
    }],
    serializers: {
      req : bunyan.stdSerializers.req
    }
  });
  AccessLog.info({
    req : req
  });
  next();
};

log = bunyan.createLogger({ // global
  name    : 'CustomLog',
  streams : [{
    path  : path.join( __dirname, 'logs', 'custom.log' )
  }]
});

/**
 * App setup
 */

var app = express();

// Enviroment setup
require( __dirname + '/config/enviroment.js' )(
  path,
  express,
  app,
  logger,
  stylus,
  lingua
);

/**
 * Middleware setup
 */

var middlewareCollection = [
   'base'
].map(function( middlewareName ) {
  var middleware;
  middleware = require( './middleware/' + middlewareName );
  return middleware.setup( app );
});

/**
 * Server setup
 */

http.createServer(app).listen(app.get('port'), function(){
  console.log( 'Express server listening on port ' + app.get('port') );
});