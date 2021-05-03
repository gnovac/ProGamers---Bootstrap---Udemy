document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const navLinks = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    navLinks.forEach(link => link.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)

});