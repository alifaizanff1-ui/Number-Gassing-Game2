const btn1 = document.querySelector('.btn1 button');
const btn2 = document.querySelector('.btn2 button');
const btn3 = document.querySelector('.btn3 button');
const win = new Audio('e.mp3')
const worng = new Audio('w.mp3')
const heading = document.querySelector('.topic h2');
const body = document.querySelector('body');
const logo = document.querySelector('.f h3');
const login = document.querySelector('.sign h3');
const img =document.querySelector('.image img')
btn1.addEventListener('click' ,() =>  {
body.style.backgroundColor = 'rgb(150, 0, 0)'
heading.innerText = "Wrong Guess! Try Again ❌"
img.style.display='none';
worng.play();

})
btn2.addEventListener('click' ,() =>  {
body.style.backgroundColor = 'rgb(9, 128, 0)'
heading.innerText = "You Won! 🔥 Mastery Level!"
img.style.display ='block';
win.play();
})
btn3.addEventListener('click' ,() =>  {
body.style.backgroundColor = 'rgb(150, 0, 0)'
heading.innerText = "Wrong Guess! Try Again ❌"
img.style.display='none';
worng.play();
})


