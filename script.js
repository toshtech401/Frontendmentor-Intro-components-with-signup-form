const submit = document.querySelector('.submit');

const inputs = document.querySelectorAll('.input');
submit.addEventListener("click" , ()=>{
    inputs.forEach(input =>{
        if(input.firstElementChild.checkValidity()){
            input.firstElementChild.classList.add('error');
            input.lastElementChild.classList.add('active');
        }
    })
})