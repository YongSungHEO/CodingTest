// K번째수(Level1)
function solution(array, commands) {
    var answer = [];

    for (let command of commands) {
        let temp = array.slice(command[0] - 1, command[1]);
        temp.sort((a, b) => { return a - b });
        answer.push(temp[command[2] - 1]);
    }

    return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));


// 가장 큰 수
function solution(numbers) {
    var answer = '';

    numbers = numbers.map(number => {
        return number.toString();
    });
    answer = numbers.sort((a, b) => {
        return (b + a) - (a + b);
    }).join('');

    return numbers[0] === '0' ? '0' : answer;
}
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));


// H-Index
function solution(citations) {
    var answer = 0;

    citations.sort((a, b) =>  a - b);
    for (let i=0; i<citations.length; i++) {
        if (citations.length - i <= citations[i]) {
            answer = citations.length - i;
            break;
        }
    }

    return answer;
}
console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([1, 2, 3, 3, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10]));
console.log(solution([22, 42]));
