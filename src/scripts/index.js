import '../styles/style.scss';

// window.onscroll = (e) => {
//     if(window.scrollY > 100) {
//         document.querySelector('.header').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
//     } else if(window.scrollY < 100) {
//         document.querySelector('.header').style.backgroundColor = '#fff';
//     }
// };

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
            const nodeContent = e.target.nextElementSibling;
            nodeContent.classList.toggle('active');
            // if ('block' === nodeContent.style.display) {
            //     nodeContent.style.display = 'none';
            // } else {
            //     nodeContent.style.display = 'block';
            // }
        });
    }

})