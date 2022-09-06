function CityMess(element){
    alert("Loading weather report...")

}

var remove1 = document.querySelector("#but");
function rem1(){
    remove1.remove();
}

function convert(r){
    var x = document.querySelectorAll(".num")
    //var m = document.querySelector(".sel").value;
    //console.log(r)
    if(r=="2"){
    for( var i=0; i < x.length ; i++){
        //let paragraphs = x[i].children
        // let paragraphs = x[i].children
        let pList = x[i].querySelectorAll('p')
        for(let j=0; j<pList.length; j+=1){
            let p = pList[j].firstChild
            var z= p.innerText;
            //console.log(z)
            var y= z*(9/5)+32;
            //console.log(y)
            p.innerText= Math.round(y) ;

            // let symbol = pList[j].lastChild
            // get the innerText of the p
            // do the calculations
            //then change the innerText of p
            }
    }
    //console.log(x)
}
else if(r=="1"){
        for( var i=0; i < x.length ; i++){
            let pList = x[i].querySelectorAll('p')
            for(let j=0; j<pList.length; j+=1){
                let p = pList[j].firstChild
                var z= p.innerText;
                console.log(z)
                p.innerText= Math.round((z-32)*5/9)
            }
        }
                }
                    }