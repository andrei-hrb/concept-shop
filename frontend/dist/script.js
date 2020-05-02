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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/splitting/dist/splitting-cells.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/splitting/dist/splitting-cells.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".splitting.cells img { width: 100%; display: block; }\n\n@supports ( display: grid ) {\n  .splitting.cells {\n    position: relative;\n    overflow: hidden;\n    background-size: cover;\n    visibility: hidden;\n  }\n\n  .splitting .cell-grid {\n    background: inherit;\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%; \n    height: 100%;\n    display: grid;\n    grid-template: repeat( var(--row-total), 1fr ) / repeat( var(--col-total), 1fr );\n  }\n\n  .splitting .cell {\n    background: inherit;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .splitting .cell-inner {\n    background: inherit;\n    position: absolute;\n    visibility: visible;\n    /* Size to fit the whole container size */\n    width: calc(100% * var(--col-total));\n    height: calc(100% * var(--row-total));\n    /* Position properly */\n    left: calc(-100% * var(--col-index));\n    top: calc(-100% * var(--row-index));\n  }\n\n  /* Helper variables for advanced effects */\n  .splitting .cell {\n    --center-x: calc((var(--col-total) - 1) / 2);\n    --center-y: calc((var(--row-total) - 1) / 2);\n\n    /* Offset from center, positive & negative */\n    --offset-x: calc(var(--col-index) - var(--center-x));\n    --offset-y: calc(var(--row-index) - var(--center-y));\n\n    /* Absolute distance from center, only positive */\n    --distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );\n\n    /* Absolute distance from center, only positive */\n    --distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) );\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/splitting/dist/splitting.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/splitting/dist/splitting.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Recommended styles for Splitting */\n.splitting .word,\n.splitting .char {\n  display: inline-block;\n}\n\n/* Psuedo-element chars */\n.splitting .char {\n  position: relative;\n}\n\n/**\n * Populate the psuedo elements with the character to allow for expanded effects\n * Set to `display: none` by default; just add `display: block` when you want\n * to use the psuedo elements\n */\n.splitting .char::before,\n.splitting .char::after {\n  content: attr(data-char);\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  transition: inherit;\n  user-select: none;\n}\n\n/* Expanded CSS Variables */\n\n.splitting {\n  /* The center word index */\n  --word-center: calc((var(--word-total) - 1) / 2);\n\n  /* The center character index */\n  --char-center: calc((var(--char-total) - 1) / 2);\n\n  /* The center character index */\n  --line-center: calc((var(--line-total) - 1) / 2);\n}\n\n.splitting .word {\n  /* Pecent (0-1) of the word's position */\n  --word-percent: calc(var(--word-index) / var(--word-total));\n\n  /* Pecent (0-1) of the line's position */\n  --line-percent: calc(var(--line-index) / var(--line-total));\n}\n\n.splitting .char {\n  /* Percent (0-1) of the char's position */\n  --char-percent: calc(var(--char-index) / var(--char-total));\n\n  /* Offset from center, positive & negative */\n  --char-offset: calc(var(--char-index) - var(--char-center));\n\n  /* Absolute distance from center, only positive */\n  --distance: calc(\n     (var(--char-offset) * var(--char-offset)) / var(--char-center)\n  );\n\n  /* Distance from center where -1 is the far left, 0 is center, 1 is far right */\n  --distance-sine: calc(var(--char-offset) / var(--char-center));\n\n  /* Distance from center where 1 is far left/far right, 0 is center */\n  --distance-percent: calc((var(--distance) / var(--char-center)));\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/splitting/dist/splitting-cells.css":
/*!*********************************************************!*\
  !*** ./node_modules/splitting/dist/splitting-cells.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./splitting-cells.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/splitting/dist/splitting-cells.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/splitting/dist/splitting.css":
/*!***************************************************!*\
  !*** ./node_modules/splitting/dist/splitting.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./splitting.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/splitting/dist/splitting.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/splitting/dist/splitting.js":
/*!**************************************************!*\
  !*** ./node_modules/splitting/dist/splitting.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var root = document;
var createText = root.createTextNode.bind(root);

/**
 * # setProperty
 * Apply a CSS var
 * @param el{HTMLElement} 
 * @param varName {string} 
 * @param value {string|number}  
 */
function setProperty(el, varName, value) {
    el.style.setProperty(varName, value);
} 

