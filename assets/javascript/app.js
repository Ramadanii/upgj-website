

const megaMenu = document.getElementById("megaMenu");

const navItems = document.querySelectorAll(".nav-item");



/*MENU DATA*/

const menuData = {

    faculties: [
        {
            title: "Faculty of Education",
            link: "/upgj-website/faculties/facultyEducation.php"
        },
        {
            title: "Faculty of Law",
            link: "/upgj-website/faculties/facultyLaw.php"
        },
        {
            title: "Faculty of Economics",
            link: "/upgj-website/faculties/facultyEconomics.php"
        },
        {
            title: "Faculty of Computer Sciences",
            link: "/upgj-website/faculties/facultyComputerScience.php"
        }
    ],

    news: [
        {
            title: "News",
            link: "/upgj-website/news/news.php"
        },

        {
            title: "Competition",
            link: "/upgj-website/news/competition.php"
        }
    ],

    conferences: [
        {
            title: "UKZ Conference 2026",
            link: "/upgj-website/conferences/conferences2026.php"
        }
    ],

    student: [
        {
            title: "Clubs of Students",
            link: "/upgj-website/students/clubsOfStudents.php"
        },
        {
            title: "Parlament of Students",
            link: "/upgj-website/students/parlamentOfStudents.php"
        },
        {
            title: "Services",
            link: "/upgj-website/students/services.php"
        }
    ]
};





function createMegaMenu(menuName) {

    const data = menuData[menuName];

    if (!data) return;



    megaMenu.innerHTML = "";



    const menuGrid = document.createElement("div");

    menuGrid.classList.add("menu-grid");



    data.forEach(item => {


        const menuItem = document.createElement("a");




        menuItem.classList.add("item");





        menuItem.innerText = item.title;




        menuItem.href = item.link;



        menuItem.style.textDecoration = "none";



        menuGrid.appendChild(menuItem);

    });



    megaMenu.appendChild(menuGrid);



    megaMenu.style.display = "block";

}





navItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        const menuName = item.dataset.menu;

        createMegaMenu(menuName);

    });

});




megaMenu.addEventListener("mouseenter", () => {

    megaMenu.style.display = "block";

});



let menuTimeout;


navItems.forEach(item => {

    item.addEventListener("mouseleave", () => {

        menuTimeout = setTimeout(() => {
            megaMenu.style.display = "none";
        }, 200);

    });

    item.addEventListener("mouseenter", () => {
        clearTimeout(menuTimeout);
    });

});



megaMenu.addEventListener("mouseenter", () => {
    clearTimeout(menuTimeout);
});


megaMenu.addEventListener("mouseleave", () => {

    menuTimeout = setTimeout(() => {
        megaMenu.style.display = "none";
    }, 200);

});





document.addEventListener("mouseover", (e) => {

    if (e.target.classList.contains("item")) {

        e.target.style.color = "#6d28d9";

        e.target.style.paddingLeft = "10px";

        e.target.style.transition = "0.2s";

    }

});



document.addEventListener("mouseout", (e) => {

    if (e.target.classList.contains("item")) {

        e.target.style.color = "#111";

        e.target.style.paddingLeft = "0px";

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const facultyCards = document.querySelectorAll(".faculty-card");

    facultyCards.forEach(card => {

        card.addEventListener("click", function () {

            const link = this.getAttribute("data-link");

            if (link) {
                window.location.href = link;
            }

        });

    });

});




window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const hero = document.querySelector(".faculty-hero, .hero");

    if (!nav || !hero) return;

    const heroBottom = hero.getBoundingClientRect().bottom;

    // Kur navbar del nga hero image dhe hyn në pjesën e bardhë
    if (heroBottom <= 120) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});