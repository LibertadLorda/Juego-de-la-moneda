let caraCont= 0;
let cruzCont= 0;
let moneda = document.querySelector(".moneda");

const tirarBtn = document.querySelector(".boton-tirar");
const reiniciarBtn = document.querySelector(".boton-reiniciar");

tirarBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random()*2);

    moneda.style.animation = "none";
    
    if(i==0){
        setTimeout(function(){
            moneda.style.animation = 'gira-cara 3s';
        }, 100);
        caraCont++;        
    }
    else{
        setTimeout(function(){
            moneda.style.animation = 'gira-cruz 3s forwards';
        }, 100);
        cruzCont++;
    }
    setTimeout(actualizarCont, 3000);
});

  
function actualizarCont(){
    document.querySelector("#contador-cara").textContent = `Cara: 
    ${caraCont}`; 
    document.querySelector("#contador-cruz").textContent = `Cruz: 
    ${cruzCont}`; 
}

reiniciarBtn.addEventListener("click",()=>{
    caraCont = 0;
    cruzCont = 0;
    actualizarCont();
});

