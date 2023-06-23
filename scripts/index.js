let body = document.querySelector('body');
let img = document.querySelector('#profile img');

function toggleDarkMode() {
  
  body.classList.toggle('dark');
  
  if(body.classList.contains('dark')){
    img.setAttribute('src', './assets/img-perfil-dark.png');
  }else{
    img.setAttribute('src', './assets/img-perfil-light.png');
  }
}


document.querySelector('#handle').addEventListener('click', () => {
  toggleDarkMode();
})