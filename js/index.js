const app = () => {
    const hearts = document.getElementsByClassName("bx-heart"),
        checks = document.getElementsByClassName("bx-check-circle");
    Array.from(hearts).forEach((elem, i) => {
        hearts[i].addEventListener("click", (e) => {
            if (!e.target.classList.contains("bxs-heart")) {
                
                e.target.setAttribute("class", "bx bxs-heart");
            } else {
                e.target.setAttribute("class", "bx bx-heart");
            }
        })

        checks[i].addEventListener("click", (e) => {
            if (!e.target.classList.contains("bxs-check-circle")) {
                
                e.target.setAttribute("class", "bx bxs-check-circle");
            } else {
                e.target.setAttribute("class", "bx bx-check-circle");
            }
        })
    })
}
app();