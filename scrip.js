const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll(".playlist-card");

    cards.forEach(card => {

        let title = card.querySelector("h4").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});