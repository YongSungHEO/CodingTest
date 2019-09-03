// 완주하지 못한 선수
function solution(participant, completion) {
    let key = new Map();
    
    completion.map(people => {
        if (!key.has(people)){
            key.set(people, 1);
        } else {
            key.set(people, key.get(people) + 1);
        }
    });

    for (let people of participant) {
        if (!key.has(people) || key.get(people) === 0) {
            return people;
        } else {
            key.set(people, key.get(people) - 1);
        }
    }
}


// 위장
function solution(clothes) {
    var answer = 1;
    let map = new Map();

    for (let cloth of clothes) {
        if (!map.has(cloth[1])) {
            map.set(cloth[1], 1);
        } else {
            map.set(cloth[1], map.get(cloth[1]) + 1);
        }
    }

    for (let value of map.values()) {
        answer *= (value + 1);
    }

    return answer - 1;
}
