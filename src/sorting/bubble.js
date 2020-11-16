
// Implementation of Bubble Sort 
export function BubbleSort(arr) {
    let len = arr.length;
    
    function transposition(j) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                transposition(j);
            }
        }
    }

    return arr;
}

// Implementation of Bubble Sort (advanced)
export function BubbleSortA(arr) {
    let len = arr.length;
    let swapped;

    function transposition(j) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
    }

    do {
        swapped = false;
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                transposition(j);

                swapped = true;
            }
        }
    } while (swapped);
    
    return inputArr;
}

