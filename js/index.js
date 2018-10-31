const n = parseInt(prompt('enter a Fibonacci number'));

function fibonacciLoop(n) {
    let firstNumber = 1;
    let secondNumber = 1;
    if (n === 1 || n === 2) {
        return firstNumber;
    }
    else if (n > 2) {
        for (let i = 3; i <= n; i++) {
            const nextNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = nextNumber;
        }
    }
    return secondNumber;
}


function fibonacciArray(n) {
    const fibArray = [1, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.pop();
}


function fibonacciRecursive(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/* 
function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
*/



const fibLoop = fibonacciLoop(n);
alert('Сycle method = ' + fibLoop);

const fibArray = fibonacciArray(n);
alert('Array method = ' + fibArray);

const fibRecursive = fibonacciRecursive(n);
alert('Recursive method = ' + fibRecursive);
