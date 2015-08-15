void((function($w){'use strict';
 var e,o=$w,p='NameSpaceUniqueId';
 if((p in o) && o.hasOwnProperty(p) && (e=o[p]) instanceof Function){
	e(o);
 }else if(!e||Object.getOwnPropertyDescriptor(o,p).writable){
	(e=o[p]=function(global){

		log(this.runs++);

	}.bind({runs:0}))(o);
 };
})(window));
