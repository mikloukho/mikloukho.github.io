const hamburger = document.querySelector('#menu-btn'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open'),
        hamburger.classList.add('close');
    }else{
        hamburger.classList.add('open'),
        hamburger.classList.remove('close');
    }
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('open'),
    hamburger.classList.add('close');
});

new WOW().init();

// const counters = document.querySelectorAll('.stack__raiting-val'),
//       lines = document.querySelectorAll('.stack__raiting-progress');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// })
function turnOn() {
    let repeat = 0;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 2600) {
            increaseSkills();
        }
    });
    window.removeEventListener('scroll', increaseSkills);

    
    function increaseSkills() {
        if (repeat) {
            return;
        }
        repeat = 1;
        const percent = document.querySelectorAll('.stack__raiting-val'),
            progress = document.querySelectorAll('.stack__raiting-progress');

        percent.forEach((curr, i) => {
            percentChange(curr, i);
        });

        function percentChange(elem, index) {

            let counter = 0,
                limit = +elem.getAttribute('data-procent');

            function changeWidth() {
                if (counter < limit) {
                    counter++;
                    elem.innerHTML = `${counter}%`;
                    progress[index].style.width = `${counter}%`;
                } else {
                    clearInterval(intervalId);
                }
            };

            const intervalId = setInterval(() => {
                changeWidth();
            }, 30);

        };
    };
};

turnOn();