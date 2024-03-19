const display = (content)=>{
    calcScreen.value += content
}
// clear content of calcscreen 
const clearAllcontent = () =>{
    calcScreen.value = ""
    calcScreen.placeholder="0"
}
// result 
const showResult = () =>{
    try{
        console.log("TRY BLOCK");
        calcScreen.value = eval(calcScreen.value)

    }
    catch(err){
console.log("CATCH BLOCK");
console.log(err);
calcScreen.value=""
calcScreen.placeholder = "Invalid Expression!!!"
    }
    finally{
        console.log("finally block:Task Completed");
    }
}
// clear last digit 
const removelast = () =>{
    calcScreen.value=calcScreen.value.slice(0,-1)  
}