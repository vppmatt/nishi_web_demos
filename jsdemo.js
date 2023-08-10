function someFun(){
    if(true){
        let localvar =  100 ;
        console.log(localvar); 
    }
    console.log(localvar);
    function m2(){
        console.log(localvar)
    }
}
console.log(localvar);