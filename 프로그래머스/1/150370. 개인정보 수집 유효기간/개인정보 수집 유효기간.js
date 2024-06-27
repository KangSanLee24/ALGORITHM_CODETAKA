function solution(today, terms, privacies) {
  let answer = [];
  const [currentYear, currentMonth, currentDay] = today.split(".").map(Number);

  let termObject = {};
  terms.forEach((term) => {
    let [termType, termMonth] = term.split(" ");
    termObject[termType] = Number(termMonth);
  });

  privacies.forEach((privacy, index) => {
    let [date, termType] = privacy.split(" ");
    let [year, month, day] = date.split(".").map(Number);

    let validMonths = termObject[termType];
    year += Math.floor((month - 1 + validMonths) / 12);
    month = ((month - 1 + validMonths) % 12) + 1;

    if (
      year < currentYear ||
      (year === currentYear && month < currentMonth) ||
      (year === currentYear && month === currentMonth && day <= currentDay)
    ) {
      answer.push(index + 1);
    }
  });

  return answer;
}