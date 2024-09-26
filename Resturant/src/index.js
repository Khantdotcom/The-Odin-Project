import { Home, Menu, AboutUs } from "./modules";

const content_display = document.getElementById("content");

const home_div = document.getElementById("home");
const menu_div = document.getElementById("menu");
const about_div = document.getElementById("about");

function InitialReload() {
    home_div.addEventListener("click", function(){
        content_display.innerHTML = '';
        new Home(content_display);

    });
    menu_div.addEventListener("click", function(){
        content_display.innerHTML = '';
        new Menu(content_display);
    });
    about_div.addEventListener("click", function(){
        content_display.innerHTML = '';
        new AboutUs(content_display);
    })
};
function ClearContent(){
    while(content_display.firstchild){
        content_display.removeChild(content_display.firstchild);
    };
};
InitialReload();
