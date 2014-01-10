var turn = "X";
var turnCount = 0
var board = ['','','','','','','','',''];
var xWins = 0;
var oWins = 0;
var gameover = false;

function setupPage() {
var cells = document.getElementsByClassName('box');
for(var i in cells) {
	cells[i].onclick = myClick;
}
}

function myClick() {
	cell = this;
    if (cell.innerHTML == '' && gameover == false) {
    	if (turn == "X") {
        turn = "O";
    	} else if (turn == "O") {
        turn = "X";
    	}
    	cell.innerHTML= turn;
    	board[cell.id.charCodeAt(0)-97] = turn;
   //  	var classes = cell.className;
	 	// cell.setAttribute('class', classes + ' taken');
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
			gameover = true;
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
			gameover = true;
		// oWins += 1;
		// turnCount += 1;
		// document.getElementById('wintrackero').innerHTML = "O = " + xWins;
		}
		if (board[0] != '' && board[1] != '' && board[2] != '' && 
			board[3] != '' && board[4] != '' && board[5] != '' && 
			board[6] != '' && board[0] != '' && board[0] != '' ) {
			banner.innerHTML = ('Draw');
			banner.setAttribute('style','background: #DF38B1');
			banner.setAttribute('class','animated fadeIn');
			gameover = true;
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
// 	// var cells = document.getElementsByClassName('box');
// 	// for(var x in cells) {
// 	// cells[i] = console.log(cells)
// 	// }	
// }

