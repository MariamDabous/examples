//odd
console.log("Odd");
for(var i=1; i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log("Multiples of 3");
for(var i=100; i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}

console.log("Sequence");
for(var i=4; i>-4; i-=1.5){
    console.log(i);
}

console.log("Sigma");
var sum=0;
for(var i=1; i<=100; i++){
    sum+=i;
}
console.log(sum);

console.log("Factorial");
var fact=1;
for(var i=1; i<=12; i++){
    fact*=i;
}
console.log(fact);