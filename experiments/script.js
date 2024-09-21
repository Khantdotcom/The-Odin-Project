const myFile = document.getElementById("myfile");

const consent = document.getElementById("consent");
consent.onclick = function(){
    myFile.removeAttribute("required");
};

const editor = document.getElementById("inputarea");
const toggleButton = document.getElementById("toggle");
toggleButton.onclick = function(){
    if (editor.getAttribute("contenteditable") == "true"){
        editor.setAttribute("contenteditable", "false");
    }else{
        editor.setAttribute("contenteditable", "true");
    }
};
document.addEventListener("DOMContentLoaded", function() {
    let ratingTemplate = document.getElementById("set_rating").content.cloneNode(true);
    document.body.appendChild(ratingTemplate);
});