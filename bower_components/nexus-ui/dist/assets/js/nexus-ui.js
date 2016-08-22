/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/assets/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(8);
	module.exports = __webpack_require__(39);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(5);
	__webpack_require__(6);//es6 functions in es5, good with babe)l

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(4)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///Users/karandeepsingh/Documents/Projects/nexus-ui/bower_components/jquery/dist/jquery.min.js")

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */\n!function(a,b){\"object\"==typeof module&&\"object\"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error(\"jQuery requires a window with a document\");return b(a)}:b(a)}(\"undefined\"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m=\"2.2.0\",n=function(a,b){return new n.fn.init(a,b)},o=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,p=/^-ms-/,q=/-([\\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:\"\",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(\"boolean\"==typeof g&&(j=g,g=arguments[h]||{},h++),\"object\"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:\"jQuery\"+(m+Math.random()).replace(/\\D/g,\"\"),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return\"function\"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return\"object\"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,\"isPrototypeOf\")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+\"\":\"object\"==typeof a||\"function\"==typeof a?i[j.call(a)]||\"object\":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf(\"use strict\")?(b=d.createElement(\"script\"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,\"ms-\").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?\"\":(a+\"\").replace(o,\"\")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,\"string\"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return\"string\"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),\"function\"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each(\"Boolean Number String Function Array Date RegExp Object Error Symbol\".split(\" \"),function(a,b){i[\"[object \"+b+\"]\"]=b.toLowerCase()});function s(a){var b=!!a&&\"length\"in a&&a.length,c=n.type(a);return\"function\"===c||n.isWindow(a)?!1:\"array\"===c||0===b||\"number\"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=\"sizzle\"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K=\"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",L=\"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",M=\"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",N=\"\\\\[\"+L+\"*(\"+M+\")(?:\"+L+\"*([*^$|!~]?=)\"+L+\"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\"+M+\"))|)\"+L+\"*\\\\]\",O=\":(\"+M+\")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\"+N+\")*)|.*)\\\\)|)\",P=new RegExp(L+\"+\",\"g\"),Q=new RegExp(\"^\"+L+\"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\"+L+\"+$\",\"g\"),R=new RegExp(\"^\"+L+\"*,\"+L+\"*\"),S=new RegExp(\"^\"+L+\"*([>+~]|\"+L+\")\"+L+\"*\"),T=new RegExp(\"=\"+L+\"*([^\\\\]'\\\"]*?)\"+L+\"*\\\\]\",\"g\"),U=new RegExp(O),V=new RegExp(\"^\"+M+\"$\"),W={ID:new RegExp(\"^#(\"+M+\")\"),CLASS:new RegExp(\"^\\\\.(\"+M+\")\"),TAG:new RegExp(\"^(\"+M+\"|[*])\"),ATTR:new RegExp(\"^\"+N),PSEUDO:new RegExp(\"^\"+O),CHILD:new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\"+L+\"*(even|odd|(([+-]|)(\\\\d*)n|)\"+L+\"*(?:([+-]|)\"+L+\"*(\\\\d+)|))\"+L+\"*\\\\)|)\",\"i\"),bool:new RegExp(\"^(?:\"+K+\")$\",\"i\"),needsContext:new RegExp(\"^\"+L+\"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\"+L+\"*((?:-\\\\d)?\\\\d*)\"+L+\"*\\\\)|)(?=[^-]|$)\",\"i\")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\\d$/i,Z=/^[^{]+\\{\\s*\\[native \\w/,$=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,_=/[+~]/,aa=/'|\\\\/g,ba=new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\"+L+\"?|(\"+L+\")|.)\",\"ig\"),ca=function(a,b,c){var d=\"0x\"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],\"string\"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+\" \"]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if(\"object\"!==b.nodeName.toLowerCase()){(k=b.getAttribute(\"id\"))?k=k.replace(aa,\"\\\\$&\"):b.setAttribute(\"id\",k=u),r=g(a),h=r.length,l=V.test(k)?\"#\"+k:\"[id='\"+k+\"']\";while(h--)r[h]=l+\" \"+qa(r[h]);s=r.join(\",\"),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute(\"id\")}}}return i(a.replace(Q,\"$1\"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+\" \")>d.cacheLength&&delete b[a.shift()],b[c+\" \"]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement(\"div\");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split(\"|\"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return\"input\"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return(\"input\"===c||\"button\"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&\"undefined\"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?\"HTML\"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener(\"unload\",da,!1):e.attachEvent&&e.attachEvent(\"onunload\",da)),c.attributes=ia(function(a){return a.className=\"i\",!a.getAttribute(\"className\")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment(\"\")),!a.getElementsByTagName(\"*\").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(\"undefined\"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute(\"id\")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=\"undefined\"!=typeof a.getAttributeNode&&a.getAttributeNode(\"id\");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return\"undefined\"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if(\"*\"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return\"undefined\"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML=\"<a id='\"+u+\"'></a><select id='\"+u+\"-\\r\\\\' msallowcapture=''><option selected=''></option></select>\",a.querySelectorAll(\"[msallowcapture^='']\").length&&q.push(\"[*^$]=\"+L+\"*(?:''|\\\"\\\")\"),a.querySelectorAll(\"[selected]\").length||q.push(\"\\\\[\"+L+\"*(?:value|\"+K+\")\"),a.querySelectorAll(\"[id~=\"+u+\"-]\").length||q.push(\"~=\"),a.querySelectorAll(\":checked\").length||q.push(\":checked\"),a.querySelectorAll(\"a#\"+u+\"+*\").length||q.push(\".#.+[+~]\")}),ia(function(a){var b=n.createElement(\"input\");b.setAttribute(\"type\",\"hidden\"),a.appendChild(b).setAttribute(\"name\",\"D\"),a.querySelectorAll(\"[name=d]\").length&&q.push(\"name\"+L+\"*[*^$|!~]?=\"),a.querySelectorAll(\":enabled\").length||q.push(\":enabled\",\":disabled\"),a.querySelectorAll(\"*,:x\"),q.push(\",.*:\")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,\"div\"),s.call(a,\"[s!='']:x\"),r.push(\"!=\",O)}),q=q.length&&new RegExp(q.join(\"|\")),r=r.length&&new RegExp(r.join(\"|\")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,\"='$1']\"),c.matchesSelector&&p&&!A[b+\" \"]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error(\"Syntax error, unrecognized expression: \"+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c=\"\",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if(\"string\"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{\">\":{dir:\"parentNode\",first:!0},\" \":{dir:\"parentNode\"},\"+\":{dir:\"previousSibling\",first:!0},\"~\":{dir:\"previousSibling\"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||\"\").replace(ba,ca),\"~=\"===a[2]&&(a[3]=\" \"+a[3]+\" \"),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),\"nth\"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(\"even\"===a[3]||\"odd\"===a[3])),a[5]=+(a[7]+a[8]||\"odd\"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||\"\":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(\")\",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return\"*\"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+\" \"];return b||(b=new RegExp(\"(^|\"+L+\")\"+a+\"(\"+L+\"|$)\"))&&y(a,function(a){return b.test(\"string\"==typeof a.className&&a.className||\"undefined\"!=typeof a.getAttribute&&a.getAttribute(\"class\")||\"\")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?\"!=\"===b:b?(e+=\"\",\"=\"===b?e===c:\"!=\"===b?e!==c:\"^=\"===b?c&&0===e.indexOf(c):\"*=\"===b?c&&e.indexOf(c)>-1:\"$=\"===b?c&&e.slice(-c.length)===c:\"~=\"===b?(\" \"+e.replace(P,\" \")+\" \").indexOf(c)>-1:\"|=\"===b?e===c||e.slice(0,c.length+1)===c+\"-\":!1):!0}},CHILD:function(a,b,c,d,e){var f=\"nth\"!==a.slice(0,3),g=\"last\"!==a.slice(-4),h=\"of-type\"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?\"nextSibling\":\"previousSibling\",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p=\"only\"===a&&!o&&\"nextSibling\"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error(\"unsupported pseudo: \"+a);return e[u]?e(b):e.length>1?(c=[a,a,\"\",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,\"$1\"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||\"\")||fa.error(\"unsupported lang: \"+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute(\"xml:lang\")||b.getAttribute(\"lang\"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+\"-\");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&!!a.checked||\"option\"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return\"input\"===b&&\"button\"===a.type||\"button\"===b},text:function(a){var b;return\"input\"===a.nodeName.toLowerCase()&&\"text\"===a.type&&(null==(b=a.getAttribute(\"type\"))||\"text\"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+\" \"];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q,\" \")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d=\"\";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&\"parentNode\"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||\"*\",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[\" \"],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:\" \"===a[i-2].type?\"*\":\"\"})).replace(Q,\"$1\"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s=\"0\",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG(\"*\",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+\" \"];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n=\"function\"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&\"ID\"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split(\"\").sort(B).join(\"\")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement(\"div\"))}),ia(function(a){return a.innerHTML=\"<a href='#'></a>\",\"#\"===a.firstChild.getAttribute(\"href\")})||ja(\"type|href|height|width\",function(a,b,c){return c?void 0:a.getAttribute(b,\"type\"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML=\"<input/>\",a.firstChild.setAttribute(\"value\",\"\"),\"\"===a.firstChild.getAttribute(\"value\")})||ja(\"value\",function(a,b,c){return c||\"input\"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute(\"disabled\")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[\":\"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)$/,y=/^.[^:#\\[\\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if(\"string\"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=\":not(\"+a+\")\"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if(\"string\"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+\" \"+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,\"string\"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,\"string\"==typeof a){if(e=\"<\"===a[0]&&\">\"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||\"string\"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?\"string\"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,\"parentNode\")},parentsUntil:function(a,b,c){return u(a,\"parentNode\",c)},next:function(a){return F(a,\"nextSibling\")},prev:function(a){return F(a,\"previousSibling\")},nextAll:function(a){return u(a,\"nextSibling\")},prevAll:function(a){return u(a,\"previousSibling\")},nextUntil:function(a,b,c){return u(a,\"nextSibling\",c)},prevUntil:function(a,b,c){return u(a,\"previousSibling\",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return\"Until\"!==a.slice(-5)&&(d=c),d&&\"string\"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a=\"string\"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:\"\")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&\"string\"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c=\"\",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=\"\"),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[[\"resolve\",\"done\",n.Callbacks(\"once memory\"),\"resolved\"],[\"reject\",\"fail\",n.Callbacks(\"once memory\"),\"rejected\"],[\"notify\",\"progress\",n.Callbacks(\"memory\")]],c=\"pending\",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+\"With\"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+\"With\"](this===e?d:this,arguments),this},e[f[0]+\"With\"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler(\"ready\"),n(d).off(\"ready\"))))}});function J(){d.removeEventListener(\"DOMContentLoaded\",J),a.removeEventListener(\"load\",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),\"complete\"===d.readyState||\"loading\"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener(\"DOMContentLoaded\",J),a.addEventListener(\"load\",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if(\"object\"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if(\"string\"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&\"string\"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d=\"data-\"+b.replace(Q,\"-$&\").toLowerCase(),c=a.getAttribute(d),\"string\"==typeof c){try{c=\"true\"===c?!0:\"false\"===c?!1:\"null\"===c?null:+c+\"\"===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);\n}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,\"hasDataAttrs\"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf(\"data-\")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,\"hasDataAttrs\",!0)}return e}return\"object\"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,\"-$&\").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf(\"-\")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||\"fx\")+\"queue\",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||\"fx\";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};\"inprogress\"===e&&(e=c.shift(),d--),e&&(\"fx\"===b&&c.unshift(\"inprogress\"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+\"queueHooks\";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks(\"once memory\").add(function(){N.remove(a,[b+\"queue\",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return\"string\"!=typeof a&&(b=a,a=\"fx\",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),\"fx\"===a&&\"inprogress\"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||\"fx\",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};\"string\"!=typeof a&&(b=a,a=void 0),a=a||\"fx\";while(g--)c=N.get(f[g],a+\"queueHooks\"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,T=new RegExp(\"^(?:([+-])=|)(\"+S+\")([a-z%]*)$\",\"i\"),U=[\"Top\",\"Right\",\"Bottom\",\"Left\"],V=function(a,b){return a=b||a,\"none\"===n.css(a,\"display\")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,\"\")},i=h(),j=c&&c[3]||(n.cssNumber[b]?\"\":\"px\"),k=(n.cssNumber[b]||\"px\"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||\".5\",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\\w:-]+)/,Z=/^$|\\/(?:java|ecma)script/i,$={option:[1,\"<select multiple='multiple'>\",\"</select>\"],thead:[1,\"<table>\",\"</table>\"],col:[2,\"<table><colgroup>\",\"</colgroup></table>\"],tr:[2,\"<table><tbody>\",\"</tbody></table>\"],td:[3,\"<table><tbody><tr>\",\"</tr></tbody></table>\"],_default:[0,\"\",\"\"]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c=\"undefined\"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||\"*\"):\"undefined\"!=typeof a.querySelectorAll?a.querySelectorAll(b||\"*\"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],\"globalEval\",!b||N.get(b[c],\"globalEval\"))}var ba=/<|&#?\\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if(\"object\"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement(\"div\")),h=(Y.exec(f)||[\"\",\"\"])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=\"\"}else m.push(b.createTextNode(f));l.textContent=\"\",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),\"script\"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||\"\")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement(\"div\")),c=d.createElement(\"input\");c.setAttribute(\"type\",\"radio\"),c.setAttribute(\"checked\",\"checked\"),c.setAttribute(\"name\",\"t\"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML=\"<textarea>x</textarea>\",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if(\"object\"==typeof b){\"string\"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&(\"string\"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return\"undefined\"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||\"\").match(G)||[\"\"],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(\".\")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||\"\").match(G)||[\"\"],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||\"\").split(\".\").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp(\"(^|\\\\.)\"+p.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&(\"**\"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,\"handle events\")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,\"events\")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(\"click\"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||\"click\"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+\" \",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:\"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),fixHooks:{},keyHooks:{props:\"char charCode key keyCode\".split(\" \"),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:\"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:\"focusin\"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:\"focusout\"},click:{trigger:function(){return\"checkbox\"===this.type&&this.click&&n.nodeName(this,\"input\")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,\"a\")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:\"mouseover\",mouseleave:\"mouseout\",pointerenter:\"pointerover\",pointerleave:\"pointerout\"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+\".\"+d.namespace:d.origType,d.selector,d.handler),this;if(\"object\"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||\"function\"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,la=/<script|<style|<link/i,ma=/checked\\s*(?:[^=]|=\\s*.checked.)/i,na=/^true\\/(.*)/,oa=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;function pa(a,b){return n.nodeName(a,\"table\")&&n.nodeName(11!==b.nodeType?b:b.firstChild,\"tr\")?a.getElementsByTagName(\"tbody\")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute(\"type\"))+\"/\"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute(\"type\"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();\"input\"===c&&X.test(a.type)?b.checked=a.checked:(\"input\"===c||\"textarea\"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&\"string\"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,\"script\"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,\"script\"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||\"\")&&!N.access(j,\"globalEval\")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,\"\")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,\"script\")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,\"<$1></$2>\")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,\"script\"),g.length>0&&aa(g,!i&&_(a,\"script\")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent=\"\");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if(\"string\"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||[\"\",\"\"])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:\"append\",prependTo:\"prepend\",insertBefore:\"before\",insertAfter:\"after\",replaceAll:\"replaceWith\"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:\"block\",BODY:\"block\"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],\"display\");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),\"none\"!==c&&c||(wa=(wa||n(\"<iframe frameborder='0' width='0' height='0'/>\")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp(\"^(\"+S+\")(?!px)[a-z%]+$\",\"i\"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement(\"div\"),h=d.createElement(\"div\");if(h.style){h.style.backgroundClip=\"content-box\",h.cloneNode(!0).style.backgroundClip=\"\",l.clearCloneStyle=\"content-box\"===h.style.backgroundClip,g.style.cssText=\"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute\",g.appendChild(h);function i(){h.style.cssText=\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%\",h.innerHTML=\"\",Ea.appendChild(g);var d=a.getComputedStyle(h);b=\"1%\"!==d.top,f=\"2px\"===d.marginLeft,c=\"4px\"===d.width,h.style.marginRight=\"50%\",e=\"4px\"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement(\"div\"));return c.style.cssText=h.style.cssText=\"-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0\",c.style.marginRight=c.style.width=\"0\",h.style.width=\"1px\",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],\"\"!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+\"\":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:\"absolute\",visibility:\"hidden\",display:\"block\"},Ja={letterSpacing:\"0\",fontWeight:\"400\"},Ka=[\"Webkit\",\"O\",\"Moz\",\"ms\"],La=d.createElement(\"div\").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||\"px\"):b}function Oa(a,b,c,d,e){for(var f=c===(d?\"border\":\"content\")?4:\"width\"===b?1:0,g=0;4>f;f+=2)\"margin\"===c&&(g+=n.css(a,c+U[f],!0,e)),d?(\"content\"===c&&(g-=n.css(a,\"padding\"+U[f],!0,e)),\"margin\"!==c&&(g-=n.css(a,\"border\"+U[f]+\"Width\",!0,e))):(g+=n.css(a,\"padding\"+U[f],!0,e),\"padding\"!==c&&(g+=n.css(a,\"border\"+U[f]+\"Width\",!0,e)));return g}function Pa(b,c,e){var f=!0,g=\"width\"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i=\"border-box\"===n.css(b,\"boxSizing\",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?\"border\":\"content\"),f,h)+\"px\"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,\"olddisplay\"),c=d.style.display,b?(f[g]||\"none\"!==c||(d.style.display=\"\"),\"\"===d.style.display&&V(d)&&(f[g]=N.access(d,\"olddisplay\",za(d.nodeName)))):(e=V(d),\"none\"===c&&e||N.set(d,\"olddisplay\",e?c:n.css(d,\"display\"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&\"none\"!==d.style.display&&\"\"!==d.style.display||(d.style.display=b?f[g]||\"\":\"none\"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,\"opacity\");return\"\"===c?\"1\":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{\"float\":\"cssFloat\"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&\"get\"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,\"string\"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f=\"number\"),null!=c&&c===c&&(\"number\"===f&&(c+=e&&e[3]||(n.cssNumber[h]?\"\":\"px\")),l.clearCloneStyle||\"\"!==c||0!==b.indexOf(\"background\")||(i[b]=\"inherit\"),g&&\"set\"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&\"get\"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),\"normal\"===e&&b in Ja&&(e=Ja[b]),\"\"===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each([\"height\",\"width\"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,\"display\"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,\"border-box\"===n.css(a,\"boxSizing\",!1,f),f);return g&&(e=T.exec(c))&&\"px\"!==(e[3]||\"px\")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,\"marginLeft\"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+\"px\":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:\"inline-block\"},Fa,[a,\"marginRight\"]):void 0}),n.each({margin:\"\",padding:\"\",border:\"Width\"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f=\"string\"==typeof c?c.split(\" \"):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return\"boolean\"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?\"\":\"px\")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,\"\"),b&&\"auto\"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:\"swing\"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e[\"margin\"+c]=e[\"padding\"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners[\"*\"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,\"fxshow\");c.queue||(h=n._queueHooks(a,\"fx\"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,\"fx\").length||h.empty.fire()})})),1===a.nodeType&&(\"height\"in b||\"width\"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,\"display\"),k=\"none\"===j?N.get(a,\"olddisplay\")||za(a.nodeName):j,\"inline\"===k&&\"none\"===n.css(a,\"float\")&&(o.display=\"inline-block\")),c.overflow&&(o.overflow=\"hidden\",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||\"toggle\"===e,e===(p?\"hide\":\"show\")){if(\"show\"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))\"inline\"===(\"none\"===j?za(a.nodeName):j)&&(o.display=j);else{q?\"hidden\"in q&&(p=q.hidden):q=N.access(a,\"fxshow\",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,\"fxshow\");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start=\"width\"===d||\"height\"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&\"expand\"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{\"*\":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=[\"*\"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&\"object\"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:\"number\"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue=\"fx\"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css(\"opacity\",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,\"finish\"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return\"string\"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||\"fx\",[]),this.each(function(){var b=!0,e=null!=a&&a+\"queueHooks\",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||\"fx\"),this.each(function(){var b,c=N.get(this),d=c[a+\"queue\"],e=c[a+\"queueHooks\"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each([\"toggle\",\"show\",\"hide\"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||\"boolean\"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa(\"show\"),slideUp:Xa(\"hide\"),slideToggle:Xa(\"toggle\"),fadeIn:{opacity:\"show\"},fadeOut:{opacity:\"hide\"},fadeToggle:{opacity:\"toggle\"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||\"fx\",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement(\"input\"),b=d.createElement(\"select\"),c=b.appendChild(d.createElement(\"option\"));a.type=\"checkbox\",l.checkOn=\"\"!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement(\"input\"),a.value=\"t\",a.type=\"radio\",l.radioValue=\"t\"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return\"undefined\"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&\"set\"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+\"\"),c):e&&\"get\"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&\"radio\"===b&&n.nodeName(a,\"input\")){var c=a.value;return a.setAttribute(\"type\",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&\"set\"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&\"get\"in e&&null!==(d=e.get(a,b))?d:a[b];\n},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,\"tabindex\");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{\"for\":\"htmlFor\",\"class\":\"className\"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each([\"tabIndex\",\"readOnly\",\"maxLength\",\"cellSpacing\",\"cellPadding\",\"rowSpan\",\"colSpan\",\"useMap\",\"frameBorder\",\"contentEditable\"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\\t\\r\\n\\f]/g;function fb(a){return a.getAttribute&&a.getAttribute(\"class\")||\"\"}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if(\"string\"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(\" \"+e+\" \").replace(eb,\" \")){g=0;while(f=b[g++])d.indexOf(\" \"+f+\" \")<0&&(d+=f+\" \");h=n.trim(d),e!==h&&c.setAttribute(\"class\",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr(\"class\",\"\");if(\"string\"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(\" \"+e+\" \").replace(eb,\" \")){g=0;while(f=b[g++])while(d.indexOf(\" \"+f+\" \")>-1)d=d.replace(\" \"+f+\" \",\" \");h=n.trim(d),e!==h&&c.setAttribute(\"class\",h)}}return this},toggleClass:function(a,b){var c=typeof a;return\"boolean\"==typeof b&&\"string\"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if(\"string\"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||\"boolean\"===c)&&(b=fb(this),b&&N.set(this,\"__className__\",b),this.setAttribute&&this.setAttribute(\"class\",b||a===!1?\"\":N.get(this,\"__className__\")||\"\"))})},hasClass:function(a){var b,c,d=0;b=\" \"+a+\" \";while(c=this[d++])if(1===c.nodeType&&(\" \"+fb(c)+\" \").replace(eb,\" \").indexOf(b)>-1)return!0;return!1}});var gb=/\\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e=\"\":\"number\"==typeof e?e+=\"\":n.isArray(e)&&(e=n.map(e,function(a){return null==a?\"\":a+\"\"})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&\"set\"in b&&void 0!==b.set(this,e,\"value\")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&\"get\"in b&&void 0!==(c=b.get(e,\"value\"))?c:(c=e.value,\"string\"==typeof c?c.replace(gb,\"\"):null==c?\"\":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=\"select-one\"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute(\"disabled\"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,\"optgroup\"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each([\"radio\",\"checkbox\"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute(\"value\")?\"on\":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,\"type\")?b.type:b,r=k.call(b,\"namespace\")?b.namespace.split(\".\"):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(\".\")>-1&&(r=q.split(\".\"),q=r.shift(),r.sort()),l=q.indexOf(\":\")<0&&\"on\"+q,b=b[n.expando]?b:new n.Event(q,\"object\"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join(\".\"),b.rnamespace=b.namespace?new RegExp(\"(^|\\\\.)\"+r.join(\"\\\\.(?:.*\\\\.|)\")+\"(\\\\.|$)\"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,\"events\")||{})[b.type]&&N.get(h,\"handle\"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each(\"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu\".split(\" \"),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin=\"onfocusin\"in a,l.focusin||n.each({focus:\"focusin\",blur:\"focusout\"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\\?/;n.parseJSON=function(a){return JSON.parse(a+\"\")},n.parseXML=function(b){var c;if(!b||\"string\"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,\"text/xml\")}catch(d){c=void 0}return(!c||c.getElementsByTagName(\"parsererror\").length)&&n.error(\"Invalid XML: \"+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\\/\\//,rb={},sb={},tb=\"*/\".concat(\"*\"),ub=d.createElement(\"a\");ub.href=ib.href;function vb(a){return function(b,c){\"string\"!=typeof b&&(c=b,b=\"*\");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])\"+\"===d[0]?(d=d.slice(1)||\"*\",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return\"string\"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e[\"*\"]&&g(\"*\")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while(\"*\"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader(\"Content-Type\"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+\" \"+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if(\"*\"===f)f=i;else if(\"*\"!==i&&i!==f){if(g=j[i+\" \"+f]||j[\"* \"+f],!g)for(e in j)if(h=e.split(\" \"),h[1]===f&&(g=j[i+\" \"+h[0]]||j[\"* \"+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a[\"throws\"])b=g(b);else try{b=g(b)}catch(l){return{state:\"parsererror\",error:g?l:\"No conversion from \"+i+\" to \"+f}}}return{state:\"success\",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:\"GET\",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:\"application/x-www-form-urlencoded; charset=UTF-8\",accepts:{\"*\":tb,text:\"text/plain\",html:\"text/html\",xml:\"application/xml, text/xml\",json:\"application/json, text/javascript\"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:\"responseXML\",text:\"responseText\",json:\"responseJSON\"},converters:{\"* text\":String,\"text html\":!0,\"text json\":n.parseJSON,\"text xml\":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){\"object\"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks(\"once memory\"),s=m.statusCode||{},t={},u={},v=0,w=\"canceled\",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+\"\").replace(lb,\"\").replace(qb,ib.protocol+\"//\"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||\"*\").toLowerCase().match(G)||[\"\"],null==m.crossDomain){j=d.createElement(\"a\");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+\"//\"+ub.host!=j.protocol+\"//\"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&\"string\"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger(\"ajaxStart\"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?\"&\":\"?\")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,\"$1_=\"+jb++):f+(kb.test(f)?\"&\":\"?\")+\"_=\"+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader(\"If-Modified-Since\",n.lastModified[f]),n.etag[f]&&x.setRequestHeader(\"If-None-Match\",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader(\"Content-Type\",m.contentType),x.setRequestHeader(\"Accept\",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+(\"*\"!==m.dataTypes[0]?\", \"+tb+\"; q=0.01\":\"\"):m.accepts[\"*\"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w=\"abort\";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger(\"ajaxSend\",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort(\"timeout\")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,\"No Transport\");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||\"\",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader(\"Last-Modified\"),w&&(n.lastModified[f]=w),w=x.getResponseHeader(\"etag\"),w&&(n.etag[f]=w)),204===b||\"HEAD\"===m.type?y=\"nocontent\":304===b?y=\"notmodified\":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y=\"error\",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+\"\",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?\"ajaxSuccess\":\"ajaxError\",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger(\"ajaxComplete\",[x,m]),--n.active||n.event.trigger(\"ajaxStop\")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,\"json\")},getScript:function(a,b){return n.get(a,void 0,b,\"script\")}}),n.each([\"get\",\"post\"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:\"GET\",dataType:\"script\",async:!1,global:!1,\"throws\":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,\"body\")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\\[\\]$/,Cb=/\\r?\\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+\"[\"+(\"object\"==typeof e&&null!=e?b:\"\")+\"]\",e,c,d)});else if(c||\"object\"!==n.type(b))d(a,b);else for(e in b)Fb(a+\"[\"+e+\"]\",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?\"\":b,d[d.length]=encodeURIComponent(a)+\"=\"+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join(\"&\").replace(Ab,\"+\")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,\"elements\");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(\":disabled\")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,\"\\r\\n\")}}):{name:b.name,value:c.replace(Cb,\"\\r\\n\")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&\"withCredentials\"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e[\"X-Requested-With\"]||(e[\"X-Requested-With\"]=\"XMLHttpRequest\");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,\"abort\"===a?h.abort():\"error\"===a?\"number\"!=typeof h.status?f(0,\"error\"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,\"text\"!==(h.responseType||\"text\")||\"string\"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c(\"error\"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c(\"abort\");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:\"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript\"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{\"text script\":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter(\"script\",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type=\"GET\")}),n.ajaxTransport(\"script\",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n(\"<script>\").prop({charset:a.scriptCharset,src:a.url}).on(\"load error\",c=function(a){b.remove(),c=null,a&&f(\"error\"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\\?(?=&|$)|\\?\\?/;n.ajaxSetup({jsonp:\"callback\",jsonpCallback:function(){var a=Ib.pop()||n.expando+\"_\"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter(\"json jsonp\",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?\"url\":\"string\"==typeof b.data&&0===(b.contentType||\"\").indexOf(\"application/x-www-form-urlencoded\")&&Jb.test(b.data)&&\"data\");return h||\"jsonp\"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,\"$1\"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?\"&\":\"?\")+b.jsonp+\"=\"+e),b.converters[\"script json\"]=function(){return g||n.error(e+\" was not called\"),g[0]},b.dataTypes[0]=\"json\",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),\"script\"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument(\"\").body;return a.innerHTML=\"<form></form><form></form>\",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||\"string\"!=typeof a)return null;\"boolean\"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(\"\"):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if(\"string\"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(\" \");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&\"object\"==typeof b&&(e=\"POST\"),g.length>0&&n.ajax({url:a,type:e||\"GET\",dataType:\"html\",data:b}).done(function(a){f=arguments,g.html(d?n(\"<div>\").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each([\"ajaxStart\",\"ajaxStop\",\"ajaxComplete\",\"ajaxError\",\"ajaxSuccess\",\"ajaxSend\"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,\"position\"),l=n(a),m={};\"static\"===k&&(a.style.position=\"relative\"),h=l.offset(),f=n.css(a,\"top\"),i=n.css(a,\"left\"),j=(\"absolute\"===k||\"fixed\"===k)&&(f+i).indexOf(\"auto\")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),\"using\"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return\"fixed\"===n.css(c,\"position\")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],\"html\")||(d=a.offset()),d.top+=n.css(a[0],\"borderTopWidth\",!0)-a.scrollTop(),d.left+=n.css(a[0],\"borderLeftWidth\",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,\"marginTop\",!0),left:b.left-d.left-n.css(c,\"marginLeft\",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&\"static\"===n.css(a,\"position\"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:\"pageXOffset\",scrollTop:\"pageYOffset\"},function(a,b){var c=\"pageYOffset\"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each([\"top\",\"left\"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+\"px\":c):void 0})}),n.each({Height:\"height\",Width:\"width\"},function(a,b){n.each({padding:\"inner\"+a,content:b,\"\":\"outer\"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||\"boolean\"!=typeof d),g=c||(d===!0||e===!0?\"margin\":\"border\");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement[\"client\"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body[\"scroll\"+a],e[\"scroll\"+a],b.body[\"offset\"+a],e[\"offset\"+a],e[\"client\"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,\"**\"):this.off(b,a||\"**\",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,\"function\"==typeof define&&define.amd&&define(\"jquery\",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});\n"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return t()}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t():e.whatInput=t()}(this,function(){"use strict";function e(e){clearTimeout(a),n(e),p=!0,a=setTimeout(function(){p=!1},1e3)}function t(e){p||n(e)}function n(e){var t=o(e),n=i(e),d=m[e.type];"pointer"===d&&(d=r(e)),w!==d&&(!h&&w&&"keyboard"===d&&"tab"!==b[t]&&y.indexOf(n.nodeName.toLowerCase())>=0||(w=d,f.setAttribute("data-whatinput",w),-1===v.indexOf(w)&&v.push(w))),"keyboard"===d&&u(t)}function o(e){return e.keyCode?e.keyCode:e.which}function i(e){return e.target||e.srcElement}function r(e){return"number"==typeof e.pointerType?k[e.pointerType]:e.pointerType}function u(e){-1===c.indexOf(b[e])&&b[e]&&c.push(b[e])}function d(e){var t=o(e),n=c.indexOf(b[t]);-1!==n&&c.splice(n,1)}function s(){var n="mousedown";window.PointerEvent?n="pointerdown":window.MSPointerEvent&&(n="MSPointerDown"),f.addEventListener(n,t),f.addEventListener("mouseenter",t),"ontouchstart"in window&&f.addEventListener("touchstart",e),f.addEventListener("keydown",t),document.addEventListener("keyup",d)}var a,c=[],f=document.body,p=!1,w=null,y=["input","select","textarea"],h=f.hasAttribute("data-whatinput-formtyping"),m={keydown:"keyboard",mousedown:"mouse",mouseenter:"mouse",touchstart:"touch",pointerdown:"pointer",MSPointerDown:"pointer"},v=[],b={9:"tab",13:"enter",16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},k={2:"touch",3:"touch",4:"mouse"};return"addEventListener"in window&&Array.prototype.indexOf&&s(),{ask:function(){return w},keys:function(){return c},types:function(){return v},set:n}});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(7)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///Users/karandeepsingh/Documents/Projects/nexus-ui/node_modules/babel-polyfill/dist/polyfill.min.js")

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "!function e(t,n,r){function s(i,u){if(!n[i]){if(!t[i]){var c=\"function\"==typeof require&&require;if(!u&&c)return c(i,!0);if(o)return o(i,!0);var a=new Error(\"Cannot find module '\"+i+\"'\");throw a.code=\"MODULE_NOT_FOUND\",a}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(n){var e=t[i][1][n];return s(e?e:n)},f,f.exports,e,t,n,r)}return n[i].exports}for(var o=\"function\"==typeof require&&require,i=0;i<r.length;i++)s(r[i]);return s}({1:[function(t,n,e){(function(n){\"use strict\";if(t(189),t(2),n._babelPolyfill)throw new Error(\"only one instance of babel-polyfill is allowed\");n._babelPolyfill=!0}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{189:189,2:2}],2:[function(t,n,e){n.exports=t(190)},{190:190}],3:[function(t,n,e){n.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},{}],4:[function(t,n,e){var r=t(84)(\"unscopables\"),o=Array.prototype;void 0==o[r]&&t(32)(o,r,{}),n.exports=function(t){o[r][t]=!0}},{32:32,84:84}],5:[function(t,n,e){var r=t(39);n.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},{39:39}],6:[function(t,n,e){\"use strict\";var r=t(81),o=t(77),i=t(80);n.exports=[].copyWithin||function copyWithin(t,n){var e=r(this),u=i(e.length),c=o(t,u),a=o(n,u),s=arguments,f=s.length>2?s[2]:void 0,l=Math.min((void 0===f?u:o(f,u))-a,u-c),h=1;for(c>a&&a+l>c&&(h=-1,a+=l-1,c+=l-1);l-- >0;)a in e?e[c]=e[a]:delete e[c],c+=h,a+=h;return e}},{77:77,80:80,81:81}],7:[function(t,n,e){\"use strict\";var r=t(81),o=t(77),i=t(80);n.exports=[].fill||function fill(t){for(var n=r(this),e=i(n.length),u=arguments,c=u.length,a=o(c>1?u[1]:void 0,e),s=c>2?u[2]:void 0,f=void 0===s?e:o(s,e);f>a;)n[a++]=t;return n}},{77:77,80:80,81:81}],8:[function(t,n,e){var r=t(79),o=t(80),i=t(77);n.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if(c=a[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f;return!t&&-1}}},{77:77,79:79,80:80}],9:[function(t,n,e){var r=t(18),o=t(35),i=t(81),u=t(80),c=t(10);n.exports=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,f=6==t,l=5==t||f;return function(h,p,v){for(var g,y,d=i(h),m=o(d),x=r(p,v,3),S=u(m.length),w=0,b=n?c(h,S):e?c(h,0):void 0;S>w;w++)if((l||w in m)&&(g=m[w],y=x(g,w,d),t))if(n)b[w]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:b.push(g)}else if(s)return!1;return f?-1:a||s?s:b}}},{10:10,18:18,35:35,80:80,81:81}],10:[function(t,n,e){var r=t(39),o=t(37),i=t(84)(\"species\");n.exports=function(t,n){var e;return o(t)&&(e=t.constructor,\"function\"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),new(void 0===e?Array:e)(n)}},{37:37,39:39,84:84}],11:[function(t,n,e){var r=t(12),o=t(84)(\"toStringTag\"),i=\"Arguments\"==r(function(){return arguments}());n.exports=function(t){var n,e,u;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(e=(n=Object(t))[o])?e:i?r(n):\"Object\"==(u=r(n))&&\"function\"==typeof n.callee?\"Arguments\":u}},{12:12,84:84}],12:[function(t,n,e){var r={}.toString;n.exports=function(t){return r.call(t).slice(8,-1)}},{}],13:[function(t,n,e){\"use strict\";var r=t(47),o=t(32),i=t(61),u=t(18),c=t(70),a=t(19),s=t(28),f=t(43),l=t(45),h=t(83)(\"id\"),p=t(31),v=t(39),g=t(66),y=t(20),d=Object.isExtensible||v,m=y?\"_s\":\"size\",x=0,S=function(t,n){if(!v(t))return\"symbol\"==typeof t?t:(\"string\"==typeof t?\"S\":\"P\")+t;if(!p(t,h)){if(!d(t))return\"F\";if(!n)return\"E\";o(t,h,++x)}return\"O\"+t[h]},w=function(t,n){var e,r=S(n);if(\"F\"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};n.exports={getConstructor:function(t,n,e,o){var f=t(function(t,i){c(t,f,n),t._i=r.create(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=i&&s(i,e,t[o],t)});return i(f.prototype,{clear:function clear(){for(var t=this,n=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete n[e.i];t._f=t._l=void 0,t[m]=0},\"delete\":function(t){var n=this,e=w(n,t);if(e){var r=e.n,o=e.p;delete n._i[e.i],e.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==e&&(n._f=r),n._l==e&&(n._l=o),n[m]--}return!!e},forEach:function forEach(t){for(var n,e=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(e(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!w(this,t)}}),y&&r.setDesc(f.prototype,\"size\",{get:function(){return a(this[m])}}),f},def:function(t,n,e){var r,o,i=w(t,n);return i?i.v=e:(t._l=i={i:o=S(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[m]++,\"F\"!==o&&(t._i[o]=i)),t},getEntry:w,setStrong:function(t,n,e){f(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?\"keys\"==n?l(0,e.k):\"values\"==n?l(0,e.v):l(0,[e.k,e.v]):(t._t=void 0,l(1))},e?\"entries\":\"values\",!e,!0),g(n)}}},{18:18,19:19,20:20,28:28,31:31,32:32,39:39,43:43,45:45,47:47,61:61,66:66,70:70,83:83}],14:[function(t,n,e){var r=t(28),o=t(11);n.exports=function(t){return function toJSON(){if(o(this)!=t)throw TypeError(t+\"#toJSON isn't generic\");var n=[];return r(this,!1,n.push,n),n}}},{11:11,28:28}],15:[function(t,n,e){\"use strict\";var r=t(32),o=t(61),i=t(5),u=t(39),c=t(70),a=t(28),s=t(9),f=t(31),l=t(83)(\"weak\"),h=Object.isExtensible||u,p=s(5),v=s(6),g=0,y=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},m=function(t,n){return p(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=m(this,t);return n?n[1]:void 0},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},\"delete\":function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,e,r){var i=t(function(t,o){c(t,i,n),t._i=g++,t._l=void 0,void 0!=o&&a(o,e,t[r],t)});return o(i.prototype,{\"delete\":function(t){return u(t)?h(t)?f(t,l)&&f(t[l],this._i)&&delete t[l][this._i]:y(this)[\"delete\"](t):!1},has:function has(t){return u(t)?h(t)?f(t,l)&&f(t[l],this._i):y(this).has(t):!1}}),i},def:function(t,n,e){return h(i(n))?(f(n,l)||r(n,l,{}),n[l][t._i]=e):y(t).set(n,e),t},frozenStore:y,WEAK:l}},{28:28,31:31,32:32,39:39,5:5,61:61,70:70,83:83,9:9}],16:[function(t,n,e){\"use strict\";var r=t(30),o=t(23),i=t(62),u=t(61),c=t(28),a=t(70),s=t(39),f=t(25),l=t(44),h=t(67);n.exports=function(t,n,e,p,v,g){var y=r[t],d=y,m=v?\"set\":\"add\",x=d&&d.prototype,S={},w=function(t){var n=x[t];i(x,t,\"delete\"==t?function(t){return g&&!s(t)?!1:n.call(this,0===t?0:t)}:\"has\"==t?function has(t){return g&&!s(t)?!1:n.call(this,0===t?0:t)}:\"get\"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:\"add\"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,e){return n.call(this,0===t?0:t,e),this})};if(\"function\"==typeof d&&(g||x.forEach&&!f(function(){(new d).entries().next()}))){var b,E=new d,O=E[m](g?{}:-0,1)!=E,P=f(function(){E.has(1)}),_=l(function(t){new d(t)});_||(d=n(function(n,e){a(n,d,t);var r=new y;return void 0!=e&&c(e,v,r[m],r),r}),d.prototype=x,x.constructor=d),g||E.forEach(function(t,n){b=1/n===-(1/0)}),(P||b)&&(w(\"delete\"),w(\"has\"),v&&w(\"get\")),(b||O)&&w(m),g&&x.clear&&delete x.clear}else d=p.getConstructor(n,t,v,m),u(d.prototype,e);return h(d,t),S[t]=d,o(o.G+o.W+o.F*(d!=y),S),g||p.setStrong(d,t,v),d}},{23:23,25:25,28:28,30:30,39:39,44:44,61:61,62:62,67:67,70:70}],17:[function(t,n,e){var r=n.exports={version:\"1.2.6\"};\"number\"==typeof __e&&(__e=r)},{}],18:[function(t,n,e){var r=t(3);n.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},{3:3}],19:[function(t,n,e){n.exports=function(t){if(void 0==t)throw TypeError(\"Can't call method on  \"+t);return t}},{}],20:[function(t,n,e){n.exports=!t(25)(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},{25:25}],21:[function(t,n,e){var r=t(39),o=t(30).document,i=r(o)&&r(o.createElement);n.exports=function(t){return i?o.createElement(t):{}}},{30:30,39:39}],22:[function(t,n,e){var r=t(47);n.exports=function(t){var n=r.getKeys(t),e=r.getSymbols;if(e)for(var o,i=e(t),u=r.isEnum,c=0;i.length>c;)u.call(t,o=i[c++])&&n.push(o);return n}},{47:47}],23:[function(t,n,e){var r=t(30),o=t(17),i=t(32),u=t(62),c=t(18),a=\"prototype\",s=function(t,n,e){var f,l,h,p,v=t&s.F,g=t&s.G,y=t&s.S,d=t&s.P,m=t&s.B,x=g?r:y?r[n]||(r[n]={}):(r[n]||{})[a],S=g?o:o[n]||(o[n]={}),w=S[a]||(S[a]={});g&&(e=n);for(f in e)l=!v&&x&&f in x,h=(l?x:e)[f],p=m&&l?c(h,r):d&&\"function\"==typeof h?c(Function.call,h):h,x&&!l&&u(x,f,h),S[f]!=h&&i(S,f,p),d&&w[f]!=h&&(w[f]=h)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,n.exports=s},{17:17,18:18,30:30,32:32,62:62}],24:[function(t,n,e){var r=t(84)(\"match\");n.exports=function(t){var n=/./;try{\"/./\"[t](n)}catch(e){try{return n[r]=!1,!\"/./\"[t](n)}catch(o){}}return!0}},{84:84}],25:[function(t,n,e){n.exports=function(t){try{return!!t()}catch(n){return!0}}},{}],26:[function(t,n,e){\"use strict\";var r=t(32),o=t(62),i=t(25),u=t(19),c=t(84);n.exports=function(t,n,e){var a=c(t),s=\"\"[t];i(function(){var n={};return n[a]=function(){return 7},7!=\"\"[t](n)})&&(o(String.prototype,t,e(u,a,s)),r(RegExp.prototype,a,2==n?function(t,n){return s.call(t,this,n)}:function(t){return s.call(t,this)}))}},{19:19,25:25,32:32,62:62,84:84}],27:[function(t,n,e){\"use strict\";var r=t(5);n.exports=function(){var t=r(this),n=\"\";return t.global&&(n+=\"g\"),t.ignoreCase&&(n+=\"i\"),t.multiline&&(n+=\"m\"),t.unicode&&(n+=\"u\"),t.sticky&&(n+=\"y\"),n}},{5:5}],28:[function(t,n,e){var r=t(18),o=t(41),i=t(36),u=t(5),c=t(80),a=t(85);n.exports=function(t,n,e,s){var f,l,h,p=a(t),v=r(e,s,n?2:1),g=0;if(\"function\"!=typeof p)throw TypeError(t+\" is not iterable!\");if(i(p))for(f=c(t.length);f>g;g++)n?v(u(l=t[g])[0],l[1]):v(t[g]);else for(h=p.call(t);!(l=h.next()).done;)o(h,v,l.value,n)}},{18:18,36:36,41:41,5:5,80:80,85:85}],29:[function(t,n,e){var r=t(79),o=t(47).getNames,i={}.toString,u=\"object\"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(n){return u.slice()}};n.exports.get=function getOwnPropertyNames(t){return u&&\"[object Window]\"==i.call(t)?c(t):o(r(t))}},{47:47,79:79}],30:[function(t,n,e){var r=n.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=r)},{}],31:[function(t,n,e){var r={}.hasOwnProperty;n.exports=function(t,n){return r.call(t,n)}},{}],32:[function(t,n,e){var r=t(47),o=t(60);n.exports=t(20)?function(t,n,e){return r.setDesc(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},{20:20,47:47,60:60}],33:[function(t,n,e){n.exports=t(30).document&&document.documentElement},{30:30}],34:[function(t,n,e){n.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},{}],35:[function(t,n,e){var r=t(12);n.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},{12:12}],36:[function(t,n,e){var r=t(46),o=t(84)(\"iterator\"),i=Array.prototype;n.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},{46:46,84:84}],37:[function(t,n,e){var r=t(12);n.exports=Array.isArray||function(t){return\"Array\"==r(t)}},{12:12}],38:[function(t,n,e){var r=t(39),o=Math.floor;n.exports=function isInteger(t){return!r(t)&&isFinite(t)&&o(t)===t}},{39:39}],39:[function(t,n,e){n.exports=function(t){return\"object\"==typeof t?null!==t:\"function\"==typeof t}},{}],40:[function(t,n,e){var r=t(39),o=t(12),i=t(84)(\"match\");n.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:\"RegExp\"==o(t))}},{12:12,39:39,84:84}],41:[function(t,n,e){var r=t(5);n.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var u=t[\"return\"];throw void 0!==u&&r(u.call(t)),i}}},{5:5}],42:[function(t,n,e){\"use strict\";var r=t(47),o=t(60),i=t(67),u={};t(32)(u,t(84)(\"iterator\"),function(){return this}),n.exports=function(t,n,e){t.prototype=r.create(u,{next:o(1,e)}),i(t,n+\" Iterator\")}},{32:32,47:47,60:60,67:67,84:84}],43:[function(t,n,e){\"use strict\";var r=t(49),o=t(23),i=t(62),u=t(32),c=t(31),a=t(46),s=t(42),f=t(67),l=t(47).getProto,h=t(84)(\"iterator\"),p=!([].keys&&\"next\"in[].keys()),v=\"@@iterator\",g=\"keys\",y=\"values\",d=function(){return this};n.exports=function(t,n,e,m,x,S,w){s(e,n,m);var b,E,O=function(t){if(!p&&t in F)return F[t];switch(t){case g:return function keys(){return new e(this,t)};case y:return function values(){return new e(this,t)}}return function entries(){return new e(this,t)}},P=n+\" Iterator\",_=x==y,M=!1,F=t.prototype,A=F[h]||F[v]||x&&F[x],j=A||O(x);if(A){var N=l(j.call(new t));f(N,P,!0),!r&&c(F,v)&&u(N,h,d),_&&A.name!==y&&(M=!0,j=function values(){return A.call(this)})}if(r&&!w||!p&&!M&&F[h]||u(F,h,j),a[n]=j,a[P]=d,x)if(b={values:_?j:O(y),keys:S?j:O(g),entries:_?O(\"entries\"):j},w)for(E in b)E in F||i(F,E,b[E]);else o(o.P+o.F*(p||M),n,b);return b}},{23:23,31:31,32:32,42:42,46:46,47:47,49:49,62:62,67:67,84:84}],44:[function(t,n,e){var r=t(84)(\"iterator\"),o=!1;try{var i=[7][r]();i[\"return\"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}n.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){e=!0},i[r]=function(){return u},t(i)}catch(c){}return e}},{84:84}],45:[function(t,n,e){n.exports=function(t,n){return{value:n,done:!!t}}},{}],46:[function(t,n,e){n.exports={}},{}],47:[function(t,n,e){var r=Object;n.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},{}],48:[function(t,n,e){var r=t(47),o=t(79);n.exports=function(t,n){for(var e,i=o(t),u=r.getKeys(i),c=u.length,a=0;c>a;)if(i[e=u[a++]]===n)return e}},{47:47,79:79}],49:[function(t,n,e){n.exports=!1},{}],50:[function(t,n,e){n.exports=Math.expm1||function expm1(t){return 0==(t=+t)?t:t>-1e-6&&1e-6>t?t+t*t/2:Math.exp(t)-1}},{}],51:[function(t,n,e){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&1e-8>t?t-t*t/2:Math.log(1+t)}},{}],52:[function(t,n,e){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:0>t?-1:1}},{}],53:[function(t,n,e){var r,o,i,u=t(30),c=t(76).set,a=u.MutationObserver||u.WebKitMutationObserver,s=u.process,f=u.Promise,l=\"process\"==t(12)(s),h=function(){var t,n,e;for(l&&(t=s.domain)&&(s.domain=null,t.exit());r;)n=r.domain,e=r.fn,n&&n.enter(),e(),n&&n.exit(),r=r.next;o=void 0,t&&t.enter()};if(l)i=function(){s.nextTick(h)};else if(a){var p=1,v=document.createTextNode(\"\");new a(h).observe(v,{characterData:!0}),i=function(){v.data=p=-p}}else i=f&&f.resolve?function(){f.resolve().then(h)}:function(){c.call(u,h)};n.exports=function asap(t){var n={fn:t,next:void 0,domain:l&&s.domain};o&&(o.next=n),r||(r=n,i()),o=n}},{12:12,30:30,76:76}],54:[function(t,n,e){var r=t(47),o=t(81),i=t(35);n.exports=t(25)(function(){var t=Object.assign,n={},e={},r=Symbol(),o=\"abcdefghijklmnopqrst\";return n[r]=7,o.split(\"\").forEach(function(t){e[t]=t}),7!=t({},n)[r]||Object.keys(t({},e)).join(\"\")!=o})?function assign(t,n){for(var e=o(t),u=arguments,c=u.length,a=1,s=r.getKeys,f=r.getSymbols,l=r.isEnum;c>a;)for(var h,p=i(u[a++]),v=f?s(p).concat(f(p)):s(p),g=v.length,y=0;g>y;)l.call(p,h=v[y++])&&(e[h]=p[h]);return e}:Object.assign},{25:25,35:35,47:47,81:81}],55:[function(t,n,e){var r=t(23),o=t(17),i=t(25);n.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),\"Object\",u)}},{17:17,23:23,25:25}],56:[function(t,n,e){var r=t(47),o=t(79),i=r.isEnum;n.exports=function(t){return function(n){for(var e,u=o(n),c=r.getKeys(u),a=c.length,s=0,f=[];a>s;)i.call(u,e=c[s++])&&f.push(t?[e,u[e]]:u[e]);return f}}},{47:47,79:79}],57:[function(t,n,e){var r=t(47),o=t(5),i=t(30).Reflect;n.exports=i&&i.ownKeys||function ownKeys(t){var n=r.getNames(o(t)),e=r.getSymbols;return e?n.concat(e(t)):n}},{30:30,47:47,5:5}],58:[function(t,n,e){\"use strict\";var r=t(59),o=t(34),i=t(3);n.exports=function(){for(var t=i(this),n=arguments.length,e=Array(n),u=0,c=r._,a=!1;n>u;)(e[u]=arguments[u++])===c&&(a=!0);return function(){var r,i=this,u=arguments,s=u.length,f=0,l=0;if(!a&&!s)return o(t,e,i);if(r=e.slice(),a)for(;n>f;f++)r[f]===c&&(r[f]=u[l++]);for(;s>l;)r.push(u[l++]);return o(t,r,i)}}},{3:3,34:34,59:59}],59:[function(t,n,e){n.exports=t(30)},{30:30}],60:[function(t,n,e){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],61:[function(t,n,e){var r=t(62);n.exports=function(t,n){for(var e in n)r(t,e,n[e]);return t}},{62:62}],62:[function(t,n,e){var r=t(30),o=t(32),i=t(83)(\"src\"),u=\"toString\",c=Function[u],a=(\"\"+c).split(u);t(17).inspectSource=function(t){return c.call(t)},(n.exports=function(t,n,e,u){\"function\"==typeof e&&(e.hasOwnProperty(i)||o(e,i,t[n]?\"\"+t[n]:a.join(String(n))),e.hasOwnProperty(\"name\")||o(e,\"name\",n)),t===r?t[n]=e:(u||delete t[n],o(t,n,e))})(Function.prototype,u,function toString(){return\"function\"==typeof this&&this[i]||c.call(this)})},{17:17,30:30,32:32,83:83}],63:[function(t,n,e){n.exports=function(t,n){var e=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,e)}}},{}],64:[function(t,n,e){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},{}],65:[function(t,n,e){var r=t(47).getDesc,o=t(39),i=t(5),u=function(t,n){if(i(t),!o(n)&&null!==n)throw TypeError(n+\": can't set as prototype!\")};n.exports={set:Object.setPrototypeOf||(\"__proto__\"in{}?function(n,e,o){try{o=t(18)(Function.call,r(Object.prototype,\"__proto__\").set,2),o(n,[]),e=!(n instanceof Array)}catch(i){e=!0}return function setPrototypeOf(t,n){return u(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:u}},{18:18,39:39,47:47,5:5}],66:[function(t,n,e){\"use strict\";var r=t(30),o=t(47),i=t(20),u=t(84)(\"species\");n.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.setDesc(n,u,{configurable:!0,get:function(){return this}})}},{20:20,30:30,47:47,84:84}],67:[function(t,n,e){var r=t(47).setDesc,o=t(31),i=t(84)(\"toStringTag\");n.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},{31:31,47:47,84:84}],68:[function(t,n,e){var r=t(30),o=\"__core-js_shared__\",i=r[o]||(r[o]={});n.exports=function(t){return i[t]||(i[t]={})}},{30:30}],69:[function(t,n,e){var r=t(5),o=t(3),i=t(84)(\"species\");n.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},{3:3,5:5,84:84}],70:[function(t,n,e){n.exports=function(t,n,e){if(!(t instanceof n))throw TypeError(e+\": use the 'new' operator!\");return t}},{}],71:[function(t,n,e){var r=t(78),o=t(19);n.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),s=c.length;return 0>a||a>=s?t?\"\":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},{19:19,78:78}],72:[function(t,n,e){var r=t(40),o=t(19);n.exports=function(t,n,e){if(r(n))throw TypeError(\"String#\"+e+\" doesn't accept regex!\");return String(o(t))}},{19:19,40:40}],73:[function(t,n,e){var r=t(80),o=t(74),i=t(19);n.exports=function(t,n,e,u){var c=String(i(t)),a=c.length,s=void 0===e?\" \":String(e),f=r(n);if(a>=f)return c;\"\"==s&&(s=\" \");var l=f-a,h=o.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{19:19,74:74,80:80}],74:[function(t,n,e){\"use strict\";var r=t(78),o=t(19);n.exports=function repeat(t){var n=String(o(this)),e=\"\",i=r(t);if(0>i||i==1/0)throw RangeError(\"Count can't be negative\");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},{19:19,78:78}],75:[function(t,n,e){var r=t(23),o=t(19),i=t(25),u=\"\t\\n\\x0B\\f\\r   ᠎             　\\u2028\\u2029\\ufeff\",c=\"[\"+u+\"]\",a=\"​\",s=RegExp(\"^\"+c+c+\"*\"),f=RegExp(c+c+\"*$\"),l=function(t,n){var e={};e[t]=n(h),r(r.P+r.F*i(function(){return!!u[t]()||a[t]()!=a}),\"String\",e)},h=l.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(s,\"\")),2&n&&(t=t.replace(f,\"\")),t};n.exports=l},{19:19,23:23,25:25}],76:[function(t,n,e){var r,o,i,u=t(18),c=t(34),a=t(33),s=t(21),f=t(30),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,g=0,y={},d=\"onreadystatechange\",m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){m.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++g]=function(){c(\"function\"==typeof t?t:Function(t),n)},r(g),g},p=function clearImmediate(t){delete y[t]},\"process\"==t(12)(l)?r=function(t){l.nextTick(u(m,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&\"function\"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+\"\",\"*\")},f.addEventListener(\"message\",x,!1)):r=d in s(\"script\")?function(t){a.appendChild(s(\"script\"))[d]=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),n.exports={set:h,clear:p}},{12:12,18:18,21:21,30:30,33:33,34:34}],77:[function(t,n,e){var r=t(78),o=Math.max,i=Math.min;n.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},{78:78}],78:[function(t,n,e){var r=Math.ceil,o=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?o:r)(t)}},{}],79:[function(t,n,e){var r=t(35),o=t(19);n.exports=function(t){return r(o(t))}},{19:19,35:35}],80:[function(t,n,e){var r=t(78),o=Math.min;n.exports=function(t){return t>0?o(r(t),9007199254740991):0}},{78:78}],81:[function(t,n,e){var r=t(19);n.exports=function(t){return Object(r(t))}},{19:19}],82:[function(t,n,e){var r=t(39);n.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if(\"function\"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&\"function\"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError(\"Can't convert object to primitive value\")}},{39:39}],83:[function(t,n,e){var r=0,o=Math.random();n.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++r+o).toString(36))}},{}],84:[function(t,n,e){var r=t(68)(\"wks\"),o=t(83),i=t(30).Symbol;n.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)(\"Symbol.\"+t))}},{30:30,68:68,83:83}],85:[function(t,n,e){var r=t(11),o=t(84)(\"iterator\"),i=t(46);n.exports=t(17).getIteratorMethod=function(t){return void 0!=t?t[o]||t[\"@@iterator\"]||i[r(t)]:void 0}},{11:11,17:17,46:46,84:84}],86:[function(t,n,e){\"use strict\";var r,o=t(47),i=t(23),u=t(20),c=t(60),a=t(33),s=t(21),f=t(31),l=t(12),h=t(34),p=t(25),v=t(5),g=t(3),y=t(39),d=t(81),m=t(79),x=t(78),S=t(77),w=t(80),b=t(35),E=t(83)(\"__proto__\"),O=t(9),P=t(8)(!1),_=Object.prototype,M=Array.prototype,F=M.slice,A=M.join,j=o.setDesc,N=o.getDesc,I=o.setDescs,k={};u||(r=!p(function(){return 7!=j(s(\"div\"),\"a\",{get:function(){return 7}}).a}),o.setDesc=function(t,n,e){if(r)try{return j(t,n,e)}catch(o){}if(\"get\"in e||\"set\"in e)throw TypeError(\"Accessors not supported!\");return\"value\"in e&&(v(t)[n]=e.value),t},o.getDesc=function(t,n){if(r)try{return N(t,n)}catch(e){}return f(t,n)?c(!_.propertyIsEnumerable.call(t,n),t[n]):void 0},o.setDescs=I=function(t,n){v(t);for(var e,r=o.getKeys(n),i=r.length,u=0;i>u;)o.setDesc(t,e=r[u++],n[e]);return t}),i(i.S+i.F*!u,\"Object\",{getOwnPropertyDescriptor:o.getDesc,defineProperty:o.setDesc,defineProperties:I});var D=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\"),T=D.concat(\"length\",\"prototype\"),L=D.length,R=function(){var t,n=s(\"iframe\"),e=L,r=\">\";for(n.style.display=\"none\",a.appendChild(n),n.src=\"javascript:\",t=n.contentWindow.document,t.open(),t.write(\"<script>document.F=Object</script\"+r),t.close(),R=t.F;e--;)delete R.prototype[D[e]];return R()},C=function(t,n){return function(e){var r,o=m(e),i=0,u=[];for(r in o)r!=E&&f(o,r)&&u.push(r);for(;n>i;)f(o,r=t[i++])&&(~P(u,r)||u.push(r));return u}},G=function(){};i(i.S,\"Object\",{getPrototypeOf:o.getProto=o.getProto||function(t){return t=d(t),f(t,E)?t[E]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?_:null},getOwnPropertyNames:o.getNames=o.getNames||C(T,T.length,!0),create:o.create=o.create||function(t,n){var e;return null!==t?(G.prototype=v(t),e=new G,G.prototype=null,e[E]=t):e=R(),void 0===n?e:I(e,n)},keys:o.getKeys=o.getKeys||C(D,L,!1)});var W=function(t,n,e){if(!(n in k)){for(var r=[],o=0;n>o;o++)r[o]=\"a[\"+o+\"]\";k[n]=Function(\"F,a\",\"return new F(\"+r.join(\",\")+\")\")}return k[n](t,e)};i(i.P,\"Function\",{bind:function bind(t){var n=g(this),e=F.call(arguments,1),r=function(){var o=e.concat(F.call(arguments));return this instanceof r?W(n,o.length,o):h(n,o,t)};return y(n.prototype)&&(r.prototype=n.prototype),r}}),i(i.P+i.F*p(function(){a&&F.call(a)}),\"Array\",{slice:function(t,n){var e=w(this.length),r=l(this);if(n=void 0===n?e:n,\"Array\"==r)return F.call(this,t,n);for(var o=S(t,e),i=S(n,e),u=w(i-o),c=Array(u),a=0;u>a;a++)c[a]=\"String\"==r?this.charAt(o+a):this[o+a];return c}}),i(i.P+i.F*(b!=Object),\"Array\",{join:function join(t){return A.call(b(this),void 0===t?\",\":t)}}),i(i.S,\"Array\",{isArray:t(37)});var z=function(t){return function(n,e){g(n);var r=b(this),o=w(r.length),i=t?o-1:0,u=t?-1:1;if(arguments.length<2)for(;;){if(i in r){e=r[i],i+=u;break}if(i+=u,t?0>i:i>=o)throw TypeError(\"Reduce of empty array with no initial value\")}for(;t?i>=0:o>i;i+=u)i in r&&(e=n(e,r[i],i,this));return e}},K=function(t){return function(n){return t(this,n,arguments[1])}};i(i.P,\"Array\",{forEach:o.each=o.each||K(O(0)),map:K(O(1)),filter:K(O(2)),some:K(O(3)),every:K(O(4)),reduce:z(!1),reduceRight:z(!0),indexOf:K(P),lastIndexOf:function(t,n){var e=m(this),r=w(e.length),o=r-1;for(arguments.length>1&&(o=Math.min(o,x(n))),0>o&&(o=w(r+o));o>=0;o--)if(o in e&&e[o]===t)return o;return-1}}),i(i.S,\"Date\",{now:function(){return+new Date}});var U=function(t){return t>9?t:\"0\"+t};i(i.P+i.F*(p(function(){return\"0385-07-25T07:06:39.999Z\"!=new Date(-5e13-1).toISOString()})||!p(function(){new Date(NaN).toISOString()})),\"Date\",{toISOString:function toISOString(){if(!isFinite(this))throw RangeError(\"Invalid time value\");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=0>n?\"-\":n>9999?\"+\":\"\";return r+(\"00000\"+Math.abs(n)).slice(r?-6:-4)+\"-\"+U(t.getUTCMonth()+1)+\"-\"+U(t.getUTCDate())+\"T\"+U(t.getUTCHours())+\":\"+U(t.getUTCMinutes())+\":\"+U(t.getUTCSeconds())+\".\"+(e>99?e:\"0\"+U(e))+\"Z\"}})},{12:12,20:20,21:21,23:23,25:25,3:3,31:31,33:33,34:34,35:35,37:37,39:39,47:47,5:5,60:60,77:77,78:78,79:79,8:8,80:80,81:81,83:83,9:9}],87:[function(t,n,e){var r=t(23);r(r.P,\"Array\",{copyWithin:t(6)}),t(4)(\"copyWithin\")},{23:23,4:4,6:6}],88:[function(t,n,e){var r=t(23);r(r.P,\"Array\",{fill:t(7)}),t(4)(\"fill\")},{23:23,4:4,7:7}],89:[function(t,n,e){\"use strict\";var r=t(23),o=t(9)(6),i=\"findIndex\",u=!0;i in[]&&Array(1)[i](function(){u=!1}),r(r.P+r.F*u,\"Array\",{findIndex:function findIndex(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)(i)},{23:23,4:4,9:9}],90:[function(t,n,e){\"use strict\";var r=t(23),o=t(9)(5),i=\"find\",u=!0;i in[]&&Array(1)[i](function(){u=!1}),r(r.P+r.F*u,\"Array\",{find:function find(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)(i)},{23:23,4:4,9:9}],91:[function(t,n,e){\"use strict\";var r=t(18),o=t(23),i=t(81),u=t(41),c=t(36),a=t(80),s=t(85);o(o.S+o.F*!t(44)(function(t){Array.from(t)}),\"Array\",{from:function from(t){var n,e,o,f,l=i(t),h=\"function\"==typeof this?this:Array,p=arguments,v=p.length,g=v>1?p[1]:void 0,y=void 0!==g,d=0,m=s(l);if(y&&(g=r(g,v>2?p[2]:void 0,2)),void 0==m||h==Array&&c(m))for(n=a(l.length),e=new h(n);n>d;d++)e[d]=y?g(l[d],d):l[d];else for(f=m.call(l),e=new h;!(o=f.next()).done;d++)e[d]=y?u(f,g,[o.value,d],!0):o.value;return e.length=d,e}})},{18:18,23:23,36:36,41:41,44:44,80:80,81:81,85:85}],92:[function(t,n,e){\"use strict\";var r=t(4),o=t(45),i=t(46),u=t(79);n.exports=t(43)(Array,\"Array\",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):\"keys\"==n?o(0,e):\"values\"==n?o(0,t[e]):o(0,[e,t[e]])},\"values\"),i.Arguments=i.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},{4:4,43:43,45:45,46:46,79:79}],93:[function(t,n,e){\"use strict\";var r=t(23);r(r.S+r.F*t(25)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),\"Array\",{of:function of(){for(var t=0,n=arguments,e=n.length,r=new(\"function\"==typeof this?this:Array)(e);e>t;)r[t]=n[t++];return r.length=e,r}})},{23:23,25:25}],94:[function(t,n,e){t(66)(\"Array\")},{66:66}],95:[function(t,n,e){\"use strict\";var r=t(47),o=t(39),i=t(84)(\"hasInstance\"),u=Function.prototype;i in u||r.setDesc(u,i,{value:function(t){if(\"function\"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r.getProto(t);)if(this.prototype===t)return!0;return!1}})},{39:39,47:47,84:84}],96:[function(t,n,e){var r=t(47).setDesc,o=t(60),i=t(31),u=Function.prototype,c=/^\\s*function ([^ (]*)/,a=\"name\";a in u||t(20)&&r(u,a,{configurable:!0,get:function(){var t=(\"\"+this).match(c),n=t?t[1]:\"\";return i(this,a)||r(this,a,o(5,n)),n}})},{20:20,31:31,47:47,60:60}],97:[function(t,n,e){\"use strict\";var r=t(13);t(16)(\"Map\",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=r.getEntry(this,t);return n&&n.v},set:function set(t,n){return r.def(this,0===t?0:t,n)}},r,!0)},{13:13,16:16}],98:[function(t,n,e){var r=t(23),o=t(51),i=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))),\"Math\",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:o(t-1+i(t-1)*i(t+1))}})},{23:23,51:51}],99:[function(t,n,e){function asinh(t){return isFinite(t=+t)&&0!=t?0>t?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var r=t(23);r(r.S,\"Math\",{asinh:asinh})},{23:23}],100:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{23:23}],101:[function(t,n,e){var r=t(23),o=t(52);r(r.S,\"Math\",{cbrt:function cbrt(t){return o(t=+t)*Math.pow(Math.abs(t),1/3)}})},{23:23,52:52}],102:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{23:23}],103:[function(t,n,e){var r=t(23),o=Math.exp;r(r.S,\"Math\",{cosh:function cosh(t){return(o(t=+t)+o(-t))/2}})},{23:23}],104:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{expm1:t(50)})},{23:23,50:50}],105:[function(t,n,e){var r=t(23),o=t(52),i=Math.pow,u=i(2,-52),c=i(2,-23),a=i(2,127)*(2-c),s=i(2,-126),f=function(t){return t+1/u-1/u};r(r.S,\"Math\",{fround:function fround(t){var n,e,r=Math.abs(t),i=o(t);return s>r?i*f(r/s/c)*s*c:(n=(1+c/u)*r,e=n-(n-r),e>a||e!=e?i*(1/0):i*e)}})},{23:23,52:52}],106:[function(t,n,e){var r=t(23),o=Math.abs;r(r.S,\"Math\",{hypot:function hypot(t,n){for(var e,r,i=0,u=0,c=arguments,a=c.length,s=0;a>u;)e=o(c[u++]),e>s?(r=s/e,i=i*r*r+1,s=e):e>0?(r=e/s,i+=r*r):i+=e;return s===1/0?1/0:s*Math.sqrt(i)}})},{23:23}],107:[function(t,n,e){var r=t(23),o=Math.imul;r(r.S+r.F*t(25)(function(){return-5!=o(4294967295,5)||2!=o.length}),\"Math\",{imul:function imul(t,n){var e=65535,r=+t,o=+n,i=e&r,u=e&o;return 0|i*u+((e&r>>>16)*u+i*(e&o>>>16)<<16>>>0)}})},{23:23,25:25}],108:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{log10:function log10(t){return Math.log(t)/Math.LN10}})},{23:23}],109:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{log1p:t(51)})},{23:23,51:51}],110:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{23:23}],111:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{sign:t(52)})},{23:23,52:52}],112:[function(t,n,e){var r=t(23),o=t(50),i=Math.exp;r(r.S+r.F*t(25)(function(){return-2e-17!=!Math.sinh(-2e-17)}),\"Math\",{sinh:function sinh(t){return Math.abs(t=+t)<1?(o(t)-o(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},{23:23,25:25,50:50}],113:[function(t,n,e){var r=t(23),o=t(50),i=Math.exp;r(r.S,\"Math\",{\ntanh:function tanh(t){var n=o(t=+t),e=o(-t);return n==1/0?1:e==1/0?-1:(n-e)/(i(t)+i(-t))}})},{23:23,50:50}],114:[function(t,n,e){var r=t(23);r(r.S,\"Math\",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{23:23}],115:[function(t,n,e){\"use strict\";var r=t(47),o=t(30),i=t(31),u=t(12),c=t(82),a=t(25),s=t(75).trim,f=\"Number\",l=o[f],h=l,p=l.prototype,v=u(r.create(p))==f,g=\"trim\"in String.prototype,y=function(t){var n=c(t,!1);if(\"string\"==typeof n&&n.length>2){n=g?n.trim():s(n,3);var e,r,o,i=n.charCodeAt(0);if(43===i||45===i){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var u,a=n.slice(2),f=0,l=a.length;l>f;f++)if(u=a.charCodeAt(f),48>u||u>o)return NaN;return parseInt(a,r)}}return+n};l(\" 0o1\")&&l(\"0b1\")&&!l(\"+0x1\")||(l=function Number(t){var n=arguments.length<1?0:t,e=this;return e instanceof l&&(v?a(function(){p.valueOf.call(e)}):u(e)!=f)?new h(y(n)):y(n)},r.each.call(t(20)?r.getNames(h):\"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger\".split(\",\"),function(t){i(h,t)&&!i(l,t)&&r.setDesc(l,t,r.getDesc(h,t))}),l.prototype=p,p.constructor=l,t(62)(o,f,l))},{12:12,20:20,25:25,30:30,31:31,47:47,62:62,75:75,82:82}],116:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{EPSILON:Math.pow(2,-52)})},{23:23}],117:[function(t,n,e){var r=t(23),o=t(30).isFinite;r(r.S,\"Number\",{isFinite:function isFinite(t){return\"number\"==typeof t&&o(t)}})},{23:23,30:30}],118:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{isInteger:t(38)})},{23:23,38:38}],119:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{isNaN:function isNaN(t){return t!=t}})},{23:23}],120:[function(t,n,e){var r=t(23),o=t(38),i=Math.abs;r(r.S,\"Number\",{isSafeInteger:function isSafeInteger(t){return o(t)&&i(t)<=9007199254740991}})},{23:23,38:38}],121:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{MAX_SAFE_INTEGER:9007199254740991})},{23:23}],122:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{MIN_SAFE_INTEGER:-9007199254740991})},{23:23}],123:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{parseFloat:parseFloat})},{23:23}],124:[function(t,n,e){var r=t(23);r(r.S,\"Number\",{parseInt:parseInt})},{23:23}],125:[function(t,n,e){var r=t(23);r(r.S+r.F,\"Object\",{assign:t(54)})},{23:23,54:54}],126:[function(t,n,e){var r=t(39);t(55)(\"freeze\",function(t){return function freeze(n){return t&&r(n)?t(n):n}})},{39:39,55:55}],127:[function(t,n,e){var r=t(79);t(55)(\"getOwnPropertyDescriptor\",function(t){return function getOwnPropertyDescriptor(n,e){return t(r(n),e)}})},{55:55,79:79}],128:[function(t,n,e){t(55)(\"getOwnPropertyNames\",function(){return t(29).get})},{29:29,55:55}],129:[function(t,n,e){var r=t(81);t(55)(\"getPrototypeOf\",function(t){return function getPrototypeOf(n){return t(r(n))}})},{55:55,81:81}],130:[function(t,n,e){var r=t(39);t(55)(\"isExtensible\",function(t){return function isExtensible(n){return r(n)?t?t(n):!0:!1}})},{39:39,55:55}],131:[function(t,n,e){var r=t(39);t(55)(\"isFrozen\",function(t){return function isFrozen(n){return r(n)?t?t(n):!1:!0}})},{39:39,55:55}],132:[function(t,n,e){var r=t(39);t(55)(\"isSealed\",function(t){return function isSealed(n){return r(n)?t?t(n):!1:!0}})},{39:39,55:55}],133:[function(t,n,e){var r=t(23);r(r.S,\"Object\",{is:t(64)})},{23:23,64:64}],134:[function(t,n,e){var r=t(81);t(55)(\"keys\",function(t){return function keys(n){return t(r(n))}})},{55:55,81:81}],135:[function(t,n,e){var r=t(39);t(55)(\"preventExtensions\",function(t){return function preventExtensions(n){return t&&r(n)?t(n):n}})},{39:39,55:55}],136:[function(t,n,e){var r=t(39);t(55)(\"seal\",function(t){return function seal(n){return t&&r(n)?t(n):n}})},{39:39,55:55}],137:[function(t,n,e){var r=t(23);r(r.S,\"Object\",{setPrototypeOf:t(65).set})},{23:23,65:65}],138:[function(t,n,e){\"use strict\";var r=t(11),o={};o[t(84)(\"toStringTag\")]=\"z\",o+\"\"!=\"[object z]\"&&t(62)(Object.prototype,\"toString\",function toString(){return\"[object \"+r(this)+\"]\"},!0)},{11:11,62:62,84:84}],139:[function(t,n,e){\"use strict\";var r,o=t(47),i=t(49),u=t(30),c=t(18),a=t(11),s=t(23),f=t(39),l=t(5),h=t(3),p=t(70),v=t(28),g=t(65).set,y=t(64),d=t(84)(\"species\"),m=t(69),x=t(53),S=\"Promise\",w=u.process,b=\"process\"==a(w),E=u[S],O=function(t){var n=new E(function(){});return t&&(n.constructor=Object),E.resolve(n)===n},P=function(){function P2(t){var n=new E(t);return g(n,P2.prototype),n}var n=!1;try{if(n=E&&E.resolve&&O(),g(P2,E),P2.prototype=o.create(E.prototype,{constructor:{value:P2}}),P2.resolve(5).then(function(){})instanceof P2||(n=!1),n&&t(20)){var e=!1;E.resolve(o.setDesc({},\"then\",{get:function(){e=!0}})),n=e}}catch(r){n=!1}return n}(),_=function(t,n){return i&&t===E&&n===r?!0:y(t,n)},M=function(t){var n=l(t)[d];return void 0!=n?n:t},F=function(t){var n;return f(t)&&\"function\"==typeof(n=t.then)?n:!1},A=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError(\"Bad Promise constructor\");n=t,e=r}),this.resolve=h(n),this.reject=h(e)},j=function(t){try{t()}catch(n){return{error:n}}},N=function(t,n){if(!t.n){t.n=!0;var e=t.c;x(function(){for(var r=t.v,o=1==t.s,i=0,c=function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,a=n.reject;try{u?(o||(t.h=!0),e=u===!0?r:u(r),e===n.promise?a(TypeError(\"Promise-chain cycle\")):(i=F(e))?i.call(e,c,a):c(e)):a(r)}catch(s){a(s)}};e.length>i;)c(e[i++]);e.length=0,t.n=!1,n&&setTimeout(function(){var n,e,o=t.p;I(o)&&(b?w.emit(\"unhandledRejection\",r,o):(n=u.onunhandledrejection)?n({promise:o,reason:r}):(e=u.console)&&e.error&&e.error(\"Unhandled promise rejection\",r)),t.a=void 0},1)})}},I=function(t){var n,e=t._d,r=e.a||e.c,o=0;if(e.h)return!1;for(;r.length>o;)if(n=r[o++],n.fail||!I(n.promise))return!1;return!0},k=function(t){var n=this;n.d||(n.d=!0,n=n.r||n,n.v=t,n.s=2,n.a=n.c.slice(),N(n,!0))},D=function(t){var n,e=this;if(!e.d){e.d=!0,e=e.r||e;try{if(e.p===t)throw TypeError(\"Promise can't be resolved itself\");(n=F(t))?x(function(){var r={r:e,d:!1};try{n.call(t,c(D,r,1),c(k,r,1))}catch(o){k.call(r,o)}}):(e.v=t,e.s=1,N(e,!1))}catch(r){k.call({r:e,d:!1},r)}}};P||(E=function Promise(t){h(t);var n=this._d={p:p(this,E,S),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{t(c(D,n,1),c(k,n,1))}catch(e){k.call(n,e)}},t(61)(E.prototype,{then:function then(t,n){var e=new A(m(this,E)),r=e.promise,o=this._d;return e.ok=\"function\"==typeof t?t:!0,e.fail=\"function\"==typeof n&&n,o.c.push(e),o.a&&o.a.push(e),o.s&&N(o,!1),r},\"catch\":function(t){return this.then(void 0,t)}})),s(s.G+s.W+s.F*!P,{Promise:E}),t(67)(E,S),t(66)(S),r=t(17)[S],s(s.S+s.F*!P,S,{reject:function reject(t){var n=new A(this),e=n.reject;return e(t),n.promise}}),s(s.S+s.F*(!P||O(!0)),S,{resolve:function resolve(t){if(t instanceof E&&_(t.constructor,this))return t;var n=new A(this),e=n.resolve;return e(t),n.promise}}),s(s.S+s.F*!(P&&t(44)(function(t){E.all(t)[\"catch\"](function(){})})),S,{all:function all(t){var n=M(this),e=new A(n),r=e.resolve,i=e.reject,u=[],c=j(function(){v(t,!1,u.push,u);var e=u.length,c=Array(e);e?o.each.call(u,function(t,o){var u=!1;n.resolve(t).then(function(t){u||(u=!0,c[o]=t,--e||r(c))},i)}):r(c)});return c&&i(c.error),e.promise},race:function race(t){var n=M(this),e=new A(n),r=e.reject,o=j(function(){v(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})},{11:11,17:17,18:18,20:20,23:23,28:28,3:3,30:30,39:39,44:44,47:47,49:49,5:5,53:53,61:61,64:64,65:65,66:66,67:67,69:69,70:70,84:84}],140:[function(t,n,e){var r=t(23),o=Function.apply;r(r.S,\"Reflect\",{apply:function apply(t,n,e){return o.call(t,n,e)}})},{23:23}],141:[function(t,n,e){var r=t(47),o=t(23),i=t(3),u=t(5),c=t(39),a=Function.bind||t(17).Function.prototype.bind;o(o.S+o.F*t(25)(function(){function F(){}return!(Reflect.construct(function(){},[],F)instanceof F)}),\"Reflect\",{construct:function construct(t,n){i(t);var e=arguments.length<3?t:i(arguments[2]);if(t==e){if(void 0!=n)switch(u(n).length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var o=[null];return o.push.apply(o,n),new(a.apply(t,o))}var s=e.prototype,f=r.create(c(s)?s:Object.prototype),l=Function.apply.call(t,f,n);return c(l)?l:f}})},{17:17,23:23,25:25,3:3,39:39,47:47,5:5}],142:[function(t,n,e){var r=t(47),o=t(23),i=t(5);o(o.S+o.F*t(25)(function(){Reflect.defineProperty(r.setDesc({},1,{value:1}),1,{value:2})}),\"Reflect\",{defineProperty:function defineProperty(t,n,e){i(t);try{return r.setDesc(t,n,e),!0}catch(o){return!1}}})},{23:23,25:25,47:47,5:5}],143:[function(t,n,e){var r=t(23),o=t(47).getDesc,i=t(5);r(r.S,\"Reflect\",{deleteProperty:function deleteProperty(t,n){var e=o(i(t),n);return e&&!e.configurable?!1:delete t[n]}})},{23:23,47:47,5:5}],144:[function(t,n,e){\"use strict\";var r=t(23),o=t(5),i=function(t){this._t=o(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};t(42)(i,\"Object\",function(){var t,n=this,e=n._k;do if(n._i>=e.length)return{value:void 0,done:!0};while(!((t=e[n._i++])in n._t));return{value:t,done:!1}}),r(r.S,\"Reflect\",{enumerate:function enumerate(t){return new i(t)}})},{23:23,42:42,5:5}],145:[function(t,n,e){var r=t(47),o=t(23),i=t(5);o(o.S,\"Reflect\",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return r.getDesc(i(t),n)}})},{23:23,47:47,5:5}],146:[function(t,n,e){var r=t(23),o=t(47).getProto,i=t(5);r(r.S,\"Reflect\",{getPrototypeOf:function getPrototypeOf(t){return o(i(t))}})},{23:23,47:47,5:5}],147:[function(t,n,e){function get(t,n){var e,i,a=arguments.length<3?t:arguments[2];return c(t)===a?t[n]:(e=r.getDesc(t,n))?o(e,\"value\")?e.value:void 0!==e.get?e.get.call(a):void 0:u(i=r.getProto(t))?get(i,n,a):void 0}var r=t(47),o=t(31),i=t(23),u=t(39),c=t(5);i(i.S,\"Reflect\",{get:get})},{23:23,31:31,39:39,47:47,5:5}],148:[function(t,n,e){var r=t(23);r(r.S,\"Reflect\",{has:function has(t,n){return n in t}})},{23:23}],149:[function(t,n,e){var r=t(23),o=t(5),i=Object.isExtensible;r(r.S,\"Reflect\",{isExtensible:function isExtensible(t){return o(t),i?i(t):!0}})},{23:23,5:5}],150:[function(t,n,e){var r=t(23);r(r.S,\"Reflect\",{ownKeys:t(57)})},{23:23,57:57}],151:[function(t,n,e){var r=t(23),o=t(5),i=Object.preventExtensions;r(r.S,\"Reflect\",{preventExtensions:function preventExtensions(t){o(t);try{return i&&i(t),!0}catch(n){return!1}}})},{23:23,5:5}],152:[function(t,n,e){var r=t(23),o=t(65);o&&r(r.S,\"Reflect\",{setPrototypeOf:function setPrototypeOf(t,n){o.check(t,n);try{return o.set(t,n),!0}catch(e){return!1}}})},{23:23,65:65}],153:[function(t,n,e){function set(t,n,e){var i,s,f=arguments.length<4?t:arguments[3],l=r.getDesc(c(t),n);if(!l){if(a(s=r.getProto(t)))return set(s,n,e,f);l=u(0)}return o(l,\"value\")?l.writable!==!1&&a(f)?(i=r.getDesc(f,n)||u(0),i.value=e,r.setDesc(f,n,i),!0):!1:void 0===l.set?!1:(l.set.call(f,e),!0)}var r=t(47),o=t(31),i=t(23),u=t(60),c=t(5),a=t(39);i(i.S,\"Reflect\",{set:set})},{23:23,31:31,39:39,47:47,5:5,60:60}],154:[function(t,n,e){var r=t(47),o=t(30),i=t(40),u=t(27),c=o.RegExp,a=c,s=c.prototype,f=/a/g,l=/a/g,h=new c(f)!==f;!t(20)||h&&!t(25)(function(){return l[t(84)(\"match\")]=!1,c(f)!=f||c(l)==l||\"/a/i\"!=c(f,\"i\")})||(c=function RegExp(t,n){var e=i(t),r=void 0===n;return this instanceof c||!e||t.constructor!==c||!r?h?new a(e&&!r?t.source:t,n):a((e=t instanceof c)?t.source:t,e&&r?u.call(t):n):t},r.each.call(r.getNames(a),function(t){t in c||r.setDesc(c,t,{configurable:!0,get:function(){return a[t]},set:function(n){a[t]=n}})}),s.constructor=c,c.prototype=s,t(62)(o,\"RegExp\",c)),t(66)(\"RegExp\")},{20:20,25:25,27:27,30:30,40:40,47:47,62:62,66:66,84:84}],155:[function(t,n,e){var r=t(47);t(20)&&\"g\"!=/./g.flags&&r.setDesc(RegExp.prototype,\"flags\",{configurable:!0,get:t(27)})},{20:20,27:27,47:47}],156:[function(t,n,e){t(26)(\"match\",1,function(t,n){return function match(e){\"use strict\";var r=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))}})},{26:26}],157:[function(t,n,e){t(26)(\"replace\",2,function(t,n,e){return function replace(r,o){\"use strict\";var i=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)}})},{26:26}],158:[function(t,n,e){t(26)(\"search\",1,function(t,n){return function search(e){\"use strict\";var r=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))}})},{26:26}],159:[function(t,n,e){t(26)(\"split\",2,function(t,n,e){return function split(r,o){\"use strict\";var i=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)}})},{26:26}],160:[function(t,n,e){\"use strict\";var r=t(13);t(16)(\"Set\",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return r.def(this,t=0===t?0:t,t)}},r)},{13:13,16:16}],161:[function(t,n,e){\"use strict\";var r=t(23),o=t(71)(!1);r(r.P,\"String\",{codePointAt:function codePointAt(t){return o(this,t)}})},{23:23,71:71}],162:[function(t,n,e){\"use strict\";var r=t(23),o=t(80),i=t(72),u=\"endsWith\",c=\"\"[u];r(r.P+r.F*t(24)(u),\"String\",{endsWith:function endsWith(t){var n=i(this,t,u),e=arguments,r=e.length>1?e[1]:void 0,a=o(n.length),s=void 0===r?a:Math.min(o(r),a),f=String(t);return c?c.call(n,f,s):n.slice(s-f.length,s)===f}})},{23:23,24:24,72:72,80:80}],163:[function(t,n,e){var r=t(23),o=t(77),i=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),\"String\",{fromCodePoint:function fromCodePoint(t){for(var n,e=[],r=arguments,u=r.length,c=0;u>c;){if(n=+r[c++],o(n,1114111)!==n)throw RangeError(n+\" is not a valid code point\");e.push(65536>n?i(n):i(((n-=65536)>>10)+55296,n%1024+56320))}return e.join(\"\")}})},{23:23,77:77}],164:[function(t,n,e){\"use strict\";var r=t(23),o=t(72),i=\"includes\";r(r.P+r.F*t(24)(i),\"String\",{includes:function includes(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{23:23,24:24,72:72}],165:[function(t,n,e){\"use strict\";var r=t(71)(!0);t(43)(String,\"String\",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},{43:43,71:71}],166:[function(t,n,e){var r=t(23),o=t(79),i=t(80);r(r.S,\"String\",{raw:function raw(t){for(var n=o(t.raw),e=i(n.length),r=arguments,u=r.length,c=[],a=0;e>a;)c.push(String(n[a++])),u>a&&c.push(String(r[a]));return c.join(\"\")}})},{23:23,79:79,80:80}],167:[function(t,n,e){var r=t(23);r(r.P,\"String\",{repeat:t(74)})},{23:23,74:74}],168:[function(t,n,e){\"use strict\";var r=t(23),o=t(80),i=t(72),u=\"startsWith\",c=\"\"[u];r(r.P+r.F*t(24)(u),\"String\",{startsWith:function startsWith(t){var n=i(this,t,u),e=arguments,r=o(Math.min(e.length>1?e[1]:void 0,n.length)),a=String(t);return c?c.call(n,a,r):n.slice(r,r+a.length)===a}})},{23:23,24:24,72:72,80:80}],169:[function(t,n,e){\"use strict\";t(75)(\"trim\",function(t){return function trim(){return t(this,3)}})},{75:75}],170:[function(t,n,e){\"use strict\";var r=t(47),o=t(30),i=t(31),u=t(20),c=t(23),a=t(62),s=t(25),f=t(68),l=t(67),h=t(83),p=t(84),v=t(48),g=t(29),y=t(22),d=t(37),m=t(5),x=t(79),S=t(60),w=r.getDesc,b=r.setDesc,E=r.create,O=g.get,P=o.Symbol,_=o.JSON,M=_&&_.stringify,F=!1,A=p(\"_hidden\"),j=r.isEnum,N=f(\"symbol-registry\"),I=f(\"symbols\"),k=\"function\"==typeof P,D=Object.prototype,T=u&&s(function(){return 7!=E(b({},\"a\",{get:function(){return b(this,\"a\",{value:7}).a}})).a})?function(t,n,e){var r=w(D,n);r&&delete D[n],b(t,n,e),r&&t!==D&&b(D,n,r)}:b,L=function(t){var n=I[t]=E(P.prototype);return n._k=t,u&&F&&T(D,t,{configurable:!0,set:function(n){i(this,A)&&i(this[A],t)&&(this[A][t]=!1),T(this,t,S(1,n))}}),n},R=function(t){return\"symbol\"==typeof t},C=function defineProperty(t,n,e){return e&&i(I,n)?(e.enumerable?(i(t,A)&&t[A][n]&&(t[A][n]=!1),e=E(e,{enumerable:S(0,!1)})):(i(t,A)||b(t,A,S(1,{})),t[A][n]=!0),T(t,n,e)):b(t,n,e)},G=function defineProperties(t,n){m(t);for(var e,r=y(n=x(n)),o=0,i=r.length;i>o;)C(t,e=r[o++],n[e]);return t},W=function create(t,n){return void 0===n?E(t):G(E(t),n)},z=function propertyIsEnumerable(t){var n=j.call(this,t);return n||!i(this,t)||!i(I,t)||i(this,A)&&this[A][t]?n:!0},K=function getOwnPropertyDescriptor(t,n){var e=w(t=x(t),n);return!e||!i(I,n)||i(t,A)&&t[A][n]||(e.enumerable=!0),e},U=function getOwnPropertyNames(t){for(var n,e=O(x(t)),r=[],o=0;e.length>o;)i(I,n=e[o++])||n==A||r.push(n);return r},q=function getOwnPropertySymbols(t){for(var n,e=O(x(t)),r=[],o=0;e.length>o;)i(I,n=e[o++])&&r.push(I[n]);return r},J=function stringify(t){if(void 0!==t&&!R(t)){for(var n,e,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return n=r[1],\"function\"==typeof n&&(e=n),(e||!d(n))&&(n=function(t,n){return e&&(n=e.call(this,t,n)),R(n)?void 0:n}),r[1]=n,M.apply(_,r)}},B=s(function(){var t=P();return\"[null]\"!=M([t])||\"{}\"!=M({a:t})||\"{}\"!=M(Object(t))});k||(P=function Symbol(){if(R(this))throw TypeError(\"Symbol is not a constructor\");return L(h(arguments.length>0?arguments[0]:void 0))},a(P.prototype,\"toString\",function toString(){return this._k}),R=function(t){return t instanceof P},r.create=W,r.isEnum=z,r.getDesc=K,r.setDesc=C,r.setDescs=G,r.getNames=g.get=U,r.getSymbols=q,u&&!t(49)&&a(D,\"propertyIsEnumerable\",z,!0));var V={\"for\":function(t){return i(N,t+=\"\")?N[t]:N[t]=P(t)},keyFor:function keyFor(t){return v(N,t)},useSetter:function(){F=!0},useSimple:function(){F=!1}};r.each.call(\"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\".split(\",\"),function(t){var n=p(t);V[t]=k?n:L(n)}),F=!0,c(c.G+c.W,{Symbol:P}),c(c.S,\"Symbol\",V),c(c.S+c.F*!k,\"Object\",{create:W,defineProperty:C,defineProperties:G,getOwnPropertyDescriptor:K,getOwnPropertyNames:U,getOwnPropertySymbols:q}),_&&c(c.S+c.F*(!k||B),\"JSON\",{stringify:J}),l(P,\"Symbol\"),l(Math,\"Math\",!0),l(o.JSON,\"JSON\",!0)},{20:20,22:22,23:23,25:25,29:29,30:30,31:31,37:37,47:47,48:48,49:49,5:5,60:60,62:62,67:67,68:68,79:79,83:83,84:84}],171:[function(t,n,e){\"use strict\";var r=t(47),o=t(62),i=t(15),u=t(39),c=t(31),a=i.frozenStore,s=i.WEAK,f=Object.isExtensible||u,l={},h=t(16)(\"WeakMap\",function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){if(u(t)){if(!f(t))return a(this).get(t);if(c(t,s))return t[s][this._i]}},set:function set(t,n){return i.def(this,t,n)}},i,!0,!0);7!=(new h).set((Object.freeze||Object)(l),7).get(l)&&r.each.call([\"delete\",\"has\",\"get\",\"set\"],function(t){var n=h.prototype,e=n[t];o(n,t,function(n,r){if(u(n)&&!f(n)){var o=a(this)[t](n,r);return\"set\"==t?this:o}return e.call(this,n,r)})})},{15:15,16:16,31:31,39:39,47:47,62:62}],172:[function(t,n,e){\"use strict\";var r=t(15);t(16)(\"WeakSet\",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return r.def(this,t,!0)}},r,!1,!0)},{15:15,16:16}],173:[function(t,n,e){\"use strict\";var r=t(23),o=t(8)(!0);r(r.P,\"Array\",{includes:function includes(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)(\"includes\")},{23:23,4:4,8:8}],174:[function(t,n,e){var r=t(23);r(r.P,\"Map\",{toJSON:t(14)(\"Map\")})},{14:14,23:23}],175:[function(t,n,e){var r=t(23),o=t(56)(!0);r(r.S,\"Object\",{entries:function entries(t){return o(t)}})},{23:23,56:56}],176:[function(t,n,e){var r=t(47),o=t(23),i=t(57),u=t(79),c=t(60);o(o.S,\"Object\",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,e,o=u(t),a=r.setDesc,s=r.getDesc,f=i(o),l={},h=0;f.length>h;)e=s(o,n=f[h++]),n in l?a(l,n,c(0,e)):l[n]=e;return l}})},{23:23,47:47,57:57,60:60,79:79}],177:[function(t,n,e){var r=t(23),o=t(56)(!1);r(r.S,\"Object\",{values:function values(t){return o(t)}})},{23:23,56:56}],178:[function(t,n,e){var r=t(23),o=t(63)(/[\\\\^$*+?.()|[\\]{}]/g,\"\\\\$&\");r(r.S,\"RegExp\",{escape:function escape(t){return o(t)}})},{23:23,63:63}],179:[function(t,n,e){var r=t(23);r(r.P,\"Set\",{toJSON:t(14)(\"Set\")})},{14:14,23:23}],180:[function(t,n,e){\"use strict\";var r=t(23),o=t(71)(!0);r(r.P,\"String\",{at:function at(t){return o(this,t)}})},{23:23,71:71}],181:[function(t,n,e){\"use strict\";var r=t(23),o=t(73);r(r.P,\"String\",{padLeft:function padLeft(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{23:23,73:73}],182:[function(t,n,e){\"use strict\";var r=t(23),o=t(73);r(r.P,\"String\",{padRight:function padRight(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{23:23,73:73}],183:[function(t,n,e){\"use strict\";t(75)(\"trimLeft\",function(t){return function trimLeft(){return t(this,1)}})},{75:75}],184:[function(t,n,e){\"use strict\";t(75)(\"trimRight\",function(t){return function trimRight(){return t(this,2)}})},{75:75}],185:[function(t,n,e){var r=t(47),o=t(23),i=t(18),u=t(17).Array||Array,c={},a=function(t,n){r.each.call(t.split(\",\"),function(t){void 0==n&&t in u?c[t]=u[t]:t in[]&&(c[t]=i(Function.call,[][t],n))})};a(\"pop,reverse,shift,keys,values,entries\",1),a(\"indexOf,every,some,forEach,map,filter,find,findIndex,includes\",3),a(\"join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\"),o(o.S,\"Array\",c)},{17:17,18:18,23:23,47:47}],186:[function(t,n,e){t(92);var r=t(30),o=t(32),i=t(46),u=t(84)(\"iterator\"),c=r.NodeList,a=r.HTMLCollection,s=c&&c.prototype,f=a&&a.prototype,l=i.NodeList=i.HTMLCollection=i.Array;s&&!s[u]&&o(s,u,l),f&&!f[u]&&o(f,u,l)},{30:30,32:32,46:46,84:84,92:92}],187:[function(t,n,e){var r=t(23),o=t(76);r(r.G+r.B,{setImmediate:o.set,clearImmediate:o.clear})},{23:23,76:76}],188:[function(t,n,e){var r=t(30),o=t(23),i=t(34),u=t(58),c=r.navigator,a=!!c&&/MSIE .\\./.test(c.userAgent),s=function(t){return a?function(n,e){return t(i(u,[].slice.call(arguments,2),\"function\"==typeof n?n:Function(n)),e)}:t};o(o.G+o.B+o.F*a,{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},{23:23,30:30,34:34,58:58}],189:[function(t,n,e){t(86),t(170),t(125),t(133),t(137),t(138),t(126),t(136),t(135),t(131),t(132),t(130),t(127),t(129),t(134),t(128),t(96),t(95),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(105),t(106),t(107),t(108),t(109),t(110),t(111),t(112),t(113),t(114),t(163),t(166),t(169),t(165),t(161),t(162),t(164),t(167),t(168),t(91),t(93),t(92),t(94),t(87),t(88),t(90),t(89),t(154),t(155),t(156),t(157),t(158),t(159),t(139),t(97),t(160),t(171),t(172),t(140),t(141),t(142),t(143),t(144),t(147),t(145),t(146),t(148),t(149),t(150),t(151),t(153),t(152),t(173),t(180),t(181),t(182),t(183),t(184),t(178),t(176),t(177),t(175),t(174),t(179),t(185),t(188),t(187),t(186),n.exports=t(17)},{100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:126,127:127,128:128,129:129,130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,17:17,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,86:86,87:87,88:88,89:89,90:90,91:91,92:92,93:93,94:94,95:95,96:96,97:97,98:98,99:99}],190:[function(t,n,e){(function(t){!function(t){\"use strict\";function wrap(t,n,e,r){var o=Object.create((n||Generator).prototype),i=new Context(r||[]);return o._invoke=makeInvokeMethod(t,e,i),o}function tryCatch(t,n,e){try{return{type:\"normal\",arg:t.call(n,e)}}catch(r){return{type:\"throw\",arg:r}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){[\"next\",\"throw\",\"return\"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AwaitArgument(t){this.arg=t}function AsyncIterator(t){function invoke(n,o){var i=t[n](o),u=i.value;return u instanceof AwaitArgument?Promise.resolve(u.arg).then(e,r):Promise.resolve(u).then(function(t){return i.value=t,i})}function enqueue(t,e){function callInvokeWithMethodAndArg(){return invoke(t,e)}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):new Promise(function(t){t(callInvokeWithMethodAndArg())})}\"object\"==typeof process&&process.domain&&(invoke=process.domain.bind(invoke));var n,e=invoke.bind(t,\"next\"),r=invoke.bind(t,\"throw\");invoke.bind(t,\"return\");this._invoke=enqueue}function makeInvokeMethod(t,n,r){var o=c;return function invoke(i,u){if(o===s)throw new Error(\"Generator is already running\");if(o===f){if(\"throw\"===i)throw u;return doneResult()}for(;;){var h=r.delegate;if(h){if(\"return\"===i||\"throw\"===i&&h.iterator[i]===e){r.delegate=null;var p=h.iterator[\"return\"];if(p){var v=tryCatch(p,h.iterator,u);if(\"throw\"===v.type){i=\"throw\",u=v.arg;continue}}if(\"return\"===i)continue}var v=tryCatch(h.iterator[i],h.iterator,u);if(\"throw\"===v.type){r.delegate=null,i=\"throw\",u=v.arg;continue}i=\"next\",u=e;var g=v.arg;if(!g.done)return o=a,g;r[h.resultName]=g.value,r.next=h.nextLoc,r.delegate=null}if(\"next\"===i)r._sent=u,o===a?r.sent=u:r.sent=e;else if(\"throw\"===i){if(o===c)throw o=f,u;r.dispatchException(u)&&(i=\"next\",u=e)}else\"return\"===i&&r.abrupt(\"return\",u);o=s;var v=tryCatch(t,n,r);if(\"normal\"===v.type){o=r.done?f:a;var g={value:v.arg,done:r.done};if(v.arg!==l)return g;r.delegate&&\"next\"===i&&(u=e)}else\"throw\"===v.type&&(o=f,i=\"throw\",u=v.arg)}}}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type=\"normal\",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:\"root\"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[o];if(n)return n.call(t);if(\"function\"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function next(){for(;++i<t.length;)if(r.call(t,i))return next.value=t[i],next.done=!1,next;return next.value=e,next.done=!0,next};return u.next=u}}return{next:doneResult}}function doneResult(){return{value:e,done:!0}}var e,r=Object.prototype.hasOwnProperty,o=\"function\"==typeof Symbol&&Symbol.iterator||\"@@iterator\",i=\"object\"==typeof n,u=t.regeneratorRuntime;if(u)return void(i&&(n.exports=u));u=t.regeneratorRuntime=i?n.exports:{},u.wrap=wrap;var c=\"suspendedStart\",a=\"suspendedYield\",s=\"executing\",f=\"completed\",l={},h=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=h.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunction.displayName=\"GeneratorFunction\",u.isGeneratorFunction=function(t){var n=\"function\"==typeof t&&t.constructor;return n?n===GeneratorFunction||\"GeneratorFunction\"===(n.displayName||n.name):!1},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):t.__proto__=GeneratorFunctionPrototype,t.prototype=Object.create(h),t},u.awrap=function(t){return new AwaitArgument(t)},defineIteratorMethods(AsyncIterator.prototype),u.async=function(t,n,e,r){var o=new AsyncIterator(wrap(t,n,e,r));return u.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},defineIteratorMethods(h),h[o]=function(){return this},h.toString=function(){return\"[object Generator]\"},u.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function next(){for(;n.length;){var e=n.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},u.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=e,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)\"t\"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if(\"throw\"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(e,r){return i.type=\"throw\",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],i=o.completion;if(\"root\"===o.tryLoc)return handle(\"end\");if(o.tryLoc<=this.prev){var u=r.call(o,\"catchLoc\"),c=r.call(o,\"finallyLoc\");if(u&&c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!c)throw new Error(\"try statement without catch or finally\");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,\"finallyLoc\")&&this.prev<o.finallyLoc){var i=o;break}}i&&(\"break\"===t||\"continue\"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?this.next=i.finallyLoc:this.complete(u),l},complete:function(t,n){if(\"throw\"===t.type)throw t.arg;\"break\"===t.type||\"continue\"===t.type?this.next=t.arg:\"return\"===t.type?(this.rval=t.arg,this.next=\"end\"):\"normal\"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),resetTryEntry(e),l}},\"catch\":function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if(\"throw\"===r.type){var o=r.arg;resetTryEntry(e)}return o}}throw new Error(\"illegal catch attempt\")},delegateYield:function(t,n,e){return this.delegate={iterator:values(t),resultName:n,nextLoc:e},l}}}(\"object\"==typeof t?t:\"object\"==typeof window?window:\"object\"==typeof self?self:this)}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}]},{},[1]);\n"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	
	function requireAll(requireContext){
	    return requireContext.keys().map(requireContext);
	}
	
	//load in order
	__webpack_require__(9);
	
	// Load all foundation util files
	var foundation_util_req = __webpack_require__(10);
	requireAll(foundation_util_req);
	
	//load rest
	var foundation_components_req = __webpack_require__(19);
	requireAll(foundation_components_req);
	
	// OR load each seperately
	
	/*
	require('bower_components/foundation-sites/js/foundation.core.js');
	
	//utils
	require('bower_components/foundation-sites/js/foundation.util.box.js')
	require('bower_components/foundation-sites/js/foundation.util.keyboard.js')
	require('bower_components/foundation-sites/js/foundation.util.mediaQuery.js')
	require('bower_components/foundation-sites/js/foundation.util.motion.js')
	require('bower_components/foundation-sites/js/foundation.util.nest.js')
	require('bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js')
	require('bower_components/foundation-sites/js/foundation.util.touch.js')
	require('bower_components/foundation-sites/js/foundation.util.triggers.js')
	
	// Paths to individual JS components defined below
	require('bower_components/foundation-sites/js/foundation.abide.js')
	require('bower_components/foundation-sites/js/foundation.accordion.js')
	require('bower_components/foundation-sites/js/foundation.accordionMenu.js')
	require('bower_components/foundation-sites/js/foundation.drilldown.js')
	require('bower_components/foundation-sites/js/foundation.dropdown.js')
	require('bower_components/foundation-sites/js/foundation.dropdownMenu.js')
	require('bower_components/foundation-sites/js/foundation.equalizer.js')
	require('bower_components/foundation-sites/js/foundation.interchange.js')
	require('bower_components/foundation-sites/js/foundation.magellan.js')
	require('bower_components/foundation-sites/js/foundation.offcanvas.js')
	require('bower_components/foundation-sites/js/foundation.orbit.js')
	require('bower_components/foundation-sites/js/foundation.responsiveMenu.js')
	require('bower_components/foundation-sites/js/foundation.responsiveToggle.js')
	require('bower_components/foundation-sites/js/foundation.reveal.js')
	require('bower_components/foundation-sites/js/foundation.slider.js')
	require('bower_components/foundation-sites/js/foundation.sticky.js')
	require('bower_components/foundation-sites/js/foundation.tabs.js')
	require('bower_components/foundation-sites/js/foundation.toggler.js')
	require('bower_components/foundation-sites/js/foundation.tooltip.js')*/
	
	$(document).foundation();

