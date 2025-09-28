//Timer 1
const deadline = new Date('2025-10-05T00:00:00Z');


const els ={
  d: document.getElementById('cd-days'),
  h: document.getElementById('cd-hours'),
  m: document.getElementById('cd-mins'),
  s: document.getElementById('cd-secs')
};

function pad(n){
  return String(n).padStart(2, '0');
}
function tick(){
  const now = new Date();
  let ms = deadline - now;

  if(ms <= 0){
    els.d.textContent = '00';
    els.h.textContent = '00';
    els.m.textContent = '00';
    els.s.textContent = '00';
    clearInterval(timer);
    return;
  }
  const totalsecond = Math.floor(ms / 1000);
  const days = Math.floor(totalsecond / 86400);
  const hours = Math.floor((totalsecond % 86400) / 3600);
  const minuts = Math.floor((totalsecond % 3600) / 60);
  const second = totalsecond % 60;

  els.d.textContent = pad(days);
  els.h.textContent = pad(hours);
  els.m.textContent = pad(minuts);
  els.s.textContent = pad(second);
}
tick();
const timer = setInterval(tick, 1000);
//Timer 2
const deadline2 = new Date('2025-10-12T00:00:00Z'); // Set your desired date

const els2 = {
  d: document.getElementById('cd-days-2'),
  h: document.getElementById('cd-hours-2'),
  m: document.getElementById('cd-mins-2'),
  s: document.getElementById('cd-secs-2')
};

function tick2(){
  const now = new Date();
  let ms = deadline2 - now;

  if(ms <= 0){
    els2.d.textContent = '00';
    els2.h.textContent = '00';
    els2.m.textContent = '00';
    els2.s.textContent = '00';
    clearInterval(timer2);
    return;
  }
  const totalsecond = Math.floor(ms / 1000);
  const days = Math.floor(totalsecond / 86400);
  const hours = Math.floor((totalsecond % 86400) / 3600);
  const minuts = Math.floor((totalsecond % 3600) / 60);
  const second = totalsecond % 60;

  els2.d.textContent = pad(days);
  els2.h.textContent = pad(hours);
  els2.m.textContent = pad(minuts);
  els2.s.textContent = pad(second);
}
tick2();
const timer2 = setInterval(tick2, 1000);





 //scroll-card
 const scrollbox = document.getElementById("scrollbox");
 const arrowleft = document.getElementById("arrowleft");
 const arrowright = document.getElementById("arrowright");

 arrowleft.addEventListener("click", () =>{
  scrollbox.scrollBy({
    left: -300,
    behavior: "smooth"
  });
 });

 arrowright.addEventListener("click", ()=>{
  scrollbox.scrollBy({
    left: 300,
    behavior: "smooth"
  });
 });
 //scroll-card
 const scrollcard = document.getElementById("scrollcard");
 const scrollleft2 = document.getElementById("scroll-left-2");
 const scrollright2 = document.getElementById("scroll-right-2");

 scrollleft2.addEventListener("click", () =>{
  scrollcard.scrollBy({
    left: -300,
    behavior: "smooth"
  });
 });

 scrollright2.addEventListener("click", ()=>{
  scrollcard.scrollBy({
    left: 300,
    behavior: "smooth"
  });
 });
 //scroll-card-two
 const scrollcard3 = document.getElementById("scrollcard3");
 const scrollleft = document.getElementById("scroll-left-3")
 const scrollright = document.getElementById("scroll-right-3");

 scrollleft.addEventListener("click", ()=>{
  scrollcard3.scrollBy({
    left:-350,
    behavior:"smooth"
  });
 });

 scrollright.addEventListener("click", ()=>{
  scrollca.scrollBy({
    left: 350,
    behavior: "smooth"
  });
 });
 scrollright.addEventListener("click", ()=>{
  scrollcard3.scrollBy({
    left: 350,
    behavior: "smooth"
  });
 });