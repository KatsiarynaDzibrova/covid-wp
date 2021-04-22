/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-block */ \"./app/info-block/index.js\");\n/* harmony import */ var _info_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_info_block__WEBPACK_IMPORTED_MODULE_0__);\n// Main File\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIEZpbGVcbmltcG9ydCAnLi9pbmZvLWJsb2NrJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/info-block/index.js":
/*!*********************************!*\
  !*** ./app/info-block/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaUpload = _wp$editor.MediaUpload,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck;\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextareaControl = _wp$components.TextareaControl,\n    CheckboxControl = _wp$components.CheckboxControl,\n    Button = _wp$components.Button,\n    RadioControl = _wp$components.RadioControl,\n    RangeControl = _wp$components.RangeControl;\n\nvar getImage = function getImage(img_URL, img_alt) {\n  return wp.element.createElement(\"img\", {\n    src: img_URL,\n    alt: img_alt\n  });\n};\n\nvar getMessage = function getMessage(primary_header, secondary_header, message) {\n  return wp.element.createElement(\"div\", null, wp.element.createElement(\"h3\", {\n    className: \"title-1\"\n  }, \" \", primary_header, \" \"), wp.element.createElement(\"h2\", {\n    className: \"title-2\"\n  }, \" \", secondary_header, \" \"), wp.element.createElement(\"p\", {\n    className: \"message\"\n  }, \" \", message, \" \"));\n};\n\nvar getButton = function getButton(button_text) {\n  return wp.element.createElement(\"div\", null, wp.element.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn alert-btn\",\n    \"data-toggle\": \"modal\",\n    \"data-target\": \"#myModal\"\n  }, button_text), wp.element.createElement(\"div\", {\n    className: \"modal fade\",\n    id: \"myModal\",\n    role: \"dialog\"\n  }, wp.element.createElement(\"div\", {\n    className: \"modal-dialog modal-sm\"\n  }, wp.element.createElement(\"div\", {\n    className: \"modal-content\"\n  }, wp.element.createElement(\"div\", {\n    className: \"modal-header\"\n  }, wp.element.createElement(\"button\", {\n    type: \"button\",\n    className: \"close\",\n    \"data-dismiss\": \"modal\"\n  }, \"\\xD7\"), wp.element.createElement(\"h4\", {\n    className: \"modal-title\"\n  }, button_text)), wp.element.createElement(\"div\", {\n    className: \"modal-body\"\n  }, wp.element.createElement(\"p\", null, \"This is a small modal.\")), wp.element.createElement(\"div\", {\n    className: \"modal-footer\"\n  }, wp.element.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-default\",\n    \"data-dismiss\": \"modal\"\n  }, \"Close\"))))));\n};\n\nregisterBlockType('udemy/inspector-controls-example', {\n  title: __('Info', 'recipe'),\n  description: __('Info.', 'recipe'),\n  category: 'common',\n  attributes: {\n    primary_header: {\n      type: 'text'\n    },\n    secondary_header: {\n      type: 'text'\n    },\n    message: {\n      type: 'text'\n    },\n    img_ID: {\n      type: 'number'\n    },\n    img_alt: {\n      type: 'string',\n      source: 'attribute',\n      attribute: 'alt',\n      selector: 'img'\n    },\n    img_URL: {\n      type: 'string',\n      source: 'attribute',\n      attribute: 'src',\n      selector: 'img'\n    },\n    have_button: {\n      type: 'boolean',\n      default: false\n    },\n    button_text: {\n      type: 'text'\n    },\n    text_alignment: {\n      type: 'string'\n    }\n  },\n  edit: function edit(props) {\n    var add_img = function add_img(media) {\n      props.setAttributes({\n        img_ID: media.id,\n        img_alt: media.url,\n        img_URL: media.url\n      });\n    };\n\n    var remove_img = function remove_img() {\n      props.setAttributes({\n        img_ID: null,\n        img_URL: null,\n        img_alt: null\n      });\n    };\n\n    return [wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {\n      value: props.attributes.text_alignment,\n      onChange: function onChange(value) {\n        console.log(value);\n        props.setAttributes({\n          text_alignment: value\n        });\n      }\n    })), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Input Examples', 'covid')\n    }, wp.element.createElement(TextareaControl, {\n      label: __('Primary header', 'covid'),\n      help: __('The first header', 'covid'),\n      value: props.attributes.primary_header,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          primary_header: new_val\n        });\n      }\n    }), wp.element.createElement(TextareaControl, {\n      label: __('Secondary header', 'covid'),\n      help: __('The second header', 'covid'),\n      value: props.attributes.secondary_header,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          secondary_header: new_val\n        });\n      }\n    }), wp.element.createElement(TextareaControl, {\n      label: __('Message', 'covid'),\n      help: __('Message content', 'covid'),\n      value: props.attributes.message,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          message: new_val\n        });\n      }\n    }), wp.element.createElement(CheckboxControl, {\n      label: __('Button', 'covid'),\n      help: __('Button for triggering form or for link', 'covid'),\n      checked: props.attributes.have_button,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          have_button: new_val\n        });\n      }\n    }), props.attributes.have_button ? wp.element.createElement(TextareaControl, {\n      label: __('Button', 'covid'),\n      help: __('Button label. This button opens a modal ' + 'with email and message fields.', 'covid'),\n      value: props.attributes.button_text,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          button_text: new_val\n        });\n      }\n    }) : '')), wp.element.createElement(\"div\", {\n      className: \"row part\"\n    }, wp.element.createElement(\"div\", {\n      id: \"info-content\",\n      className: \"container col-sm info\"\n    }, getMessage(props.attributes.primary_header, props.attributes.secondary_header, props.attributes.message), props.attributes.have_button ? wp.element.createElement(\"button\", {\n      type: \"button\",\n      className: \"btn alert-btn\",\n      \"data-toggle\": \"modal\",\n      \"data-target\": \"#myModal\"\n    }, props.attributes.button_text) : '')), wp.element.createElement(\"div\", {\n      className: props.className\n    }, props.attributes.img_ID ? wp.element.createElement(\"div\", {\n      className: \"image-ctr\"\n    }, getImage(props.attributes.img_URL, props.attributes.img_alt), props.isSelected ? wp.element.createElement(Button, {\n      className: \"btn-remove\",\n      onClick: remove_img\n    }, \"Remove\") : null) : wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {\n      onSelect: function onSelect(media) {\n        add_img(media);\n      },\n      allowedTypes: ['image'],\n      value: props.attributes.img_ID,\n      render: function render(_ref) {\n        var open = _ref.open;\n        return wp.element.createElement(Button, {\n          className: \"button button-large\",\n          onClick: open\n        }, \"Open Media Library\");\n      }\n    })))];\n  },\n  save: function save(props) {\n    switch (props.attributes.text_alignment) {\n      case 'right':\n        return wp.element.createElement(\"div\", {\n          className: \"row part\"\n        }, wp.element.createElement(\"div\", {\n          className: \"container col-sm image image-right\"\n        }, getImage(props.attributes.img_URL, props.attributes.img_alt)), wp.element.createElement(\"div\", {\n          id: \"info-content\",\n          className: \"container col-sm info\"\n        }, getMessage(props.attributes.primary_header, props.attributes.secondary_header, props.attributes.message), props.attributes.have_button ? getButton(props.attributes.button_text) : ''));\n\n      case 'left':\n        return wp.element.createElement(\"div\", {\n          className: \"row part\"\n        }, wp.element.createElement(\"div\", {\n          id: \"info-content\",\n          className: \"container col-sm info\"\n        }, getMessage(props.attributes.primary_header, props.attributes.secondary_header, props.attributes.message), props.attributes.have_button ? getButton(props.attributes.button_text) : ''), wp.element.createElement(\"div\", {\n          className: \"container col-sm image image-right\"\n        }, getImage(props.attributes.img_URL, props.attributes.img_alt)));\n\n      case 'center':\n        return wp.element.createElement(\"div\", {\n          className: \"center-block\"\n        }, wp.element.createElement(\"div\", {\n          id: \"info-content\",\n          className: \"container center-block\"\n        }, getMessage(props.attributes.primary_header, props.attributes.secondary_header, props.attributes.message), props.attributes.have_button ? getButton(props.attributes.button_text) : ''), wp.element.createElement(\"div\", {\n          className: \"container image center-block\"\n        }, getImage(props.attributes.img_URL, props.attributes.img_alt)));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5mby1ibG9jay9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9pbmZvLWJsb2NrL2luZGV4LmpzPzRiYjMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gX3dwJGVkaXRvci5BbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkZWRpdG9yLkJsb2NrQ29udHJvbHMsXG4gICAgTWVkaWFVcGxvYWRDaGVjayA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWRDaGVjaztcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBUZXh0YXJlYUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0YXJlYUNvbnRyb2wsXG4gICAgQ2hlY2tib3hDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQ2hlY2tib3hDb250cm9sLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBSYWRpb0NvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5SYWRpb0NvbnRyb2wsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sO1xuXG52YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZShpbWdfVVJMLCBpbWdfYWx0KSB7XG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgIHNyYzogaW1nX1VSTCxcbiAgICBhbHQ6IGltZ19hbHRcbiAgfSk7XG59O1xuXG52YXIgZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UocHJpbWFyeV9oZWFkZXIsIHNlY29uZGFyeV9oZWFkZXIsIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgY2xhc3NOYW1lOiBcInRpdGxlLTFcIlxuICB9LCBcIiBcIiwgcHJpbWFyeV9oZWFkZXIsIFwiIFwiKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ0aXRsZS0yXCJcbiAgfSwgXCIgXCIsIHNlY29uZGFyeV9oZWFkZXIsIFwiIFwiKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9LCBcIiBcIiwgbWVzc2FnZSwgXCIgXCIpKTtcbn07XG5cbnZhciBnZXRCdXR0b24gPSBmdW5jdGlvbiBnZXRCdXR0b24oYnV0dG9uX3RleHQpIHtcbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBcImJ0biBhbGVydC1idG5cIixcbiAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI215TW9kYWxcIlxuICB9LCBidXR0b25fdGV4dCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm1vZGFsIGZhZGVcIixcbiAgICBpZDogXCJteU1vZGFsXCIsXG4gICAgcm9sZTogXCJkaWFsb2dcIlxuICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cIlxuICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJtb2RhbC1jb250ZW50XCJcbiAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwibW9kYWwtaGVhZGVyXCJcbiAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogXCJjbG9zZVwiLFxuICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIlxuICB9LCBcIlxceEQ3XCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm1vZGFsLXRpdGxlXCJcbiAgfSwgYnV0dG9uX3RleHQpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwibW9kYWwtYm9keVwiXG4gIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJUaGlzIGlzIGEgc21hbGwgbW9kYWwuXCIpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwibW9kYWwtZm9vdGVyXCJcbiAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCJcbiAgfSwgXCJDbG9zZVwiKSkpKSkpO1xufTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3VkZW15L2luc3BlY3Rvci1jb250cm9scy1leGFtcGxlJywge1xuICB0aXRsZTogX18oJ0luZm8nLCAncmVjaXBlJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnSW5mby4nLCAncmVjaXBlJyksXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgYXR0cmlidXRlczoge1xuICAgIHByaW1hcnlfaGVhZGVyOiB7XG4gICAgICB0eXBlOiAndGV4dCdcbiAgICB9LFxuICAgIHNlY29uZGFyeV9oZWFkZXI6IHtcbiAgICAgIHR5cGU6ICd0ZXh0J1xuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogJ3RleHQnXG4gICAgfSxcbiAgICBpbWdfSUQ6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSxcbiAgICBpbWdfYWx0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXG4gICAgICBhdHRyaWJ1dGU6ICdhbHQnLFxuICAgICAgc2VsZWN0b3I6ICdpbWcnXG4gICAgfSxcbiAgICBpbWdfVVJMOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgICAgc2VsZWN0b3I6ICdpbWcnXG4gICAgfSxcbiAgICBoYXZlX2J1dHRvbjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGJ1dHRvbl90ZXh0OiB7XG4gICAgICB0eXBlOiAndGV4dCdcbiAgICB9LFxuICAgIHRleHRfYWxpZ25tZW50OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH1cbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgIHZhciBhZGRfaW1nID0gZnVuY3Rpb24gYWRkX2ltZyhtZWRpYSkge1xuICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGltZ19JRDogbWVkaWEuaWQsXG4gICAgICAgIGltZ19hbHQ6IG1lZGlhLnVybCxcbiAgICAgICAgaW1nX1VSTDogbWVkaWEudXJsXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHJlbW92ZV9pbWcgPSBmdW5jdGlvbiByZW1vdmVfaW1nKCkge1xuICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGltZ19JRDogbnVsbCxcbiAgICAgICAgaW1nX1VSTDogbnVsbCxcbiAgICAgICAgaW1nX2FsdDogbnVsbFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrQ29udHJvbHMsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7XG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50ZXh0X2FsaWdubWVudCxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIHRleHRfYWxpZ25tZW50OiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwge1xuICAgICAgdGl0bGU6IF9fKCdJbnB1dCBFeGFtcGxlcycsICdjb3ZpZCcpXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRhcmVhQ29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdQcmltYXJ5IGhlYWRlcicsICdjb3ZpZCcpLFxuICAgICAgaGVscDogX18oJ1RoZSBmaXJzdCBoZWFkZXInLCAnY292aWQnKSxcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnByaW1hcnlfaGVhZGVyLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgcHJpbWFyeV9oZWFkZXI6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0YXJlYUNvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBfXygnU2Vjb25kYXJ5IGhlYWRlcicsICdjb3ZpZCcpLFxuICAgICAgaGVscDogX18oJ1RoZSBzZWNvbmQgaGVhZGVyJywgJ2NvdmlkJyksXG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5zZWNvbmRhcnlfaGVhZGVyLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgc2Vjb25kYXJ5X2hlYWRlcjogbmV3X3ZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRhcmVhQ29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdNZXNzYWdlJywgJ2NvdmlkJyksXG4gICAgICBoZWxwOiBfXygnTWVzc2FnZSBjb250ZW50JywgJ2NvdmlkJyksXG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5tZXNzYWdlLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgbWVzc2FnZTogbmV3X3ZhbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENoZWNrYm94Q29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdCdXR0b24nLCAnY292aWQnKSxcbiAgICAgIGhlbHA6IF9fKCdCdXR0b24gZm9yIHRyaWdnZXJpbmcgZm9ybSBvciBmb3IgbGluaycsICdjb3ZpZCcpLFxuICAgICAgY2hlY2tlZDogcHJvcHMuYXR0cmlidXRlcy5oYXZlX2J1dHRvbixcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGhhdmVfYnV0dG9uOiBuZXdfdmFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLCBwcm9wcy5hdHRyaWJ1dGVzLmhhdmVfYnV0dG9uID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRhcmVhQ29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdCdXR0b24nLCAnY292aWQnKSxcbiAgICAgIGhlbHA6IF9fKCdCdXR0b24gbGFiZWwuIFRoaXMgYnV0dG9uIG9wZW5zIGEgbW9kYWwgJyArICd3aXRoIGVtYWlsIGFuZCBtZXNzYWdlIGZpZWxkcy4nLCAnY292aWQnKSxcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0LFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld192YWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgYnV0dG9uX3RleHQ6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkgOiAnJykpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInJvdyBwYXJ0XCJcbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgaWQ6IFwiaW5mby1jb250ZW50XCIsXG4gICAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyIGNvbC1zbSBpbmZvXCJcbiAgICB9LCBnZXRNZXNzYWdlKHByb3BzLmF0dHJpYnV0ZXMucHJpbWFyeV9oZWFkZXIsIHByb3BzLmF0dHJpYnV0ZXMuc2Vjb25kYXJ5X2hlYWRlciwgcHJvcHMuYXR0cmlidXRlcy5tZXNzYWdlKSwgcHJvcHMuYXR0cmlidXRlcy5oYXZlX2J1dHRvbiA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcImJ0biBhbGVydC1idG5cIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNteU1vZGFsXCJcbiAgICB9LCBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0KSA6ICcnKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZVxuICAgIH0sIHByb3BzLmF0dHJpYnV0ZXMuaW1nX0lEID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJpbWFnZS1jdHJcIlxuICAgIH0sIGdldEltYWdlKHByb3BzLmF0dHJpYnV0ZXMuaW1nX1VSTCwgcHJvcHMuYXR0cmlidXRlcy5pbWdfYWx0KSwgcHJvcHMuaXNTZWxlY3RlZCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG4tcmVtb3ZlXCIsXG4gICAgICBvbkNsaWNrOiByZW1vdmVfaW1nXG4gICAgfSwgXCJSZW1vdmVcIikgOiBudWxsKSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZENoZWNrLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuICAgICAgICBhZGRfaW1nKG1lZGlhKTtcbiAgICAgIH0sXG4gICAgICBhbGxvd2VkVHlwZXM6IFsnaW1hZ2UnXSxcbiAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ19JRCxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgICAgdmFyIG9wZW4gPSBfcmVmLm9wZW47XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tbGFyZ2VcIixcbiAgICAgICAgICBvbkNsaWNrOiBvcGVuXG4gICAgICAgIH0sIFwiT3BlbiBNZWRpYSBMaWJyYXJ5XCIpO1xuICAgICAgfVxuICAgIH0pKSldO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgc3dpdGNoIChwcm9wcy5hdHRyaWJ1dGVzLnRleHRfYWxpZ25tZW50KSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJyb3cgcGFydFwiXG4gICAgICAgIH0sIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNvbnRhaW5lciBjb2wtc20gaW1hZ2UgaW1hZ2UtcmlnaHRcIlxuICAgICAgICB9LCBnZXRJbWFnZShwcm9wcy5hdHRyaWJ1dGVzLmltZ19VUkwsIHByb3BzLmF0dHJpYnV0ZXMuaW1nX2FsdCkpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiBcImluZm8tY29udGVudFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb250YWluZXIgY29sLXNtIGluZm9cIlxuICAgICAgICB9LCBnZXRNZXNzYWdlKHByb3BzLmF0dHJpYnV0ZXMucHJpbWFyeV9oZWFkZXIsIHByb3BzLmF0dHJpYnV0ZXMuc2Vjb25kYXJ5X2hlYWRlciwgcHJvcHMuYXR0cmlidXRlcy5tZXNzYWdlKSwgcHJvcHMuYXR0cmlidXRlcy5oYXZlX2J1dHRvbiA/IGdldEJ1dHRvbihwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0KSA6ICcnKSk7XG5cbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwicm93IHBhcnRcIlxuICAgICAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiBcImluZm8tY29udGVudFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb250YWluZXIgY29sLXNtIGluZm9cIlxuICAgICAgICB9LCBnZXRNZXNzYWdlKHByb3BzLmF0dHJpYnV0ZXMucHJpbWFyeV9oZWFkZXIsIHByb3BzLmF0dHJpYnV0ZXMuc2Vjb25kYXJ5X2hlYWRlciwgcHJvcHMuYXR0cmlidXRlcy5tZXNzYWdlKSwgcHJvcHMuYXR0cmlidXRlcy5oYXZlX2J1dHRvbiA/IGdldEJ1dHRvbihwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbl90ZXh0KSA6ICcnKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyIGNvbC1zbSBpbWFnZSBpbWFnZS1yaWdodFwiXG4gICAgICAgIH0sIGdldEltYWdlKHByb3BzLmF0dHJpYnV0ZXMuaW1nX1VSTCwgcHJvcHMuYXR0cmlidXRlcy5pbWdfYWx0KSkpO1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY2VudGVyLWJsb2NrXCJcbiAgICAgICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBpZDogXCJpbmZvLWNvbnRlbnRcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyIGNlbnRlci1ibG9ja1wiXG4gICAgICAgIH0sIGdldE1lc3NhZ2UocHJvcHMuYXR0cmlidXRlcy5wcmltYXJ5X2hlYWRlciwgcHJvcHMuYXR0cmlidXRlcy5zZWNvbmRhcnlfaGVhZGVyLCBwcm9wcy5hdHRyaWJ1dGVzLm1lc3NhZ2UpLCBwcm9wcy5hdHRyaWJ1dGVzLmhhdmVfYnV0dG9uID8gZ2V0QnV0dG9uKHByb3BzLmF0dHJpYnV0ZXMuYnV0dG9uX3RleHQpIDogJycpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb250YWluZXIgaW1hZ2UgY2VudGVyLWJsb2NrXCJcbiAgICAgICAgfSwgZ2V0SW1hZ2UocHJvcHMuYXR0cmlidXRlcy5pbWdfVVJMLCBwcm9wcy5hdHRyaWJ1dGVzLmltZ19hbHQpKSk7XG4gICAgfVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/info-block/index.js\n");

/***/ })

/******/ });