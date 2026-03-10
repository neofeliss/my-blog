const sections = document.querySelectorAll(".action-section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

sections.forEach(section => {

observer.observe(section);

});
document.querySelectorAll(".before-after").forEach(container => {

const slider = container.querySelector(".slider");
const afterImage = container.querySelector(".after");

slider.addEventListener("input", e => {

const value = e.target.value;

afterImage.style.clipPath = `inset(0 ${100-value}% 0 0)`;

});

});