// 가운데 글자 가져오기(Level1)
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


// 2016년(Level1)
function solution(a, b) {
    var answer = '';
    let array = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let d = new Date('2016-' + a.toString() + '-' + b.toString());
    answer = array[d.getDay()];
    return answer;
}


// 같은 숫자는 싫어(Level1)
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


// 두 정수 사이의 합(Level1)
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


// 나누어 떨어지는 숫자 배열(Level1)
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


// 문자열 내 마음대로 정렬하기(Level1)
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


// 문자열 내 p와 y의 개수(Level1)
function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i].toLowerCase() === 'p') {
            pCount++;
        }
        if (s[i].toLowerCase() === 'y') {
            yCount++;
        }
    }
    if ((pCount || yCount) && pCount !== yCount) {
        answer = false;
    }

    return answer;
}


// 문자열 내림차순으로 배치하기
function solution(s) {
    var answer = '';
    let upperReg = /^[A-Z]*$/;
    let upper = [];
    let lower = [];

    for (let i=0; i<s.length; i++) {
        if (upperReg.test(s[i])) {
            upper.push(s[i]);
        } else {
            lower.push(s[i]);
        }
    }
    upper.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
    lower.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
    answer = lower.join('') + upper.join('');
    return answer;
}


// 문자열 다루기 기본
function solution(s) {
    var answer = true;
    let regular = /^[0-9]*$/;

    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    if (!regular.test(s)) {
        return false;
    }
    return answer;
}


// 서울에서 김서방 찾기
function solution(seoul) {
    var answer = '';
    let index = seoul.findIndex(item => { return item === 'Kim' });
    answer = `김서방은 ${index}에 있다`;
    return answer;
}


// 소수 찾기
function solution(n) {
    var answer = 0;
    let numbers = [];
    let check = [2, 3, 5, 7];

    for (let i=0; i<n; i++) {
        numbers.push(i + 1);
    }
    let resultArr = findPrime(numbers, check);
    function findPrime(numbers, check) {
        for (let i=0; i<numbers.length; i++) {
            if (numbers[i] % check[0] === 0 && numbers[i] !== check[0]) {
                numbers.splice(i, 1);
            }
        }
        check.splice(0, 1);
        if (check.length === 0) {
            numbers.splice(0, 1);
        }
        return check.length === 0 ? numbers : findPrime(numbers, check);
    }
    answer = resultArr.length;
    return answer;
}
console.log(solution(10));
console.log(solution(5));
