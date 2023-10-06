let createTable = (i: number): HTMLElement => {
  let table: HTMLElement = document.createElement("table");
  table.setAttribute("id", "table" + i);
  table.setAttribute("class", "table");

  let thead: HTMLElement = document.createElement("thead");
  let tr: HTMLElement = document.createElement("tr");
  let th1: HTMLElement = document.createElement("th");
  th1.setAttribute("scope", "col");
  th1.innerHTML = "Team " + i;
  tr.appendChild(th1);
  for (var i: number = 1; i < 7; i++) {
    let th: HTMLElement = document.createElement("th");
    th.setAttribute("scope", "col");
    th.innerHTML = "B" + i;
    tr.appendChild(th);
  }
  let th2: HTMLElement = document.createElement("th");
  th2.setAttribute("scope", "col");
  th2.innerHTML = "Total";
  tr.appendChild(th2);
  thead.appendChild(tr);

  let tbody: HTMLElement = document.createElement("tbody");
  for (var i: number = 1; i < 11; i++) {
    let trb: HTMLElement = document.createElement("tr");
    trb.setAttribute("id", "Player" + i);
    let tdb: HTMLElement = document.createElement("td");
    tdb.innerHTML = "Player" + i;
    trb.appendChild(tdb);
    for (var j: number = 0; j < 7; j++) {
      let td: HTMLElement = document.createElement("td");
      trb.appendChild(td);
    }
    tbody.appendChild(trb);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
};

let header: HTMLElement = document.createElement("div");
header.setAttribute("class", "h1");
header.innerHTML = "<b>IPL<b>";
header.style.textAlign = "center";

let content: HTMLElement = document.createElement("div");
content.setAttribute("class", "container");
content.style.textAlign = "center";

let row1: HTMLElement = document.createElement("div");
row1.setAttribute("class", "row");

let r1col1: HTMLElement = document.createElement("div");
r1col1.setAttribute("class", "col-lg-4 col-sm-12");
let card1: HTMLElement = document.createElement("div");
card1.setAttribute("class", "card");
let card1body: HTMLElement = document.createElement("div");
card1body.setAttribute("class", "card-body");
let card1title: HTMLElement = document.createElement("div");
card1title.setAttribute("class", "card-title");
card1title.innerHTML = "Team-1 Score";
card1body.appendChild(card1title);
let card1text: HTMLElement = document.createElement("div");
card1text.setAttribute("class", "card-text");
let span1: HTMLElement = document.createElement("span");
span1.setAttribute("id", "span1");
span1.innerHTML = "0";
card1text.appendChild(span1);
card1body.appendChild(card1text);
let card1button: HTMLElement = document.createElement("button");
card1button.setAttribute("class", "btn btn-primary");
card1button.setAttribute("id", "hit1");
card1button.innerText = "Team-1 HIT";
card1body.appendChild(card1button);
card1.append(card1body);
r1col1.appendChild(card1);

let r1col2: HTMLElement = document.createElement("div");
r1col2.setAttribute("class", "col-lg-4 col-sm-12");
let card2: HTMLElement = document.createElement("div");
card1.setAttribute("class", "card");
let card2body: HTMLElement = document.createElement("div");
card2body.setAttribute("class", "card-body");
let card2title: HTMLElement = document.createElement("div");
card2title.setAttribute("class", "card-title");
card2title.innerHTML = "Timer";
card2body.appendChild(card2title);
let card2text: HTMLElement = document.createElement("div");
card2text.setAttribute("class", "card-text");
let span2: HTMLElement = document.createElement("span");
span2.setAttribute("id", "timer");
//span2.innerHTML = "60s";
card2text.appendChild(span2);
card2body.appendChild(card2text);
let card2button: HTMLElement = document.createElement("button");
card2button.setAttribute("class", "btn btn-success");
card2button.setAttribute("id", "results");
card2button.innerText = "Generate Result";
card2body.appendChild(card2button);
card2.append(card2body);
r1col2.appendChild(card2);

let r1col3: HTMLElement = document.createElement("div");
r1col3.setAttribute("class", "col-lg-4 col-sm-12");
let card3: HTMLElement = document.createElement("div");
card3.setAttribute("class", "card");
let card3body: HTMLElement = document.createElement("div");
card3body.setAttribute("class", "card-body");
let card3title: HTMLElement = document.createElement("div");
card3title.setAttribute("class", "card-title");
card3title.innerHTML = "Team-2 Score";
card3body.appendChild(card3title);
let card3text: HTMLElement = document.createElement("div");
card3text.setAttribute("class", "card-text");
let span3: HTMLElement = document.createElement("span");
span3.setAttribute("id", "span2");
span3.innerHTML = "0";
card3text.appendChild(span3);
card3body.appendChild(card3text);
let card3button: HTMLElement = document.createElement("button");
card3button.setAttribute("class", "btn btn-primary");
card3button.setAttribute("id", "hit2");
card3button.innerText = "Team-2 HIT";
card3body.appendChild(card3button);
card3.append(card3body);
r1col3.appendChild(card3);

row1.appendChild(r1col1);
row1.appendChild(r1col2);
row1.appendChild(r1col3);
content.appendChild(row1);

let container: HTMLElement = document.createElement("div");
container.setAttribute("class", "container");

let row2: HTMLElement = document.createElement("div");
row2.setAttribute("class", "row");

let r2col1: HTMLElement = document.createElement("div");
r2col1.setAttribute("class", "col-lg-5 col-sm-12");
let table1: HTMLElement = createTable(1);
r2col1.appendChild(table1);

let r2col2: HTMLElement = document.createElement("div");
r2col2.setAttribute("class", "col-lg-2 col-sm-12");
r2col2.style.textAlign = "center";
let div1 = document.createElement("div");
let h61: HTMLElement = document.createElement("h6");
h61.innerHTML = "Winner: ";
div1.appendChild(h61);
let ans = document.createElement("p");
ans.setAttribute("id", "ans");
div1.appendChild(ans);
let div2: HTMLElement = document.createElement("div");
let h62 = document.createElement("h6");
h62.innerHTML = "Man Of The Match";
div2.appendChild(h62);
let ans2 = document.createElement("p");
ans2.setAttribute("id", "ans2");
let ans3 = document.createElement("p");
ans3.setAttribute("id", "ans3");
let ans4 = document.createElement("p");
ans4.setAttribute("id", "ans4");
div2.appendChild(ans2);
div2.appendChild(ans3);
div2.appendChild(ans4);
r2col2.appendChild(div1);
r2col2.appendChild(div2);

let r2col3: HTMLElement = document.createElement("div");
r2col3.setAttribute("class", "col-lg-5 col-sm-12");
let table2: HTMLElement = createTable(2);
r2col3.appendChild(table2);

row2.appendChild(r2col1);
row2.appendChild(r2col2);
row2.appendChild(r2col3);
container.appendChild(row2);

document.body.appendChild(header);
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(content);
document.body.appendChild(document.createElement("hr"));
document.body.appendChild(container);
