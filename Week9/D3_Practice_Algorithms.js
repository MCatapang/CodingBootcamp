const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(num, updatedVals, collection) { 
    let output = {};
    for(let i=0; i<collection.length; i++) {
        if(collection[i].hasOwnProperty('id')) {
            if(collection[i].id === num) {
                for(keys in collection[i]) {
                    output[keys] = collection[i][keys];
                }
                for(keys in updatedVals) {
                    if(collection[i].hasOwnProperty(keys)) {
                        output[keys] = updatedVals[keys];
                    }
                }
            }
        }
    }
    if(Object.keys(output).length === 0) {
        return null
    }
    else {
        return output;
    }
}








console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));
