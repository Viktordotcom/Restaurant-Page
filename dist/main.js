/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    background-image: linear-gradient(to bottom, #F88484, #FF8A8A);\n}\n#navbar{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #FFB7B7;\n    box-shadow: 5px 10px #CD6D6D;\n    width: 55vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n#content{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    word-wrap: break-word;\n    text-align: justify;\n    width: 55vw;\n    height: 85vh;\n    background-color: orange;\n    color:white;\n    box-shadow: 5px 10px #CD6D6D;\n\n}\n#content p{\n    max-width: 400px;\n    font-size: 12px;\n}\nh3{\n    margin: 10px;\n}\nbutton{\n    background-color: white;\n    height: 30px;\n    margin: 20px;\n    border: none;\n    cursor: pointer;\n    font-size: 0.6rem;\n}\nbutton:hover{\n    background-color: #CD6D6D;\n    color: white;\n}\ndiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nimg{\n    max-width: 250px;\n    height: auto;\n    border-radius: 50%;\n\n}\n\n\n#container-menu{\ndisplay: grid;\ngrid-template-rows: repeat(auto-fit,1fr);\ngrid-template-columns: repeat(2, 1fr);\ncolumn-gap: 10vmax;\n}\n\n.modal{\ndisplay: flex;\nposition: fixed;\nbackground:rgba(0, 0, 0, 0.8);\nopacity: 0;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\npointer-events: none;\ntransition: all 0.25s ease-out;\n}\n\n.modal.open{\nopacity: 1;\npointer-events: all;\n}\n\n.modal img{\nposition: absolute;\nmax-width: 60%;\nheight: 60%;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%) scale(0.5);\nborder-radius: 0%;\n}\n\n.modal.open img{\ntransform: translate(-50%,-50%) scale(1);\n}\n\n.modal.open p{\n    position: fixed;\n    font-size:  1.5rem !important;\n    width: auto;\n    color: white;\n    bottom: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.menu-border{\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 0.3s ease-out;\n    cursor: pointer;\n\n}\n\n.menu-border:hover{\n    transform: scale(1.2);\n}\n.menu-border img{\n    max-width: 150px;\n    border-radius: 50%;\n\n    \n}\n\n.menu-border p{\n    margin: 10px;\n    cursor: text;\n}\n\n#contact-form{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 1fr);\n    row-gap: 10px;\n}\n#contact-form input{\n    width: 400px;\n}\n\n#contact-form button{\n    width: 100px;\n    align-items: end;\n    justify-self: end;\n}\n@media (max-width:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n\n@media (max-height:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8DAA8D;AAClE;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,4BAA4B;IAC5B,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,4BAA4B;;AAEhC;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;;AAEtB;;;AAGA;AACA,aAAa;AACb,wCAAwC;AACxC,qCAAqC;AACrC,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,eAAe;AACf,6BAA6B;AAC7B,UAAU;AACV,MAAM;AACN,OAAO;AACP,WAAW;AACX,YAAY;AACZ,oBAAoB;AACpB,8BAA8B;AAC9B;;AAEA;AACA,UAAU;AACV,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;AAClB,cAAc;AACd,WAAW;AACX,QAAQ;AACR,SAAS;AACT,2CAA2C;AAC3C,iBAAiB;AACjB;;AAEA;AACA,wCAAwC;AACxC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,6BAA6B;IAC7B,eAAe;;AAEnB;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,kBAAkB;;;AAGtB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4CAA4C;IAC5C,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,wCAAwC;QACxC,qCAAqC;QACrC,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,wCAAwC;QACxC,qCAAqC;QACrC,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["html{\n    background-image: linear-gradient(to bottom, #F88484, #FF8A8A);\n}\n#navbar{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #FFB7B7;\n    box-shadow: 5px 10px #CD6D6D;\n    width: 55vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n#content{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    word-wrap: break-word;\n    text-align: justify;\n    width: 55vw;\n    height: 85vh;\n    background-color: orange;\n    color:white;\n    box-shadow: 5px 10px #CD6D6D;\n\n}\n#content p{\n    max-width: 400px;\n    font-size: 12px;\n}\nh3{\n    margin: 10px;\n}\nbutton{\n    background-color: white;\n    height: 30px;\n    margin: 20px;\n    border: none;\n    cursor: pointer;\n    font-size: 0.6rem;\n}\nbutton:hover{\n    background-color: #CD6D6D;\n    color: white;\n}\ndiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nimg{\n    max-width: 250px;\n    height: auto;\n    border-radius: 50%;\n\n}\n\n\n#container-menu{\ndisplay: grid;\ngrid-template-rows: repeat(auto-fit,1fr);\ngrid-template-columns: repeat(2, 1fr);\ncolumn-gap: 10vmax;\n}\n\n.modal{\ndisplay: flex;\nposition: fixed;\nbackground:rgba(0, 0, 0, 0.8);\nopacity: 0;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\npointer-events: none;\ntransition: all 0.25s ease-out;\n}\n\n.modal.open{\nopacity: 1;\npointer-events: all;\n}\n\n.modal img{\nposition: absolute;\nmax-width: 60%;\nheight: 60%;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%) scale(0.5);\nborder-radius: 0%;\n}\n\n.modal.open img{\ntransform: translate(-50%,-50%) scale(1);\n}\n\n.modal.open p{\n    position: fixed;\n    font-size:  1.5rem !important;\n    width: auto;\n    color: white;\n    bottom: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.menu-border{\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 0.3s ease-out;\n    cursor: pointer;\n\n}\n\n.menu-border:hover{\n    transform: scale(1.2);\n}\n.menu-border img{\n    max-width: 150px;\n    border-radius: 50%;\n\n    \n}\n\n.menu-border p{\n    margin: 10px;\n    cursor: text;\n}\n\n#contact-form{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 1fr);\n    row-gap: 10px;\n}\n#contact-form input{\n    width: 400px;\n}\n\n#contact-form button{\n    width: 100px;\n    align-items: end;\n    justify-self: end;\n}\n@media (max-width:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n\n@media (max-height:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnAbout": () => (/* binding */ btnAbout),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _img_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chef.jpeg */ "./src/img/chef.jpeg");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _img_icon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icon.jpg */ "./src/img/icon.jpg");





const btnAbout = document.createElement('button');
const title = document.createElement('h3');
const container1 = document.createElement('div')
const container2 = document.createElement('div')
const container3 = document.createElement('div')
const imgBorder1 = document.createElement('div');
const imgBorder2 = document.createElement('div');
const aboutP1 = document.createElement('p');
const aboutP2 = document.createElement('p');
const aboutP3 = document.createElement('p');
const aboutWorkTime = document.createElement('h3')
const chefImg = new Image();
const iconAbout = new Image();
chefImg.src = _img_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__;
iconAbout.src = _img_icon_jpg__WEBPACK_IMPORTED_MODULE_2__

btnAbout.textContent = 'ABOUT PAGE';

btnAbout.addEventListener('click', render);

function render(){
    _index__WEBPACK_IMPORTED_MODULE_1__.content.replaceChildren()
    imgBorder1.appendChild(chefImg);
    imgBorder2.appendChild(iconAbout);
    
    title.textContent = "The Fictional Restaurant"
    aboutP1.textContent = 'The Fictional Restaurant serves best breakfast enriched with freshly baked pies. There is seating both inside the Manor House and on the patio beside the hotel gardens. A classic menu with refined seasonal pie dishes  elevating the best in local produce is served alongside choice wines from the valley.'
    aboutP2.textContent = 'We are family owned and have no plans to franchise or sell out.  We are committed to serving the best pie in Idaho and we believe that staying family owned is the only way to do that.  We open a few new restaurants each year to serve a few more customers.  If you’ve been with us from the beginning, or joined any time along the way – Thank You!  If you haven’t yet discovered our Fictional Restaurant, we invite you to come on in.   We promise it’s a habit you’ll come to love.'
    aboutWorkTime.textContent = 'Open from';
    aboutP3.textContent = 'Monday to Friday 7AM - 3PM';
    
    container1.appendChild(imgBorder1);
    container1.appendChild(aboutP1);
    container2.appendChild(imgBorder2);
    container2.appendChild(aboutP2);
    container3.appendChild(aboutWorkTime)
    container3.appendChild(aboutP3);


    _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(title);
    _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(container1);
    _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(container2);
    _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(container3);
}



 

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnContact": () => (/* binding */ btnContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const btnContact = document.createElement('button');
btnContact.textContent = 'CONTACT PAGE'


function render(){
_index__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()
    const contactForm = document.createElement('form')
    const container = document.createElement('div');
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    const box3 = document.createElement('div');
    const title = document.createElement('h3');
    const createH1 = document.createElement('h4');
    const createH2= document.createElement('h4');
    const createH3 = document.createElement('h4');
    const createP1 = document.createElement('p');
    const createP2 = document.createElement('p');
    const createP3 = document.createElement('p');

    const name = document.createElement('input')
    const surName = document.createElement('input')
    const email = document.createElement('input')
    const question = document.createElement('textarea')
    const submitForm = document.createElement('button')

    name.setAttribute('placeholder', 'Your Name')
    surName.setAttribute('placeholder', 'Your Surname')
    email.setAttribute('placeholder', 'Your e-mail')
    question.setAttribute('placeholder', 'Write something...')

    submitForm.textContent = 'Submit'
    contactForm.textContent = 'Write us'
    contactForm.setAttribute('id','contact-form')

    container.setAttribute('id', 'container-contact')
    title.textContent = 'CONTACT US'
    createH1.textContent = 'Make a reservation'
    createH2.textContent = 'Ask about a product'
    createH3.textContent = 'Technical issues'
    createP1.textContent = '+555-555-551'
    createP2.textContent = '+555-555-552'
    createP3.textContent = '+555-555-553'

    contactForm.appendChild(name);
    contactForm.appendChild(surName);
    contactForm.appendChild(email);
    contactForm.appendChild(question);
    contactForm.appendChild(submitForm);

    box1.appendChild(createH1)
    box1.appendChild(createP1)
    box2.appendChild(createH2)
    box2.appendChild(createP2)
    box3.appendChild(createH3)
    box3.appendChild(createP3)
    
    container.appendChild(title)
    container.appendChild(box1);
    container.appendChild(box2);
    container.appendChild(box3);
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(container)
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactForm);
}

