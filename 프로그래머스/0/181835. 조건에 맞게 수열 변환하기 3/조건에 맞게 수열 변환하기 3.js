function solution(arr, k) {
    if( k % 2 === 1) {
        return arr.map((x) => x * k );
    } else if ( k % 2 === 0 ) {
        return arr.map((x) => x + k );
    }
}