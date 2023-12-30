const stringManipulation = {
    getUpperCase: (strArray) => {
        const newArray = []
        for(const word of strArray){
            newArray.push(word.toUpperCase());
        }
        return newArray;
    },
    getLowerCase: (strArray) => strArray.map((word) => word.toLowerCase()),

    getIndexPosition: (strArray, data) => strArray.indexOf(data),
}

module.exports = stringManipulation;