/**
 * 
 * @param {Node} el 
 * @param {Node} child 
 */
function appendChild(el, child) {
  return el.appendChild(child);
}

function createElement(parent, key, text, whitespace) {
  var el = root.createElement('span');
  key && (el.className = key); 
  if (text) { 
      !whitespace && el.setAttribute("data-" + key, text);
      el.textContent = text; 
  }
  return (parent && appendChild(parent, el)) || el;
}

function getData(el, key) {
  return el.getAttribute("data-" + key)
}

/**
 * 
 * @param e {import('../types').Target} 
 * @param parent {HTMLElement}
 * @returns {HTMLElement[]}
 */
function $(e, parent) {
    return !e || e.length == 0
        ? // null or empty string returns empty array
          []
        : e.nodeName
            ? // a single element is wrapped in an array
              [e]
            : // selector and NodeList are converted to Element[]
              [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
}

/**
 * Creates and fills an array with the value provided
 * @template {T}
 * @param {number} len
 * @param {() => T} valueProvider
 * @return {T}
 */
function Array2D(len) {
    var a = [];
    for (; len--; ) {
        a[len] = [];
    }
    return a;
}

function each(items, fn) {
    items && items.some(fn);
}

function selectFrom(obj) {
    return function (key) {
        return obj[key];
    }
}

/**
 * # Splitting.index
 * Index split elements and add them to a Splitting instance.
 *
 * @param element {HTMLElement}
 * @param key {string}
 * @param items {HTMLElement[] | HTMLElement[][]}
 */
function index(element, key, items) {
    var prefix = '--' + key;
    var cssVar = prefix + "-index";

    each(items, function (items, i) {
        if (Array.isArray(items)) {
            each(items, function(item) {
                setProperty(item, cssVar, i);
            });
        } else {
            setProperty(items, cssVar, i);
        }
    });

    setProperty(element, prefix + "-total", items.length);
}

/**
 * @type {Record<string, import('./types').ISplittingPlugin>}
 */
var plugins = {};

/**
 * @param by {string}
 * @param parent {string}
 * @param deps {string[]}
 * @return {string[]}
 */
function resolvePlugins(by, parent, deps) {
    // skip if already visited this dependency
    var index = deps.indexOf(by);
    if (index == -1) {
        // if new to dependency array, add to the beginning
        deps.unshift(by);

        // recursively call this function for all dependencies
        each(plugins[by].depends, function(p) {
            resolvePlugins(p, by, deps);
        });
    } else {
        // if this dependency was added already move to the left of
        // the parent dependency so it gets loaded in order
        var indexOfParent = deps.indexOf(parent);
        deps.splice(index, 1);
        deps.splice(indexOfParent, 0, by);
    }
    return deps;
}

/**
 * Internal utility for creating plugins... essentially to reduce
 * the size of the library
 * @param {string} by 
 * @param {string} key 
 * @param {string[]} depends 
 * @param {Function} split 
 * @returns {import('./types').ISplittingPlugin}
 */
function createPlugin(by, depends, key, split) {
    return {
        by: by,
        depends: depends,
        key: key,
        split: split
    }
}

/**
 *
 * @param by {string}
 * @returns {import('./types').ISplittingPlugin[]}
 */
function resolve(by) {
    return resolvePlugins(by, 0, []).map(selectFrom(plugins));
}

/**
 * Adds a new plugin to splitting
 * @param opts {import('./types').ISplittingPlugin}
 */
function add(opts) {
    plugins[opts.by] = opts;
}

/**
 * # Splitting.split
 * Split an element's textContent into individual elements
 * @param el {Node} Element to split
 * @param key {string}
 * @param splitOn {string}
 * @param includeSpace {boolean}
 * @returns {HTMLElement[]}
 */
function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
    // Combine any strange text nodes or empty whitespace.
    el.normalize();

    // Use fragment to prevent unnecessary DOM thrashing.
    var elements = [];
    var F = document.createDocumentFragment();

    if (includePrevious) {
        elements.push(el.previousSibling);
    }

    var allElements = [];
    $(el.childNodes).some(function(next) {
        if (next.tagName && !next.hasChildNodes()) {
            // keep elements without child nodes (no text and no children)
            allElements.push(next);
            return;
        }
        // Recursively run through child nodes
        if (next.childNodes && next.childNodes.length) {
            allElements.push(next);
            elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
            return;
        }

        // Get the text to split, trimming out the whitespace
        /** @type {string} */
        var wholeText = next.wholeText || '';
        var contents = wholeText.trim();

        // If there's no text left after trimming whitespace, continue the loop
        if (contents.length) {
            // insert leading space if there was one
            if (wholeText[0] === ' ') {
                allElements.push(createText(' '));
            }
            // Concatenate the split text children back into the full array
            each(contents.split(splitOn), function(splitText, i) {
                if (i && preserveWhitespace) {
                    allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                }
                var splitEl = createElement(F, key, splitText);
                elements.push(splitEl);
                allElements.push(splitEl);
            }); 
            // insert trailing space if there was one
            if (wholeText[wholeText.length - 1] === ' ') {
                allElements.push(createText(' '));
            }
        }
    });

    each(allElements, function(el) {
        appendChild(F, el);
    });

    // Clear out the existing element
    el.innerHTML = "";
    appendChild(el, F);
    return elements;
}

