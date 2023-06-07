
    let board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    let currentPlayer = 'X';
    let moves = 0;

    function makeMove(row, col) {
      if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementsByClassName('board')[0].children[row * 3 + col].innerText = currentPlayer;
        moves++;

        if (checkWin(row, col)) {
          document.getElementsByClassName('message')[0].innerText = currentPlayer + ' wins!';
          disableBoard();
        } else if (moves === 9) {
          document.getElementsByClassName('message')[0].innerText = "It's a tie!";
          disableBoard();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function checkWin(row, col) {
      return (
        checkRow(row) ||
        checkColumn(col) ||
        checkDiagonal() ||
        checkAntiDiagonal()
      );
    }

    function checkRow(row) {
      return (
        board[row][0] === currentPlayer &&
        board[row][1] === currentPlayer &&
        board[row][2] === currentPlayer
      );
    }

    function checkColumn(col) {
      return (
        board[0][col] === currentPlayer &&
        board[1][col] === currentPlayer &&
        board[2][col] === currentPlayer
      );
    }

    function checkDiagonal() {
      return (
        board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer
      );
    }

    function checkAntiDiagonal() {
      return (
        board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer
      );
    }

    function disableBoard() {
      let squares = document.getElementsByClassName('board')[0].children;
      for (let i = 0; i < squares.length; i++) {
        squares[i].removeAttribute('onclick');
      }
    }

      function resetGame() {
      board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      currentPlayer = 'X';
      moves = 0;
      gameEnded = false;

      let squares = document.getElementsByClassName('board')[0].children;
      for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = '';
      }
     document.getElementsByClassName('message')[0].innerText = '';
    }