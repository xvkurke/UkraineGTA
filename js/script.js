//
// ---------------- burger menu
//
const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.header__menu-link');
const logo = document.querySelector('.header__logo');
const headerBtn = document.querySelector('.header__btn');
const socialLinks = document.querySelectorAll('.header__social-link');

const links = [...menuLinks, logo, headerBtn, ...socialLinks];
const header = document.querySelector('.header');

burgerMenu.classList.add('toggled');
burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('active');
    burgerMenu.classList.toggle('toggled');
    body.classList.toggle('fixed');
    nav.classList.toggle('active');
    header.classList.toggle('active');
});

function closeBurgerMenu() {
    links.forEach((item) => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            burgerMenu.classList.add('toggled');
            body.classList.remove('fixed');
            nav.classList.remove('active');
            header.classList.remove('active');

        });
    });

}
closeBurgerMenu()




// ---------------- THE END

window.onload = () => {
    // anim
    const header = document.querySelector('.header');
    const heroItems = document.querySelectorAll('.hero ._anim-item');
    const animItems = [header, ...heroItems];

    animItems.forEach(item => {
        item.classList.add('anim');
    })



};


document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-box')) {
        langSelect.classList.remove('active');
    }

})



// Переключение языков

const lang = document.querySelector('.lang');
const langSelect = document.querySelector('.lang-select');
const languages = document.querySelectorAll('.lang-select__option');

if (lang) {
    lang.addEventListener('click', () => {
        langSelect.classList.add('active');
        if (languages) {
            languages.forEach(item => {
                item.addEventListener('click', (e) => {
                    const dataLang = e.currentTarget.dataset.lang;

                    if (dataLang !== lang.dataset.lang) {
                        lang.dataset.lang = dataLang;
                        lang.querySelector('span').textContent = e.currentTarget.querySelector('span').textContent;
                    }

                    langSelect.classList.remove('active');
                })
            })
        }
    })
}

