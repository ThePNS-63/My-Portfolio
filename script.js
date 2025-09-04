const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending…';

  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      status.textContent = 'Message sent — thank you! 🙌';
      form.reset();
    } else {
      const json = await res.json();
      status.textContent = json?.error || 'Oops — something went wrong.';
    }
  } catch (err) {
    status.textContent = 'Network error. Try again later.';
  }

  setTimeout(() => status.textContent = '', 5000); // clear after 5s
});
