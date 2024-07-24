"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ourwork",{

/***/ "./src/components/sections/WorkTiles.jsx":
/*!***********************************************!*\
  !*** ./src/components/sections/WorkTiles.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svgs_3d_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/3d.png */ \"./src/components/sections/svgs/3d.png\");\n/* harmony import */ var _svgs_Corporatefilms_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/Corporatefilms.png */ \"./src/components/sections/svgs/Corporatefilms.png\");\n/* harmony import */ var _svgs_Educational_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/Educational.png */ \"./src/components/sections/svgs/Educational.png\");\n/* harmony import */ var _svgs_Frame_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svgs/Frame.png */ \"./src/components/sections/svgs/Frame.png\");\n/* harmony import */ var _svgs_carshoot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svgs/carshoot.png */ \"./src/components/sections/svgs/carshoot.png\");\n/* harmony import */ var _svgs_audio_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svgs/audio.png */ \"./src/components/sections/svgs/audio.png\");\n/* harmony import */ var _svgs_technologo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svgs/technologo.png */ \"./src/components/sections/svgs/technologo.png\");\n/* harmony import */ var _svgs_social_media_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svgs/social_media.png */ \"./src/components/sections/svgs/social_media.png\");\n/* harmony import */ var _svgs_digital_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgs/digital.png */ \"./src/components/sections/svgs/digital.png\");\n/* harmony import */ var _ModalWorkTiles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalWorkTiles */ \"./src/components/sections/ModalWorkTiles.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst WorkTiles = ()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [src, setSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const Toggle = ()=>setModal(!modal);\n    const handleClick = (data)=>{\n        setSrc(data);\n        setModal(true);\n    };\n    const Card = [\n        {\n            src: _svgs_3d_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n            alt: \"3D\",\n            Tooltip: \"https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=27oAX7vd74aGJJGQ\"\n        },\n        {\n            src: _svgs_Corporatefilms_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n            alt: \"Gem and Jewellary Export Council (India) TVC / Docufilm\",\n            Tooltip: \"https://www.youtube.com/embed/5OxSXKWXgUs?autoplay=1&loop=1&mute=1&si=TRUkb9OOo-fvqCBu\"\n        },\n        {\n            src: _svgs_Educational_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: \"Ring Binder\",\n            Tooltip: \"https://www.youtube.com/embed/uqQ7uaAs_Vc?autoplay=1&loop=1&mute=1&si=ppsjFYqi38Kn7z7i\"\n        },\n        {\n            src: _svgs_Frame_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n            alt: \"Techno go Spark\",\n            Tooltip: \"https://www.youtube.com/embed/sV61LynzMWE?autoplay=1&loop=1&mute=1&si=RspBQNWKvfTSzXBj\"\n        },\n        {\n            src: _svgs_carshoot_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n            alt: \"Trip Shoot\",\n            Tooltip: \"https://www.youtube.com/embed/CJPSyWqzt9Y?autoplay=1&loop=1&mute=1&si=3rfh9bPyuOhue76V\"\n        },\n        {\n            src: _svgs_audio_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src,\n            alt: \"Techno Hipods H2\",\n            Tooltip: \"https://www.youtube.com/embed/q_uLkYrwqW4?autoplay=1&loop=1&mute=1&si=-9vo630vqnh9iLbX\"\n        },\n        {\n            src: _svgs_social_media_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"].src,\n            alt: \"Uno Minda Multi Media\",\n            Tooltip: \"https://www.youtube.com/embed/9ejZpXeAOJ4?autoplay=1&loop=1&mute=1&si=VQo2HggDpWqppY9d\"\n        },\n        {\n            src: _svgs_technologo_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"].src,\n            alt: \"Techno Spark Launch\",\n            Tooltip: \"https://www.youtube.com/embed/ZB04bcqIKf8?autoplay=1&loop=1&mute=1&si=pXbdnJK7uRYao6BA\"\n        },\n        {\n            src: _svgs_digital_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"].src,\n            alt: \"AV Explainer\",\n            Tooltip: \"https://www.youtube.com/embed/A4uxqoMIumM?autoplay=1&loop=1&mute=1&si=P2DJiIHyXcv6p5v9\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"onovo-section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row d-flex\",\n                        children: Card.map((e)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xs-12 col-sm-12 col-md-9 col-lg-4 p-0 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container-custome\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: e.src,\n                                            alt: \"\",\n                                            onClick: ()=>{\n                                                handleClick(e.Tooltip);\n                                            },\n                                            className: \"image-custome\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"overlay\",\n                                            onClick: ()=>{\n                                                handleClick(e.Tooltip);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-custome\",\n                                                children: e.alt\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, e, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalWorkTiles__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    show: modal,\n                    close: Toggle,\n                    Src: src\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\testCF\\\\verceldeploy\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\WorkTiles.jsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(WorkTiles, \"4UZ9Ggakl975DVMSydmuVRgF9CM=\");\n_c = WorkTiles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkTiles);\nvar _c;\n$RefreshReg$(_c, \"WorkTiles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9Xb3JrVGlsZXMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0U7QUFDZTtBQUNIO0FBQ1Y7QUFDTTtBQUNOO0FBQ007QUFDTztBQUNUO0FBQ0s7QUFFOUMsTUFBTVcsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsS0FBS0MsT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUvQixNQUFNZ0IsU0FBUyxJQUFNSCxTQUFTLENBQUNEO0lBQy9CLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJILE9BQU9HO1FBQ1BMLFNBQVM7SUFDWDtJQUVBLE1BQU1NLE9BQU87UUFDWDtZQUNFTCxLQUFLYix3REFBVTtZQUNmbUIsS0FBSztZQUNMQyxTQUFTO1FBQ1g7UUFDQTtZQUNFUCxLQUFLWixvRUFBYTtZQUNsQmtCLEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBRUE7WUFDRVAsS0FBS1gsaUVBQWE7WUFDbEJpQixLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VQLEtBQUtWLDJEQUFTO1lBQ2RnQixLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VQLEtBQUtULDhEQUFZO1lBQ2pCZSxLQUFLO1lBQ0xDLFNBQVM7UUFDWDtRQUNBO1lBQ0VQLEtBQUtSLDJEQUFTO1lBQ2RjLEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBQ0E7WUFDRVAsS0FBS04sa0VBQWU7WUFDcEJZLEtBQUs7WUFDTEMsU0FBUztRQUNYO1FBQ0E7WUFDRVAsS0FBS1AsZ0VBQVU7WUFDZmEsS0FBSztZQUNMQyxTQUFTO1FBQ1g7UUFDQTtZQUNFUCxLQUFLTCw4REFBVztZQUNoQlcsS0FBSztZQUNMQyxTQUFTO1FBQ1g7S0FDRDtJQUNELHFCQUNFO2tCQUVFLDRFQUFDQztZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWkosS0FBS00sR0FBRyxDQUFDLENBQUNDOzRCQUNULHFCQUNFLDhEQUFDRjtnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FDQ2IsS0FBS1ksRUFBRVosR0FBRzs0Q0FDVk0sS0FBSTs0Q0FDSlEsU0FBUztnREFDUFgsWUFBWVMsRUFBRUwsT0FBTzs0Q0FDdkI7NENBQ0FFLFdBQVU7Ozs7OztzREFFWiw4REFBQ0M7NENBQ0NELFdBQVU7NENBQ1ZLLFNBQVM7Z0RBQ1BYLFlBQVlTLEVBQUVMLE9BQU87NENBQ3ZCO3NEQUVBLDRFQUFDRztnREFBSUQsV0FBVTswREFBZ0JHLEVBQUVOLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWhCdUJNOzs7Ozt3QkFxQnJFOzs7Ozs7Ozs7Ozs4QkFHSiw4REFBQ2hCLHdEQUFjQTtvQkFBQ21CLE1BQU1qQjtvQkFBT2tCLE9BQU9kO29CQUFRZSxLQUFLakI7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0E5Rk1IO0tBQUFBO0FBZ0dOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL1dvcmtUaWxlcy5qc3g/MDdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGhyZWVEIGZyb20gXCIuL3N2Z3MvM2QucG5nXCI7XHJcbmltcG9ydCBDb3Jwb3JhdGUgZnJvbSBcIi4vc3Zncy9Db3Jwb3JhdGVmaWxtcy5wbmdcIjtcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi9zdmdzL0VkdWNhdGlvbmFsLnBuZ1wiO1xyXG5pbXBvcnQgRnJhbWUgZnJvbSBcIi4vc3Zncy9GcmFtZS5wbmdcIjtcclxuaW1wb3J0IENhcnNob290IGZyb20gXCIuL3N2Z3MvY2Fyc2hvb3QucG5nXCI7XHJcbmltcG9ydCBBdWRpbyBmcm9tIFwiLi9zdmdzL2F1ZGlvLnBuZ1wiO1xyXG5pbXBvcnQgVGVjaG5vIGZyb20gXCIuL3N2Z3MvdGVjaG5vbG9nby5wbmdcIjtcclxuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuL3N2Z3Mvc29jaWFsX21lZGlhLnBuZ1wiO1xyXG5pbXBvcnQgRGlnaXRhbCBmcm9tIFwiLi9zdmdzL2RpZ2l0YWwucG5nXCI7XHJcbmltcG9ydCBNb2RhbFdvcmtUaWxlcyBmcm9tIFwiLi9Nb2RhbFdvcmtUaWxlc1wiO1xyXG5cclxuY29uc3QgV29ya1RpbGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgVG9nZ2xlID0gKCkgPT4gc2V0TW9kYWwoIW1vZGFsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRTcmMoZGF0YSk7XHJcbiAgICBzZXRNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBDYXJkID0gW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFRocmVlRC5zcmMsXHJcbiAgICAgIGFsdDogXCIzRFwiLFxyXG4gICAgICBUb29sdGlwOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1pCMDRiY3FJS2Y4P2F1dG9wbGF5PTEmbG9vcD0xJm11dGU9MSZzaT0yN29BWDd2ZDc0YUdKSkdRXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IENvcnBvcmF0ZS5zcmMsXHJcbiAgICAgIGFsdDogXCJHZW0gYW5kIEpld2VsbGFyeSBFeHBvcnQgQ291bmNpbCAoSW5kaWEpIFRWQyAvIERvY3VmaWxtXCIsXHJcbiAgICAgIFRvb2x0aXA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNU94U1hLV1hnVXM/YXV0b3BsYXk9MSZsb29wPTEmbXV0ZT0xJnNpPVRSVWtiOU9Pby1mdnFDQnVcIixcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgc3JjOiBFZHVjYXRpb24uc3JjLFxyXG4gICAgICBhbHQ6IFwiUmluZyBCaW5kZXJcIixcclxuICAgICAgVG9vbHRpcDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC91cVE3dWFBc19WYz9hdXRvcGxheT0xJmxvb3A9MSZtdXRlPTEmc2k9cHBzakZZcWkzOEtuN3o3aVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBGcmFtZS5zcmMsXHJcbiAgICAgIGFsdDogXCJUZWNobm8gZ28gU3BhcmtcIixcclxuICAgICAgVG9vbHRpcDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9zVjYxTHluek1XRT9hdXRvcGxheT0xJmxvb3A9MSZtdXRlPTEmc2k9UnNwQlFOV0t2ZlRTelhCalwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBDYXJzaG9vdC5zcmMsXHJcbiAgICAgIGFsdDogXCJUcmlwIFNob290XCIsXHJcbiAgICAgIFRvb2x0aXA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQ0pQU3lXcXp0OVk/YXV0b3BsYXk9MSZsb29wPTEmbXV0ZT0xJnNpPTNyZmg5YlB5dU9odWU3NlZcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogQXVkaW8uc3JjLFxyXG4gICAgICBhbHQ6IFwiVGVjaG5vIEhpcG9kcyBIMlwiLFxyXG4gICAgICBUb29sdGlwOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3FfdUxrWXJ3cVc0P2F1dG9wbGF5PTEmbG9vcD0xJm11dGU9MSZzaT0tOXZvNjMwdnFuaDlpTGJYXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFNvY2lhbE1lZGlhLnNyYyxcclxuICAgICAgYWx0OiBcIlVubyBNaW5kYSBNdWx0aSBNZWRpYVwiLFxyXG4gICAgICBUb29sdGlwOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzllalpwWGVBT0o0P2F1dG9wbGF5PTEmbG9vcD0xJm11dGU9MSZzaT1WUW8ySGdnRHBXcXBwWTlkXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFRlY2huby5zcmMsXHJcbiAgICAgIGFsdDogXCJUZWNobm8gU3BhcmsgTGF1bmNoXCIsXHJcbiAgICAgIFRvb2x0aXA6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvWkIwNGJjcUlLZjg/YXV0b3BsYXk9MSZsb29wPTEmbXV0ZT0xJnNpPXBYYmRuSks3dVJZYW82QkFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogRGlnaXRhbC5zcmMsXHJcbiAgICAgIGFsdDogXCJBViBFeHBsYWluZXJcIixcclxuICAgICAgVG9vbHRpcDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9BNHV4cW9NSXVtTT9hdXRvcGxheT0xJmxvb3A9MSZtdXRlPTEmc2k9UDJESmlJSHlYY3Y2cDV2OVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J29ub3ZvLXNlY3Rpb24nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBkLWZsZXgnPlxyXG4gICAgICAgICAgICB7Q2FyZC5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTkgY29sLWxnLTQgcC0wICcga2V5PXtlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1jdXN0b21lJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGUuVG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWFnZS1jdXN0b21lJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvdmVybGF5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayhlLlRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jdXN0b21lJz57ZS5hbHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxXb3JrVGlsZXMgc2hvdz17bW9kYWx9IGNsb3NlPXtUb2dnbGV9IFNyYz17c3JjfSAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1RpbGVzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUaHJlZUQiLCJDb3Jwb3JhdGUiLCJFZHVjYXRpb24iLCJGcmFtZSIsIkNhcnNob290IiwiQXVkaW8iLCJUZWNobm8iLCJTb2NpYWxNZWRpYSIsIkRpZ2l0YWwiLCJNb2RhbFdvcmtUaWxlcyIsIldvcmtUaWxlcyIsIm1vZGFsIiwic2V0TW9kYWwiLCJzcmMiLCJzZXRTcmMiLCJUb2dnbGUiLCJoYW5kbGVDbGljayIsImRhdGEiLCJDYXJkIiwiYWx0IiwiVG9vbHRpcCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJlIiwiaW1nIiwib25DbGljayIsInNob3ciLCJjbG9zZSIsIlNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/sections/WorkTiles.jsx\n"));

/***/ })

});