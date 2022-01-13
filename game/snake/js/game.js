'use strict';

// Initial Program
function init() {
    // Initial the score
    score.value = 0;
    score.update();
    // Initial the snake
    snake_head.init();
    // Initial the gameover board
    $("#gameover").css('display', 'none');
    for (var i = 0; i < 16; i++) {
        board[i] = new Array();
        for (var j = 0; j < 16; j++) {
            if (i == snake_head.x && j == snake_head.y)
                board[i][j] = snake_head.len;
            else
                board[i][j] = 0;
        }
    }
    // Initial the play board
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            if (board[i][j] == 0)
                gridCell.css("display", "none");
            else {
                gridCell.css("display", "block");
            }
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
            gridCell.css('background-color', getbgColor(board[i][j]));
            if (i == snake_head.x && j == snake_head.y)
                gridCell.css('background-color', "#6e2f70");

        }
    }
}
// Always @ Program
function GameLoop() {
    // Samlpe the direction from the keyboard
    snake_head.direction = snake_head.dirbuffer;
    // Move the snake
    if (moveSnake() == false) {
        game.state = STATE.over;
        clearInterval(gamelooper);
        return;
    }
    // Generate the food
    if (game.food == 0)
        if (generateFood() == false) {
            console.log("Generatefood fiel");
            game.state = STATE.over;
            clearInterval(gamelooper);
            return;
        }
        else {
            console.log("Generatefood");
        }
    boardUpdate();
    score.value = snake_head.len + 1;
    score.update();
}