btnContact.addEventListener('click', render);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const content = document.createElement('div');
const navBar = document.createElement('nav');

content.setAttribute('id', 'content');
navBar.setAttribute('id', 'navbar');

document.body.appendChild(navBar);

navBar.appendChild(_about__WEBPACK_IMPORTED_MODULE_1__.btnAbout);
navBar.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__.btnMenu);
navBar.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__.btnContact);

(0,_about__WEBPACK_IMPORTED_MODULE_1__.render)()
document.body.appendChild(content);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnMenu": () => (/* binding */ btnMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _img_cherry_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cherry.jpg */ "./src/img/cherry.jpg");
/* harmony import */ var _img_AppleCrumb_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/AppleCrumb.jpg */ "./src/img/AppleCrumb.jpg");
/* harmony import */ var _img_Pecan_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Pecan.jpg */ "./src/img/Pecan.jpg");
/* harmony import */ var _img_KeyLime_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/KeyLime.jpg */ "./src/img/KeyLime.jpg");
/* harmony import */ var _img_MississipiMud_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/MississipiMud.jpg */ "./src/img/MississipiMud.jpg");
/* harmony import */ var _img_Sugarfire_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/Sugarfire.jpg */ "./src/img/Sugarfire.jpg");
/* harmony import */ var _img_SeasonalWhoopie_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/SeasonalWhoopie.jpg */ "./src/img/SeasonalWhoopie.jpg");
/* harmony import */ var _img_SeasonalHand_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/SeasonalHand.jpeg */ "./src/img/SeasonalHand.jpeg");











