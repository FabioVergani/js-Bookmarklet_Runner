void((function($w){'use strict';
 var p='NameSpaceUniqueId', o=$w, O=o.Object, e=O.getOwnPropertyDescriptor(o,p);
 if(e && !e.writable){
	e=o[p];
 }else{
	O.defineProperty(o,p,{'writable':false,'value':(e=function(gs){//log(this.runs++);
		var win=gs;
	}.bind({runs:0}))});
	O.freeze(e);
 };
 e(o);
})(window));
