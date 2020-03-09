var button = document.getElementById("menu");
var menuOpen = false;
var menuBlock = document.getElementById("menuItems");

button.onclick = menuBar;

 function menuBar() {
     if (menuOpen == false){
         menuOpen = true;
         menuBlock.style.display = "block";
     } else {
         menuOpen = false;
         menuBlock.style.display = "none";
     }
 }

var button2 = document.getElementById("contact");
var contactOpen = false;
var contactBlock = document.getElementById("contactItem");

button2.onclick = contactBar;

function contactBar() {
    if (contactOpen == false){
        contactOpen = true;
        contactBlock.style.display = "block";
    } else {
        contactOpen = false;
        contactBlock.style.display = "none";
    }
}