function sum(...args) {
    return args.reduce((acc, currentValue) => {
        return currentValue + acc;
    }, 0);
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum