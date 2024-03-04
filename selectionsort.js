function selection_sort(){
 for
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