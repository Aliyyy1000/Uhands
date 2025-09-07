// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.site-nav');
    if(!nav) return;
    if(getComputedStyle(nav).display === 'flex' || nav.style.display === 'flex'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '70px';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
    }
  })
});

// Reveal on scroll
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight*0.86) el.classList.add('show');
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Quick contact form -> mailto
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Contact from UHANDS website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:uhands2023@gmail.com?subject=${subject}&body=${body}`;
  });
}

// WhatsApp quick message button
const waBtn = document.getElementById('waSend');
if(waBtn){
  waBtn.addEventListener('click', function(){
    const name = document.getElementById('name')?.value.trim() || 'Friend';
    const text = encodeURIComponent(`Hello UHANDS, my name is ${name}. I would like to get in touch regarding support / partnership.`);
    window.open('https://wa.me/2348023045703?text=' + text, '_blank');
  });
}
