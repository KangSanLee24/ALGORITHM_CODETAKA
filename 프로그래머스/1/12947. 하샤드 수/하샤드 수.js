function solution(x) {
    let addNumber = (x+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
    if (x%addNumber==0) return true;
    else return false;
}