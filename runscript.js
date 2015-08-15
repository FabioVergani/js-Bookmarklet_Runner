void((function($w){'use strict';
 var e, o=$w, p='NameSpaceUniqueId';
 if((p in o) && o.hasOwnProperty(p) && (e=o[p]) instanceof Function){
	e(o,2);
 }else if(!e||Object.getOwnPropertyDescriptor(o,p).writable){

	(e=o[p]=function scope(global,i){

		log(i);

	})(o,1);

 };
})(window));

