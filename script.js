const slides = [...document.querySelectorAll(".slide")];
const gradients = [...document.querySelectorAll(".gradient-layer")];
const durations = [3000, 4000, 3000, 4000];
let current = 0;
let timer;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  gradients.forEach((gradient, i) => gradient.classList.toggle("active", i === index));
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
  timer = setTimeout(nextSlide, durations[current]);
}

showSlide(current);
timer = setTimeout(nextSlide, durations[current]);

document.addEventListener("visibilitychange", () => {
  clearTimeout(timer);
  if (!document.hidden) timer = setTimeout(nextSlide, durations[current]);
});


const music=document.getElementById('bgMusic');

if(music){
 music.volume=0.08;
 let started=false;
 const start=()=>{
   if(started) return;
   started=true;
   music.play().catch(()=>{});
 };
 ['pointerdown','touchstart'].forEach(ev=>document.addEventListener(ev,start,{once:true}));
 document.addEventListener('visibilitychange',()=>{
   if(document.hidden){music.pause();}
   else if(started){music.play().catch(()=>{});}
 });
}
