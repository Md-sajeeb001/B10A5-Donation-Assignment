// uitilitis part !

function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
};
function getTextValueById(id){
    return parseFloat(document.getElementById(id).innerText);
};

// ======================================================================== //


document.getElementById('modelBtn1').addEventListener('click', function(){
    const inputValue = getInputValueById('donateInputValue');
    if(inputValue <= 0 || isNaN(inputValue)){
       return  alert("Please provid a valid input")
    }
    const CurrentBalance = getTextValueById('current-balance');
    if(inputValue > CurrentBalance){
       return alert('Your do not have enough money to donate!')
    }
    const btnValue = getTextValueById('addDonationNoakhali');

    const decreseBalance = CurrentBalance -inputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValue + inputValue;
    document.getElementById('addDonationNoakhali').innerText = addingDonate;


    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-md border border-slate-200 rounded-lg lg:px-8 py-6 space-y-5 mx-3 px-5">
            <p class="text-lg font-semibold">${inputValue} Taka is Donated for Donate for flood at Noakhali, Bangladesh</p>
            <p class="text-secondaryText lg:bg-white bg-slate-300 lg:px-0 lg:py-0 px-6 py-4">${new Date().toLocaleString()}</p>
        </div>
    </section>
    `
    historySection.appendChild(createDivEL);
    
});

document.getElementById('modelBtn2').addEventListener('click', function(){
    const feniInputValue = getInputValueById('inputValueFeni');
    if(feniInputValue <= 0 || isNaN(feniInputValue)){
        return  alert("Please provid a valid input")
     }
    const CurrentBalanceFeni = getTextValueById('current-balance');
    if(feniInputValue > CurrentBalanceFeni){
        return alert('Your do not have enough money to donate!')
     }
    const btnValueFeni = getTextValueById('feniAddBtn');

    const decreseBalance = CurrentBalanceFeni - feniInputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValueFeni + feniInputValue;
    document.getElementById('feniAddBtn').innerText = addingDonate;

    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-md border border-slate-200 rounded-lg lg:px-8 py-6 space-y-5 mx-3 px-5">
            <p class="text-lg font-semibold">${feniInputValue} Taka is Donated for Donate for flood at Feni, Bangladesh</p>
            <p class="text-secondaryText lg:bg-white bg-slate-300 lg:px-0 lg:py-0 px-6 py-4">${new Date().toLocaleString()}</p>
        </div>
    </section>
    `
    historySection.appendChild(createDivEL);

});

document.getElementById('modelBtn3').addEventListener('click', function(){
    const injuredMovmentInput = getInputValueById('InjuredMovment');
    if(injuredMovmentInput <= 0 || isNaN(injuredMovmentInput)){
        return  alert("Please provid a valid input")
     }
    const CurrentBalanceInjured = getTextValueById('current-balance');
    if(injuredMovmentInput > CurrentBalanceInjured){
        return alert('Your do not have enough money to donate!')
     }
    const btnValueInjured = getTextValueById('InjuredMovmentBtn');

    const decreseBalance = CurrentBalanceInjured - injuredMovmentInput;
    document.getElementById('current-balance').innerText = decreseBalance;
    
    const addingDonate = injuredMovmentInput + btnValueInjured;
    document.getElementById('InjuredMovmentBtn').innerText = addingDonate;

    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-md border border-slate-200 rounded-lg lg:px-8 py-6 space-y-5 mx-3 px-5">
            <p class="text-lg font-semibold">${injuredMovmentInput} Taka is Donated for Donate for flood at, Bangladesh</p>
            <p class="text-secondaryText lg:bg-white bg-slate-300 lg:px-0 lg:py-0 px-6 py-4">${new Date().toLocaleString()}</p>
        </div>
    </section>
    `
    historySection.appendChild(createDivEL);


});

// Blog page !
document.getElementById("blogPage").addEventListener('click', function(){
    window.location.href = './blog.html'
});

// =========================History section========================= //

document.getElementById('historyBtn').addEventListener('click', function(){
    const mainPage = document.getElementById('mainPage');
    mainPage.classList.add('hidden');

    document.getElementById('historySection').classList.remove('hidden')

    // history btn !
    document.getElementById('historyBtn').classList.add('bg-BtnColor');
    
    // donation btn !
    document.getElementById('donationBtn').classList.remove('bg-BtnColor')
    
});

document.getElementById('donationBtn').addEventListener('click', function(){
    document.getElementById('historySection').classList.add('hidden')

    const mainPage = document.getElementById('mainPage');
    mainPage.classList.remove('hidden');

    // history btn !
    document.getElementById('historyBtn').classList.remove('bg-BtnColor');
    
    // donation btn !
    document.getElementById('donationBtn').classList.add('bg-BtnColor')

});