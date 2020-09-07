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
