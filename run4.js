//void expression Immediately Invoked Function Expressions
/*,'group','groupCollapsed','groupEnd','table','dirxml','assert','time','timeEnd','error'*/

function process(thewindow) {'use strict';
	var p='NameSpaceUniqueId',o=thewindow,O=o.Object,e=O.getOwnPropertyDescriptor(o,p);
	if(e && !e.writable){e=o[p];}else{
	 var C=o.console, Cb=(function(p){var o=C;return o[p].bind(o);});
	 if(O.isExtensible(o)){
		var log=(function(){var p,i,m=arguments,f=Cb,e=f('log');for(i in m){p=m[i];e[p]=f(p);};return e;})('clear','dir','count','info','warn'),
		CreateRawObject=O.create.bind(null,null);
		O.defineProperty(o,p,{
		 value:(e=function(G){'use strict';
		 function at(e,s,h,b){e.addEventListener(s,function f(x){var o=x,e=o.target,s=o.type;h(e,s,o);e.removeEventListener(s,f);},b);}//b:false
		 var g=G,d=g.document,drs=d.readyState,dfl='load',dcl='DOMContentLoaded',ok='complete',
		 M=new MutationObserver(function(o){g.mutate=1;M.disconnect();}),
		 R=function(e,s){
			var w=e,L=function(e){

				setTimeout(function(){
					var w=e;//d=e.document,h=d.documentElement;
					if(w.mutate===1){log.warn('mutate!');w.mutate=0;R(w,1);}else{
						log.info(ok);
					};
				},9);
			};
			M.observe(d,{childList:1,attributes:1,characterData:1,subtree:1});
			//<snapshot>
			if(s===1){L(w);}else{at(w,dfl,L);};
		 };
		 log.clear();log.count('•'+p);log(((e.compatMode==='BackCompat')?'quirks':'standard'),'mode');
		 if(drs===ok){R(g,1);}else{at(g,drs==='interactive'?dfl:dcl,R);};
		 }.bind(Cb=null))});
		O.freeze(e);
	 }else{e=Cb('error').bind('locked!');};
	};
	e(o);
};//(window);
//===============================


/*

d.documentElement.appendChild(document.createElement('p'));
h=d.documentElement;
log(d.mutate);
)?log.warn('mutate!'):log.info(ok);
		 M.observe(d,{childList:1,attributes:1,characterData:1,subtree:1});

d.documentElement.appendChild(document.createElement('p'));

		 M=new MutationObserver(function(o){log('mutations!%o',o);M.disconnect();d.mutate=1;}),


*/
//e,s,o >(e:element/s:event-tipe/o:event-object)

//.document
//function (){};
//false
//log.dir(arguments);
//if(){}else{}
