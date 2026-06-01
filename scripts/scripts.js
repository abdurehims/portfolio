// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Restore saved preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeIcon.className = 'fa-solid fa-sun';
}

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    // lock scroll on both html and body for all mobile browsers
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinkItems.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === '#' + entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(s => observer.observe(s));

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.project-card, .stat, .tool-card');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
});

// Contact form handler — EmailJS
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID 
// 3. Create an Email Template → copy the Template ID   template_4fspubq
//    Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// 5. Replace the three placeholders below with your actual values

const EMAILJS_PUBLIC_KEY = 'KzrHfr7-TI58_DN8N'; // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID = 'service_f484m5a'; // e.g. 'service_xxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_4fspubq'; // e.g. 'template_xxxxxx'

emailjs.init(EMAILJS_PUBLIC_KEY);

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.btn-submit');
    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');

    // Hide previous messages
    success.style.display = 'none';
    error.style.display = 'none';

    btn.textContent = 'Sending...';
    btn.disabled = true;

    const templateParams = {
        from_name: form.fname.value + ' ' + form.lname.value,
        from_email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            btn.textContent = 'Send Message ✈';
            btn.disabled = false;
            success.style.display = 'block';
            form.reset();
            setTimeout(() => success.style.display = 'none', 5000);
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            btn.textContent = 'Send Message ✈';
            btn.disabled = false;
            error.style.display = 'block';
            setTimeout(() => error.style.display = 'none', 5000);
        });
}

// ===== CONTACT SLIDE-IN ANIMATION =====
const slideEls = document.querySelectorAll('.slide-left, .slide-right');
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

slideEls.forEach(el => slideObserver.observe(el));
