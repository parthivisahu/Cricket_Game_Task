var createTable = function (i) {
    var table = document.createElement("table");
    table.setAttribute("id", "table" + i);
    table.setAttribute("class", "table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.setAttribute("scope", "col");
    th1.innerHTML = "Team " + i;
    tr.appendChild(th1);
    for (var i = 1; i < 7; i++) {
        var th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerHTML = "B" + i;
        tr.appendChild(th);
    }
    var th2 = document.createElement("th");
    th2.setAttribute("scope", "col");
    th2.innerHTML = "Total";
    tr.appendChild(th2);
    thead.appendChild(tr);
    var tbody = document.createElement("tbody");
    for (var i = 1; i < 11; i++) {
        var trb = document.createElement("tr");
        trb.setAttribute("id", "Player " + i);
        var tdb = document.createElement("td");
        tdb.innerHTML = "Player " + i;
        trb.appendChild(tdb);
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            trb.appendChild(td);
        }
        tbody.appendChild(trb);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
};
var header = document.createElement("div");
header.setAttribute("class", "h1");
header.innerHTML = "<b>Cricket_2023<b>";
header.style.textAlign = "center";
var content = document.createElement("div");
content.setAttribute("class", "container");
content.style.textAlign = "center";
var row1 = document.createElement("div");
row1.setAttribute("class", "row");
var r1col1 = document.createElement("div");
r1col1.setAttribute("class", "col-lg-4 col-sm-12");
var card1 = document.createElement("div");
card1.setAttribute("class", "card");
var card1body = document.createElement("div");
card1body.setAttribute("class", "card-body");
var card1title = document.createElement("div");
card1title.setAttribute("class", "card-title");
card1title.innerHTML = "Team-1 Score";
card1body.appendChild(card1title);
var card1text = document.createElement("div");
card1text.setAttribute("class", "card-text");
var span1 = document.createElement("span");
span1.setAttribute("id", "span1");
span1.innerHTML = "0";
card1text.appendChild(span1);
card1body.appendChild(card1text);
var card1button = document.createElement("button");
card1button.setAttribute("class", "btn btn-primary");
card1button.setAttribute("id", "hit1");
card1button.innerText = "Team-1 HIT";
card1body.appendChild(card1button);
card1.append(card1body);
r1col1.appendChild(card1);
var r1col2 = document.createElement("div");
r1col2.setAttribute("class", "col-lg-4 col-sm-12");
var card2 = document.createElement("div");
card1.setAttribute("class", "card");
var card2body = document.createElement("div");
card2body.setAttribute("class", "card-body");
var card2title = document.createElement("div");
card2title.setAttribute("class", "card-title");
card2title.innerHTML = "Timer";
card2body.appendChild(card2title);
var card2text = document.createElement("div");
card2text.setAttribute("class", "card-text");
var span2 = document.createElement("span");
span2.setAttribute("id", "timer");
//span2.innerHTML = "60s";
card2text.appendChild(span2);
card2body.appendChild(card2text);
var card2button = document.createElement("button");
card2button.setAttribute("class", "btn btn-success");
card2button.setAttribute("id", "results");
card2button.innerText = "Generate Result";
card2body.appendChild(card2button);
card2.append(card2body);
r1col2.appendChild(card2);
var r1col3 = document.createElement("div");
r1col3.setAttribute("class", "col-lg-4 col-sm-12");
var card3 = document.createElement("div");
card3.setAttribute("class", "card");
var card3body = document.createElement("div");
card3body.setAttribute("class", "card-body");
var card3title = document.createElement("div");
card3title.setAttribute("class", "card-title");
card3title.innerHTML = "Team-2 Score";
card3body.appendChild(card3title);
var card3text = document.createElement("div");
card3text.setAttribute("class", "card-text");
var span3 = document.createElement("span");
span3.setAttribute("id", "span2");
span3.innerHTML = "0";
card3text.appendChild(span3);
card3body.appendChild(card3text);
var card3button = document.createElement("button");
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
var container = document.createElement("div");
container.setAttribute("class", "container");
var row2 = document.createElement("div");
row2.setAttribute("class", "row");
var r2col1 = document.createElement("div");
r2col1.setAttribute("class", "col-lg-5 col-sm-12");
var table1 = createTable(1);
r2col1.appendChild(table1);
var r2col2 = document.createElement("div");
r2col2.setAttribute("class", "col-lg-2 col-sm-12");
r2col2.style.textAlign = "center";
var div1 = document.createElement("div");
var h61 = document.createElement("h6");
h61.innerHTML = "Winner: ";
div1.appendChild(h61);
var ans = document.createElement("p");
ans.setAttribute("id", "ans");
div1.appendChild(ans);
var div2 = document.createElement("div");
var h62 = document.createElement("h6");
h62.innerHTML = "Man Of The Match";
div2.appendChild(h62);
var ans2 = document.createElement("p");
ans2.setAttribute("id", "ans2");
var ans3 = document.createElement("p");
ans3.setAttribute("id", "ans3");
var ans4 = document.createElement("p");
ans4.setAttribute("id", "ans4");
div2.appendChild(ans2);
div2.appendChild(ans3);
div2.appendChild(ans4);
r2col2.appendChild(div1);
r2col2.appendChild(div2);
var r2col3 = document.createElement("div");
r2col3.setAttribute("class", "col-lg-5 col-sm-12");
var table2 = createTable(2);
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
