webpackHotUpdate("static/development/pages/loans.js",{

/***/ "./components/Investment/TrancheMetric/erc20/Erc20Widget.tsx":
/*!*******************************************************************!*\
  !*** ./components/Investment/TrancheMetric/erc20/Erc20Widget.tsx ***!
  \*******************************************************************/
/*! exports provided: Erc20Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Erc20Widget", function() { return Erc20Widget; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_default_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/default-props */ "./node_modules/grommet/default-props.js");
/* harmony import */ var grommet_default_props__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_default_props__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var _centrifuge_axis_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @centrifuge/axis-utils */ "./node_modules/@centrifuge/axis-utils/dist/index.esm.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _centrifuge_axis_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @centrifuge/axis-theme */ "./node_modules/@centrifuge/axis-theme/dist/index.esm.js");



var _jsxFileName = "/home/jim/tinlake-ui/components/Investment/TrancheMetric/erc20/Erc20Widget.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  fill: black;\n  & :hover {\n    path {\n      fill: black;\n    }\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var defaultThemeProps = {
  erc20Widget: {
    margin: "small"
  }
};
var overflowStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '200px'
};
var specialTheme = {
  select: {
    options: {
      text: {
        weight: 'normal'
      },
      container: {
        align: "start"
      }
    },
    icons: {
      color: "black",
      margin: "xsmall"
    }
  },
  formField: {
    border: {
      position: "outer",
      color: "none"
    },
    margin: {
      bottom: "none"
    }
  },
  anchor: {
    color: 'black',
    textDecoration: 'underline',
    weight: 'normal',
    size: 'small'
  }
};
var Circleinfo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].svg(_templateObject());

var copyIcon = function copyIcon() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "7",
    y: "7",
    width: "8",
    height: "8",
    rx: "2",
    stroke: "#888888",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M3.84615 10H3.23077C2.55103 10 2 9.44897 2 8.76923V3.23077C2 2.55103 2.55103 2 3.23077 2H8.76923C9.44897 2 10 2.55103 10 3.23077V3.84615",
    stroke: "#888888",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }));
};

