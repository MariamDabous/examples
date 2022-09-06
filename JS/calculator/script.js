var numberelement = document.getElementById('display')
var number1;
var number2;
var con;
var result;

function press(content){
    if (numberelement.innerText==0){
        numberelement.innerText="";
    }
    if(number1==" "){
        numberelement.innerText = "";
    }
    
    numberelement.innerText += content;
    number1=parseFloat(numberelement.innerText);

}
function clr(){
    numberelement.innerText=0;
    number1=""
    number2=""
    con=""
}

function setOP(operator){
    con= operator;
    number2=number1;
    console.log(number2)
    
    number1=" ";
    console.log(number1)
    //numberelement.innerText=number1;
    // var y = numberelement.innerText;
    //numberelement.innerText="";
    //console.log(number1,number2);
    // press(number2);
    
    
    
}
function calculate(){
    console.log(con)
    console.log(typeof number1, typeof number2)
    if(con =='*'){
        // numberelement.innerText=0;
        
        result= number1 * number2;
        console.log(result)

    }
    else if(con=='+'){
        result= number1+number2;
    }
    else if(con=='/'){
        result= number2/number1;
    }
    else if(con=='-'){
        result= number2-number1;
    }
    // console.log(result)
    numberelement.innerText = result;
    
}