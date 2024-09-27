import "./styles.css";
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
        const new_area = document.createElement("div");
        new_area.classList.add("new_area");
        display_area.appendChild(new_area);
        new_area.textContent = topic.value;
        // element add functions 
        CurioArea_create(new_area);
    }

    //data structure

    function TopicAddToJson(){{
        main_json[topic.value] = {};
    }};

    function CurioArea_create(locaiton){
        const curio_div = document.createElement("div");
        curio_div.classList.add("curio_div");
        locaiton.appendChild(curio_div);

        const curio_button = document.createElement("button");
        curio_button.addEventListener("click", () =>{
            Curio_add(locaiton);
        });
        curio_div.appendChild(curio_button);
    };

    function New_dialog(locaiton) {
        const new_dialog = document.createElement("dialog");
        const curio_dialog_input = document.createElement("input");
        curio_dialog_input.type = "text";
        new_dialog.appendChild(curio_dialog_input);
        location.appendChild(new_dialog);
    };

    function Curio_add(locaiton){
        const curio_input = document.createElement("input");
        curio_input.type = "checkbox";
        curio_input.textContent= `${curioitem_name}`;
        locaiton.appendChild(curio_input);
    };
});