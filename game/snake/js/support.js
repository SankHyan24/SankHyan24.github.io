'use strict';

function getPosTop(i, j) {
    return 8 + i * 32;
}

function getPosLeft(i, j) {
    return 8 + j * 32;
}

function moveSnake() {
    var tmpx = snake_head.x + 16;
    var tmpy = snake_head.y + 16;
    var target_value;
    switch (snake_head.direction) {
        case DIR.up:
            target_value = board[(tmpx - 1) % 16][(tmpy) % 16];
            if (target_value == 0 || target_value == -1 || target_value == 1) {
                if (target_value == -1) {
                    snake_head.len++;
                    game.food = 0;
                }
                board[(tmpx - 1) % 16][(tmpy) % 16] = snake_head.len + 1;
                snake_head.update((tmpx - 1) % 16, (tmpy) % 16);
                return true;
            }
            return false;
        case DIR.down:
            target_value = board[(tmpx + 1) % 16][(tmpy) % 16];
            if (target_value == 0 || target_value == -1 || target_value == 1) {
                if (target_value == -1) {
                    snake_head.len++;
                    game.food = 0;
                }
                board[(tmpx + 1) % 16][(tmpy) % 16] = snake_head.len + 1;
                snake_head.update((tmpx + 1) % 16, (tmpy) % 16);
                return true;
            }
            return false;
        case DIR.left:
            target_value = board[(tmpx) % 16][(tmpy - 1) % 16];
            if (target_value == 0 || target_value == -1 || target_value == 1) {
                if (target_value == -1) {
                    snake_head.len++;
                    game.food = 0;
                }
                board[(tmpx) % 16][(tmpy - 1) % 16] = snake_head.len + 1;
                snake_head.update((tmpx) % 16, (tmpy - 1) % 16);
                return true;
            }
            return false;
        case DIR.right:
            target_value = board[(tmpx) % 16][(tmpy + 1) % 16];
            if (target_value == 0 || target_value == -1 || target_value == 1) {
                if (target_value == -1) {
                    snake_head.len++;
                    game.food = 0;
                }
                board[(tmpx) % 16][(tmpy + 1) % 16] = snake_head.len + 1;
                snake_head.update((tmpx) % 16, (tmpy + 1) % 16);
                return true;
            }
            return false;
        default:
            return false;
    }
}

function boardUpdate() {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            if (board[i][j] > 0) {
                board[i][j]--;
            }
            if (board[i][j] == 0) {
                gridCell.css("display", "none");
            }
            else {
                gridCell.css("display", "block");
            }
            gridCell.css('background-color', getbgColor(board[i][j]));
            if (i == snake_head.x && j == snake_head.y)
                gridCell.css('background-color', "#6e2f70");

        }
    }
}

function generateFood() {
    var rand_valid = false, rand_counter = 0;
    var gen_num, gen_x = 0, gen_y = 0;
    while (!rand_valid && rand_counter < 1e6) {
        gen_num = Math.floor(Math.random() * 256);
        gen_x = Math.floor(gen_num / 16);
        gen_y = gen_num % 16;
        if (board[gen_x][gen_y] == 0)
            rand_valid = true;
        rand_counter++;
    }
    if (rand_counter == 1e6)
        return false;
    board[gen_x][gen_y] = -1;
    game.food = 1;
    return true;
}

function getbgColor(number) {
    switch (number) {
        case -1:
            return "#6fd90dd3";
            break;
        case -2:
            return "#79430dd3";
            break;
        case 1:
            return "#eee4da";
            break;
        case 8:
            return "#f26179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e36";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#3365a5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6bc";
            break;
        case 8192:
            return "#93c";
            break;
        default:
            return "#f65e36";
            break;
    }
    return "black";
}