const burger = document.querySelector(".burger")
const menuItems = document.querySelector(".menu-items")

burger.addEventListener("click", () => {
    // menuItems.document.style.display = "block"
    console.log("Clicked")
    menuItems.classList.toggle("active")
})