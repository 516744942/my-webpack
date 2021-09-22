(self["webpackChunklesson_test"] = self["webpackChunklesson_test"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ 569);

 
function getComponent() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23))
    .then(({ default: _ }) => {
      element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__.default.bind(null, 'Hello webpack!');
      const element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      // consol.kif(123)
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});


/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  // console.log('1311231')
  console.log('I get called from print.js!');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","shared"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXNzb24tdGVzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZXNzb24tdGVzdC8uL3NyYy9wcmludC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxDQUE2QjtBQUM3QjtBQUNBLFNBQVMsNkdBQWdCO0FBQ3pCLFlBQVksYUFBYTtBQUN6Qix3QkFBd0IsZ0RBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCYztBQUNmO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImluZGV4LmJlNmIyNWE2NTA1MmNmOTIxMjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gaW1wb3J0IFByaW50IGZyb20gJy4vcHJpbnQnO1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICByZXR1cm4gaW1wb3J0KCdsb2Rhc2gnKVxuICAgIC50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgICAgLy8gY29uc29sLmtpZigxMjMpXG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKTtcbn1cblxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgLy8gY29uc29sZS5sb2coJzEzMTEyMzEnKVxuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==