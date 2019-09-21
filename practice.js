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


// 두 정수 사이의 합
function solution(a, b) {
    var answer = 0;

    if (a === b) {
        return a;
    }
    for (let i=0; i<=Math.abs(a - b); i++) {
        if (a - b > 0) {
            answer += b + i;
        } else {
            answer += a + i;
        }
    }
    return answer;
}


// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    if (!answer.length) {
        return [-1];
    }
    answer.sort((a, b) => { return a - b });
    return answer;
}


// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var answer = [];
    let forSort = [];
    let map = new Map();
    
    for (let i=0; i<strings.length; i++) {
        forSort.push(strings[i][n]);
        map.set(i, strings[i][n]);
    }
    let sortedMap = new Map([...map].sort((a, b) => { 
                        if (a[1] > b[1]) {
                            return 1;
                        } else if (a[1] < b[1]) {
                            return -1;
                        } else {
                            if (strings[a[0]] > strings[b[0]]) {
                                return 1;
                            } else if (strings[a[0]] < strings[b[0]]) {
                                return -1;
                            }
                            return 0;
                        }
                    }));
    for (let key of sortedMap.keys()) {
        answer.push(strings[key]);
    }
    
    return answer;
}
