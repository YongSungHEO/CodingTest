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


// 2016년
function solution(a, b) {
    var answer = '';
    let array = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let d = new Date('2016-' + a.toString() + '-' + b.toString());
    answer = array[d.getDay()];
    return answer;
}


// 같은 숫자는 싫어
function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    for (let i=0; i<arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i + 1]);
        }
    }
    return answer;
}
