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
<<<<<<< HEAD
=======

>>>>>>> aedde26c1a061fc8db315f2283ca16b2695d5988

};

// Do not edit below this line
module.exports = repeatString;
