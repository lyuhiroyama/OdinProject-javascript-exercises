const repeatString = function(str, num) {

    if (num >= 0) {
        let someStr = "";
        for(let i=0; i<num; i++) {
            someStr += str;
        }
        return someStr;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
