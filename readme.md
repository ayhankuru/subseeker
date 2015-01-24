[![Build Status](http://img.shields.io/travis/ayhankuru/subseeker.svg?style=flat-square)](https://travis-ci.org/ayhankuru/subseeker)


[![Build Status](https://img.shields.io/david/ayhankuru/subseeker.svg?style=flat-square)](https://david-dm.org/ayhankuru/subseeker)


subtitleseeker.com simple api


## Install

```
npm install subseeker
```

## Usage

```js
var subseeker = require('subseeker');
```

## Search

imdb id search..

```js
subseeker('0434409').then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
})
```

```js
subseeker('1826940').then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
})
```

