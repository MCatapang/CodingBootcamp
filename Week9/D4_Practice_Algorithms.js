/* 
medications == list of objects
each object == {name: "", treatableSymptoms: []}
treatableSymptoms == []
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

function webMD(ailments, meds) {
    // Declare empty variables for use later
    let output = []
    
    // Determine how many symptom matches each medication has
    let tracker = [];
    for (let i = 0; i < meds.length; i++) {
        let symptomMatchCounter = 0;
        for (let j = 0; j < ailments.length; j++) {
            if (meds[i].treatableSymptoms.includes(ailments[j])) {
                symptomMatchCounter++;
            }
        }
        let medsName = meds[i].name;
        tracker.push({"counter": symptomMatchCounter, "name": medsName});
    }

    // Create an array of symptom match counters
    let counterArray = [];
    for(let i=0; i<tracker.length; i++) {
        counterArray.push(tracker[i].counter);
    }

    // Determine which number from `counterArray` is the largest
    let biggestCounter = Math.max(...counterArray);
    
    // Determine which medication has the aforementioned largest number
    for(let i=0; i<tracker.length; i++) {
        if(tracker[i].counter == biggestCounter) {
            output.push(tracker[i].name);
        }
    }

    // Takes care of the edge case when there are 0 matches
    if(biggestCounter == 0) {
        return([]);
    } else {
        return output;
    }
}

console.log(webMD(["pain", "existential dread"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/