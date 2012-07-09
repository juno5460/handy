define("#position/0.9.0/position",["#zepto/0.9.0/zepto"],function(e,t){function o(e){e=c(e)||{},e.nodeType&&(e={element:e});var t=null;toString.call(e.element)==="[object String]"||e.element&&e.element.nodeType?t=i(e.element)[0]:toString.call(e.element)==="[object Array]"?t=e.element[0]:t=r;if(t.nodeType!==1)throw new Error("posObject.element is invalid.");var n={element:t,x:e.x||0,y:e.y||0},o=t===r||t._id==="VIEWPORT";return n.offset=function(){return s?{left:0,top:0}:o?{left:window.scrollX,top:window.scrollY}:i(t).offset()},n.size=function(){var e=o?i(window):i(t);return e[0].nodeType!==1?{width:l(document.documentElement.clientWidth),height:l(document.documentElement.clientHeight)}:{width:e[0].offsetWidth,height:e[0].offsetHeight}},n}function u(e){e.x=a(e.x,e,"width"),e.y=a(e.y,e,"height")}function a(e,t,n){e+="",e=e.replace(/px/gi,""),/\D/.test(e)&&(e=e.replace(/(?:top|left)/gi,"0%").replace(/center/gi,"50%").replace(/(?:bottom|right)/gi,"100%")),e.indexOf("%")!==-1&&(e=e.replace(/(\d+\.?\d+)%/gi,function(e,r){return t.size()[n]*(r/100)}));if(/[+\-*\/]/.test(e))try{e=(new Function("return "+e))()}catch(r){throw new Error("Invalid position value: "+e)}return l(e)}function f(e){var t=e[0].offsetParent;if(!t)return{top:0,left:0};t[0]===document.documentElement&&(t=i(document.body));var n=t===document.querySelector("body")?{left:0,top:0}:i(t).offset();return n.top+=l(i(t).css("border-top-width")),n.left+=l(i(t).css("border-left-width")),n}function l(e){return parseFloat(e,10)||0}function c(e){return i(e)[0]}var n=t,r={_id:"VIEWPORT",nodeType:1},i=e("#zepto/0.9.0/zepto"),s=!1;n.pin=function(e,t){e=o(e),t=o(t);var n=i(e.element);n.css("position")!=="fixed"?(n.css("position","absolute"),s=!1):s=!0,u(e),u(t);var r=f(n),a=t.offset(),l=a.top+t.y-e.y-r.top,c=a.left+t.x-e.x-r.left;n.css({left:c,top:l})},n.center=function(e,t){n.pin({element:e,x:"50%",y:"50%"},{element:t,x:"50%",y:"50%"})},n.VIEWPORT=r});