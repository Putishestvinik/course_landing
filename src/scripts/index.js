import '../styles/style.scss';

document.addEventListener('DOMContentLoaded', (e) => {
    new Splide( '.splide', {
        type   : 'loop',
	    perPage: 1,
        trimSpace: false
    } ).mount();

    AOS.init();

    let accordionButtons = document.getElementsByClassName('accordion-item__button');

    for (let i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener('click', function(e) {
            e.target.classList.toggle('active');
            e.target.nextElementSibling.classList.toggle('active');
        });
    }

})