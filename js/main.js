// =============== Select Nav links and active the active class ===============
const navLinks = document.querySelectorAll("nav ul a");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(e) {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }
        e.target.classList.add("active");
    });
}
