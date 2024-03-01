'use strict'

// botones
const btnPrev= document.querySelector('#prev');
const btnNext = document.querySelector('#next');

// circulos
const circles= document.querySelectorAll('.circle');
const progress= document.querySelector('.progress');
const steps= document.querySelector('.steps div');
const progressBar= document.querySelector('.progress')

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


btnNext.addEventListener('click',()=>{
    currentStep++;
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

    if(currentStep !== MAXSTEPS){
        btnNext.removeAttribute('disabled');
    }

    if(currentStep === MINSTEPS) {
        btnPrev.setAttribute('disabled','');
    }

})