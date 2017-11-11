function chessBoard(size) {
  size = size || 8;
  chessBoard = "";
  startEmpty = true;

  for (var i = 0; i < size; i++) {
    if (startEmpty) {
      generateRow(true, size);
      chessBoard +="\n";
      startEmpty = !startEmpty;
    } else {
      generateRow(false, size);
      chessBoard +="\n";
      startEmpty = !startEmpty;
    }
  }

  return chessBoard;
}

function generateRow(startEmpty, size) {
  if (startEmpty) {
    for (var j = 0; j < size; j++) {
      if (j % 2 === 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    }
  } else {
    for (var j = 0; j < size; j++) {
      if (j % 2 === 0) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }
  }
}

console.log(
  "\nHere's your chessboard:\n\n" + chessBoard()
);
