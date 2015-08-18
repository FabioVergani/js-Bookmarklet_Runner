//void expression Immediately Invoked Function Expressions
const process=function(W){'use strict';
 var p='NameSpaceUniqueId', o=W, O=o.Object, e=O.getOwnPropertyDescriptor(o,p), CreateRawObject, Log;
 if(e && !e.writable){
	e=o[p];
 }else{
	Log=(function($c){var f=function(p){var o=$c;return o[p].bind(o);},e=f('log');['clear','group','groupCollapsed','groupEnd','info','warn','error','count','table','dir','dirxml','assert','time','timeEnd'].forEach(function(p){e[p]=f(p);});return e;})(o.console);
	CreateRawObject=O.create.bind(null,null);
	if(O.isExtensible(o)){
	 O.defineProperty(o,p,{value:(e=function(G){'use strict';
		function at(e,s,h,b){e.addEventListener(s,function f(x){var o=x,e=o.target,s=o.type;h(e,s,o,f);e.removeEventListener(s,f);},b);}
	/*<*/
		var log=Log, dir=log.dir, $w=G, $d=$w.document, drs=$d.readyState, dcl='DOMContentLoaded',
		load=function(e,s,o,f){
			log.info('2/2');dir($w);
			//<handle:fullyload>
		},
		ready=function(e,s,o,f){
			var k=(s===1);
			log.clear();log.count('•'+p);log.info('1/2',k?'afterload':dcl);dir(e);
			//<handle:readydom>
			if(k){
				load($w,1);
			}else{
				at($w,'load',load);
			};
		};
	/*>*/
		if(drs==='complete'){ready($d,1);}else{at($d,drs==='interactive'?'load':dcl,ready);};
	 }.bind(null))});
	 O.freeze(e);
	}else{
	 e=Log.error.bind(null,'locked!');
	};
 };
 e(o);
};//(window);
//===============================function (){};
//log.dir();false
//dir(arguments);
//if(){}else{}
