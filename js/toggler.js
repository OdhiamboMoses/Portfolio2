let menuIcon = document.getElementById("menu-icon");
console.log(menuIcon);
let menuToggler = document.getElementById("menu-toggler");
console.log(menuToggler);

menuIcon.addEventListener('click', function(){
    toggleMenu();
});

function toggleMenu(){
    if(menuToggler.style.display === 'block'){
        menuToggler.style.display = 'none';
    }else{
        menuToggler.style.display = 'block';
    }
};

let btn = document.getElementById("bgbtn");
let bodycont = document.querySelector("body");
let hd = document.querySelector("header");
let hdbtn = document.querySelectorAll("#hdBtn");
let bgbtn1 = document.getElementsByClassName("bgbtn1");
let contactBtn = document.getElementById("btn-contact");
let socials = document.getElementsByClassName("socials");
let pcont = document.getElementsByClassName("main-content");

function changeBg()
{
    btn.addEventListener('click', (e) => {
        bodycont.style.backgroundColor = "#A9EB14";
        hd.style.backgroundColor = "rgb(66, 25, 160)";
        hdbtn.style.backgroundColor = "#A9EB14";
        hd.style.color = "#00000";
    }); 
};
function changeBg2()
{
    // btn.addEventListener('click', (e) => {
    //     e.preventDefault();
        bodycont.style.backgroundColor = "rgb(66, 25, 160)";
        hd.style.backgroundColor = "#A9EB14";
    ; 
};