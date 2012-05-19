define("#pageTransition/0.9.0/pageTransition",["events","zepto"],function(a,b,c){function g(a){this.options=e.extend({},f,a),this._prevPages=[],this._step=0,this._DATAATTRIBUTENAMESPACE="data-pageTransition"}var d=a("events"),e=a("zepto"),f={srcNode:null};d.mixTo(g),g.prototype.transition=function(a){this.nextPage=e(a);if(this.getPage()===this.nextPage.get(0))return;this._nextPageParent=this.nextPage.parent(),this._transitionForward()},g.prototype.getPage=function(){return this.page[0]},g.prototype.render=function(){this._insertPageViewport(),this.sync(),this.bindUI()},g.prototype.sync=function(){var a=e(this.options.srcNode),b=a.css("width"),c=this.viewport.find("*["+this._DATAATTRIBUTENAMESPACE+"-role=page]");this.viewport.css({width:parseInt(b,10)*c.length}),a.css({overflow:"hidden"}),c.css({"float":"left",width:b}).show()},g.prototype.bindUI=function(){var a=this.viewport.find("*["+this._DATAATTRIBUTENAMESPACE+"-role=trigger]");a.unbind("click.pageTransition").bind("click.pageTransition",e.proxy(function(a){a.preventDefault();var b=e(a.currentTarget).attr(""+this._DATAATTRIBUTENAMESPACE+"-action");switch(b){case"forward":this.nextPage=e(e(a.currentTarget).attr(""+this._DATAATTRIBUTENAMESPACE+"-forward")),this._nextPageParent=this.nextPage.parent(),this._transitionForward();break;case"back":this._transitionBack(a.currentTarget)}},this))},g.prototype.destroy=function(){var a=this.viewport.find("*["+this._DATAATTRIBUTENAMESPACE+"-role=trigger]");a.unbind("click.pageTransition"),e(this.options.srcNode).attr("style",null).append(this._originPage.attr("style",null)),this.page.removeAttr("style").appendTo(this._nextPageParent).hide(),this.viewport.remove(),this._step=0,this._prevPages=[],this.page=null,this.nextPage=null,this.viewport=null,this._nextPageParent=null,this._originPage=null},g.prototype._transitionForward=function(){this.trigger("transitionStart","forward",this.page[0],this),this.nextPage.appendTo(this.viewport),this.sync(),this.viewport.animate({marginLeft:-parseInt(e(this.options.srcNode).css("width"),10)},300,null,e.proxy(function(){this.__transitionForwardEnd()},this))},g.prototype.__transitionForwardEnd=function(){this.page.appendTo(this._nextPageParent).hide(),this.bindUI(),this.trigger("transitionEnd","forward",this.nextPage[0],this),this._prevPages.push(this.page),this._step++,this.page=this.nextPage,this.viewport.css({marginLeft:0})},g.prototype._transitionBack=function(){this.trigger("transitionStart","back",this.page[0],this),this.viewport.prepend(this._prevPages[this._step-1]),this.sync(),this.viewport.css({marginLeft:-parseInt(e(this.options.srcNode).css("width"),10)}),this.viewport.animate({marginLeft:0},300,null,e.proxy(function(){this._transitionBackEnd()},this))},g.prototype._transitionBackEnd=function(){this.page.appendTo(this._nextPageParent).hide(),this.bindUI(),this.trigger("transitionEnd","back",this._prevPages[this._step-1]||this._originPage,this),this.nextPage=this.page,this.page=this._prevPages[this._step-1],this.viewport.css({marginLeft:0}),this._prevPages.splice(this._step-1),this._step--},g.prototype._insertPageViewport=function(){var a=e(this.options.srcNode),b=e("<div "+this._DATAATTRIBUTENAMESPACE+'-role="viewport"></div>'),c=e(a.find("*["+this._DATAATTRIBUTENAMESPACE+"-role=page]")[0]);c.wrapAll(b),this.viewport=e(b,a),this.page=c,this._originPage=c},c.exports=g});