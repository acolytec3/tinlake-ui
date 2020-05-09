webpackHotUpdate("static/development/pages/loans.js",{

/***/ "./containers/Loan/List/index.tsx":
/*!****************************************!*\
  !*** ./containers/Loan/List/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_loans__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ducks/loans */ "./ducks/loans.ts");
/* harmony import */ var _ducks_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ducks/analytics */ "./ducks/analytics.ts");
/* harmony import */ var _centrifuge_axis_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @centrifuge/axis-spinner */ "./node_modules/@centrifuge/axis-spinner/dist/index.esm.js");
/* harmony import */ var _ducks_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ducks/auth */ "./ducks/auth.ts");
/* harmony import */ var _components_Loan_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Loan/List */ "./components/Loan/List/index.tsx");
/* harmony import */ var _components_DashboardMetric__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/DashboardMetric */ "./components/DashboardMetric/index.tsx");
/* harmony import */ var _components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Investment/TrancheMetric/erc20 */ "./components/Investment/TrancheMetric/erc20/index.ts");
/* harmony import */ var _static_dai_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../static/dai.json */ "./static/dai.json");
var _static_dai_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../static/dai.json */ "./static/dai.json", 1);





var _jsxFileName = "/home/jim/tinlake-ui/containers/Loan/List/index.tsx";












var LoanList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoanList, _React$Component);

  function LoanList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoanList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          loadLoans = _this$props.loadLoans,
          loadAnalyticsData = _this$props.loadAnalyticsData,
          loadUserProxies = _this$props.loadUserProxies,
          tinlake = _this$props.tinlake;
      loadLoans && loadLoans(tinlake);
      loadAnalyticsData && loadAnalyticsData(tinlake);
      loadUserProxies && loadUserProxies();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          loans = _this$props2.loans,
          analytics = _this$props2.analytics,
          auth = _this$props2.auth,
          ethFrom = _this$props2.tinlake.ethConfig.from;
      var user = auth && auth.user;
      var proxies = user && user.proxies || [];
      var availableFunds = analytics && analytics.data && analytics.data.availableFunds || 0;

      if (loans.loansState === 'loading') {
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_centrifuge_axis_spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
          height: 'calc(100vh - 89px - 84px)',
          message: 'Loading...',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      }

      var filteredLoans = [];
      var hasAdminPermissions = user && user.permissions.canSetInterestRate;

      if (loans && loans.loans && loans.loansState === 'found' && user) {
        filteredLoans = hasAdminPermissions ? loans.loans : loans.loans.filter(function (l) {
          return proxies.includes(l.ownerOf);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: "medium",
        direction: "row",
        basis: 'full',
        gap: "medium",
        alignSelf: "center",
        align: "center",
        alignContent: "center",
        margin: {
          bottom: 'medium'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_DashboardMetric__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Total funds available for borrowing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_14__["Erc20Widget"], {
        value: availableFunds.toString(),
        tokenData: _static_dai_json__WEBPACK_IMPORTED_MODULE_15__,
        precision: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_Loan_List__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loans: filteredLoans,
        proxies: proxies,
        userAddress: ethFrom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " "));
    }
  }]);

  return LoanList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state) {
  return state;
}, {
  loadLoans: _ducks_loans__WEBPACK_IMPORTED_MODULE_8__["loadLoans"],
  loadAnalyticsData: _ducks_analytics__WEBPACK_IMPORTED_MODULE_9__["loadAnalyticsData"],
  loadUserProxies: _ducks_auth__WEBPACK_IMPORTED_MODULE_11__["loadUserProxies"]
})(LoanList));

/***/ })

})
//# sourceMappingURL=loans.js.1dc3c6d6541e50e6f7c7.hot-update.js.map