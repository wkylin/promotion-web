"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[122],{

/***/ 9122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8385);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6974);





var Coupons = function Coupons(_ref) {
  var _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    type: "primary",
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo('');
    }
  }, "Home Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    type: "text",
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo('add');
    }
  }, "Add Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo('edit/1');
    }
  }, "Edit Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    type: "dashed",
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo('detail/2');
    }
  }, "Detail Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Outlet */ .j3, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Coupons);

/***/ })

}]);
//# sourceMappingURL=122.6bbbf30ee5c40c0d467a.js.map