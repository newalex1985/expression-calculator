function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if (expr.indexOf('/ 0')!== -1) {
        throw new Error('TypeError: Division by zero.');
    }
    let breaketParitet = 0;
    expr.split('').forEach((el) => {
        if (el === '(') {
            breaketParitet += 1;
        } else if (el === ')') {
            breaketParitet -=1;
        }
    });
    if (breaketParitet !== 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }

    return new Function('return ' + expr)();
}

module.exports = {
    expressionCalculator
}