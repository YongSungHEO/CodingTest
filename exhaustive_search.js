// 모의고사
function solution(answers) {
    var answer = [];
    let student1 = [1, 2, 3, 4, 5];
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let map = new Map();

    map.set(1, 0);
    map.set(2, 0);
    map.set(3, 0);
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === student1[i % student1.length]) {
            map.set(1, map.get(1) + 1);
        }
        if (answers[i] === student2[i % student2.length]) {
            map.set(2, map.get(2) + 1);
        }
        if (answers[i] === student3[i % student3.length]) {
            map.set(3, map.get(3) + 1);
        }
    }
    let sortedMap = new Map([...map].sort((a, b) => {
        return b[1] - a[1];
    }))
    let max;
    for (let key of sortedMap.keys()) {
        if (!answer.length) {
            if (sortedMap.get(key)) {
                max = sortedMap.get(key)
                answer.push(key);
            }
        } else {
            if (max === sortedMap.get(key)) {
                answer.push(key);
            }
        }
    }
    return answer;
}
console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));
