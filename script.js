// ===============================
// SUNDHA TRADERS WEBSITE
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sundha Traders Website Loaded Successfully");

    // Smooth Scroll
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = this.getAttribute("href");

            if(target.startsWith("#")){

                e.preventDefault();

                document.querySelector(target).scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // Header Shadow on Scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 80){

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

        }else{

            header.style.boxShadow="0 5px 15px rgba(0,0,0,.15)";

        }

    });

    // Card Hover Animation
    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

});
