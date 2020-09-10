## Bootalert
A complete pure Bootstrap based alert for Javascript. 
![PHP](https://i.ibb.co/8rLYXkK/bootalert.jpg)

## Installation

#### CDN
bootalert.min.js
```sh
https://cdn.jsdelivr.net/npm/@rohit-chouhan/bootalert/bootalert.min.js
```

bootalert.js
```sh
https://cdn.jsdelivr.net/npm/@rohit-chouhan/bootalert/bootalert.js
```
`with NPM`
```sh
$ npm install @rohit-chouhan/bootalert
```
### Documentation

Method | Use
--------------------------------------|----------------------------------------
bootalert('Hello World') | Header Text in Alert
bootalert('Hello World','I am Bootalert') | Header, Message in Alert
bootalert('Hello World','I am Bootalert','primary') | Header Text, Message, button theme in Alert
bootalert('Hello World','I am Bootalert','primary','Ok') | Header Text, Message, button theme, Button Name in Alert
bootprompt('Enter Name','primary','Get Name') |   `Get Input`Header Text, button theme, Button Name in Alert 

### Get value from bootprompt
There is predefine function to exicute your code and get value.
```javascript
function bootrun(){
 console.log(window.bootval);
}

//complete example
bootprompt('Enter Email');
function bootrun(){
  console.log('Your Email is '+ window.bootval);
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/) License

## Developers
This framework is developed by [Rohit Chouhan](https://facebook.com/itsrohitofficailprofile), Rohit Chouhan is the co-founder and CEO of [Codesler](https://g.co/kgs/1jTqhr), a company that's offering digital marketing services and an accomplished web developer.

[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)\
[![GithHub](https://img.shields.io/badge/Developed%20By-%40github%2Frohit--chouhan-green)](https://github.com/rohit-chouhan)
[![Facebook](https://img.shields.io/badge/Facebook-%40itsrohitofficialprofile-blue)](https://facebook.com/itsrohitofficialprofile)
[![Twitter](https://img.shields.io/badge/Twitter-%40itsrealrohit-blue)](https://twitter.com/itsrealrohit)
[![Instagram](https://img.shields.io/badge/Instagram-%40rohitchauhanofficial-orange)](https://instagram.com/rohitchauhanofficial)
[![Website](https://img.shields.io/badge/Website-rohitchouhan.com-yellow)](https://rohitchouhan.com)
[![GitHub license](https://img.shields.io/badge/Made%20in-Love%20India-red)](https://github.com/rohit-chouhan)
[![GitHub license](https://img.shields.io/github/license/rohit-chouhan/bootalert.svg)](https://github.com/rohit-chouhan/bootalert/blob/master/LICENSE)
[![GitHub version](https://badge.fury.io/gh/rohit-chouhan%2Fbootalert.svg)](https://github.com/rohit-chouhan/bootalert)
