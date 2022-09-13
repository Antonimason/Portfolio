"use strict"

/*-------------MENU BAR--------------------- */
document.querySelector(".icon-menu").addEventListener("click", ()=>{
    document.querySelector(".lista").classList.toggle("show");
});

let seccion1 = document.querySelector("#seccion1");
let seccion2 = document.querySelector("#seccion2");
let seccion3 = document.querySelector("#seccion3");
let seccion4 = document.querySelector("#seccion4");


let secciones = [seccion1,seccion2,seccion3,seccion4];

secciones.forEach(seccion => seccion.addEventListener("click", ()=>{ document.querySelector(".lista").classList.toggle("show"); })); 


/*--------------SCROLL REVEAL------------------- */
ScrollReveal().reveal(".banner", { delay: 500 });
ScrollReveal().reveal(".imagenyo", { delay: 500 });
ScrollReveal().reveal(".yo", { delay: 1000 });
ScrollReveal().reveal(".about-contenedor", { delay: 500 });
ScrollReveal().reveal(".tema", { delay: 500 });
ScrollReveal().reveal(".estudios", { delay: 1500 });


/*------------SLIDER------------ */
(function() {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrownext = document.querySelector('#after');
    const arrowbefore = document.querySelector('#before');
    let value;

    setInterval(()=>{
        changePosition(1);
    },5000);

    arrownext.addEventListener('click', ()=> changePosition(1));

    arrowbefore.addEventListener('click', ()=> changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id); //obtener el elemento actual con su dataset
    
        value = currentElement;
        value += change; //al valor del data set actual le sumes el valor de los arrow
        if (value == 0 || value == sliders.length+1) { //slider
            value = value === 0 ? sliders.length : 1; 
        }

        sliders[currentElement-1].classList.toggle('slider_body--show');
        sliders[value-1].classList.toggle('slider_body--show');
    }
})

();