/** an empty value */
var _ = 0;

function copy(dest, src) {
    for (var k in src) {
        dest[k] = src[k];
    }
    return dest;
}

var WORDS = 'words';

var wordPlugin = createPlugin(
    /*by: */ WORDS,
    /*depends: */ _,
    /*key: */ 'word', 
    /*split: */ function(el) {
        return splitText(el, 'word', /\s+/, 0, 1)
    }
);

var CHARS = "chars";

var charPlugin = createPlugin(
    /*by: */ CHARS,
    /*depends: */ [WORDS],
    /*key: */ "char", 
    /*split: */ function(el, options, ctx) {
        var results = [];

        each(ctx[WORDS], function(word, i) {
            results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
        });

        return results;
    }
);

/**
 * # Splitting
 * 
 * @param opts {import('./types').ISplittingOptions} 
 */
function Splitting (opts) {
  opts = opts || {};
  var key = opts.key;

  return $(opts.target || '[data-splitting]').map(function(el) {
    var ctx = el['🍌'];  
    if (!opts.force && ctx) {
      return ctx;
    }

    ctx = el['🍌'] = { el: el };
    var items = resolve(opts.by || getData(el, 'splitting') || CHARS);
    var opts2 = copy({}, opts);
    each(items, function(plugin) {
      if (plugin.split) {
        var pluginBy = plugin.by;
        var key2 = (key ? '-' + key : '') + plugin.key;
        var results = plugin.split(el, opts2, ctx);
        key2 && index(el, key2, results);
        ctx[pluginBy] = results;
        el.classList.add(pluginBy);
      } 
    });

    el.classList.add('splitting');
    return ctx;
  })
}

/**
 * # Splitting.html
 * 
 * @param opts {import('./types').ISplittingOptions}
 */
function html(opts) {
  opts = opts || {};
  var parent = opts.target =  createElement();
  parent.innerHTML = opts.content;
  Splitting(opts);
  return parent.outerHTML
}

Splitting.html = html;
Splitting.add = add;

function detectGrid(el, options, side) {
    var items = $(options.matching || el.children, el);
    var c = {};

    each(items, function(w) {
        var val = Math.round(w[side]);
        (c[val] || (c[val] = [])).push(w);
    });

    return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
}

function byNumber(a, b) {
    return a - b;
}

var linePlugin = createPlugin(
    /*by: */ 'lines',
    /*depends: */ [WORDS],
    /*key: */ 'line',
    /*split: */ function(el, options, ctx) {
      return detectGrid(el, { matching: ctx[WORDS] }, 'offsetTop')
    }
);

var itemPlugin = createPlugin(
    /*by: */ 'items',
    /*depends: */ _,
    /*key: */ 'item', 
    /*split: */ function(el, options) {
        return $(options.matching || el.children, el)
    }
);

var rowPlugin = createPlugin(
    /*by: */ 'rows',
    /*depends: */ _,
    /*key: */ 'row', 
    /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetTop");
    }
);

var columnPlugin = createPlugin(
    /*by: */ 'cols',
    /*depends: */ _,
    /*key: */ "col", 
    /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetLeft");
    }
);

var gridPlugin = createPlugin(
    /*by: */ 'grid',
    /*depends: */ ['rows', 'cols']
);

var LAYOUT = "layout";

