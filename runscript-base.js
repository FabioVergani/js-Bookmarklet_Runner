//void expression Immediately Invoked Function Expressions
void function($w){
 var p='NameSpaceUniqueId', o=$w, O=o.Object, e=O.getOwnPropertyDescriptor(o,p), CreateRawObject, log;
 if(e && !e.writable){'use strict';
	e=o[p];
 }else{
	(log=(function($c){var f=function(p){var o=$c;return o[p].bind(o);},e=f('log');['clear','group','groupCollapsed','groupEnd','info','warn','error','count','table','dir','dirxml','assert','time','timeEnd'].forEach(function(p){e[p]=f(p);});return e;})(o.console)).clear();
	CreateRawObject=O.create.bind(null,null);
	if(O.isExtensible(o)){
	 O.defineProperty(o,p,{value:(e=function($g){'use strict';

		var w=$g;/*<—>*/

		log.count('•'+p);
	 }.bind(null))});
	 O.freeze(e);
	}else{
	 e=log.error.bind(null,'locked!');
	};
 };
 e(o);
}(window);
