// 1
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const consumer = parseInt(n[1].split('\n')[0]);
    const messages = n[1].split('\n').splice(1, n[1].split('\n').length);
    let entireTime = [];
    let indexQueue = [];
    let consumer1 = 0;
    let consumer2 = 0;

    entireTime = Array(consumer.length).fill(0);
    for (let i=0; i<consumer.length; i++) {
        indexQueue.push(i);
    }
    while (messages.length) {
        let time = parseInt(messages.shift());
        let index = indexQueue.shift();
        entireTime[index] += time;
        if (consumer1 === 0) {
            consumer1 = time;
            continue;
        }
        if (consumer1 > consumer2) {
            consumer2 += time;
            continue;
        } else {
            consumer1 += time;
            continue;
        }
    }
    console.log(Math.max(consumer1, consumer2));
});


// 2
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split("\n");
    const count = n[1];
    let numbers = n[0].split(' ');
    for (let i=0; i<numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
    }
    let array = numbers.reduce((list, element) => {
        let newList = [];
        list.forEach(item => {
            for (let i=item.length; i>=0; i--) {
                let newItem = [].concat(item);
                newItem.splice(i, 0, element);
                newList.push(newItem);
            }
        });
        return newList;
    }, [[]]);
    let sumArr = [];
    for (let i=0; i<array.length; i++) {
        sumArr.push(array[i].join(''));
    }
    sumArr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(sumArr[count - 1]);
});


// 4
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split("\n");
    const count = n[0];
    const people = n[1];
    let newPeople = [];
    let max = 0;
    for (let item of people) {
        if (item === '0' || item === '1') {
            newPeople.push(item);
        }
    }
    let count1 = 0;
    let count2 = 0;
    for (let i=0; i<newPeople.length; i++) {
        if (newPeople[i] === '1') {
            count1++;
        } else {
            count2++;
        }
        if (count1 === 2) {
            max = Math.max(max, count2);
            count1 = 1;
            count2 = 0;
        }
    }
    console.log(Math.ceil(max / 2));
});


// 5
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split('\n');
    const size = n[0];
    const conyLocation = n[1];

    if (conyLocation[0] > size[0] || conyLocation[2] > size[2]) {
        console.log('fail');
    }
    let minTime = parseInt(conyLocation[0]) + parseInt(conyLocation[2]);
    let count = factorial(minTime)
                / (factorial(parseInt(conyLocation[0])) * factorial(parseInt(conyLocation[2])));
    function factorial(n) {
        let result = 1;
        for (let i=2; i<=n; i++) {
            result *= i;
        }
        return result;
    }
    console.log(minTime + '\n' + count);
});
