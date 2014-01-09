var turn = "X";
var board = ['','','','','','','','',''];

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
		alert('X wins!');
		}
		if ( "O,O,O" == [board[0], board[1], board[2]].join() ||
		"O,O,O" == [board[3], board[4], board[5]].join() ||
		"O,O,O" == [board[6], board[7], board[8]].join() ||
		"O,O,O" == [board[0], board[3], board[6]].join() ||
		"O,O,O" == [board[1], board[4], board[7]].join() ||
		"O,O,O" == [board[2], board[5], board[8]].join() ||
		"O,O,O" == [board[0], board[4], board[8]].join() ||
		"O,O,O" == [board[6], board[4], board[2]].join() ) {
		alert('O wins!');
		}
	} 
}

// if ( "X,X,X" === 
// 	[board[0], board[1], board[2]].join() ||
// 	[board[3], board[4], board[5]].join() ||
// 	[board[6], board[7], board[8]].join() ||
// 	[board[0], board[4], board[8]].join() ||
// 	[board[6], board[4], board[2]].join() ) {
// 	alert('x wins!');
// }