var layoutPlugin = createPlugin(
    /*by: */ LAYOUT,
    /*depends: */ _,
    /*key: */ _,
    /*split: */ function(el, opts) {
        // detect and set options
        var rows =  opts.rows = +(opts.rows || getData(el, 'rows') || 1);
        var columns = opts.columns = +(opts.columns || getData(el, 'columns') || 1);

        // Seek out the first <img> if the value is true 
        opts.image = opts.image || getData(el, 'image') || el.currentSrc || el.src;
        if (opts.image) {
            var img = $("img", el)[0];
            opts.image = img && (img.currentSrc || img.src);
        }

        // add optional image to background
        if (opts.image) {
            setProperty(el, "background-image", "url(" + opts.image + ")");
        }

        var totalCells = rows * columns;
        var elements = [];

        var container = createElement(_, "cell-grid");
        while (totalCells--) {
            // Create a span
            var cell = createElement(container, "cell");
            createElement(cell, "cell-inner");
            elements.push(cell);
        }

        // Append elements back into the parent
        appendChild(el, container);

        return elements;
    }
);

var cellRowPlugin = createPlugin(
    /*by: */ "cellRows",
    /*depends: */ [LAYOUT],
    /*key: */ "row",
    /*split: */ function(el, opts, ctx) {
        var rowCount = opts.rows;
        var result = Array2D(rowCount);

        each(ctx[LAYOUT], function(cell, i, src) {
            result[Math.floor(i / (src.length / rowCount))].push(cell);
        });

        return result;
    }
);

var cellColumnPlugin = createPlugin(
    /*by: */ "cellColumns",
    /*depends: */ [LAYOUT],
    /*key: */ "col",
    /*split: */ function(el, opts, ctx) {
        var columnCount = opts.columns;
        var result = Array2D(columnCount);

        each(ctx[LAYOUT], function(cell, i) {
            result[i % columnCount].push(cell);
        });

        return result;
    }
);

var cellPlugin = createPlugin(
    /*by: */ "cells",
    /*depends: */ ['cellRows', 'cellColumns'],
    /*key: */ "cell", 
    /*split: */ function(el, opt, ctx) { 
        // re-index the layout as the cells
        return ctx[LAYOUT];
    }
);

// install plugins
// word/char plugins
add(wordPlugin);
add(charPlugin);
add(linePlugin);
// grid plugins
add(itemPlugin);
add(rowPlugin);
add(columnPlugin);
add(gridPlugin);
// cell-layout plugins
add(layoutPlugin);
add(cellRowPlugin);
add(cellColumnPlugin);
add(cellPlugin);

return Splitting;

})));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word */ "./src/js/word.js");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_word__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/js/loading.js");
/* harmony import */ var _imageEntrance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageEntrance */ "./src/js/imageEntrance.js");
/* harmony import */ var _imageEntrance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imageEntrance__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _startAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startAnimation */ "./src/js/startAnimation.js");
/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrolling */ "./src/js/scrolling.js");
/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scrolling__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _splitting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splitting */ "./src/js/splitting.js");
/**
 * Index file
 */







/***/ }),

/***/ "./src/js/imageEntrance.js":
/*!*********************************!*\
  !*** ./src/js/imageEntrance.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Fix image entrace
 */
var arrayAllImagesIDs = ["heading__image-overlay", "about__image-under-overlay", "about__image-over-overlay"];

function handle(e) {
  e.target.removeEventListener("animationend", handle);
  e.target.remove();
}

arrayAllImagesIDs.map(function (imageID) {
  return document.getElementById(imageID);
}).forEach(function (elm) {
  elm.addEventListener("animationend", handle);
});

/***/ }),

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startAnimation */ "./src/js/startAnimation.js");
/**
 * Fancy Loading effect
 */
var loadingElm = document.getElementById("loading");


if (window.location.search.includes("noloading")) {
  Object(_startAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])();
} else {
  setTimeout(function () {
    loadingElm.remove();
    Object(_startAnimation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }, 6400);
}

/***/ }),

/***/ "./src/js/scrolling.js":
/*!*****************************!*\
  !*** ./src/js/scrolling.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var watchedElements = ["heading", "about", "intro", "cards"];

for (var i = 1; i <= 6; i++) {
  watchedElements.push('card-' + i);
}

watchedElements.map(function (section) {
  return document.getElementById(section);
}).forEach(function (section) {
  section.style.setProperty("--height", section.offsetTop);
});
window.addEventListener("scroll", scrollWindowHandler, {
  passive: true
});

function scrollWindowHandler() {
  document.body.style.setProperty("--scrolled", window.scrollY);
}

scrollWindowHandler();

/***/ }),

