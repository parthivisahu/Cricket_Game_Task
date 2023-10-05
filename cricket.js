var Game = /** @class */ (function () {
    function Game() {
        this.teams = [];
        for (var i = 0; i < 2; i++) {
            this.teams.push(new Team(i));
        }
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.currPlayer = 0;
        this.players = [];
        this.teamScore = 0;
        this.id = id;
        for (var i = 0; i < 10; i++) {
            this.players.push(new Player(i));
        }
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(id) {
        this.score = 0;
        this.ball = 0;
        this.ballScore = [];
        this.id = id;
    }
    return Player;
}());
var change = function (id) {
    clearInterval(clock);
    if (id === 0) {
        hit1.disabled = true;
        hit2.disabled = false;
    }
    else {
        hit2.disabled = true;
        results.disabled = false;
    }
    timer.innerHTML = String(time) + "s";
    gameStart = false;
};
var clock;
var countDown = function (time, id) {
    clock = setInterval(myClock, 1000);
    function myClock() {
        timer.innerHTML = String(--time) + "s";
        if (time === 0) {
            clearInterval(clock);
            change(id);
            console.log("Reached zero");
        }
    }
};
var compute = function () {
    var winner;
    var id;
    if (game.teams[0].teamScore > game.teams[1].teamScore) {
        winner = game.teams[0];
        id = winner.id + 1;
    }
    else {
        winner = game.teams[1];
        id = winner.id + 1;
    }
    res1.innerHTML = "Team" + id;
    var maxScore = 0;
    var mom;
    for (var i = 0; i < winner.players.length; i++) {
        if (maxScore < winner.players[i].score) {
            maxScore = winner.players[i].score;
            mom = "Player" + String(Number(i + 1));
        }
    }
    res2.innerHTML = mom;
    res3.innerHTML = "Team" + id;
    res4.innerHTML = "Score: " + maxScore;
};
var hit1 = (document.getElementById("hit1"));
var hit2 = (document.getElementById("hit2"));
var score = [
    document.getElementById("span1"),
    document.getElementById("span2"),
];
hit2.disabled = true;
var results = (document.getElementById("results"));
results.disabled = true;
var t1 = [
    document.getElementById("table1"),
    document.getElementById("table2"),
];
var res1 = document.getElementById("ans");
var res2 = document.getElementById("ans2");
var res3 = document.getElementById("ans3");
var res4 = document.getElementById("ans4");
var gameStart = false;
var game = new Game();
var timer = document.getElementById("timer");
var time = 60;
timer.innerHTML = String(time) + "s";
var calculate = function (i) {
    var currentPlayer = game.teams[i].currPlayer;
    var ball = game.teams[i].players[currentPlayer].ball;
    var run = Math.floor(Math.random() * 7);
    if (run === 0) {
        game.teams[i].players[currentPlayer].ballScore.push(run);
        t1[i].rows[currentPlayer + 1].cells[ball + 1].innerHTML = String(game.teams[i].players[currentPlayer].ballScore[ball]);
        t1[i].rows[currentPlayer + 1].cells[7].innerHTML = String(game.teams[i].players[currentPlayer].score);
        game.teams[i].currPlayer += 1;
    }
    else {
        game.teams[i].players[currentPlayer].ballScore.push(run);
        game.teams[i].players[currentPlayer].score += run;
        game.teams[i].teamScore += run;
        t1[i].rows[currentPlayer + 1].cells[ball + 1].innerHTML = String(game.teams[i].players[currentPlayer].ballScore[ball]);
        t1[i].rows[currentPlayer + 1].cells[7].innerHTML = String(game.teams[i].players[currentPlayer].score);
        if (ball === 5) {
            game.teams[i].currPlayer += 1;
        }
        else {
            game.teams[i].players[currentPlayer].ball += 1;
        }
    }
    score[i].innerHTML = String(game.teams[i].teamScore);
    if (game.teams[i].currPlayer === 10) {
        change(i);
    }
};
hit1.onclick = function () {
    if (gameStart === false) {
        gameStart = true;
        countDown(time, 0);
    }
    calculate(0);
};
hit2.onclick = function () {
    if (gameStart === false) {
        gameStart = true;
        countDown(time, 1);
    }
    calculate(1);
};
results.onclick = function () {
    compute();
};
