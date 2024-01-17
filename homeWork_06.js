// Написать порядок и вывод в консоли:
// 1)
console.log('1'); //синхронный - в коллстек - выполнился и удалился первым;

setTimeout(() => console.log('2'), 1); //идет в web api - далее в макротаску, имеет тайминг

let promiseNew = new Promise((resolve) => { 
  console.log('3'); //синхронный - в коллстек - выполнился и удалился вторым;
  resolve();
}); 

promiseNew.then(() => console.log('4')); //идет в микротаску 

setTimeout(() => console.log('5'));//идет в макротаску, не имеет тайминг

console.log('6'); //синхронный - в коллстек - выполнился и удалился третьим;

// 1, 3, 6, 4, 5, 2


// 2)
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");
  console.log("1"); //синхронный
  
  setTimeout(() => {
    console.log("2"); // идет в web api - далее в макротаску,
  }, 0);
  
  console.log("3"); //синхронный
});

// 1, 3, 2

// 3)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b"; //ab
  })
  .then((res) => {
    return res + "с"; //abc
  })
  .finally((res) => {
    return res + "!!!!!!!"; //ничего не вернет
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res); //abc
  });
  // abc
  
  // поскольку наш промис выполнился успешно (с resolve),
  // выполняется первый then, который возвращает промис для следующего then - 'ab',
  // выполняем следующий then, возвращает промис для следующего then - 'abc',
  // finally ничего не возвращает,
  // catch игнорируется,
  // последний then выводит в консоль abc.
  
  
  //4)
  function doSmth() {
    return Promise.resolve("123");
  };
  
  doSmth()
    .then(function (a) {
      console.log("1", a); // 1 123
      return a;
    })
    .then(function (b) {
      console.log("2", b); // 2 123
      return Promise.reject("321");
    })
    .catch(function (err) {
      console.log("3", err);  // 3 321
    })
    .then(function (c) {
      console.log("4", c); //  4 undef
      return c;
    });
    
// 1 123
// 2 123
// 3 321
// 4 undefined
    
// поскольку промис выполнился успешно (с resolve),
// выполняется первый then - выводит в консоль - 1 123 и возвращает промис для следующего then - '123',
// выполняем следующий then - выводит в консоль 2 123 и возвращает промис , но уже с ошибкой - '321',
// падаем в catch , выводит в консоль 3 321 и ничего не возвращает, и поэээтому
// then на 83тьей строке выводит в консоль 4 и undefiend.

// 5)
console.log("1"); //синхронный

setTimeout(function () {
  console.log("2");
}, 0);//макротаска

Promise.resolve().then(() => console.log("3")); //промис синхронный, консоль в нем - в микротаску

console.log("4");//синхронный

// 1 4 3 2

// 6) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого
//  элемента с задержкой в 3 секунды.

const arr = [10, 12, 15, 21];

function printIndex(arr) {
  arr.map((item, index) => {
    setTimeout(() => console.log(index), 3000 * index);
  })
};
printIndex(arr);

// function printIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => console.log(i), 3000 * i);
//   }
// };

// printIndex(arr);


    
    