/***/ "./src/js/splitting.js":
/*!*****************************!*\
  !*** ./src/js/splitting.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! splitting/dist/splitting.css */ "./node_modules/splitting/dist/splitting.css");
/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! splitting/dist/splitting-cells.css */ "./node_modules/splitting/dist/splitting-cells.css");
/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! splitting */ "./node_modules/splitting/dist/splitting.js");
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_2__);
/**
 * All the stuff related to Splitting.JS
 *      https://splitting.js.org/
 */



splitting__WEBPACK_IMPORTED_MODULE_2___default()();

/***/ }),

/***/ "./src/js/startAnimation.js":
/*!**********************************!*\
  !*** ./src/js/startAnimation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startAnimation; });
function startAnimation() {
  var watchedElements = ["heading", "about", "intro", "items__title", "items__row-1", "items__row-2", "options", "final"];

  for (var i = 1; i <= 6; i++) {
    watchedElements.push("card-" + i);
  }

  watchedElements.forEach(function (elm, i) {
    watchedElements[i] = document.getElementById(elm);
  });
  window.addEventListener("scroll", startingAnimationWindowHandler, {
    passive: true
  });

  function isInViewport(elm) {
    var rect = elm.getBoundingClientRect();
    return rect.top < window.innerHeight - 250 && rect.bottom >= 250;
  }

  var lotus = 0;

  function startingAnimationWindowHandler() {
    if (document.getElementById("loading") === null) {
      watchedElements.forEach(function (elm, i) {
        if (elm.classList.contains("start")) {
          watchedElements.splice(i, 1);
        }

        if (isInViewport(elm)) {
          elm.classList.add("start");
          if (elm.classList.contains("items__row")) lotus = lotus + 1;
          if (lotus == 2) document.getElementById("items__lotus").classList.add("start");
          watchedElements.splice(i, 1);
        }
      });

      if (watchedElements.length === 0) {
        window.removeEventListener("scroll", startingAnimationWindowHandler, {
          passive: true
        });
      }
    }
  }

  startingAnimationWindowHandler();
}

/***/ }),

/***/ "./src/js/word.js":
/*!************************!*\
  !*** ./src/js/word.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var watchedElements = ["heading__title-over", "heading__title-under", "about__title", "about__title-under", "intro__title-over", "intro__title-over-mobile", "intro__title-under", "intro__title-under-mobile", "items__title", "option__title-main", "items__title",
/* Content */
"heading__content", "about__content", "about__content-under", "intro__content"];
var cards_list = document.getElementById("cards").dataset.count;

for (var i = 1; i <= cards_list; i++) {
  watchedElements.push("card__title-" + i);
  watchedElements.push("card__content-" + i);
}

for (var _i = 1; _i <= 4; _i++) {
  watchedElements.push("item__title-" + _i + "__product");
}

var op_list_right = document.getElementById("option__list-right").dataset.count;

for (var _i2 = 0; _i2 < op_list_right; _i2++) {
  watchedElements.push("option__content-" + _i2 + "-right");
}

var op_list_left = document.getElementById("option__list-right").dataset.count;

for (var _i3 = 0; _i3 < op_list_left; _i3++) {
  watchedElements.push("option__content-" + _i3 + "-left");
}

function handler(e) {
  var parent = e.target.parentElement;
  if (parent.classList.contains("content")) parent.textContent = parent.textContent;else {
    parent = parent.parentElement;
    parent.childNodes.forEach(function (span) {
      return span.textContent = span.textContent;
    });
  }
}

var callback = function callback(mutationsList, observer) {
  var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var mutation = _step.value;
      var arr = mutation.addedNodes;

      if (arr.length) {
        arr[arr.length - 1].addEventListener("animationend", handler);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  observer.disconnect();
};

var observer = new MutationObserver(callback);
var config = {
  childList: true
};
watchedElements.map(function (elm) {
  return document.getElementById(elm);
}).forEach(function (elm) {
  observer.observe(elm, config);
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hirbu/Sites/casa-creanga-shop/frontend/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/hirbu/Sites/casa-creanga-shop/frontend/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });