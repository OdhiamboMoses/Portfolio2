let nums = [156,40,3,200,66];

const max = Math.max(...nums);

const min = Math.min(...nums);

let btn = document.getElementById("bgbtn");
let bodycont = document.querySelector("body");
let hd = document.querySelector("header");
let hdBtn = document.querySelectorAll("#hdBtn");
let bgbtn1 = document.getElementsByClassName("bgbtn1");
let contactBtn = document.getElementById("btn-contact");
let socials = document.getElementsByClassName("socials");


function changeBg()
{
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        bodycont.style.backgroundColor = "#A9EB14";
        hd.style.backgroundColor = "rgb(66, 25, 160)";
        hdBtn.style.backgroundColor = "#A9EB14";
        hd.style.color = "black";
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
let placeHolder = " ";
let namex = document.getElementById("myName");
namex.addEventListener("keypress", function(e){
    placeHolder = e.target.value;
})


let placeHolder2 = " ";
let emailx = document.getElementById("emailx");
console.log(emailx);
namex.addEventListener("keypress", function(e){
    placeHolder2 = e.target.value;
})

let placeHolder3 = " ";
let messagex = document.getElementById("messagex");
console.log(messagex);
namex.addEventListener("keypress", function(e){
    placeHolder3 = e.target.value;
})



function submitBtn()
{
    contactBtn.addEventListener('click', (e) => {
        formCheck();
});
};

function formCheck()
{
    if((namex.value) && (emailx.value) && (messagex.value)){
        alert(`${namex.value} message sent Successfully from ${emailx.value}`);
    }else{
        alert("enter valid data");
    }
}

let menuIcon = document.getElementById("menu-icon");
let menuToggler = document.getElementById("menu-toggler");

menuIcon.addEventListener("click", function(){
    toggleMenu();
});

function toggleMenu(){
    if(menuToggler.style.display === 'block'){
        menuToggler.style.display = 'none';
    }else{
        menuToggler.style.display = 'block';
    }
};
