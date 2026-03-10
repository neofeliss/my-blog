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
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

cards.forEach(card => {

observer.observe(card);

});