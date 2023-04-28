// window.onscroll = () => {
//     let header = document.querySelector('header')
//     header.classList.toggle('sticky', window.scrollY > 100)
// }

const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');

playButton.addEventListener('click', function() {
  audio.play();
});

let menuIcon = document.querySelector('#box-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const form = document.getElementById('contact-form');
window.addEventListener('beforeunload', function() {
        form.reset();
});


  