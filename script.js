let body = document.querySelector('body');
let img = document.querySelector('#profile img');

function toggleDarkMode() {
  body.classList.toggle('dark');
  
  if(body.classList.contains('dark')){
    img.setAttribute('src', './assets/img-perfil-dark.jpg');
  }else{
    img.setAttribute('src', './assets/img-perfil-light.jpg');
  }
}

document.querySelector('#handle').addEventListener('click', () => {
  toggleDarkMode();
})