const btnMenu = document.createElement('button');
const title = document.createElement('h3');
const container = document.createElement('div');


title.textContent = 'MENU'
btnMenu.textContent = 'MENU PAGE'
container.setAttribute('id', 'container-menu');

  
    
    
    function render(){
        _index__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()
        container.replaceChildren()
        let modal = document.createElement('div');

        modal.setAttribute('class', 'modal');
        const cherryP = new Image();
            cherryP.src = _img_cherry_jpg__WEBPACK_IMPORTED_MODULE_1__;
        const appleP = new Image();
            appleP.src = _img_AppleCrumb_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const pecanP = new Image();
            pecanP.src = _img_Pecan_jpg__WEBPACK_IMPORTED_MODULE_3__;
        const keyLimeP = new Image();
            keyLimeP.src = _img_KeyLime_jpg__WEBPACK_IMPORTED_MODULE_4__;
        const mississipiMudP = new Image();
            mississipiMudP.src = _img_MississipiMud_jpg__WEBPACK_IMPORTED_MODULE_5__
        const sugarfireP = new Image();
            sugarfireP.src = _img_Sugarfire_jpg__WEBPACK_IMPORTED_MODULE_6__;
        const seasonalWhoopieP = new Image();
            seasonalWhoopieP.src = _img_SeasonalWhoopie_jpg__WEBPACK_IMPORTED_MODULE_7__;
        const seasonalHandP = new Image();
            seasonalHandP.src = _img_SeasonalHand_jpeg__WEBPACK_IMPORTED_MODULE_8__;


        const menu = ['Cherry', 'Apple Crumb', 'Pecan', 'Key Lime ', 'Mississipie Mud ', 'Sugarfire ', 'Seasonal Whoopie ', 'Seasonal Hand ']
        const menuImg = [cherryP, appleP, pecanP, keyLimeP, mississipiMudP, sugarfireP, seasonalWhoopieP, seasonalHandP]
        const price = ['10$', '8$', '8$', '12$', '15$', '6.5$', '1$', '12$']
        for(let i=0;i<menu.length;i++){
            let pBorder = document.createElement('div');
            let descP = document.createElement('p');

            menuImg[i].addEventListener('click', ()=>{
                modal.appendChild(menuImg[i])
                modal.appendChild(descP)
                modal.classList.add('open')
            });

            modal.addEventListener('click', (e)=>{
                if(e.target.classList.contains('modal')){
                    pBorder.appendChild(menuImg[i])
                    pBorder.appendChild(descP)
                    modal.classList.remove('open')
                }
            })
            pBorder.setAttribute('class', 'menu-border')
            descP.textContent = menu[i] + ' ' + 'Pie' +  ' ' + price[i] 
            pBorder.appendChild(menuImg[i])

            pBorder.appendChild(descP)
            container.appendChild(pBorder)
        }
        _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(title)
        container.appendChild(modal)
        _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(container)
    }

