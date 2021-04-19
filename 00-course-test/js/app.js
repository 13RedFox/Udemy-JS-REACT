'use strict';

// ! Lessons 19

// function first() {
//   setTimeout(function () {
//     console.log('1');
//   }, 500);
// }

// function second() {
//   console.log('2');
// }

// first();
// second();

// * Callback function

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот курс!');
// }

// learnJS('JavaScript', done);

// ! Lessons 20 (Объекты, деструктизация объектов (ES6) ассоциативные массивы)

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     background: 'red',
//   },
//   makeTest: function () {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const { border, background } = options.colors; // * ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ!!!

// console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

// console.log(Object.keys(options).length);

// ! Lessons 21 (Массивы и псевдомассивы)