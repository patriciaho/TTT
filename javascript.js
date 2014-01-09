var turn = "X";
var board = ['','','','','','','','',''];
var xWins = 0;
var oWins = 0;

function myClick(cell) {
    if (cell.innerHTML == '') {
    	if (turn == "X") {
        turn = "O";
    	} else {
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
		// xWins += 1;
		// if (banner.innerHTML == 'X wins!') {
		// };
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
		// oWins += 1;
		// location.reload();
		// document.getElementById('wintrackero').innerHTML = "O = " + xWins;
		}
	} 
}

function reset() {
	banner.innerHTML = "Tic Tac Toe"
	a.innerHTML = "";
	b.innerHTML = "";
	c.innerHTML = "";
	d.innerHTML = "";
	e.innerHTML = "";
	f.innerHTML = "";
	g.innerHTML = "";
	h.innerHTML = "";
	i.innerHTML = "";
}

// if ( "X,X,X" === 
// 	[board[0], board[1], board[2]].join() ||
// 	[board[3], board[4], board[5]].join() ||
// 	[board[6], board[7], board[8]].join() ||
// 	[board[0], board[4], board[8]].join() ||
// 	[board[6], board[4], board[2]].join() ) {
// 	alert('x wins!');
// }
