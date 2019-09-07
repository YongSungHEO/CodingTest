// 4
function solution(words, queries) {
    var answer = [];

    for (let i=0; i<queries.length; i++) {
        answer[i] = 0;
        let filteredWords = words.filter(item => {
            return queries[i].length === item.length;
        });
        if (queries[i][0] === '?') {
            queries[i] = queries[i].replace(/\?/g, '');
            answer[i] = filteredWords.filter(word => {
                            return word.slice(-queries[i].length) === queries[i]
                        }).length;
        } else {
            queries[i] = queries[i].replace(/\?/g, '');
            answer[i] = filteredWords.filter(word => {
                            return word.slice(0, queries[i].length) === queries[i]
                        }).length;
        }
    }

    return answer;
}
console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"]));
