/* ----- Dark-mode toggle ----- */
const html   = document.documentElement;
const toggle = document.getElementById('themeToggle');
const store  = localStorage.getItem('darkMode');
if (store === 'true') html.classList.add('dark');

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('darkMode', html.classList.contains('dark'));
});

/* ----- Dynamic year in footer ----- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ----- Animate skill bars on scroll ----- */
const bars = document.querySelectorAll('.skills__card .bar');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.width = e.target.style.getPropertyValue('--w'); }
  });
},{threshold:0.6});
bars.forEach(bar=>{ bar.style.width='0'; observer.observe(bar); });
