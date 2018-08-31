//let productName = 'iPhone X';
//alert(productName);

//productName = 'Nokia 3200';
//alert(productName);

// const userName = prompt('Enter your name');
// const greetings = 'Hello, ' + userName;
// alert(greetings);

// const userAge = parseInt(prompt('Enter your age'));
// // parseFloat
// const nextAge = addOne(userAge);
// alert(nextAge);

// function addOne(val) {
//     const result = val + 1;
//     return result;
// }

// Should increase price by 10%

// const oldPrice = parseFloat(prompt('Enter price'));
// const newPrice = calPrice(oldPrice);
// alert(newPrice);

// function calPrice(price) {
//     return price*1.1;
// }

function checkAge(age) {
    if (age >= 18 && age < 100) {
        return 'You are adult';
    } else if (age > 100) {
        return 'You are middle age';
    } else {
        return 'You are kid';
    }
}

const userAge = parseInt(prompt('Enter your age'));
const message = checkAge(userAge);
alert(message);

// switch
// Math.sqrt(4)

const a = parseFloat(prompt('Enter A'));

function solveQuadr(a, b, c) {
    return 'X1 = ' + x1 + ' X2 = ' + x2;
}

const result solveQuadr(a,b,c);
alert(result);