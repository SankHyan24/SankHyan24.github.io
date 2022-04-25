'use strict';

var names = new Array();
names = ["小川川", "小东东", "小豪豪"];
var game = {
    food: 0,
    ifstart: function () { return this.state == STATE.start; },
    start: function () {
        // 产生一个随机整数，范围是0到2
        var random = Math.floor(Math.random() * 3);
        // 将随机数赋值给food
        this.food = random;
        // 根据food的值将对应的names输出到html界面
        document.getElementById("food").innerHTML = names[this.food];
    },
};
