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
		 value:(e=function(G){'use strict';
		 function at(e,s,h,b){e.addEventListener(s,function f(x){var o=x,e=o.target,s=o.type;h(e,s,o);e.removeEventListener(s,f);},b);}//b:false
		 var g=G,d=g.document,drs=d.readyState,dfl='load',dcl='DOMContentLoaded',
		 R=function(e,s){var w=e,k=(s===1),L=function(e){
			 //log.dir(e);
			 log.info('2/2 on',dfl);
			};
			if(k){L(w);}else{at(w,dfl,L);};log.info('1/2 on',k?dfl:dcl);
		 };
		 //
		 log.clear();log.count('•'+p);log(((e.compatMode==='BackCompat')?'quirks':'standard'),'mode');
		 //
		 if(drs==='complete'){R(g,1);}else{at(g,drs==='interactive'?dfl:dcl,R);};
		 }.bind(Cb=null))});
		O.freeze(e);
	 }else{e=Cb('error').bind('locked!');};
	};
	e(o);
};//(window);
//===============================


//e,s,o >(e:element/s:event-tipe/o:event-object)

//.document
//function (){};
//false
//log.dir(arguments);
//if(){}else{}
