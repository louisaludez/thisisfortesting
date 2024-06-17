let text = document.getElementById('text');
window.addEventListener('scroll',() => {
 var value = window.scrollY;
 text.style.marginRight = value * 1.5 + 'px';
 console.log(value)});