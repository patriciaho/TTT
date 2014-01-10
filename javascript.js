var turn = "X";
var turnCount = 0
var board = ['','','','','','','','',''];
var xWins = 0;
var oWins = 0;

function setupPage() {
var cells = document.getElementsByClassName('box');
for(var i in cells) {
	cells[i].onclick = function(){
		myClick(this);
	};
}
}

function myClick(cell) {
    if (cell.innerHTML == '') {
    	if (turn == "X") {
        turn = "O";
    	} else if (turn == "O") {
        turn = "X";
    	}
    	cell.innerHTML= turn;
    	board[cell.id.charCodeAt(0)-97] = turn;
    	var classes = cell.className;
	 	cell.setAttribute('class', classes + ' taken');
	 	if ( "X,X,X" == [board[0], board[1], board[2]].join() ||
		"X,X,X" == [board[3], board[4], board[5]].join() ||
		"X,X,X" == [board[6], board[7], board[8]].join() ||
		"X,X,X" == [board[0], board[3], board[6]].join() ||
		"X,X,X" == [board[1], board[4], board[7]].join() ||
		"X,X,X" == [board[2], board[5], board[8]].join() ||
		"X,X,X" == [board[0], board[4], board[8]].join() ||
		"X,X,X" == [board[6], board[4], board[2]].join() ) {
			banner.innerHTML = ('X wins');
			banner.setAttribute('style','background: #DF38B1');
			banner.setAttribute('class','animated fadeIn');
			turn = "";
		// xWins += 1;
		// turnCount += 1;
		// document.getElementById('wintrackerx').innerHTML = "X = " + xWins;
		}
		if ( "O,O,O" == [board[0], board[1], board[2]].join() ||
		"O,O,O" == [board[3], board[4], board[5]].join() ||
		"O,O,O" == [board[6], board[7], board[8]].join() ||
		"O,O,O" == [board[0], board[3], board[6]].join() ||
		"O,O,O" == [board[1], board[4], board[7]].join() ||
		"O,O,O" == [board[2], board[5], board[8]].join() ||
		"O,O,O" == [board[0], board[4], board[8]].join() ||
		"O,O,O" == [board[6], board[4], board[2]].join() ) {
			banner.innerHTML = ('O wins');
			banner.setAttribute('style','background: #DF38B1');
			banner.setAttribute('class','animated fadeIn');
			turn = "";
		// oWins += 1;
		// turnCount += 1;
		// document.getElementById('wintrackero').innerHTML = "O = " + xWins;
		}
	} 
}

// function reset() {
// 	banner.innerHTML = "Tic Tac Toe"
// 	// for each x in (a)
// 	a.innerHTML = "";
// 	b.innerHTML = "";
// 	c.innerHTML = "";
// 	d.innerHTML = "";
// 	e.innerHTML = "";
// 	f.innerHTML = "";
// 	g.innerHTML = "";
// 	h.innerHTML = "";
// 	i.innerHTML = "";
// }

