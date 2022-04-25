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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"useStateContext\": () => (/* binding */ useStateContext),\n/* harmony export */   \"HBOProvider\": () => (/* binding */ HBOProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\nfunction HBOProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const defaultUserImg = 'https://faces-img.xcdn.link/thumb-lorem-face-1039_thumb.jpg';\n    const createUserAction = (e)=>{\n        setUser(e.target.value);\n        console.log(user);\n    };\n    const { 0: sideNavOpen , 1: setSideNavOpenAction  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('false');\n    const { 0: accountModalOpen , 1: setAccountModalOpenAction  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('false');\n    const { 0: searchOpen , 1: setSearchOpenAction  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('false');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            user,\n            createUserAction,\n            defaultUserImg,\n            sideNavOpen,\n            setSideNavOpenAction,\n            accountModalOpen,\n            setAccountModalOpenAction,\n            searchOpen,\n            setSearchOpenAction\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joelramirez/Downloads/ReadyPlayer/components/HBOProvider.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hCT1Byb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBRTVDLEtBQUssQ0FBQ0csWUFBWSxpQkFBR0gsMERBQW1CO0FBRXpDLFNBQVNLLGVBQWUsR0FBRyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0osaURBQVUsQ0FBQ0UsWUFBWTtBQUNsQyxDQUFDO0FBRU0sU0FBU0csV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQzFDLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsQ0FBRTtJQUNuQyxLQUFLLENBQUNRLGNBQWMsR0FBRyxDQUE2RDtJQUNwRixLQUFLLENBQUNDLGdCQUFnQixJQUFJQyxDQUFDLEdBQUssQ0FBQztRQUNqQ0gsT0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztRQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUk7SUFDaEIsQ0FBQztJQUNELEtBQUssTUFBRVMsV0FBVyxNQUFFQyxvQkFBb0IsTUFBSWhCLCtDQUFRLENBQUMsQ0FBTztJQUM1RCxLQUFLLE1BQUVpQixnQkFBZ0IsTUFBRUMseUJBQXlCLE1BQUlsQiwrQ0FBUSxDQUFDLENBQU87SUFDdEUsS0FBSyxNQUFFbUIsVUFBVSxNQUFFQyxtQkFBbUIsTUFBSXBCLCtDQUFRLENBQUMsQ0FBTztJQUV0RCxNQUFNLDZFQUNEQyxZQUFZLENBQUNvQixRQUFRO1FBQ2xCVCxLQUFLLEVBQUUsQ0FBQztZQUNKTixJQUFJO1lBQ0pHLGdCQUFnQjtZQUNoQkQsY0FBYztZQUNkTyxXQUFXO1lBQ1hDLG9CQUFvQjtZQUNwQkMsZ0JBQWdCO1lBQ2hCQyx5QkFBeUI7WUFDekJDLFVBQVU7WUFDVkMsbUJBQW1CO1FBQ3ZCLENBQUM7a0JBQ0FmLFFBQVE7Ozs7OztBQUdyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGJvY2xvbmUvLi9jb21wb25lbnRzL0hCT1Byb3ZpZGVyLmpzP2ZlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsICB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXG5cbiBleHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGVDb250ZXh0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhCT1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSl7XG5jb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJylcbmNvbnN0IGRlZmF1bHRVc2VySW1nID0gJ2h0dHBzOi8vZmFjZXMtaW1nLnhjZG4ubGluay90aHVtYi1sb3JlbS1mYWNlLTEwMzlfdGh1bWIuanBnJ1xuY29uc3QgY3JlYXRlVXNlckFjdGlvbiA9IChlKSA9PiB7XG5zZXRVc2VyKGUudGFyZ2V0LnZhbHVlKVxuY29uc29sZS5sb2codXNlcilcbn1cbmNvbnN0IFtzaWRlTmF2T3Blbiwgc2V0U2lkZU5hdk9wZW5BY3Rpb25dID0gdXNlU3RhdGUoJ2ZhbHNlJylcbmNvbnN0IFthY2NvdW50TW9kYWxPcGVuLCBzZXRBY2NvdW50TW9kYWxPcGVuQWN0aW9uXSA9IHVzZVN0YXRlKCdmYWxzZScpXG5jb25zdCBbc2VhcmNoT3Blbiwgc2V0U2VhcmNoT3BlbkFjdGlvbl0gPSB1c2VTdGF0ZSgnZmFsc2UnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgXG4gICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICBjcmVhdGVVc2VyQWN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRVc2VySW1nLFxuICAgICAgICAgICAgICAgIHNpZGVOYXZPcGVuLFxuICAgICAgICAgICAgICAgIHNldFNpZGVOYXZPcGVuQWN0aW9uLFxuICAgICAgICAgICAgICAgIGFjY291bnRNb2RhbE9wZW4sXG4gICAgICAgICAgICAgICAgc2V0QWNjb3VudE1vZGFsT3BlbkFjdGlvbixcbiAgICAgICAgICAgICAgICBzZWFyY2hPcGVuLFxuICAgICAgICAgICAgICAgIHNldFNlYXJjaE9wZW5BY3Rpb25cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlQ29udGV4dCIsIkhCT1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImRlZmF1bHRVc2VySW1nIiwiY3JlYXRlVXNlckFjdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzaWRlTmF2T3BlbiIsInNldFNpZGVOYXZPcGVuQWN0aW9uIiwiYWNjb3VudE1vZGFsT3BlbiIsInNldEFjY291bnRNb2RhbE9wZW5BY3Rpb24iLCJzZWFyY2hPcGVuIiwic2V0U2VhcmNoT3BlbkFjdGlvbiIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HBOProvider.js\n");

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