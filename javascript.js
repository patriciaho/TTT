var gameover = false;
var turn = "O";
var turnCount = 0;
var board = ['','','','','','','','',''];
var xWins = 0;
var oWins = 0;
var draw = 0;

function setupPage() {
	var cells = document.getElementsByClassName('box');
	for(var i in cells) {
		cells[i].onclick = myClick;
	}
}

function myClick() {
	body.setAttribute('class', '');
	var cell = this;
	winstatus.innerHTML = turn + " turn"
    if (cell.innerHTML == '' && gameover == false) {
    	if (turn == "X") {
        	turn = "O";
    	} 
    	else if (turn == "O") {
        	turn = "X";
    	}
    	cell.innerHTML= turn;
    	board[cell.id.charCodeAt(0)-97] = turn;
	 	if ( "X,X,X" == [board[0], board[1], board[2]].join() ||
		"X,X,X" == [board[3], board[4], board[5]].join() ||
		"X,X,X" == [board[6], board[7], board[8]].join() ||
		"X,X,X" == [board[0], board[3], board[6]].join() ||
		"X,X,X" == [board[1], board[4], board[7]].join() ||
		"X,X,X" == [board[2], board[5], board[8]].join() ||
		"X,X,X" == [board[0], board[4], board[8]].join() ||
		"X,X,X" == [board[6], board[4], board[2]].join() ) {
			banner.innerHTML = ('X wins');
			endBanner();
			gameover = true;
			xWins += 1;
			document.getElementById('wintrackerx').innerHTML = "X Wins= " + xWins;
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
			endBanner();
			gameover = true;
			oWins += 1;
			document.getElementById('wintrackero').innerHTML ="O Wins= " + oWins;
		}
		if (gameover == false && board[0] != '' && board[1] != '' && board[2] != '' && 
			board[3] != '' && board[4] != '' && board[5] != '' && 
			board[6] != '' && board[7] != '' && board[8] != '' ) {
			banner.innerHTML = ('Draw');
			endBanner();
			gameover = true;
			draw += 1;
			document.getElementById('drawtracker').innerHTML ="Draw = " + oWins;
		}
	} 
}

function endBanner() {
	banner.setAttribute('style','background: #DF38B1');
	banner.setAttribute('class','animated fadeIn');
}

function reset() {
	gameover = false;
	body.setAttribute('class', 'animated fadeIn');
	banner.innerHTML = "Tic Tac Toe";
	banner.setAttribute('style','background: rgba(100, 100, 100, 1)');
	banner.setAttribute('class', '');
	var cells = document.getElementsByClassName('box');
	for(var i in cells) {
		cells[i].innerHTML = "";
	}
	for(var n=0; n < cells.length; n++) {
		board[n] = "";
	}	
}