/***/ },
/* 9 */
/***/ function(module, exports) {

	!function($) {
	"use strict";
	
	var FOUNDATION_VERSION = '6.0.6';
	
	// Global Foundation object
	// This is attached to the window, or used as a module for AMD/Browserify
	var Foundation = {
	  version: FOUNDATION_VERSION,
	
	  /**
	   * Stores initialized plugins.
	   */
	  _plugins: {},
	
	  /**
	   * Stores generated unique ids for plugin instances
	   */
	  _uuids: [],
	  /**
	   * Stores currently active plugins.
	   */
	  _activePlugins: {},
	
	  /**
	   * Returns a boolean for RTL support
	   */
	  rtl: function(){
	    return $('html').attr('dir') === 'rtl';
	  },
	  /**
	   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
	   * @param {Object} plugin - The constructor of the plugin.
	   */
	  plugin: function(plugin, name) {
	    // Object key to use when adding to global Foundation object
	    // Examples: Foundation.Reveal, Foundation.OffCanvas
	    var className = (name || functionName(plugin));
	    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
	    // Examples: data-reveal, data-off-canvas
	    var attrName  = hyphenate(className);
	
	    // Add to the Foundation object and the plugins list (for reflowing)
	    this._plugins[attrName] = this[className] = plugin;
	  },
	  /**
	   * @function
	   * Creates a pointer to an instance of a Plugin within the Foundation._activePlugins object.
	   * Sets the `[data-pluginName="uniqueIdHere"]`, allowing easy access to any plugin's internal methods.
	   * Also fires the initialization event for each plugin, consolidating repeditive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @fires Plugin#init
	   */
	  registerPlugin: function(plugin){
	    var pluginName = functionName(plugin.constructor).toLowerCase();
	
	    plugin.uuid = this.GetYoDigits(6, pluginName);
	
	    if(!plugin.$element.attr('data-' + pluginName)){
	      plugin.$element.attr('data-' + pluginName, plugin.uuid);
	    }
	          /**
	           * Fires when the plugin has initialized.
	           * @event Plugin#init
	           */
	    plugin.$element.trigger('init.zf.' + pluginName);
	
	    this._activePlugins[plugin.uuid] = plugin;
	
	    return;
	  },
	  /**
	   * @function
	   * Removes the pointer for an instance of a Plugin from the Foundation._activePlugins obj.
	   * Also fires the destroyed event for the plugin, consolidating repeditive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @fires Plugin#destroyed
	   */
	  unregisterPlugin: function(plugin){
	    var pluginName = functionName(plugin.constructor).toLowerCase();
	
	    delete this._activePlugins[plugin.uuid];
	    plugin.$element.removeAttr('data-' + pluginName)
	          /**
	           * Fires when the plugin has been destroyed.
	           * @event Plugin#destroyed
	           */
	          .trigger('destroyed.zf.' + pluginName);
	
	    return;
	  },
	
	  /**
	   * @function
	   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
	   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
	   * @default If no argument is passed, reflow all currently active plugins.
	   */
	  _reflow: function(plugins){
	    var actvPlugins = Object.keys(this._activePlugins);
	    var _this = this;
	
	    if(!plugins){
	      actvPlugins.forEach(function(p){
	        _this._activePlugins[p]._init();
	      });
	
	    }else if(typeof plugins === 'string'){
	      var namespace = plugins.split('-')[1];
	
	      if(namespace){
	
	        this._activePlugins[plugins]._init();
	
	      }else{
	        namespace = new RegExp(plugins, 'i');
	
	        actvPlugins.filter(function(p){
	          return namespace.test(p);
	        }).forEach(function(p){
	          _this._activePlugins[p]._init();
	        });
	      }
	    }
	
	  },
	
	  /**
	   * returns a random base-36 uid with namespacing
	   * @function
	   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
	   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
	   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
	   * @returns {String} - unique id
	   */
	  GetYoDigits: function(length, namespace){
	    length = length || 6;
	    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? '-' + namespace : '');
	  },
	  /**
	   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
	   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
	   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
	   */
	  reflow: function(elem, plugins) {
	
	    // If plugins is undefined, just grab everything
	    if (typeof plugins === 'undefined') {
	      plugins = Object.keys(this._plugins);
	    }
	    // If plugins is a string, convert it to an array with one item
	    else if (typeof plugins === 'string') {
	      plugins = [plugins];
	    }
	
	    var _this = this;
	
	    // Iterate through each plugin
	    $.each(plugins, function(i, name) {
	      // Get the current plugin
	      var plugin = _this._plugins[name];
	
	      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
	      var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');
	
	      // For each plugin found, initialize it
	      $elem.each(function() {
	        var $el = $(this),
	            opts = {};
	        // Don't double-dip on plugins
	        if ($el.data('zf-plugin')) {
	          console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
	          return;
	        }
	
	        if($el.attr('data-options')){
	          var thing = $el.attr('data-options').split(';').forEach(function(e, i){
	            var opt = e.split(':').map(function(el){ return el.trim(); });
	            if(opt[0]) opts[opt[0]] = parseValue(opt[1]);
	          });
	        }
	        try{
	          $el.data('zf-plugin', new plugin($(this), opts));
	        }catch(er){
	          console.error(er);
	        }finally{
	          return;
	        }
	      });
	    });
	  },
	  getFnName: functionName,
	  transitionend: function($elem){
	    var transitions = {
	      'transition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd',
	      'MozTransition': 'transitionend',
	      'OTransition': 'otransitionend'
	    };
	    var elem = document.createElement('div'),
	        end;
	
	    for (var t in transitions){
	      if (typeof elem.style[t] !== 'undefined'){
	        end = transitions[t];
	      }
	    }
	    if(end){
	      return end;
	    }else{
	      end = setTimeout(function(){
	        $elem.triggerHandler('transitionend', [$elem]);
	      }, 1);
	      return 'transitionend';
	    }
	  }
	};
	
	
	Foundation.util = {
	  /**
	   * Function for applying a debounce effect to a function call.
	   * @function
	   * @param {Function} func - Function to be called at end of timeout.
	   * @param {Number} delay - Time in ms to delay the call of `func`.
	   * @returns function
	   */
	  throttle: function (func, delay) {
	    var timer = null;
	
	    return function () {
	      var context = this, args = arguments;
	
	      if (timer === null) {
	        timer = setTimeout(function () {
	          func.apply(context, args);
	          timer = null;
	        }, delay);
	      }
	    };
	  }
	};
	
	// TODO: consider not making this a jQuery function
	// TODO: need way to reflow vs. re-initialize
	/**
	 * The Foundation jQuery method.
	 * @param {String|Array} method - An action to perform on the current jQuery object.
	 */
	var foundation = function(method) {
	  var type = typeof method,
	      $meta = $('meta.foundation-mq'),
	      $noJS = $('.no-js');
	
	  if(!$meta.length){
	    $('<meta class="foundation-mq">').appendTo(document.head);
	  }
	  if($noJS.length){
	    $noJS.removeClass('no-js');
	  }
	
	  if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
	    Foundation.MediaQuery._init();
	    Foundation.reflow(this);
	  }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
	    var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
	    var plugClass = this.data('zfPlugin');//determine the class of plugin
	
	    if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
	      if(this.length === 1){//if there's only one, call it directly.
	          plugClass[method].apply(plugClass, args);
	      }else{
	        this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
	          plugClass[method].apply($(el).data('zfPlugin'), args);
	        });
	      }
	    }else{//error for no class or no method
	      throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
	    }
	  }else{//error for invalid argument type
	    throw new TypeError("We're sorry, '" + type + "' is not a valid parameter. You must use a string representing the method you wish to invoke.");
	  }
	  return this;
	};
	
	window.Foundation = Foundation;
	$.fn.foundation = foundation;
	
	// Polyfill for requestAnimationFrame
	(function() {
	  if (!Date.now || !window.Date.now)
	    window.Date.now = Date.now = function() { return new Date().getTime(); };
	
	  var vendors = ['webkit', 'moz'];
	  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	      var vp = vendors[i];
	      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
	      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
	                                 || window[vp+'CancelRequestAnimationFrame']);
	  }
	  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
	    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;
	    window.requestAnimationFrame = function(callback) {
	        var now = Date.now();
	        var nextTime = Math.max(lastTime + 16, now);
	        return setTimeout(function() { callback(lastTime = nextTime); },
	                          nextTime - now);
	    };
	    window.cancelAnimationFrame = clearTimeout;
	  }
	  /**
	   * Polyfill for performance.now, required by rAF
	   */
	  if(!window.performance || !window.performance.now){
	    window.performance = {
	      start: Date.now(),
	      now: function(){ return Date.now() - this.start; }
	    };
	  }
	})();
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }
	
	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };
	
	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }
	    fBound.prototype = new fNOP();
	
	    return fBound;
	  };
	}
	// Polyfill to get the name of a function in IE9
	function functionName(fn) {
	  if (Function.prototype.name === undefined) {
	    var funcNameRegex = /function\s([^(]{1,})\(/;
	    var results = (funcNameRegex).exec((fn).toString());
	    return (results && results.length > 1) ? results[1].trim() : "";
	  }
	  else if (fn.prototype === undefined) {
	    return fn.constructor.name;
	  }
	  else {
	    return fn.prototype.constructor.name;
	  }
	}
	function parseValue(str){
	  if(/true/.test(str)) return true;
	  else if(/false/.test(str)) return false;
	  else if(!isNaN(str * 1)/* && typeof (str * 1) === "number"*/) return parseFloat(str);
	  return str;
	}
	// Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580
	function hyphenate(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}
	
	}(jQuery);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./foundation.util.box.js": 11,
		"./foundation.util.keyboard.js": 12,
		"./foundation.util.mediaQuery.js": 13,
		"./foundation.util.motion.js": 14,
		"./foundation.util.nest.js": 15,
		"./foundation.util.timerAndImageLoader.js": 16,
		"./foundation.util.touch.js": 17,
		"./foundation.util.triggers.js": 18
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports) {

	!function(Foundation, window){
	  /**
	   * Compares the dimensions of an element to a container and determines collision events with container.
	   * @function
	   * @param {jQuery} element - jQuery object to test for collisions.
	   * @param {jQuery} parent - jQuery object to use as bounding container.
	   * @param {Boolean} lrOnly - set to true to check left and right values only.
	   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
	   * @default if no parent object passed, detects collisions with `window`.
	   * @returns {Boolean} - true if collision free, false if a collision in any direction.
	   */
	  var ImNotTouchingYou = function(element, parent, lrOnly, tbOnly){
	    var eleDims = GetDimensions(element),
	        top, bottom, left, right;
	
	    if(parent){
	      var parDims = GetDimensions(parent);
	
	      bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
	      top    = (eleDims.offset.top >= parDims.offset.top);
	      left   = (eleDims.offset.left >= parDims.offset.left);
	      right  = (eleDims.offset.left + eleDims.width <= parDims.width);
	    }else{
	      bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
	      top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
	      left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
	      right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
	    }
	    var allDirs = [bottom, top, left, right];
	
	    if(lrOnly){ return left === right === true; }
	    if(tbOnly){ return top === bottom === true; }
	
	    return allDirs.indexOf(false) === -1;
	  };
	
	  /**
	   * Uses native methods to return an object of dimension values.
	   * @function
	   * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
	   * @returns {Object} - nested object of integer pixel values
	   * TODO - if element is window, return only those values.
	   */
	  var GetDimensions = function(elem, test){
	    elem = elem.length ? elem[0] : elem;
	
	    if(elem === window || elem === document){ throw new Error("I'm sorry, Dave. I'm afraid I can't do that."); }
	
	    var rect = elem.getBoundingClientRect(),
	        parRect = elem.parentNode.getBoundingClientRect(),
	        winRect = document.body.getBoundingClientRect(),
	        winY = window.pageYOffset,
	        winX = window.pageXOffset;
	
	    return {
	      width: rect.width,
	      height: rect.height,
	      offset: {
	        top: rect.top + winY,
	        left: rect.left + winX
	      },
	      parentDims: {
	        width: parRect.width,
	        height: parRect.height,
	        offset: {
	          top: parRect.top + winY,
	          left: parRect.left + winX
	        }
	      },
	      windowDims: {
	        width: winRect.width,
	        height: winRect.height,
	        offset: {
	          top: winY,
	          left: winX
	        }
	      }
	    };
	  };
	  /**
	   * Returns an object of top and left integer pixel values for dynamically rendered elements,
	   * such as: Tooltip, Reveal, and Dropdown
	   * @function
	   * @param {jQuery} element - jQuery object for the element being positioned.
	   * @param {jQuery} anchor - jQuery object for the element's anchor point.
	   * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
	   * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
	   * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
	   * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
	   * TODO alter/rewrite to work with `em` values as well/instead of pixels
	   */
	  var GetOffsets = function(element, anchor, position, vOffset, hOffset, isOverflow){
	    var $eleDims = GetDimensions(element),
	    // var $eleDims = GetDimensions(element),
	        $anchorDims = anchor ? GetDimensions(anchor) : null;
	        // $anchorDims = anchor ? GetDimensions(anchor) : null;
	    switch(position){
	      case 'top':
	        return {
	          left: $anchorDims.offset.left,
	          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
	        };
	        break;
	      case 'left':
	        return {
	          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
	          top: $anchorDims.offset.top
	        };
	        break;
	      case 'right':
	        return {
	          left: $anchorDims.offset.left + $anchorDims.width + hOffset,
	          top: $anchorDims.offset.top
	        };
	        break;
	      case 'center top':
	        return {
	          left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
	          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
	        };
	        break;
	      case 'center bottom':
	        return {
	          left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
	          top: $anchorDims.offset.top + $anchorDims.height + vOffset
	        };
	        break;
	      case 'center left':
	        return {
	          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
	          top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
	        };
	        break;
	      case 'center right':
	        return {
	          left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
	          top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
	        };
	        break;
	      case 'center':
	        return {
	          left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
	          top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
	        };
	        break;
	      case 'reveal':
	        return {
	          left: ($eleDims.windowDims.width - $eleDims.width) / 2,
	          top: $eleDims.windowDims.offset.top + vOffset
	        };
	      case 'reveal full':
	        return {
	          left: $eleDims.windowDims.offset.left,
	          top: $eleDims.windowDims.offset.top
	        };
	        break;
	      default:
	        return {
	          left: $anchorDims.offset.left,
	          top: $anchorDims.offset.top + $anchorDims.height + vOffset
	        };
	    }
	  };
	  Foundation.Box = {
	    ImNotTouchingYou: ImNotTouchingYou,
	    GetDimensions: GetDimensions,
	    GetOffsets: GetOffsets
	  };
	}(window.Foundation, window);


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*******************************************
	 *                                         *
	 * This util was created by Marius Olbertz *
	 * Please thank Marius on GitHub /owlbertz *
	 * or the web http://www.mariusolbertz.de/ *
	 *                                         *
	 ******************************************/
	!function($, Foundation){
	  'use strict';
	  Foundation.Keyboard = {};
	
	  var keyCodes = {
	    9: 'TAB',
	    13: 'ENTER',
	    27: 'ESCAPE',
	    32: 'SPACE',
	    37: 'ARROW_LEFT',
	    38: 'ARROW_UP',
	    39: 'ARROW_RIGHT',
	    40: 'ARROW_DOWN'
	  };
	
	  // constants for easier comparing Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	  var keys = (function(kcs) {
	    var k = {};
	    for (var kc in kcs) k[kcs[kc]] = kcs[kc];
	    return k;
	  })(keyCodes);
	
	  Foundation.Keyboard.keys = keys;
	
	  /**
	   * Parses the (keyboard) event and returns a String that represents its key
	   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	   * @param {Event} event - the event generated by the event handler
	   * @return String key - String that represents the key pressed
	   */
	  var parseKey = function(event) {
	    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
	    if (event.shiftKey) key = 'SHIFT_' + key;
	    if (event.ctrlKey) key = 'CTRL_' + key;
	    if (event.altKey) key = 'ALT_' + key;
	    return key;
	  };
	  Foundation.Keyboard.parseKey = parseKey;
	
	
	  // plain commands per component go here, ltr and rtl are merged based on orientation
	  var commands = {};
	
	  /**
	   * Handles the given (keyboard) event
	   * @param {Event} event - the event generated by the event handler
	   * @param {Object} component - Foundation component, e.g. Slider or Reveal
	   * @param {Objects} functions - collection of functions that are to be executed
	   */
	  var handleKey = function(event, component, functions) {
	    var commandList = commands[Foundation.getFnName(component)],
	      keyCode = parseKey(event),
	      cmds,
	      command,
	      fn;
	    if (!commandList) return console.warn('Component not defined!');
	
	    if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
	        cmds = commandList; // use plain list
	    } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
	        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);
	
	        else cmds = $.extend({}, commandList.rtl, commandList.ltr);
	    }
	    command = cmds[keyCode];
	
	
	    fn = functions[command];
	    if (fn && typeof fn === 'function') { // execute function with context of the component if exists
	        fn.apply(component);
	        if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
	            functions.handled.apply(component);
	        }
	    } else {
	        if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
	            functions.unhandled.apply(component);
	        }
	    }
	  };
	  Foundation.Keyboard.handleKey = handleKey;
	
	  /**
	   * Finds all focusable elements within the given `$element`
	   * @param {jQuery} $element - jQuery object to search within
	   * @return {jQuery} $focusable - all focusable elements within `$element`
	   */
	  var findFocusable = function($element) {
	    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
	      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
	      return true;
	    });
	  };
	  Foundation.Keyboard.findFocusable = findFocusable;
	
	  /**
	   * Returns the component name name
	   * @param {Object} component - Foundation component, e.g. Slider or Reveal
	   * @return String componentName
	   */
	
	  var register = function(componentName, cmds) {
	    commands[componentName] = cmds;
	  };
	  Foundation.Keyboard.register = register;
	}(jQuery, window.Foundation);