btnMenu.addEventListener('click', render);



/***/ }),

/***/ "./src/img/AppleCrumb.jpg":
/*!********************************!*\
  !*** ./src/img/AppleCrumb.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e966f633ba21abf4eb2.jpg";

/***/ }),

/***/ "./src/img/KeyLime.jpg":
/*!*****************************!*\
  !*** ./src/img/KeyLime.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f98f8a49ae148f14e8a.jpg";

/***/ }),

/***/ "./src/img/MississipiMud.jpg":
/*!***********************************!*\
  !*** ./src/img/MississipiMud.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4eb91cc32e7f7c07f6f5.jpg";

/***/ }),

/***/ "./src/img/Pecan.jpg":
/*!***************************!*\
  !*** ./src/img/Pecan.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7137727b82da7b949efc.jpg";

/***/ }),

/***/ "./src/img/SeasonalHand.jpeg":
/*!***********************************!*\
  !*** ./src/img/SeasonalHand.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2363dfabc15b23891591.jpeg";

/***/ }),

/***/ "./src/img/SeasonalWhoopie.jpg":
/*!*************************************!*\
  !*** ./src/img/SeasonalWhoopie.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0671e24f0ed4af809a5b.jpg";

/***/ }),

/***/ "./src/img/Sugarfire.jpg":
/*!*******************************!*\
  !*** ./src/img/Sugarfire.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "075fd230124efa13689e.jpg";

/***/ }),

/***/ "./src/img/chef.jpeg":
/*!***************************!*\
  !*** ./src/img/chef.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78587cf04ea30eba7bb1.jpeg";

/***/ }),

/***/ "./src/img/cherry.jpg":
/*!****************************!*\
  !*** ./src/img/cherry.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "704fb8955d0d290f6941.jpg";

/***/ }),

