const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // console.log(event);
    event.preventDefault();
    const sumaInputs = input1.value + input2.value; 
    pResult.innerHTML = 'Resultado: ' + sumaInputs;
}

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('titulo');
// h1.classList.toggle('pantalla');
// h1.classList.contains('pantalla');

// input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://placeimg.com/640/480/nature')
// pid.appendChild(img);