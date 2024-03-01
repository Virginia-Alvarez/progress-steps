'use strict'

// setAttribute('disabled','') sirve para añadir atbto
// al html con la opcion desactiva como valor del atbto 

// botones
const btnPrev= document.querySelector('#prev');
const btnNext = document.querySelector('#next');

// circulos
const circles= document.querySelectorAll('.circle');
const progress= document.querySelector('.progress');
const steps= document.querySelector('.steps div');

//Barra de progreso
const progressBar= document.querySelector('#progress-bar')

//contador de pasos 

let currentStep= 1;
const MAXSTEPS= 4;
const MINSTEPS= 1;


function addActiveClass(currentStep){
    const circle = document.querySelector(`#step${currentStep}`);
    circle.classList.add('active');
}

function removeActiveClass(currentStep){
    const circle = document.querySelector(`#step${currentStep}`);
    circle.classList.remove('active');
}

function updateProgressBar(currentStep){
    progressBar.style.width = `${((currentStep - 1)/(MAXSTEPS - 1))*100}%`;
}


btnNext.addEventListener('click',()=>{
    currentStep++;
    updateProgressBar(currentStep);
    addActiveClass(currentStep);
    

    if(currentStep !== MINSTEPS){
        btnPrev.removeAttribute('disabled');
    }

    if(currentStep === MAXSTEPS) {
        btnNext.setAttribute('disabled','');
    }
    

})

btnPrev.addEventListener('click',()=>{
    removeActiveClass(currentStep); 
    currentStep--;
    updateProgressBar(currentStep);
    
    

    if(currentStep !== MAXSTEPS){
        btnNext.removeAttribute('disabled');
    }

    if(currentStep === MINSTEPS) {
        btnPrev.setAttribute('disabled','');
    }

})