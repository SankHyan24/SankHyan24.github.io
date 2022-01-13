'use strict';
// When the page is ready
$(document).ready(function (e) {
    init();
});
// Key Board Control
$(document).keydown(function (event) {
    // Only implement when the game is start
    if (game.ifstart()) {
        switch (event.keyCode) {
            case 37://left
                if (snake_head.direction != DIR.right)
                    snake_head.dirbuffer = DIR.left;
                break;
            case 38://up
                if (snake_head.direction != DIR.down)
                    snake_head.dirbuffer = DIR.up;
                break;
            case 39://right
                if (snake_head.direction != DIR.left)
                    snake_head.dirbuffer = DIR.right;
                break;
            case 40://down
                if (snake_head.direction != DIR.up)
                    snake_head.dirbuffer = DIR.down;
                break;
        }
    }
});
// Click Control
function clickedId(evt) {
    var curid;
    if (evt) {//非ie
        curid = evt.target.id;
    }
    else if (window.event) {//ie
        curid = window.event.srcElement.id;
    }

    return curid;
}
function changeDiv() {
    var curid = clickedId();
    // Judge the section and implement the direction change
    var posi = curid.indexOf("grid-cell-");
    var lin_x, lin_y;
    if (posi == -1) {
        return false;
    }
    curid = curid.substr(10, 10);
    posi = curid.indexOf("-");
    lin_x = curid.substr(0, posi);
    lin_y = curid.substr(posi + 1, 2);
    lin_x = parseInt(lin_x, 10);
    lin_y = parseInt(lin_y, 10);
    if (lin_x == lin_y || lin_x + lin_y == 15) {
        return false;
    }
    if (lin_x > lin_y) {
        if (lin_x + lin_y < 15) {// Left
            if (snake_head.direction != DIR.right)
                snake_head.dirbuffer = DIR.left;
            // console.log("Left");
        }
        else {// Down
            if (snake_head.direction != DIR.up)
                snake_head.dirbuffer = DIR.down;
            // console.log("Down");
        }
    }
    else {
        if (lin_x + lin_y < 15) {// Up

            if (snake_head.direction != DIR.down)
                snake_head.dirbuffer = DIR.up;
            // console.log("Up");
        }
        else {// Right
            if (snake_head.direction != DIR.left)
                snake_head.dirbuffer = DIR.right;
            // console.log("Right");
        }
    }
    return true;
}