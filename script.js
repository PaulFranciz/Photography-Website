const menuLinks = document.querySelectorAll(".menu-link")
const menuCheck = document.querySelector(".menu-check")

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuCheck.checked = false
        }
    })
})



