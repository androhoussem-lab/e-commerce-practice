let searchBtn = document.querySelector('#search-button');
let searchContainer = document.querySelector('.search-bar__form')

document.onscroll = () => {
    searchContainer.classList.remove('active');
}

searchBtn.addEventListener('click' , () => {
    searchContainer.classList.toggle('active');
})