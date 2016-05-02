/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/**
 * sidebarEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 var SidebarMenuEffects = (function() {

 	function hasParentClass( e, classname ) {
		if(e === document) return false;
		if( classie.has( e, classname ) ) {
			return true;
		}
		return e.parentNode && hasParentClass( e.parentNode, classname );
	}

	// http://coveroverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function init() {

		var container = document.getElementById( 'st-container' ),
			buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
			// event type (if mobile use touch events)
			eventtype = mobilecheck() ? 'touchstart' : 'click',
			resetMenu = function() {
				classie.remove( container, 'st-menu-open' );
			},
			bodyClickFn = function(evt) {
				if( !hasParentClass( evt.target, 'st-menu' ) ) {
					resetMenu();
					document.removeEventListener( eventtype, bodyClickFn );
				}
			};

		buttons.forEach( function( el, i ) {
			var effect = el.getAttribute( 'data-effect' );

			el.addEventListener( eventtype, function( ev ) {
				ev.stopPropagation();
				ev.preventDefault();
				container.className = 'st-container'; // clear
				classie.add( container, effect );
				setTimeout( function() {
					classie.add( container, 'st-menu-open' );
				}, 25 );
				document.addEventListener( eventtype, bodyClickFn );
			});
		} );

	}

	init();

})();

/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
    throw new Error("Jasny Bootstrap's JavaScript requires jQuery");
+ function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    void 0 === a.support.transition && (a.fn.emulateTransitionEnd = function(b) {
        var c=!1, d = this;
        a(this).one(a.support.transition.end, function() {
            c=!0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    }))
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.state = null, this.placement = null, this.options.recalc && (this.calcClone(), a(window).on("resize", a.proxy(this.recalc, this))), this.options.autohide && a(document).on("click", a.proxy(this.autohide, this)), this.options.toggle && this.toggle(), this.options.disablescrolling && (this.options.disableScrolling = this.options.disablescrolling, delete this.options.disablescrolling)
    };
    b.DEFAULTS = {
        toggle: !0,
        placement: "auto",
        autohide: !0,
        recalc: !0,
        disableScrolling: !0,
        modal: !1
    }, b.prototype.offset = function() {
        switch (this.placement) {
        case"left":
        case"right":
            return this.$element.outerWidth();
        case"top":
        case"bottom":
            return this.$element.outerHeight()
        }
    }, b.prototype.calcPlacement = function() {
        function b(a, b) {
            if ("auto" === e.css(b))
                return a;
            if ("auto" === e.css(a))
                return b;
            var c = parseInt(e.css(a), 10), d = parseInt(e.css(b), 10);
            return c > d ? b : a
        }
        if ("auto" !== this.options.placement)
            return void(this.placement = this.options.placement);
        this.$element.hasClass("in") || this.$element.css("visiblity", "hidden !important").addClass("in");
        var c = a(window).width() / this.$element.width(), d = a(window).height() / this.$element.height(), e = this.$element;
        this.placement = c >= d ? b("left", "right") : b("top", "bottom"), "hidden !important" === this.$element.css("visibility") && this.$element.removeClass("in").css("visiblity", "")
    }, b.prototype.opposite = function(a) {
        switch (a) {
        case"top":
            return "bottom";
        case"left":
            return "right";
        case"bottom":
            return "top";
        case"right":
            return "left"
        }
    }, b.prototype.getCanvasElements = function() {
        var b = this.options.canvas ? a(this.options.canvas): this.$element, c = b.find("*").filter(function() {
            return "fixed" === a(this).css("position")
        }).not(this.options.exclude);
        return b.add(c)
    }, b.prototype.slide = function(b, c, d) {
        if (!a.support.transition) {
            var e = {};
            return e[this.placement] = "+=" + c, b.animate(e, 350, d)
        }
        var f = this.placement, g = this.opposite(f);
        b.each(function() {
            "auto" !== a(this).css(f) && a(this).css(f, (parseInt(a(this).css(f), 10) || 0) + c), "auto" !== a(this).css(g) && a(this).css(g, (parseInt(a(this).css(g), 10) || 0) - c)
        }), this.$element.one(a.support.transition.end, d).emulateTransitionEnd(350)
    }, b.prototype.disableScrolling = function() {
        var b = a("body").width(), c = "padding-" + this.opposite(this.placement);
        if (void 0 === a("body").data("offcanvas-style") && a("body").data("offcanvas-style", a("body").attr("style") || ""), a("body").css("overflow", "hidden"), a("body").width() > b) {
            var d = parseInt(a("body").css(c), 10) + a("body").width() - b;
            setTimeout(function() {
                a("body").css(c, d)
            }, 1)
        }
        a("body").on("touchmove.bs", function(a) {
            a.preventDefault()
        })
    }, b.prototype.enableScrolling = function() {
        a("body").off("touchmove.bs")
    }, b.prototype.show = function() {
        if (!this.state) {
            var b = a.Event("show.bs.offcanvas");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                this.state = "slide-in", this.calcPlacement();
                var c = this.getCanvasElements(), d = this.placement, e = this.opposite(d), f = this.offset();
                - 1 !== c.index(this.$element) && (a(this.$element).data("offcanvas-style", a(this.$element).attr("style") || ""), this.$element.css(d, - 1 * f), this.$element.css(d)), c.addClass("canvas-sliding").each(function() {
                    void 0 === a(this).data("offcanvas-style") && a(this).data("offcanvas-style", a(this).attr("style") || ""), "static" === a(this).css("position") && a(this).css("position", "relative"), "auto" !== a(this).css(d) && "0px" !== a(this).css(d) || "auto" !== a(this).css(e) && "0px" !== a(this).css(e) || a(this).css(d, 0)
                }), this.options.disableScrolling && this.disableScrolling(), this.options.modal && this.toggleBackdrop();
                var g = function() {
                    "slide-in" == this.state && (this.state = "slid", c.removeClass("canvas-sliding").addClass("canvas-slid"), this.$element.trigger("shown.bs.offcanvas"))
                };
                setTimeout(a.proxy(function() {
                    this.$element.addClass("in"), this.slide(c, f, a.proxy(g, this))
                }, this), 1)
            }
        }
    }, b.prototype.hide = function() {
        if ("slid" === this.state) {
            var b = a.Event("hide.bs.offcanvas");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                this.state = "slide-out";
                var c = a(".canvas-slid"), d = (this.placement, - 1 * this.offset()), e = function() {
                    "slide-out" == this.state && (this.state = null, this.placement = null, this.$element.removeClass("in"), c.removeClass("canvas-sliding"), c.add(this.$element).add("body").each(function() {
                        a(this).attr("style", a(this).data("offcanvas-style")).removeData("offcanvas-style")
                    }), this.$element.trigger("hidden.bs.offcanvas"))
                };
                this.options.disableScrolling && this.enableScrolling(), this.options.modal && this.toggleBackdrop(), c.removeClass("canvas-slid").addClass("canvas-sliding"), setTimeout(a.proxy(function() {
                    this.slide(c, d, a.proxy(e, this))
                }, this), 1)
            }
        }
    }, b.prototype.toggle = function() {
        "slide-in" !== this.state && "slide-out" !== this.state && this["slid" === this.state ? "hide": "show"]()
    }, b.prototype.toggleBackdrop = function(b) {
        if (b = b || a.noop, "slide-in" == this.state) {
            var c = a.support.transition;
            this.$backdrop = a('<div class="modal-backdrop fade" />').insertAfter(this.$element), c && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), c ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else if ("slide-out" == this.state && this.$backdrop) {
            this.$backdrop.removeClass("in"), a("body").off("touchmove.bs");
            var d = this;
            a.support.transition ? this.$backdrop.one(a.support.transition.end, function() {
                d.$backdrop.remove(), b(), d.$backdrop = null
            }).emulateTransitionEnd(150) : (this.$backdrop.remove(), this.$backdrop = null, b())
        } else
            b && b()
    }, b.prototype.calcClone = function() {
        this.$calcClone = this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(a("body"))
    }, b.prototype.recalc = function() {
        if ("none" !== this.$calcClone.css("display") && ("slid" === this.state || "slide-in" === this.state)) {
            this.state = null, this.placement = null;
            var b = this.getCanvasElements();
            this.$element.removeClass("in"), b.removeClass("canvas-slid"), b.add(this.$element).add("body").each(function() {
                a(this).attr("style", a(this).data("offcanvas-style")).removeData("offcanvas-style")
            })
        }
    }, b.prototype.autohide = function(b) {
        0 === a(b.target).closest(this.$element).length && this.hide()
    };
    var c = a.fn.offcanvas;
    a.fn.offcanvas = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.offcanvas"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.offcanvas", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.offcanvas.Constructor = b, a.fn.offcanvas.noConflict = function() {
        return a.fn.offcanvas = c, this
    }, a(document).on("click.bs.offcanvas.data-api", "[data-toggle=offcanvas]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.offcanvas"), h = g ? "toggle": d.data();
        b.stopPropagation(), g ? g.toggle() : f.offcanvas(h)
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.$element.on("click.bs.rowlink", "td:not(.rowlink-skip)", a.proxy(this.click, this))
    };
    b.DEFAULTS = {
        target: "a"
    }, b.prototype.click = function(b) {
        var c = a(b.currentTarget).closest("tr").find(this.options.target)[0];
        if (a(b.target)[0] !== c)
            if (b.preventDefault(), c.click)
                c.click();
            else if (document.createEvent) {
                var d = document.createEvent("MouseEvents");
                d.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(d)
            }
    };
    var c = a.fn.rowlink;
    a.fn.rowlink = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.rowlink");
            e || d.data("bs.rowlink", e = new b(this, c))
        })
    }, a.fn.rowlink.Constructor = b, a.fn.rowlink.noConflict = function() {
        return a.fn.rowlink = c, this
    }, a(document).on("click.bs.rowlink.data-api", '[data-link="row"]', function(b) {
        if (0 === a(b.target).closest(".rowlink-skip").length) {
            var c = a(this);
            c.data("bs.rowlink") || (c.rowlink(c.data()), a(b.target).trigger("click.bs.rowlink"))
        }
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = void 0 !== window.orientation, c = navigator.userAgent.toLowerCase().indexOf("android")>-1, d = "Microsoft Internet Explorer" == window.navigator.appName, e = function(b, d) {
        c || (this.$element = a(b), this.options = a.extend({}, e.DEFAULTS, d), this.mask = String(this.options.mask), this.init(), this.listen(), this.checkVal())
    };
    e.DEFAULTS = {
        mask: "",
        placeholder: "_",
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            w: "[A-Za-z0-9]",
            "*": "."
        }
    }, e.prototype.init = function() {
        var b = this.options.definitions, c = this.mask.length;
        this.tests = [], this.partialPosition = this.mask.length, this.firstNonMaskPos = null, a.each(this.mask.split(""), a.proxy(function(a, d) {
            "?" == d ? (c--, this.partialPosition = a) : b[d] ? (this.tests.push(new RegExp(b[d])), null === this.firstNonMaskPos && (this.firstNonMaskPos = this.tests.length - 1)) : this.tests.push(null)
        }, this)), this.buffer = a.map(this.mask.split(""), a.proxy(function(a) {
            return "?" != a ? b[a] ? this.options.placeholder : a : void 0
        }, this)), this.focusText = this.$element.val(), this.$element.data("rawMaskFn", a.proxy(function() {
            return a.map(this.buffer, function(a, b) {
                return this.tests[b] && a != this.options.placeholder ? a : null
            }).join("")
        }, this))
    }, e.prototype.listen = function() {
        if (!this.$element.attr("readonly")) {
            var b = (d ? "paste" : "input") + ".bs.inputmask";
            this.$element.on("unmask.bs.inputmask", a.proxy(this.unmask, this)).on("focus.bs.inputmask", a.proxy(this.focusEvent, this)).on("blur.bs.inputmask", a.proxy(this.blurEvent, this)).on("keydown.bs.inputmask", a.proxy(this.keydownEvent, this)).on("keypress.bs.inputmask", a.proxy(this.keypressEvent, this)).on(b, a.proxy(this.pasteEvent, this))
        }
    }, e.prototype.caret = function(a, b) {
        if (0 !== this.$element.length) {
            if ("number" == typeof a)
                return b = "number" == typeof b ? b : a, this.$element.each(function() {
                    if (this.setSelectionRange)
                        this.setSelectionRange(a, b);
                    else if (this.createTextRange) {
                        var c = this.createTextRange();
                        c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()
                    }
                });
            if (this.$element[0].setSelectionRange)
                a = this.$element[0].selectionStart, b = this.$element[0].selectionEnd;
            else if (document.selection && document.selection.createRange) {
                var c = document.selection.createRange();
                a = 0 - c.duplicate().moveStart("character", - 1e5), b = a + c.text.length
            }
            return {
                begin: a,
                end: b
            }
        }
    }, e.prototype.seekNext = function(a) {
        for (var b = this.mask.length; ++a <= b&&!this.tests[a];);
        return a
    }, e.prototype.seekPrev = function(a) {
        for (; --a >= 0&&!this.tests[a];);
        return a
    }, e.prototype.shiftL = function(a, b) {
        var c = this.mask.length;
        if (!(0 > a)) {
            for (var d = a, e = this.seekNext(b); c > d; d++)
                if (this.tests[d]) {
                    if (!(c > e && this.tests[d].test(this.buffer[e])))
                        break;
                        this.buffer[d] = this.buffer[e], this.buffer[e] = this.options.placeholder, e = this.seekNext(e)
                }
            this.writeBuffer(), this.caret(Math.max(this.firstNonMaskPos, a))
        }
    }, e.prototype.shiftR = function(a) {
        for (var b = this.mask.length, c = a, d = this.options.placeholder; b > c; c++)
            if (this.tests[c]) {
                var e = this.seekNext(c), f = this.buffer[c];
                if (this.buffer[c] = d, !(b > e && this.tests[e].test(f)))
                    break;
                    d = f
            }
    }, e.prototype.unmask = function() {
        this.$element.unbind(".bs.inputmask").removeData("bs.inputmask")
    }, e.prototype.focusEvent = function() {
        this.focusText = this.$element.val();
        var a = this.mask.length, b = this.checkVal();
        this.writeBuffer();
        var c = this, d = function() {
            b == a ? c.caret(0, b) : c.caret(b)
        };
        d(), setTimeout(d, 50)
    }, e.prototype.blurEvent = function() {
        this.checkVal(), this.$element.val() !== this.focusText && (this.$element.trigger("change"), this.$element.trigger("input"))
    }, e.prototype.keydownEvent = function(a) {
        var c = a.which;
        if (8 == c || 46 == c || b && 127 == c) {
            var d = this.caret(), e = d.begin, f = d.end;
            return f - e === 0 && (e = 46 != c ? this.seekPrev(e) : f = this.seekNext(e - 1), f = 46 == c ? this.seekNext(f) : f), this.clearBuffer(e, f), this.shiftL(e, f - 1), !1
        }
        return 27 == c ? (this.$element.val(this.focusText), this.caret(0, this.checkVal()), !1) : void 0
    }, e.prototype.keypressEvent = function(a) {
        var b = this.mask.length, c = a.which, d = this.caret();
        if (a.ctrlKey || a.altKey || a.metaKey || 32 > c)
            return !0;
        if (c) {
            d.end - d.begin !== 0 && (this.clearBuffer(d.begin, d.end), this.shiftL(d.begin, d.end - 1));
            var e = this.seekNext(d.begin - 1);
            if (b > e) {
                var f = String.fromCharCode(c);
                if (this.tests[e].test(f)) {
                    this.shiftR(e), this.buffer[e] = f, this.writeBuffer();
                    var g = this.seekNext(e);
                    this.caret(g)
                }
            }
            return !1
        }
    }, e.prototype.pasteEvent = function() {
        var a = this;
        setTimeout(function() {
            a.caret(a.checkVal(!0))
        }, 0)
    }, e.prototype.clearBuffer = function(a, b) {
        for (var c = this.mask.length, d = a; b > d && c > d; d++)
            this.tests[d] && (this.buffer[d] = this.options.placeholder)
    }, e.prototype.writeBuffer = function() {
        return this.$element.val(this.buffer.join("")).val()
    }, e.prototype.checkVal = function(a) {
        for (var b = this.mask.length, c = this.$element.val(), d =- 1, e = 0, f = 0; b > e; e++)
            if (this.tests[e]) {
                for (this.buffer[e] = this.options.placeholder; f++<c.length;) {
                    var g = c.charAt(f - 1);
                    if (this.tests[e].test(g)) {
                        this.buffer[e] = g, d = e;
                        break
                    }
                }
                if (f > c.length)
                    break
            } else
                this.buffer[e] == c.charAt(f) && e != this.partialPosition && (f++, d = e);
        return !a && d + 1 < this.partialPosition ? (this.$element.val(""), this.clearBuffer(0, b)) : (a || d + 1 >= this.partialPosition) && (this.writeBuffer(), a || this.$element.val(this.$element.val().substring(0, d + 1))), this.partialPosition ? e : this.firstNonMaskPos
    };
    var f = a.fn.inputmask;
    a.fn.inputmask = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.inputmask");
            d || c.data("bs.inputmask", d = new e(this, b))
        })
    }, a.fn.inputmask.Constructor = e, a.fn.inputmask.noConflict = function() {
        return a.fn.inputmask = f, this
    }, a(document).on("focus.bs.inputmask.data-api", "[data-mask]", function() {
        var b = a(this);
        b.data("bs.inputmask") || b.inputmask(b.data())
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = "Microsoft Internet Explorer" == window.navigator.appName, c = function(b, c) {
        if (this.$element = a(b), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
            this.name = this.$input.attr("name") || c.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length && (this.$hidden = a('<input type="hidden">').insertBefore(this.$input)), this.$preview = this.$element.find(".fileinput-preview");
            var d = this.$preview.css("height");
            "inline" !== this.$preview.css("display") && "0px" !== d && "none" !== d && this.$preview.css("line-height", d), this.original = {
                exists: this.$element.hasClass("fileinput-exists"),
                preview: this.$preview.html(),
                hiddenVal: this.$hidden.val()
            }, this.listen()
        }
    };
    c.prototype.listen = function() {
        this.$input.on("change.bs.fileinput", a.proxy(this.change, this)), a(this.$input[0].form).on("reset.bs.fileinput", a.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", a.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", a.proxy(this.clear, this))
    }, c.prototype.change = function(b) {
        var c = void 0 === b.target.files ? b.target && b.target.value ? [{
            name: b.target.value.replace(/^.+\\/, "")
        }
        ] : [] : b.target.files;
        if (b.stopPropagation(), 0 === c.length)
            return void this.clear();
        this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
        var d = c[0];
        if (this.$preview.length > 0 && ("undefined" != typeof d.type ? d.type.match(/^image\/(gif|png|jpeg)$/) : d.name.match(/\.(gif|png|jpe?g)$/i)) && "undefined" != typeof FileReader) {
            var e = new FileReader, f = this.$preview, g = this.$element;
            e.onload = function(b) {
                var e = a("<img>");
                e[0].src = b.target.result, c[0].result = b.target.result, g.find(".fileinput-filename").text(d.name), "none" != f.css("max-height") && e.css("max-height", parseInt(f.css("max-height"), 10) - parseInt(f.css("padding-top"), 10) - parseInt(f.css("padding-bottom"), 10) - parseInt(f.css("border-top"), 10) - parseInt(f.css("border-bottom"), 10)), f.html(e), g.addClass("fileinput-exists").removeClass("fileinput-new"), g.trigger("change.bs.fileinput", c)
            }, e.readAsDataURL(d)
        } else
            this.$element.find(".fileinput-filename").text(d.name), this.$preview.text(d.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
    }, c.prototype.clear = function(a) {
        if (a && a.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", ""), b) {
            var c = this.$input.clone(!0);
            this.$input.after(c), this.$input.remove(), this.$input = c
        } else
            this.$input.val("");
        this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), void 0 !== a && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
    }, c.prototype.reset = function() {
        this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput")
    }, c.prototype.trigger = function(a) {
        this.$input.trigger("click"), a.preventDefault()
    };
    var d = a.fn.fileinput;
    a.fn.fileinput = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.fileinput");
            e || d.data("bs.fileinput", e = new c(this, b)), "string" == typeof b && e[b]()
        })
    }, a.fn.fileinput.Constructor = c, a.fn.fileinput.noConflict = function() {
        return a.fn.fileinput = d, this
    }, a(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function(b) {
        var c = a(this);
        if (!c.data("bs.fileinput")) {
            c.fileinput(c.data());
            var d = a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            d.length > 0 && (b.preventDefault(), d.trigger("click.bs.fileinput"))
        }
    })
}(window.jQuery);
