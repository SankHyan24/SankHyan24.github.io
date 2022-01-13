// The Main Variables of the Game
'use strict';

const STATE = {
    over: -1,
    pause: 0,
    start: 1,
}
const GAME = {
    X_LEN: 16,
    Y_LEN: 16,
    LOOP: 200,
}
var gamelooper;

var game = {
    state: STATE.pause,
    food: 0,
    iffood: function () { return this.food == 0 },
    ifstart: function () { return this.state == STATE.start; },
    start: function () {
        if (!this.ifstart()) {
            this.state = STATE.start;
            init();
            gamelooper = setInterval("GameLoop()", GAME.LOOP);
        } else {
            clearInterval(gamelooper);
            document.getElementById("pausegamebutton").innerHTML = "PAUSE";
            this.state = STATE.start;
            init();
            gamelooper = setInterval("GameLoop()", GAME.LOOP);
        }
    },
    pause: function () {
        if (this.ifstart()) {
            this.state = STATE.pause;
            clearInterval(gamelooper);
            document.getElementById("pausegamebutton").innerHTML = "RESUME";
        }
        else {
            this.state = STATE.start;
            gamelooper = setInterval("GameLoop()", GAME.LOOP);
            document.getElementById("pausegamebutton").innerHTML = "PAUSE";
        }
    },
};

const DIR = {
    up: 0,
    right: 1,
    down: 2,
    left: 3,
};

var snake_head = {
    direction: DIR.up,
    dirbuffer: DIR.up,
    x: 8,
    y: 8,
    len: 3,
    update: function (newx, newy) {
        this.x = newx;
        this.y = newy;
    },
    init: function () {
        this.direction = DIR.up;
        this.dirbuffer = DIR.up;
        this.x = 8;
        this.y = 8;
        this.len = 3;
    },
};

var board = new Array();

var score = {
    value: 0,
    update: function () {
        document.getElementById("score").innerHTML = score.value;
    }
};

var clickControler = {
    sd: 1,
    up: function () {
        if (snake_head.direction != DIR.down && game.ifstart())
            snake_head.dirbuffer = DIR.up;
        return true;
    },
    left: function () {
        if (snake_head.direction != DIR.right && game.ifstart())
            snake_head.dirbuffer = DIR.left;
        return true;
    },
    right: function () {
        if (snake_head.direction != DIR.left && game.ifstart())
            snake_head.dirbuffer = DIR.right;
        return true;
    },
    down: function () {
        if (snake_head.direction != DIR.up && game.ifstart())
            snake_head.dirbuffer = DIR.down;
        return true;
    },
};
