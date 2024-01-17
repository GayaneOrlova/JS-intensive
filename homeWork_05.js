// 1) Какие бывают алгоритмы сортировок ?

// Пузырьковая сортировка:
// - самый простой алгоритм,
// - медленный алгоритм,
// - сравнивает два соседних значения и меняет их местами, если первое значение больше второго
// - сложность O(n^2).

// Сортировка выбором:
// - сложность в наилучшем и наихудшем случае — O(n^2),
// - находит минимальное значение и помещает его на первую позицию,
// затем находит второе минимальное значение(уже не рассматривая первое) и помещает его на вторую позицию и так далее.

// Быстрая сортировка:
// - наиболее часто используемых алгоритмов сортировки;
// - выбирает опорный элемент и делит массив на две части:
// элементы меньше опорного и элементы больше опорного,
// затем он применяет рекурсивно быструю сортировку к каждой из этих частей;
// - сложность в наилучшем/среднем случае — O(n log n), в наихудшем — O(n^2).

// Сортировка вставками
// - строит финальный отсортированный массив по одному значению за раз,
// - сложность в наилучшем случае — O(n), в наихудшем — O(n^2).

// Сортировка слиянием
// - разделяет исходный массив на более мелкие массивы,
// пока каждый маленький массив не будет содержать всего одну позицию,
// затем сливает маленькие массивы в более крупный и отсортированный;
// - сложность в наилучшем и наихудшем случае — O(n log n);

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// создание объекта Person несколькими способами:

// let person = {
//   name: "Gaya",
//   sirname: "Orlova",
// };

// let person = Object.create({name: "Gaya", surname: "Orlova"});

const person = new Object();
person.name = "Gaya";
person.surname = "Orlova";

const person2 = Object.create(person);

person.logInfo = function () {
  console.log(this.name, this.surname);
};

console.log(person.name); // Gaya
console.log(person.logInfo()); // Gaya Orlova
console.log(person2.name); // Gaya
console.log(person2.logInfo()); // Gaya Orlova

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от
// класса Person.

class Person1 {
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    if (value.length < 2) {
      return console.log("Name is too short");
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

class PersonThree extends Person1 {} // класс-наследник
let personThree = new PersonThree("Gaya");
console.log(personThree.name);

//  БОНУС:
//  1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total :
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
//result = [4, 9]
const firstSum = (arr, total) => {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        pair.push(arr[i], arr[j]);
        return pair;
      }
    }
  }
  return 'There is no such pair';
};
firstSum(arr, total);
// 2) Какая сложность у вашего алгоритма ?
// Сложность данного алгоритма - квадратичная O(n^2),
// так как он использует два вложенных цикла для перебора всех возможных пар элементов массива.
