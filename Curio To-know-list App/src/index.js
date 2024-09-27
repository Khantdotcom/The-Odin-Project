document.addEventListener("DOMContentLoaded", () => {
    //add diplay
    const main_json = {};
    const display_area = document.getElementById("display-area");
    const addButton = document.querySelector(".add-button");

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });
    //dialog Pop-up
    const dialog = document.querySelector("dialog");
    const topic = document.getElementById("topic-name");
    const cancelButton = document.getElementById("cancel-button");
    const confirmButton = document.getElementById("confirm-button");

    confirmButton.addEventListener("click",() =>{
        //add append data to json a function
        TopicAddToJson();
        TopicDisplay();
        Clearvalues();
        dialog.close();
    });

    cancelButton.addEventListener("click",() =>{
        Clearvalues();
        dialog.close();
    });

    function Clearvalues() {
        topic.value = '';
    };

    function TopicDisplay(){
        new_area = document.createElement("div");
        new_area.classList.add("new_area");
        display_area.appendChild(new_area);
        new_area.textContent = topic.value;
        // element add functions 
    }

    //data structure

    function TopicAddToJson(){{
        main_json[topic.value] = {};
    }};

    function CurioAdd(){

    };



});