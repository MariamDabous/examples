function RemoveNegatives(a, b, c){
    var y =[];
    arr = [a, b, c];
    for( var i=0 ; i< arr.length;i++){
        if(arr[i]>=0){
            
            y.push(arr[i]);
        }

    }
    return y;
}

x =  RemoveNegatives(5, -1, 4);
console.log(x);