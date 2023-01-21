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
ScrollReveal().reveal(".yo", { delay: 500 });
ScrollReveal().reveal(".about-contenedor", { delay: 500 });
ScrollReveal().reveal(".tema", { delay: 500 });

/*--------------------INTERSECTION OBSERVER------------- */


const studies = document.querySelector(".estudios");

const options = {
    threshold: 0.3
  }

const verifyVisibility = (entries) => {
    const entry = entries[0];
    console.log(entry);

    if (entry.isIntersecting) {

    let htmlLoad = document.querySelector('.html-load')
    htmlLoad.style.animationName = "going100";

    let cssLoad = document.querySelector('.css-load')
    cssLoad.style.animationName = "going100";

    let jsLoad = document.querySelector('.js-load')
    jsLoad.style.animationName = "going80";

    let bootsLoad = document.querySelector('.bootstrap-load')
    bootsLoad.style.animationName = "going50";

    let jqueryLoad = document.querySelector('.jquery-load')
    jqueryLoad.style.animationName = "going70";

    let reactLoad = document.querySelector('.react-load')
    reactLoad.style.animationName = "going70";


    
    
    let contar = (barra, elemento, porcentaje) => {
        let cuenta = 0;
        setInterval(() => {
            if(cuenta == porcentaje) {
                clearInterval();
            } else {
                cuenta = cuenta + 1;
                elemento.innerHTML = cuenta + "%";
                barra.style.width = `${cuenta}%`;
            }
        }, 20);
    }

    contar(htmlLoad, document.querySelector('#htmlNumber'), 100);
    contar(cssLoad, document.querySelector('#cssNumber'), 100);
    contar(jsLoad, document.querySelector('#jsNumber'), 80);
    contar(bootsLoad, document.querySelector('#bootsNumber'), 50);
    contar(jqueryLoad, document.querySelector('#jqueryNumber'), 70);
    contar(reactLoad, document.querySelector('#reactNumber'), 70);
}
    

    
}
const observer = new IntersectionObserver(verifyVisibility, options);

observer.observe(studies);



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
