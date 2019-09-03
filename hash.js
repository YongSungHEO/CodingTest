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
