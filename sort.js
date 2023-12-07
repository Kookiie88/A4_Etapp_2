const toggleMenuBtn = document.querySelector(".sortBy__sortChallenges-btn");
const menu = document.querySelector(".sortBy__sortChallenges-content");
const byRating = document.querySelector(".sortBy__rating");
const byTitle = document.querySelector(".sortBy__title");

function sortByRating(direction, array) {
    const sortedArray = array.sort((a, b) => {
        const aRating = a["data-rating"];
        const bRating = b["data-rating"];
        if(direction === "ascending") {
            return bRating - aRating;
        } else {
            return aRating - bRating;
        }
    });
    sortedArray.forEach((challenge) => {
        challenge.parentNode.appendChild(challenge);
    });
}

function sortByTitle(direction, array) {
    const sortedArray = array.sort((a, b) => {
        const aTitle = a.querySelector(".sidescroll__title").textContent;
        const bTitle = b.querySelector(".sidescroll__title").textContent;
        if(direction === "ascending") {
            return bTitle.localeCompare(aTitle);
        } else {
            return aTitle.localeCompare(bTitle);
        }
    });
    sortedArray.forEach((challenge) => {
        challenge.parentNode.appendChild(challenge);
    });
}

toggleMenuBtn.addEventListener("click", () => {
    const borderRadius = getComputedStyle(toggleMenuBtn).borderRadius;
    const visibility = getComputedStyle(menu).visibility;
    toggleMenuBtn.style.borderRadius = borderRadius === "8px" ? "8px 8px 0 0" : "";
    menu.style.visibility = visibility === "hidden" ? "visible" : "";
});

byRating.addEventListener("click", () => {
    const challengesArray = [...document.querySelectorAll(".sidescroll__card")];
    const direction = challengesArray[0]["data-rating"] > 1 ? "descending" : "ascending";
    const arrow = byRating.firstElementChild;
    const byTitleArrow = byTitle.firstElementChild;
    byTitleArrow.classList = "";
    arrow.classList = direction === "ascending" ? "fa fa-arrow-down" : "fa fa-arrow-up";
    sortByRating(direction, challengesArray);
});

byTitle.addEventListener("click", () => {
    const challengesArray = [...document.querySelectorAll(".sidescroll__card")];
    const firstTitle = challengesArray[0].querySelector('.sidescroll__title').textContent;
    const direction = firstTitle.charCodeAt(0) > 78 ? "descending" : "ascending";
    const arrow = byTitle.firstElementChild;
    const byRatingArrow = byRating.firstElementChild;
    byRatingArrow.classList = "";
    arrow.classList = direction === "ascending" ? "fa fa-arrow-down" : "fa fa-arrow-up";
    sortByTitle(direction, challengesArray);
});