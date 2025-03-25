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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page */ \"./src/main_page.js\");\n/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video_page */ \"./src/video_page.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/question.js\");\n\r\n\r\n\r\nconsole.log(\"up and running\");\r\nconst content = document.querySelector(\"#content\");\r\n\r\n(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.fillMain)();\r\n\r\nconst wtfBtn = document.querySelector(\".wtf-btn\");\r\nconst mainBtn = document.querySelector(\".main-btn\");\r\nconst questionBtn = document.querySelector(\".question\");\r\n\r\nfunction empty(){\r\n    while (content.firstChild){\r\n        content.removeChild(content.firstChild);\r\n    };\r\n};\r\n\r\nwtfBtn.addEventListener(\"click\", () => {\r\n    empty();\r\n    (0,_video_page__WEBPACK_IMPORTED_MODULE_1__.fillVideo)();\r\n});\r\nmainBtn.addEventListener(\"click\", () => {\r\n    empty();\r\n    (0,_main_page__WEBPACK_IMPORTED_MODULE_0__.fillMain)();\r\n})\r\n\r\nquestionBtn.addEventListener(\"click\", () => {\r\n    empty();\r\n    (0,_question__WEBPACK_IMPORTED_MODULE_2__.questionFill)();\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1QztBQUNFO0FBQ0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esb0RBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVM7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksb0RBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBWTtBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlsbE1haW4gfSBmcm9tIFwiLi9tYWluX3BhZ2VcIjtcclxuaW1wb3J0IHsgZmlsbFZpZGVvIH0gZnJvbSBcIi4vdmlkZW9fcGFnZVwiO1xyXG5pbXBvcnQgeyBxdWVzdGlvbkZpbGwgfSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5jb25zb2xlLmxvZyhcInVwIGFuZCBydW5uaW5nXCIpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuZmlsbE1haW4oKTtcclxuXHJcbmNvbnN0IHd0ZkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3RmLWJ0blwiKTtcclxuY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1idG5cIik7XHJcbmNvbnN0IHF1ZXN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvblwiKTtcclxuXHJcbmZ1bmN0aW9uIGVtcHR5KCl7XHJcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKXtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxud3RmQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbXB0eSgpO1xyXG4gICAgZmlsbFZpZGVvKCk7XHJcbn0pO1xyXG5tYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbXB0eSgpO1xyXG4gICAgZmlsbE1haW4oKTtcclxufSlcclxuXHJcbnF1ZXN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbXB0eSgpO1xyXG4gICAgcXVlc3Rpb25GaWxsKCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillMain: () => (/* binding */ fillMain)\n/* harmony export */ });\n/* harmony import */ var _pasta_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasta.png */ \"./src/pasta.png\");\n\r\n\r\nfunction fillMain(){\r\n    let h1 = document.createElement(\"h1\");\r\n    let img = document.createElement(\"img\");\r\n    let p = document.createElement(\"p\");\r\n    h1.textContent = \"PASTA\";\r\n    img.src = _pasta_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    p.textContent = \"I realized there is too much text and elements to add and i dont care to do it so yeah.\";\r\n    content.appendChild(h1);\r\n    content.appendChild(img);\r\n    content.appendChild(p);\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbl9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21haW5fcGFnZS5qcz83M2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWNhbCBmcm9tIFwiLi9wYXN0YS5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGZpbGxNYWluKCl7XHJcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiUEFTVEFcIjtcclxuICAgIGltZy5zcmMgPSBkZWNhbDtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIkkgcmVhbGl6ZWQgdGhlcmUgaXMgdG9vIG11Y2ggdGV4dCBhbmQgZWxlbWVudHMgdG8gYWRkIGFuZCBpIGRvbnQgY2FyZSB0byBkbyBpdCBzbyB5ZWFoLlwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoMSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHApO1xyXG59O1xyXG5cclxuZXhwb3J0IHtmaWxsTWFpbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main_page.js\n");

/***/ }),

/***/ "./src/pasta.png":
/*!***********************!*\
  !*** ./src/pasta.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "549874ccb175a113f17c.png";

/***/ }),

/***/ "./src/question.js":
/*!*************************!*\
  !*** ./src/question.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questionFill: () => (/* binding */ questionFill)\n/* harmony export */ });\nfunction questionFill(){\r\n    content.textContent = \"???\"\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcXVlc3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uLmpzPzRjZTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcXVlc3Rpb25GaWxsKCl7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCI/Pz9cIlxyXG59XHJcblxyXG5leHBvcnQge3F1ZXN0aW9uRmlsbH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/question.js\n");

/***/ }),

/***/ "./src/video_page.js":
/*!***************************!*\
  !*** ./src/video_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillVideo: () => (/* binding */ fillVideo)\n/* harmony export */ });\nfunction fillVideo(){\r\n    content.insertAdjacentHTML('beforeend', '<iframe width=\"960\" height=\"540\" src=\"https://www.youtube.com/embed/OGytwgOZ0nE\" title=\"Things I like about this decal\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>');\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlkZW9fcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSwyTUFBMk0sVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQ3RSO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlkZW9fcGFnZS5qcz8yMjg4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbGxWaWRlbygpe1xyXG4gICAgY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8aWZyYW1lIHdpZHRoPVwiOTYwXCIgaGVpZ2h0PVwiNTQwXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT0d5dHdnT1owbkVcIiB0aXRsZT1cIlRoaW5ncyBJIGxpa2UgYWJvdXQgdGhpcyBkZWNhbFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtmaWxsVmlkZW99OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/video_page.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;