/***/ },
/* 13 */
/***/ function(module, exports) {

	!function($, Foundation) {
	
	// Default set of media queries
	var defaultQueries = {
	  'default' : 'only screen',
	  landscape : 'only screen and (orientation: landscape)',
	  portrait : 'only screen and (orientation: portrait)',
	  retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
	    'only screen and (min--moz-device-pixel-ratio: 2),' +
	    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
	    'only screen and (min-device-pixel-ratio: 2),' +
	    'only screen and (min-resolution: 192dpi),' +
	    'only screen and (min-resolution: 2dppx)'
	};
	
	var MediaQuery = {
	  queries: [],
	  current: '',
	
	  /**
	   * Checks if the screen is at least as wide as a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
	   */
	  atLeast: function(size) {
	    var query = this.get(size);
	
	    if (query) {
	      return window.matchMedia(query).matches;
	    }
	
	    return false;
	  },
	
	  /**
	   * Gets the media query of a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to get.
	   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
	   */
	  get: function(size) {
	    for (var i in this.queries) {
	      var query = this.queries[i];
	      if (size === query.name) return query.value;
	    }
	
	    return null;
	  },
	
	  /**
	   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
	   * @function
	   * @private
	   */
	  _init: function() {
	    var self = this;
	    var extractedStyles = $('.foundation-mq').css('font-family');
	    var namedQueries;
	
	    namedQueries = parseStyleToObject(extractedStyles);
	
	    for (var key in namedQueries) {
	      self.queries.push({
	        name: key,
	        value: 'only screen and (min-width: ' + namedQueries[key] + ')'
	      });
	    }
	
	    this.current = this._getCurrentSize();
	
	    this._watcher();
	
	    // Extend default queries
	    // namedQueries = $.extend(defaultQueries, namedQueries);
	  },
	
	  /**
	   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
	   * @function
	   * @private
	   * @returns {String} Name of the current breakpoint.
	   */
	  _getCurrentSize: function() {
	    var matched;
	
	    for (var i in this.queries) {
	      var query = this.queries[i];
	
	      if (window.matchMedia(query.value).matches) {
	        matched = query;
	      }
	    }
	
	    if(typeof matched === 'object') {
	      return matched.name;
	    } else {
	      return matched;
	    }
	  },
	
	  /**
	   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
	   * @function
	   * @private
	   */
	  _watcher: function() {
	    var _this = this;
	
	    $(window).on('resize.zf.mediaquery', function() {
	      var newSize = _this._getCurrentSize();
	
	      if (newSize !== _this.current) {
	        // Broadcast the media query change on the window
	        $(window).trigger('changed.zf.mediaquery', [newSize, _this.current]);
	
	        // Change the current media query
	        _this.current = newSize;
	      }
	    });
	  }
	};
	
	Foundation.MediaQuery = MediaQuery;
	
	// matchMedia() polyfill - Test a CSS media type/query in JS.
	// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
	window.matchMedia || (window.matchMedia = function() {
	  'use strict';
	
	  // For browsers that support matchMedium api such as IE 9 and webkit
	  var styleMedia = (window.styleMedia || window.media);
	
	  // For those that don't support matchMedium
	  if (!styleMedia) {
	    var style   = document.createElement('style'),
	    script      = document.getElementsByTagName('script')[0],
	    info        = null;
	
	    style.type  = 'text/css';
	    style.id    = 'matchmediajs-test';
	
	    script.parentNode.insertBefore(style, script);
	
	    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
	    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
	
	    styleMedia = {
	      matchMedium: function(media) {
	        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
	
	        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
	        if (style.styleSheet) {
	          style.styleSheet.cssText = text;
	        } else {
	          style.textContent = text;
	        }
	
	        // Test if media query is true or false
	        return info.width === '1px';
	      }
	    };
	  }
	
	  return function(media) {
	    return {
	      matches: styleMedia.matchMedium(media || 'all'),
	      media: media || 'all'
	    };
	  };
	}());
	
	// Thank you: https://github.com/sindresorhus/query-string
	function parseStyleToObject(str) {
	  var styleObject = {};
	
	  if (typeof str !== 'string') {
	    return styleObject;
	  }
	
	  str = str.trim().slice(1, -1); // browsers re-quote string style values
	
	  if (!str) {
	    return styleObject;
	  }
	
	  styleObject = str.split('&').reduce(function(ret, param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = parts[0];
	    var val = parts[1];
	    key = decodeURIComponent(key);
	
	    // missing `=` should be `null`:
	    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
	    val = val === undefined ? null : decodeURIComponent(val);
	
	    if (!ret.hasOwnProperty(key)) {
	      ret[key] = val;
	    } else if (Array.isArray(ret[key])) {
	      ret[key].push(val);
	    } else {
	      ret[key] = [ret[key], val];
	    }
	    return ret;
	  }, {});
	
	  return styleObject;
	}
	
	}(jQuery, Foundation);


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Motion module.
	 * @module foundation.motion
	 */
	!function($, Foundation) {
	
	var initClasses   = ['mui-enter', 'mui-leave'];
	var activeClasses = ['mui-enter-active', 'mui-leave-active'];
	
	function animate(isIn, element, animation, cb) {
	  element = $(element).eq(0);
	
	  if (!element.length) return;
	
	  var initClass = isIn ? initClasses[0] : initClasses[1];
	  var activeClass = isIn ? activeClasses[0] : activeClasses[1];
	
	  // Set up the animation
	  reset();
	  element.addClass(animation)
	         .css('transition', 'none');
	        //  .addClass(initClass);
	  // if(isIn) element.show();
	  requestAnimationFrame(function() {
	    element.addClass(initClass);
	    if (isIn) element.show();
	  });
	  // Start the animation
	  requestAnimationFrame(function() {
	    element[0].offsetWidth;
	    element.css('transition', '');
	    element.addClass(activeClass);
	  });
	  // Move(500, element, function(){
	  //   // element[0].offsetWidth;
	  //   element.css('transition', '');
	  //   element.addClass(activeClass);
	  // });
	
	  // Clean up the animation when it finishes
	  element.one(Foundation.transitionend(element), finish);//.one('finished.zf.animate', finish);
	
	  // Hides the element (for out animations), resets the element, and runs a callback
	  function finish() {
	    if (!isIn) element.hide();
	    reset();
	    if (cb) cb.apply(element);
	  }
	
	  // Resets transitions and removes motion-specific classes
	  function reset() {
	    element[0].style.transitionDuration = 0;
	    element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
	  }
	}
	
	var Motion = {
	  animateIn: function(element, animation, /*duration,*/ cb) {
	    animate(true, element, animation, cb);
	  },
	
	  animateOut: function(element, animation, /*duration,*/ cb) {
	    animate(false, element, animation, cb);
	  }
	};
	
	var Move = function(duration, elem, fn){
	  var anim, prog, start = null;
	  // console.log('called');
	
	  function move(ts){
	    if(!start) start = window.performance.now();
	    // console.log(start, ts);
	    prog = ts - start;
	    fn.apply(elem);
	
	    if(prog < duration){ anim = window.requestAnimationFrame(move, elem); }
	    else{
	      window.cancelAnimationFrame(anim);
	      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
	    }
	  }
	  anim = window.requestAnimationFrame(move);
	};
	
	Foundation.Move = Move;
	Foundation.Motion = Motion;
	
	}(jQuery, Foundation);


/***/ },
/* 15 */
/***/ function(module, exports) {

	!function($, Foundation){
	  'use strict';
	  Foundation.Nest = {
	    Feather: function(menu, type){
	      menu.attr('role', 'menubar');
	      type = type || 'zf';
	      var items = menu.find('li').attr({'role': 'menuitem'}),
	          subMenuClass = 'is-' + type + '-submenu',
	          subItemClass = subMenuClass + '-item',
	          hasSubClass = 'is-' + type + '-submenu-parent';
	      menu.find('a:first').attr('tabindex', 0);
	      items.each(function(){
	        var $item = $(this),
	            $sub = $item.children('ul');
	        if($sub.length){
	          $item.addClass('has-submenu ' + hasSubClass)
	               .attr({
	                 'aria-haspopup': true,
	                 'aria-selected': false,
	                 'aria-expanded': false,
	                 'aria-label': $item.children('a:first').text()
	               });
	          $sub.addClass('submenu ' + subMenuClass)
	              .attr({
	                'data-submenu': '',
	                'aria-hidden': true,
	                'role': 'menu'
	              });
	        }
	        if($item.parent('[data-submenu]').length){
	          $item.addClass('is-submenu-item ' + subItemClass);
	        }
	      });
	      return;
	    },
	    Burn: function(menu, type){
	      var items = menu.find('li').removeAttr('tabindex'),
	          subMenuClass = 'is-' + type + '-submenu',
	          subItemClass = subMenuClass + '-item',
	          hasSubClass = 'is-' + type + '-submenu-parent';
	
	      // menu.find('.is-active').removeClass('is-active');
	      menu.find('*')
	      // menu.find('.' + subMenuClass + ', .' + subItemClass + ', .is-active, .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
	          .removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' has-submenu is-submenu-item submenu is-active')
	          .removeAttr('data-submenu').css('display', '');
	
	      // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
	      //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
	      //           .removeAttr('data-submenu'));
	      // items.each(function(){
	      //   var $item = $(this),
	      //       $sub = $item.children('ul');
	      //   if($item.parent('[data-submenu]').length){
	      //     $item.removeClass('is-submenu-item ' + subItemClass);
	      //   }
	      //   if($sub.length){
	      //     $item.removeClass('has-submenu');
	      //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
	      //   }
	      // });
	    }
	  };
	}(jQuery, window.Foundation);


