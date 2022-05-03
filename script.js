// correct solution:

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
panel.addEventListener("click", () => {
    removeActiveClasses();
panel.classList.add("active");
})
})

function removeActiveClasses() {
    panels.forEach(panel => {
panel.classList.remove("active");
    })
}

// alternative solution #1: why doesn't this work as expected? 
// const panels = document.querySelectorAll(".panel");
// panels.forEach((panel) => {
// panel.addEventListener("click", () => {
// panel.classList.remove("active");
// panel.classList.add("active");
// })
// })

// alternative solution #2: why doesn't this work as expected? 
// const panels = document.querySelectorAll(".panel");
// panels.forEach(panel => {
//     panel.addEventListener("click", () => {
//         panel.classList.toggle("active");

//     } )
// })