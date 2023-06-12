/* IPHONE PLUS SECTION */
document.getElementById('iPhone-plus-btn').addEventListener('click', function(){
    const iphonePlusBtn = plusBtn('iPhone-input-field');
    
    /* IPHONE TOTAL PRICE for plus */
    const totalPlusPrice = totalPrice('iPhone-total-price', 'iPhone-input-field'); 
    
    /* Total subTotal */
    // const PlusSubTotal = plusSubTotal('iPhone-total-price', 'case-total-price');
});

/* IPHONE MINUS SECTION */
document.getElementById('iPhone-minus-btn').addEventListener('click', function(){
    const iphoneMinusBtn = minusBtn('iPhone-input-field');

    /* IPHONE TOTAL PRICE FOR MINUS */
    const totalMinusPrice = totalPrice('iPhone-total-price', 'iPhone-input-field'); 

    // const minusSubTotalValue =  plusSubTotal('iPhone-total-price', 'case-total-price');
});


/* CASE PLUS SECTION */
document.getElementById('case-plus-btn').addEventListener('click',function(){
    const casePlusBtn = plusBtn('case-input-field');
    
    /* CASE TOATL PRICE FOR PLUS */
    const casePlusTotalPrice = caseTotalPrice('case-total-price', 'case-input-field'); 

    // const casePlusSubTotalValue =  plusSubTotal('iPhone-total-price', 'case-total-price');
});

/* CASE MINUS SECTION */
document.getElementById('case-minus-btn').addEventListener('click', function(){
    const caseMinusBtn = minusBtn('case-input-field');

    /* CASE TOTAL PRICE FOR MINUS */
    const caseMinusTotalPrice = caseTotalPrice('case-total-price', 'case-input-field');

    // const caseMinusSubTotalValue =  plusSubTotal('iPhone-total-price', 'case-total-price');
});

document.getElementById('check-btn').addEventListener('click', function(){
    const finalResult = plusSubTotal('iPhone-total-price', 'case-total-price');
})

