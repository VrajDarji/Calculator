const btns=document.querySelectorAll("button");
const text=document.getElementById('result');
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
       const Bvalue =(btns[i].textContent);
       if(Bvalue==='C'){
        clearResult();
       }
       else if(Bvalue==='='){
        calculate();
       }
       else{
        appendValue(Bvalue);
       }
    })
    
}
function clearResult(){
    text.value="";
}
function calculate(){
    text.value=eval(text.value)
}
function appendValue(Bvalue){
text.value+=Bvalue;

}