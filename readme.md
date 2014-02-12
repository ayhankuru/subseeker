[![Build Status](https://travis-ci.org/cobaimelan/subseeker.png?branch=master)](https://travis-ci.org/cobaimelan/subseeker)

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
subseeker('0434409 ',function(err,list){
    if(err) throw err
    else console.log(list);
});
```

```js
subseeker('1826940',function(err,torrent){
    if(err) throw err
    else console.log(torrent);
});
```

