navbutton1 = document.getElementById('navbutton1');
navbutton2 = document.getElementById('navbutton2');
navbutton3 = document.getElementById('navbutton3');
navbutton4 = document.getElementById('navbutton4');
navbutton5 = document.getElementById('navbutton5');


function activeMenu(event) {
    navbutton1.className = "navbutton";
    navbutton2.className = "navbutton";
    navbutton3.className = "navbutton";
    navbutton4.className = "navbutton";
    navbutton5.className = "navbutton";
    event.target.classList.add("active");
}

navbutton1.addEventListener('click', activeMenu);
navbutton2.addEventListener('click', activeMenu);
navbutton3.addEventListener('click', activeMenu);
navbutton4.addEventListener('click', activeMenu);
navbutton5.addEventListener('click', activeMenu);