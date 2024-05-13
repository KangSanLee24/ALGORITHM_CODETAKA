function solution(price, money, count) {
    let needMoney = price * count*(count+1)/2 //등차수열
    return (needMoney-money) >0 ? (needMoney-money) : 0;
}