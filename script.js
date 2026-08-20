const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const savedTheme = localStorage.getItem('fidelia-theme');
if (savedTheme === 'light') body.classList.add('light');
function updateThemeButton(){
  const light = body.classList.contains('light');
  themeLabel.textContent = light ? 'Dark mode' : 'Light mode';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.querySelector('.theme-icon').textContent = light ? '☾' : '☼';
}
updateThemeButton();
themeToggle.addEventListener('click',()=>{
  body.classList.toggle('light');
  localStorage.setItem('fidelia-theme', body.classList.contains('light') ? 'light' : 'dark');
  updateThemeButton();
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(e)=>{
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
let ticking = false;
function parallax(){
  const y = window.scrollY;
  parallaxEls.forEach(el=>{
    const speed = Number(el.dataset.parallax || 0);
    const rect = el.getBoundingClientRect();
    const offset = (rect.top + rect.height/2 - innerHeight/2) * speed;
    el.style.transform = `translate3d(0, ${offset * -1}px, 0)`;
  });
  ticking = false;
}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(parallax);ticking=true;}},{passive:true});
parallax();

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
