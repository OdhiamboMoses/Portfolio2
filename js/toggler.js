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