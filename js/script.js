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

// Scrollspy

document.addEventListener('DOMContentLoaded', function () {

    // grab the sections (targets) and menu_links (triggers)
    // for menu items to apply active link styles to
    const sections = document.querySelectorAll(".content-main section");
    const menu_links = document.querySelectorAll(".item ul li a");

    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;

    let currentActive = 0;

    // listen for scroll events
    window.addEventListener("scroll", () => {
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1

        // only if the section has changed
        // remove active class from all menu links
        // and then apply it to the link for the current section
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);