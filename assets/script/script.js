const mobileMenu = document.getElementById('mobileMenu');
const burgerMenu = document.getElementById('burgerMenu');
const openMenu = () => {
    mobileMenu.classList.toggle('menu-active');
    burgerMenu.classList.toggle('burger-active');
}

burgerMenu.onclick = openMenu;

const firstPage = document.getElementById('firstPage');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const lastPage = document.getElementById('lastPage');
const pageNumber = document.querySelector('.pagination-number');
const petsCard = document.querySelectorAll('.pets-card');
const petsCardName = document.querySelectorAll('.pets-card__name');
const petsCardImg = document.querySelectorAll('.pets-card__img');
let count = pageNumber.innerHTML;


prevPage.addEventListener("click", () => {
    count--;

    if (count > 1) {
        nextPage.dataset.disabled = 'false';
        lastPage.dataset.disabled = 'false';
        prevPage.dataset.disabled = 'false';
        firstPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;

    } else {
        count++;
        prevPage.dataset.disabled = 'true';
        firstPage.dataset.disabled = 'true';
        nextPage.dataset.disabled = 'false';
        lastPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;
    }
});
firstPage.addEventListener("click", () => {
    if (count > 1) {
        count = 1;
        nextPage.dataset.disabled = 'false';
        lastPage.dataset.disabled = 'false';
        prevPage.dataset.disabled = 'true';
        firstPage.dataset.disabled = 'true';
        pageNumber.innerHTML = count;

    } else {
        count;
        prevPage.dataset.disabled = 'true';
        firstPage.dataset.disabled = 'true';
        nextPage.dataset.disabled = 'false';
        lastPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;
    }
});
lastPage.addEventListener("click", () => {
    if (count < 5) {
        count = 5;
        nextPage.dataset.disabled = 'true';
        lastPage.dataset.disabled = 'true';
        prevPage.dataset.disabled = 'false';
        firstPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;
    }
});
nextPage.addEventListener("click", () => {
    count++;

    if (count < 5) {
        nextPage.dataset.disabled = 'false';
        lastPage.dataset.disabled = 'false';
        prevPage.dataset.disabled = 'false';
        firstPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;
        cardsDesktop += 8;
    }
    else {
        count--;
        nextPage.dataset.disabled = 'true';
        lastPage.dataset.disabled = 'true';
        prevPage.dataset.disabled = 'false';
        firstPage.dataset.disabled = 'false';
        pageNumber.innerHTML = count;
    }

    console.log(cardsDesktop);
    [...pets].forEach((pets, index) => {


        const petsCardItemName = petsCardName[index];
        const petsCardItemImg =  petsCardImg[index];
        if (petsCardItemName !== undefined && petsCardItemImg !== undefined ) {
            petsCardItemName.innerText = this.name;
            petsCardItemImg.src = this.img;
        }
    });

});



if(window.innerWidth < 768) {
    for (let i=0; i < 3; i++){
        petsCard[i].classList.add('pets-active');
  }
}

if(window.innerWidth >= 768 &&window.innerWidth < 1280) {
    for (let i=0; i < 6; i++){
        petsCard[i].classList.add('pets-active');
    }
}
if(window.innerWidth >= 1280) {
    for (let i=0; i < 8; i++){
        petsCard[i].classList.add('pets-active');
    }
}

