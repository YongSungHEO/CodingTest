// 1. 오픈채팅방
function solution(record) {
    var answer = [];
    var key = new Map();
    record.map(item => {
        let splited = item.split(' ');
        if (splited[0] !== 'Leave') {
            key.set(splited[1], splited[2]);   
        }
    });
    
    record.map(item => {
        let splited = item.split(' ');
        if (splited[0] === 'Enter') {
            answer.push(key.get(splited[1]) + '님이 들어왔습니다.');
        } else if (splited[0] === 'Leave') {
            answer.push(key.get(splited[1]) + '님이 나갔습니다.');
        }
    });
    
    return answer;
}
