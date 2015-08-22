//void expression Immediately Invoked Function Expressions
/*,'group','groupCollapsed','groupEnd','warn','error','table','dirxml','assert','time','timeEnd'*/

function process(thewindow) {'use strict';
	var p='NameSpaceUniqueId',o=thewindow,O=o.Object,e=O.getOwnPropertyDescriptor(o,p);
	if(e && !e.writable){e=o[p];}else{
	 var C=o.console, Cb=(function(p){var o=C;return o[p].bind(o);});
	 if(O.isExtensible(o)){
		var log=function(){var p,i,m=arguments,f=Cb,e=f('log');for(i in m){p=m[i];e[p]=f(p);};return e;},
		CreateRawObject=O.create.bind(null,null);
		log=log('clear','dir','count','info');
		O.defineProperty(o,p,{
		 value:(e=function(global){'use strict';
		 function at(e, s, h, b){e.addEventListener(s, function f(x){var o=x,e=o.target,s=o.type;h(e, s, o, f);e.removeEventListener(s, f);},b);}
		 var $w=global,$d=$w.document,drs=$d.readyState,dfl='load',dcl='DOMContentLoaded',

		 load=function(e,s,o,f){
			log.info('2/2 on', dfl);
			//log.dir(e);
		 },

		 ready=function(e,s,o,f){
			log.info('1/2 on',afterload?dfl:dcl);
			var afterload=(s===1);
			if(afterload){
			 load($w,1);
			}else{
			 at($w,dfl,load);
			};
		 };
		 //
		 log.clear();log.count('•'+p);log(((e.compatMode==='BackCompat')?'quirks':'standard'),'mode');
		 //
		 if(drs==='complete'){ready($d,1);}else{at($d,drs==='interactive'?dfl:dcl,ready);};
		 }.bind(Cb=null))});
		O.freeze(e);
	 }else{e=Cb('error').bind('locked!');};
	};
	e(o);
};//(window);
//===============================

//function (){};
//false
//dir(arguments);
//if(){}else{}
