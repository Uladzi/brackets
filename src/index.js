module.exports = function check(str, bracketsConfig) {

    let arrBrackets = str.split("");

    if (str.length % 2 !== 0) {
        return false;
    }


    for (let i = 0; i < arrBrackets.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if ((arrBrackets[i] === bracketsConfig[j][0]) && (arrBrackets[i + 1] === bracketsConfig[j][1])) {
                arrBrackets.splice(i, 2);
                i = -1;

            } else {
                continue;
            }
        }
    }

    if (arrBrackets.length === 0) {
        return true;
    } else {
        return false;
    }
}
