//using
"use strict";

//we get value of the inputs with id "know" and "lenght"
const know_number = document.getElementById("know");
const lenght_primes = document.getElementById("lenght");

//we call selector with class result-know
const result_know = document.querySelector(".result-know");
const result_show = document.querySelector(".result-show");

//we call id of the buttons
const go_btn = document.getElementById("go");
const show_btn = document.getElementById("show");

//we create element
const result_one = document.createElement('div');
const print_all = document.createElement('div');

//we create event with go_btn
go_btn.addEventListener('click', () => {

//value input
let prime_number = parseInt(know_number.value);

    let cp = 0;

    for(let i = 2; i <= prime_number; i++)
    {
        if(prime_number % i === 0)
        {
             cp++;
        }
    }
    if(cp === 1)
    {
        result_one.innerHTML = `The number ${prime_number} is prime`;
    }
    else
    {
        result_one.innerHTML = `The number ${prime_number} is not prime`;
    }
    result_know.appendChild(result_one);
});

//we create event to button with id "show"
show_btn.addEventListener('click', () => {

    let lenght_prime = parseInt(lenght_primes.value);

    let i = 1;
    let cp = 0;
    let strinArray = "";
    let primes_array = [];
    while(i <= lenght_prime)
    {
        for (let j = 2; j <= i; j++) 
        {
            if(i % j === 0)
            {
                cp++;
            }
            
        }
        if(cp === 1)
        {
            strinArray += " " + i;
        }
        cp = 0;
       
        i++;
    }
    
    print_all.innerHTML = `${strinArray}`;
    print_all.classList.add("max");
    result_show.appendChild(print_all);
    console.log(primes_array);
})

