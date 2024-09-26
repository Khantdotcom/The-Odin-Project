document.addEventListener("DOMContentLoaded", () => {
    const display_area = document.getElementById("display-area");
    const addButton = document.querySelector(".add-button");
    const dialog = document.querySelector("dialog");

    const topic = document.getElementById("topic-name");

    //data structure
    const contents = {"Topic":{
        "topic-name" : "gg",
        "curio-list" : [{"curio": {"name": "khant", "priority": "urgent", "date": something}}]};

    function New_book () {
            this.author = author.value;
            this.title = title.value;
            this.pages = pages.value;
        }

    function AddBook(){
        all_books.push();
        }

    function TopicDisplay(){
        new_area = document.createElement("div");
        new_area.classList.add("new_area");
        display_area.appendChild(new_area);
        // element add functions 
        display_area.appendChild();
    }


    // button functions below 

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });

    const cancelButton = document.getElementById("cancel-button");
    const confirmButton = document.getElementById("confirm-button");

    confirmButton.addEventListener("click",() =>{
        //add append data to json a function
        Clearvalues();
        
        Object.setPrototypeOf(AddBook,New_book);
        confirm_books = new AddBook();
        Display_books();
        console.log(all_books);
    });

    cancelButton.addEventListener("click",() =>{
        Clearvalues();
        dialog.close();
    });
    function Clearvalues() {

    };
});