

// index.js
import "./styles.css";
import mypfp from "webpack-practice/pfp.jpg";
import { greeting } from "./greeting.js";

console.log(greeting);

const image = document.createElement("img");
image.src = mypfp;
   
document.body.appendChild(image);
