module.exports = function toReadable(number) {
    const map = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);
    if (number < 20) {
        return map.get(number);
    }
    if (number < 100) {
        const ones = number % 10,
            tens = number - ones,
            onesForHumans = map.get(ones),
            tensForHumans = map.get(tens);
        let result = tensForHumans;
        if (ones > 0) {
            result += " " + onesForHumans;
        }
        return result;
    }
    const tens = number % 100,
        hundreds = Math.floor(number / 100),
        hundredsForHumans = map.get(hundreds);
    let result = hundredsForHumans + " hundred";
    if (tens > 0) {
        result += " " + toReadable(tens);
    }
    return result;
};
