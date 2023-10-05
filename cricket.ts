class Game {
  teams: Array<Team> = [];
  constructor() {
    for (var i: number = 0; i < 2; i++) {
      this.teams.push(new Team(i));
    }
  }
}

class Team {
  id: number;
  currPlayer: number = 0;
  players: Array<Player> = [];
  teamScore: number = 0;
  constructor(id: number) {
    this.id = id;
    for (var i: number = 0; i < 10; i++) {
      this.players.push(new Player(i));
    }
  }
}

class Player {
  id: number;
  score: number = 0;
  ball: number = 0;
  ballScore: Array<number> = [];
  constructor(id: number) {
    this.id = id;
  }
}

let change = (id: number) => {
  clearInterval(clock);
  if (id === 0) {
    hit1.disabled = true;
    hit2.disabled = false;
  } else {
    hit2.disabled = true;
    results.disabled = false;
  }
  timer.innerHTML = String(time) + "s";
  gameStart = false;
};

let clock;
let countDown = (time: number, id: number) => {
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

let compute = () => {
  let winner;
  let id;
  if (game.teams[0].teamScore > game.teams[1].teamScore) {
    winner = game.teams[0];
    id = winner.id + 1;
  } else {
    winner = game.teams[1];
    id = winner.id + 1;
  }
  res1.innerHTML = "Team" + id;
  let maxScore: number = 0;
  let mom: string;
  for (var i: number = 0; i < winner.players.length; i++) {
    if (maxScore < winner.players[i].score) {
      maxScore = winner.players[i].score;
      mom = "Player" + String(Number(i + 1));
    }
  }
  res2.innerHTML = mom;
  res3.innerHTML = "Team" + id;
  res4.innerHTML = "Score: " + maxScore;
};

let hit1: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("hit1")
);
let hit2: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("hit2")
);
let score = [
  document.getElementById("span1"),
  document.getElementById("span2"),
];
hit2.disabled = true;
let results: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("results")
);
results.disabled = true;
let t1 = [
  <HTMLTableElement>document.getElementById("table1"),
  <HTMLTableElement>document.getElementById("table2"),
];
let res1 = document.getElementById("ans");
let res2 = document.getElementById("ans2");
let res3 = document.getElementById("ans3");
let res4 = document.getElementById("ans4");

let gameStart: boolean = false;
let game = new Game();
let timer = document.getElementById("timer");
let time = 60;
timer.innerHTML = String(time) + "s";

let calculate = (i: number) => {
  let currentPlayer = game.teams[i].currPlayer;
  let ball = game.teams[i].players[currentPlayer].ball;
  let run = Math.floor(Math.random() * 7);
  if (run === 0) {
    game.teams[i].players[currentPlayer].ballScore.push(run);
    t1[i].rows[currentPlayer + 1].cells[ball + 1].innerHTML = String(
      game.teams[i].players[currentPlayer].ballScore[ball]
    );
    t1[i].rows[currentPlayer + 1].cells[7].innerHTML = String(
      game.teams[i].players[currentPlayer].score
    );
    game.teams[i].currPlayer += 1;
  } else {
    game.teams[i].players[currentPlayer].ballScore.push(run);
    game.teams[i].players[currentPlayer].score += run;
    game.teams[i].teamScore += run;
    t1[i].rows[currentPlayer + 1].cells[ball + 1].innerHTML = String(
      game.teams[i].players[currentPlayer].ballScore[ball]
    );
    t1[i].rows[currentPlayer + 1].cells[7].innerHTML = String(
      game.teams[i].players[currentPlayer].score
    );
    if (ball === 5) {
      game.teams[i].currPlayer += 1;
    } else {
      game.teams[i].players[currentPlayer].ball += 1;
    }
  }
  score[i].innerHTML = String(game.teams[i].teamScore);
  if (game.teams[i].currPlayer === 10) {
    change(i);
  }
};
hit1.onclick = () => {
  if (gameStart === false) {
    gameStart = true;
    countDown(time, 0);
  }
  calculate(0);
};

hit2.onclick = () => {
  if (gameStart === false) {
    gameStart = true;
    countDown(time, 1);
  }
  calculate(1);
};

results.onclick = () => {
  compute();
};
