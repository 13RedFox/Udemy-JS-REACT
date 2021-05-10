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

// const arr = [13, 22, 3, 14, 95, 46, 17];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr.pop(); // * Удаляет последний элемент массива
// arr.push(8);  // * Добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i< arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function (item, idx, arr) {
//   console.log(`${idx}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');  // *  разбивка строки
// products.sort();                   // *  сортировка
// console.log(products.join('; '));  // *  склеивание строки

// ! Lessons 22 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // * Передает ссылку на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// + 1) Способ

// function copy(mainObj) {
//   let objCopy = {};

//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 9,
//     y: 5
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// + 2) Способ

// const add = {
//   d: 19,
//   e: 43
// };

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// + 3) Способ

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'qwerty';

// console.log(newArray);
// console.log(oldArray);

// + 4) Способ spread - oператор

// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 4, 6];

// log(...num);

// const array = ['a', 'b'];

// const newArrray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...q };

// console.log(newObj);

// ! Lessons 23 Основы ООП, прототипно-орентированое наследование

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3, 4, 5]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayhello: function () {
//     console.log('Hello');
//   }
// };

// const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// * Устаревший формат

// jonh.__proto__ = soldier;
// console.log(jonh.armor);

// * Нормальный формат

// Object.setPrototypeOf(jonh, soldier);

// ! Lessons 26 Динамическая типизация в JS

// ? To String 

// * 1. (Старый метод)

// console.log(typeof (String(null)));

// * 2. (Интерполяция)

// console.log(typeof (5 + ''));

// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// ? To Number 

// * 1. (Старый метод)
// console.log(typeof (Number('4')));

// * 2.

// console.log(typeof (+'4'));

// * 3.

// console.log(typeof (parseInt('4px', 10)));

// let answer = +prompt('Hello','');

// ? To boolean

// * 1. false 

// 0, '', null, undefined, NaN;

// let switcher = null;

// if (switcher) {
//   console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//   console.log('Working...');
// }

// * 2.
// console.log(typeof (Boolean('4')));

// * 3.
// console.log(typeof (!!'4'));

// ! Lessons 27 Задачи с собеседований на понимание основ

// * 1. ( x = 5)
// let x = 5;
// console.log(x++);

// * 2 (NaN)
// console.log([] + false - null + true);

// * 3 (x = 2)
// let y = 1;
// let x = y = 2;
// console.log(x);

// * 4 ('12')
// console.log([] + 1 + 2);

// * 5 ('1)
// console.log('1'[0]);

// * 6 (null) && - запинается на лжи!
// console.log(2 && 1 && null && 0 && undefined);

// * 7 (false)
// console.log(!!(1 && 2) === (1 && 2));

// * 8 (3) || - запинается на правде!
// console.log(null || 2 && 3 || 4);

// * 9 (false)
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b);

// * 10 (Infinity)
// console.log(+'Infinity');

// * 11 (false)
// console.log('Ежик' > 'яблоко');

// * 12 (2)

// console.log(0 || '' || 2 || undefined || true || false);

// ! Lessons 28 Получение элементов со страницы

// const box = document.querySelector('.box');
// const btns = document.querySelectorAll('button');

// console.log(box);
// console.log(btns);

// btns.forEach((item) => {
//   item.style.color = 'white';
//   item.style.backgroundColor = 'crimson';
//   item.style.border = 'none';
// });

// ! Lessons 31 События и их обработчики

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   console.log('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//   console.log(e.target);
//   console.log('Hover');
// });

// btn.addEventListener('click', (e) => {
//   e.target.removeEventListener()
//   console.log('Click');
// });

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i === 1) {
//     btn.removeEventListener('click', deleteElement);
//   }
// };

// btn.addEventListener('click', deleteElement);

// ! Lessons 32 Навигация по DOM - элементам,data-атрибуты, преимущество for/of

// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('.heart').parentNode);
// console.log(document.querySelector('[data-current="3"').previousElementSibling);

// for (let node of document.body.childNodes) {
//   if (node.nodeName === '#text') {
//     continue;
//   }
//   console.log(node);
// }

// ! Lessons 37 ClassList, дилегирование событий

// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'pink'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('orange'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {

// if (!btns[1].classList.contains('red')) {
//   btns[1].classList.add('red');
// } else {
//   btns[1].classList.remove('red');
// }

//   btns[1].classList.toggle('red');

// });

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.tagName === 'BUTTON') {
//     console.log('Hello');
//   }
// });

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

// ! Lessons 39 setTimeout и setInterval Скрипты и время их выполнения.

// const btn = document.querySelector('.btn');
// let timerId,
//   i = 0;

// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos === 321) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);

// function loger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 1000);
// }, 1000);

// ! Lessons 39 Работа с датами

// const now = new Date('2020-05-01');
// new Date.parse('2020-05-01');

// console.log(now.setHours(18));

// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();

// console.log(`Циклы отработал за ${end - start} миллисекунд`);

// ! Lessons 39 Работа с датами