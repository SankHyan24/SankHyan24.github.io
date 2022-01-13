var SnakeColor = {
    R: 0,
    G: 0,
    B: 0,
    genColor: function (r, g, b) {
        this.R = r;
        this.G = g;
        this.B = b;
    },
    toColor: function () {
        var stringR = this.R.toString(16);
        if (stringR.length == 1)
            stringR = '0' + stringR;
        var stringG = this.G.toString(16);
        if (stringG.length == 1)
            stringG = '0' + stringG;
        var stringB = this.B.toString(16);
        if (stringB.length == 1)
            stringB = '0' + stringB;
        return '#' + stringR + stringG + stringB;
    },
    LinearColor: function (colorFrom, colorTo, linearK) {
        var linear_R = Math.ceil((colorTo.R - colorFrom.R) * linearK + colorFrom.R);
        var linear_G = Math.ceil((colorTo.G - colorFrom.G) * linearK + colorFrom.G);
        var linear_B = Math.ceil((colorTo.B - colorFrom.B) * linearK + colorFrom.B);
        return SnakeColor.genColor(linear_R, linear_G, linear_B);
    }
}
var color_2 = new SnakeColor.genColor(255, 0, 0);
var color_1 = new SnakeColor.genColor(0, 0, 255);