/***/ "./src/img/icon.jpg":
/*!**************************!*\
  !*** ./src/img/icon.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eee1a4b56406d0974d0d.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjg4NDg0LCAjRkY4QThBKTtcXG59XFxuI25hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkI3Qjc7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuXFxufVxcbiNjb250ZW50IHB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuaDN7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q2RDZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmltZ3tcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcblxcbiNjb250YWluZXItbWVudXtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5jb2x1bW4tZ2FwOiAxMHZtYXg7XFxufVxcblxcbi5tb2RhbHtcXG5kaXNwbGF5OiBmbGV4O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC44KTtcXG5vcGFjaXR5OiAwO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG50cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5tb2RhbC5vcGVue1xcbm9wYWNpdHk6IDE7XFxucG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFsIGltZ3tcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubWF4LXdpZHRoOiA2MCU7XFxuaGVpZ2h0OiA2MCU7XFxudG9wOiA0MCU7XFxubGVmdDogNTAlO1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNSk7XFxuYm9yZGVyLXJhZGl1czogMCU7XFxufVxcblxcbi5tb2RhbC5vcGVuIGltZ3tcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwub3BlbiBwe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1ib3JkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubWVudS1ib3JkZXI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLm1lbnUtYm9yZGVyIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICBcXG59XFxuXFxuLm1lbnUtYm9yZGVyIHB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4jY29udGFjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuI2NvbnRhY3QtZm9ybSBpbnB1dHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jY29udGFjdC1mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpe1xcbiAgICAjY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNuYXZiYXJ7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjY29udGFpbmVyLW1lbnV7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJvcmRlciBpbWd7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbiAgICAjY29udGFjdC1mb3JtIGlucHV0e1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6NTAwcHgpe1xcbiAgICAjY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNuYXZiYXJ7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjY29udGFpbmVyLW1lbnV7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJvcmRlciBpbWd7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbiAgICAjY29udGFjdC1mb3JtIGlucHV0e1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOERBQThEO0FBQ2xFO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsNEJBQTRCOztBQUVoQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZiw2QkFBNkI7QUFDN0IsVUFBVTtBQUNWLE1BQU07QUFDTixPQUFPO0FBQ1AsV0FBVztBQUNYLFlBQVk7QUFDWixvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsV0FBVztBQUNYLFFBQVE7QUFDUixTQUFTO0FBQ1QsMkNBQTJDO0FBQzNDLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7O0FBR3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYix3Q0FBd0M7UUFDeEMscUNBQXFDO1FBQ3JDLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZOztJQUVoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHdDQUF3QztRQUN4QyxxQ0FBcUM7UUFDckMsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1se1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjg4NDg0LCAjRkY4QThBKTtcXG59XFxuI25hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkI3Qjc7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuXFxufVxcbiNjb250ZW50IHB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuaDN7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q2RDZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmltZ3tcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcblxcbiNjb250YWluZXItbWVudXtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5jb2x1bW4tZ2FwOiAxMHZtYXg7XFxufVxcblxcbi5tb2RhbHtcXG5kaXNwbGF5OiBmbGV4O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC44KTtcXG5vcGFjaXR5OiAwO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG50cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XFxufVxcblxcbi5tb2RhbC5vcGVue1xcbm9wYWNpdHk6IDE7XFxucG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFsIGltZ3tcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubWF4LXdpZHRoOiA2MCU7XFxuaGVpZ2h0OiA2MCU7XFxudG9wOiA0MCU7XFxubGVmdDogNTAlO1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNSk7XFxuYm9yZGVyLXJhZGl1czogMCU7XFxufVxcblxcbi5tb2RhbC5vcGVuIGltZ3tcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwub3BlbiBwe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogIDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3R0b206IDEwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1ib3JkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubWVudS1ib3JkZXI6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLm1lbnUtYm9yZGVyIGltZ3tcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbiAgICBcXG59XFxuXFxuLm1lbnUtYm9yZGVyIHB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4jY29udGFjdC1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXG4gICAgcm93LWdhcDogMTBweDtcXG59XFxuI2NvbnRhY3QtZm9ybSBpbnB1dHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jY29udGFjdC1mb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpe1xcbiAgICAjY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNuYXZiYXJ7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjY29udGFpbmVyLW1lbnV7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJvcmRlciBpbWd7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbiAgICAjY29udGFjdC1mb3JtIGlucHV0e1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC1oZWlnaHQ6NTAwcHgpe1xcbiAgICAjY29udGVudHtcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNuYXZiYXJ7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjY29udGFpbmVyLW1lbnV7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWJvcmRlciBpbWd7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgfVxcbiAgICAjY29udGFjdC1mb3JtIGlucHV0e1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoZWYgZnJvbSAnLi9pbWcvY2hlZi5qcGVnJztcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBJY29uIGZyb20gJy4vaW1nL2ljb24uanBnJztcblxuXG5jb25zdCBidG5BYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgY29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGNvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgaW1nQm9yZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaW1nQm9yZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYWJvdXRQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGFib3V0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBhYm91dFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgYWJvdXRXb3JrVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGljb25BYm91dCA9IG5ldyBJbWFnZSgpO1xuY2hlZkltZy5zcmMgPSBjaGVmO1xuaWNvbkFib3V0LnNyYyA9IEljb25cblxuYnRuQWJvdXQudGV4dENvbnRlbnQgPSAnQUJPVVQgUEFHRSc7XG5cbmJ0bkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcblxuZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGltZ0JvcmRlcjEuYXBwZW5kQ2hpbGQoY2hlZkltZyk7XG4gICAgaW1nQm9yZGVyMi5hcHBlbmRDaGlsZChpY29uQWJvdXQpO1xuICAgIFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgRmljdGlvbmFsIFJlc3RhdXJhbnRcIlxuICAgIGFib3V0UDEudGV4dENvbnRlbnQgPSAnVGhlIEZpY3Rpb25hbCBSZXN0YXVyYW50IHNlcnZlcyBiZXN0IGJyZWFrZmFzdCBlbnJpY2hlZCB3aXRoIGZyZXNobHkgYmFrZWQgcGllcy4gVGhlcmUgaXMgc2VhdGluZyBib3RoIGluc2lkZSB0aGUgTWFub3IgSG91c2UgYW5kIG9uIHRoZSBwYXRpbyBiZXNpZGUgdGhlIGhvdGVsIGdhcmRlbnMuIEEgY2xhc3NpYyBtZW51IHdpdGggcmVmaW5lZCBzZWFzb25hbCBwaWUgZGlzaGVzICBlbGV2YXRpbmcgdGhlIGJlc3QgaW4gbG9jYWwgcHJvZHVjZSBpcyBzZXJ2ZWQgYWxvbmdzaWRlIGNob2ljZSB3aW5lcyBmcm9tIHRoZSB2YWxsZXkuJ1xuICAgIGFib3V0UDIudGV4dENvbnRlbnQgPSAnV2UgYXJlIGZhbWlseSBvd25lZCBhbmQgaGF2ZSBubyBwbGFucyB0byBmcmFuY2hpc2Ugb3Igc2VsbCBvdXQuICBXZSBhcmUgY29tbWl0dGVkIHRvIHNlcnZpbmcgdGhlIGJlc3QgcGllIGluIElkYWhvIGFuZCB3ZSBiZWxpZXZlIHRoYXQgc3RheWluZyBmYW1pbHkgb3duZWQgaXMgdGhlIG9ubHkgd2F5IHRvIGRvIHRoYXQuICBXZSBvcGVuIGEgZmV3IG5ldyByZXN0YXVyYW50cyBlYWNoIHllYXIgdG8gc2VydmUgYSBmZXcgbW9yZSBjdXN0b21lcnMuICBJZiB5b3XigJl2ZSBiZWVuIHdpdGggdXMgZnJvbSB0aGUgYmVnaW5uaW5nLCBvciBqb2luZWQgYW55IHRpbWUgYWxvbmcgdGhlIHdheSDigJMgVGhhbmsgWW91ISAgSWYgeW91IGhhdmVu4oCZdCB5ZXQgZGlzY292ZXJlZCBvdXIgRmljdGlvbmFsIFJlc3RhdXJhbnQsIHdlIGludml0ZSB5b3UgdG8gY29tZSBvbiBpbi4gICBXZSBwcm9taXNlIGl04oCZcyBhIGhhYml0IHlvdeKAmWxsIGNvbWUgdG8gbG92ZS4nXG4gICAgYWJvdXRXb3JrVGltZS50ZXh0Q29udGVudCA9ICdPcGVuIGZyb20nO1xuICAgIGFib3V0UDMudGV4dENvbnRlbnQgPSAnTW9uZGF5IHRvIEZyaWRheSA3QU0gLSAzUE0nO1xuICAgIFxuICAgIGNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQoaW1nQm9yZGVyMSk7XG4gICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChhYm91dFAxKTtcbiAgICBjb250YWluZXIyLmFwcGVuZENoaWxkKGltZ0JvcmRlcjIpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoYWJvdXRQMik7XG4gICAgY29udGFpbmVyMy5hcHBlbmRDaGlsZChhYm91dFdvcmtUaW1lKVxuICAgIGNvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoYWJvdXRQMyk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyMSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcjMpO1xufVxuXG5cblxuZXhwb3J0IHtidG5BYm91dCxyZW5kZXJ9OyAiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBQQUdFJ1xuXG5cbmZ1bmN0aW9uIHJlbmRlcigpe1xuY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGNyZWF0ZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBjcmVhdGVIMj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBjcmVhdGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgY3JlYXRlUDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY3JlYXRlUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY3JlYXRlUDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IHN1ck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJylcbiAgICBzdXJOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBTdXJuYW1lJylcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgZS1tYWlsJylcbiAgICBxdWVzdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIHNvbWV0aGluZy4uLicpXG5cbiAgICBzdWJtaXRGb3JtLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcbiAgICBjb250YWN0Rm9ybS50ZXh0Q29udGVudCA9ICdXcml0ZSB1cydcbiAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdC1mb3JtJylcblxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lci1jb250YWN0JylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJ1xuICAgIGNyZWF0ZUgxLnRleHRDb250ZW50ID0gJ01ha2UgYSByZXNlcnZhdGlvbidcbiAgICBjcmVhdGVIMi50ZXh0Q29udGVudCA9ICdBc2sgYWJvdXQgYSBwcm9kdWN0J1xuICAgIGNyZWF0ZUgzLnRleHRDb250ZW50ID0gJ1RlY2huaWNhbCBpc3N1ZXMnXG4gICAgY3JlYXRlUDEudGV4dENvbnRlbnQgPSAnKzU1NS01NTUtNTUxJ1xuICAgIGNyZWF0ZVAyLnRleHRDb250ZW50ID0gJys1NTUtNTU1LTU1MidcbiAgICBjcmVhdGVQMy50ZXh0Q29udGVudCA9ICcrNTU1LTU1NS01NTMnXG5cbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzdXJOYW1lKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocXVlc3Rpb24pO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEZvcm0pO1xuXG4gICAgYm94MS5hcHBlbmRDaGlsZChjcmVhdGVIMSlcbiAgICBib3gxLmFwcGVuZENoaWxkKGNyZWF0ZVAxKVxuICAgIGJveDIuYXBwZW5kQ2hpbGQoY3JlYXRlSDIpXG4gICAgYm94Mi5hcHBlbmRDaGlsZChjcmVhdGVQMilcbiAgICBib3gzLmFwcGVuZENoaWxkKGNyZWF0ZUgzKVxuICAgIGJveDMuYXBwZW5kQ2hpbGQoY3JlYXRlUDMpXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94Mik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveDMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xufVxuXG5idG5Db250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcblxuZXhwb3J0e2J0bkNvbnRhY3R9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7YnRuQWJvdXQsIHJlbmRlcn0gZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgeyBidG5NZW51IH0gZnJvbSAnLi9tZW51J1xuaW1wb3J0IHsgYnRuQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xubmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2YmFyJyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxubmF2QmFyLmFwcGVuZENoaWxkKGJ0bkFib3V0KTtcbm5hdkJhci5hcHBlbmRDaGlsZChidG5NZW51KTtcbm5hdkJhci5hcHBlbmRDaGlsZChidG5Db250YWN0KTtcblxucmVuZGVyKClcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5leHBvcnR7Y29udGVudH0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgY2hlcnJ5IGZyb20gJy4vaW1nL2NoZXJyeS5qcGcnXG5pbXBvcnQgYXBwbGVDcnVtYiBmcm9tICcuL2ltZy9BcHBsZUNydW1iLmpwZydcbmltcG9ydCBwZWNhbiBmcm9tICcuL2ltZy9QZWNhbi5qcGcnXG5pbXBvcnQga2V5TGltZSBmcm9tICcuL2ltZy9LZXlMaW1lLmpwZydcbmltcG9ydCBtaXNzaXNzaXBpTXVkIGZyb20gJy4vaW1nL01pc3Npc3NpcGlNdWQuanBnJ1xuaW1wb3J0IHN1Z2FyZmlyZSBmcm9tICcuL2ltZy9TdWdhcmZpcmUuanBnJ1xuaW1wb3J0IHNlYXNvbmFsV2hvb3BpZSBmcm9tICcuL2ltZy9TZWFzb25hbFdob29waWUuanBnJ1xuaW1wb3J0IHNlYXNvbmFsSGFuZCBmcm9tICcuL2ltZy9TZWFzb25hbEhhbmQuanBlZydcblxuXG5jb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG50aXRsZS50ZXh0Q29udGVudCA9ICdNRU5VJ1xuYnRuTWVudS50ZXh0Q29udGVudCA9ICdNRU5VIFBBR0UnXG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXItbWVudScpO1xuXG4gIFxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNoZXJyeVAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNoZXJyeVAuc3JjID0gY2hlcnJ5O1xuICAgICAgICBjb25zdCBhcHBsZVAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGFwcGxlUC5zcmMgPSBhcHBsZUNydW1iO1xuICAgICAgICBjb25zdCBwZWNhblAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHBlY2FuUC5zcmMgPSBwZWNhbjtcbiAgICAgICAgY29uc3Qga2V5TGltZVAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGtleUxpbWVQLnNyYyA9IGtleUxpbWU7XG4gICAgICAgIGNvbnN0IG1pc3Npc3NpcGlNdWRQID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBtaXNzaXNzaXBpTXVkUC5zcmMgPSBtaXNzaXNzaXBpTXVkXG4gICAgICAgIGNvbnN0IHN1Z2FyZmlyZVAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHN1Z2FyZmlyZVAuc3JjID0gc3VnYXJmaXJlO1xuICAgICAgICBjb25zdCBzZWFzb25hbFdob29waWVQID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBzZWFzb25hbFdob29waWVQLnNyYyA9IHNlYXNvbmFsV2hvb3BpZTtcbiAgICAgICAgY29uc3Qgc2Vhc29uYWxIYW5kUCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgc2Vhc29uYWxIYW5kUC5zcmMgPSBzZWFzb25hbEhhbmQ7XG5cblxuICAgICAgICBjb25zdCBtZW51ID0gWydDaGVycnknLCAnQXBwbGUgQ3J1bWInLCAnUGVjYW4nLCAnS2V5IExpbWUgJywgJ01pc3Npc3NpcGllIE11ZCAnLCAnU3VnYXJmaXJlICcsICdTZWFzb25hbCBXaG9vcGllICcsICdTZWFzb25hbCBIYW5kICddXG4gICAgICAgIGNvbnN0IG1lbnVJbWcgPSBbY2hlcnJ5UCwgYXBwbGVQLCBwZWNhblAsIGtleUxpbWVQLCBtaXNzaXNzaXBpTXVkUCwgc3VnYXJmaXJlUCwgc2Vhc29uYWxXaG9vcGllUCwgc2Vhc29uYWxIYW5kUF1cbiAgICAgICAgY29uc3QgcHJpY2UgPSBbJzEwJCcsICc4JCcsICc4JCcsICcxMiQnLCAnMTUkJywgJzYuNSQnLCAnMSQnLCAnMTIkJ11cbiAgICAgICAgZm9yKGxldCBpPTA7aTxtZW51Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IHBCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBkZXNjUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgbWVudUltZ1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobWVudUltZ1tpXSlcbiAgICAgICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjUClcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSl7XG4gICAgICAgICAgICAgICAgICAgIHBCb3JkZXIuYXBwZW5kQ2hpbGQobWVudUltZ1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcEJvcmRlci5hcHBlbmRDaGlsZChkZXNjUClcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBCb3JkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWJvcmRlcicpXG4gICAgICAgICAgICBkZXNjUC50ZXh0Q29udGVudCA9IG1lbnVbaV0gKyAnICcgKyAnUGllJyArICAnICcgKyBwcmljZVtpXSBcbiAgICAgICAgICAgIHBCb3JkZXIuYXBwZW5kQ2hpbGQobWVudUltZ1tpXSlcblxuICAgICAgICAgICAgcEJvcmRlci5hcHBlbmRDaGlsZChkZXNjUClcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwQm9yZGVyKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbClcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcblxuZXhwb3J0IHtidG5NZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9