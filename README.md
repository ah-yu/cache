# cache
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
```