/***/ },
/* 16 */
/***/ function(module, exports) {

	!function($, Foundation){
	  'use strict';
	  var Timer = function(elem, options, cb){
	    var _this = this,
	        duration = options.duration,//options is an object for easily adding features later.
	        nameSpace = Object.keys(elem.data())[0] || 'timer',
	        remain = -1,
	        start,
	        timer;
	
	    this.restart = function(){
	      remain = -1;
	      clearTimeout(timer);
	      this.start();
	    };
	
	    this.start = function(){
	      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
	      clearTimeout(timer);
	      remain = remain <= 0 ? duration : remain;
	      elem.data('paused', false);
	      start = Date.now();
	      timer = setTimeout(function(){
	        if(options.infinite){
	          _this.restart();//rerun the timer.
	        }
	        cb();
	      }, remain);
	      elem.trigger('timerstart.zf.' + nameSpace);
	    };
	
	    this.pause = function(){
	      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
	      clearTimeout(timer);
	      elem.data('paused', true);
	      var end = Date.now();
	      remain = remain - (end - start);
	      elem.trigger('timerpaused.zf.' + nameSpace);
	    };
	  };
	  /**
	   * Runs a callback function when images are fully loaded.
	   * @param {Object} images - Image(s) to check if loaded.
	   * @param {Func} callback - Function to execute when image is fully loaded.
	   */
	  var onImagesLoaded = function(images, callback){
	    var self = this,
	        unloaded = images.length;
	
	    if (unloaded === 0) {
	      callback();
	    }
	
	    var singleImageLoaded = function() {
	      unloaded--;
	      if (unloaded === 0) {
	        callback();
	      }
	    };
	
	    images.each(function() {
	      if (this.complete) {
	        singleImageLoaded();
	      }
	      else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
	        singleImageLoaded();
	      }
	      else {
	        $(this).one('load', function() {
	          singleImageLoaded();
	        });
	      }
	    });
	  };
	
	  Foundation.Timer = Timer;
	  Foundation.onImagesLoaded = onImagesLoaded;
	}(jQuery, window.Foundation);


/***/ },
/* 17 */
/***/ function(module, exports) {

	//**************************************************
	//**Work inspired by multiple jquery swipe plugins**
	//**Done by Yohai Ararat ***************************
	//**************************************************
	(function($) {
	
	  $.spotSwipe = {
	    version: '1.0.0',
	    enabled: 'ontouchstart' in document.documentElement,
	    preventDefault: true,
	    moveThreshold: 75,
	    timeThreshold: 200
	  };
	
	  var   startPosX,
	        startPosY,
	        startTime,
	        elapsedTime,
	        isMoving = false;
	
	  function onTouchEnd() {
	    //  alert(this);
	    this.removeEventListener('touchmove', onTouchMove);
	    this.removeEventListener('touchend', onTouchEnd);
	    isMoving = false;
	  }
	
	  function onTouchMove(e) {
	    if ($.spotSwipe.preventDefault) { e.preventDefault(); }
	    if(isMoving) {
	      var x = e.touches[0].pageX;
	      var y = e.touches[0].pageY;
	      var dx = startPosX - x;
	      var dy = startPosY - y;
	      var dir;
	      elapsedTime = new Date().getTime() - startTime;
	      if(Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
	        dir = dx > 0 ? 'left' : 'right';
	      }
	      else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
	        dir = dy > 0 ? 'down' : 'up';
	      }
	      if(dir) {
	        onTouchEnd.call(this);
	        $(this).trigger('swipe', dir).trigger('swipe' + dir);
	      }
	    }
	  }
	
	  function onTouchStart(e) {
	    if (e.touches.length == 1) {
	      startPosX = e.touches[0].pageX;
	      startPosY = e.touches[0].pageY;
	      isMoving = true;
	      startTime = new Date().getTime();
	      this.addEventListener('touchmove', onTouchMove, false);
	      this.addEventListener('touchend', onTouchEnd, false);
	    }
	  }
	
	  function init() {
	    this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
	  }
	
	  function teardown() {
	    this.removeEventListener('touchstart', onTouchStart);
	  }
	
	  $.event.special.swipe = { setup: init };
	
	  $.each(['left', 'up', 'down', 'right'], function () {
	    $.event.special['swipe' + this] = { setup: function(){
	      $(this).on('swipe', $.noop);
	    } };
	  });
	})(jQuery);
	/****************************************************
	 * Method for adding psuedo drag events to elements *
	 ***************************************************/
	!function($){
	  $.fn.addTouch = function(){
	    this.each(function(i,el){
	      $(el).bind('touchstart touchmove touchend touchcancel',function(){
	        //we pass the original event object because the jQuery event
	        //object is normalized to w3c specs and does not provide the TouchList
	        handleTouch(event);
	      });
	    });
	
	    var handleTouch = function(event){
	      var touches = event.changedTouches,
	          first = touches[0],
	          eventTypes = {
	            touchstart: 'mousedown',
	            touchmove: 'mousemove',
	            touchend: 'mouseup'
	          },
	          type = eventTypes[event.type];
	
	      var simulatedEvent = document.createEvent('MouseEvent');
	      simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0/*left*/, null);
	      first.target.dispatchEvent(simulatedEvent);
	    };
	  };
	}(jQuery);
	
	
	//**********************************
	//**From the jQuery Mobile Library**
	//**need to recreate functionality**
	//**and try to improve if possible**
	//**********************************
	
	/* Removing the jQuery function ****
	************************************
	
	(function( $, window, undefined ) {
	
		var $document = $( document ),
			// supportTouch = $.mobile.support.touch,
			touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
			touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
			touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";
	
		// setup new event shortcuts
		$.each( ( "touchstart touchmove touchend " +
			"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {
	
			$.fn[ name ] = function( fn ) {
				return fn ? this.bind( name, fn ) : this.trigger( name );
			};
	
			// jQuery < 1.8
			if ( $.attrFn ) {
				$.attrFn[ name ] = true;
			}
		});
	
		function triggerCustomEvent( obj, eventType, event, bubble ) {
			var originalType = event.type;
			event.type = eventType;
			if ( bubble ) {
				$.event.trigger( event, undefined, obj );
			} else {
				$.event.dispatch.call( obj, event );
			}
			event.type = originalType;
		}
	
		// also handles taphold
	
		// Also handles swipeleft, swiperight
		$.event.special.swipe = {
	
			// More than this horizontal displacement, and we will suppress scrolling.
			scrollSupressionThreshold: 30,
	
			// More time than this, and it isn't a swipe.
			durationThreshold: 1000,
	
			// Swipe horizontal displacement must be more than this.
			horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,
	
			// Swipe vertical displacement must be less than this.
			verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,
	
			getLocation: function ( event ) {
				var winPageX = window.pageXOffset,
					winPageY = window.pageYOffset,
					x = event.clientX,
					y = event.clientY;
	
				if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
					event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {
	
					// iOS4 clientX/clientY have the value that should have been
					// in pageX/pageY. While pageX/page/ have the value 0
					x = x - winPageX;
					y = y - winPageY;
				} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {
	
					// Some Android browsers have totally bogus values for clientX/Y
					// when scrolling/zooming a page. Detectable since clientX/clientY
					// should never be smaller than pageX/pageY minus page scroll
					x = event.pageX - winPageX;
					y = event.pageY - winPageY;
				}
	
				return {
					x: x,
					y: y
				};
			},
	
			start: function( event ) {
				var data = event.originalEvent.touches ?
						event.originalEvent.touches[ 0 ] : event,
					location = $.event.special.swipe.getLocation( data );
				return {
							time: ( new Date() ).getTime(),
							coords: [ location.x, location.y ],
							origin: $( event.target )
						};
			},
	
			stop: function( event ) {
				var data = event.originalEvent.touches ?
						event.originalEvent.touches[ 0 ] : event,
					location = $.event.special.swipe.getLocation( data );
				return {
							time: ( new Date() ).getTime(),
							coords: [ location.x, location.y ]
						};
			},
	
			handleSwipe: function( start, stop, thisObject, origTarget ) {
				if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
					Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
					Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
					var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";
	
					triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
					triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
					return true;
				}
				return false;
	
			},
	
			// This serves as a flag to ensure that at most one swipe event event is
			// in work at any given time
			eventInProgress: false,
	
			setup: function() {
				var events,
					thisObject = this,
					$this = $( thisObject ),
					context = {};
	
				// Retrieve the events data for this element and add the swipe context
				events = $.data( this, "mobile-events" );
				if ( !events ) {
					events = { length: 0 };
					$.data( this, "mobile-events", events );
				}
				events.length++;
				events.swipe = context;
	
				context.start = function( event ) {
	
					// Bail if we're already working on a swipe event
					if ( $.event.special.swipe.eventInProgress ) {
						return;
					}
					$.event.special.swipe.eventInProgress = true;
	
					var stop,
						start = $.event.special.swipe.start( event ),
						origTarget = event.target,
						emitted = false;
	
					context.move = function( event ) {
						if ( !start || event.isDefaultPrevented() ) {
							return;
						}
	
						stop = $.event.special.swipe.stop( event );
						if ( !emitted ) {
							emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
							if ( emitted ) {
	
								// Reset the context to make way for the next swipe event
								$.event.special.swipe.eventInProgress = false;
							}
						}
						// prevent scrolling
						if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
							event.preventDefault();
						}
					};
	
					context.stop = function() {
							emitted = true;
	
							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
							$document.off( touchMoveEvent, context.move );
							context.move = null;
					};
	
					$document.on( touchMoveEvent, context.move )
						.one( touchStopEvent, context.stop );
				};
				$this.on( touchStartEvent, context.start );
			},
	
			teardown: function() {
				var events, context;
	
				events = $.data( this, "mobile-events" );
				if ( events ) {
					context = events.swipe;
					delete events.swipe;
					events.length--;
					if ( events.length === 0 ) {
						$.removeData( this, "mobile-events" );
					}
				}
	
				if ( context ) {
					if ( context.start ) {
						$( this ).off( touchStartEvent, context.start );
					}
					if ( context.move ) {
						$document.off( touchMoveEvent, context.move );
					}
					if ( context.stop ) {
						$document.off( touchStopEvent, context.stop );
					}
				}
			}
		};
		$.each({
			swipeleft: "swipe.left",
			swiperight: "swipe.right"
		}, function( event, sourceEvent ) {
	
			$.event.special[ event ] = {
				setup: function() {
					$( this ).bind( sourceEvent, $.noop );
				},
				teardown: function() {
					$( this ).unbind( sourceEvent );
				}
			};
		});
	})( jQuery, this );
	*/


