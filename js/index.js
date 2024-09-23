// uitilitis part !

function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}
function getTextValueById(id){
    return parseFloat(document.getElementById(id).innerText);
}

// ======================================================================== //

document.getElementById('modelBtn1').addEventListener('click', function(){
    const inputValue = getInputValueById('donateInputValue');
    if(inputValue <= 0 || isNaN(inputValue)){
       return  alert("Please provid a valid input")
    }
    const CurrentBalance = getTextValueById('current-balance');
    const btnValue = getTextValueById('addDonationNoakhali');

    const decreseBalance = CurrentBalance -inputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValue + inputValue;
    document.getElementById('addDonationNoakhali').innerText = addingDonate;
    

});

document.getElementById('modelBtn2').addEventListener('click', function(){
    const feniInputValue = getInputValueById('inputValueFeni');
    if(feniInputValue <= 0 || isNaN(feniInputValue)){
        return  alert("Please provid a valid input")
     }
    const CurrentBalanceFeni = getTextValueById('current-balance');
    const btnValueFeni = getTextValueById('feniAddBtn');

    const decreseBalance = CurrentBalanceFeni - feniInputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValueFeni + feniInputValue;
    document.getElementById('feniAddBtn').innerText = addingDonate;

});

document.getElementById('modelBtn3').addEventListener('click', function(){
    const injuredMovmentInput = getInputValueById('InjuredMovment');
    if(injuredMovmentInput <= 0 || isNaN(injuredMovmentInput)){
        return  alert("Please provid a valid input")
     }
    const CurrentBalanceInjured = getTextValueById('current-balance');
    const btnValueInjured = getTextValueById('InjuredMovmentBtn');

    const decreseBalance = CurrentBalanceInjured - injuredMovmentInput;
    document.getElementById('current-balance').innerText = decreseBalance;
    
    const addingDonate = injuredMovmentInput + btnValueInjured;
    document.getElementById('InjuredMovmentBtn').innerText = addingDonate;

})

// Blog page !

document.getElementById("blogPage").addEventListener('click', function(){
    window.location.href = '/blog.html'
})