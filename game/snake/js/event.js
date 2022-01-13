'use strict';
// When the page is ready
$(document).ready(function (e) {
    init();
});
$(document).keydown(function (event) {
    if (game.ifstart()) {// Only implement when the game is start
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

