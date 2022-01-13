'use strict';

function getPosTop(i, j) {
    return 7 + i * 32;
}

function getPosLeft(i, j) {
    return 7 + j * 32;
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
    let rand_valid = false, rand_counter = 0;
    let gen_num, gen_x = 0, gen_y = 0;
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
        case -2:// The Wall
            return "#79430dd3";
        case -1:// The Food
            return "#6fd90dd3";
        case 0:// The Way
            return "#dbcbbc";
    }
    var numColor = Math.ceil(number / 128).toString(16);
    if (numColor.length < 2)
        numColor = "0" + numColor;
    if (numColor.length > 2)
        numColor = numColor[0] + numColor[2];
    return "#eeffee";
}