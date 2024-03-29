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


// 탑(Level2)
function solution(heights) {
    var answer = [];

    answer.push(0);
    for (let i=1; i<heights.length; i++) {
        for (let j=i-1; j>=0; j--) {
            if (heights[i] < heights[j]) {
                answer.push(j + 1);
                break;
            }
            if (j === 0) {
                answer.push(0);
                break;
            }
        }
    }

    return answer;
}
console.log(solution([6,9,5,7,4]));
console.log(solution([3,9,9,3,5,7,2]));
console.log(solution([1,5,3,6,7,6,5]));


// 쇠막대기(Level2)
function solution(arrangement) {
    var answer = 0;
    let stack = [];

    for (let i=0; i<arrangement.length; i++) {
        if (arrangement[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (arrangement[i - 1] === '(') {
                answer += stack.length;
            } else {
                answer++;
            }
        }
    }
    
    return answer;
}
console.log(solution('()(((()())(())()))(())'));


// 다리를 지나는 트럭(Level2)
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let ongoingQueue = [];
    let timerQueue = [];
    let carWeight = 0;

    while (truck_weights.length || ongoingQueue.length) {
        answer++;
        if (carWeight + truck_weights[0] <= weight) {
            carWeight += truck_weights[0];
            ongoingQueue.push(truck_weights.shift());
            timerQueue.push(0);
        }
        timerQueue = timerQueue.map(val => { return ++val; });
        if (timerQueue[0] === bridge_length) {
            timerQueue.shift();
            carWeight -= ongoingQueue.shift();
        }
    }

    return answer + 1;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));


// 기능개발(Level2)
function solution(progresses, speeds) {
    var answer = [];

    while (progresses.length) {
        progresses = progresses.map((item, index) => {
            item += speeds[index];
            return item;
        });
        if (progresses[0] >= 100) {
            let publishCount = 1;
            for (let i=1; i<progresses.length; i++) {
                if (progresses[i] >= 100) {
                    publishCount++;
                } else {
                    break;
                }
            }
            progresses.splice(0, publishCount);
            speeds.splice(0, publishCount);
            answer.push(publishCount);
        }
    }

    return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
