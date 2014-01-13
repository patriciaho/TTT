//Set global variables
var gameover = false;
var turn = "O";
var turnCount = 0;
var board = ['','','','','','','','',''];
var xWins = 0;
var oWins = 0;
var draw = 0;

//Body onload function
function setupPage() {
	var cells = document.getElementsByClassName('box');
	for(var i in cells) {
		cells[i].onclick = myClick;
	}
	winstatus.innerHTML = "X turn";
}

//Click, turn change, win count function
function myClick() {
	body.setAttribute('class', '');
	var cell = this;
    if (cell.innerHTML == '' && gameover == false) {
    	winstatus.innerHTML = turn + " turn";
    	if (turn == "X") {
        	turn = "O";
    	} 
    	else if (turn == "O") {
        	turn = "X";
    	}
    	cell.innerHTML= turn;
    	board[cell.id.charCodeAt(0)-97] = turn;
	 	if ( winTrue("X,X,X") ) {
			banner.innerHTML = ('X wins');
			endRound();
			xWins += 1;
			document.getElementById('wintrackerx').innerHTML = "X Wins = " + xWins;
		}
		if ( winTrue("O,O,O") ) {
			banner.innerHTML = ('O wins');
			endRound();
			oWins += 1;
			document.getElementById('wintrackero').innerHTML ="O Wins = " + oWins;
		}
		if (gameover == false && board[0] != '' && board[1] != '' && board[2] != '' && 
			board[3] != '' && board[4] != '' && board[5] != '' && 
			board[6] != '' && board[7] != '' && board[8] != '' ) {
			banner.innerHTML = ('Draw');
			endRound();
			draw += 1;
			document.getElementById('drawtracker').innerHTML ="Draw = " + draw;
		}
	} 
}

//Win logic evaluation conditions
function winTrue(combo) {
	return (combo == [board[0], board[1], board[2]].join() ||
		combo == [board[3], board[4], board[5]].join() ||
		combo == [board[6], board[7], board[8]].join() ||
		combo == [board[0], board[3], board[6]].join() ||
		combo == [board[1], board[4], board[7]].join() ||
		combo == [board[2], board[5], board[8]].join() ||
		combo == [board[0], board[4], board[8]].join() ||
		combo == [board[6], board[4], board[2]].join()
	)
}

//End round resets
function endRound() {
	banner.setAttribute('style','background: #DF38B1');
	banner.setAttribute('class','animated fadeIn');
	gameover = true;
	document.getElementById('results').style.display = 'block';
}

//New game reset
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
	turn = "O"
	winstatus.innerHTML = "X turn";
	document.getElementById('results').style.display = 'none';
}

