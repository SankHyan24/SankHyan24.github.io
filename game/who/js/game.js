'use strict';

var names = new Array();
names = ["小川川", "小东东", "小豪豪"];
var game = {
    food: 0,
    ifstart: function () { return this.state == STATE.start; },
    start: function () {
        var random = Math.floor(Math.random() * 3);
        this.food = random;
        document.getElementById("food").innerHTML = names[this.food];
    },
};
