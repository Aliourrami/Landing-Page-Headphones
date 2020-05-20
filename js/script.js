// change navbar style on scroll
const header = document.querySelector("header .container");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
};

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
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// End change navbar style on scroll

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