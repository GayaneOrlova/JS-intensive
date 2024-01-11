const foo = () => {
    console.log(this.prop);
}

const obj = {
    prop: 1,

    m1() {
        console.log(this.prop);
    },

    m2(foo) {
      foo();
    },

    m3() {
        const foo = () => {
            console.log(this.prop);
        }
        foo();
    },

    m4: foo,

    m5() {
      foo();
    },
};

obj.m1();// 1 - метод - значит this = объект,
obj.m2(foo);// undef, - у стрелки нет контекста, она идет выше - выше только window,
obj.m3();//1 - у стрелки нет своего this, она идет выше в метод - контекст метода - сам объект,
obj.m4();//undef - у стрелки нет контекста, она идет выше - выше только window,
obj.m5();//undef - у стрелки нет контекста, она идет выше - выше только window.

 