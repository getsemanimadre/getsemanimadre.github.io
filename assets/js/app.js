$(document).ready(() => {
    window.addEventListener('scroll', () => {
        if (this.scrollY > 400 ) {
            document.getElementById('control_nav').style.background = "white"
            $("a.nav_link").css('color', "black")
        } else {
            document.getElementById('control_nav').style.background = "transparent"
            $("a.nav_link").css('color', "white")
        }
    })
})