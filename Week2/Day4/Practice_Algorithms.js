//  Value Present in Array

    var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7] 
    ];

    function isPresent2d(arr2d, value) {
        for (i=0; i<arr2d.length; i++) {
            var miniArray = arr2d[i];     // can be condensed into the next line of code
            for (j=0; j<miniArray.length; j++) {
                if (miniArray[j]==value) {
                    return true;
                }
            }
        }
        return false;
    }

    isPresent2d(arr2d, 6);
    
    console.log(isPresent2d(arr2d, 6));




// Return Value from Sub-Arrays

    var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7] 
    ];

    function flatten(arr2d) {
        var flat = [];
        for(i=0; i<arr2d.length; i++) {
            for(j=0; j<arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
            }
        }
        console.log(flat);
        return flat;
    }

    flatten(arr2d);