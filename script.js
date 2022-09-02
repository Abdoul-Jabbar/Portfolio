navbutton1 = document.getElementById('navbutton1');
navbutton2 = document.getElementById('navbutton2');
navbutton3 = document.getElementById('navbutton3');
navbutton4 = document.getElementById('navbutton4');
navbutton5 = document.getElementById('navbutton5');

sectionItem1 = document.getElementById('sectionItem1');
sectionItem2 = document.getElementById('sectionItem2');
sectionItem3 = document.getElementById('sectionItem3');
sectionItem4 = document.getElementById('sectionItem4');
sectionItem5 = document.getElementById('sectionItem5');

gmail = document.getElementById('gmail');
yahoo = document.getElementById('yahoo');
skype = document.getElementById('skype');

function activeMenu(event) {
    navbutton1.className = "navbutton";
    navbutton2.className = "navbutton";
    navbutton3.className = "navbutton";
    navbutton4.className = "navbutton";
    navbutton5.className = "navbutton";
    event.target.classList.add("active");
}

function disableSection(){
    sectionItem1.className = "sectionItem";
    sectionItem2.className = "sectionItem";
    sectionItem3.className = "sectionItem";
    sectionItem4.className = "sectionItem";
    sectionItem5.className = "sectionItem";
}

function activeSection1() {
    disableSection();
    sectionItem1.classList.add("active");
}

function activeSection2() {
    disableSection();
    sectionItem2.classList.add("active");
}

function activeSection3() {
    disableSection();
    sectionItem3.classList.add("active");
}

function activeSection4() {
    disableSection();
    sectionItem4.classList.add("active");
}

function activeSection5() {
    disableSection();
    sectionItem5.classList.add("active");
}

function showGmail(){
    alert('Contact me at: ajsoumahoro@gmail');
}

function showYahoo(){
    alert('Contact me also at: soumahorojabbar@yahoo.fr');
}

function showSkype(){
    alert('My id on Skype: live:e64ce26f59cbfdad');
}

navbutton1.addEventListener('click', activeMenu);
navbutton1.addEventListener('click', activeSection1);
navbutton2.addEventListener('click', activeMenu);
navbutton2.addEventListener('click', activeSection2);
navbutton3.addEventListener('click', activeMenu);
navbutton3.addEventListener('click', activeSection3);
navbutton4.addEventListener('click', activeMenu);
navbutton4.addEventListener('click', activeSection4);
navbutton5.addEventListener('click', activeMenu);
navbutton5.addEventListener('click', activeSection5);
gmail.addEventListener('click', showGmail);
yahoo.addEventListener('click', showYahoo);
skype.addEventListener('click', showSkype);