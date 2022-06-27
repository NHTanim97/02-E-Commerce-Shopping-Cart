
//-------- increment btn

function increment(incDec, sPrice, leftAmount){

    const inputBox = document.getElementById(incDec);

    // left ---
    const singlePrice = document.getElementById(sPrice);
    const leftItemAmount = document.getElementById(leftAmount);


    // right---
    const rightItmeAmount = document.getElementById('rightItmeAmount').innerHTML;

    const charge = document.getElementById('charge').innerHTML;
    const totalAmount = document.getElementById('totalAmount').innerHTML;


    if(inputBox.value >= 5){
        inputBox.value = 5;

       // if product Quentity >5 then red signal;
       if(inputBox.value = 5){
        inputBox.style.backgroundColor = 'red';
        inputBox.style.color = "white"
       }
    }

    else{
        inputBox.value ++;

        // count price amount left side
        const leftResult = parseInt(singlePrice.innerHTML) + parseInt(leftItemAmount.innerHTML);
        leftItemAmount.innerHTML = leftResult;


        // item amount right side
        const rightResult = parseInt(singlePrice.innerHTML) + parseInt(rightItmeAmount);
        document.getElementById('rightItmeAmount').innerHTML = rightResult;


        // total amount + shipping charge
        const allTotalAmount = rightResult + parseInt(charge);
        document.getElementById('totalAmount').innerHTML = allTotalAmount;

    }

}










// --------------decrement btn

function decrement(incDec, sPrice, leftAmount){

    // left---
    const inputBox = document.getElementById(incDec);

    const singlePrice = document.getElementById(sPrice);
    const leftItemAmount = document.getElementById(leftAmount);



    // if product Quentity <=5 then red signal;
    if(inputBox.value <= 5){
        inputBox.style.backgroundColor = 'white';
        inputBox.style.color = "black";
    }
    
    if(inputBox.value <= 0){
        inputBox.value = 0;

    }

    else{
        inputBox.value --;

         // count price amount left side
         const leftResult = parseInt(leftItemAmount.innerHTML) - parseInt(singlePrice.innerHTML);
         leftItemAmount.innerHTML = leftResult;


          // item amount right side
        const rightResult = parseInt(rightItmeAmount.innerHTML) - parseInt(singlePrice.innerHTML);
        document.getElementById('rightItmeAmount').innerHTML = rightResult;

    }

}