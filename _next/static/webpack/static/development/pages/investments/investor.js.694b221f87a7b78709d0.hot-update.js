webpackHotUpdate("static/development/pages/investments/investor.js",{

/***/ "./containers/Investment/Allowance/index.tsx":
/*!***************************************************!*\
  !*** ./containers/Investment/Allowance/index.tsx ***!
  \***************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_tinlake__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/tinlake */ "./services/tinlake/index.ts");
/* harmony import */ var _components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Investment/TrancheMetric/erc20 */ "./components/Investment/TrancheMetric/erc20/index.ts");
/* harmony import */ var _static_dai_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../static/dai.json */ "./static/dai.json");
var _static_dai_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../static/dai.json */ "./static/dai.json", 1);
/* harmony import */ var _static_drop_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../static/drop.json */ "./static/drop.json");
var _static_drop_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../static/drop.json */ "./static/drop.json", 1);









var _jsxFileName = "/home/jim/tinlake-ui/containers/Investment/Allowance/index.tsx";












var InvestorAllowance =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(InvestorAllowance, _React$Component);

  function InvestorAllowance() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InvestorAllowance);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InvestorAllowance)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setAllowance",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$state, supplyAmount, redeemAmount, _this$props, investor, trancheType, _tinlake, res;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.props.transactionSubmitted && _this.props.transactionSubmitted("Allowance initiated. Please confirm the pending transactions in MetaMask. Processing may take a few seconds.");
              _context.prev = 1;
              _context.next = 4;
              return Object(_services_tinlake__WEBPACK_IMPORTED_MODULE_16__["authTinlake"])();

            case 4:
              _this.updateLimits();

              _this$state = _this.state, supplyAmount = _this$state.supplyAmount, redeemAmount = _this$state.redeemAmount;
              _this$props = _this.props, investor = _this$props.investor, trancheType = _this$props.trancheType, _tinlake = _this$props.tinlake;
              _context.next = 9;
              return Object(_services_tinlake_actions__WEBPACK_IMPORTED_MODULE_11__["setAllowance"])(_tinlake, investor.address, supplyAmount, redeemAmount, trancheType);

            case 9:
              res = _context.sent;

              if (!(res && res.errorMsg)) {
                _context.next = 13;
                break;
              }

              _this.props.responseReceived && _this.props.responseReceived(null, "Allowance failed. ".concat(res.errorMsg));
              return _context.abrupt("return");

            case 13:
              _this.props.responseReceived && _this.props.responseReceived("Allowance successful.", null);
              _this.props.loadInvestor && _this.props.loadInvestor(_tinlake, investor.address);
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              _this.props.responseReceived && _this.props.responseReceived(null, "Allowance failed. ".concat(_context.t0));
              console.log(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 17]]);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InvestorAllowance, [{
    key: "updateLimits",
    value: function updateLimits() {
      if (!this.state) {
        return;
      }

      var _this$props2 = this.props,
          investor = _this$props2.investor,
          trancheType = _this$props2.trancheType;
      var _this$state2 = this.state,
          currentSupplyLimit = _this$state2.currentSupplyLimit,
          currentRedeemLimit = _this$state2.currentRedeemLimit;
      var tranche = investor[trancheType];

      if (currentSupplyLimit != tranche.maxSupply || currentRedeemLimit != tranche.maxRedeem) {
        this.setState({
          currentSupplyLimit: tranche && tranche.maxSupply || '0',
          currentRedeemLimit: tranche && tranche.maxRedeem || '0'
        });
        this.setState({
          supplyAmount: tranche && tranche.maxSupply || '0',
          redeemAmount: tranche && tranche.maxRedeem || '0'
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        supplyAmount: '0',
        redeemAmount: '0',
        currentSupplyLimit: '0',
        currentRedeemLimit: '0'
      });
      this.updateLimits();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          supplyAmount = _this$state3.supplyAmount,
          redeemAmount = _this$state3.redeemAmount;
      this.updateLimits();
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        gap: "medium",
        align: "start",
        margin: {
          bottom: "medium"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Heading"], {
        level: "4",
        margin: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, " Set allowance ")), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        gap: "medium",
        direction: "row",
        margin: {
          right: "large"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        basis: '1/3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        label: "Max investment amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_17__["Erc20Widget"], {
        limit: supplyAmount.toString(),
        tokenData: _static_dai_json__WEBPACK_IMPORTED_MODULE_18__,
        precision: 18,
        onValueChanged: function onValueChanged(value) {
          return _this2.setState({
            supplyAmount: Object(tinlake__WEBPACK_IMPORTED_MODULE_13__["displayToBase"])(value, 18)
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        basis: '1/3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["FormField"], {
        label: "Max redeem amount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Investment_TrancheMetric_erc20__WEBPACK_IMPORTED_MODULE_17__["Erc20Widget"], {
        limit: redeemAmount.toString(),
        tokenData: _static_drop_json__WEBPACK_IMPORTED_MODULE_19__,
        precision: 18,
        onValueChanged: function onValueChanged(value) {
          return _this2.setState({
            redeemAmount: Object(tinlake__WEBPACK_IMPORTED_MODULE_13__["displayToBase"])(value, 18)
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](grommet__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setAllowance,
        primary: true,
        label: "Set Allowance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))));
    }
  }]);

  return InvestorAllowance;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(function (state) {
  return state;
}, {
  loadInvestor: _ducks_investments__WEBPACK_IMPORTED_MODULE_14__["loadInvestor"],
  transactionSubmitted: _ducks_transactions__WEBPACK_IMPORTED_MODULE_12__["transactionSubmitted"],
  responseReceived: _ducks_transactions__WEBPACK_IMPORTED_MODULE_12__["responseReceived"]
})(InvestorAllowance));

/***/ })

})
//# sourceMappingURL=investor.js.694b221f87a7b78709d0.hot-update.js.map