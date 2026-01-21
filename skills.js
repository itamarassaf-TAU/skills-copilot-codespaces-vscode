function calculateNumbers(var1, var2) {
    console.log("Calculating the sum and product of", var1, "and", var2);
    const sum = var1 + var2;
    const product = var1 * var2;
    return { sum, product };
}

module.exports = { calculateNumbers };  