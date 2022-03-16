function climbingLeaderboard(ranked, player) {
    let result = [];
    const filteredArr = [...new Set(ranked)];
    
    for (let score of player) {
        if (score >= filteredArr[0]) {
            result.push(1);
        } else if (score < filteredArr[filteredArr.length - 1]) {
            result.push(filteredArr.length + 1);
        } else {
            result.push(recursion(score, filteredArr));
        }
    }
    
    console.log(result);
    return result;
}

function recursion(score, filteredArr) {
    let start = 0;
    let end = filteredArr.length - 1;
    
    while (true) {
        const mid = Math.floor((start + end) / 2);
        
        if (filteredArr[mid] === score) {
            return mid + 1;
        } else if (filteredArr[mid] > score && filteredArr[mid + 1] < score) {
            return mid + 2;
        } else if (filteredArr[mid - 1] > score && filteredArr[mid] < score) {
            return mid + 1;
        }
        
        if (score < filteredArr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
