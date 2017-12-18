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

### Exercise 3

Your program must be written into the file **_src/exercise3.js_** into the function `run`.

This function should return an object which combine 2 objects given in input.

```javascript
run(
  { name: 'Dupont', money: 200 },
  { firstname: 'Marc', money: 40 }
) // { name: 'Marc', name: 'Dupont', money: 240 }
run(
  { name: 'Thibault', money: 601 },
  { firstname: 'Vanessa', money: 120 }
) // { name: 'Vanessa', name: 'Thibault', money: 721 }
```

After finish this exercise, please commit this file.

	git add src/exercise3.js

	git commit -m "Exercise 3"

### Exercise 4

Your program must be written into the file **_src/exercise4.js_** into the function `run`.

Be careful, some code is already present for this exercise, it's strictly forbidden to change this code.

This function should return the number 34 with inputs already given.

After finish this exercise, please commit this file.

	git add src/exercise4.js

	git commit -m "Exercise 4"

### Exercise 5

Your program must be written into the file **_src/exercise5.js_** into the function `run`.

This function should return (a number) which is the sum of the values written in the path given in input.

```javascript
run("exercise5-sample-1.txt") // 30
```

After finish this exercise, please commit this file.

	git add src/exercise5.js

	git commit -m "Exercise 5"
