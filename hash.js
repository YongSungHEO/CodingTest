// 완주하지 못한 선수(Level1)
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


// 위장(Level2)
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


// 베스트앨범(Level3)
const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];
function solution(genres, plays) {
    var answer = [];
    var map = new Map();
    var map2 = new Map();

    for (let i=0; i<genres.length; i++) {
        if (map.has(genres[i])) {
            map.set(genres[i], map.get(genres[i]) + plays[i]);
        } else {
            map.set(genres[i], plays[i]);
        }
        map2.set(i, plays[i]);
    }

    var sortedMap = new Map([...map].sort((a, b) => {
        return b[1] - a[1];
    }));

    var sortedMap2 = new Map([...map2].sort((a, b) => {
        return b[1] - a[1];
    }));

    for (let key of sortedMap.keys()) {
        let count = 0;
        for (let key2 of sortedMap2.keys()) {
            if (genres[key2] === key && count < 2) {
                count++;
                answer.push(key2);
            }
        }       
    }

    return answer;
}
