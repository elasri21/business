const nav = document.querySelector("header nav");
const showNav = document.querySelector(".show-nav");

showNav.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
        nav.style.top = "-500%";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
        nav.style.top = "79px";
    }
});

//
const showSide = document.querySelector(".icon");
const sideBar = document.querySelector(".side-bar");
const hideSide = document.querySelector(".hide-side");
showSide.addEventListener("click", function () {
    sideBar.style.right = "0";
});
hideSide.addEventListener("click", function () {
    sideBar.style.right = "-100%";
});

//panel
const btnTitles = Array.from(document.querySelectorAll(".btn-titles span"));
const infodetails = Array.from(document.querySelectorAll(".info-details"));
btnTitles.forEach(btn => {
    btn.addEventListener("click", function () {
        for(let i = 0; i < btnTitles.length; i++) {
            btnTitles[i].classList.remove("active");
        }
        this.classList.add("active");
        infodetails.forEach(text => {
            if(this.id == text.dataset.id) {
                text.classList.remove("hide");
            } else {
                text.classList.add("hide");
            }
        });
    });
});


//bullets
const bullets = Array.from(document.querySelectorAll(".bullets span"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function (e) {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(e.target.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});


// go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY > 500) {
        goUp.classList.remove("hide");
    } else {
        goUp.classList.add("hide");
    }
})
