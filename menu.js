let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

function jumpTo() {
    const menuSection = document.querySelector(".menu-section")
    document.body.style.overflow = "initial"
    menuSection.classList.toggle("on", false)
}