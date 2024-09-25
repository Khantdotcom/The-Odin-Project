document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add-button");
    const dialog = document.querySelector("dialog");
    const cancelButton = document.getElementById("cancel-button");
    const confirmButton = document.getElementById("confirm-button");

    const author = document.getElementById("author");
    const title = document.getElementById("book-title");
    const pages = document.getElementById("pages");

    const display_area = document.getElementById("display-area")

    const all_books = [];
    function New_book () {
            this.author = author.value;
            this.title = title.value;
            this.pages = pages.value;
        }

    function AddBook(){
        confirm_books = new New_book();
        all_books.push([confirm_books.author,confirm_books.title,confirm_books.pages]);
        }

    function Display_books(){
        new_area = document.createElement("div");
        new_area.classList.add("new_area");
        display_area.appendChild(new_area);
        const book_des = document.createTextNode(`${all_books[all_books.length -1]}`);
        display_area.appendChild(book_des);

    }

    addButton.addEventListener("click", () => {
        dialog.showModal();
    });


    confirmButton.addEventListener("click",() =>{
        Object.setPrototypeOf(AddBook,New_book);
        confirm_books = new AddBook();
        Display_books();
        console.log(all_books);
    })

    cancelButton.addEventListener("click",() =>{
        dialog.close();
    })
});
