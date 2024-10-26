#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* myString) {
    int length = strlen(myString);
    char* answer = (char*)malloc((length + 1) * sizeof(char));

    for (int i = 0; i < length; i++) {
        if (myString[i] == 'a') {
            answer[i] = 'A';
        } else if (myString[i] == 'A') {
            answer[i] = 'A';
        } else if (isupper(myString[i])) {
            answer[i] = tolower(myString[i]);
        } else {
            answer[i] = myString[i];
        }
    }
    answer[length] = '\0';
    return answer;
}