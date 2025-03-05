const hamburgerIcon = document.getElementById('hamburger');
const navLists = document.getElementById('nav-list');

hamburgerIcon.addEventListener('click', () => {
    navLists.classList.toggle('active');
})