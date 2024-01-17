//Задание 1 - Создать объект counter всеми возможными способами;

// 1) литеральная форма:
const counter = {
  firstName: 'Gaya',
  lastName: 'Orlova',
};
// 2) с помощью ключевого слова new:
const counter1 = new Object();
counter1.firstName = 'Gaya';
counter1.lastName = 'Orlova';

// 3) с помощью метода Object.create(), который создает новый объект,
// используя существующий объект в качестве прототипа вновь созданного объекта:
const counter2 = Object.create({}, {
  name: {value: 'Gaya'},
  sirname: {value: 'Orlova'}
});


// Задание 2 - Скопировать объект counter всеми возможными способами
// 1.
const newObj = Object.assign({}, counter); //неглубокое копирование

// 2.
const newObj1 = {...counter}; //неглубокое копирование

// 3.
const newObj2 = JSON.parse(JSON.stringify(counter));
// если объект содержит функции или свойства, которые не могут быть сериализованы в JSON формат,
// или если он содержит свойства с ссылками на другие объекты или циклические ссылки,
// то использование такого способа для глубокого копирования может привести к непредсказуемым результатам. 

// 4. 
const newObj5 = {};
for (let key in counter) {
  newObj[key] = [counter.key];
}; //неглубокое копирование

// 5.
const newObj3 = structuredClone(counter); // глубокое копирование

// 6. //с помощью библиотек, например:
import cloneDeep from 'lodash/cloneDeep' 
const newObj4 = _.cloneDeep(counter); //глубокое копирование

// 7. самостоятельно написанная функция глубокого копирования 



// Задание 3 - Создать функцию makeCounter всеми описанными и возможными способами

const makeCounter = () => {
  return console.log('Happy New Year');
}; // стрелочная функция

function makeCounter1 () {
  return console.log('Happy New Year');
}; // Function Declaration 

const makeCounter2 = function () {
  return console.log('Happy New Year');
}; // Function Expression

const makeCounter3 = function makeCounterFunction(value) {
  if (value) {
    return console.log(`value = ${value}`);
  } else {
    makeCounterFunction('no value');
  }
};// named function expressions



// Доп.задание 1. Написать функцию глубокого сравнения двух объектов:

const obj1 = {
  here: {
    is: "on",
    other: "3"
  },
  object: Z };
  
  const obj2 = {
    here: {
      is: "on",
      other: "2"
    },
    object: Z };
    
    
const isObj = (object) => {
      return object != null && typeof object === "object";
};
    
const deepEqual = (obj1, obj2) => {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObj(value1) && isObj(value2);

    if ((isObjects && !deepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return 'Objects are not equal to each other';
    }
  }
  return 'Objects are equal';
};
// Проверяем, являются ли оба аргумента объектами,
// затем проверяем, имеют ли они одинаковое количество свойств(длину).
// Затем функция рекурсивно вызывает саму себя для каждого свойства объекта.
// Если все свойства равны, функция возвращает true. Если хотя бы одно свойство не равно, функция возвращает false.


// Доп.задание 2. Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
  return str.split('').reverse().join('');
}

//Доп.задание 3 - из лекции

const arr = +[6]
console.log(arr) //6

const arr1 = +[6, 7]
console.log(arr) //NaN

// При выполнении операции с унарным плюсом, JS пытается с помощью valueOf привести массив к примитиву -
// в итоге не получает примитив, а получает массив, который с помощью toString переводит массив в строку "6",
// и далее уже унарный плюс  преобразует строку в число 6. в случае, когда у нас массив с несколькими элементами (arr1),
// логика та же, только теперь строка "6, 7" не может преобразоваться в число, тк помимо чисел строка содержит и другие символы,
// следовательно возвращается NaN