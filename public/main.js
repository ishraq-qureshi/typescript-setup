/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\nconst form = document.getElementById('myForm');\nwindow.alert('Tesitng');\nform.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    const data = (0, form_1.getFormData)(form);\n    console.log(data);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQXFDO0FBRXJDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFvQixDQUFDO0FBRWxFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTLENBQWM7SUFDbkQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLE1BQU0sSUFBSSxHQUFHLHNCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByb2plY3Qtc2V0dXAvLi9zcmMvYXBwLnRzPzA2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Rm9ybURhdGEgfSBmcm9tIFwiLi9mb3JtXCI7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Rm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbndpbmRvdy5hbGVydCgnVGVzaXRuZycpO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGU6IFN1Ym1pdEV2ZW50KXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBnZXRGb3JtRGF0YShmb3JtKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFormData = void 0;\nconst getFormData = (html) => {\n    const inputs = html.querySelectorAll('input');\n    const values = {};\n    inputs.forEach((input) => {\n        if (input.type != \"submit\") {\n            values[input.name] = input.value;\n        }\n    });\n    return values;\n};\nexports.getFormData = getFormData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybS50cyIsIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUMsTUFBTSxNQUFNLEdBQWUsRUFBRTtJQUU3QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBdUIsRUFBRSxFQUFFO1FBQ3ZDLElBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBWlksbUJBQVcsZUFZdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXByb2plY3Qtc2V0dXAvLi9zcmMvZm9ybS50cz83ZTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlucHV0RGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybURhdGEgPSAoaHRtbDogSFRNTEZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgY29uc3QgdmFsdWVzIDogaW5wdXREYXRhID0ge31cclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZihpbnB1dC50eXBlICE9IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgdmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/form.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;