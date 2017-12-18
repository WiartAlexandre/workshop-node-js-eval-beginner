# workshop-node-js-eval

Workshop to evaluate students on the basics of Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests

To launch the tests.

	npm test

### Start

To start program.

	node index.js

## Exercises

### Exercise 1

Your program must be written into the file **_src/exercise1.js_** into the function `run`.

This function should return the 3 first values of an array given in input.

```javascript
// For example
run([
	'Hello you',
	9,
	'44',
	666,
	'bye'
]) // ['Hello you', 9, '44']
```

After finish this exercise, please commit this file.

	git add src/exercise1.js

	git commit -m "Exercise 1"

### Exercise 2

Your program must be written into the file **_src/exercise2.js_** into the function `run`.

This function should return a number which is the sum of numbers written in a string delimited by comma.

```javascript
// For example
run('14,7,2') // 23
run('64,23,56,7') // 150
run('1,2,5,4,3') // 15
```

:point_right: function[`split`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) should help you.

After finish this exercise, please commit this file.

	git add src/exercise2.js

	git commit -m "Exercise 2"