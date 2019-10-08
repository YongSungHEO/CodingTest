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


// 문자열 내림차순으로 배치하기(Level1)
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


// 문자열 다루기 기본(Level1)
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


// 서울에서 김서방 찾기(Level1)
function solution(seoul) {
    var answer = '';
    let index = seoul.findIndex(item => { return item === 'Kim' });
    answer = `김서방은 ${index}에 있다`;
    return answer;
}


// 소수 찾기(Level1)
function solution(n) {
    var answer = 0;
    let numbers = [];

    for (let i=0; i<=n; i++) {
        numbers.push(i);
    }
    numbers[1] = 0;
    for (let i=2; i<=n; i++) {
        if (!numbers[i]) continue;
        for (let j=2*i; j<=n; j+=i) {
            numbers[j] = 0;
        }
    }
    for (let i=0; i<=n; i++) {
        if (numbers[i]) {
            answer++;
        }
    }
    return answer;
}
console.log(solution(10));
console.log(solution(5));


// 수박수박수박수박수박수?(Level1)
function solution(n) {
    var answer = '';
    let stringArr = ['수', '박'];

    for (let i=0; i<n; i++) {
        answer += i % 2 === 0 ? stringArr[0] : stringArr[1];
    }
    return answer;
}
console.log(solution(3));
console.log(solution(4));


// 문자열을 정수로 바꾸기(Level1)
function solution(s) {
    var answer = 0;
    answer = parseInt(s, 10);
    return answer;
}
console.log(solution(1234));
console.log(solution(-1234));


// 시저 암호(Level1)
function solution(s, n) {
    var answer = '';
    let lowerReg = /^[a-z]*$/;

    for (let i=0; i<s.length; i++) {
        if (s.charCodeAt(i) === 32) {
            answer += ' ';
            continue;
        }
        if (lowerReg.test(s[i]) && s.charCodeAt(i) + n > 122
            || !lowerReg.test(s[i]) && s.charCodeAt(i) + n > 90) {
            answer += String.fromCharCode((s.charCodeAt(i) + n) - 26);
        } else {
            answer += String.fromCharCode((s.charCodeAt(i) + n));
        }
    }
    return answer;
}
console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));


// 약수의 합(Level1)
function solution(n) {
    var answer = 0;

    for (let i=1; i<=n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}
console.log(solution(12));
console.log(solution(5));


// 이상한 문자 만들기(Level1)
function solution(s) {
    var answer = '';
    let index = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            index = 0;
            continue;
        }
        answer += index % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
        index++;
    }
    return answer;
}
console.log(solution('try hello world'));


// 자릿수 더하기(Level1)
function solution(n) {
    var answer = 0;
    let str = n.toString();

    for (let i=0; i<str.length; i++) {
        answer += parseInt(str[i], 10);
    }
    return answer;
}
console.log(solution(123));
console.log(solution(987));


// 자연수 뒤집어 배열로 만들기(Level1)
function solution(n) {
    return (n + '').split('').reverse().map(item => parseInt(item, 10));
}
console.log(solution(12345));


// 정수 내림차순으로 배치하기(Level1)
function solution(n) {
    return parseInt((n + '').split('').sort((a, b) => b > a).join(''));
}
console.log(solution(118372));


// 정수 제곱근 판별(Level1)
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
console.log(solution(121));
console.log(solution(3));


// 제일 작은 수 제거하기(Level1)
function solution(arr) {
    var answer = [];
    if (arr.length === 1) {
        return [-1];
    }
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
    return answer;
}
console.log(solution([4,3,2,1]));
console.log(solution([10]));


// 짝수와 홀수(Level1)
function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}


// 최대공약수와 최소공배수(Level1)
function solution(n, m) {
    var answer = [];
    let max = Math.max(n, m);
    let min = Math.min(n, m);

    for (let i=1; i<=min; i++) {
        if (min % i === 0 && max % i === 0) {
            answer[0] = i;
            answer[1] = min * max / i;
        }
    }   
    return answer;
}
console.log(solution(3, 12));
console.log(solution(2, 5));


// 콜라츠 추측(Level1)
function solution(num) {
    var answer = -1;
    if (num === 1) {
        return 0;
    }
    for (let i=0; i<500; i++) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        if (num === 1) {
            return i + 1;
        }
    }
    return answer;
}
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));


// 평균 구하기(Level1)
function solution(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) / arr.length;
}


// 하샤드 수(Level1)
function solution(x) {
    let arr = x.toString().split('');
    let digitSum = arr.reduce((accumulator, currentValue) => {
        return parseInt(accumulator, 10) + parseInt(currentValue, 10);
    });
    return x % digitSum === 0 ? true : false;
}
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));


// 핸드폰 번호 가리기(Level1)
function solution(phone_number) {
    var answer = '';
    let length = phone_number.length
    for (let i=0; i<length - 4; i++) {
        answer += '*';
    }
    answer += phone_number.substring(length - 4, length);
    return answer;
}
console.log(solution('01033334444'));
console.log(solution('027778888'));


// 행렬의 덧셈(Level1)
function solution(arr1, arr2) {
    var answer = [[]];
    for (let i=0; i<arr1.length; i++) {
        let item = [];
        for (let j=0; j<arr1[i].length; j++) {
            item.push(arr1[i][j] + arr2[i][j]);
        }
        answer[i] = item;
    }
    return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));
console.log(solution([[1],[2]], [[3],[4]]));


// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    answer.push(x);
    for (let i=1; i<n; i++) {
        answer.push(answer[i - 1] + x);
    }
    return answer;
}
console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
