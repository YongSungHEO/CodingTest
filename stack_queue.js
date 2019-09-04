// 프린터(Level2)
function solution(priorities, location) {
    var answer = 0;

    while (Math.max.apply(null, priorities) !== priorities[location] || location !== 0) {
        if (priorities[0] === Math.max.apply(null, priorities)) {
            answer++;
            priorities.splice(0, 1);
        } else {
            let temp = priorities.splice(0, 1);
            priorities.push(temp[0]);
        }
        if (location === 0) {
            location = priorities.length - 1;
        } else {
            location--;
        }
    }

    return answer + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
