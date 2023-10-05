// menu click function
var menu = document.getElementById('menu');
var close = document.getElementById('close');



function Menu(e){
   menu.style.display = 'none';
   close.style.display = 'block';
  let ul = document.getElementById('ul');
  if(ul.classList.contains('opacity-0')){
    ul.classList.add('opacity-100');
  }
}


function Close(e){
  close.style.display = 'none';
  menu.style.display = 'block';
 let ul = document.getElementById('ul');
 if(ul.classList.contains('opacity-100')){
   ul.classList.remove('opacity-100');
 }
}


// bacground-color when scroll style in javscript
window.addEventListener('scroll', () =>{
    const nav =   document.querySelector('nav');
 if(window.scrollY > 300){
    nav.classList.add('scroll-nav');
 }else{
    nav.classList.remove('scroll-nav')
 }
});

// get the button
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Show the button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top:0, behavior: "smooth" });
});
