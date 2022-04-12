// toggle active navbar
let navbarButton = document.getElementById('navbar');
let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
navbarButton.addEventListener('click', () => {
    header.classList.toggle('active');
    navbar.classList.toggle('active');
})

// handle active
let links = document.querySelectorAll('.navbar li a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach((link) => {
            link.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
    })
})

let scrolltop = document.querySelector('.scroll-top');
let bottom = document.querySelector('.scroll-down');
let footer = document.querySelector('footer');
let about = document.querySelector('.about-me');
let progress = document.querySelectorAll('.progress');
let landing = document.querySelector('.landing');
bottom.addEventListener('click', (e) => {
    e.stopPropagation();
    about.scrollIntoView({

        behavior: 'smooth'

    });
})


window.onscroll = function () {
    let aboutHeight = about.offsetHeight;
    let aboutTop = about.offsetTop;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;


    if (windowScrollTop > (aboutTop + aboutHeight - windowHeight)) {
    //scroll to top
        scrolltop.style.display = 'block';
        scrolltop.addEventListener('click', () => {
            landing.scrollIntoView({

                behavior: 'smooth'

            });
        });
    // animate skills on scroll
        progress.forEach(skill => {

            skill.style.width = skill.dataset.width;

        });

    }
    else {
        scrolltop.style.display = 'none';
        progress.forEach(skill => {

            skill.style.width = "0";

        });
    }
    
}


// display all works
let loadMore = document.querySelector('.works .container .button');
let hiddenWork = Array.from(document.querySelectorAll('.hidden'));
loadMore.addEventListener('click', () => {
    hiddenWork.forEach((el) => {
        el.classList.toggle('active');
        if (el.classList.contains('active')) {
            loadMore.innerHTML = 'Show less';
        } else {
            loadMore.innerHTML = 'Show More';
        }
    })
   
})


// random testimonial
let testimonials = Array.from(document.querySelectorAll('.testimonials .container .testimonials-container .testimonial'));
function randomtestimonial() {

        setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * testimonials.length);
            testimonials.forEach((el) => {
                el.classList.remove('active');
            })
            testimonials[randomNumber].classList.add('active');


        }, 5000);


}

randomtestimonial();