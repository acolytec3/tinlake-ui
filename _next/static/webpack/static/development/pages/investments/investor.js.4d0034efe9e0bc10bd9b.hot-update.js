webpackHotUpdate("static/development/pages/investments/investor.js",{

/***/ "./containers/Investment/Supply/index.tsx":
/*!************************************************!*\
  !*** ./containers/Investment/Supply/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _services_tinlake_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/tinlake/actions */ "./services/tinlake/actions.ts");
/* harmony import */ var _ducks_transactions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ducks/transactions */ "./ducks/transactions.ts");
/* harmony import */ var tinlake__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinlake */ "./node_modules/tinlake/dist/index.es.js");
/* harmony import */ var _ducks_investments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ducks/investments */ "./ducks/investments.ts");
/* harmony import */ var _ducks_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ducks/analytics */ "./ducks/analytics.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tinlake__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/tinlake */ "./services/tinlake/index.ts");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/Investment/TrancheMetric/erc20 */ "./components/Investment/TrancheMetric/erc20/index.ts");
/* harmony import */ var _static_dai_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../static/dai.json */ "./static/dai.json");
var _static_dai_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../static/dai.json */ "./static/dai.json", 1);









var _jsxFileName = "/home/jim/tinlake-ui/containers/Investment/Supply/index.tsx";













var InvestorSupply =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(InvestorSupply, _React$Component);

  function InvestorSupply() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InvestorSupply);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InvestorSupply)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "supply",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, transactionSubmitted, responseReceived, trancheType, tinlake, investor, loadInvestor, loadAnalyticsData, supplyAmount, res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, transactionSubmitted = _this$props.transactionSubmitted, responseReceived = _this$props.responseReceived, trancheType = _this$props.trancheType, tinlake = _this$props.tinlake, investor = _this$props.investor, loadInvestor = _this$props.loadInvestor, loadAnalyticsData = _this$props.loadAnalyticsData;
              supplyAmount = _this.state.supplyAmount;
              transactionSubmitted && transactionSubmitted("Investment initiated. Please confirm the pending transactions in MetaMask. Processing may take a few seconds.");
              _context.prev = 3;
              _context.next = 6;
              return Object(_services_tinlake__WEBPACK_IMPORTED_MODULE_17__["authTinlake"])();

            case 6:
              _context.next = 8;
              return Object(_services_tinlake_actions__WEBPACK_IMPORTED_MODULE_11__["supply"])(tinlake, supplyAmount, trancheType);

            case 8:
              res = _context.sent;

              if (!(res && res.errorMsg)) {
                _context.next = 12;
                break;
              }

              responseReceived && responseReceived(null, "Investment failed. ".concat(res.errorMsg));
              return _context.abrupt("return");

            case 12:
              if (trancheType === 'junior') {
                responseReceived && responseReceived("Investment successful. Please check your wallet for TIN tokens.", null);
              } else if (trancheType === 'senior') {
                responseReceived && responseReceived("Investment successful. Please check your wallet for DROP tokens.", null);
              }

              loadInvestor && loadInvestor(tinlake, investor.address);
              loadAnalyticsData && loadAnalyticsData(tinlake);
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](3);
              responseReceived && responseReceived(null, "Investment failed. ".concat(_context.t0));
              console.log(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 17]]);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InvestorSupply, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        supplyAmount: '0'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          investor = _this$props2.investor,
          trancheType = _this$props2.trancheType;
      var supplyAmount = this.state.supplyAmount;
      var trancheValues = investor[trancheType];
      var maxSupplyAmount = trancheValues.maxSupply || '0';
      var maxSupplyOverflow = new bn_js__WEBPACK_IMPORTED_MODULE_18___default.a(supplyAmount).cmp(new bn_js__WEBPACK_IMPORTED_MODULE_18___default.a(maxSupplyAmount)) > 0;
      var canSupply = maxSupplyAmount.toString() != '0' && !maxSupplyOverflow;
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        basis: '1/4',
        gap: "medium",
        margin: {
          right: "large"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        gap: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        label: "Investment amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_19__["Erc20Widget"], {
        limit: supplyAmount.toString(),
        tokenData: _static_dai_json__WEBPACK_IMPORTED_MODULE_20__,
        precision: 18,
        onValueChanged: function onValueChanged(value) {
          _this2.setState({
            supplyAmount: Object(tinlake__WEBPACK_IMPORTED_MODULE_13__["displayToBase"])(value, 18)
          });

          console.log(supplyAmount);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.supply,
        primary: true,
        label: "Invest",
        disabled: !canSupply,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), maxSupplyOverflow && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        margin: {
          top: "small"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Max investment amount exceeded. ", react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), "Amount has to be lower then ", react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        weight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "".concat(maxSupplyAmount.toString())))));
    }
  }]);

  return InvestorSupply;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(function (state) {
  return state;
}, {
  loadInvestor: _ducks_investments__WEBPACK_IMPORTED_MODULE_14__["loadInvestor"],
  loadAnalyticsData: _ducks_analytics__WEBPACK_IMPORTED_MODULE_15__["loadAnalyticsData"],
  transactionSubmitted: _ducks_transactions__WEBPACK_IMPORTED_MODULE_12__["transactionSubmitted"],
  responseReceived: _ducks_transactions__WEBPACK_IMPORTED_MODULE_12__["responseReceived"]
})(InvestorSupply));

/***/ })

})
//# sourceMappingURL=investor.js.4d0034efe9e0bc10bd9b.hot-update.js.map