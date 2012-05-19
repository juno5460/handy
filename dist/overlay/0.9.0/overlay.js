define("#overlay/0.9.0/overlay",["base","zepto"],function(a,b,c){var d=a("base"),e=a("zepto"),f=d.extend({options:{element:null,parentNode:e("body"),styles:{zIndex:9999,display:"none"}},initialize:function(a){this.setOptions(a),this.shim=null},render:function(){return this.options.element&&!e(this.options.element).parent().get(0)&&(this.options.element=e(this.options.element).hide()),this.options.element=e(this.options.element).appendTo(this.options.parentNode),this.setStyles(this.options.styles),this.bindUI(),this},bindUI:function(){var a=this.options.element.find('*[data-overlay-role="trigger"]'),b=this;return Array.prototype.slice.call(a),a.forEach(function(a){if(a&&(action=e(a).attr("data-overlay-action")))switch(action){case"hide":e(a).unbind("click.overlay").bind("click.overlay",e.proxy(function(a){a.preventDefault(),this.hide()},b));break;case"show":e(a).unbind("click.overlay").bind("click.overlay",e.proxy(function(a){a.preventDefault(),this.show()},b));break;case"destroy":e(a).unbind("click.overlay").bind("click.overlay",e.proxy(function(a){a.preventDefault(),this.destroy()},b))}}),this},destroy:function(){this.options.element&&e(this.options.element).remove(),e(this.shim).remove(),this.options.element=null,this.shim=null,this.options.parentNode=e("body"),this.options.styles={zIndex:9999}},show:function(){var a="";return e(this.options.element).css("display")==="block"?a="block":e(this.options.element).css("display")==="-webkit-box"&&(a="-webkit-box"),e(this.options.element).css({display:a}),this.addShim(),this.trigger("shown",this),this},hide:function(){return e(this.options.element).hide(),this.trigger("hide",this),this.shim&&e(this.shim).remove(),this.shim=null,this},setStyles:function(a){return e(this.options.element).css(a),this},addShim:function(){if(this.shim)return;var a=e(this.options.element),b=a.offset(),c=e('<div data-overlay-role="shim" style="position:absolute;pointer-events:none;margin:0;padding:0;border:none;background:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:'+b.width+"px;height:"+b.height+"px;"+"top:"+b.top+"px;left:"+b.left+"px;"+"z-index:"+(parseInt(a.css("zIndex"),10)-1||1)+';"></div>');return this.shim=c.appendTo(a.parent()),this}});c.exports=f});