function solution(phone_number) {
    let frontPhone_number = phone_number.substring(0, phone_number.length-4);
    let frontPhone_numberStar = frontPhone_number.replaceAll(/[0-9]/g, "*");
    let backPhone_number = phone_number.slice(-4);
    var answer = frontPhone_numberStar+backPhone_number;
    return answer;
}