!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=n(3),r=o(s),i=n(2),a=o(i),u=document.getElementById("btn_submit");document.getElementById("btn_cancel").addEventListener("click",function(){document.getElementById("total").value="",document.getElementById("people").value=""}),u.addEventListener("click",function(){var e=document.getElementById("total").value,t=document.getElementById("people").value,n=document.getElementById("result"),o=new a.default(e,t);if(o.validate(),o.status)n.innerHTML="&#36 "+o.result.toFixed(2),n.classList.remove("error");else{var s=[];for(var i in o.messages)0!=o.messages[i]&&(r.default.log(o.messages[i]),s.push(o.messages[i]));n.innerHTML=s.join("</br>"),n.classList.add("error")}})},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t,n){o(this,e),this.total=t,this.people=n,this.messages=[],this.validattionStatus=!1}return s(e,[{key:"validate",value:function(){var e="Please Enter Number to ";this.messages.total=(isNaN(this.total)||""===this.total)&&e+"total",this.messages.people=(isNaN(this.people)||""===this.people)&&e+"people",this.validattionStatus=!isNaN(this.total)&&!isNaN(this.people)&&""!==this.total&&""!==this.people&&!0}},{key:"result",get:function(){return this.total/this.people}},{key:"status",get:function(){return this.validattionStatus}},{key:"errorMessages",get:function(){return this.messages}}]),e}();t.default=r},function(e,t,n){"use strict";function o(e){alert(e)}function s(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={announce:o,log:s}},function(e,t,n){n(0),e.exports=n(1)}]);