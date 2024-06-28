function solution(players, callings) {
  const nameAndIndex = new Map();
  const IndexAndName = new Map();

  for (let i = 0; i < players.length; i++) {
    nameAndIndex.set(players[i], i);
    IndexAndName.set(i, players[i]);
  }

  for (let calling of callings) {
    let currIndex = nameAndIndex.get(calling);
    if (currIndex > 0) {
      let prevIndex = currIndex - 1;

      let prevPlayer = IndexAndName.get(prevIndex);

      nameAndIndex.set(calling, prevIndex);
      nameAndIndex.set(prevPlayer, currIndex);

      IndexAndName.set(prevIndex, calling);
      IndexAndName.set(currIndex, prevPlayer);
    }
  }

  let result = [];
  for (let i = 0; i < players.length; i++) {
    result.push(IndexAndName.get(i));
  }

  return result;
}