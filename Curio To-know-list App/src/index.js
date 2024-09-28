import "./styles.css";
document.addEventListener("DOMContentLoaded", () => {
    //add diplay

    const main_json = {};
    const display_area = document.getElementById("display-area");
    const addButton = document.querySelector(".add-button");

    //dialog Pop-up
    const dialog = document.querySelector("dialog");
    const topic = document.getElementById("topic-name");
    const cancelButton = document.getElementById("cancel-button");
    const confirmButton = document.getElementById("confirm-button");

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });

    confirmButton.addEventListener("click",(event) =>{
        //add append data to json a function
        event.preventDefault();
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

        const curio_div = document.createElement("div");
        curio_div.classList.add("curio_div");
            new_area.appendChild(curio_div);

        curio_div.addEventListener("click", () =>{
            const curio_input = document.createElement("input");
            curio_input.type = "checkbox";
            curio_input.name = "hahah";
            new_area.appendChild(curio_input);
        });
    }

    //data structure

    function TopicAddToJson(){
        main_json[topic.value] = {};
    };
});