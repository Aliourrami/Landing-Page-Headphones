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

// fix problem nav background bar hidden
const header = document.querySelector("header .container");
const sectionOne = document.querySelector(".home");


function myFunctionMargin(margin) {
    const sectionOneObserver = new IntersectionObserver(function (
            entries,
            sectionOneObserver
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add("nav-scrolled");
                } else {
                    header.classList.remove("nav-scrolled");
                }
            });
        },
        margin);
    sectionOneObserver.observe(sectionOne);
}
const sectionOneOptions = {
    rootMargin: "-4000px 0px 0px 0px"
};
const sectionOneOptions2 = {
    rootMargin: "-400px 0px 0px 0px"
};

function myFunction(x) {
    if (x.matches) { // If media query matches
        myFunctionMargin(sectionOneOptions);
        // header.classList.add("nav-scrolled");
    } else {

        myFunctionMargin(sectionOneOptions2);
    }
}

var x1 = window.matchMedia("(max-width: 1024px)")
myFunction(x1) // Call listener function at run time
x1.addListener(myFunction) // Attach listener function on state changes

var x2 = window.matchMedia("(max-width: 2560px)")
myFunction(x2) // Call listener function at run time
x2.addListener(myFunction) // Attach listener function on state changes