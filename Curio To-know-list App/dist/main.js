/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    //add diplay\n    const main_json = {};\n    const display_area = document.getElementById(\"display-area\");\n    const addButton = document.querySelector(\".add-button\");\n\n    addButton.addEventListener(\"click\", () => {\n        dialog.showModal();\n    });\n    //dialog Pop-up\n    const dialog = document.querySelector(\"dialog\");\n    const topic = document.getElementById(\"topic-name\");\n    const cancelButton = document.getElementById(\"cancel-button\");\n    const confirmButton = document.getElementById(\"confirm-button\");\n\n    confirmButton.addEventListener(\"click\",() =>{\n        //add append data to json a function\n        TopicAddToJson();\n        TopicDisplay();\n        Clearvalues();\n    });\n\n    cancelButton.addEventListener(\"click\",() =>{\n        Clearvalues();\n        dialog.close();\n    });\n\n    function Clearvalues() {\n        topic.value = '';\n    };\n\n    function TopicDisplay(){\n        new_area = document.createElement(\"div\");\n        new_area.classList.add(\"new_area\");\n        display_area.appendChild(new_area);\n        new_area.textContent = topic.value;\n        // element add functions \n    }\n\n    //data structure\n\n    function TopicAddToJson(){{\n        main_json[topic.value] = {};\n    }};\n\n    function CurioAdd(){\n\n    };\n\n\n\n});\n\n//# sourceURL=webpack://the-odin-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;