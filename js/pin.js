function generatePin(){
    
    const generatePin = Math.round(Math.random()*10000);
    const pinString = generatePin + '';
    if(pinString.length==4){
        document.getElementById('display-pin').value=pinString;
    }

}

document.getElementById('key-pad').addEventListener('click',function(event){
    let typedNumber = document.getElementById('typed-numbers');
       const number = event.target.innerText;
       if(isNaN(number)){
           if(number=='C'){
               typedNumber.value ='';
           }
       }
       else{
        
        let previousNumber = typedNumber.value;
        const newNumber = previousNumber+number ;
          typedNumber.value=newNumber;
  
       }
})

 
 document.getElementById('submite').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin').value;
    const typePin = document.getElementById('typed-numbers').value;
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');
    if(displayPin==typePin){
           success.style.display='block';
           fail.style.display='none';
    }
    else{
        success.style.display='none';
           fail.style.display='block';
    }
 })
 