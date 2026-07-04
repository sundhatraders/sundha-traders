// Sundha Traders Website

document.addEventListener("DOMContentLoaded", () => {

    console.log("SUNDHA TRADERS Website Loaded!");

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            const target = this.getAttribute("href");

            if (target.startsWith("#")) {
                e.preventDefault();

                const element = document.querySelector(target);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });
    });

});