/***/ },
/* 18 */
/***/ function(module, exports) {

	!function(Foundation, $) {
	  'use strict';
	  // Elements with [data-open] will reveal a plugin that supports it when clicked.
	  $(document).on('click.zf.trigger', '[data-open]', function() {
	    var id = $(this).data('open');
	    $('#' + id).triggerHandler('open.zf.trigger', [$(this)]);
	  });
	
	  // Elements with [data-close] will close a plugin that supports it when clicked.
	  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
	  $(document).on('click.zf.trigger', '[data-close]', function() {
	    var id = $(this).data('close');
	    if (id) {
	      $('#' + id).triggerHandler('close.zf.trigger', [$(this)]);
	    }
	    else {
	      $(this).trigger('close.zf.trigger');
	    }
	  });
	
	  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
	  $(document).on('click.zf.trigger', '[data-toggle]', function() {
	    var id = $(this).data('toggle');
	    $('#' + id).triggerHandler('toggle.zf.trigger', [$(this)]);
	  });
	
	  // Elements with [data-closable] will respond to close.zf.trigger events.
	  $(document).on('close.zf.trigger', '[data-closable]', function() {
	    var animation = $(this).data('closable') || 'fade-out';
	    if(Foundation.Motion){
	      Foundation.Motion.animateOut($(this), animation, function() {
	        $(this).trigger('closed.zf');
	      });
	    }else{
	      $(this).fadeOut().trigger('closed.zf');
	    }
	  });
	
	  var MutationObserver = (function () {
	    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
	    for (var i=0; i < prefixes.length; i++) {
	      if (prefixes[i] + 'MutationObserver' in window) {
	        return window[prefixes[i] + 'MutationObserver'];
	      }
	    }
	    return false;
	  }());
	
	
	  var checkListeners = function(){
	    eventsListener();
	    resizeListener();
	    scrollListener();
	    closemeListener();
	  };
	  /**
	  * Fires once after all other scripts have loaded
	  * @function
	  * @private
	  */
	  $(window).load(function(){
	    checkListeners();
	  });
	
	  //******** only fires this function once on load, if there's something to watch ********
	  var closemeListener = function(pluginName){
	    var yetiBoxes = $('[data-yeti-box]'),
	        plugNames = ['dropdown', 'tooltip', 'reveal'];
	
	    if(pluginName){
	      if(typeof pluginName === 'string'){
	        plugNames.push(pluginName);
	      }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
	        plugNames.concat(pluginName);
	      }else{
	        console.error('Plugin names must be strings');
	      }
	    }
	    if(yetiBoxes.length){
	      var listeners = plugNames.map(function(name){
	        return 'closeme.zf.' + name;
	      }).join(' ');
	
	      $(window).off(listeners).on(listeners, function(e, pluginId){
	        var plugin = e.namespace.split('.')[0];
	        var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');
	
	        plugins.each(function(){
	          var _this = $(this);
	
	          _this.triggerHandler('close.zf.trigger', [_this]);
	        });
	      });
	    }
	  };
	  var resizeListener = function(debounce){
	    var timer,
	        $nodes = $('[data-resize]');
	    if($nodes.length){
	      $(window).off('resize.zf.trigger')
	      .on('resize.zf.trigger', function(e) {
	        if (timer) { clearTimeout(timer); }
	
	        timer = setTimeout(function(){
	
	          if(!MutationObserver){//fallback for IE 9
	            $nodes.each(function(){
	              $(this).triggerHandler('resizeme.zf.trigger');
	            });
	          }
	          //trigger all listening elements and signal a resize event
	          $nodes.attr('data-events', "resize");
	        }, debounce || 10);//default time to emit resize event
	      });
	    }
	  };
	  var scrollListener = function(debounce){
	    var timer,
	        $nodes = $('[data-scroll]');
	    if($nodes.length){
	      $(window).off('scroll.zf.trigger')
	      .on('scroll.zf.trigger', function(e){
	        if(timer){ clearTimeout(timer); }
	
	        timer = setTimeout(function(){
	
	          if(!MutationObserver){//fallback for IE 9
	            $nodes.each(function(){
	              $(this).triggerHandler('scrollme.zf.trigger');
	            });
	          }
	          //trigger all listening elements and signal a scroll event
	          $nodes.attr('data-events', "scroll");
	        }, debounce || 10);//default time to emit scroll event
	      });
	    }
	  };
	  // function domMutationObserver(debounce) {
	  //   // !!! This is coming soon and needs more work; not active  !!! //
	  //   var timer,
	  //   nodes = document.querySelectorAll('[data-mutate]');
	  //   //
	  //   if (nodes.length) {
	  //     // var MutationObserver = (function () {
	  //     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
	  //     //   for (var i=0; i < prefixes.length; i++) {
	  //     //     if (prefixes[i] + 'MutationObserver' in window) {
	  //     //       return window[prefixes[i] + 'MutationObserver'];
	  //     //     }
	  //     //   }
	  //     //   return false;
	  //     // }());
	  //
	  //
	  //     //for the body, we need to listen for all changes effecting the style and class attributes
	  //     var bodyObserver = new MutationObserver(bodyMutation);
	  //     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
	  //
	  //
	  //     //body callback
	  //     function bodyMutation(mutate) {
	  //       //trigger all listening elements and signal a mutation event
	  //       if (timer) { clearTimeout(timer); }
	  //
	  //       timer = setTimeout(function() {
	  //         bodyObserver.disconnect();
	  //         $('[data-mutate]').attr('data-events',"mutate");
	  //       }, debounce || 150);
	  //     }
	  //   }
	  // }
	  var eventsListener = function() {
	    if(!MutationObserver){ return false; }
	    var nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');
	
	    //element callback
	    var listeningElementsMutation = function(mutationRecordsList) {
	      var $target = $(mutationRecordsList[0].target);
	      //trigger the event handler for the element depending on type
	      switch ($target.attr("data-events")) {
	
	        case "resize" :
	        $target.triggerHandler('resizeme.zf.trigger', [$target]);
	        break;
	
	        case "scroll" :
	        $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
	        break;
	
	        // case "mutate" :
	        // console.log('mutate', $target);
	        // $target.triggerHandler('mutate.zf.trigger');
	        //
	        // //make sure we don't get stuck in an infinite loop from sloppy codeing
	        // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
	        //   domMutationObserver();
	        // }
	        // break;
	
	        default :
	        return false;
	        //nothing
	      }
	    }
	
	    if(nodes.length){
	      //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
	      for (var i = 0; i <= nodes.length-1; i++) {
	        var elementObserver = new MutationObserver(listeningElementsMutation);
	        elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree:false, attributeFilter:["data-events"]});
	      }
	    }
	  };
	  // ------------------------------------
	
	  // [PH]
	  // Foundation.CheckWatchers = checkWatchers;
	  Foundation.IHearYou = checkListeners;
	  // Foundation.ISeeYou = scrollListener;
	  // Foundation.IFeelYou = closemeListener;
	
	}(window.Foundation, window.jQuery);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./foundation.abide.js": 20,
		"./foundation.accordion.js": 21,
		"./foundation.accordionMenu.js": 22,
		"./foundation.drilldown.js": 23,
		"./foundation.dropdown.js": 24,
		"./foundation.dropdownMenu.js": 25,
		"./foundation.equalizer.js": 26,
		"./foundation.interchange.js": 27,
		"./foundation.magellan.js": 28,
		"./foundation.offcanvas.js": 29,
		"./foundation.orbit.js": 30,
		"./foundation.responsiveMenu.js": 31,
		"./foundation.responsiveToggle.js": 32,
		"./foundation.reveal.js": 33,
		"./foundation.slider.js": 34,
		"./foundation.sticky.js": 35,
		"./foundation.tabs.js": 36,
		"./foundation.toggler.js": 37,
		"./foundation.tooltip.js": 38
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 19;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Abide.
	   * @class
	   * @fires Abide#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Abide(element, options) {
	    this.$element = element;
	    this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);
	    this.$window  = $(window);
	    this.name     = 'Abide';
	    this.attr     = 'data-abide';
	
	    this._init();
	    this._events();
	
	    Foundation.registerPlugin(this);
	  }
	
	  /**
	   * Default settings for plugin
	   */
	  Abide.defaults = {
	    validateOn: 'fieldChange', // options: fieldChange, manual, submit
	    labelErrorClass: 'is-invalid-label',
	    inputErrorClass: 'is-invalid-input',
	    formErrorSelector: '.form-error',
	    formErrorClass: 'is-visible',
	    patterns: {
	      alpha : /^[a-zA-Z]+$/,
	      alpha_numeric : /^[a-zA-Z0-9]+$/,
	      integer : /^[-+]?\d+$/,
	      number : /^[-+]?\d*(?:[\.\,]\d+)?$/,
	
	      // amex, visa, diners
	      card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
	      cvv : /^([0-9]){3,4}$/,
	
	      // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
	      email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
	
	      url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
	      // abc.de
	      domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
	
	      datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
	      // YYYY-MM-DD
	      date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
	      // HH:MM:SS
	      time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
	      dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
	      // MM/DD/YYYY
	      month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
	      // DD/MM/YYYY
	      day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
	
	      // #FFF or #FFFFFF
	      color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
	    },
	    validators: {
	      equalTo: function (el, required, parent) {
	        var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
	            to    = el.value,
	            valid = (from === to);
	
	        return valid;
	      }
	    }
	  };
	
	
	  /**
	   * Initializes the Abide plugin and calls functions to get Abide functioning on load.
	   * @private
	   */
	  Abide.prototype._init = function() {
	  };
	
	  /**
	   * Initializes events for Abide.
	   * @private
	   */
	  Abide.prototype._events = function() {
	    var self = this;
	    this.$element
	      .off('.abide')
	      .on('reset.fndtn.abide', function(e) {
	        self.resetForm($(this));
	      })
	      .on('submit.fndtn.abide', function(e) {
	        e.preventDefault();
	        self.validateForm(self.$element);
	      })
	      .find('input, textarea, select')
	        .off('.abide')
	        .on('blur.fndtn.abide change.fndtn.abide', function (e) {
	          if (self.options.validateOn === 'fieldChange') {
	            self.validateInput($(e.target), self.$element);
	          }
	          // self.validateForm(self.$element);
	        })
	        .on('keydown.fndtn.abide', function (e) {
	          // if (settings.live_validate === true && e.which != 9) {
	          //   clearTimeout(self.timer);
	          //   self.timer = setTimeout(function () {
	          //     self.validate([this], e);
	          //   }.bind(this), settings.timeout);
	          // }
	          // self.validateForm(self.$element);
	        });
	
	  },
	  /**
	   * Calls necessary functions to update Abide upon DOM change
	   * @private
	   */
	  Abide.prototype._reflow = function() {
	    var self = this;
	  };
	  /**
	   * Checks whether or not a form element has the required attribute and if it's checked or not
	   * @param {Object} element - jQuery object to check for required attribute
	   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	   */
	  Abide.prototype.requiredCheck = function($el) {
	    switch ($el[0].type) {
	      case 'text':
	        if ($el.attr('required') && !$el.val()) {
	          // requirement check does not pass
	          return false;
	        } else {
	          return true;
	        }
	        break;
	        case 'password':
	        if ($el.attr('required') && !$el.val()) {
	          // requirement check does not pass
	          return false;
	        } else {
	          return true;
	        }
	        break;
	      case 'checkbox':
	        if ($el.attr('required') && !$el.is(':checked')) {
	          return false;
	        } else {
	          return true;
	        }
	        break;
	      case 'radio':
	        if ($el.attr('required') && !$el.is(':checked')) {
	          return false;
	        } else {
	          return true;
	        }
	        break;
	      default:
	        if ($el.attr('required') && (!$el.val() || !$el.val().length || $el.is(':empty'))) {
	          return false;
	        } else {
	          return true;
	        }
	    }
	  };
	  /**
	   * Checks whether or not a form element has the required attribute and if it's checked or not
	   * @param {Object} element - jQuery object to check for required attribute
	   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	   */
	  Abide.prototype.findLabel = function($el) {
	    if ($el.next('label').length) {
	      return $el.next('label');
	    }
	    else {
	      return $el.closest('label');
	    }
	  };
	  /**
	   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
	   * @param {Object} element - jQuery object to add the class to
	   */
	  Abide.prototype.addErrorClasses = function($el) {
	    var self = this,
	        $label = self.findLabel($el),
	        $formError = $el.next(self.options.formErrorSelector) || $el.find(self.options.formErrorSelector);
	
	    // label
	    if ($label) {
	      $label.addClass(self.options.labelErrorClass);
	    }
	    // form error
	    if ($formError) {
	      $formError.addClass(self.options.formErrorClass);
	    }
	    // input
	    $el.addClass(self.options.inputErrorClass);
	  };
	  /**
	   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
	   * @param {Object} element - jQuery object to remove the class from
	   */
	  Abide.prototype.removeErrorClasses = function($el) {
	    var self = this,
	        $label = self.findLabel($el),
	        $formError = $el.next(self.options.formErrorSelector) || $el.find(self.options.formErrorSelector);
	    // label
	    if ($label && $label.hasClass(self.options.labelErrorClass)) {
	      $label.removeClass(self.options.labelErrorClass);
	    }
	    // form error
	    if ($formError && $formError.hasClass(self.options.formErrorClass)) {
	      $formError.removeClass(self.options.formErrorClass);
	    }
	    // input
	    if ($el.hasClass(self.options.inputErrorClass)) {
	      $el.removeClass(self.options.inputErrorClass);
	    }
	  };
	  /**
	   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type
	   * @fires Abide#invalid
	   * @fires Abide#valid
	   * @param {Object} element - jQuery object to validate, should be an HTML input
	   * @param {Object} form - jQuery object of the entire form to find the various input elements
	   */
	  Abide.prototype.validateInput = function($el, $form) {
	    var self = this,
	        textInput = $form.find('input[type="text"]'),
	        passwordInput = $form.find('input[type="password"]'),
	        checkInput = $form.find('input[type="checkbox"]'),
	        label,
	        radioGroupName;
	
	    if ($el[0].type === 'text') {
	      if (!self.requiredCheck($el) || !self.validateText($el)) {
	        self.addErrorClasses($el);
	        $el.trigger('invalid.fndtn.abide', $el[0]);
	      }
	      else {
	        self.removeErrorClasses($el);
	        $el.trigger('valid.fndtn.abide', $el[0]);
	      }
	    }
	    else if ($el[0].type === 'radio') {
	      radioGroupName = $el.attr('name');
	      label = $el.siblings('label');
	
	      if (self.validateRadio(radioGroupName)) {
	        $(label).each(function() {
	          if ($(this).hasClass(self.options.labelErrorClass)) {
	            $(this).removeClass(self.options.labelErrorClass);
	          }
	        });
	        $el.trigger('valid.fndtn.abide', $el[0]);
	      }
	      else {
	        $(label).each(function() {
	          $(this).addClass(self.options.labelErrorClass);
	        });
	        $el.trigger('invalid.fndtn.abide', $el[0]);
	      };
	    }
	    else if ($el[0].type === 'checkbox') {
	      if (!self.requiredCheck($el)) {
	        self.addErrorClasses($el);
	        $el.trigger('invalid.fndtn.abide', $el[0]);
	      }
	      else {
	        self.removeErrorClasses($el);
	        $el.trigger('valid.fndtn.abide', $el[0]);
	      }
	    }
	    else {
	      if (!self.requiredCheck($el) || !self.validateText($el)) {
	        self.addErrorClasses($el);
	        $el.trigger('invalid.fndtn.abide', $el[0]);
	      }
	      else {
	        self.removeErrorClasses($el);
	        $el.trigger('valid.fndtn.abide', $el[0]);
	      }
	    }
	  };
	  /**
	   * Goes through a form and if there are any invalid inputs, it will display the form error element
	   * @param {Object} element - jQuery object to validate, should be a form HTML element
	   */
	  Abide.prototype.validateForm = function($form) {
	    var self = this,
	        inputs = $form.find('input'),
	        inputCount = $form.find('input').length,
	        counter = 0;
	
	    while (counter < inputCount) {
	      self.validateInput($(inputs[counter]), $form);
	      counter++;
	    }
	
	    // what are all the things that can go wrong with a form?
	    if ($form.find('.form-error.is-visible').length || $form.find('.is-invalid-label').length) {
	      $form.find('[data-abide-error]').css('display', 'block');
	    }
	    else {
	      $form.find('[data-abide-error]').css('display', 'none');
	    }
	  };
	  /**
	   * Determines whether or a not a text input is valid based on the patterns specified in the attribute
	   * @param {Object} element - jQuery object to validate, should be a text input HTML element
	   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
	   */
	  Abide.prototype.validateText = function($el) {
	    var self = this,
	        valid = false,
	        patternLib = this.options.patterns,
	        inputText = $($el).val(),
	        // maybe have a different way of parsing this bc people might use type
	        pattern = $($el).attr('pattern');
	
	    // if there's no value, then return true
	    // since required check has already been done
	    if (inputText.length === 0) {
	      return true;
	    }
	    else {
	      if (inputText.match(patternLib[pattern])) {
	        return true;
	      }
	      else {
	        return false;
	      }
	    }
	  };
	  /**
	   * Determines whether or a not a radio input is valid based on whether or not it is required and selected
	   * @param {String} group - A string that specifies the name of a radio button group
	   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
	   */
	  Abide.prototype.validateRadio = function(group) {
	    var self = this,
	        labels = $(':radio[name="' + group + '"]').siblings('label'),
	        counter = 0;
	    // go through each radio button
	    $(':radio[name="' + group + '"]').each(function() {
	      // put them through the required checkpoint
	      if (!self.requiredCheck($(this))) {
	        // if at least one doesn't pass, add a tally to the counter
	        counter++;
	      }
	      // if at least one is checked
	      // reset the counter
	      if ($(this).is(':checked')) {
	        counter = 0;
	      }
	    });
	
	    if (counter > 0) {
	      return false;
	    }
	    else {
	      return true;
	    }
	  };
	  Abide.prototype.matchValidation = function(val, validation) {
	
	  };
	  /**
	   * Resets form inputs and styles
	   * @param {Object} $form - A jQuery object that should be an HTML form element
	   */
	  Abide.prototype.resetForm = function($form) {
	    var self = this;
	    var invalidAttr = 'data-invalid';
	    // remove data attributes
	    $('[' + self.invalidAttr + ']', $form).removeAttr(invalidAttr);
	    // remove styles
	    $('.' + self.options.labelErrorClass, $form).not('small').removeClass(self.options.labelErrorClass);
	    $('.' + self.options.inputErrorClass, $form).not('small').removeClass(self.options.inputErrorClass);
	    $('.form-error.is-visible').removeClass('is-visible');
	    $form.find('[data-abide-error]').css('display', 'none');
	    $(':input', $form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr(invalidAttr);
	  };
	  Abide.prototype.destroy = function(){
	    //TODO this...
	  };
	
	  Foundation.plugin(Abide, 'Abide');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Abide;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Abide;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Accordion module.
	 * @module foundation.accordion
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 */
	!function($, Foundation) {
	  'use strict';
	
	  /**
	   * Creates a new instance of an accordion.
	   * @class
	   * @fires Accordion#init
	   * @param {jQuery} element - jQuery object to make into an accordion.
	   */
	  function Accordion(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Accordion', {
	      'ENTER': 'toggle',
	      'SPACE': 'toggle',
	      'ARROW_DOWN': 'next',
	      'ARROW_UP': 'previous'
	    });
	  }
	
	  Accordion.defaults = {
	    /**
	     * Amount of time to animate the opening of an accordion pane.
	     * @option
	     * @example 250
	     */
	    slideSpeed: 250,
	    /**
	     * Allow the accordion to have multiple open panes.
	     * @option
	     * @example false
	     */
	    multiExpand: false,
	    /**
	     * Allow the accordion to close all panes.
	     * @option
	     * @example false
	     */
	    allowAllClosed: false
	  };
	
	  /**
	   * Initializes the accordion by animating the preset active pane(s).
	   * @private
	   */
	  Accordion.prototype._init = function() {
	    this.$element.attr('role', 'tablist');
	    this.$tabs = this.$element.children('li');
	    if (this.$tabs.length == 0) {
	      this.$tabs = this.$element.children('[data-accordion-item]');
	    }
	    this.$tabs.each(function(idx, el){
	
	      var $el = $(el),
	          $content = $el.find('[data-tab-content]'),
	          id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
	          linkId = el.id || id + '-label';
	
	      $el.find('a:first').attr({
	        'aria-controls': id,
	        'role': 'tab',
	        'id': linkId,
	        'aria-expanded': false,
	        'aria-selected': false
	      });
	      $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
	    });
	    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
	    if($initActive.length){
	      this.down($initActive, true);
	    }
	    this._events();
	  };
	
	  /**
	   * Adds event handlers for items within the accordion.
	   * @private
	   */
	  Accordion.prototype._events = function() {
	    var _this = this;
	
	    this.$tabs.each(function(){
	      var $elem = $(this);
	      var $tabContent = $elem.children('[data-tab-content]');
	      if ($tabContent.length) {
	        $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
	               .on('click.zf.accordion', function(e){
	        // $(this).children('a').on('click.zf.accordion', function(e) {
	          e.preventDefault();
	          if ($elem.hasClass('is-active')) {
	            if(_this.options.allowAllClosed || $elem.siblings().hasClass('is-active')){
	              _this.up($tabContent);
	            }
	          }
	          else {
	            _this.down($tabContent);
	          }
	        }).on('keydown.zf.accordion', function(e){
	          Foundation.Keyboard.handleKey(e, _this, {
	            toggle: function() {
	              _this.toggle($tabContent);
	            },
	            next: function() {
	              $elem.next().find('a').focus().trigger('click.zf.accordion');
	            },
	            previous: function() {
	              $elem.prev().find('a').focus().trigger('click.zf.accordion');
	            },
	            handled: function() {
	              e.preventDefault();
	              e.stopPropagation();
	            }
	          });
	        });
	      }
	    });
	  };
	  /**
	   * Toggles the selected content pane's open/close state.
	   * @param {jQuery} $target - jQuery object of the pane to toggle.
	   * @function
	   */
	  Accordion.prototype.toggle = function($target){
	    if($target.parent().hasClass('is-active')){
	      if(this.options.allowAllClosed || $target.parent().siblings().hasClass('is-active')){
	        this.up($target);
	      }else{ return; }
	    }else{
	      this.down($target);
	    }
	  };
	  /**
	   * Opens the accordion tab defined by `$target`.
	   * @param {jQuery} $target - Accordion pane to open.
	   * @param {Boolean} firstTime - flag to determine if reflow should happen.
	   * @fires Accordion#down
	   * @function
	   */
	  Accordion.prototype.down = function($target, firstTime) {
	    var _this = this;
	    if(!this.options.multiExpand && !firstTime){
	      var $currentActive = this.$element.find('.is-active').children('[data-tab-content]');
	      if($currentActive.length){
	        this.up($currentActive);
	      }
	    }
	
	    $target
	      .attr('aria-hidden', false)
	      .parent('[data-tab-content]')
	      .addBack()
	      .parent().addClass('is-active');
	
	    // Foundation.Move(_this.options.slideSpeed, $target, function(){
	      $target.slideDown(_this.options.slideSpeed);
	    // });
	
	    // if(!firstTime){
	    //   Foundation._reflow(this.$element.attr('data-accordion'));
	    // }
	    $('#' + $target.attr('aria-labelledby')).attr({
	      'aria-expanded': true,
	      'aria-selected': true
	    });
	    /**
	     * Fires when the tab is done opening.
	     * @event Accordion#down
	     */
	    this.$element.trigger('down.zf.accordion', [$target]);
	  };
	
	  /**
	   * Closes the tab defined by `$target`.
	   * @param {jQuery} $target - Accordion tab to close.
	   * @fires Accordion#up
	   * @function
	   */
	  Accordion.prototype.up = function($target) {
	    var $aunts = $target.parent().siblings(),
	        _this = this;
	    var canClose = this.options.multiExpand ? $aunts.hasClass('is-active') : $target.parent().hasClass('is-active');
	
	    if(!this.options.allowAllClosed && !canClose){
	      return;
	    }
	
	    // Foundation.Move(this.options.slideSpeed, $target, function(){
	      $target.slideUp(_this.options.slideSpeed);
	    // });
	
	    $target.attr('aria-hidden', true)
	           .parent().removeClass('is-active');
	
	    $('#' + $target.attr('aria-labelledby')).attr({
	     'aria-expanded': false,
	     'aria-selected': false
	   });
	
	    /**
	     * Fires when the tab is done collapsing up.
	     * @event Accordion#up
	     */
	    this.$element.trigger('up.zf.accordion', [$target]);
	  };
	
	  /**
	   * Destroys an instance of an accordion.
	   * @fires Accordion#destroyed
	   * @function
	   */
	  Accordion.prototype.destroy = function() {
	    this.$element.find('[data-tab-content]').slideUp(0).css('display', '');
	    this.$element.find('a').off('.zf.accordion');
	
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Accordion, 'Accordion');
	}(jQuery, window.Foundation);


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * AccordionMenu module.
	 * @module foundation.accordionMenu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 * @requires foundation.util.nest
	 */
	!function($) {
	  'use strict';
	
	  /**
	   * Creates a new instance of an accordion menu.
	   * @class
	   * @fires AccordionMenu#init
	   * @param {jQuery} element - jQuery object to make into an accordion menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function AccordionMenu(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);
	
	    Foundation.Nest.Feather(this.$element, 'accordion');
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('AccordionMenu', {
	      'ENTER': 'toggle',
	      'SPACE': 'toggle',
	      'ARROW_RIGHT': 'open',
	      'ARROW_UP': 'up',
	      'ARROW_DOWN': 'down',
	      'ARROW_LEFT': 'close',
	      'ESCAPE': 'closeAll',
	      'TAB': 'down',
	      'SHIFT_TAB': 'up'
	    });
	  }
	
	  AccordionMenu.defaults = {
	    /**
	     * Amount of time to animate the opening of a submenu in ms.
	     * @option
	     * @example 250
	     */
	    slideSpeed: 250,
	    /**
	     * Allow the menu to have multiple open panes.
	     * @option
	     * @example true
	     */
	    multiOpen: true
	  };
	
	  /**
	   * Initializes the accordion menu by hiding all nested menus.
	   * @private
	   */
	  AccordionMenu.prototype._init = function() {
	    this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
	    this.$element.attr({
	      'role': 'tablist',
	      'aria-multiselectable': this.options.multiOpen
	    });
	
	    this.$menuLinks = this.$element.find('.has-submenu');
	    this.$menuLinks.each(function(){
	      var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
	          $elem = $(this),
	          $sub = $elem.children('[data-submenu]'),
	          subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
	          isActive = $sub.hasClass('is-active');
	      $elem.attr({
	        'aria-controls': subId,
	        'aria-expanded': isActive,
	        'aria-selected': false,
	        'role': 'tab',
	        'id': linkId
	      });
	      $sub.attr({
	        'aria-labelledby': linkId,
	        'aria-hidden': !isActive,
	        'role': 'tabpanel',
	        'id': subId
	      });
	    });
	    var initPanes = this.$element.find('.is-active');
	    if(initPanes.length){
	      var _this = this;
	      initPanes.each(function(){
	        _this.down($(this));
	      });
	    }
	    this._events();
	  };
	
	  /**
	   * Adds event handlers for items within the menu.
	   * @private
	   */
	  AccordionMenu.prototype._events = function() {
	    var _this = this;
	
	    this.$element.find('li').each(function() {
	      var $submenu = $(this).children('[data-submenu]');
	
	      if ($submenu.length) {
	        $(this).children('a').off('click.zf.accordionmenu').on('click.zf.accordionmenu', function(e) {
	          e.preventDefault();
	
	          _this.toggle($submenu);
	        });
	      }
	    }).on('keydown.zf.accordionmenu', function(e){
	      var $element = $(this),
	          $elements = $element.parent('ul').children('li'),
	          $prevElement,
	          $nextElement,
	          $target = $element.children('[data-submenu]');
	
	      $elements.each(function(i) {
	        if ($(this).is($element)) {
	          $prevElement = $elements.eq(Math.max(0, i-1));
	          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
	
	          if ($(this).children('[data-submenu]:visible').length) { // has open sub menu
	            $nextElement = $element.find('li:first-child');
	          }
	          if ($(this).is(':first-child')) { // is first element of sub menu
	            $prevElement = $element.parents('li').first();
	          } else if ($prevElement.children('[data-submenu]:visible').length) { // if previous element has open sub menu
	            $prevElement = $prevElement.find('li:last-child');
	          }
	          if ($(this).is(':last-child')) { // is last element of sub menu
	            $nextElement = $element.parents('li').first().next('li');
	          }
	
	          return;
	        }
	      });
	      Foundation.Keyboard.handleKey(e, _this, {
	        open: function() {
	          if ($target.is(':hidden')) {
	            _this.down($target);
	            $target.find('li').first().focus();
	          }
	        },
	        close: function() {
	          if ($target.length && !$target.is(':hidden')) { // close active sub of this item
	            _this.up($target);
	          } else if ($element.parent('[data-submenu]').length) { // close currently open sub
	            _this.up($element.parent('[data-submenu]'));
	            $element.parents('li').first().focus();
	          }
	        },
	        up: function() {
	          $prevElement.focus();
	        },
	        down: function() {
	          $nextElement.focus();
	        },
	        toggle: function() {
	          if ($element.children('[data-submenu]').length) {
	            _this.toggle($element.children('[data-submenu]'));
	          }
	        },
	        closeAll: function() {
	          _this.hideAll();
	        },
	        handled: function() {
	          e.preventDefault();
	          e.stopImmediatePropagation();
	        }
	      });
	    });//.attr('tabindex', 0);
	  };
	  /**
	   * Closes all panes of the menu.
	   * @function
	   */
	  AccordionMenu.prototype.hideAll = function(){
	    this.$element.find('[data-submenu]').slideUp(this.options.slideSpeed);
	  };
	  /**
	   * Toggles the open/close state of a submenu.
	   * @function
	   * @param {jQuery} $target - the submenu to toggle
	   */
	  AccordionMenu.prototype.toggle = function($target){
	    if(!$target.is(':animated')) {
	      if (!$target.is(':hidden')) {
	        this.up($target);
	      }
	      else {
	        this.down($target);
	      }
	    }
	  };
	  /**
	   * Opens the sub-menu defined by `$target`.
	   * @param {jQuery} $target - Sub-menu to open.
	   * @fires AccordionMenu#down
	   */
	  AccordionMenu.prototype.down = function($target) {
	    var _this = this;
	
	    if(!this.options.multiOpen){
	      this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
	    }
	
	    $target.addClass('is-active').attr({'aria-hidden': false})
	      .parent('.has-submenu').attr({'aria-expanded': true, 'aria-selected': true});
	
	      Foundation.Move(this.options.slideSpeed, $target, function(){
	        $target.slideDown(_this.options.slideSpeed);
	      });
	    /**
	     * Fires when the menu is done collapsing up.
	     * @event AccordionMenu#down
	     */
	    this.$element.trigger('down.zf.accordionMenu', [$target]);
	  };
	
	  /**
	   * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
	   * @param {jQuery} $target - Sub-menu to close.
	   * @fires AccordionMenu#up
	   */
	  AccordionMenu.prototype.up = function($target) {
	    var _this = this;
	    Foundation.Move(this.options.slideSpeed, $target, function(){
	      $target.slideUp(_this.options.slideSpeed);
	    });
	    $target.attr('aria-hidden', true)
	           .find('[data-submenu]').slideUp(0).attr('aria-hidden', true).end()
	           .parent('.has-submenu')
	           .attr({'aria-expanded': false, 'aria-selected': false});
	    // $target.slideUp(this.options.slideSpeed, function() {
	    //   $target.find('[data-submenu]').slideUp(0).attr('aria-hidden', true);
	    // }).attr('aria-hidden', true).parent('.has-submenu').attr({'aria-expanded': false, 'aria-selected': false});
	
	    /**
	     * Fires when the menu is done collapsing up.
	     * @event AccordionMenu#up
	     */
	    this.$element.trigger('up.zf.accordionMenu', [$target]);
	  };
	
	  /**
	   * Destroys an instance of accordion menu.
	   * @fires AccordionMenu#destroyed
	   */
	  AccordionMenu.prototype.destroy = function(){
	    this.$element.find('[data-submenu]').slideDown(0).css('display', '');
	    this.$element.find('a').off('click.zf.accordionMenu');
	
	    Foundation.Nest.Burn(this.$element, 'accordion');
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(AccordionMenu, 'AccordionMenu');
	}(jQuery, window.Foundation);


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Drilldown module.
	 * @module foundation.drilldown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 * @requires foundation.util.nest
	 */
	!function($, Foundation){
	  'use strict';
	
	  /**
	   * Creates a new instance of a drilldown menu.
	   * @class
	   * @param {jQuery} element - jQuery object to make into an accordion menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Drilldown(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);
	
	    Foundation.Nest.Feather(this.$element, 'drilldown');
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Drilldown', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ARROW_RIGHT': 'next',
	      'ARROW_UP': 'up',
	      'ARROW_DOWN': 'down',
	      'ARROW_LEFT': 'previous',
	      'ESCAPE': 'close',
	      'TAB': 'down',
	      'SHIFT_TAB': 'up'
	    });
	  }
	  Drilldown.defaults = {
	    /**
	     * Markup used for JS generated back button. Prepended to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
	     * @option
	     * @example '<\li><\a>Back<\/a><\/li>'
	     */
	    backButton: '<li class="js-drilldown-back"><a>Back</a></li>',
	    /**
	     * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
	     * @option
	     * @example '<\div class="is-drilldown"><\/div>'
	     */
	    wrapper: '<div></div>',
	    /**
	     * Allow the menu to return to root list on body click.
	     * @option
	     * @example false
	     */
	    closeOnClick: false
	    // holdOpen: false
	  };
	  /**
	   * Initializes the drilldown by creating jQuery collections of elements
	   * @private
	   */
	  Drilldown.prototype._init = function(){
	    this.$submenuAnchors = this.$element.find('li.has-submenu');
	    this.$submenus = this.$submenuAnchors.children('[data-submenu]');
	    this.$menuItems = this.$element.find('li:visible').not('.js-drilldown-back').attr('role', 'menuitem');
	
	    this._prepareMenu();
	
	    this._keyboardEvents();
	  };
	  /**
	   * prepares drilldown menu by setting attributes to links and elements
	   * sets a min height to prevent content jumping
	   * wraps the element if not already wrapped
	   * @private
	   * @function
	   */
	  Drilldown.prototype._prepareMenu = function(){
	    var _this = this;
	    // if(!this.options.holdOpen){
	    //   this._menuLinkEvents();
	    // }
	    this.$submenuAnchors.each(function(){
	      var $sub = $(this);
	      var $link = $sub.find('a:first');
	      $link.data('savedHref', $link.attr('href')).removeAttr('href');
	      $sub.children('[data-submenu]')
	          .attr({
	            'aria-hidden': true,
	            'tabindex': 0,
	            'role': 'menu'
	          });
	      _this._events($sub);
	    });
	    this.$submenus.each(function(){
	      var $menu = $(this),
	          $back = $menu.find('.js-drilldown-back');
	      if(!$back.length){
	        $menu.prepend(_this.options.backButton);
	      }
	      _this._back($menu);
	    });
	    if(!this.$element.parent().hasClass('is-drilldown')){
	      this.$wrapper = $(this.options.wrapper).addClass('is-drilldown').css(this._getMaxDims());
	      this.$element.wrap(this.$wrapper);
	    }
	
	  };
	  /**
	   * Adds event handlers to elements in the menu.
	   * @function
	   * @private
	   * @param {jQuery} $elem - the current menu item to add handlers to.
	   */
	  Drilldown.prototype._events = function($elem){
	    var _this = this;
	
	    $elem.off('click.zf.drilldown')
	    .on('click.zf.drilldown', function(e){
	      if($(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')){
	        e.stopImmediatePropagation();
	        e.preventDefault();
	      }
	
	      // if(e.target !== e.currentTarget.firstElementChild){
	      //   return false;
	      // }
	      _this._show($elem);
	
	      if(_this.options.closeOnClick){
	        var $body = $('body').not(_this.$wrapper);
	        $body.off('.zf.drilldown').on('click.zf.drilldown', function(e){
	          e.preventDefault();
	          _this._hideAll();
	          $body.off('.zf.drilldown');
	        });
	      }
	    });
	  };
	  /**
	   * Adds keydown event listener to `li`'s in the menu.
	   * @private
	   */
	  Drilldown.prototype._keyboardEvents = function() {
	    var _this = this;
	    this.$menuItems.add(this.$element.find('.js-drilldown-back')).on('keydown.zf.drilldown', function(e){
	      var $element = $(this),
	          $elements = $element.parent('ul').children('li'),
	          $prevElement,
	          $nextElement;
	
	      $elements.each(function(i) {
	        if ($(this).is($element)) {
	          $prevElement = $elements.eq(Math.max(0, i-1));
	          $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
	          return;
	        }
	      });
	      Foundation.Keyboard.handleKey(e, _this, {
	        next: function() {
	          if ($element.is(_this.$submenuAnchors)) {
	            _this._show($element);
	            $element.on(Foundation.transitionend($element), function(){
	              $element.find('ul li').filter(_this.$menuItems).first().focus();
	            });
	          }
	        },
	        previous: function() {
	          _this._hide($element.parent('ul'));
	          $element.parent('ul').on(Foundation.transitionend($element), function(){
	            setTimeout(function() {
	              $element.parent('ul').parent('li').focus();
	            }, 1);
	          });
	        },
	        up: function() {
	          $prevElement.focus();
	        },
	        down: function() {
	          $nextElement.focus();
	        },
	        close: function() {
	          _this._back();
	          //_this.$menuItems.first().focus(); // focus to first element
	        },
	        open: function() {
	          if (!$element.is(_this.$menuItems)) { // not menu item means back button
	            _this._hide($element.parent('ul'));
	            setTimeout(function(){$element.parent('ul').parent('li').focus();}, 1);
	          } else if ($element.is(_this.$submenuAnchors)) {
	            _this._show($element);
	            setTimeout(function(){$element.find('ul li').filter(_this.$menuItems).first().focus();}, 1);
	          }
	        },
	        handled: function() {
	          e.preventDefault();
	          e.stopImmediatePropagation();
	        }
	      });
	    }); // end keyboardAccess
	  };
	
	  /**
	   * Closes all open elements, and returns to root menu.
	   * @function
	   * @fires Drilldown#closed
	   */
	  Drilldown.prototype._hideAll = function(){
	    var $elem = this.$element.find('.is-drilldown-sub.is-active').addClass('is-closing');
	    $elem.one(Foundation.transitionend($elem), function(e){
	      $elem.removeClass('is-active is-closing');
	    });
	        /**
	         * Fires when the menu is fully closed.
	         * @event Drilldown#closed
	         */
	    this.$element.trigger('closed.zf.drilldown');
	  };
	  /**
	   * Adds event listener for each `back` button, and closes open menus.
	   * @function
	   * @fires Drilldown#back
	   * @param {jQuery} $elem - the current sub-menu to add `back` event.
	   */
	  Drilldown.prototype._back = function($elem){
	    var _this = this;
	    $elem.off('click.zf.drilldown');
	    $elem.children('.js-drilldown-back')
	      .on('click.zf.drilldown', function(e){
	        e.stopImmediatePropagation();
	        // console.log('mouseup on back');
	        _this._hide($elem);
	      });
	  };
	  /**
	   * Adds event listener to menu items w/o submenus to close open menus on click.
	   * @function
	   * @private
	   */
	  Drilldown.prototype._menuLinkEvents = function(){
	    var _this = this;
	    this.$menuItems.not('.has-submenu')
	        .off('click.zf.drilldown')
	        .on('click.zf.drilldown', function(e){
	          // e.stopImmediatePropagation();
	          setTimeout(function(){
	            _this._hideAll();
	          }, 0);
	      });
	  };
	  /**
	   * Opens a submenu.
	   * @function
	   * @fires Drilldown#open
	   * @param {jQuery} $elem - the current element with a submenu to open.
	   */
	  Drilldown.prototype._show = function($elem){
	    $elem.children('[data-submenu]').addClass('is-active');
	
	    this.$element.trigger('open.zf.drilldown', [$elem]);
	  };
	  /**
	   * Hides a submenu
	   * @function
	   * @fires Drilldown#hide
	   * @param {jQuery} $elem - the current sub-menu to hide.
	   */
	  Drilldown.prototype._hide = function($elem){
	    var _this = this;
	    $elem.addClass('is-closing')
	         .one(Foundation.transitionend($elem), function(){
	           $elem.removeClass('is-active is-closing');
	         });
	    /**
	     * Fires when the submenu is has closed.
	     * @event Drilldown#hide
	     */
	    $elem.trigger('hide.zf.drilldown', [$elem]);
	
	  };
	  /**
	   * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
	   * Prevents content jumping.
	   * @function
	   * @private
	   */
	  Drilldown.prototype._getMaxDims = function(){
	    var max = 0, result = {};
	    this.$submenus.add(this.$element).each(function(){
	      var numOfElems = $(this).children('li').length;
	      max = numOfElems > max ? numOfElems : max;
	    });
	
	    result.height = max * this.$menuItems[0].getBoundingClientRect().height + 'px';
	    result.width = this.$element[0].getBoundingClientRect().width + 'px';
	
	    return result;
	  };
	  /**
	   * Destroys the Drilldown Menu
	   * @function
	   */
	  Drilldown.prototype.destroy = function(){
	    this._hideAll();
	    Foundation.Nest.Burn(this.$element, 'drilldown');
	    this.$element.unwrap()
	                 .find('.js-drilldown-back').remove()
	                 .end().find('.is-active, .is-closing, .is-drilldown-sub').removeClass('is-active is-closing is-drilldown-sub')
	                 .end().find('[data-submenu]').removeAttr('aria-hidden tabindex role')
	                 .off('.zf.drilldown').end().off('zf.drilldown');
	    this.$element.find('a').each(function(){
	      var $link = $(this);
	      if($link.data('savedHref')){
	        $link.attr('href', $link.data('savedHref')).removeData('savedHref');
	      }else{ return; }
	    });
	    Foundation.unregisterPlugin(this);
	  };
	  Foundation.plugin(Drilldown, 'Drilldown');
	}(jQuery, window.Foundation);


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Dropdown module.
	 * @module foundation.dropdown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 */
	!function($, Foundation){
	  'use strict';
	  /**
	   * Creates a new instance of a dropdown.
	   * @class
	   * @param {jQuery} element - jQuery object to make into an accordion menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Dropdown(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Dropdown', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ESCAPE': 'close',
	      'TAB': 'tab_forward',
	      'SHIFT_TAB': 'tab_backward'
	    });
	  }
	
	  Dropdown.defaults = {
	    /**
	     * Amount of time to delay opening a submenu on hover event.
	     * @option
	     * @example 250
	     */
	    hoverDelay: 250,
	    /**
	     * Allow submenus to open on hover events
	     * @option
	     * @example false
	     */
	    hover: false,
	    /**
	     * Don't close dropdown when hovering over dropdown pane
	     * @option
	     * @example true
	     */
	    hoverPane: false,
	    /**
	     * Number of pixels between the dropdown pane and the triggering element on open.
	     * @option
	     * @example 1
	     */
	    vOffset: 1,
	    /**
	     * Number of pixels between the dropdown pane and the triggering element on open.
	     * @option
	     * @example 1
	     */
	    hOffset: 1,
	    /**
	     * Class applied to adjust open position. JS will test and fill this in.
	     * @option
	     * @example 'top'
	     */
	    positionClass: '',
	    /**
	     * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
	     * @option
	     * @example false
	     */
	    trapFocus: false,
	    /**
	     * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
	     * @option
	     * @example true
	     */
	    autoFocus: false
	  };
	  /**
	   * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
	   * @function
	   * @private
	   */
	  Dropdown.prototype._init = function(){
	    var $id = this.$element.attr('id');
	
	    this.$anchor = $('[data-toggle="' + $id + '"]') || $('[data-open="' + $id + '"]');
	    this.$anchor.attr({
	      'aria-controls': $id,
	      'data-is-focus': false,
	      'data-yeti-box': $id,
	      'aria-haspopup': true,
	      'aria-expanded': false
	      // 'data-resize': $id
	    });
	
	    this.options.positionClass = this.getPositionClass();
	    this.counter = 4;
	    this.usedPositions = [];
	    this.$element.attr({
	      'aria-hidden': 'true',
	      'data-yeti-box': $id,
	      'data-resize': $id,
	      'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
	    });
	    this._events();
	  };
	  /**
	   * Helper function to determine current orientation of dropdown pane.
	   * @function
	   * @returns {String} position - string value of a position class.
	   */
	  Dropdown.prototype.getPositionClass = function(){
	    var position = this.$element[0].className.match(/(top|left|right)/g);
	        position = position ? position[0] : '';
	    return position;
	  };
	  /**
	   * Adjusts the dropdown panes orientation by adding/removing positioning classes.
	   * @function
	   * @private
	   * @param {String} position - position class to remove.
	   */
	  Dropdown.prototype._reposition = function(position){
	    this.usedPositions.push(position ? position : 'bottom');
	    //default, try switching to opposite side
	    if(!position && (this.usedPositions.indexOf('top') < 0)){
	      this.$element.addClass('top');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
	      this.$element.removeClass(position)
	          .addClass('right');
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.removeClass(position)
	          .addClass('left');
	    }
	
	    //if default change didn't work, try bottom or left first
	    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.addClass('left');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.removeClass(position)
	          .addClass('left');
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }
	    //if nothing cleared, set to bottom
	    else{
	      this.$element.removeClass(position);
	    }
	    this.classChanged = true;
	    this.counter--;
	  };
	  /**
	   * Sets the position and orientation of the dropdown pane, checks for collisions.
	   * Recursively calls itself if a collision is detected, with a new position class.
	   * @function
	   * @private
	   */
	  Dropdown.prototype._setPosition = function(){
	    if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
	    var position = this.getPositionClass(),
	        $eleDims = Foundation.Box.GetDimensions(this.$element),
	        $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
	        _this = this,
	        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
	        param = (direction === 'top') ? 'height' : 'width',
	        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;
	
	    if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))){
	      this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	        'width': $eleDims.windowDims.width - (this.options.hOffset * 2),
	        'height': 'auto'
	      });
	      this.classChanged = true;
	      return false;
	    }
	
	    this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));
	
	    while(!Foundation.Box.ImNotTouchingYou(this.$element) && this.counter){
	      this._reposition(position);
	      this._setPosition();
	    }
	  };
	  /**
	   * Adds event listeners to the element utilizing the triggers utility library.
	   * @function
	   * @private
	   */
	  Dropdown.prototype._events = function(){
	    var _this = this;
	    this.$element.on({
	      'open.zf.trigger': this.open.bind(this),
	      'close.zf.trigger': this.close.bind(this),
	      'toggle.zf.trigger': this.toggle.bind(this),
	      'resizeme.zf.trigger': this._setPosition.bind(this)
	    });
	
	    if(this.options.hover){
	      this.$anchor.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
	          .on('mouseenter.zf.dropdown', function(){
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function(){
	              _this.open();
	              _this.$anchor.data('hover', true);
	            }, _this.options.hoverDelay);
	          }).on('mouseleave.zf.dropdown', function(){
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function(){
	              _this.close();
	              _this.$anchor.data('hover', false);
	            }, _this.options.hoverDelay);
	          });
	      if(this.options.hoverPane){
	        this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
	            .on('mouseenter.zf.dropdown', function(){
	              clearTimeout(_this.timeout);
	            }).on('mouseleave.zf.dropdown', function(){
	              clearTimeout(_this.timeout);
	              _this.timeout = setTimeout(function(){
	                _this.close();
	                _this.$anchor.data('hover', false);
	              }, _this.options.hoverDelay);
	            });
	      }
	    }
	    this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {
	
	      var $target = $(this),
	        visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);
	
	      Foundation.Keyboard.handleKey(e, _this, {
	        tab_forward: function() {
	          if (this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
	            if (this.options.trapFocus) { // if focus shall be trapped
	              visibleFocusableElements.eq(0).focus();
	              e.preventDefault();
	            } else { // if focus is not trapped, close dropdown on focus out
	              this.close();
	            }
	          }
	        },
	        tab_backward: function() {
	          if (this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || this.$element.is(':focus')) { // left modal upwards, setting focus to last element
	            if (this.options.trapFocus) { // if focus shall be trapped
	              visibleFocusableElements.eq(-1).focus();
	              e.preventDefault();
	            } else { // if focus is not trapped, close dropdown on focus out
	              this.close();
	            }
	          }
	        },
	        open: function() {
	          if ($target.is(_this.$anchor)) {
	            _this.open();
	            _this.$element.attr('tabindex', -1).focus();
	            e.preventDefault();
	          }
	        },
	        close: function() {
	          _this.close();
	          _this.$anchor.focus();
	        }
	      });
	    });
	  };
	  /**
	   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
	   * @function
	   * @fires Dropdown#closeme
	   * @fires Dropdown#show
	   */
	  Dropdown.prototype.open = function(){
	    // var _this = this;
	    /**
	     * Fires to close other open dropdowns
	     * @event Dropdown#closeme
	     */
	    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
	    this.$anchor.addClass('hover')
	        .attr({'aria-expanded': true});
	    // this.$element/*.show()*/;
	    this._setPosition();
	    this.$element.addClass('is-open')
	        .attr({'aria-hidden': false});
	
	    if(this.options.autoFocus){
	      var $focusable = Foundation.Keyboard.findFocusable(this.$element);
	      if($focusable.length){
	        $focusable.eq(0).focus();
	      }
	    }
	
	
	    /**
	     * Fires once the dropdown is visible.
	     * @event Dropdown#show
	     */
	     this.$element.trigger('show.zf.dropdown', [this.$element]);
	    //why does this not work correctly for this plugin?
	    // Foundation.reflow(this.$element, 'dropdown');
	    // Foundation._reflow(this.$element.attr('data-dropdown'));
	  };
	
	  /**
	   * Closes the open dropdown pane.
	   * @function
	   * @fires Dropdown#hide
	   */
	  Dropdown.prototype.close = function(){
	    if(!this.$element.hasClass('is-open')){
	      return false;
	    }
	    this.$element.removeClass('is-open')
	        .attr({'aria-hidden': true});
	
	    this.$anchor.removeClass('hover')
	        .attr('aria-expanded', false);
	
	    if(this.classChanged){
	      var curPositionClass = this.getPositionClass();
	      if(curPositionClass){
	        this.$element.removeClass(curPositionClass);
	      }
	      this.$element.addClass(this.options.positionClass)
	          /*.hide()*/.css({height: '', width: ''});
	      this.classChanged = false;
	      this.counter = 4;
	      this.usedPositions.length = 0;
	    }
	    this.$element.trigger('hide.zf.dropdown', [this.$element]);
	    // Foundation.reflow(this.$element, 'dropdown');
	  };
	  /**
	   * Toggles the dropdown pane's visibility.
	   * @function
	   */
	  Dropdown.prototype.toggle = function(){
	    if(this.$element.hasClass('is-open')){
	      if(this.$anchor.data('hover')) return;
	      this.close();
	    }else{
	      this.open();
	    }
	  };
	  /**
	   * Destroys the dropdown.
	   * @function
	   */
	  Dropdown.prototype.destroy = function(){
	    this.$element.off('.zf.trigger').hide();
	    this.$anchor.off('.zf.dropdown');
	
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Dropdown, 'Dropdown');
	}(jQuery, window.Foundation);


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * DropdownMenu module.
	 * @module foundation.dropdown-menu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.nest
	 */
	!function($, Foundation){
	  'use strict';
	
	  /**
	   * Creates a new instance of DropdownMenu.
	   * @class
	   * @fires DropdownMenu#init
	   * @param {jQuery} element - jQuery object to make into a dropdown menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function DropdownMenu(element, options){
	    this.$element = element;
	    this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);
	
	    Foundation.Nest.Feather(this.$element, 'dropdown');
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('DropdownMenu', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ARROW_RIGHT': 'next',
	      'ARROW_UP': 'up',
	      'ARROW_DOWN': 'down',
	      'ARROW_LEFT': 'previous',
	      'ESCAPE': 'close'
	    });
	  }
	
	  /**
	   * Default settings for plugin
	   */
	  DropdownMenu.defaults = {
	    /**
	     * Disallows hover events from opening submenus
	     * @option
	     * @example false
	     */
	    disableHover: false,
	    /**
	     * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
	     * @option
	     * @example true
	     */
	    autoclose: true,
	    /**
	     * Amount of time to delay opening a submenu on hover event.
	     * @option
	     * @example 50
	     */
	    hoverDelay: 50,
	    /**
	     * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
	     * @option
	     * @example true
	     */
	    clickOpen: false,
	    /**
	     * Amount of time to delay closing a submenu on a mouseleave event.
	     * @option
	     * @example 500
	     */
	
	    closingTime: 500,
	    /**
	     * Position of the menu relative to what direction the submenus should open. Handled by JS.
	     * @option
	     * @example 'left'
	     */
	    alignment: 'left',
	    /**
	     * Allow clicks on the body to close any open submenus.
	     * @option
	     * @example true
	     */
	    closeOnClick: true,
	    /**
	     * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
	     * @option
	     * @example 'vertical'
	     */
	    verticalClass: 'vertical',
	    /**
	     * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
	     * @option
	     * @example 'align-right'
	     */
	    rightClass: 'align-right',
	    /**
	     * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
	     * @option
	     * @example false
	     */
	    forceFollow: true
	  };
	  /**
	   * Initializes the plugin, and calls _prepareMenu
	   * @private
	   * @function
	   */
	  DropdownMenu.prototype._init = function(){
	    var subs = this.$element.find('li.is-dropdown-submenu-parent');
	    this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
	
	    this.$menuItems = this.$element.find('[role="menuitem"]');
	    this.$tabs = this.$element.children('[role="menuitem"]');
	    this.isVert = this.$element.hasClass(this.options.verticalClass);
	    this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);
	
	    if(this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right'){
	      this.options.alignment = 'right';
	      subs.addClass('is-left-arrow opens-left');
	    }else{
	      subs.addClass('is-right-arrow opens-right');
	    }
	    if(!this.isVert){
	      this.$tabs.filter('.is-dropdown-submenu-parent').removeClass('is-right-arrow is-left-arrow opens-right opens-left')
	          .addClass('is-down-arrow');
	    }
	    this.changed = false;
	    this._events();
	  };
	  /**
	   * Adds event listeners to elements within the menu
	   * @private
	   * @function
	   */
	  DropdownMenu.prototype._events = function(){
	    var _this = this,
	        hasTouch = 'ontouchstart' in window || (typeof window.ontouchstart !== 'undefined'),
	        parClass = 'is-dropdown-submenu-parent',
	        delay;
	
	    if(this.options.clickOpen || hasTouch){
	      this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', function(e){
	        var $elem = $(e.target).parentsUntil('ul', '.' + parClass),
	            hasSub = $elem.hasClass(parClass),
	            hasClicked = $elem.attr('data-is-click') === 'true',
	            $sub = $elem.children('.is-dropdown-submenu');
	
	        if(hasSub){
	          if(hasClicked){
	            if(!_this.options.closeOnClick || (!_this.options.clickOpen && !hasTouch) || (_this.options.forceFollow && hasTouch)){ return; }
	            else{
	              e.stopImmediatePropagation();
	              e.preventDefault();
	              _this._hide($elem);
	            }
	          }else{
	            e.preventDefault();
	            e.stopImmediatePropagation();
	            _this._show($elem.children('.is-dropdown-submenu'));
	            $elem.add($elem.parentsUntil(_this.$element, '.' + parClass)).attr('data-is-click', true);
	          }
	        }else{ return; }
	      });
	    }
	
	    if(!this.options.disableHover){
	      this.$menuItems.on('mouseenter.zf.dropdownmenu', function(e){
	        e.stopImmediatePropagation();
	        var $elem = $(this),
	            hasSub = $elem.hasClass(parClass);
	
	        if(hasSub){
	          clearTimeout(delay);
	          delay = setTimeout(function(){
	            _this._show($elem.children('.is-dropdown-submenu'));
	          }, _this.options.hoverDelay);
	        }
	      }).on('mouseleave.zf.dropdownmenu', function(e){
	        var $elem = $(this),
	            hasSub = $elem.hasClass(parClass);
	        if(hasSub && _this.options.autoclose){
	          if($elem.attr('data-is-click') === 'true' && _this.options.clickOpen){ return false; }
	
	          // clearTimeout(delay);
	          delay = setTimeout(function(){
	            _this._hide($elem);
	          }, _this.options.closingTime);
	        }
	      });
	    }
	    this.$menuItems.on('keydown.zf.dropdownmenu', function(e){
	      var $element = $(e.target).parentsUntil('ul', '[role="menuitem"]'),
	          isTab = _this.$tabs.index($element) > -1,
	          $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
	          $prevElement,
	          $nextElement;
	
	      $elements.each(function(i) {
	        if ($(this).is($element)) {
	          $prevElement = $elements.eq(i-1);
	          $nextElement = $elements.eq(i+1);
	          return;
	        }
	      });
	
	      var nextSibling = function() {
	        if (!$element.is(':last-child')) $nextElement.children('a:first').focus();
	      }, prevSibling = function() {
	        $prevElement.children('a:first').focus();
	      }, openSub = function() {
	        var $sub = $element.children('ul.is-dropdown-submenu');
	        if($sub.length){
	          _this._show($sub);
	          $element.find('li > a:first').focus();
	        }else{ return; }
	      }, closeSub = function() {
	        //if ($element.is(':first-child')) {
	        var close = $element.parent('ul').parent('li');
	          close.children('a:first').focus();
	          _this._hide(close);
	        //}
	      };
	      var functions = {
	        open: openSub,
	        close: function() {
	          _this._hide(_this.$element);
	          _this.$menuItems.find('a:first').focus(); // focus to first element
	        },
	        handled: function() {
	          e.preventDefault();
	          e.stopImmediatePropagation();
	        }
	      };
	
	      if (isTab) {
	        if (_this.vertical) { // vertical menu
	          if (_this.options.alignment === 'left') { // left aligned
	            $.extend(functions, {
	              down: nextSibling,
	              up: prevSibling,
	              next: openSub,
	              previous: closeSub
	            });
	          } else { // right aligned
	            $.extend(functions, {
	              down: nextSibling,
	              up: prevSibling,
	              next: closeSub,
	              previous: openSub
	            });
	          }
	        } else { // horizontal menu
	          $.extend(functions, {
	            next: nextSibling,
	            previous: prevSibling,
	            down: openSub,
	            up: closeSub
	          });
	        }
	      } else { // not tabs -> one sub
	        if (_this.options.alignment === 'left') { // left aligned
	          $.extend(functions, {
	            next: openSub,
	            previous: closeSub,
	            down: nextSibling,
	            up: prevSibling
	          });
	        } else { // right aligned
	          $.extend(functions, {
	            next: closeSub,
	            previous: openSub,
	            down: nextSibling,
	            up: prevSibling
	          });
	        }
	      }
	      Foundation.Keyboard.handleKey(e, _this, functions);
	
	    });
	  };
	  /**
	   * Adds an event handler to the body to close any dropdowns on a click.
	   * @function
	   * @private
	   */
	  DropdownMenu.prototype._addBodyHandler = function(){
	    var $body = $(document.body),
	        _this = this;
	    $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu')
	         .on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function(e){
	           var $link = _this.$element.find(e.target);
	           if($link.length){ return; }
	
	           _this._hide();
	           $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
	         });
	  };
	  /**
	   * Opens a dropdown pane, and checks for collisions first.
	   * @param {jQuery} $sub - ul element that is a submenu to show
	   * @function
	   * @private
	   * @fires DropdownMenu#show
	   */
	  DropdownMenu.prototype._show = function($sub){
	    var idx = this.$tabs.index(this.$tabs.filter(function(i, el){
	      return $(el).find($sub).length > 0;
	    }));
	    var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
	    this._hide($sibs, idx);
	    $sub.css('visibility', 'hidden').addClass('js-dropdown-active').attr({'aria-hidden': false})
	        .parent('li.is-dropdown-submenu-parent').addClass('is-active')
	        .attr({'aria-selected': true, 'aria-expanded': true});
	    var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
	    if(!clear){
	      var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
	          $parentLi = $sub.parent('.is-dropdown-submenu-parent');
	      $parentLi.removeClass('opens' + oldClass).addClass('opens-' + this.options.alignment);
	      clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
	      if(!clear){
	        $parentLi.removeClass('opens-' + this.options.alignment).addClass('opens-inner');
	      }
	      this.changed = true;
	    }
	    $sub.css('visibility', '');
	    if(this.options.closeOnClick){ this._addBodyHandler(); }
	    /**
	     * Fires when the new dropdown pane is visible.
	     * @event DropdownMenu#show
	     */
	    this.$element.trigger('show.zf.dropdownmenu', [$sub]);
	  };
	  /**
	   * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
	   * @function
	   * @param {jQuery} $elem - element with a submenu to hide
	   * @param {Number} idx - index of the $tabs collection to hide
	   * @private
	   */
	  DropdownMenu.prototype._hide = function($elem, idx){
	    var $toClose;
	    if($elem && $elem.length){
	      $toClose = $elem;
	    }else if(idx !== undefined){
	      $toClose = this.$tabs.not(function(i, el){
	        return i === idx;
	      });
	    }
	    else{
	      $toClose = this.$element;
	    }
	    var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;
	
	    if(somethingToClose){
	      $toClose.find('li.is-active').add($toClose).attr({
	        'aria-selected': false,
	        'aria-expanded': false,
	        'data-is-click': false
	      }).removeClass('is-active');
	
	      $toClose.find('ul.js-dropdown-active').attr({
	        'aria-hidden': true
	      }).removeClass('js-dropdown-active');
	
	      if(this.changed || $toClose.find('opens-inner').length){
	        var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
	        $toClose.find('li.is-dropdown-submenu-parent').add($toClose)
	                .removeClass('opens-inner opens-' + this.options.alignment)
	                .addClass('opens-' + oldClass);
	        this.changed = false;
	      }
	      /**
	       * Fires when the open menus are closed.
	       * @event DropdownMenu#hide
	       */
	      this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
	    }
	  };
	  /**
	   * Destroys the plugin.
	   * @function
	   */
	  DropdownMenu.prototype.destroy = function(){
	    this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click')
	        .removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
	    Foundation.Nest.Burn(this.$element, 'dropdown');
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(DropdownMenu, 'DropdownMenu');
	}(jQuery, window.Foundation);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Equalizer.
	   * @class
	   * @fires Equalizer#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Equalizer(element, options) {
	    this.$element = element;
	    this.options  = $.extend({}, Equalizer.defaults, this.$element.data(), options);
	    this.$window  = $(window);
	    this.name     = 'equalizer';
	    this.attr     = 'data-equalizer';
	
	    this._init();
	    this._events();
	
	    Foundation.registerPlugin(this);
	  }
	
	  /**
	   * Default settings for plugin
	   */
	  Equalizer.defaults = {
	    /**
	     * Enable height equalization when stacked on smaller screens.
	     * @option
	     * @example true
	     */
	    equalizeOnStack: true,
	    /**
	     * Amount of time, in ms, to debounce the size checking/equalization. Lower times mean smoother transitions/less performance on mobile.
	     * @option
	     * @example 50
	     */
	    throttleInterval: 50
	  };
	
	  /**
	   * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
	   * @private
	   */
	  Equalizer.prototype._init = function() {
	    this._reflow();
	  };
	
	  /**
	   * Initializes events for Equalizer.
	   * @private
	   */
	  Equalizer.prototype._events = function() {
	    var self = this;
	
	    this.$window
	      .off('.equalizer')
	      .on('resize.fndtn.equalizer', Foundation.util.throttle(function () {
	        self._reflow();
	      }, self.options.throttleInterval));
	  };
	
	  /**
	   * A noop version for the plugin
	   * @private
	   */
	  Equalizer.prototype._killswitch = function() {
	    return;
	  };
	  /**
	   * Calls necessary functions to update Equalizer upon DOM change
	   * @private
	   */
	  Equalizer.prototype._reflow = function() {
	    var self = this;
	
	    $('[' + this.attr + ']').each(function() {
	      var $eqParent       = $(this),
	          adjustedHeights = [],
	          $images = $eqParent.find('img');
	
	      if ($images.length) {
	        Foundation.onImagesLoaded($images, function() {
	          adjustedHeights = self.getHeights($eqParent);
	          self.applyHeight($eqParent, adjustedHeights);
	        });
	      }
	      else {
	        adjustedHeights = self.getHeights($eqParent);
	        self.applyHeight($eqParent, adjustedHeights);
	      }
	    });
	  };
	  /**
	   * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
	   * @param {Object} $eqParent A jQuery instance of an Equalizer container
	   * @returns {Array} heights An array of heights of children within Equalizer container
	   */
	  Equalizer.prototype.getHeights = function($eqParent) {
	    var eqGroupName = $eqParent.data('equalizer'),
	        eqGroup     = eqGroupName ? $eqParent.find('[' + this.attr + '-watch="' + eqGroupName + '"]:visible') : $eqParent.find('[' + this.attr + '-watch]:visible'),
	        heights;
	
	    eqGroup.height('inherit');
	    heights = eqGroup.map(function () { return $(this).outerHeight(false);}).get();
	    
	    return heights;
	  };
	  /**
	   * Changes the CSS height property of each child in an Equalizer parent to match the tallest
	   * @param {Object} $eqParent - A jQuery instance of an Equalizer container
	   * @param {array} heights - An array of heights of children within Equalizer container
	   * @fires Equalizer#preEqualized
	   * @fires Equalizer#postEqualized
	   */
	  Equalizer.prototype.applyHeight = function($eqParent, heights) {
	    var eqGroupName = $eqParent.data('equalizer'),
	        eqGroup     = eqGroupName ? $eqParent.find('['+this.attr+'-watch="'+eqGroupName+'"]:visible') : $eqParent.find('['+this.attr+'-watch]:visible'),
	        max         = Math.max.apply(null, heights);
	
	    /**
	     * Fires before the heights are applied
	     * @event Equalizer#preEqualized
	     */
	    $eqParent.trigger('preEqualized.zf.Equalizer');
	
	    // for now, apply the max height found in the array
	    for (var i = 0; i < eqGroup.length; i++) {
	      $(eqGroup[i]).css('height', max);
	    }
	
	    /**
	     * Fires when the heights have been applied
	     * @event Equalizer#postEqualized
	     */
	    $eqParent.trigger('postEqualized.zf.Equalizer');
	  };
	  /**
	   * Destroys an instance of Equalizer.
	   * @function
	   */
	  Equalizer.prototype.destroy = function(){
	    //TODO this.
	  };
	
	  Foundation.plugin(Equalizer, 'Equalizer');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Equalizer;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Equalizer;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Interchange module.
	 * @module foundation.interchange
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.timerAndImageLoader
	 */
	!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Interchange.
	   * @class
	   * @fires Interchange#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Interchange(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Interchange.defaults, options);
	    this.rules = [];
	    this.currentPath = '';
	
	    this._init();
	    this._events();
	
	    Foundation.registerPlugin(this);
	  }
	
	  /**
	   * Default settings for plugin
	   */
	  Interchange.defaults = {
	    /**
	     * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
	     * @option
	     */
	    rules: null
	  };
	
	  Interchange.SPECIAL_QUERIES = {
	    'landscape': 'screen and (orientation: landscape)',
	    'portrait': 'screen and (orientation: portrait)',
	    'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
	  };
	
	  /**
	   * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
	   * @function
	   * @private
	   */
	  Interchange.prototype._init = function() {
	    this._addBreakpoints();
	    this._generateRules();
	    this._reflow();
	  };
	
	  /**
	   * Initializes events for Interchange.
	   * @function
	   * @private
	   */
	  Interchange.prototype._events = function() {
	    $(window).on('resize.fndtn.interchange', Foundation.util.throttle(this._reflow.bind(this), 50));
	  };
	
	  /**
	   * Calls necessary functions to update Interchange upon DOM change
	   * @function
	   * @private
	   */
	  Interchange.prototype._reflow = function() {
	    var match;
	
	    // Iterate through each rule, but only save the last match
	    for (var i in this.rules) {
	      var rule = this.rules[i];
	
	      if (window.matchMedia(rule.query).matches) {
	        match = rule;
	      }
	    }
	
	    if (match) {
	      this.replace(match.path);
	    }
	  };
	
	  /**
	   * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
	   * @function
	   * @private
	   */
	  Interchange.prototype._addBreakpoints = function() {
	    for (var i in Foundation.MediaQuery.queries) {
	      var query = Foundation.MediaQuery.queries[i];
	      Interchange.SPECIAL_QUERIES[query.name] = query.value;
	    }
	  };
	
	  /**
	   * Checks the Interchange element for the provided media query + content pairings
	   * @function
	   * @private
	   * @param {Object} element - jQuery object that is an Interchange instance
	   * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
	   */
	  Interchange.prototype._generateRules = function() {
	    var rulesList = [];
	    var rules;
	
	    if (this.options.rules) {
	      rules = this.options.rules;
	    }
	    else {
	      rules = this.$element.data('interchange').match(/\[.*?\]/g);
	    }
	
	    for (var i in rules) {
	      var rule = rules[i].slice(1, -1).split(', ');
	      var path = rule.slice(0, -1).join('');
	      var query = rule[rule.length - 1];
	
	      if (Interchange.SPECIAL_QUERIES[query]) {
	        query = Interchange.SPECIAL_QUERIES[query];
	      }
	
	      rulesList.push({
	        path: path,
	        query: query
	      });
	    }
	
	    this.rules = rulesList;
	  };
	
	  /**
	   * Update the `src` property of an image, or change the HTML of a container, to the specified path.
	   * @function
	   * @param {String} path - Path to the image or HTML partial.
	   * @fires Interchange#replaced
	   */
	  Interchange.prototype.replace = function(path) {
	    if (this.currentPath === path) return;
	
	    var _this = this;
	
	    // Replacing images
	    if (this.$element[0].nodeName === 'IMG') {
	      this.$element.attr('src', path).load(function() {
	        _this.$element.trigger('replaced.zf.interchange');
	        _this.currentPath = path;
	      });
	    }
	    // Replacing background images
	    else if (path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)) {
	      this.$element.css({ 'background-image': 'url('+path+')' });
	    }
	    // Replacing HTML
	    else {
	      $.get(path, function(response) {
	        _this.$element.html(response);
	        _this.$element.trigger('replaced.zf.interchange');
	        _this.currentPath = path;
	      });
	    }
	  };
	  /**
	   * Destroys an instance of interchange.
	   * @function
	   */
	  Interchange.prototype.destroy = function(){
	    //TODO this.
	  };
	  Foundation.plugin(Interchange, 'Interchange');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Interchange;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Interchange;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Magellan module.
	 * @module foundation.magellan
	 */
	!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Magellan.
	   * @class
	   * @fires Magellan#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Magellan(element, options) {
	    this.$element = element;
	    this.options  = $.extend({}, Magellan.defaults, this.$element.data(), options);
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	  }
	
	  /**
	   * Default settings for plugin
	   */
	  Magellan.defaults = {
	    /**
	     * Amount of time, in ms, the animated scrolling should take between locations.
	     * @option
	     * @example 500
	     */
	    animationDuration: 500,
	    /**
	     * Animation style to use when scrolling between locations.
	     * @option
	     * @example 'ease-in-out'
	     */
	    animationEasing: 'linear',
	    /**
	     * Number of pixels to use as a marker for location changes.
	     * @option
	     * @example 50
	     */
	    threshold: 50,
	    /**
	     * Class applied to the active locations link on the magellan container.
	     * @option
	     * @example 'active'
	     */
	    activeClass: 'active',
	    /**
	     * Allows the script to manipulate the url of the current page, and if supported, alter the history.
	     * @option
	     * @example true
	     */
	    deepLinking: false,
	    /**
	     * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
	     * @option
	     * @example 25
	     */
	    barOffset: 0
	  };
	
	  /**
	   * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
	   * @private
	   */
	  Magellan.prototype._init = function() {
	    var id = this.$element[0].id || Foundation.GetYoDigits(6, 'magellan'),
	        _this = this;
	    this.$targets = $('[data-magellan-target]');
	    this.$links = this.$element.find('a');
	    this.$element.attr({
	      'data-resize': id,
	      'data-scroll': id,
	      'id': id
	    });
	    this.$active = $();
	    this.scrollPos = parseInt(window.pageYOffset, 10);
	
	    this._events();
	  };
	  /**
	   * Calculates an array of pixel values that are the demarcation lines between locations on the page.
	   * Can be invoked if new elements are added or the size of a location changes.
	   * @function
	   */
	  Magellan.prototype.calcPoints = function(){
	    var _this = this,
	        body = document.body,
	        html = document.documentElement;
	
	    this.points = [];
	    this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
	    this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
	
	    this.$targets.each(function(){
	      var $tar = $(this),
	          pt = Math.round($tar.offset().top - _this.options.threshold);
	      $tar.targetPoint = pt;
	      _this.points.push(pt);
	    });
	  };
	  /**
	   * Initializes events for Magellan.
	   * @private
	   */
	  Magellan.prototype._events = function() {
	    var _this = this,
	        $body = $('html, body'),
	        opts = {
	          duration: _this.options.animationDuration,
	          easing:   _this.options.animationEasing
	        };
	
	    $(window).one('load', function(){
	      _this.calcPoints();
	      _this._updateActive();
	    });
	
	    this.$element.on({
	      'resizeme.zf.trigger': this.reflow.bind(this),
	      'scrollme.zf.trigger': this._updateActive.bind(this)
	    }).on('click.zf.magellan', 'a[href^="#"]', function(e) {
	        e.preventDefault();
	        var arrival   = this.getAttribute('href'),
	            scrollPos = $(arrival).offset().top - _this.options.threshold / 2 - _this.options.barOffset;
	
	        // requestAnimationFrame is disabled for this plugin currently
	        // Foundation.Move(_this.options.animationDuration, $body, function(){
	          $body.stop(true).animate({
	            scrollTop: scrollPos
	          }, opts);
	        });
	      // });
	  };
	  /**
	   * Calls necessary functions to update Magellan upon DOM change
	   * @function
	   */
	  Magellan.prototype.reflow = function(){
	    this.calcPoints();
	    this._updateActive();
	  };
	  /**
	   * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
	   * @private
	   * @function
	   * @fires Magellan#update
	   */
	  Magellan.prototype._updateActive = function(/*evt, elem, scrollPos*/){
	    var winPos = /*scrollPos ||*/ parseInt(window.pageYOffset, 10),
	        curIdx;
	
	    if(winPos + this.winHeight === this.docHeight){ curIdx = this.points.length - 1; }
	    else if(winPos < this.points[0]){ curIdx = 0; }
	    else{
	      var isDown = this.scrollPos < winPos,
	          _this = this,
	          curVisible = this.points.filter(function(p, i){
	            return isDown ? p <= winPos : p - _this.options.threshold <= winPos;//&& winPos >= _this.points[i -1] - _this.options.threshold;
	          });
	      curIdx = curVisible.length ? curVisible.length - 1 : 0;
	    }
	
	    this.$active.removeClass(this.options.activeClass);
	    this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass);
	
	    if(this.options.deepLinking){
	      var hash = this.$active[0].getAttribute('href');
	      if(window.history.pushState){
	        window.history.pushState(null, null, hash);
	      }else{
	        window.location.hash = hash;
	      }
	    }
	
	    this.scrollPos = winPos;
	    /**
	     * Fires when magellan is finished updating to the new active element.
	     * @event Magellan#update
	     */
	    this.$element.trigger('update.zf.magellan', [this.$active]);
	  };
	  /**
	   * Destroys an instance of Magellan and resets the url of the window.
	   * @function
	   */
	  Magellan.prototype.destroy = function(){
	    this.$element.off('.zf.trigger .zf.magellan')
	        .find('.' + this.options.activeClass).removeClass(this.options.activeClass);
	
	    if(this.options.deepLinking){
	      var hash = this.$active[0].getAttribute('href');
	      window.location.hash.replace(hash, '');
	    }
	
	    Foundation.unregisterPlugin(this);
	  };
	  Foundation.plugin(Magellan, 'Magellan');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Magellan;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Magellan;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * OffCanvas module.
	 * @module foundation.offcanvas
	 * @requires foundation.util.triggers
	 * @requires foundation.util.motion
	 */
	!function($, Foundation) {
	
	'use strict';
	
	/**
	 * Creates a new instance of an off-canvas wrapper.
	 * @class
	 * @fires OffCanvas#init
	 * @param {Object} element - jQuery object to initialize.
	 * @param {Object} options - Overrides to the default plugin settings.
	 */
	function OffCanvas(element, options) {
	  this.$element = element;
	  this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
	  this.$lastTrigger = $();
	
	  this._init();
	  this._events();
	
	  Foundation.registerPlugin(this);
	}
	
	OffCanvas.defaults = {
	  /**
	   * Allow the user to click outside of the menu to close it.
	   * @option
	   * @example true
	   */
	  closeOnClick: true,
	  /**
	   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
	   * @option
	   * @example 500
	   */
	  transitionTime: 0,
	  /**
	   * Direction the offcanvas opens from. Determines class applied to body.
	   * @option
	   * @example left
	   */
	  position: 'left',
	  /**
	   * Force the page to scroll to top on open.
	   */
	  forceTop: true,
	  /**
	   * Allow the offcanvas to be sticky while open. Does nothing if Sass option `$maincontent-prevent-scroll === true`.
	   * Performance in Safari OSX/iOS is not great.
	   */
	  // isSticky: false,
	  /**
	   * Allow the offcanvas to remain open for certain breakpoints. Can be used with `isSticky`.
	   * @option
	   * @example false
	   */
	  isRevealed: false,
	  /**
	   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class @`revealClass`.
	   * @option
	   * @example reveal-for-large
	   */
	  revealOn: null,
	  /**
	   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
	   * @option
	   * @example true
	   */
	  autoFocus: true,
	  /**
	   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
	   * @option
	   * TODO improve the regex testing for this.
	   * @example reveal-for-large
	   */
	  revealClass: 'reveal-for-'
	};
	
	/**
	 * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
	 * @function
	 * @private
	 */
	OffCanvas.prototype._init = function() {
	  var id = this.$element.attr('id');
	
	  this.$element.attr('aria-hidden', 'true');
	
	  // Find triggers that affect this element and add aria-expanded to them
	  $(document)
	    .find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
	    .attr('aria-expanded', 'false')
	    .attr('aria-controls', id);
	
	  // Add a close trigger over the body if necessary
	  if (this.options.closeOnClick){
	    if($('.js-off-canvas-exit').length){
	      this.$exiter = $('.js-off-canvas-exit');
	    }else{
	      var exiter = document.createElement('div');
	      exiter.setAttribute('class', 'js-off-canvas-exit');
	      $('[data-off-canvas-content]').append(exiter);
	
	      this.$exiter = $(exiter);
	    }
	  }
	
	  this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);
	
	  if(this.options.isRevealed){
	    this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
	    this._setMQChecker();
	  }
	  if(!this.options.transitionTime){
	    this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas-wrapper]')[0]).transitionDuration) * 1000;
	  }
	};
	
	/**
	 * Adds event handlers to the off-canvas wrapper and the exit overlay.
	 * @function
	 * @private
	 */
	OffCanvas.prototype._events = function() {
	  this.$element.on({
	    'open.zf.trigger': this.open.bind(this),
	    'close.zf.trigger': this.close.bind(this),
	    'toggle.zf.trigger': this.toggle.bind(this),
	    'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
	  });
	
	  if (this.$exiter.length) {
	    var _this = this;
	    this.$exiter.on({'click.zf.offcanvas': this.close.bind(this)});
	  }
	};
	/**
	 * Applies event listener for elements that will reveal at certain breakpoints.
	 * @private
	 */
	OffCanvas.prototype._setMQChecker = function(){
	  var _this = this;
	
	  $(window).on('changed.zf.mediaquery', function(){
	    if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
	      _this.reveal(true);
	    }else{
	      _this.reveal(false);
	    }
	  }).one('load.zf.offcanvas', function(){
	    if(Foundation.MediaQuery.atLeast(_this.options.revealOn)){
	      _this.reveal(true);
	    }
	  });
	};
	/**
	 * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
	 * @param {Boolean} isRevealed - true if element should be revealed.
	 * @function
	 */
	OffCanvas.prototype.reveal = function(isRevealed){
	  var $closer = this.$element.find('[data-close]');
	  if(isRevealed){
	    // if(!this.options.forceTop){
	    //   var scrollPos = parseInt(window.pageYOffset);
	    //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
	    // }
	    // if(this.options.isSticky){ this._stick(); }
	    if($closer.length){ $closer.hide(); }
	  }else{
	    // if(this.options.isSticky || !this.options.forceTop){
	    //   this.$element[0].style.transform = '';
	    //   $(window).off('scroll.zf.offcanvas');
	    // }
	    if($closer.length){
	      $closer.show();
	    }
	  }
	};
	
	/**
	 * Opens the off-canvas menu.
	 * @function
	 * @param {Object} event - Event object passed from listener.
	 * @param {jQuery} trigger - element that triggered the off-canvas to open.
	 * @fires OffCanvas#opened
	 */
	OffCanvas.prototype.open = function(event, trigger) {
	  if (this.$element.hasClass('is-open')){ return; }
	  var _this = this,
	      $body = $(document.body);
	  $('body').scrollTop(0);
	  // window.pageYOffset = 0;
	
	  // if(!this.options.forceTop){
	  //   var scrollPos = parseInt(window.pageYOffset);
	  //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
	  //   if(this.$exiter.length){
	  //     this.$exiter[0].style.transform = 'translate(0,' + scrollPos + 'px)';
	  //   }
	  // }
	  /**
	   * Fires when the off-canvas menu opens.
	   * @event OffCanvas#opened
	   */
	  Foundation.Move(this.options.transitionTime, this.$element, function(){
	    $('[data-off-canvas-wrapper]').addClass('is-off-canvas-open is-open-'+ _this.options.position);
	
	    _this.$element
	      .addClass('is-open')
	      .attr('aria-hidden', 'false')
	      .trigger('opened.zf.offcanvas');
	
	    // if(_this.options.isSticky){
	    //   _this._stick();
	    // }
	  });
	  if(trigger){
	    this.$lastTrigger = trigger.attr('aria-expanded', 'true');
	  }
	  if(this.options.autoFocus){
	    this.$element.one('finished.zf.animate', function(){
	      _this.$element.find('a, button').eq(0).focus();
	    });
	  }
	};
	/**
	 * Allows the offcanvas to appear sticky utilizing translate properties.
	 * @private
	 */
	// OffCanvas.prototype._stick = function(){
	//   var elStyle = this.$element[0].style;
	//
	//   if(this.options.closeOnClick){
	//     var exitStyle = this.$exiter[0].style;
	//   }
	//
	//   $(window).on('scroll.zf.offcanvas', function(e){
	//     console.log(e);
	//     var pageY = window.pageYOffset;
	//     elStyle.transform = 'translate(0,' + pageY + 'px)';
	//     if(exitStyle !== undefined){ exitStyle.transform = 'translate(0,' + pageY + 'px)'; }
	//   });
	//   // this.$element.trigger('stuck.zf.offcanvas');
	// };
	/**
	 * Closes the off-canvas menu.
	 * @function
	 * @fires OffCanvas#closed
	 */
	OffCanvas.prototype.close = function() {
	  if(!this.$element.hasClass('is-open')){ return; }
	
	  var _this = this;
	
	   Foundation.Move(this.options.transitionTime, this.$element, function(){
	    $('[data-off-canvas-wrapper]').removeClass('is-off-canvas-open is-open-'+_this.options.position);
	
	    _this.$element.removeClass('is-open');
	    // Foundation._reflow();
	  });
	  this.$element.attr('aria-hidden', 'true')
	    /**
	     * Fires when the off-canvas menu opens.
	     * @event OffCanvas#closed
	     */
	      .trigger('closed.zf.offcanvas');
	  // if(_this.options.isSticky || !_this.options.forceTop){
	  //   setTimeout(function(){
	  //     _this.$element[0].style.transform = '';
	  //     $(window).off('scroll.zf.offcanvas');
	  //   }, this.options.transitionTime);
	  // }
	
	  this.$lastTrigger.attr('aria-expanded', 'false');
	};
	
	/**
	 * Toggles the off-canvas menu open or closed.
	 * @function
	 * @param {Object} event - Event object passed from listener.
	 * @param {jQuery} trigger - element that triggered the off-canvas to open.
	 */
	OffCanvas.prototype.toggle = function(event, trigger) {
	  if (this.$element.hasClass('is-open')) {
	    this.close(event, trigger);
	  }
	  else {
	    this.open(event, trigger);
	  }
	};
	
	/**
	 * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
	 * @function
	 * @private
	 */
	OffCanvas.prototype._handleKeyboard = function(event) {
	  if (event.which !== 27) return;
	
	  event.stopPropagation();
	  event.preventDefault();
	  this.close();
	  this.$lastTrigger.focus();
	};
	/**
	 * Destroys the offcanvas plugin.
	 * @function
	 */
	OffCanvas.prototype.destroy = function(){
	  //TODO make this...
	};
	
	Foundation.plugin(OffCanvas, 'OffCanvas');
	
	}(jQuery, Foundation);


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Orbit module.
	 * @module foundation.orbit
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 * @requires foundation.util.timerAndImageLoader
	 * @requires foundation.util.touch
	 */
	!function($, Foundation){
	  'use strict';
	  /**
	   * Creates a new instance of an orbit carousel.
	   * @class
	   * @param {jQuery} element - jQuery object to make into an accordion menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Orbit(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Orbit', {
	        'ltr': {
	          'ARROW_RIGHT': 'next',
	          'ARROW_LEFT': 'previous'
	        },
	        'rtl': {
	          'ARROW_LEFT': 'next',
	          'ARROW_RIGHT': 'previous'
	        }
	    });
	  }
	  Orbit.defaults = {
	    /**
	     * Tells the JS to loadBullets.
	     * @option
	     * @example true
	     */
	    bullets: true,
	    /**
	     * Tells the JS to apply event listeners to nav buttons
	     * @option
	     * @example true
	     */
	    navButtons: true,
	    /**
	     * motion-ui animation class to apply
	     * @option
	     * @example 'slide-in-right'
	     */
	    animInFromRight: 'slide-in-right',
	    /**
	     * motion-ui animation class to apply
	     * @option
	     * @example 'slide-out-right'
	     */
	    animOutToRight: 'slide-out-right',
	    /**
	     * motion-ui animation class to apply
	     * @option
	     * @example 'slide-in-left'
	     *
	     */
	    animInFromLeft: 'slide-in-left',
	    /**
	     * motion-ui animation class to apply
	     * @option
	     * @example 'slide-out-left'
	     */
	    animOutToLeft: 'slide-out-left',
	    /**
	     * Allows Orbit to automatically animate on page load.
	     * @option
	     * @example true
	     */
	    autoPlay: true,
	    /**
	     * Amount of time, in ms, between slide transitions
	     * @option
	     * @example 5000
	     */
	    timerDelay: 5000,
	    /**
	     * Allows Orbit to infinitely loop through the slides
	     * @option
	     * @example true
	     */
	    infiniteWrap: true,
	    /**
	     * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
	     * @option
	     * @example true
	     */
	    swipe: true,
	    /**
	     * Allows the timing function to pause animation on hover.
	     * @option
	     * @example true
	     */
	    pauseOnHover: true,
	    /**
	     * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
	     * @option
	     * @example true
	     */
	    accessible: true,
	    /**
	     * Class applied to the container of Orbit
	     * @option
	     * @example 'orbit-container'
	     */
	    containerClass: 'orbit-container',
	    /**
	     * Class applied to individual slides.
	     * @option
	     * @example 'orbit-slide'
	     */
	    slideClass: 'orbit-slide',
	    /**
	     * Class applied to the bullet container. You're welcome.
	     * @option
	     * @example 'orbit-bullets'
	     */
	    boxOfBullets: 'orbit-bullets',
	    /**
	     * Class applied to the `next` navigation button.
	     * @option
	     * @example 'orbit-next'
	     */
	    nextClass: 'orbit-next',
	    /**
	     * Class applied to the `previous` navigation button.
	     * @option
	     * @example 'orbit-previous'
	     */
	    prevClass: 'orbit-previous',
	    /**
	     * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatability.
	     * @option
	     * @example true
	     */
	    useMUI: true
	  };
	  /**
	   * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
	   * @function
	   * @private
	   */
	  Orbit.prototype._init = function(){
	    this.$wrapper = this.$element.find('.' + this.options.containerClass);
	    this.$slides = this.$element.find('.' + this.options.slideClass);
	    var $images = this.$element.find('img'),
	        initActive = this.$slides.filter('.is-active');
	
	    if(!initActive.length){
	      this.$slides.eq(0).addClass('is-active');
	    }
	    if(!this.options.useMUI){
	      this.$slides.addClass('no-motionui');
	    }
	    if($images.length){
	      Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
	    }else{
	      this._prepareForOrbit();//hehe
	    }
	
	    if(this.options.bullets){
	      this._loadBullets();
	    }
	
	    this._events();
	
	    if(this.options.autoPlay){
	      this.geoSync();
	    }
	    if(this.options.accessible){ // allow wrapper to be focusable to enable arrow navigation
	      this.$wrapper.attr('tabindex', 0);
	    }
	  };
	  /**
	   * Creates a jQuery collection of bullets, if they are being used.
	   * @function
	   * @private
	   */
	  Orbit.prototype._loadBullets = function(){
	    this.$bullets = this.$element.find('.' + this.options.boxOfBullets).find('button');
	  };
	  /**
	   * Sets a `timer` object on the orbit, and starts the counter for the next slide.
	   * @function
	   */
	  Orbit.prototype.geoSync = function(){
	    var _this = this;
	    this.timer = new Foundation.Timer(
	                      this.$element,
	                      {duration: this.options.timerDelay,
	                       infinite: false},
	                      function(){
	                        _this.changeSlide(true);
	                      });
	    this.timer.start();
	  };
	  /**
	   * Sets wrapper and slide heights for the orbit.
	   * @function
	   * @private
	   */
	  Orbit.prototype._prepareForOrbit = function(){
	    var _this = this;
	    this._setWrapperHeight(function(max){
	      _this._setSlideHeight(max);
	    });
	  };
	  /**
	   * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
	   * @function
	   * @private
	   * @param {Function} cb - a callback function to fire when complete.
	   */
	  Orbit.prototype._setWrapperHeight = function(cb){//rewrite this to `for` loop
	    var max = 0, temp, counter = 0;
	
	    this.$slides.each(function(){
	      temp = this.getBoundingClientRect().height;
	      $(this).attr('data-slide', counter);
	
	      if(counter){//if not the first slide, set css position and display property
	        $(this).css({'position': 'relative', 'display': 'none'});
	      }
	      max = temp > max ? temp : max;
	      counter++;
	    });
	
	    if(counter === this.$slides.length){
	      this.$wrapper.css({'height': max});//only change the wrapper height property once.
	      cb(max);//fire callback with max height dimension.
	    }
	  };
	  /**
	   * Sets the max-height of each slide.
	   * @function
	   * @private
	   */
	  Orbit.prototype._setSlideHeight = function(height){
	    this.$slides.each(function(){
	      $(this).css('max-height', height);
	    });
	  };
	  /**
	   * Adds event listeners to basically everything within the element.
	   * @function
	   * @private
	   */
	  Orbit.prototype._events = function(){
	    var _this = this;
	
	    //***************************************
	    //**Now using custom event - thanks to:**
	    //**      Yohai Ararat of Toronto      **
	    //***************************************
	    if(this.options.swipe){
	      this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit')
	      .on('swipeleft.zf.orbit', function(e){
	        e.preventDefault();
	        _this.changeSlide(true);
	      }).on('swiperight.zf.orbit', function(e){
	        e.preventDefault();
	        _this.changeSlide(false);
	      });
	    }
	    //***************************************
	
	    if(this.options.autoPlay){
	      this.$slides.on('click.zf.orbit', function(){
	        _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
	        _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
	      });
	      if(this.options.pauseOnHover){
	        this.$element.on('mouseenter.zf.orbit', function(){
	          _this.timer.pause();
	        }).on('mouseleave.zf.orbit', function(){
	          if(!_this.$element.data('clickedOn')){
	            _this.timer.start();
	          }
	        });
	      }
	    }
	
	    if(this.options.navButtons){
	      var $controls = this.$element.find('.' + this.options.nextClass + ', .' + this.options.prevClass);
	      $controls.attr('tabindex', 0)
	        //also need to handle enter/return and spacebar key presses
	               .on('click.zf.orbit touchend.zf.orbit', function(){
	                 _this.changeSlide($(this).hasClass(_this.options.nextClass));
	               });
	    }
	
	    if(this.options.bullets){
	      this.$bullets.on('click.zf.orbit touchend.zf.orbit', function(){
	        if(/is-active/g.test(this.className)){ return false; }//if this is active, kick out of function.
	        var idx = $(this).data('slide'),
	            ltr = idx > _this.$slides.filter('.is-active').data('slide'),
	            $slide = _this.$slides.eq(idx);
	
	        _this.changeSlide(ltr, $slide, idx);
	      });
	    }
	
	    this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function(e){
	      // handle keyboard event with keyboard util
	      Foundation.Keyboard.handleKey(e, _this, {
	        next: function() {
	          _this.changeSlide(true);
	        },
	        previous: function() {
	          _this.changeSlide(false);
	        },
	        handled: function() { // if bullet is focused, make sure focus moves
	          if ($(e.target).is(_this.$bullets)) {
	            _this.$bullets.filter('.is-active').focus();
	          }
	        }
	      });
	    });
	  };
	  /**
	   * Changes the current slide to a new one.
	   * @function
	   * @param {Boolean} isLTR - flag if the slide should move left to right.
	   * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
	   * @param {Number} idx - the index of the new slide in its collection, if one chosen.
	   * @fires Orbit#slidechange
	   */
	  Orbit.prototype.changeSlide = function(isLTR, chosenSlide, idx){
	    var $curSlide = this.$slides.filter('.is-active').eq(0);
	
	    if(/mui/g.test($curSlide[0].className)){ return false; }//if the slide is currently animating, kick out of the function
	
	    var $firstSlide = this.$slides.first(),
	        $lastSlide = this.$slides.last(),
	        dirIn = isLTR ? 'Right' : 'Left',
	        dirOut = isLTR ? 'Left' : 'Right',
	        _this = this,
	        $newSlide;
	
	    if(!chosenSlide){//most of the time, this will be auto played or clicked from the navButtons.
	      $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
	                    (this.options.infiniteWrap ? $curSlide.next('.' + this.options.slideClass).length ? $curSlide.next('.' + this.options.slideClass) : $firstSlide : $curSlide.next('.' + this.options.slideClass))//pick next slide if moving left to right
	                    :
	                    (this.options.infiniteWrap ? $curSlide.prev('.' + this.options.slideClass).length ? $curSlide.prev('.' + this.options.slideClass) : $lastSlide : $curSlide.prev('.' + this.options.slideClass));//pick prev slide if moving right to left
	    }else{
	      $newSlide = chosenSlide;
	    }
	    if($newSlide.length){
	      if(this.options.bullets){
	        idx = idx || this.$slides.index($newSlide);//grab index to update bullets
	        this._updateBullets(idx);
	      }
	      if(this.options.useMUI){
	
	        Foundation.Motion.animateIn(
	          $newSlide.addClass('is-active').css({'position': 'absolute', 'top': 0}),
	          this.options['animInFrom' + dirIn],
	          function(){
	            $newSlide.css({'position': 'relative', 'display': 'block'})
	                     .attr('aria-live', 'polite');
	          });
	
	        Foundation.Motion.animateOut(
	          $curSlide.removeClass('is-active'),
	          this.options['animOutTo' + dirOut],
	          function(){
	            $curSlide.removeAttr('aria-live');
	            if(_this.options.autoPlay){
	              _this.timer.restart();
	            }
	            //do stuff?
	          });
	      }else{
	        $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
	        $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
	        if(this.options.autoPlay){
	          this.timer.restart();
	        }
	      }
	      /**
	       * Triggers when the slide has finished animating in.
	       * @event Orbit#slidechange
	       */
	      this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
	    }
	  };
	  /**
	   * Updates the active state of the bullets, if displayed.
	   * @function
	   * @private
	   * @param {Number} idx - the index of the current slide.
	   */
	  Orbit.prototype._updateBullets = function(idx){
	    var $oldBullet = this.$element.find('.' + this.options.boxOfBullets)
	                                  .find('.is-active').removeClass('is-active').blur(),
	        span = $oldBullet.find('span:last').detach(),
	        $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
	  };
	  /**
	   * Destroys the carousel and hides the element.
	   * @function
	   */
	  Orbit.prototype.destroy = function(){
	    delete this.timer;
	    this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Orbit, 'Orbit');
	
	}(jQuery, window.Foundation);


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * ResponsiveMenu module.
	 * @module foundation.responsiveMenu
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.accordionMenu
	 * @requires foundation.util.drilldown
	 * @requires foundation.util.dropdown-menu
	 */
	!function(Foundation, $) {
	  'use strict';
	
	  // The plugin matches the plugin classes with these plugin instances.
	  var MenuPlugins = {
	    dropdown: {
	      cssClass: 'dropdown',
	      plugin: Foundation._plugins['dropdown-menu'] || null
	    },
	    drilldown: {
	      cssClass: 'drilldown',
	      plugin: Foundation._plugins['drilldown'] || null
	    },
	    accordion: {
	      cssClass: 'accordion-menu',
	      plugin: Foundation._plugins['accordion-menu'] || null
	    }
	  };
	
	  // [PH] Media queries
	  var phMedia = {
	    small: '(min-width: 0px)',
	    medium: '(min-width: 640px)'
	  };
	
	  /**
	   * Creates a new instance of a responsive menu.
	   * @class
	   * @fires ResponsiveMenu#init
	   * @param {jQuery} element - jQuery object to make into a dropdown menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function ResponsiveMenu(element) {
	    this.$element = $(element);
	    this.rules = this.$element.data('responsive-menu');
	    this.currentMq = null;
	    this.currentPlugin = null;
	
	    this._init();
	    this._events();
	
	    Foundation.registerPlugin(this);
	  }
	
	  ResponsiveMenu.defaults = {};
	
	  /**
	   * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
	   * @function
	   * @private
	   */
	  ResponsiveMenu.prototype._init = function() {
	    var rulesTree = {};
	
	    // Parse rules from "classes" in data attribute
	    var rules = this.rules.split(' ');
	
	    // Iterate through every rule found
	    for (var i = 0; i < rules.length; i++) {
	      var rule = rules[i].split('-');
	      var ruleSize = rule.length > 1 ? rule[0] : 'small';
	      var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
	
	      if (MenuPlugins[rulePlugin] !== null) {
	        rulesTree[ruleSize] = MenuPlugins[rulePlugin];
	      }
	    }
	
	    this.rules = rulesTree;
	
	    if (!$.isEmptyObject(rulesTree)) {
	      this._checkMediaQueries();
	    }
	  };
	
	  /**
	   * Initializes events for the Menu.
	   * @function
	   * @private
	   */
	  ResponsiveMenu.prototype._events = function() {
	    var _this = this;
	
	    $(window).on('changed.zf.mediaquery', function() {
	      _this._checkMediaQueries();
	    });
	    // $(window).on('resize.zf.ResponsiveMenu', function() {
	    //   _this._checkMediaQueries();
	    // });
	  };
	
	  /**
	   * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
	   * @function
	   * @private
	   */
	  ResponsiveMenu.prototype._checkMediaQueries = function() {
	    var matchedMq, _this = this;
	    // Iterate through each rule and find the last matching rule
	    $.each(this.rules, function(key) {
	      if (Foundation.MediaQuery.atLeast(key)) {
	        matchedMq = key;
	      }
	    });
	
	    // No match? No dice
	    if (!matchedMq) return;
	
	    // Plugin already initialized? We good
	    if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
	
	    // Remove existing plugin-specific CSS classes
	    $.each(MenuPlugins, function(key, value) {
	      _this.$element.removeClass(value.cssClass);
	    });
	
	    // Add the CSS class for the new plugin
	    this.$element.addClass(this.rules[matchedMq].cssClass);
	
	    // Create an instance of the new plugin
	    if (this.currentPlugin) this.currentPlugin.destroy();
	    this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
	  };
	
	  /**
	   * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
	   * @function
	   */
	  ResponsiveMenu.prototype.destroy = function() {
	    this.currentPlugin.destroy();
	    $(window).off('.zf.ResponsiveMenu');
	    Foundation.unregisterPlugin(this);
	  };
	  Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
	
	}(Foundation, jQuery);


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * ResponsiveToggle module.
	 * @module foundation.responsiveToggle
	 * @requires foundation.util.mediaQuery
	 */
	!function($, Foundation) {
	
	'use strict';
	
	/**
	 * Creates a new instance of Tab Bar.
	 * @class
	 * @fires ResponsiveToggle#init
	 * @param {jQuery} element - jQuery object to attach tab bar functionality to.
	 * @param {Object} options - Overrides to the default plugin settings.
	 */
	function ResponsiveToggle(element, options) {
	  this.$element = $(element);
	  this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
	
	  this._init();
	  this._events();
	
	  Foundation.registerPlugin(this);
	}
	
	ResponsiveToggle.defaults = {
	  /**
	   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
	   * @option
	   * @example 'medium'
	   */
	  hideFor: 'medium'
	};
	
	/**
	 * Initializes the tab bar by finding the target element, toggling element, and running update().
	 * @function
	 * @private
	 */
	ResponsiveToggle.prototype._init = function() {
	  var targetID = this.$element.data('responsive-toggle');
	  if (!targetID) {
	    console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
	  }
	
	  this.$targetMenu = $('#'+targetID);
	  this.$toggler = this.$element.find('[data-toggle]');
	
	  this._update();
	};
	
	/**
	 * Adds necessary event handlers for the tab bar to work.
	 * @function
	 * @private
	 */
	ResponsiveToggle.prototype._events = function() {
	  var _this = this;
	
	  $(window).on('changed.zf.mediaquery', this._update.bind(this));
	
	  this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
	};
	
	/**
	 * Checks the current media query to determine if the tab bar should be visible or hidden.
	 * @function
	 * @private
	 */
	ResponsiveToggle.prototype._update = function() {
	  // Mobile
	  if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
	    this.$element.show();
	    this.$targetMenu.hide();
	  }
	
	  // Desktop
	  else {
	    this.$element.hide();
	    this.$targetMenu.show();
	  }
	};
	
	/**
	 * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
	 * @function
	 * @fires ResponsiveToggle#toggled
	 */
	ResponsiveToggle.prototype.toggleMenu = function() {
	  if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
	    this.$targetMenu.toggle(0);
	
	    /**
	     * Fires when the element attached to the tab bar toggles.
	     * @event ResponsiveToggle#toggled
	     */
	    this.$element.trigger('toggled.zf.responsiveToggle');
	  }
	};
	ResponsiveToggle.prototype.destroy = function(){
	  //TODO this...
	};
	Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
	
	}(jQuery, Foundation);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Reveal module.
	 * @module foundation.reveal
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion if using animations
	 */
	!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Reveal.
	   * @class
	   * @param {jQuery} element - jQuery object to use for the modal.
	   * @param {Object} options - optional parameters.
	   */
	
	  function Reveal(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Reveal', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ESCAPE': 'close',
	      'TAB': 'tab_forward',
	      'SHIFT_TAB': 'tab_backward'
	    });
	  }
	
	  Reveal.defaults = {
	    /**
	     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	     * @option
	     * @example 'slide-in-left'
	     */
	    animationIn: '',
	    /**
	     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	     * @option
	     * @example 'slide-out-right'
	     */
	    animationOut: '',
	    /**
	     * Time, in ms, to delay the opening of a modal after a click if no animation used.
	     * @option
	     * @example 10
	     */
	    showDelay: 0,
	    /**
	     * Time, in ms, to delay the closing of a modal after a click if no animation used.
	     * @option
	     * @example 10
	     */
	    hideDelay: 0,
	    /**
	     * Allows a click on the body/overlay to close the modal.
	     * @option
	     * @example true
	     */
	    closeOnClick: true,
	    /**
	     * Allows the modal to close if the user presses the `ESCAPE` key.
	     * @option
	     * @example true
	     */
	    closeOnEsc: true,
	    /**
	     * If true, allows multiple modals to be displayed at once.
	     * @option
	     * @example false
	     */
	    multipleOpened: false,
	    /**
	     * Distance, in pixels, the modal should push down from the top of the screen.
	     * @option
	     * @example 100
	     */
	    vOffset: 100,
	    /**
	     * Distance, in pixels, the modal should push in from the side of the screen.
	     * @option
	     * @example 0
	     */
	    hOffset: 0,
	    /**
	     * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
	     * @option
	     * @example false
	     */
	    fullScreen: false,
	    /**
	     * Percentage of screen height the modal should push up from the bottom of the view.
	     * @option
	     * @example 10
	     */
	    btmOffsetPct: 10,
	    /**
	     * Allows the modal to generate an overlay div, which will cover the view when modal opens.
	     * @option
	     * @example true
	     */
	    overlay: true,
	    /**
	     * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api.
	     * @option
	     * @example false
	     */
	    resetOnClose: false
	  };
	
	  /**
	   * Initializes the modal by adding the overlay and close buttons, (if selected).
	   * @private
	   */
	  Reveal.prototype._init = function(){
	    this.id = this.$element.attr('id');
	    this.isActive = false;
	
	    this.$anchor = $('[data-open="' + this.id + '"]').length ? $('[data-open="' + this.id + '"]') : $('[data-toggle="' + this.id + '"]');
	
	    if(this.$anchor.length){
	      var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, 'reveal');
	
	      this.$anchor.attr({
	        'aria-controls': this.id,
	        'id': anchorId,
	        'aria-haspopup': true,
	        'tabindex': 0
	      });
	      this.$element.attr({'aria-labelledby': anchorId});
	    }
	
	    // this.options.fullScreen = this.$element.hasClass('full');
	    if(this.options.fullScreen || this.$element.hasClass('full')){
	      this.options.fullScreen = true;
	      this.options.overlay = false;
	    }
	    if(this.options.overlay && !this.$overlay){
	      this.$overlay = this._makeOverlay(this.id);
	    }
	
	    this.$element.attr({
	        'role': 'dialog',
	        'aria-hidden': true,
	        'data-yeti-box': this.id,
	        'data-resize': this.id
	    });
	
	    this._events();
	  };
	
	  /**
	   * Creates an overlay div to display behind the modal.
	   * @private
	   */
	  Reveal.prototype._makeOverlay = function(id){
	    var $overlay = $('<div></div>')
	                    .addClass('reveal-overlay')
	                    .attr({'tabindex': -1, 'aria-hidden': true})
	                    .appendTo('body');
	    if(this.options.closeOnClick){
	      $overlay.attr({
	        'data-close': id
	      });
	    }
	    return $overlay;
	  };
	
	  /**
	   * Adds event handlers for the modal.
	   * @private
	   */
	  Reveal.prototype._events = function(){
	    var _this = this;
	
	    this.$element.on({
	      'open.zf.trigger': this.open.bind(this),
	      'close.zf.trigger': this.close.bind(this),
	      'toggle.zf.trigger': this.toggle.bind(this),
	      'resizeme.zf.trigger': function(){
	        if(_this.$element.is(':visible')){
	          _this._setPosition(function(){});
	        }
	      }
	    });
	
	    if(this.$anchor.length){
	      this.$anchor.on('keydown.zf.reveal', function(e){
	        if(e.which === 13 || e.which === 32){
	          e.stopPropagation();
	          e.preventDefault();
	          _this.open();
	        }
	      });
	    }
	
	
	    if(this.options.closeOnClick && this.options.overlay){
	      this.$overlay.off('.zf.reveal').on('click.zf.reveal', this.close.bind(this));
	    }
	  };
	  /**
	   * Sets the position of the modal before opening
	   * @param {Function} cb - a callback function to execute when positioning is complete.
	   * @private
	   */
	  Reveal.prototype._setPosition = function(cb){
	    var eleDims = Foundation.Box.GetDimensions(this.$element);
	    var elePos = this.options.fullScreen ? 'reveal full' : (eleDims.height >= (0.5 * eleDims.windowDims.height)) ? 'reveal' : 'center';
	
	    if(elePos === 'reveal full'){
	      //set to full height/width
	      this.$element
	          .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset))
	          .css({
	            'height': eleDims.windowDims.height,
	            'width': eleDims.windowDims.width
	          });
	    }else if(!Foundation.MediaQuery.atLeast('medium') || !Foundation.Box.ImNotTouchingYou(this.$element, null, true, false)){
	      //if smaller than medium, resize to 100% width minus any custom L/R margin
	      this.$element
	          .css({
	            'width': eleDims.windowDims.width - (this.options.hOffset * 2)
	          })
	          .offset(Foundation.Box.GetOffsets(this.$element, null, 'center', this.options.vOffset, this.options.hOffset));
	      //flag a boolean so we can reset the size after the element is closed.
	      this.changedSize = true;
	    }else{
	      this.$element
	          .css({
	            'max-height': eleDims.windowDims.height - (this.options.vOffset * (this.options.btmOffsetPct / 100 + 1)),
	            'width': ''
	          })
	          .offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset));
	          //the max height based on a percentage of vertical offset plus vertical offset
	    }
	
	    cb();
	  };
	
	  /**
	   * Opens the modal controlled by `this.$anchor`, and closes all others by default.
	   * @function
	   * @fires Reveal#closeAll
	   * @fires Reveal#open
	   */
	  Reveal.prototype.open = function(){
	    var _this = this;
	    this.isActive = true;
	    //make element invisible, but remove display: none so we can get size and positioning
	    this.$element
	        .css({'visibility': 'hidden'})
	        .show()
	        .scrollTop(0);
	
	    this._setPosition(function(){
	      _this.$element.hide()
	                   .css({'visibility': ''});
	      if(!_this.options.multipleOpened){
	        /**
	         * Fires immediately before the modal opens.
	         * Closes any other modals that are currently open
	         * @event Reveal#closeAll
	         */
	        _this.$element.trigger('closeme.zf.reveal', _this.id);
	      }
	      if(_this.options.animationIn){
	        if(_this.options.overlay){
	          Foundation.Motion.animateIn(_this.$overlay, 'fade-in', function(){
	            Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
	              _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
	            });
	          });
	        }else{
	          Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function(){
	            _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
	          });
	        }
	      }else{
	        if(_this.options.overlay){
	          _this.$overlay.show(0, function(){
	            _this.$element.show(_this.options.showDelay, function(){
	            });
	          });
	        }else{
	          _this.$element.show(_this.options.showDelay, function(){
	          });
	        }
	      }
	    });
	
	
	    // handle accessibility
	    this.$element.attr({'aria-hidden': false}).attr('tabindex', -1).focus()
	    /**
	     * Fires when the modal has successfully opened.
	     * @event Reveal#open
	     */
	                 .trigger('open.zf.reveal');
	
	    $('body').addClass('is-reveal-open')
	             .attr({'aria-hidden': (this.options.overlay || this.options.fullScreen) ? true : false});
	    setTimeout(function(){
	      _this._extraHandlers();
	      // Foundation.reflow();
	    }, 0);
	  };
	
	  /**
	   * Adds extra event handlers for the body and window if necessary.
	   * @private
	   */
	  Reveal.prototype._extraHandlers = function(){
	    var _this = this;
	    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
	
	    if(!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen){
	      $('body').on('click.zf.reveal', function(e){
	        // if()
	          _this.close();
	      });
	    }
	    if(this.options.closeOnEsc){
	      $(window).on('keydown.zf.reveal', function(e){
	        Foundation.Keyboard.handleKey(e, _this, {
	          close: function() {
	            if (this.options.closeOnEsc) {
	              this.close();
	              this.$anchor.focus();
	            }
	          }
	        });
	        if (_this.focusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
	          e.preventDefault();
	        }
	      });
	    }
	
	    // lock focus within modal while tabbing
	    this.$element.on('keydown.zf.reveal', function(e) {
	      var $target = $(this);
	      // handle keyboard event with keyboard util
	      Foundation.Keyboard.handleKey(e, _this, {
	        tab_forward: function() {
	          if (this.$element.find(':focus').is(_this.focusableElements.eq(-1))) { // left modal downwards, setting focus to first element
	            _this.focusableElements.eq(0).focus();
	            e.preventDefault();
	          }
	        },
	        tab_backward: function() {
	          if (this.$element.find(':focus').is(_this.focusableElements.eq(0)) || this.$element.is(':focus')) { // left modal upwards, setting focus to last element
	            _this.focusableElements.eq(-1).focus();
	            e.preventDefault();
	          }
	        },
	        open: function() {
	          if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
	            setTimeout(function() { // set focus back to anchor if close button has been activated
	              _this.$anchor.focus();
	            }, 1);
	          } else if ($target.is(_this.focusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
	            this.open();
	          }
	        },
	        close: function() {
	          if (this.options.closeOnEsc) {
	            this.close();
	            this.$anchor.focus();
	          }
	        }
	      });
	    });
	
	  };
	
	  /**
	   * Closes the modal.
	   * @function
	   * @fires Reveal#closed
	   */
	  Reveal.prototype.close = function(){
	    if(!this.isActive || !this.$element.is(':visible')){
	      return false;
	    }
	    var _this = this;
	
	    if(this.options.animationOut){
	      Foundation.Motion.animateOut(this.$element, this.options.animationOut, function(){
	        if(_this.options.overlay){
	          Foundation.Motion.animateOut(_this.$overlay, 'fade-out', function(){
	          });
	        }
	      });
	    }else{
	      this.$element.hide(_this.options.hideDelay, function(){
	        if(_this.options.overlay){
	          _this.$overlay.hide(0, function(){
	          });
	        }
	      });
	    }
	    //conditionals to remove extra event listeners added on open
	    if(this.options.closeOnEsc){
	      $(window).off('keydown.zf.reveal');
	    }
	    if(!this.options.overlay && this.options.closeOnClick){
	      $('body').off('click.zf.reveal');
	    }
	    this.$element.off('keydown.zf.reveal');
	
	    //if the modal changed size, reset it
	    if(this.changedSize){
	      this.$element.css({
	        'height': '',
	        'width': ''
	      });
	    }
	
	    $('body').removeClass('is-reveal-open').attr({'aria-hidden': false, 'tabindex': ''});
	
	    /**
	    * Resets the modal content
	    * This prevents a running video to keep going in the background
	    */
	    if(this.options.resetOnClose) {
	      this.$element.html(this.$element.html());
	    }
	
	    this.isActive = false;
	    this.$element.attr({'aria-hidden': true})
	    /**
	     * Fires when the modal is done closing.
	     * @event Reveal#closed
	     */
	                 .trigger('closed.zf.reveal');
	  };
	  /**
	   * Toggles the open/closed state of a modal.
	   * @function
	   */
	  Reveal.prototype.toggle = function(){
	    if(this.isActive){
	      this.close();
	    }else{
	      this.open();
	    }
	  };
	
	  /**
	   * Destroys an instance of a modal.
	   * @function
	   */
	  Reveal.prototype.destroy = function() {
	    if(this.options.overlay){
	      this.$overlay.hide().off().remove();
	    }
	    this.$element.hide();
	    this.$anchor.off();
	
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Reveal, 'Reveal');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Reveal;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Reveal;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Slider module.
	 * @module foundation.slider
	 * @requires foundation.util.motion
	 * @requires foundation.util.triggers
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.touch
	 */
	!function($, Foundation){
	  'use strict';
	
	  /**
	   * Creates a new instance of a drilldown menu.
	   * @class
	   * @param {jQuery} element - jQuery object to make into an accordion menu.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Slider(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Slider.defaults, this.$element.data(), options);
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Slider', {
	      'ltr': {
	        'ARROW_RIGHT': 'increase',
	        'ARROW_UP': 'increase',
	        'ARROW_DOWN': 'decrease',
	        'ARROW_LEFT': 'decrease',
	        'SHIFT_ARROW_RIGHT': 'increase_fast',
	        'SHIFT_ARROW_UP': 'increase_fast',
	        'SHIFT_ARROW_DOWN': 'decrease_fast',
	        'SHIFT_ARROW_LEFT': 'decrease_fast'
	      },
	      'rtl': {
	        'ARROW_LEFT': 'increase',
	        'ARROW_RIGHT': 'decrease',
	        'SHIFT_ARROW_LEFT': 'increase_fast',
	        'SHIFT_ARROW_RIGHT': 'decrease_fast'
	      }
	    });
	  }
	
	  Slider.defaults = {
	    /**
	     * Minimum value for the slider scale.
	     * @option
	     * @example 0
	     */
	    start: 0,
	    /**
	     * Maximum value for the slider scale.
	     * @option
	     * @example 100
	     */
	    end: 100,
	    /**
	     * Minimum value change per change event. Not Currently Implemented!
	
	     */
	    step: 1,
	    /**
	     * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
	     * @option
	     * @example 0
	     */
	    initialStart: 0,
	    /**
	     * Value at which the right handle/second input should be set to on initialization.
	     * @option
	     * @example 100
	     */
	    initialEnd: 100,
	    /**
	     * Allows the input to be located outside the container and visible. Set to by the JS
	     * @option
	     * @example false
	     */
	    binding: false,
	    /**
	     * Allows the user to click/tap on the slider bar to select a value.
	     * @option
	     * @example true
	     */
	    clickSelect: true,
	    /**
	     * Set to true and use the `vertical` class to change alignment to vertical.
	     * @option
	     * @example false
	     */
	    vertical: false,
	    /**
	     * Allows the user to drag the slider handle(s) to select a value.
	     * @option
	     * @example true
	     */
	    draggable: true,
	    /**
	     * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
	     * @option
	     * @example false
	     */
	    disabled: false,
	    /**
	     * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
	     * @option
	     * @example false
	     */
	    doubleSided: false,
	    /**
	     * Potential future feature.
	     */
	    // steps: 100,
	    /**
	     * Number of decimal places the plugin should go to for floating point precision.
	     * @option
	     * @example 2
	     */
	    decimal: 2,
	    /**
	     * Time delay for dragged elements.
	     */
	    // dragDelay: 0,
	    /**
	     * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
	     * @option
	     * @example 200
	     */
	    moveTime: 200,//update this if changing the transition time in the sass
	    /**
	     * Class applied to disabled sliders.
	     * @option
	     * @example 'disabled'
	     */
	    disabledClass: 'disabled'
	  };
	  /**
	   * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
	   * @function
	   * @private
	   */
	  Slider.prototype._init = function(){
	    this.inputs = this.$element.find('input');
	    this.handles = this.$element.find('[data-slider-handle]');
	
	    this.$handle = this.handles.eq(0);
	    this.$input = this.inputs.length ? this.inputs.eq(0) : $('#' + this.$handle.attr('aria-controls'));
	    this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);
	
	    var isDbl = false,
	        _this = this;
	    if(this.options.disabled || this.$element.hasClass(this.options.disabledClass)){
	      this.options.disabled = true;
	      this.$element.addClass(this.options.disabledClass);
	    }
	    if(!this.inputs.length){
	      this.inputs = $().add(this.$input);
	      this.options.binding = true;
	    }
	    this._setInitAttr(0);
	    this._events(this.$handle);
	
	    if(this.handles[1]){
	      this.options.doubleSided = true;
	      this.$handle2 = this.handles.eq(1);
	      this.$input2 = this.inputs.length ? this.inputs.eq(1) : $('#' + this.$handle2.attr('aria-controls'));
	
	      if(!this.inputs[1]){
	        this.inputs = this.inputs.add(this.$input2);
	      }
	      isDbl = true;
	
	      this._setHandlePos(this.$handle, this.options.initialStart, true, function(){
	
	        _this._setHandlePos(_this.$handle2, _this.options.initialEnd);
	      });
	      // this.$handle.triggerHandler('click.zf.slider');
	      this._setInitAttr(1);
	      this._events(this.$handle2);
	    }
	
	    if(!isDbl){
	      this._setHandlePos(this.$handle, this.options.initialStart, true);
	    }
	  };
	  /**
	   * Sets the position of the selected handle and fill bar.
	   * @function
	   * @private
	   * @param {jQuery} $hndl - the selected handle to move.
	   * @param {Number} location - floating point between the start and end values of the slider bar.
	   * @param {Function} cb - callback function to fire on completion.
	   * @fires Slider#moved
	   */
	  Slider.prototype._setHandlePos = function($hndl, location, noInvert, cb){
	  //might need to alter that slightly for bars that will have odd number selections.
	    location = parseFloat(location);//on input change events, convert string to number...grumble.
	    // prevent slider from running out of bounds
	    if(location < this.options.start){ location = this.options.start; }
	    else if(location > this.options.end){ location = this.options.end; }
	
	    var isDbl = this.options.doubleSided,
	        callback = cb || null;
	
	    if(isDbl){
	      if(this.handles.index($hndl) === 0){
	        var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
	        location = location >= h2Val ? h2Val - this.options.step : location;
	      }else{
	        var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
	        location = location <= h1Val ? h1Val + this.options.step : location;
	      }
	    }
	
	    if(this.options.vertical && !noInvert){
	      location = this.options.end - location;
	    }
	    var _this = this,
	        vert = this.options.vertical,
	        hOrW = vert ? 'height' : 'width',
	        lOrT = vert ? 'top' : 'left',
	        halfOfHandle = $hndl[0].getBoundingClientRect()[hOrW] / 2,
	        elemDim = this.$element[0].getBoundingClientRect()[hOrW],
	        pctOfBar = percent(location, this.options.end).toFixed(2),
	        pxToMove = (elemDim - halfOfHandle) * pctOfBar,
	        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal),
	        location = location > 0 ? parseFloat(location.toFixed(this.options.decimal)) : 0,
	        anim, prog, start = null, css = {};
	
	    this._setValues($hndl, location);
	
	    if(this.options.doubleSided){//update to calculate based on values set to respective inputs??
	      var isLeftHndl = this.handles.index($hndl) === 0,
	          dim,
	          idx = this.handles.index($hndl);
	
	      if(isLeftHndl){
	        css[lOrT] = (pctOfBar > 0 ? pctOfBar * 100 : 0) + '%';//
	        dim = /*Math.abs*/((percent(this.$handle2.position()[lOrT] + halfOfHandle, elemDim) - parseFloat(pctOfBar)) * 100).toFixed(this.options.decimal) + '%';
	        css['min-' + hOrW] = dim;
	        if(cb && typeof cb === 'function'){ cb(); }
	      }else{
	        var handleLeft = parseFloat(this.$handle[0].style.left);
	        location = (location < 100 ? location : 100) - (!isNaN(handleLeft) ? handleLeft : this.options.end - location);
	        css['min-' + hOrW] = location + '%';
	      }
	    }
	
	    this.$element.one('finished.zf.animate', function(){
	                    _this.animComplete = true;
	                    /**
	                     * Fires when the handle is done moving.
	                     * @event Slider#moved
	                     */
	                    _this.$element.trigger('moved.zf.slider', [$hndl]);
	                });
	    var moveTime = _this.$element.data('dragging') ? 1000/60 : _this.options.moveTime;
	    /*var move = new */Foundation.Move(moveTime, $hndl, function(){
	      $hndl.css(lOrT, movement + '%');
	      if(!_this.options.doubleSided){
	        _this.$fill.css(hOrW, pctOfBar * 100 + '%');
	      }else{
	        _this.$fill.css(css);
	      }
	    });
	    // move.do();
	  };
	  /**
	   * Sets the initial attribute for the slider element.
	   * @function
	   * @private
	   * @param {Number} idx - index of the current handle/input to use.
	   */
	  Slider.prototype._setInitAttr = function(idx){
	    var id = this.inputs.eq(idx).attr('id') || Foundation.GetYoDigits(6, 'slider');
	    this.inputs.eq(idx).attr({
	      'id': id,
	      'max': this.options.end,
	      'min': this.options.start
	
	    });
	    this.handles.eq(idx).attr({
	      'role': 'slider',
	      'aria-controls': id,
	      'aria-valuemax': this.options.end,
	      'aria-valuemin': this.options.start,
	      'aria-valuenow': idx === 0 ? this.options.initialStart : this.options.initialEnd,
	      'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
	      'tabindex': 0
	    });
	  };
	  /**
	   * Sets the input and `aria-valuenow` values for the slider element.
	   * @function
	   * @private
	   * @param {jQuery} $handle - the currently selected handle.
	   * @param {Number} val - floating point of the new value.
	   */
	  Slider.prototype._setValues = function($handle, val){
	    var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
	    this.inputs.eq(idx).val(val);
	    $handle.attr('aria-valuenow', val);
	  };
	  /**
	   * Handles events on the slider element.
	   * Calculates the new location of the current handle.
	   * If there are two handles and the bar was clicked, it determines which handle to move.
	   * @function
	   * @private
	   * @param {Object} e - the `event` object passed from the listener.
	   * @param {jQuery} $handle - the current handle to calculate for, if selected.
	   * @param {Number} val - floating point number for the new value of the slider.
	   */
	  Slider.prototype._handleEvent = function(e, $handle, val){
	    var value, hasVal;
	    if(!val){//click or drag events
	      e.preventDefault();
	      var _this = this,
	          vertical = this.options.vertical,
	          param = vertical ? 'height' : 'width',
	          direction = vertical ? 'top' : 'left',
	          pageXY = vertical ? e.pageY : e.pageX,
	          halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
	          barDim = this.$element[0].getBoundingClientRect()[param],
	          barOffset = (this.$element.offset()[direction] -  pageXY),
	          barXY = barOffset > 0 ? -halfOfHandle : (barOffset - halfOfHandle) < -barDim ? barDim : Math.abs(barOffset),//if the cursor position is less than or greater than the elements bounding coordinates, set coordinates within those bounds
	          // eleDim = this.$element[0].getBoundingClientRect()[param],
	          offsetPct = percent(barXY, barDim);
	      value = (this.options.end - this.options.start) * offsetPct;
	      hasVal = false;
	
	      if(!$handle){//figure out which handle it is, pass it to the next function.
	        var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
	            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
	            $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
	      }
	
	    }else{//change event on input
	      value = val;
	      hasVal = true;
	    }
	
	    this._setHandlePos($handle, value, hasVal);
	  };
	  /**
	   * Adds event listeners to the slider elements.
	   * @function
	   * @private
	   * @param {jQuery} $handle - the current handle to apply listeners to.
	   */
	  Slider.prototype._events = function($handle){
	    if(this.options.disabled){ return false; }
	
	    var _this = this,
	        curHandle,
	        timer;
	
	      this.inputs.off('change.zf.slider').on('change.zf.slider', function(e){
	        var idx = _this.inputs.index($(this));
	        _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
	      });
	
	    if(this.options.clickSelect){
	      this.$element.off('click.zf.slider').on('click.zf.slider', function(e){
	        if(_this.$element.data('dragging')){ return false; }
	        _this.animComplete = false;
	        if(_this.options.doubleSided){
	          _this._handleEvent(e);
	        }else{
	          _this._handleEvent(e, _this.$handle);
	        }
	      });
	    }
	
	    if(this.options.draggable){
	      this.handles.addTouch();
	      // var curHandle,
	      //     timer,
	      var $body = $('body');
	      $handle
	        .off('mousedown.zf.slider')
	        .on('mousedown.zf.slider', function(e){
	          $handle.addClass('is-dragging');
	          _this.$fill.addClass('is-dragging');//
	          _this.$element.data('dragging', true);
	          _this.animComplete = false;
	          curHandle = $(e.currentTarget);
	
	          $body.on('mousemove.zf.slider', function(e){
	            e.preventDefault();
	
	            // timer = setTimeout(function(){
	            _this._handleEvent(e, curHandle);
	            // }, _this.options.dragDelay);
	          }).on('mouseup.zf.slider', function(e){
	            // clearTimeout(timer);
	            _this.animComplete = true;
	            _this._handleEvent(e, curHandle);
	            $handle.removeClass('is-dragging');
	            _this.$fill.removeClass('is-dragging');
	            _this.$element.data('dragging', false);
	            // Foundation.reflow(_this.$element, 'slider');
	            $body.off('mousemove.zf.slider mouseup.zf.slider');
	          });
	      });
	    }
	    $handle.off('keydown.zf.slider').on('keydown.zf.slider', function(e){
	      var idx = _this.options.doubleSided ? _this.handles.index($(this)) : 0,
	        oldValue = parseFloat(_this.inputs.eq(idx).val()),
	        newValue;
	
	      var _$handle = $(this);
	
	      // handle keyboard event with keyboard util
	      Foundation.Keyboard.handleKey(e, _this, {
	        decrease: function() {
	          newValue = oldValue - _this.options.step;
	        },
	        increase: function() {
	          newValue = oldValue + _this.options.step;
	        },
	        decrease_fast: function() {
	          newValue = oldValue - _this.options.step * 10;
	        },
	        increase_fast: function() {
	          newValue = oldValue + _this.options.step * 10;
	        },
	        handled: function() { // only set handle pos when event was handled specially
	          e.preventDefault();
	          _this._setHandlePos(_$handle, newValue, true);
	        }
	      });
	      /*if (newValue) { // if pressed key has special function, update value
	        e.preventDefault();
	        _this._setHandlePos(_$handle, newValue);
	      }*/
	    });
	  };
	  /**
	   * Destroys the slider plugin.
	   */
	   Slider.prototype.destroy = function(){
	     this.handles.off('.zf.slider');
	     this.inputs.off('.zf.slider');
	     this.$element.off('.zf.slider');
	
	     Foundation.unregisterPlugin(this);
	   };
	
	  Foundation.plugin(Slider, 'Slider');
	
	  function percent(frac, num){
	    return (frac / num);
	  }
	  function absPosition($handle, dir, clickPos, param){
	    return Math.abs(($handle.position()[dir] + ($handle[param]() / 2)) - clickPos);
	  }
	}(jQuery, window.Foundation);
	
	//*********this is in case we go to static, absolute positions instead of dynamic positioning********
	// this.setSteps(function(){
	//   _this._events();
	//   var initStart = _this.options.positions[_this.options.initialStart - 1] || null;
	//   var initEnd = _this.options.initialEnd ? _this.options.position[_this.options.initialEnd - 1] : null;
	//   if(initStart || initEnd){
	//     _this._handleEvent(initStart, initEnd);
	//   }
	// });
	
	//***********the other part of absolute positions*************
	// Slider.prototype.setSteps = function(cb){
	//   var posChange = this.$element.outerWidth() / this.options.steps;
	//   var counter = 0
	//   while(counter < this.options.steps){
	//     if(counter){
	//       this.options.positions.push(this.options.positions[counter - 1] + posChange);
	//     }else{
	//       this.options.positions.push(posChange);
	//     }
	//     counter++;
	//   }
	//   cb();
	// };


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Sticky module.
	 * @module foundation.sticky
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 */
	!function($, Foundation){
	  'use strict';
	
	  /**
	   * Creates a new instance of a sticky thing.
	   * @class
	   * @param {jQuery} element - jQuery object to make sticky.
	   * @param {Object} options - options object passed when creating the element programmatically.
	   */
	  function Sticky(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);
	
	    this._init();
	
	    Foundation.registerPlugin(this);
	  }
	  Sticky.defaults = {
	    /**
	     * Customizable container template. Add your own classes for styling and sizing.
	     * @option
	     * @example '<div data-sticky-container class="small-6 columns"></div>'
	     */
	    container: '<div data-sticky-container></div>',
	    /**
	     * Location in the view the element sticks to.
	     * @option
	     * @example 'top'
	     */
	    stickTo: 'top',
	    /**
	     * If anchored to a single element, the id of that element.
	     * @option
	     * @example 'exampleId'
	     */
	    anchor: '',
	    /**
	     * If using more than one element as anchor points, the id of the top anchor.
	     * @option
	     * @example 'exampleId:top'
	     */
	    topAnchor: '',
	    /**
	     * If using more than one element as anchor points, the id of the bottom anchor.
	     * @option
	     * @example 'exampleId:bottom'
	     */
	    btmAnchor: '',
	    /**
	     * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
	     * @option
	     * @example 1
	     */
	    marginTop: 1,
	    /**
	     * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
	     * @option
	     * @example 1
	     */
	    marginBottom: 1,
	    /**
	     * Breakpoint string that is the minimum screen size an element should become sticky.
	     * @option
	     * @example 'medium'
	     */
	    stickyOn: 'medium',
	    /**
	     * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
	     * @option
	     * @example 'sticky'
	     */
	    stickyClass: 'sticky',
	    /**
	     * Class applied to sticky container. Foundation defaults to `sticky-container`.
	     * @option
	     * @example 'sticky-container'
	     */
	    containerClass: 'sticky-container',
	    /**
	     * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
	     * @option
	     * @example 50
	     */
	    checkEvery: -1
	  };
	
	  /**
	   * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
	   * Also triggered by Foundation._reflow
	   * @function
	   * @private
	   */
	  Sticky.prototype._init = function(){
	    var $parent = this.$element.parent('[data-sticky-container]'),
	        id = this.$element[0].id || Foundation.GetYoDigits(6, 'sticky'),
	        _this = this;
	
	    if(!$parent.length){
	      this.wasWrapped = true;
	    }
	    this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
	    this.$container.addClass(this.options.containerClass);
	
	
	    this.$element.addClass(this.options.stickyClass)
	                 .attr({'data-resize': id});
	
	    this.scrollCount = this.options.checkEvery;
	    this.isStuck = false;
	    // console.log(this.options.anchor, this.options.topAnchor);
	    if(this.options.topAnchor !== ''){
	      this._parsePoints();
	      // console.log(this.points[0]);
	    }else{
	      this.$anchor = this.options.anchor ? $('#' + this.options.anchor) : $(document.body);
	    }
	
	
	    this._setSizes(function(){
	      _this._calc(false);
	    });
	    this._events(id.split('-').reverse().join('-'));
	  };
	  /**
	   * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
	   * @function
	   * @private
	   */
	  Sticky.prototype._parsePoints = function(){
	    var top = this.options.topAnchor,
	        btm = this.options.btmAnchor,
	        pts = [top, btm],
	        breaks = {};
	    for(var i = 0, len = pts.length; i < len && pts[i]; i++){
	      var pt;
	      if(typeof pts[i] === 'number'){
	        pt = pts[i];
	      }else{
	        var place = pts[i].split(':'),
	            anchor = $('#' + place[0]);
	
	        pt = anchor.offset().top;
	        if(place[1] && place[1].toLowerCase() === 'bottom'){
	          pt += anchor[0].getBoundingClientRect().height;
	        }
	      }
	      breaks[i] = pt;
	    }
	      // console.log(breaks);
	    this.points = breaks;
	    return;
	  };
	
	  /**
	   * Adds event handlers for the scrolling element.
	   * @private
	   * @param {String} id - psuedo-random id for unique scroll event listener.
	   */
	  Sticky.prototype._events = function(id){
	    // console.log('called');
	    var _this = this,
	        scrollListener = 'scroll.zf.' + id;
	    if(this.isOn){ return; }
	    if(this.canStick){
	      this.isOn = true;
	      // this.$anchor.off('change.zf.sticky')
	      //             .on('change.zf.sticky', function(){
	      //               _this._setSizes(function(){
	      //                 _this._calc(false);
	      //               });
	      //             });
	
	      $(window).off(scrollListener)
	               .on(scrollListener, function(e){
	                 if(_this.scrollCount === 0){
	                   _this.scrollCount = _this.options.checkEvery;
	                   _this._setSizes(function(){
	                     _this._calc(false, window.pageYOffset);
	                   });
	                 }else{
	                   _this.scrollCount--;
	                   _this._calc(false, window.pageYOffset);
	                 }
	              });
	    }
	
	    this.$element.off('resizeme.zf.trigger')
	                 .on('resizeme.zf.trigger', function(e, el){
	                     _this._setSizes(function(){
	                       _this._calc(false);
	                       if(_this.canStick){
	                         if(!_this.isOn){
	                           _this._events(id);
	                         }
	                       }else if(_this.isOn){
	                         _this._pauseListeners(scrollListener);
	                       }
	                     });
	    });
	  };
	
	  /**
	   * Removes event handlers for scroll and change events on anchor.
	   * @fires Sticky#pause
	   * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
	   */
	  Sticky.prototype._pauseListeners = function(scrollListener){
	    this.isOn = false;
	    // this.$anchor.off('change.zf.sticky');
	    $(window).off(scrollListener);
	
	    /**
	     * Fires when the plugin is paused due to resize event shrinking the view.
	     * @event Sticky#pause
	     * @private
	     */
	     this.$element.trigger('pause.zf.sticky');
	  };
	
	  /**
	   * Called on every `scroll` event and on `_init`
	   * fires functions based on booleans and cached values
	   * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
	   * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
	   */
	  Sticky.prototype._calc = function(checkSizes, scroll){
	    if(checkSizes){ this._setSizes(); }
	
	    if(!this.canStick){
	      if(this.isStuck){
	        this._removeSticky(true);
	      }
	      return false;
	    }
	
	    if(!scroll){ scroll = window.pageYOffset; }
	
	    if(scroll >= this.topPoint){
	      if(scroll <= this.bottomPoint){
	        if(!this.isStuck){
	          this._setSticky();
	        }
	      }else{
	        if(this.isStuck){
	          this._removeSticky(false);
	        }
	      }
	    }else{
	      if(this.isStuck){
	        this._removeSticky(true);
	      }
	    }
	  };
	  /**
	   * Causes the $element to become stuck.
	   * Adds `position: fixed;`, and helper classes.
	   * @fires Sticky#stuckto
	   * @function
	   * @private
	   */
	  Sticky.prototype._setSticky = function(){
	    var stickTo = this.options.stickTo,
	        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
	        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
	        css = {};
	
	    css[mrgn] = this.options[mrgn] + 'em';
	    css[stickTo] = 0;
	    css[notStuckTo] = 'auto';
	    css['left'] = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
	    this.isStuck = true;
	    this.$element.removeClass('is-anchored is-at-' + notStuckTo)
	                 .addClass('is-stuck is-at-' + stickTo)
	                 .css(css)
	                 /**
	                  * Fires when the $element has become `position: fixed;`
	                  * Namespaced to `top` or `bottom`.
	                  * @event Sticky#stuckto
	                  */
	                 .trigger('sticky.zf.stuckto:' + stickTo);
	  };
	
	  /**
	   * Causes the $element to become unstuck.
	   * Removes `position: fixed;`, and helper classes.
	   * Adds other helper classes.
	   * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
	   * @fires Sticky#unstuckfrom
	   * @private
	   */
	  Sticky.prototype._removeSticky = function(isTop){
	    var stickTo = this.options.stickTo,
	        stickToTop = stickTo === 'top',
	        css = {},
	        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
	        mrgn = stickToTop ? 'marginTop' : 'marginBottom',
	        notStuckTo = stickToTop ? 'bottom' : 'top',
	        topOrBottom = isTop ? 'top' : 'bottom';
	
	    css[mrgn] = 0;
	
	    if((isTop && !stickToTop) || (stickToTop && !isTop)){
	      css[stickTo] = anchorPt;
	      css[notStuckTo] = 0;
	    }else{
	      css[stickTo] = 0;
	      css[notStuckTo] = anchorPt;
	    }
	    
	    css['left'] = '';
	    this.isStuck = false;
	    this.$element.removeClass('is-stuck is-at-' + stickTo)
	                 .addClass('is-anchored is-at-' + topOrBottom)
	                 .css(css)
	                 /**
	                  * Fires when the $element has become anchored.
	                  * Namespaced to `top` or `bottom`.
	                  * @event Sticky#unstuckfrom
	                  */
	                 .trigger('sticky.zf.unstuckfrom:' + topOrBottom);
	  };
	
	  /**
	   * Sets the $element and $container sizes for plugin.
	   * Calls `_setBreakPoints`.
	   * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
	   * @private
	   */
	  Sticky.prototype._setSizes = function(cb){
	    this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn);
	    if(!this.canStick){ cb(); }
	    var _this = this,
	        newElemWidth = this.$container[0].getBoundingClientRect().width,
	        comp = window.getComputedStyle(this.$container[0]),
	        pdng = parseInt(comp['padding-right'], 10);
	
	    // console.log(this.$anchor);
	    if(this.$anchor && this.$anchor.length){
	      this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
	    }else{
	      this._parsePoints();
	    }
	
	    this.$element.css({
	      'max-width': newElemWidth - pdng + 'px'
	    });
	
	    var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
	    this.containerHeight = newContainerHeight;
	    this.$container.css({
	      height: newContainerHeight
	    });
	    this.elemHeight = newContainerHeight;
	
	  	if (this.isStuck) {
	  		this.$element.css({"left":this.$container.offset().left + parseInt(comp['padding-left'], 10)});
	  	}
	
	    this._setBreakPoints(newContainerHeight, function(){
	      if(cb){ cb(); }
	    });
	
	  };
	  /**
	   * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
	   * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
	   * @param {Function} cb - optional callback function to be called on completion.
	   * @private
	   */
	  Sticky.prototype._setBreakPoints = function(elemHeight, cb){
	    if(!this.canStick){
	      if(cb){ cb(); }
	      else{ return false; }
	    }
	    var mTop = emCalc(this.options.marginTop),
	        mBtm = emCalc(this.options.marginBottom),
	        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
	        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
	        // topPoint = this.$anchor.offset().top || this.points[0],
	        // bottomPoint = topPoint + this.anchorHeight || this.points[1],
	        winHeight = window.innerHeight;
	
	    if(this.options.stickTo === 'top'){
	      topPoint -= mTop;
	      bottomPoint -= (elemHeight + mTop);
	    }else if(this.options.stickTo === 'bottom'){
	      topPoint -= (winHeight - (elemHeight + mBtm));
	      bottomPoint -= (winHeight - mBtm);
	    }else{
	      //this would be the stickTo: both option... tricky
	    }
	
	    this.topPoint = topPoint;
	    this.bottomPoint = bottomPoint;
	
	    if(cb){ cb(); }
	  };
	
	  /**
	   * Destroys the current sticky element.
	   * Resets the element to the top position first.
	   * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
	   * @function
	   */
	  Sticky.prototype.destroy = function(){
	    this._removeSticky(true);
	
	    this.$element.removeClass(this.options.stickyClass + ' is-anchored is-at-top')
	                 .css({
	                   height: '',
	                   top: '',
	                   bottom: '',
	                   'max-width': ''
	                 })
	                 .off('resizeme.zf.trigger');
	
	    this.$anchor.off('change.zf.sticky');
	    $(window).off('scroll.zf.sticky');
	
	    if(this.wasWrapped){
	      this.$element.unwrap();
	    }else{
	      this.$container.removeClass(this.options.containerClass)
	                     .css({
	                       height: ''
	                     });
	    }
	    Foundation.unregisterPlugin(this);
	  };
	  /**
	   * Helper function to calculate em values
	   * @param Number {em} - number of em's to calculate into pixels
	   */
	  function emCalc(em){
	    return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
	  }
	  Foundation.plugin(Sticky, 'Sticky');
	}(jQuery, window.Foundation);


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Tabs module.
	 * @module foundation.tabs
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.timerAndImageLoader if tabs contain images
	 */
	!function($, Foundation) {
	  'use strict';
	
	  /**
	   * Creates a new instance of tabs.
	   * @class
	   * @fires Tabs#init
	   * @param {jQuery} element - jQuery object to make into tabs.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Tabs(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);
	
	    this._init();
	    Foundation.registerPlugin(this);
	    Foundation.Keyboard.register('Tabs', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ARROW_RIGHT': 'next',
	      'ARROW_UP': 'previous',
	      'ARROW_DOWN': 'next',
	      'ARROW_LEFT': 'previous'
	      // 'TAB': 'next',
	      // 'SHIFT_TAB': 'previous'
	    });
	  }
	
	  Tabs.defaults = {
	    // /**
	    //  * Allows the JS to alter the url of the window. Not yet implemented.
	    //  */
	    // deepLinking: false,
	    // /**
	    //  * If deepLinking is enabled, allows the window to scroll to content if window is loaded with a hash including a tab-pane id
	    //  */
	    // scrollToContent: false,
	    /**
	     * Allows the window to scroll to content of active pane on load if set to true.
	     * @option
	     * @example false
	     */
	    autoFocus: false,
	    /**
	     * Allows keyboard input to 'wrap' around the tab links.
	     * @option
	     * @example true
	     */
	    wrapOnKeys: true,
	    /**
	     * Allows the tab content panes to match heights if set to true.
	     * @option
	     * @example false
	     */
	    matchHeight: false,
	    /**
	     * Class applied to `li`'s in tab link list.
	     * @option
	     * @example 'tabs-title'
	     */
	    linkClass: 'tabs-title',
	    // contentClass: 'tabs-content',
	    /**
	     * Class applied to the content containers.
	     * @option
	     * @example 'tabs-panel'
	     */
	    panelClass: 'tabs-panel'
	  };
	
	  /**
	   * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
	   * @private
	   */
	  Tabs.prototype._init = function(){
	    var _this = this;
	
	    this.$tabTitles = this.$element.find('.' + this.options.linkClass);
	    this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]');
	
	    this.$tabTitles.each(function(){
	      var $elem = $(this),
	          $link = $elem.find('a'),
	          isActive = $elem.hasClass('is-active'),
	          hash = $link.attr('href').slice(1),
	          linkId = hash + '-label',
	          $tabContent = $(hash);
	
	      $elem.attr({'role': 'presentation'});
	
	      $link.attr({
	        'role': 'tab',
	        'aria-controls': hash,
	        'aria-selected': isActive,
	        'id': linkId
	      });
	
	      $tabContent.attr({
	        'role': 'tabpanel',
	        'aria-hidden': !isActive,
	        'aria-labelledby': linkId
	      });
	
	      if(isActive && _this.options.autoFocus){
	        $link.focus();
	      }
	    });
	    if(this.options.matchHeight){
	      var $images = this.$tabContent.find('img');
	      if($images.length){
	        Foundation.onImagesLoaded($images, this._setHeight.bind(this));
	      }else{
	        this._setHeight();
	      }
	    }
	    this._events();
	  };
	  /**
	   * Adds event handlers for items within the tabs.
	   * @private
	   */
	   Tabs.prototype._events = function(){
	    this._addKeyHandler();
	    this._addClickHandler();
	    if(this.options.matchHeight){
	      $(window).on('changed.zf.mediaquery', this._setHeight.bind(this));
	    }
	  };
	
	  /**
	   * Adds click handlers for items within the tabs.
	   * @private
	   */
	  Tabs.prototype._addClickHandler = function(){
	    var _this = this;
	    this.$element.off('click.zf.tabs')
	                   .on('click.zf.tabs', '.' + this.options.linkClass, function(e){
	                     e.preventDefault();
	                     e.stopPropagation();
	                     if($(this).hasClass('is-active')){
	                       return;
	                     }
	                     _this._handleTabChange($(this));
	                   });
	  };
	
	  /**
	   * Adds keyboard event handlers for items within the tabs.
	   * @private
	   */
	  Tabs.prototype._addKeyHandler = function(){
	    var _this = this;
	    var $firstTab = _this.$element.find('li:first-of-type');
	    var $lastTab = _this.$element.find('li:last-of-type');
	
	    this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function(e){
	      if(e.which === 9) return;
	      e.stopPropagation();
	      e.preventDefault();
	
	      var $element = $(this),
	        $elements = $element.parent('ul').children('li'),
	        $prevElement,
	        $nextElement;
	
	      $elements.each(function(i) {
	        if ($(this).is($element)) {
	          if (_this.options.wrapOnKeys) {
	            $prevElement = i === 0 ? $elements.last() : $elements.eq(i-1);
	            $nextElement = i === $elements.length -1 ? $elements.first() : $elements.eq(i+1);
	          } else {
	            $prevElement = $elements.eq(Math.max(0, i-1));
	            $nextElement = $elements.eq(Math.min(i+1, $elements.length-1));
	          }
	          return;
	        }
	      });
	
	      // handle keyboard event with keyboard util
	      Foundation.Keyboard.handleKey(e, _this, {
	        open: function() {
	          $element.find('[role="tab"]').focus();
	          _this._handleTabChange($element);
	        },
	        previous: function() {
	          $prevElement.find('[role="tab"]').focus();
	          _this._handleTabChange($prevElement);
	        },
	        next: function() {
	          $nextElement.find('[role="tab"]').focus();
	          _this._handleTabChange($nextElement);
	        }
	      });
	    });
	  };
	
	
	  /**
	   * Opens the tab `$targetContent` defined by `$target`.
	   * @param {jQuery} $target - Tab to open.
	   * @fires Tabs#change
	   * @function
	   */
	  Tabs.prototype._handleTabChange = function($target){
	    var $tabLink = $target.find('[role="tab"]'),
	        hash = $tabLink.attr('href'),
	        $targetContent = $(hash),
	
	        $oldTab = this.$element.find('.' + this.options.linkClass + '.is-active')
	                  .removeClass('is-active').find('[role="tab"]')
	                  .attr({'aria-selected': 'false'}).attr('href');
	
	    $($oldTab).removeClass('is-active').attr({'aria-hidden': 'true'});
	
	    $target.addClass('is-active');
	
	    $tabLink.attr({'aria-selected': 'true'});
	
	    $targetContent
	      .addClass('is-active')
	      .attr({'aria-hidden': 'false'});
	
	    /**
	     * Fires when the plugin has successfully changed tabs.
	     * @event Tabs#change
	     */
	    this.$element.trigger('change.zf.tabs', [$target]);
	    // Foundation.reflow(this.$element, 'tabs');
	  };
	
	  /**
	   * Public method for selecting a content pane to display.
	   * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
	   * @function
	   */
	  Tabs.prototype.selectTab = function(elem){
	    var idStr;
	    if(typeof elem === 'object'){
	      idStr = elem[0].id;
	    }else{
	      idStr = elem;
	    }
	
	    if(idStr.indexOf('#') < 0){
	      idStr = '#' + idStr;
	    }
	    var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent('.' + this.options.linkClass);
	
	    this._handleTabChange($target);
	  };
	  /**
	   * Sets the height of each panel to the height of the tallest panel.
	   * If enabled in options, gets called on media query change.
	   * If loading content via external source, can be called directly or with _reflow.
	   * @function
	   * @private
	   */
	  Tabs.prototype._setHeight = function(){
	    var max = 0;
	    this.$tabContent.find('.' + this.options.panelClass)
	                    .css('height', '')
	                    .each(function(){
	                      var panel = $(this),
	                          isActive = panel.hasClass('is-active');
	
	                      if(!isActive){
	                        panel.css({'visibility': 'hidden', 'display': 'block'});
	                      }
	                      var temp = this.getBoundingClientRect().height;
	
	                      if(!isActive){
	                        panel.css({'visibility': '', 'display': ''});
	                      }
	
	                      max = temp > max ? temp : max;
	                    })
	                    .css('height', max + 'px');
	  };
	
	  /**
	   * Destroys an instance of an tabs.
	   * @fires Tabs#destroyed
	   */
	  Tabs.prototype.destroy = function() {
	    this.$element.find('.' + this.options.linkClass)
	                 .off('.zf.tabs').hide().end()
	                 .find('.' + this.options.panelClass)
	                 .hide();
	    if(this.options.matchHeight){
	      $(window).off('changed.zf.mediaquery');
	    }
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Tabs, 'Tabs');
	
	  function checkClass($elem){
	    return $elem.hasClass('is-active');
	  }
	}(jQuery, window.Foundation);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Toggler module.
	 * @module foundation.toggler
	 * @requires foundation.util.motion
	 */
	
	!function(Foundation, $) {
	  'use strict';
	
	  /**
	   * Creates a new instance of Toggler.
	   * @class
	   * @fires Toggler#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  function Toggler(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Toggler.defaults, element.data(), options);
	    this.className = '';
	
	    this._init();
	    this._events();
	
	    Foundation.registerPlugin(this);
	  }
	
	  Toggler.defaults = {
	    /**
	     * Tells the plugin if the element should animated when toggled.
	     * @option
	     * @example false
	     */
	    animate: false
	  };
	
	  /**
	   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
	   * @function
	   * @private
	   */
	  Toggler.prototype._init = function() {
	    var input;
	    // Parse animation classes if they were set
	    if (this.options.animate) {
	      input = this.options.animate.split(' ');
	
	      this.animationIn = input[0];
	      this.animationOut = input[1] || null;
	    }
	    // Otherwise, parse toggle class
	    else {
	      input = this.$element.data('toggler');
	      // Allow for a . at the beginning of the string
	      this.className = input[0] === '.' ? input.slice(1) : input;
	    }
	
	    // Add ARIA attributes to triggers
	    var id = this.$element[0].id;
	    $('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]')
	      .attr('aria-controls', id);
	    // If the target is hidden, add aria-hidden
	    this.$element.attr('aria-expanded', this.$element.is(':hidden') ? false : true);
	  };
	
	  /**
	   * Initializes events for the toggle trigger.
	   * @function
	   * @private
	   */
	  Toggler.prototype._events = function() {
	    this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
	  };
	
	  /**
	   * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
	   * @function
	   * @fires Toggler#on
	   * @fires Toggler#off
	   */
	  Toggler.prototype.toggle = function() {
	    this[ this.options.animate ? '_toggleAnimate' : '_toggleClass']();
	  };
	
	  Toggler.prototype._toggleClass = function() {
	    this.$element.toggleClass(this.className);
	
	    var isOn = this.$element.hasClass(this.className);
	    if (isOn) {
	      /**
	       * Fires if the target element has the class after a toggle.
	       * @event Toggler#on
	       */
	      this.$element.trigger('on.zf.toggler');
	    }
	    else {
	      /**
	       * Fires if the target element does not have the class after a toggle.
	       * @event Toggler#off
	       */
	      this.$element.trigger('off.zf.toggler');
	    }
	
	    this._updateARIA(isOn);
	  };
	
	  Toggler.prototype._toggleAnimate = function() {
	    var _this = this;
	
	    if (this.$element.is(':hidden')) {
	      Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
	        this.trigger('on.zf.toggler');
	        _this._updateARIA(true);
	      });
	    }
	    else {
	      Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
	        this.trigger('off.zf.toggler');
	        _this._updateARIA(false);
	      });
	    }
	  };
	
	  Toggler.prototype._updateARIA = function(isOn) {
	    this.$element.attr('aria-expanded', isOn ? true : false);
	  };
	
	  /**
	   * Destroys the instance of Toggler on the element.
	   * @function
	   */
	  Toggler.prototype.destroy= function() {
	    this.$element.off('.zf.toggler');
	    Foundation.unregisterPlugin(this);
	  };
	
	  Foundation.plugin(Toggler, 'Toggler');
	
	  // Exports for AMD/Browserify
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	    module.exports = Toggler;
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Toggler;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	}(Foundation, jQuery);


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Tooltip module.
	 * @module foundation.tooltip
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 */
	!function($, document, Foundation){
	  'use strict';
	
	  /**
	   * Creates a new instance of a Tooltip.
	   * @class
	   * @fires Tooltip#init
	   * @param {jQuery} element - jQuery object to attach a tooltip to.
	   * @param {Object} options - object to extend the default configuration.
	   */
	  function Tooltip(element, options){
	    this.$element = element;
	    this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);
	
	    this.isActive = false;
	    this.isClick = false;
	    this._init();
	
	    Foundation.registerPlugin(this);
	  }
	
	  Tooltip.defaults = {
	    disableForTouch: false,
	    /**
	     * Time, in ms, before a tooltip should open on hover.
	     * @option
	     * @example 200
	     */
	    hoverDelay: 200,
	    /**
	     * Time, in ms, a tooltip should take to fade into view.
	     * @option
	     * @example 150
	     */
	    fadeInDuration: 150,
	    /**
	     * Time, in ms, a tooltip should take to fade out of view.
	     * @option
	     * @example 150
	     */
	    fadeOutDuration: 150,
	    /**
	     * Disables hover events from opening the tooltip if set to true
	     * @option
	     * @example false
	     */
	    disableHover: false,
	    /**
	     * Optional addtional classes to apply to the tooltip template on init.
	     * @option
	     * @example 'my-cool-tip-class'
	     */
	    templateClasses: '',
	    /**
	     * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
	     * @option
	     * @example 'tooltip'
	     */
	    tooltipClass: 'tooltip',
	    /**
	     * Class applied to the tooltip anchor element.
	     * @option
	     * @example 'has-tip'
	     */
	    triggerClass: 'has-tip',
	    /**
	     * Minimum breakpoint size at which to open the tooltip.
	     * @option
	     * @example 'small'
	     */
	    showOn: 'small',
	    /**
	     * Custom template to be used to generate markup for tooltip.
	     * @option
	     * @example '<div class="tooltip"></div>'
	     */
	    template: '',
	    /**
	     * Text displayed in the tooltip template on open.
	     * @option
	     * @example 'Some cool space fact here.'
	     */
	    tipText: '',
	    touchCloseText: 'Tap to close.',
	    /**
	     * Allows the tooltip to remain open if triggered with a click or touch event.
	     * @option
	     * @example true
	     */
	    clickOpen: true,
	    /**
	     * Additional positioning classes, set by the JS
	     * @option
	     * @example 'top'
	     */
	    positionClass: '',
	    /**
	     * Distance, in pixels, the template should push away from the anchor on the Y axis.
	     * @option
	     * @example 10
	     */
	    vOffset: 10,
	    /**
	     * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
	     * @option
	     * @example 12
	     */
	    hOffset: 12
	  };
	
	  /**
	   * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
	   * @private
	   */
	  Tooltip.prototype._init = function(){
	    var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');
	
	    this.options.positionClass = this._getPositionClass(this.$element);
	    this.options.tipText = this.options.tipText || this.$element.attr('title');
	    this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);
	
	    this.template.appendTo(document.body)
	        .text(this.options.tipText)
	        .hide();
	
	    this.$element.attr({
	      'title': '',
	      'aria-describedby': elemId,
	      'data-yeti-box': elemId,
	      'data-toggle': elemId,
	      'data-resize': elemId
	    }).addClass(this.triggerClass);
	
	    //helper variables to track movement on collisions
	    this.usedPositions = [];
	    this.counter = 4;
	    this.classChanged = false;
	
	    this._events();
	  };
	
	  /**
	   * Grabs the current positioning class, if present, and returns the value or an empty string.
	   * @private
	   */
	  Tooltip.prototype._getPositionClass = function(element){
	    if(!element){ return ''; }
	    // var position = element.attr('class').match(/top|left|right/g);
	    var position = element[0].className.match(/(top|left|right)/g);
	        position = position ? position[0] : '';
	    return position;
	  };
	  /**
	   * builds the tooltip element, adds attributes, and returns the template.
	   * @private
	   */
	  Tooltip.prototype._buildTemplate = function(id){
	    var templateClasses = (this.options.tooltipClass + ' ' + this.options.positionClass).trim();
	    var $template =  $('<div></div>').addClass(templateClasses).attr({
	      'role': 'tooltip',
	      'aria-hidden': true,
	      'data-is-active': false,
	      'data-is-focus': false,
	      'id': id
	    });
	    return $template;
	  };
	
	  /**
	   * Function that gets called if a collision event is detected.
	   * @param {String} position - positioning class to try
	   * @private
	   */
	  Tooltip.prototype._reposition = function(position){
	    this.usedPositions.push(position ? position : 'bottom');
	
	    //default, try switching to opposite side
	    if(!position && (this.usedPositions.indexOf('top') < 0)){
	      this.template.addClass('top');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
	      this.template.removeClass(position);
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
	      this.template.removeClass(position)
	          .addClass('right');
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
	      this.template.removeClass(position)
	          .addClass('left');
	    }
	
	    //if default change didn't work, try bottom or left first
	    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.template.addClass('left');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.template.removeClass(position)
	          .addClass('left');
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.template.removeClass(position);
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.template.removeClass(position);
	    }
	    //if nothing cleared, set to bottom
	    else{
	      this.template.removeClass(position);
	    }
	    this.classChanged = true;
	    this.counter--;
	
	  };
	
	  /**
	   * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
	   * if the tooltip is larger than the screen width, default to full width - any user selected margin
	   * @private
	   */
	  Tooltip.prototype._setPosition = function(){
	    var position = this._getPositionClass(this.template),
	        $tipDims = Foundation.Box.GetDimensions(this.template),
	        $anchorDims = Foundation.Box.GetDimensions(this.$element),
	        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
	        param = (direction === 'top') ? 'height' : 'width',
	        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
	        _this = this;
	
	    if(($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))){
	      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	      // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	        'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
	        'height': 'auto'
	      });
	      return false;
	    }
	
	    this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));
	
	    while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter){
	      this._reposition(position);
	      this._setPosition();
	    }
	  };
	
	  /**
	   * reveals the tooltip, and fires an event to close any other open tooltips on the page
	   * @fires Closeme#tooltip
	   * @fires Tooltip#show
	   * @function
	   */
	  Tooltip.prototype.show = function(){
	    if(this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)){
	      // console.error('The screen is too small to display this tooltip');
	      return false;
	    }
	
	    var _this = this;
	    this.template.css('visibility', 'hidden').show();
	    this._setPosition();
	
	    /**
	     * Fires to close all other open tooltips on the page
	     * @event Closeme#tooltip
	     */
	    this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
	
	
	    this.template.attr({
	      'data-is-active': true,
	      'aria-hidden': false
	    });
	    _this.isActive = true;
	    // console.log(this.template);
	    this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function(){
	      //maybe do stuff?
	    });
	    /**
	     * Fires when the tooltip is shown
	     * @event Tooltip#show
	     */
	    this.$element.trigger('show.zf.tooltip');
	  };
	
	  /**
	   * Hides the current tooltip, and resets the positioning class if it was changed due to collision
	   * @fires Tooltip#hide
	   * @function
	   */
	  Tooltip.prototype.hide = function(){
	    // console.log('hiding', this.$element.data('yeti-box'));
	    var _this = this;
	    this.template.stop().attr({
	      'aria-hidden': true,
	      'data-is-active': false
	    }).fadeOut(this.options.fadeOutDuration, function(){
	      _this.isActive = false;
	      _this.isClick = false;
	      if(_this.classChanged){
	        _this.template
	             .removeClass(_this._getPositionClass(_this.template))
	             .addClass(_this.options.positionClass);
	
	       _this.usedPositions = [];
	       _this.counter = 4;
	       _this.classChanged = false;
	      }
	    });
	    /**
	     * fires when the tooltip is hidden
	     * @event Tooltip#hide
	     */
	    this.$element.trigger('hide.zf.tooltip');
	  };
	
	  /**
	   * adds event listeners for the tooltip and its anchor
	   * TODO combine some of the listeners like focus and mouseenter, etc.
	   * @private
	   */
	  Tooltip.prototype._events = function(){
	    var _this = this;
	    var $template = this.template;
	    var isFocus = false;
	
	    if(!this.options.disableHover){
	
	      this.$element
	      .on('mouseenter.zf.tooltip', function(e){
	        if(!_this.isActive){
	          _this.timeout = setTimeout(function(){
	            _this.show();
	          }, _this.options.hoverDelay);
	        }
	      })
	      .on('mouseleave.zf.tooltip', function(e){
	        clearTimeout(_this.timeout);
	        if(!isFocus || (!_this.isClick && _this.options.clickOpen)){
	          _this.hide();
	        }
	      });
	    }
	    if(this.options.clickOpen){
	      this.$element.on('mousedown.zf.tooltip', function(e){
	        e.stopImmediatePropagation();
	        if(_this.isClick){
	          _this.hide();
	          // _this.isClick = false;
	        }else{
	          _this.isClick = true;
	          if((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive){
	            _this.show();
	          }
	        }
	      });
	    }
	
	    if(!this.options.disableForTouch){
	      this.$element
	      .on('tap.zf.tooltip touchend.zf.tooltip', function(e){
	        _this.isActive ? _this.hide() : _this.show();
	      });
	    }
	
	    this.$element.on({
	      // 'toggle.zf.trigger': this.toggle.bind(this),
	      // 'close.zf.trigger': this.hide.bind(this)
	      'close.zf.trigger': this.hide.bind(this)
	    });
	
	    this.$element
	      .on('focus.zf.tooltip', function(e){
	        isFocus = true;
	        console.log(_this.isClick);
	        if(_this.isClick){
	          return false;
	        }else{
	          // $(window)
	          _this.show();
	        }
	      })
	
	      .on('focusout.zf.tooltip', function(e){
	        isFocus = false;
	        _this.isClick = false;
	        _this.hide();
	      })
	
	      .on('resizeme.zf.trigger', function(){
	        if(_this.isActive){
	          _this._setPosition();
	        }
	      });
	  };
	  /**
	   * adds a toggle method, in addition to the static show() & hide() functions
	   * @function
	   */
	  Tooltip.prototype.toggle = function(){
	    if(this.isActive){
	      this.hide();
	    }else{
	      this.show();
	    }
	  };
	  /**
	   * Destroys an instance of tooltip, removes template element from the view.
	   * @function
	   */
	  Tooltip.prototype.destroy = function(){
	    this.$element.attr('title', this.template.text())
	                 .off('.zf.trigger .zf.tootip')
	                //  .removeClass('has-tip')
	                 .removeAttr('aria-describedby')
	                 .removeAttr('data-yeti-box')
	                 .removeAttr('data-toggle')
	                 .removeAttr('data-resize');
	
	    this.template.remove();
	
	    Foundation.unregisterPlugin(this);
	  };
	  /**
	   * TODO utilize resize event trigger
	   */
	
	  Foundation.plugin(Tooltip, 'Tooltip');
	}(jQuery, window.document, window.Foundation);


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(8)
	
	function requireAll(requireContext){
	    return requireContext.keys().map(requireContext);
	}
	
	//load in order
	__webpack_require__(40);
	
	// Load all foundation util files
	var nexus_util_req = __webpack_require__(42);
	requireAll(nexus_util_req);
	
	//load rest
	var nexus_components_req = __webpack_require__(43);
	requireAll(nexus_components_req);
	
	
	// OR load individually
	
	/*
	
	
	*/

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(41)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///Users/karandeepsingh/Documents/Projects/nexus-ui/node_modules/babel-loader/index.js%3F%7B%22presets%22:%5B%22es2015%22%5D%7D!/Users/karandeepsingh/Documents/Projects/nexus-ui/node_modules/eslint-loader/index.js!/Users/karandeepsingh/Documents/Projects/nexus-ui/src/assets/js/nexus_modules/nexus-core.js")

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\"use strict\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nexus = function Nexus() {\n\t_classCallCheck(this, Nexus);\n};\n\nmodule.exports = Nexus;"

