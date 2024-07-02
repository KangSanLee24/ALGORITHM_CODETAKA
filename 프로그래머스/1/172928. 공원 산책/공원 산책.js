function solution(park, routes) {
  const hight = park.length;
  const width = park[0].length;

  let currentRow = 0;
  let currentCol = 0;

  const ops = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (let i = 0; i < hight; i++) {
    for (let j = 0; j < width; j++) {
      if (park[i][j] === "S") {
        currentRow = i;
        currentCol = j;
        break;
      }
    }
  }

  for (const route of routes) {
    const [op, n] = route.split(" ");
    const [row, col] = ops[op];
    let newRow = currentRow;
    let newCol = currentCol;
    let validMove = true;

    for (let k = 1; k <= +n; k++) {
      newRow += row;
      newCol += col;

      if (
        newRow < 0 ||
        newRow >= hight ||
        newCol < 0 ||
        newCol >= width ||
        park[newRow][newCol] === "X"
      ) {
        validMove = false;
        break;
      }
    }

    if (validMove) {
      currentRow = newRow;
      currentCol = newCol;
    }
  }

  return [currentRow, currentCol];
}