// ----------------------------
// preloader
// ----------------------------
window.addEventListener("load", function () {

    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none"
    }, 1500)
    document.querySelector(".loading-animation").classList.add("opacity-0")


})

// style active class on link navbar
const link = document.querySelectorAll('.item ul a')

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        for (let j = 0; j < link.length; j++) {
            if (link[j].classList.contains("active")) {
                link[j].classList.remove("active")
            }
        }
        link[i].classList.add("active");
    })


}

// End style active class on link navbar

// Nav toggle
const headerNav = document.querySelector("header");
const navTogglerBtn = document.querySelector(".nav-toggler");
const allSection = document.querySelectorAll(".section");

navTogglerBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
})

function asideSectionToggleBtn() {
    headerNav.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < allSection.length; i++) {
        // console.log(this);
        allSection[i].classList.toggle("open");
    }
}


// When the user scrolls down 80px from the top of the document, 
//resize the navbar's show background (class nav-scrolled)

const header = document.querySelector("header .container");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //document.getElementById("navbar").style.padding = "30px 10px";
        header.classList.add("nav-scrolled");
    } else {
        //document.getElementById("navbar").style.padding = "80px 10px";
        header.classList.remove("nav-scrolled");
    }
}

//

let mainNavLinks = document.querySelectorAll(".item ul li a");
let mainSections = document.querySelectorAll(".content-main section");


let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});