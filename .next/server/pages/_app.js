/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/HBOProvider.js":
/*!***********************************!*\
  !*** ./components/HBOProvider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"useStateContext\": () => (/* binding */ useStateContext),\n/* harmony export */   \"HBOProvider\": () => (/* binding */ HBOProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\nfunction HBOProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const defaultUserImg = 'https://faces-img.xcdn.link/thumb-lorem-face-1039_thumb.jpg';\n    const createUserAction = (e)=>{\n        setUser(e.target.value);\n        console.log(user);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            user,\n            createUserAction,\n            defaultUserImg\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joelramirez/Downloads/ReadyPlayer/components/HBOProvider.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hCT1Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBRTVDLEtBQUssQ0FBQ0csWUFBWSxpQkFBR0gsMERBQW1CO0FBRXpDLFNBQVNLLGVBQWUsR0FBRyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0osaURBQVUsQ0FBQ0UsWUFBWTtBQUNsQyxDQUFDO0FBRU0sU0FBU0csV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFDLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUNuQyxLQUFLLENBQUNRLGNBQWMsR0FBRyxDQUE2RDtJQUNwRixLQUFLLENBQUNDLGdCQUFnQixJQUFJQyxDQUFDLEdBQUssQ0FBQztRQUNqQ0gsT0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztRQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUk7SUFDaEIsQ0FBQztJQUNHLE1BQU0sNkVBQ0RMLFlBQVksQ0FBQ2MsUUFBUTtRQUNsQkgsS0FBSyxFQUFFLENBQUM7WUFDSk4sSUFBSTtZQUNKRyxnQkFBZ0I7WUFDaEJELGNBQWM7UUFDbEIsQ0FBQztrQkFDQUgsUUFBUTs7Ozs7O0FBR3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYm9jbG9uZS8uL2NvbXBvbmVudHMvSEJPUHJvdmlkZXIuanM/ZmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcblxuIGV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSEJPUHJvdmlkZXIoeyBjaGlsZHJlbiB9KXtcbmNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKVxuY29uc3QgZGVmYXVsdFVzZXJJbWcgPSAnaHR0cHM6Ly9mYWNlcy1pbWcueGNkbi5saW5rL3RodW1iLWxvcmVtLWZhY2UtMTAzOV90aHVtYi5qcGcnXG5jb25zdCBjcmVhdGVVc2VyQWN0aW9uID0gKGUpID0+IHtcbnNldFVzZXIoZS50YXJnZXQudmFsdWUpXG5jb25zb2xlLmxvZyh1c2VyKVxufVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IFxuICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgY3JlYXRlVXNlckFjdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0VXNlckltZ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGVDb250ZXh0IiwiSEJPUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZGVmYXVsdFVzZXJJbWciLCJjcmVhdGVVc2VyQWN0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HBOProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HBOProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HBOProvider */ \"./components/HBOProvider.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HBOProvider__WEBPACK_IMPORTED_MODULE_2__.HBOProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/joelramirez/Downloads/ReadyPlayer/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joelramirez/Downloads/ReadyPlayer/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDdUI7U0FFNUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0xILGdFQUFXOzhGQUNWRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzNCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2hib2Nsb25lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHtIQk9Qcm92aWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9IQk9Qcm92aWRlcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybihcbiAgPEhCT1Byb3ZpZGVyPlxuICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgPC9IQk9Qcm92aWRlcj5cbiAgKSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJIQk9Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();