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
    const btnValue = getTextValueById('addDonationNoakhali');

    const decreseBalance = CurrentBalance -inputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValue + inputValue;
    document.getElementById('addDonationNoakhali').innerText = addingDonate;


    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-lg rounded-lg px-8 py-6 space-y-5 border-2">
            <p class="text-lg font-semibold">${inputValue} Taka is Donated for Donate for flood at Nowakhali, Bangladesh</p>
            <p class="text-secondaryText">${new Date().toLocaleString()}</p>
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
    const btnValueFeni = getTextValueById('feniAddBtn');

    const decreseBalance = CurrentBalanceFeni - feniInputValue;
    document.getElementById('current-balance').innerText = decreseBalance;

    const addingDonate = btnValueFeni + feniInputValue;
    document.getElementById('feniAddBtn').innerText = addingDonate;

    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-lg rounded-lg px-8 py-6 space-y-5 border-2">
            <p class="text-lg font-semibold">${feniInputValue} Taka is Donated for Donate for flood at Feni, Bangladesh</p>
            <p class="text-secondaryText">${new Date().toLocaleString()}</p>
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
    const btnValueInjured = getTextValueById('InjuredMovmentBtn');

    const decreseBalance = CurrentBalanceInjured - injuredMovmentInput;
    document.getElementById('current-balance').innerText = decreseBalance;
    
    const addingDonate = injuredMovmentInput + btnValueInjured;
    document.getElementById('InjuredMovmentBtn').innerText = addingDonate;

    const historySection = document.getElementById('historySection');
    const createDivEL = document.createElement('div');

    createDivEL.innerHTML = `
    
    <section class="lg:w-10/12 w-full mx-auto mb-4">
        <div class="shadow-lg rounded-lg px-8 py-6 space-y-5 border-2">
            <p class="text-lg font-semibold">${injuredMovmentInput} Taka is Donated for Donate for flood at Bangladesh</p>
            <p class="text-secondaryText">${new Date().toLocaleString()}</p>
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

    const colorChg = document.getElementById('historyBtn');
    colorChg.classList.add('bg-BtnColor')
    
});

document.getElementById('donationBtn').addEventListener('click', function(){
    document.getElementById('historySection').classList.remove('hidden')

    const mainPage = document.getElementById('mainPage');
    mainPage.classList.remove('hidden');
});