function RemoveNegatives () {
    var j=0;
    var y =[];
    arr = [5, -4, 2];
    for( var i=0 ; i< arr.length; i++){
        if(arr[i]>=0){
            y[j]=arr[i];
            j++;
        }

    }
    return y;
}

x =  RemoveNegatives();
console.log(x);