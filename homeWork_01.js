//Задание 1

const counter = {
  firstName: 'Gaya',
  lastName: 'Orlova',
};

const counter1 = new Object();
const counter2 = Object.create({});


// Задание 2
// 1.
const newObj = Object.assign({}, counter);

// 2.
const newObj1 = {...counter};

// 3.
const newObj2 = JSON.parse(JSON.stringify(counter));

// 4.
const newObj3 = structuredClone(counter);

// 5.
import cloneDeep from 'lodash/cloneDeep'
const newObj4 = _.cloneDeep(counter);

// 6. 
const newObj5 = {};
for (let key in counter) {
  newObj[key] = [counter.key];
};


// Задание 3
const makeCounter = () => {
  return console.log('Happy New Year');
};

function makeCounter1 () {
  return console.log('Happy New Year');
};

const makeCounter2 = function () {
  return console.log('Happy New Year');
}

const makeCounter3 = function makeCounterFunction(value) {
  if (value) {
    return console.log(`value = ${value}`);
  } else {
    makeCounterFunction('no value');
  }
};



// Доп.задание 1.

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


// Доп.задание 2.
function reverseStr(str) {
  return str.split('').reverse().join('');
}

//Доп.задание 3

const arr = +[6]
console.log(arr) //6

const arr1 = +[6, 7]
console.log(arr) //NaN

// При выполнении операции с унарным плюсом, JS пытается с помощью valueOf привести массив к примитиву -
// в итоге не получает примитив, а получает массив, который с помощью toString переводит массив в строку "6",
// и далее уже унарный плюс  преобразует строку в число 6. в случае, когда у нас массив с несколькими элементами (arr1),
// логика та же, только теперь строка "6, 7" не может преобразоваться в число, тк помимо чисел строка содержит и другие символы,
// следовательно возвращается NaN