
//const button = document.querySelector('button');
//const popup = document.querySelector('.body-wrapper');
//const close = document.querySelector('.popup-close');
//
//button.addEventListener('click', () =>{
//  popup.style.display = 'block'
//});
//
//close.addEventListener('click', () =>{
//  popup.style.display = 'none'
//});
//
//popup.addEventListener('click', () =>{
//  popup.style.display = 'none'
//});

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password  = document.querySelector('#pwd');
const submit  = document.querySelector('#submit');
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let pattern = /^[a-zA-Z]{6,12}$/;
  const validUser = username.value;

  if(pattern.test(validUser)){
    feedback.textContent = 'You are good to go!'
  } else {
    feedback.textContent = 'Username must contain letters only & 6 - 12 characters.'
  };
  
  console.log(pattern.test(username.value));
});