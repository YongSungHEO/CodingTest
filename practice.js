// 가운데 글자 가져오기
function solution(s) {
    var answer = '';

    if (s.length % 2 !== 0) {
        answer = s[Math.ceil(s.length / 2) - 1];
    } else {
        answer = s[s.length / 2 - 1];
        answer += s[s.length / 2 ];
    }
    return answer;
}
console.log(solution('abcde'));
console.log(solution('qwer'));
