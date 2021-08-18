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
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    background-image: linear-gradient(to bottom, #F88484, #FF8A8A);\n}\n#navbar{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #FFB7B7;\n    box-shadow: 5px 10px #CD6D6D;\n    width: 55vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n#content{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    word-wrap: break-word;\n    text-align: justify;\n    width: 55vw;\n    height: 85vh;\n    background-color: orange;\n    color:white;\n    box-shadow: 5px 10px #CD6D6D;\n\n}\n#content p{\n    max-width: 400px;\n    font-size: 12px;\n}\nh3{\n    margin: 10px;\n}\nbutton{\n    background-color: white;\n    height: 30px;\n    margin: 20px;\n    border: none;\n    cursor: pointer;\n    font-size: 0.6rem;\n}\nbutton:hover{\n    background-color: #CD6D6D;\n    color: white;\n}\ndiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nimg{\n    max-width: 250px;\n    height: auto;\n    border-radius: 50%;\n\n}\n\n\n#container-menu{\ndisplay: grid;\ngrid-template-rows: repeat(auto-fit,1fr);\ngrid-template-columns: repeat(2, 1fr);\ncolumn-gap: 10vmax;\n}\n\n.modal{\ndisplay: flex;\nposition: fixed;\nbackground:rgba(0, 0, 0, 0.8);\nopacity: 0;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n}\n\n.modal.open{\nopacity: 1;\npointer-events: all;\n}\n\n.modal img{\nposition: absolute;\nmax-width: 60%;\nheight: 60%;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%) scale(0.5);\ntransform: all 0.25s ease-out;\nborder-radius: 0%;\n}\n\n.modal.open img{\ntransform: translate(-50%,-50%) scale(1);\n}\n\n.modal.open p{\n    position: fixed;\n    font-size:  1.5rem !important;\n    width: auto;\n    color: white;\n    bottom: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.menu-border{\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 0.3s ease-out;\n    cursor: pointer;\n\n}\n\n.menu-border:hover{\n    transform: scale(1.2);\n}\n.menu-border img{\n    max-width: 150px;\n    border-radius: 50%;\n\n    \n}\n\n.menu-border p{\n    margin: 10px;\n    cursor: text;\n}\n\n#contact-form{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 1fr);\n    row-gap: 10px;\n}\n#contact-form input{\n    width: 400px;\n}\n\n#contact-form button{\n    width: 100px;\n    align-items: end;\n    justify-self: end;\n}\n@media (max-width:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n\n@media (max-height:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8DAA8D;AAClE;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,4BAA4B;IAC5B,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,4BAA4B;;AAEhC;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;;AAEtB;;;AAGA;AACA,aAAa;AACb,wCAAwC;AACxC,qCAAqC;AACrC,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,eAAe;AACf,6BAA6B;AAC7B,UAAU;AACV,MAAM;AACN,OAAO;AACP,WAAW;AACX,YAAY;AACZ,oBAAoB;AACpB;;AAEA;AACA,UAAU;AACV,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;AAClB,cAAc;AACd,WAAW;AACX,QAAQ;AACR,SAAS;AACT,2CAA2C;AAC3C,6BAA6B;AAC7B,iBAAiB;AACjB;;AAEA;AACA,wCAAwC;AACxC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,6BAA6B;IAC7B,eAAe;;AAEnB;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,kBAAkB;;;AAGtB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4CAA4C;IAC5C,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,wCAAwC;QACxC,qCAAqC;QACrC,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,wCAAwC;QACxC,qCAAqC;QACrC,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;;IAEhB;IACA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["html{\n    background-image: linear-gradient(to bottom, #F88484, #FF8A8A);\n}\n#navbar{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #FFB7B7;\n    box-shadow: 5px 10px #CD6D6D;\n    width: 55vw;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n#content{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    word-wrap: break-word;\n    text-align: justify;\n    width: 55vw;\n    height: 85vh;\n    background-color: orange;\n    color:white;\n    box-shadow: 5px 10px #CD6D6D;\n\n}\n#content p{\n    max-width: 400px;\n    font-size: 12px;\n}\nh3{\n    margin: 10px;\n}\nbutton{\n    background-color: white;\n    height: 30px;\n    margin: 20px;\n    border: none;\n    cursor: pointer;\n    font-size: 0.6rem;\n}\nbutton:hover{\n    background-color: #CD6D6D;\n    color: white;\n}\ndiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nimg{\n    max-width: 250px;\n    height: auto;\n    border-radius: 50%;\n\n}\n\n\n#container-menu{\ndisplay: grid;\ngrid-template-rows: repeat(auto-fit,1fr);\ngrid-template-columns: repeat(2, 1fr);\ncolumn-gap: 10vmax;\n}\n\n.modal{\ndisplay: flex;\nposition: fixed;\nbackground:rgba(0, 0, 0, 0.8);\nopacity: 0;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n}\n\n.modal.open{\nopacity: 1;\npointer-events: all;\n}\n\n.modal img{\nposition: absolute;\nmax-width: 60%;\nheight: 60%;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%) scale(0.5);\ntransform: all 0.25s ease-out;\nborder-radius: 0%;\n}\n\n.modal.open img{\ntransform: translate(-50%,-50%) scale(1);\n}\n\n.modal.open p{\n    position: fixed;\n    font-size:  1.5rem !important;\n    width: auto;\n    color: white;\n    bottom: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n.menu-border{\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 0.3s ease-out;\n    cursor: pointer;\n\n}\n\n.menu-border:hover{\n    transform: scale(1.2);\n}\n.menu-border img{\n    max-width: 150px;\n    border-radius: 50%;\n\n    \n}\n\n.menu-border p{\n    margin: 10px;\n    cursor: text;\n}\n\n#contact-form{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 1fr);\n    row-gap: 10px;\n}\n#contact-form input{\n    width: 400px;\n}\n\n#contact-form button{\n    width: 100px;\n    align-items: end;\n    justify-self: end;\n}\n@media (max-width:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n\n@media (max-height:500px){\n    #content{\n        width: 85vw;\n        height: auto;\n    }\n    #navbar{\n        width: 85vw;\n        height: auto;\n    }\n    #container-menu{\n        display: grid;\n        grid-template-rows: repeat(auto-fit,1fr);\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: 1rem;\n    }\n\n    .menu-border img{\n        width: auto;\n        height: auto;\n\n    }\n    #contact-form input{\n        max-width: 250px;\n    }\n}\n"],"sourceRoot":""}]);
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
    aboutWorkTime.textContent = 'Work time';
    aboutP3.textContent = 'Monday to Friday 7PM - 15PM';
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjg4NDg0LCAjRkY4QThBKTtcXG59XFxuI25hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkI3Qjc7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdpZHRoOiA1NXZ3O1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICNDRDZENkQ7XFxuXFxufVxcbiNjb250ZW50IHB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuaDN7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q2RDZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmltZ3tcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcblxcbiNjb250YWluZXItbWVudXtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5jb2x1bW4tZ2FwOiAxMHZtYXg7XFxufVxcblxcbi5tb2RhbHtcXG5kaXNwbGF5OiBmbGV4O1xcbnBvc2l0aW9uOiBmaXhlZDtcXG5iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC44KTtcXG5vcGFjaXR5OiAwO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1vZGFsLm9wZW57XFxub3BhY2l0eTogMTtcXG5wb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ubW9kYWwgaW1ne1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5tYXgtd2lkdGg6IDYwJTtcXG5oZWlnaHQ6IDYwJTtcXG50b3A6IDQwJTtcXG5sZWZ0OiA1MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC41KTtcXG50cmFuc2Zvcm06IGFsbCAwLjI1cyBlYXNlLW91dDtcXG5ib3JkZXItcmFkaXVzOiAwJTtcXG59XFxuXFxuLm1vZGFsLm9wZW4gaW1ne1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC5vcGVuIHB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiAgMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWJvcmRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5tZW51LWJvcmRlcjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4ubWVudS1ib3JkZXIgaW1ne1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgIFxcbn1cXG5cXG4ubWVudS1ib3JkZXIgcHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbiNjb250YWN0LWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxZnIpO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG4jY29udGFjdC1mb3JtIGlucHV0e1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbiNjb250YWN0LWZvcm0gYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgd2lkdGg6IDg1dnc7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgI25hdmJhcntcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250YWluZXItbWVudXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYm9yZGVyIGltZ3tcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICB9XFxuICAgICNjb250YWN0LWZvcm0gaW5wdXR7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LWhlaWdodDo1MDBweCl7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgd2lkdGg6IDg1dnc7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgI25hdmJhcntcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgICNjb250YWluZXItbWVudXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm1lbnUtYm9yZGVyIGltZ3tcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICB9XFxuICAgICNjb250YWN0LWZvcm0gaW5wdXR7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4REFBOEQ7QUFDbEU7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCw0QkFBNEI7O0FBRWhDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7O0FBR0E7QUFDQSxhQUFhO0FBQ2Isd0NBQXdDO0FBQ3hDLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLDZCQUE2QjtBQUM3QixVQUFVO0FBQ1YsTUFBTTtBQUNOLE9BQU87QUFDUCxXQUFXO0FBQ1gsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBLFVBQVU7QUFDVixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLFdBQVc7QUFDWCxRQUFRO0FBQ1IsU0FBUztBQUNULDJDQUEyQztBQUMzQyw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHdDQUF3QztRQUN4QyxxQ0FBcUM7UUFDckMsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isd0NBQXdDO1FBQ3hDLHFDQUFxQztRQUNyQyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTs7SUFFaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWx7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGODg0ODQsICNGRjhBOEEpO1xcbn1cXG4jbmF2YmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjdCNztcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggI0NENkQ2RDtcXG4gICAgd2lkdGg6IDU1dnc7XFxufVxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgd2lkdGg6IDU1dnc7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggI0NENkQ2RDtcXG5cXG59XFxuI2NvbnRlbnQgcHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5oM3tcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRDZENkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaW1ne1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuXFxuI2NvbnRhaW5lci1tZW51e1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbmNvbHVtbi1nYXA6IDEwdm1heDtcXG59XFxuXFxuLm1vZGFse1xcbmRpc3BsYXk6IGZsZXg7XFxucG9zaXRpb246IGZpeGVkO1xcbmJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjgpO1xcbm9wYWNpdHk6IDA7XFxudG9wOiAwO1xcbmxlZnQ6IDA7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbnBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubW9kYWwub3BlbntcXG5vcGFjaXR5OiAxO1xcbnBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb2RhbCBpbWd7XFxucG9zaXRpb246IGFic29sdXRlO1xcbm1heC13aWR0aDogNjAlO1xcbmhlaWdodDogNjAlO1xcbnRvcDogNDAlO1xcbmxlZnQ6IDUwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjUpO1xcbnRyYW5zZm9ybTogYWxsIDAuMjVzIGVhc2Utb3V0O1xcbmJvcmRlci1yYWRpdXM6IDAlO1xcbn1cXG5cXG4ubW9kYWwub3BlbiBpbWd7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vZGFsLm9wZW4gcHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmb250LXNpemU6ICAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAxMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYm9yZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLm1lbnUtYm9yZGVyOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5tZW51LWJvcmRlciBpbWd7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgXFxufVxcblxcbi5tZW51LWJvcmRlciBwe1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuI2NvbnRhY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxufVxcbiNjb250YWN0LWZvcm0gaW5wdXR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI2NvbnRhY3QtZm9ybSBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjbmF2YmFye1xcbiAgICAgICAgd2lkdGg6IDg1dnc7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgI2NvbnRhaW5lci1tZW51e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAubWVudS1ib3JkZXIgaW1ne1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIH1cXG4gICAgI2NvbnRhY3QtZm9ybSBpbnB1dHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtaGVpZ2h0OjUwMHB4KXtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjbmF2YmFye1xcbiAgICAgICAgd2lkdGg6IDg1dnc7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgI2NvbnRhaW5lci1tZW51e1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAubWVudS1ib3JkZXIgaW1ne1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIH1cXG4gICAgI2NvbnRhY3QtZm9ybSBpbnB1dHtcXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGVmIGZyb20gJy4vaW1nL2NoZWYuanBlZyc7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltZy9pY29uLmpwZyc7XG5cblxuY29uc3QgYnRuQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IGNvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGltZ0JvcmRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGltZ0JvcmRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFib3V0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBhYm91dFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgYWJvdXRQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGFib3V0V29ya1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5jb25zdCBjaGVmSW1nID0gbmV3IEltYWdlKCk7XG5jb25zdCBpY29uQWJvdXQgPSBuZXcgSW1hZ2UoKTtcbmNoZWZJbWcuc3JjID0gY2hlZjtcbmljb25BYm91dC5zcmMgPSBJY29uXG5cbmJ0bkFib3V0LnRleHRDb250ZW50ID0gJ0FCT1VUIFBBR0UnO1xuXG5idG5BYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XG5cbmZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBpbWdCb3JkZXIxLmFwcGVuZENoaWxkKGNoZWZJbWcpO1xuICAgIGltZ0JvcmRlcjIuYXBwZW5kQ2hpbGQoaWNvbkFib3V0KTtcbiAgICBcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIEZpY3Rpb25hbCBSZXN0YXVyYW50XCJcbiAgICBhYm91dFAxLnRleHRDb250ZW50ID0gJ1RoZSBGaWN0aW9uYWwgUmVzdGF1cmFudCBzZXJ2ZXMgYmVzdCBicmVha2Zhc3QgZW5yaWNoZWQgd2l0aCBmcmVzaGx5IGJha2VkIHBpZXMuIFRoZXJlIGlzIHNlYXRpbmcgYm90aCBpbnNpZGUgdGhlIE1hbm9yIEhvdXNlIGFuZCBvbiB0aGUgcGF0aW8gYmVzaWRlIHRoZSBob3RlbCBnYXJkZW5zLiBBIGNsYXNzaWMgbWVudSB3aXRoIHJlZmluZWQgc2Vhc29uYWwgcGllIGRpc2hlcyAgZWxldmF0aW5nIHRoZSBiZXN0IGluIGxvY2FsIHByb2R1Y2UgaXMgc2VydmVkIGFsb25nc2lkZSBjaG9pY2Ugd2luZXMgZnJvbSB0aGUgdmFsbGV5LidcbiAgICBhYm91dFAyLnRleHRDb250ZW50ID0gJ1dlIGFyZSBmYW1pbHkgb3duZWQgYW5kIGhhdmUgbm8gcGxhbnMgdG8gZnJhbmNoaXNlIG9yIHNlbGwgb3V0LiAgV2UgYXJlIGNvbW1pdHRlZCB0byBzZXJ2aW5nIHRoZSBiZXN0IHBpZSBpbiBJZGFobyBhbmQgd2UgYmVsaWV2ZSB0aGF0IHN0YXlpbmcgZmFtaWx5IG93bmVkIGlzIHRoZSBvbmx5IHdheSB0byBkbyB0aGF0LiAgV2Ugb3BlbiBhIGZldyBuZXcgcmVzdGF1cmFudHMgZWFjaCB5ZWFyIHRvIHNlcnZlIGEgZmV3IG1vcmUgY3VzdG9tZXJzLiAgSWYgeW914oCZdmUgYmVlbiB3aXRoIHVzIGZyb20gdGhlIGJlZ2lubmluZywgb3Igam9pbmVkIGFueSB0aW1lIGFsb25nIHRoZSB3YXkg4oCTIFRoYW5rIFlvdSEgIElmIHlvdSBoYXZlbuKAmXQgeWV0IGRpc2NvdmVyZWQgb3VyIEZpY3Rpb25hbCBSZXN0YXVyYW50LCB3ZSBpbnZpdGUgeW91IHRvIGNvbWUgb24gaW4uICAgV2UgcHJvbWlzZSBpdOKAmXMgYSBoYWJpdCB5b3XigJlsbCBjb21lIHRvIGxvdmUuJ1xuICAgIGFib3V0V29ya1RpbWUudGV4dENvbnRlbnQgPSAnV29yayB0aW1lJztcbiAgICBhYm91dFAzLnRleHRDb250ZW50ID0gJ01vbmRheSB0byBGcmlkYXkgN1BNIC0gMTVQTSc7XG4gICAgXG4gICAgY29udGFpbmVyMS5hcHBlbmRDaGlsZChpbWdCb3JkZXIxKTtcbiAgICBjb250YWluZXIxLmFwcGVuZENoaWxkKGFib3V0UDEpO1xuICAgIGNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaW1nQm9yZGVyMik7XG4gICAgY29udGFpbmVyMi5hcHBlbmRDaGlsZChhYm91dFAyKTtcbiAgICBjb250YWluZXIzLmFwcGVuZENoaWxkKGFib3V0V29ya1RpbWUpXG4gICAgY29udGFpbmVyMy5hcHBlbmRDaGlsZChhYm91dFAzKTtcblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIxKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcjIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyMyk7XG59XG5cblxuXG5leHBvcnQge2J0bkFib3V0LHJlbmRlcn07ICIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnRuQ29udGFjdC50ZXh0Q29udGVudCA9ICdDT05UQUNUIFBBR0UnXG5cblxuZnVuY3Rpb24gcmVuZGVyKCl7XG5jb250ZW50LnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY3JlYXRlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGNyZWF0ZUgyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGNyZWF0ZUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBjcmVhdGVQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjcmVhdGVQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjcmVhdGVQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3Qgc3VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIE5hbWUnKVxuICAgIHN1ck5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIFN1cm5hbWUnKVxuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBlLW1haWwnKVxuICAgIHF1ZXN0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV3JpdGUgc29tZXRoaW5nLi4uJylcblxuICAgIHN1Ym1pdEZvcm0udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgIGNvbnRhY3RGb3JtLnRleHRDb250ZW50ID0gJ1dyaXRlIHVzJ1xuICAgIGNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0LWZvcm0nKVxuXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyLWNvbnRhY3QnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnXG4gICAgY3JlYXRlSDEudGV4dENvbnRlbnQgPSAnTWFrZSBhIHJlc2VydmF0aW9uJ1xuICAgIGNyZWF0ZUgyLnRleHRDb250ZW50ID0gJ0FzayBhYm91dCBhIHByb2R1Y3QnXG4gICAgY3JlYXRlSDMudGV4dENvbnRlbnQgPSAnVGVjaG5pY2FsIGlzc3VlcydcbiAgICBjcmVhdGVQMS50ZXh0Q29udGVudCA9ICcrNTU1LTU1NS01NTEnXG4gICAgY3JlYXRlUDIudGV4dENvbnRlbnQgPSAnKzU1NS01NTUtNTUyJ1xuICAgIGNyZWF0ZVAzLnRleHRDb250ZW50ID0gJys1NTUtNTU1LTU1MydcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHN1ck5hbWUpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChxdWVzdGlvbik7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Rm9ybSk7XG5cbiAgICBib3gxLmFwcGVuZENoaWxkKGNyZWF0ZUgxKVxuICAgIGJveDEuYXBwZW5kQ2hpbGQoY3JlYXRlUDEpXG4gICAgYm94Mi5hcHBlbmRDaGlsZChjcmVhdGVIMilcbiAgICBib3gyLmFwcGVuZENoaWxkKGNyZWF0ZVAyKVxuICAgIGJveDMuYXBwZW5kQ2hpbGQoY3JlYXRlSDMpXG4gICAgYm94My5hcHBlbmRDaGlsZChjcmVhdGVQMylcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJveDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94Myk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG59XG5cbmJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuXG5leHBvcnR7YnRuQ29udGFjdH0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtidG5BYm91dCwgcmVuZGVyfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGJ0bk1lbnUgfSBmcm9tICcuL21lbnUnXG5pbXBvcnQgeyBidG5Db250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5uYXZCYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXInKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG5uYXZCYXIuYXBwZW5kQ2hpbGQoYnRuQWJvdXQpO1xubmF2QmFyLmFwcGVuZENoaWxkKGJ0bk1lbnUpO1xubmF2QmFyLmFwcGVuZENoaWxkKGJ0bkNvbnRhY3QpO1xuXG5yZW5kZXIoKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmV4cG9ydHtjb250ZW50fSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBjaGVycnkgZnJvbSAnLi9pbWcvY2hlcnJ5LmpwZydcbmltcG9ydCBhcHBsZUNydW1iIGZyb20gJy4vaW1nL0FwcGxlQ3J1bWIuanBnJ1xuaW1wb3J0IHBlY2FuIGZyb20gJy4vaW1nL1BlY2FuLmpwZydcbmltcG9ydCBrZXlMaW1lIGZyb20gJy4vaW1nL0tleUxpbWUuanBnJ1xuaW1wb3J0IG1pc3Npc3NpcGlNdWQgZnJvbSAnLi9pbWcvTWlzc2lzc2lwaU11ZC5qcGcnXG5pbXBvcnQgc3VnYXJmaXJlIGZyb20gJy4vaW1nL1N1Z2FyZmlyZS5qcGcnXG5pbXBvcnQgc2Vhc29uYWxXaG9vcGllIGZyb20gJy4vaW1nL1NlYXNvbmFsV2hvb3BpZS5qcGcnXG5pbXBvcnQgc2Vhc29uYWxIYW5kIGZyb20gJy4vaW1nL1NlYXNvbmFsSGFuZC5qcGVnJ1xuXG5cbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbnRpdGxlLnRleHRDb250ZW50ID0gJ01FTlUnXG5idG5NZW51LnRleHRDb250ZW50ID0gJ01FTlUgUEFHRSdcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lci1tZW51Jyk7XG5cbiAgXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgY29uc3QgY2hlcnJ5UCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY2hlcnJ5UC5zcmMgPSBjaGVycnk7XG4gICAgICAgIGNvbnN0IGFwcGxlUCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgYXBwbGVQLnNyYyA9IGFwcGxlQ3J1bWI7XG4gICAgICAgIGNvbnN0IHBlY2FuUCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGVjYW5QLnNyYyA9IHBlY2FuO1xuICAgICAgICBjb25zdCBrZXlMaW1lUCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAga2V5TGltZVAuc3JjID0ga2V5TGltZTtcbiAgICAgICAgY29uc3QgbWlzc2lzc2lwaU11ZFAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIG1pc3Npc3NpcGlNdWRQLnNyYyA9IG1pc3Npc3NpcGlNdWRcbiAgICAgICAgY29uc3Qgc3VnYXJmaXJlUCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgc3VnYXJmaXJlUC5zcmMgPSBzdWdhcmZpcmU7XG4gICAgICAgIGNvbnN0IHNlYXNvbmFsV2hvb3BpZVAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHNlYXNvbmFsV2hvb3BpZVAuc3JjID0gc2Vhc29uYWxXaG9vcGllO1xuICAgICAgICBjb25zdCBzZWFzb25hbEhhbmRQID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBzZWFzb25hbEhhbmRQLnNyYyA9IHNlYXNvbmFsSGFuZDtcblxuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBbJ0NoZXJyeScsICdBcHBsZSBDcnVtYicsICdQZWNhbicsICdLZXkgTGltZSAnLCAnTWlzc2lzc2lwaWUgTXVkICcsICdTdWdhcmZpcmUgJywgJ1NlYXNvbmFsIFdob29waWUgJywgJ1NlYXNvbmFsIEhhbmQgJ11cbiAgICAgICAgY29uc3QgbWVudUltZyA9IFtjaGVycnlQLCBhcHBsZVAsIHBlY2FuUCwga2V5TGltZVAsIG1pc3Npc3NpcGlNdWRQLCBzdWdhcmZpcmVQLCBzZWFzb25hbFdob29waWVQLCBzZWFzb25hbEhhbmRQXVxuICAgICAgICBjb25zdCBwcmljZSA9IFsnMTAkJywgJzgkJywgJzgkJywgJzEyJCcsICcxNSQnLCAnNi41JCcsICcxJCcsICcxMiQnXVxuICAgICAgICBmb3IobGV0IGk9MDtpPG1lbnUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgcEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGRlc2NQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICBtZW51SW1nW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtZW51SW1nW2ldKVxuICAgICAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGRlc2NQKVxuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpKXtcbiAgICAgICAgICAgICAgICAgICAgcEJvcmRlci5hcHBlbmRDaGlsZChtZW51SW1nW2ldKVxuICAgICAgICAgICAgICAgICAgICBwQm9yZGVyLmFwcGVuZENoaWxkKGRlc2NQKVxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcEJvcmRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtYm9yZGVyJylcbiAgICAgICAgICAgIGRlc2NQLnRleHRDb250ZW50ID0gbWVudVtpXSArICcgJyArICdQaWUnICsgICcgJyArIHByaWNlW2ldIFxuICAgICAgICAgICAgcEJvcmRlci5hcHBlbmRDaGlsZChtZW51SW1nW2ldKVxuXG4gICAgICAgICAgICBwQm9yZGVyLmFwcGVuZENoaWxkKGRlc2NQKVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBCb3JkZXIpXG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG5cbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xuXG5leHBvcnQge2J0bk1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=