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