var Erc20Widget = function Erc20Widget(_ref) {
  var value = _ref.value,
      tokenData = _ref.tokenData,
      search = _ref.search,
      balance = _ref.balance,
      limit = _ref.limit,
      theme = _ref.theme,
      precision = _ref.precision,
      fieldLabel = _ref.fieldLabel,
      account = _ref.account;
  var tokens = [];

  for (var k in tokenData) {
    tokens.push({
      'address': k,
      'logo': tokenData[k]['logo'],
      'decimals': tokenData[k]['decimals'],
      'symbol': tokenData[k]['symbol']
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      displayAmount = _useState4[0],
      setDisplayAmount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(search ? undefined : tokens[0]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      selectedToken = _useState6[0],
      setToken = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tokens),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      options = _useState8[0],
      setOptions = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      showDrop = _useState10[0],
      setDrop = _useState10[1];

  var dropRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var renderToken = function renderToken(token) {
    if (token) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        direction: "row",
        align: "center",
        gap: "small",
        pad: "xsmall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        direction: "row",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        src: token.logo,
        style: {
          width: "32px",
          height: "32px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        direction: "row",
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, token.symbol)));
    } else return undefined;
  };

  var setMax = function setMax(value) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      plain: true,
      onClick: function onClick() {
        setAmount(new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(value));
        setDisplayAmount(new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(value).toFormat());
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      size: "small",
      weight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Set Max"));
  };

  var validateInput = function validateInput() {
    // Check for invalid characters
    if (!/^[0-9,.]*$/.test(displayAmount)) {
      return "Invalid Amount";
    } // Check for amount with too many decimals of precisions for specified token


    try {
      if ((amount === null || amount === void 0 ? void 0 : amount.toString().replace(/\.?0+$/, "").split('.')[1].length) > (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.decimals)) {
        return "Invalid Amount";
      }
    } catch (_unused) {} // Check if amount is greater than balance


    if (amount && balance && new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(amount) > balance) {
      return "Invalid Amount";
    } // Check if amount is greater than limit


    if (amount && limit && new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(amount) > limit) {
      return "Invalid Amount";
    }

    if (amount.isNaN()) {
      return "Invalid Amount";
    }
  };

  var copyAndHighlight = function copyAndHighlight(id) {
    Object(_centrifuge_axis_utils__WEBPACK_IMPORTED_MODULE_7__["copyToClipboard"])(amount ? amount.toString() : "");
    var ref = document.getElementById("tokenValue");
  };

  var updateSearchList = function updateSearchList(text) {
    // The line below escapes regular expression special characters:
    // [ \ ^ $ . | ? * + ( )
    var escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    var exp = new RegExp(escapedText, "i");
    setOptions(options.filter(function (o) {
      return exp.test(o.symbol);
    }));
  };

  var renderAddress = function renderAddress() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      direction: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      style: overflowStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "Account: ", account), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      onClick: function onClick() {
        return Object(_centrifuge_axis_utils__WEBPACK_IMPORTED_MODULE_7__["copyToClipboard"])(account);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, copyIcon()));
  };

  var renderDisplayAmount = function renderDisplayAmount(newAmount) {
    if (!/^[0-9,.]*$/.test(newAmount)) {
      setDisplayAmount(newAmount);
    } else if (newAmount[newAmount.length - 1] == '.' || newAmount[newAmount.length - 1] == '0') {
      setDisplayAmount(newAmount);
    } else {
      var newValue = newAmount.replace(/,/g, '');
      setAmount(new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(newValue));
      setDisplayAmount(new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(newValue).toFormat());
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_centrifuge_axis_theme__WEBPACK_IMPORTED_MODULE_9__["AxisTheme"], {
    theme: specialTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "column",
    align: "start",
    style: {
      width: tokens.length > 1 ? "336px" : "284px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row-responsive",
    justify: "between",
    gap: "xsmall",
    ref: dropRef,
    fill: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontSize: "small"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, fieldLabel), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Circleinfo, {
    onClick: function onClick() {
      return selectedToken ? setDrop(true) : undefined;
    },
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M8.00008 15.3333C3.93341 15.3333 0.666748 12.0666 0.666748 7.99996C0.666748 3.93329 3.93341 0.666626 8.00008 0.666626C12.0667 0.666626 15.3334 3.93329 15.3334 7.99996C15.3334 12.0666 12.0667 15.3333 8.00008 15.3333ZM8.00008 1.99996C4.66675 1.99996 2.00008 4.66663 2.00008 7.99996C2.00008 11.3333 4.66675 14 8.00008 14C11.3334 14 14.0001 11.3333 14.0001 7.99996C14.0001 4.66663 11.3334 1.99996 8.00008 1.99996Z",
    fill: "#EEEEEE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M7.99992 11.3334C7.59992 11.3334 7.33325 11.0667 7.33325 10.6667V8.00004C7.33325 7.60004 7.59992 7.33337 7.99992 7.33337C8.39992 7.33337 8.66659 7.60004 8.66659 8.00004V10.6667C8.66659 11.0667 8.39992 11.3334 7.99992 11.3334Z",
    fill: "#EEEEEE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M7.99992 5.99996C7.79992 5.99996 7.66659 5.93329 7.53325 5.79996C7.39992 5.66663 7.33325 5.53329 7.33325 5.33329C7.33325 5.13329 7.39992 4.99996 7.53325 4.86663C7.79992 4.59996 8.19992 4.59996 8.46659 4.86663C8.59992 4.99996 8.66659 5.13329 8.66659 5.33329C8.66659 5.53329 8.59992 5.66663 8.46659 5.79996C8.33325 5.93329 8.19992 5.99996 7.99992 5.99996Z",
    fill: "#EEEEEE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), showDrop && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Drop"], {
    stretch: false,
    pad: "small",
    onClickOutside: function onClickOutside() {
      return setDrop(false);
    },
    target: dropRef.current,
    align: {
      right: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, account && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "ERC20 Token Balance"), account && renderAddress(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Token: ", selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Anchor"], {
    href: "https://etherscan.io/token/" + (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address),
    label: "View Token",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), "\xA0on Etherscan")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row-responsive",
    gap: "xxsmall",
    justify: "between",
    fill: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, !value && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row",
    style: {
      borderBottom: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["FormField"], {
    validate: function validate() {
      return validateInput();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["TextInput"], {
    style: {
      minWidth: "212px"
    },
    placeholder: "100,000,000.000",
    value: displayAmount,
    onChange: function onChange(event) {
      return renderDisplayAmount(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })))), value && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    flex: "shrink",
    direction: "row",
    style: {
      borderBottom: "1px solid #EEEEEE",
      alignItems: "center"
    },
    onClick: function onClick(event) {
      if (event.detail == 2) {
        copyAndHighlight("tokenValue");
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      width: "212px"
    },
    truncate: true,
    id: "tokenValue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, precision ? new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(value).toFormat(precision) + (value.toString().includes('.') && value.toString().split('.')[1].length > precision ? '…' : '') : new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(value).toFormat())), tokens.length == 1 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    fill: "horizontal",
    direction: "row",
    gap: "small",
    align: "center",
    border: {
      side: 'bottom',
      color: value ? '#EEEEEE' : "black"
    },
    style: {
      width: "72",
      maxWidth: "100px",
      borderLeft: !value ? '1px solid #EEEEEE' : undefined
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, renderToken(selectedToken)), tokens.length > 1 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row",
    gap: "small",
    align: "end",
    fill: "horizontal",
    style: {
      width: "120px",
      alignContent: "end",
      borderLeft: '1px solid #EEEEEE',
      borderBottom: '1px solid black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    plain: true,
    children: renderToken,
    options: tokens,
    value: value,
    labelKey: "label",
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setToken(option);
    },
    valueLabel: renderToken(selectedToken),
    onClose: function onClose() {
      return search ? setOptions(tokens) : undefined;
    },
    searchPlaceholder: search ? "Search" : undefined,
    onSearch: search ? function (text) {
      return updateSearchList(text);
    } : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }))), (balance || limit) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    direction: "row",
    alignSelf: "end",
    gap: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, balance ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "small",
    alignSelf: "end",
    truncate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "Balance : ", new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(balance).toFormat()) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "small",
    alignSelf: "end",
    truncate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "Limit : ", new bignumber_js__WEBPACK_IMPORTED_MODULE_8___default.a(limit).toFormat()), balance ? setMax(balance) : setMax(limit))));
};
Object(grommet_default_props__WEBPACK_IMPORTED_MODULE_5__["extendDefaultTheme"])(defaultThemeProps);
Erc20Widget.defaultProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  tokens: [{
    symbol: "DAI",
    logo: "",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    decimals: 12
  }]
}, grommet_default_props__WEBPACK_IMPORTED_MODULE_5__["defaultProps"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["withTheme"])(Erc20Widget));

/***/ })

})
//# sourceMappingURL=loans.js.d658fd302bfc4aef4646.hot-update.js.map