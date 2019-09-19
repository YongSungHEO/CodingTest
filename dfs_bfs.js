// 타켓 넘버
var answer = 0;
function solution(numbers, target) {
    recursive(numbers, target, 0, 0);
    return answer;
}

function recursive(numbers, target, index, sum) {
    if (index === numbers.length) {
        if (sum === target) {
            answer++;
        }
        return;
    }
    return recursive(numbers, target, index + 1, sum + numbers[index])
            + recursive(numbers, target, index + 1, sum - numbers[index]);
}
console.log(solution([1, 1, 1, 1, 1], 3));


// 네트워크
function solution(n, computers) {
    var answer = 0;
    let visited = [];
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            answer++;
            recursive(i, n, computers);
            function recursive(index, n, computers) {
                visited[index] = 1;
                for (let j=1; j<n; j++) {
                    if (!visited[j] && computers[index][j] === 1) {
                        recursive(j, n, computers);
                    }
                }
            }
        }
    }

    return answer;
}
console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));


// 단어 변환
function solution(begin, target, words) {
    var answer = 0;
    let visited = Array(words.length).fill(0);

    if (!words.some(item => item === target)) {
        return answer;
    }

    for (let i=0; i<words.length; i++) {
        if (!visited[i]) {
            if (i === 0) {
                answer++;
                recursive(i, begin);
            } else {
                recursive(i, words[i]);
            }
            function recursive(index, begin) {
                visited[index] = 1;
                if (begin === target) {
                    return answer;
                }
                if (isChangable(begin, words[index])) {
                    answer++;
                    recursive(index + 1, words[index]);
                }
            }
        }
    }

    return answer;
}
function isChangable(begin, word) {
    let count = 0;
    for (let i=0; i<word.length; i++) {
        if (begin[i] !== word[i]) {
            count++;
        }
    }
    return count === 1 ? true : false;
}
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
console.log(solution('hit', 'hhh', ['hhh', 'hht']));


// 여행 경로
function solution(tickets) {
    var answer = [];
    let visited = Array(tickets.length).fill(0);

    tickets.sort((a, b) => {
        if (a[1] > b[1]) return 1
        else return 0;
    });

    for (let i=0; i<tickets.length; i++) {
        if (tickets[i][0] === 'ICN') {
            visited[i] = 1;
            answer.push(tickets[i][0]);
            answer.push(tickets[i][1]);
            break;
        }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    while (visited.reduce(reducer) !== tickets.length) {
        for (let i=0; i<tickets.length; i++) {
            if (!visited[i]) {
                if (tickets[i][0] === answer[answer.length - 1]) {
                    answer.push(tickets[i][1]);
                    visited[i] = 1;
                }
            }
        }
    }
    return answer;
}
console.log(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]));
console.log(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']]));
