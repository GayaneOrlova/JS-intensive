// 1) Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массивы в JS:
// - могут содержать элементы разных типов данных;
// - могут быть динамически изменены (можно добавлять, удалять и изменять элементы массива);
// - могут работать и как очередь, и как стек (можем добавлять/удалять элементы как в начале, так и в конце массива),
// - имеют length, которое может быть больше, чем количество элементов в массиве, если в массиве есть разреженные индексы.


// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
};
const obj = {
  item: 'some value',
};

logger.call(obj);
logger.apply(obj);

const newLogger = logger.bind(obj);
newLogger();


// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

function makeBindPolyfill(fn, context, ...rest) {
  return function(...args) {
    return fn.call(context, ...rest.concat(args))
  }
};

function logger1(str) {
  return `${str} ${this.item}${str2}`;
}
let str = 'I output only external context:';
let str2 = '!wow!';

console.log(makeBindPolyfill(logger1, obj, str)(str2));