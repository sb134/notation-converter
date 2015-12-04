/**
 * Converts number from one notation to another one
 * @param {string} num
 * @param {number} to
 * @param {number} [from=10] (16, 2, 8, 10)
 * @returns {string}
 */
function convertNotation(num, to, from) {
    if (from === undefined) {
        from = 10;
    }
    
    switch (from) {
        case 10:
            num = Number(num);
            break;
        case 16:
            num = Number("0x"+num);
            break;
        case 2:
            num = Number("0b"+num);
            break;
        case 8:
            num = Number("0o"+num);
            break;
    }
    
    if (isNaN(num)) {
        throw new Error("Wrong number");
    }
    
    return num.toString(to).toUpperCase();
}