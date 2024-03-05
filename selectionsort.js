function selection_sort(arr){
 for(let i =0; i < arr.length;i++){
    let minelement = min_element(arr,i)
    if(minelement != i){
        let temp = arr[i];
        arr[i] = arr[min_element];
        arr[min_element]= temp;

    }
 }
}

function min_element(arr,i){
    let min_element = i;
    for(j=i+1; j <arr.length; j++ ) {
        if(arr[j] < arr[min_element]){
            min_element =j
        }
    }
    return min_element;
}