/***/ },
/* 42 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 42;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./nexus-component.js": 44,
		"./nexus-dropdownmenu.js": 45,
		"./nexus-forms.js": 46
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 43;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Nexus) {"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Nexus.Component = function NexusComponent() {
		_classCallCheck(this, NexusComponent);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Nexus) {'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(function () {
		var oldHide = Foundation.DropdownMenu.prototype._hideSome;
		var oldShow = Foundation.DropdownMenu.prototype._show;
	
		//element is the dropdown menu context (ul). not the li element
		var newShow = Foundation.DropdownMenu.prototype._show = function ($elem) {
			this.$element.trigger('pn.dropdownmenu.showing', [this, $elem]);
			oldShow.apply(this, [$elem]);
			this.$element.trigger('pn.dropdownmenu.show', [this, $elem]);
		};
	
		//Foundation.DropdownMenu.prototype._hide calls _hideOthers
		var newHide = Foundation.DropdownMenu.prototype._hideSome = function ($elem) {
			this.$element.trigger('pn.dropdownmenu.hiding', [this, $elem]);
			oldHide.apply(this, [$elem]);
			this.$element.trigger('pn.dropdownmenu.hide', [this, $elem]);
		};
	
		var getSubMenu = function getSubMenu(el) {
			return el.find('>ul');
		};
	
		/* Arrays become parameters, plus an event */
		$('[data-dropdown-menu]').on('pn.dropdownmenu.showing', function (e, main, el) {
			if (!el.data('SubmenuShowing')) {
				getSubMenu(el).css("display", "none"); //keep hidden
			}
		});
	
		$('[data-dropdown-menu]').on('pn.dropdownmenu.show', function (e, main, el) {
			var submenu = getSubMenu(el);
			if (!el.data('SubmenuShowing')) {
				el.data("SubmenuShowing", true);
				Foundation.Motion.animateIn(submenu, 'fade-in', function () {
					submenu.css("display", "block"); //fade in
				});
			}
		});
	
		$('[data-dropdown-menu]').on('pn.dropdownmenu.hiding', function (e, main, el) {
			if (el.data('SubmenuShowing')) {
				getSubMenu(el).css("display", "block"); //keep shown
			}
		});
	
		$('[data-dropdown-menu]').on('pn.dropdownmenu.hide', function (e, main, el) {
			var submenu = getSubMenu(el);
			if (el.data('SubmenuShowing')) {
				el.data("SubmenuShowing", false);
				Foundation.Motion.animateOut(submenu, 'fade-out', function () {
					submenu.css("display", "none"); //fade in
				});
			}
		});
	})();
	
	Nexus.DropdownMenuBase = function (_Nexus$Component) {
		_inherits(NexusDropdownMenuBase, _Nexus$Component);
	
		function NexusDropdownMenuBase() {
			_classCallCheck(this, NexusDropdownMenuBase);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NexusDropdownMenuBase).call(this));
	
			_this.template = "<>";
			_this.container = $("body");
			return _this;
		}
	
		return NexusDropdownMenuBase;
	}(Nexus.Component);
	Nexus.DropdownMenu = function (_Nexus$DropdownMenuBa) {
		_inherits(NexusDropdownMenu, _Nexus$DropdownMenuBa);
	
		function NexusDropdownMenu() {
			_classCallCheck(this, NexusDropdownMenu);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(NexusDropdownMenu).call(this));
		}
	
		return NexusDropdownMenu;
	}(Nexus.DropdownMenuBase);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	  $('input[type="text"]').wrap('<span class="input-text-wrapper"></span>').on('keydown', function (e) {
	    e.stopPropagation(); //else cant put space for some reason
	  });;
	});

/***/ }
/******/ ]);
//# sourceMappingURL=nexus-ui.js.map