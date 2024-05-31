function solution(card1, card2, goal) {
  let p1 = 0;
  let p2 = 0;
    
  for (i = 0; i < goal.length; i++) {
    if ((p1<card1.length) && goal[i] === card1[p1]) {
      p1++;
    } else if ((p2<card2.length) && goal[i] === card2[p2]) {
      p2++;
    } else {
      return "No";
    }
  }
    
  return "Yes";
}