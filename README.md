# cache
[![Build Status](https://travis-ci.org/ah-yu/cache.svg?branch=master)](https://travis-ci.org/ah-yu/cache) [![Greenkeeper badge](https://badges.greenkeeper.io/ah-yu/cache.svg)](https://greenkeeper.io/)

simple lru cache for node and browser

## Install

```js
npm install ycache --save
```

## Usage

```js
const Cache = require('simple-cache');
const cache = new Cache(10000);
cache.set('key','value'); // cache it
cache.get('key'); //if you cache it 
cache.cleanup(); // clean cache
cache.update('key','anothervalue');// update cache
```

## Test

```js
npm run test
```


