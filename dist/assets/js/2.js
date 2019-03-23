(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/theme/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/theme/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.service.js */ \"./src/app.service.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      username: '',\n      password: '',\n      isAuthenticated: false\n    };\n  },\n\n  methods: {\n    login: function login() {\n      _app_service_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].login({ username: this.username, password: this.password }).then(function (data) {\n        window.localStorage.setItem('token', data.token);\n        window.localStorage.setItem('tokenExpiration', data.expiration);\n      }).catch(function () {\n        return window.alert('could not login');\n      });\n    },\n    created: function created() {\n      var expiration = window.localStorage.getItem('tokenExpiration');\n      var unixTimeStamp = new Date().getTime() / 1000;\n      if (expiration !== null && parseInt(expiration) - unixTimeStamp > 0) {\n        this.isAuthenticated = true;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/theme/Login.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/theme/Login.vue?vue&type=template&id=3416028c&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/theme/Login.vue?vue&type=template&id=3416028c& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"content\" }, [\n    _c(\"h2\", [_vm._v(\"Login\")]),\n    _vm._v(\" \"),\n    this.isAuthenticated\n      ? _c(\"div\", [_vm._v(\"\\n    Authenticated\\n  \")])\n      : _c(\"div\", [\n          _c(\"div\", { staticClass: \"field is-horizontal\" }, [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"field-body\" }, [\n              _c(\"div\", { staticClass: \"field\" }, [\n                _c(\"div\", { staticClass: \"control\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: _vm.username,\n                        expression: \"username\"\n                      }\n                    ],\n                    staticClass: \"input\",\n                    attrs: { type: \"text\", placeholder: \"Your username\" },\n                    domProps: { value: _vm.username },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.username = $event.target.value\n                      }\n                    }\n                  })\n                ])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"field is-horizontal\" }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"field-body\" }, [\n              _c(\"div\", { staticClass: \"field\" }, [\n                _c(\"div\", { staticClass: \"control\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: _vm.password,\n                        expression: \"password\"\n                      }\n                    ],\n                    staticClass: \"input\",\n                    attrs: { type: \"password\", placeholder: \"Your password\" },\n                    domProps: { value: _vm.password },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.password = $event.target.value\n                      }\n                    }\n                  })\n                ])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"field is-horizontal\" }, [\n            _c(\"div\", { staticClass: \"field-label\" }),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"field-body\" }, [\n              _c(\"div\", { staticClass: \"field\" }, [\n                _c(\"div\", { staticClass: \"control\" }, [\n                  _c(\n                    \"button\",\n                    {\n                      staticClass: \"button is-primary\",\n                      on: {\n                        click: function($event) {\n                          return _vm.login()\n                        }\n                      }\n                    },\n                    [_vm._v(\"\\n          Login\\n          \")]\n                  )\n                ])\n              ])\n            ])\n          ])\n        ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"field-label is-normal\" }, [\n      _c(\"label\", { staticClass: \"label\" }, [_vm._v(\"Username\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"field-label is-normal\" }, [\n      _c(\"label\", { staticClass: \"label\" }, [_vm._v(\"Password\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/theme/Login.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/app.service.js":
/*!****************************!*\
  !*** ./src/app.service.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'https://api.fullstackweekly.com/wp-json/wp/v2/posts?categories=11&per_page=6';\n\nvar appService = {\n  getPost: function getPost(categoryId) {\n    return new Promise(function (resolve) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.fullstackweekly.com/wp-json/wp/v2/posts?categories=' + categoryId + '&per_page=6').then(function (response) {\n        resolve(response.data);\n      });\n    });\n  },\n  login: function login(credentials) {\n    return new Promise(function (resolve, reject) {\n      // Axios.post(`http://localhost:3001/api/v1/login`, credentials)\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('https://api.fullstackweekly.com/services/auth.php', credentials).then(function (response) {\n        resolve(response.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appService);\n\n//# sourceURL=webpack:///./src/app.service.js?");

/***/ }),

/***/ "./src/theme/Login.vue":
/*!*****************************!*\
  !*** ./src/theme/Login.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3416028c& */ \"./src/theme/Login.vue?vue&type=template&id=3416028c&\");\n/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ \"./src/theme/Login.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/theme/Login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/theme/Login.vue?");

/***/ }),

/***/ "./src/theme/Login.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/theme/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/theme/Login.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/theme/Login.vue?");

/***/ }),

/***/ "./src/theme/Login.vue?vue&type=template&id=3416028c&":
/*!************************************************************!*\
  !*** ./src/theme/Login.vue?vue&type=template&id=3416028c& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=3416028c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/theme/Login.vue?vue&type=template&id=3416028c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3416028c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/theme/Login.vue?");

/***/ })

}]);