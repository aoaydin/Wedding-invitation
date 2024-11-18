document.addEventListener('DOMContentLoaded', function() {
    var envelope = document.getElementById('envelope');

    envelope.addEventListener('click', function() {
        openEnvelope();
    });

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");

        setTimeout(function() {
            var envelopeWrapper = document.querySelector('.envelope-wrapper');
            envelopeWrapper.style.display = 'none';
            var mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
        }, 4000);
    }
});

const weddingDate = new Date(2025, 4, 15, 20, 0, 0);

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = "Mutluyuz, evlendik!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);

const menuLinks = document.querySelectorAll('a[href^="#"]');

for (const link of menuLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = link.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
}


