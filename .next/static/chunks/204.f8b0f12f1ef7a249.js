"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{2204:(e,t,i)=>{i.d(t,{$:()=>sw});var o=i(5155),s=i(2115),r=i(5704),a=function(){return(a=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function n(e,t,i){if(i||2==arguments.length)for(var o,s=0,r=t.length;s<r;s++)!o&&s in t||(o||(o=Array.prototype.slice.call(t,0,s)),o[s]=t[s]);return e.concat(o||Array.prototype.slice.call(t))}var l="-ms-",d="-moz-",c="-webkit-",p="comm",f="rule",u="decl",h="@keyframes",g=Math.abs,m=String.fromCharCode,x=Object.assign;function b(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,i){return e.replace(t,i)}function $(e,t,i){return e.indexOf(t,i)}function y(e,t){return 0|e.charCodeAt(t)}function v(e,t,i){return e.slice(t,i)}function w(e){return e.length}function j(e,t){return t.push(e),e}function k(e,t){return e.filter(function(e){return!b(e,t)})}var S=1,C=1,A=0,I=0,P=0,R="";function E(e,t,i,o,s,r,a,n){return{value:e,root:t,parent:i,type:o,props:s,children:r,line:S,column:C,length:a,return:"",siblings:n}}function N(e,t){return x(E("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=N(e.root,{children:[e]});j(e,e.siblings)}function Y(){return P=I<A?y(R,I++):0,C++,10===P&&(C=1,S++),P}function _(){return y(R,I)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){var t,i;return(t=I-1,i=function e(t){for(;Y();)switch(P){case t:return I;case 34:case 39:34!==t&&39!==t&&e(P);break;case 40:41===t&&e(t);break;case 92:Y()}return I}(91===e?e+2:40===e?e+1:e),v(R,t,i)).trim()}function D(e,t,i,o,s,r,a,n,l,d,c,p){for(var u=s-1,h=0===s?r:[""],m=h.length,x=0,b=0,$=0;x<o;++x)for(var y=0,w=v(e,u+1,u=g(b=a[x])),j=e;y<m;++y)(j=(b>0?h[y]+" "+w:z(w,/&\f/g,h[y])).trim())&&(l[$++]=j);return E(e,t,i,0===s?f:n,l,d,c,p)}function B(e,t,i,o,s){return E(e,t,i,u,v(e,0,o),v(e,o+1,-1),o,s)}function X(e,t){for(var i="",o=0;o<e.length;o++)i+=t(e[o],o,e,t)||"";return i}function F(e,t,i,o){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case u:return e.return=e.return||e.value;case p:return"";case h:return e.return=e.value+"{"+X(e.children,o)+"}";case f:if(!w(e.value=e.props.join(",")))return""}return w(i=X(e.children,o))?e.return=e.value+"{"+i+"}":""}function G(e,t,i,o){if(e.length>-1&&!e.return)switch(e.type){case u:e.return=function e(t,i,o){var s;switch(s=i,45^y(t,0)?(((s<<2^y(t,0))<<2^y(t,1))<<2^y(t,2))<<2^y(t,3):0){case 5103:return c+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+t+t;case 4789:return d+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return c+t+d+t+l+t+t;case 5936:switch(y(t,i+11)){case 114:return c+t+l+z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return c+t+l+z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return c+t+l+z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return c+t+l+t+t;case 6165:return c+t+l+"flex-"+t+t;case 5187:return c+t+z(t,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return c+t+l+"flex-item-"+z(t,/flex-|-self/g,"")+(b(t,/flex-|baseline/)?"":l+"grid-row-"+z(t,/flex-|-self/g,""))+t;case 4675:return c+t+l+"flex-line-pack"+z(t,/align-content|flex-|-self/g,"")+t;case 5548:return c+t+l+z(t,"shrink","negative")+t;case 5292:return c+t+l+z(t,"basis","preferred-size")+t;case 6060:return c+"box-"+z(t,"-grow","")+c+t+l+z(t,"grow","positive")+t;case 4554:return c+z(t,/([^-])(transform)/g,"$1"+c+"$2")+t;case 6187:return z(z(z(t,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),t,"")+t;case 5495:case 3959:return z(t,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return z(z(t,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+t+t;case 4200:if(!b(t,/flex-|baseline/))return l+"grid-column-align"+v(t,i)+t;break;case 2592:case 3360:return l+z(t,"template-","")+t;case 4384:case 3616:return o&&o.some(function(e,t){return i=t,b(e.props,/grid-\w+-end/)})?~$(t+(o=o[i].value),"span",0)?t:l+z(t,"-start","")+t+l+"grid-row-span:"+(~$(o,"span",0)?b(o,/\d+/):b(o,/\d+/)-b(t,/\d+/))+";":l+z(t,"-start","")+t;case 4896:case 4128:return o&&o.some(function(e){return b(e.props,/grid-\w+-start/)})?t:l+z(z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return z(t,/(.+)-inline(.+)/,c+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(t)-1-i>6)switch(y(t,i+1)){case 109:if(45!==y(t,i+4))break;case 102:return z(t,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+d+(108==y(t,i+3)?"$3":"$2-$3"))+t;case 115:return~$(t,"stretch",0)?e(z(t,"stretch","fill-available"),i,o)+t:t}break;case 5152:case 5920:return z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,i,o,s,r,a,n){return l+i+":"+o+n+(s?l+i+"-span:"+(r?a:a-o)+n:"")+t});case 4949:if(121===y(t,i+6))return z(t,":",":"+c)+t;break;case 6444:switch(y(t,45===y(t,14)?18:11)){case 120:return z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===y(t,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+t;case 100:return z(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,i);return;case h:return X([N(e,{value:z(e.value,"@","@"+c)})],o);case f:if(e.length){var s,r;return s=i=e.props,r=function(t){switch(b(t,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(N(e,{props:[z(t,/:(read-\w+)/,":"+d+"$1")]})),L(N(e,{props:[t]})),x(e,{props:k(i,o)});break;case"::placeholder":L(N(e,{props:[z(t,/:(plac\w+)/,":"+c+"input-$1")]})),L(N(e,{props:[z(t,/:(plac\w+)/,":"+d+"$1")]})),L(N(e,{props:[z(t,/:(plac\w+)/,l+"input-$1")]})),L(N(e,{props:[t]})),x(e,{props:k(i,o)})}return""},s.map(r).join("")}}}var W={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M="u">typeof r&&void 0!==r.env&&(r.env.REACT_APP_SC_ATTR||r.env.SC_ATTR)||"data-styled",H="active",q="data-styled-version",Z="6.1.19",U=`/*!sc*/
`,V="u">typeof window&&"u">typeof document,J=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"u">typeof r&&void 0!==r.env&&void 0!==r.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==r.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==r.env.REACT_APP_SC_DISABLE_SPEEDY&&r.env.REACT_APP_SC_DISABLE_SPEEDY:"u">typeof r&&void 0!==r.env&&void 0!==r.env.SC_DISABLE_SPEEDY&&""!==r.env.SC_DISABLE_SPEEDY&&"false"!==r.env.SC_DISABLE_SPEEDY&&r.env.SC_DISABLE_SPEEDY),K=Object.freeze([]),Q=Object.freeze({}),ee=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),et=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ei=/(^-|-$)/g;function eo(e){return e.replace(et,"-").replace(ei,"")}var es=/(a)(d)/gi,er=function(e){return String.fromCharCode(e+(e>25?39:97))};function ea(e){var t,i="";for(t=Math.abs(e);t>52;t=t/52|0)i=er(t%52)+i;return(er(t%52)+i).replace(es,"$1-$2")}var en,el=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},ed=function(e){return el(5381,e)};function ec(e){return"string"==typeof e}var ep="function"==typeof Symbol&&Symbol.for,ef=ep?Symbol.for("react.memo"):60115,eu=ep?Symbol.for("react.forward_ref"):60112,eh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},em={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ex=((en={})[eu]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},en[ef]=em,en);function eb(e){return("type"in e&&e.type.$$typeof)===ef?em:"$$typeof"in e?ex[e.$$typeof]:eh}var ez=Object.defineProperty,e$=Object.getOwnPropertyNames,ey=Object.getOwnPropertySymbols,ev=Object.getOwnPropertyDescriptor,ew=Object.getPrototypeOf,ej=Object.prototype;function ek(e){return"function"==typeof e}function eS(e){return"object"==typeof e&&"styledComponentId"in e}function eC(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eA(e,t){if(0===e.length)return"";for(var i=e[0],o=1;o<e.length;o++)i+=e[o];return i}function eI(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eP(e,t){Object.defineProperty(e,"toString",{value:t})}function eR(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eE=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;e>=s;)if((s<<=1)<0)throw eR(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var r=o;r<s;r++)this.groupSizes[r]=0}for(var a=this.indexOfGroup(e+1),n=(r=0,t.length);r<n;r++)this.tag.insertRule(a,t[r])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),s=o+i,r=o;r<s;r++)t+="".concat(this.tag.getRule(r)).concat(U);return t},e}(),eN=new Map,eL=new Map,eY=1,e_=function(e){if(eN.has(e))return eN.get(e);for(;eL.has(eY);)eY++;var t=eY++;return eN.set(e,t),eL.set(t,e),t},eO=function(e,t){eY=t+1,eN.set(e,t),eL.set(t,e)},eT="style[".concat(M,"][").concat(q,'="').concat(Z,'"]'),eD=new RegExp("^".concat(M,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eB=function(e,t,i){for(var o,s=i.split(","),r=0,a=s.length;r<a;r++)(o=s[r])&&e.registerName(t,o)},eX=function(e,t){for(var i,o=(null!=(i=t.textContent)?i:"").split(U),s=[],r=0,a=o.length;r<a;r++){var n=o[r].trim();if(n){var l=n.match(eD);if(l){var d=0|parseInt(l[1],10),c=l[2];0!==d&&(eO(c,d),eB(e,c,l[3]),e.getTag().insertRules(d,s)),s.length=0}else s.push(n)}}},eF=function(e){for(var t=document.querySelectorAll(eT),i=0,o=t.length;i<o;i++){var s=t[i];s&&s.getAttribute(M)!==H&&(eX(e,s),s.parentNode&&s.parentNode.removeChild(s))}},eG=function(e){var t,o=document.head,s=e||o,r=document.createElement("style"),a=(t=Array.from(s.querySelectorAll("style[".concat(M,"]"))))[t.length-1],n=void 0!==a?a.nextSibling:null;r.setAttribute(M,H),r.setAttribute(q,Z);var l=i.nc;return l&&r.setAttribute("nonce",l),s.insertBefore(r,n),r},eW=function(){function e(e){this.element=eG(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,i=0,o=t.length;i<o;i++){var s=t[i];if(s.ownerNode===e)return s}throw eR(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eM=function(){function e(e){this.element=eG(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eH=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eq=V,eZ={isServer:!V,useCSSOMInjection:!J},eU=function(){function e(e,t,i){void 0===e&&(e=Q),void 0===t&&(t={});var o=this;this.options=a(a({},eZ),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&V&&eq&&(eq=!1,eF(this)),eP(this,function(){for(var e=o.getTag(),t=e.length,i="",s=0;s<t;s++)!function(t){var s=eL.get(t);if(void 0===s)return;var r=o.names.get(s),a=e.getGroup(t);if(void 0!==r&&r.size&&0!==a.length){var n="".concat(M,".g").concat(t,'[id="').concat(s,'"]'),l="";void 0!==r&&r.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),i+="".concat(a).concat(n,'{content:"').concat(l,'"}').concat(U)}}(s);return i})}return e.registerId=function(e){return e_(e)},e.prototype.rehydrate=function(){!this.server&&V&&eF(this)},e.prototype.reconstructWithOptions=function(t,i){return void 0===i&&(i=!0),new e(a(a({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,i;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,i=e.target,new eE(e.isServer?new eH(i):t?new eW(i):new eM(i))))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(e_(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},e.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(e_(e),i)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(e_(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eV=/&/g,eJ=/^\s*\/\/.*$/gm,eK=new eU,eQ=function(e){var t,i,o,s=Q.options,r=void 0===s?Q:s,a=Q.plugins,n=void 0===a?K:a,l=function(e,o,s){return s.startsWith(i)&&s.endsWith(i)&&s.replaceAll(i,"").length>0?".".concat(t):e},d=n.slice();d.push(function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(eV,i).replace(o,l))}),r.prefix&&d.push(G),d.push(F);var c=function(e,s,a,n){void 0===s&&(s=""),void 0===a&&(a=""),void 0===n&&(n="&"),t=n,i=s,o=RegExp("\\".concat(i,"\\b"),"g");var l,c,f,u,h,x,b=e.replace(eJ,""),k=(h=function e(t,i,o,s,r,a,n,l,d){for(var c,f,u,h,x=0,b=0,k=n,A=0,N=0,L=0,X=1,F=1,G=1,W=0,M="",H=r,q=a,Z=s,U=M;F;)switch(L=W,W=Y()){case 40:if(108!=L&&58==y(U,k-1)){-1!=$(U+=z(T(W),"&","&\f"),"&\f",g(x?l[x-1]:0))&&(G=-1);break}case 34:case 39:case 91:U+=T(W);break;case 9:case 10:case 13:case 32:U+=function(e){for(;(P=_())&&P<33;)Y();return O(e)>2||O(P)>3?"":" "}(L);break;case 92:U+=function(e,t){for(var i;--t&&Y()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return i=I+(t<6&&32==_()&&32==Y()),v(R,e,i)}(I-1,7);continue;case 47:switch(_()){case 42:case 47:j((c=function(e,t){for(;Y()&&e+P!==57&&(e+P!==84||47!==_()););return"/*"+v(R,t,I-1)+"*"+m(47===e?e:Y())}(Y(),I),f=i,u=o,h=d,E(c,f,u,p,m(P),v(c,2,-2),0,h)),d);break;default:U+="/"}break;case 123*X:l[x++]=w(U)*G;case 125*X:case 59:case 0:switch(W){case 0:case 125:F=0;case 59+b:-1==G&&(U=z(U,/\f/g,"")),N>0&&w(U)-k&&j(N>32?B(U+";",s,o,k-1,d):B(z(U," ","")+";",s,o,k-2,d),d);break;case 59:U+=";";default:if(j(Z=D(U,i,o,x,b,r,l,M,H=[],q=[],k,a),a),123===W)if(0===b)e(U,i,Z,Z,H,a,k,l,q);else switch(99===A&&110===y(U,3)?100:A){case 100:case 108:case 109:case 115:e(t,Z,Z,s&&j(D(t,Z,Z,0,0,r,l,M,r,H=[],k,q),q),r,q,k,l,s?H:q);break;default:e(U,Z,Z,Z,[""],q,0,l,q)}}x=b=N=0,X=G=1,M=U="",k=n;break;case 58:k=1+w(U),N=L;default:if(X<1){if(123==W)--X;else if(125==W&&0==X++&&125==(P=I>0?y(R,--I):0,C--,10===P&&(C=1,S--),P))continue}switch(U+=m(W),W*X){case 38:G=b>0?1:(U+="\f",-1);break;case 44:l[x++]=(w(U)-1)*G,G=1;break;case 64:45===_()&&(U+=T(Y())),A=_(),b=k=w(M=U+=function(e){for(;!O(_());)Y();return v(R,e,I)}(I)),W++;break;case 45:45===L&&2==w(U)&&(X=0)}}return a}("",null,null,null,[""],(u=f=a||s?"".concat(a," ").concat(s," { ").concat(b," }"):b,S=C=1,A=w(R=u),I=0,f=[]),0,[0],f),R="",h);r.namespace&&(k=function e(t,i){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(i," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(i," ")),t.props=t.props.map(function(e){return"".concat(i," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,i)),t})}(k,r.namespace));var N=[];return X(k,(c=(l=d.concat((x=function(e){return N.push(e)},function(e){e.root||(e=e.return)&&x(e)}))).length,function(e,t,i,o){for(var s="",r=0;r<c;r++)s+=l[r](e,t,i,o)||"";return s})),N};return c.hash=n.length?n.reduce(function(e,t){return t.name||eR(15),el(e,t.name)},5381).toString():"",c}(),e0=s.createContext({shouldForwardProp:void 0,styleSheet:eK,stylis:eQ});function e1(){return(0,s.useContext)(e0)}e0.Consumer,s.createContext(void 0);var e5=function(){function e(e,t){var i=this;this.inject=function(e,t){void 0===t&&(t=eQ);var o=i.name+t.hash;e.hasNameForId(i.id,o)||e.insertRules(i.id,o,t(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eP(this,function(){throw eR(12,String(i.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=eQ),this.name+e.hash},e}();function e2(e){for(var t="",i=0;i<e.length;i++){var o=e[i];if(1===i&&"-"===o&&"-"===e[0])return e;o>="A"&&o<="Z"?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var e4=function(e){return null==e||!1===e||""===e},e6=function(e){var t=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!e4(o)&&(Array.isArray(o)&&o.isCss||ek(o)?t.push("".concat(e2(i),":"),o,";"):eI(o)?t.push.apply(t,n(n(["".concat(i," {")],e6(o),!1),["}"],!1)):t.push("".concat(e2(i),": ").concat(null==o||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||i in W||i.startsWith("--")?String(o).trim():"".concat(o,"px"),";")))}return t};function e3(e,t,i,o){if(e4(e))return[];if(eS(e))return[".".concat(e.styledComponentId)];if(ek(e))return!ek(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:e3(e(t),t,i,o);return e instanceof e5?i?(e.inject(i,o),[e.getName(o)]):[e]:eI(e)?e6(e):Array.isArray(e)?Array.prototype.concat.apply(K,e.map(function(e){return e3(e,t,i,o)})):[e.toString()]}var e8=ed(Z),e9=function(){function e(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===i||i.isStatic)&&function(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(ek(i)&&!eS(i))return!1}return!0}(e),this.componentId=t,this.baseHash=el(e8,t),this.baseStyle=i,eU.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=eC(o,this.staticRulesId);else{var s=eA(e3(this.rules,e,t,i)),r=ea(el(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,r)){var a=i(s,".".concat(r),void 0,this.componentId);t.insertRules(this.componentId,r,a)}o=eC(o,r),this.staticRulesId=r}else{for(var n=el(this.baseHash,i.hash),l="",d=0;d<this.rules.length;d++){var c=this.rules[d];if("string"==typeof c)l+=c;else if(c){var p=eA(e3(c,e,t,i));n=el(n,p+d),l+=p}}if(l){var f=ea(n>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,i(l,".".concat(f),void 0,this.componentId)),o=eC(o,f)}}return o},e}(),e7=s.createContext(void 0);e7.Consumer;var te={};function tt(e,t,i){var o,r,n,l,d=eS(e),c=!ec(e),p=t.attrs,f=void 0===p?K:p,u=t.componentId,h=void 0===u?(o=t.displayName,r=t.parentComponentId,te[n="string"!=typeof o?"sc":eo(o)]=(te[n]||0)+1,l="".concat(n,"-").concat(ea(ed(Z+n+te[n])>>>0)),r?"".concat(r,"-").concat(l):l):u,g=t.displayName,m=void 0===g?ec(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):g,x=t.displayName&&t.componentId?"".concat(eo(t.displayName),"-").concat(t.componentId):t.componentId||h,b=d&&e.attrs?e.attrs.concat(f).filter(Boolean):f,z=t.shouldForwardProp;if(d&&e.shouldForwardProp){var $=e.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;z=function(e,t){return $(e,t)&&y(e,t)}}else z=$}var v=new e9(i,x,d?e.componentStyle:void 0);function w(e,t){return function(e,t,i){var o,r,n=e.attrs,l=e.componentStyle,d=e.defaultProps,c=e.foldedComponentIds,p=e.styledComponentId,f=e.target,u=s.useContext(e7),h=e1(),g=e.shouldForwardProp||h.shouldForwardProp,m=(void 0===(o=d)&&(o=Q),t.theme!==o.theme&&t.theme||u||o.theme||Q),x=function(e,t,i){for(var o,s=a(a({},t),{className:void 0,theme:i}),r=0;r<e.length;r+=1){var n=ek(o=e[r])?o(s):o;for(var l in n)s[l]="className"===l?eC(s[l],n[l]):"style"===l?a(a({},s[l]),n[l]):n[l]}return t.className&&(s.className=eC(s.className,t.className)),s}(n,t,m),b=x.as||f,z={};for(var $ in x)void 0===x[$]||"$"===$[0]||"as"===$||"theme"===$&&x.theme===m||("forwardedAs"===$?z.as=x.forwardedAs:g&&!g($,b)||(z[$]=x[$]));var y=(r=e1(),l.generateAndInjectStyles(x,r.styleSheet,r.stylis)),v=eC(c,p);return y&&(v+=" "+y),x.className&&(v+=" "+x.className),z[ec(b)&&!ee.has(b)?"class":"className"]=v,i&&(z.ref=i),(0,s.createElement)(b,z)}(j,e,t)}w.displayName=m;var j=s.forwardRef(w);return j.attrs=b,j.componentStyle=v,j.displayName=m,j.shouldForwardProp=z,j.foldedComponentIds=d?eC(e.foldedComponentIds,e.styledComponentId):"",j.styledComponentId=x,j.target=d?e.target:e,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=d?function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var o=0;o<t.length;o++)!function e(t,i,o){if(void 0===o&&(o=!1),!o&&!eI(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)t[s]=e(t[s],i[s]);else if(eI(i))for(var s in i)t[s]=e(t[s],i[s]);return t}(e,t[o],!0);return e}({},e.defaultProps,t):t}}),eP(j,function(){return".".concat(j.styledComponentId)}),c&&function e(t,i,o){if("string"!=typeof i){if(ej){var s=ew(i);s&&s!==ej&&e(t,s,o)}var r=e$(i);ey&&(r=r.concat(ey(i)));for(var a=eb(t),n=eb(i),l=0;l<r.length;++l){var d=r[l];if(!(d in eg||o&&o[d]||n&&d in n||a&&d in a)){var c=ev(i,d);try{ez(t,d,c)}catch{}}}}return t}(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function ti(e,t){for(var i=[e[0]],o=0,s=t.length;o<s;o+=1)i.push(t[o],e[o+1]);return i}var to=function(e){return Object.assign(e,{isCss:!0})};function ts(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return ek(e)||eI(e)?to(e3(ti(K,n([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?e3(e):to(e3(ti(e,t)))}var tr=function(e){return function e(t,i,o){if(void 0===o&&(o=Q),!i)throw eR(1,i);var s=function(e){for(var s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];return t(i,o,ts.apply(void 0,n([e],s,!1)))};return s.attrs=function(s){return e(t,i,a(a({},o),{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},s.withConfig=function(s){return e(t,i,a(a({},o),s))},s}(tt,e)};function ta(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var o=eA(ts.apply(void 0,n([e],t,!1)));return new e5(ea(ed(o)>>>0),o)}ee.forEach(function(e){tr[e]=tr(e)});let tn={margin:"auto",position:"absolute",left:0,right:0,top:0,bottom:0},tl={small:"10px",default:"12px",large:"14px"},td={small:"24px",default:"30px",large:"36px"},tc={small:"12px",default:"15px",large:"18px"},tp=ta`
       0%{
            transform: rotate(0deg);
        }
        10%{
            transform: rotate(45deg);
        }
        50%{
            opacity: 1;
            transform: rotate(160deg);
        }
        62%{
            opacity: 0;
        }
        65%{
            opacity: 0;
            transform: rotate(200deg);
        }
        90%{
            transform: rotate(340deg);
        }
        100%{
            transform: rotate(360deg);
        }
`,tf=tr.div`
  width: 50px;
  height: 50px;
`,tu=tr.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${tp} ${e=>e.speed||2}s linear infinite;
`,th=tr(tu)`
  animation-delay: 0.2s;
`,tg=tr(tu)`
  animation-delay: 0.4s;
`,tm=tr(tu)`
  animation-delay: 0.6s;
`,tx=tr(tu)`
  animation-delay: 0.8s;
`,tb=tr.span`
  display: inline-block;
  height: ${e=>tl[e.size]||tl.default};
  width: ${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
`,tz=({style:e=tn,speed:t,color:i,size:s="default"})=>(0,o.jsxs)(tf,{style:e,speed:t,color:i,size:s,children:[(0,o.jsx)(th,{speed:t,children:(0,o.jsx)(tb,{color:i,size:s})}),(0,o.jsx)(tg,{speed:t,children:(0,o.jsx)(tb,{color:i,size:s})}),(0,o.jsx)(tm,{speed:t,children:(0,o.jsx)(tb,{color:i,size:s})}),(0,o.jsx)(tx,{speed:t,children:(0,o.jsx)(tb,{color:i,size:s})})]}),t$=ta`
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
`,ty=tr.div`
  width: 100px;
  height: ${e=>td[e.size]||td.default};
  text-align: center;
  font-size: 10px;
`,tv=tr.div`
  background-color: ${e=>e.color||"#00adb5"};
  height: 100%;
  width: 6px;
  display: inline-block;
  margin-left: 5px;
  animation: ${t$} ${e=>e.speed||1.2}s infinite ease-in-out;
`,tw=tr(tv)`
  animation-delay: -1.2s;
`,tj=tr(tv)`
  animation-delay: -1.1s;
`,tk=tr(tv)`
  animation-delay: -1s;
`,tS=tr(tv)`
  animation-delay: -0.9s;
`,tC=tr(tv)`
  animation-delay: -0.8s;
`,tA=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(ty,{style:e,size:s,children:[(0,o.jsx)(tw,{color:t,speed:i}),(0,o.jsx)(tj,{color:t,speed:i}),(0,o.jsx)(tk,{color:t,speed:i}),(0,o.jsx)(tS,{color:t,speed:i}),(0,o.jsx)(tC,{color:t,speed:i})]}),tI=ta`
  0%{
    opacity: 1;
    transform: scale(1);
  }
  100%{
      opacity: 0;
      transform: rotate(90deg) scale(.3);
  }
`,tP=tr.div`
  width: 100px;
  height: 100px;
`,tR=tr.span`
  display: inline-block;
  height: ${e=>tl[e.size]||tl.default};
  width: ${e=>tl[e.size]||tl.default};
  margin-top: 50%;
  margin-right: 5px;
  background: ${e=>e.color||"#00adb5"};
  transform-origin: right bottom;
  animation: ${tI} ${e=>e.speed||2}s ease infinite;
`,tE=tr(tR)`
  animation-delay: 0.2s;
`,tN=tr(tR)`
  animation-delay: 0.4s;
`,tL=tr(tR)`
  animation-delay: 0.6s;
`,tY=tr(tR)`
  animation-delay: 0.8s;
`,t_=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(tP,{style:e,children:[(0,o.jsx)(tE,{color:t,speed:i,size:s}),(0,o.jsx)(tN,{color:t,speed:i,size:s}),(0,o.jsx)(tL,{color:t,speed:i,size:s}),(0,o.jsx)(tY,{color:t,speed:i,size:s})]}),tO=ta`
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`,tT=tr.div`
  position: absolute;
  width: 48px;
  height: 48px;
`,tD=tr.div`
  position: absolute;
  width: 100%;
  height: 100%;
`,tB=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  background-color: ${e=>e.color||"#00adb5"} ;
  border-radius: 100%;
  position: absolute;
  animation: ${tO} ${e=>e.speed||1.2}s infinite ease-in-out;
  animation-fill-mode: both;
`,tX=tr(tD)``,tF=tr(tD)`
  transform: rotateZ(45deg);
`,tG=tr(tD)`
  transform: rotateZ(90deg);
`,tW=tr(tB)`
  top: 0;
  left: 0;
`,tM=tr(tB)`
  animation-delay: -0.9s;
  top: 0;
  right: 0;
`,tH=tr(tB)`
  animation-delay: -0.6s;
  right: 0;
  bottom: 0;
`,tq=tr(tB)`
  animation-delay: -0.3s;
  left: 0;
  bottom: 0;
`,tZ=tr(tB)`
  top: 0;
  left: 0;
  animation-delay: -1.1s;
`,tU=tr(tB)`
  animation-delay: -0.8s;
  top: 0;
  right: 0;
`,tV=tr(tB)`
  animation-delay: -0.5s;
  right: 0;
  bottom: 0;
`,tJ=tr(tB)`
  animation-delay: -0.2s;
  left: 0;
  bottom: 0;
`,tK=tr(tB)`
  top: 0;
  left: 0;
  animation-delay: -1s;
`,tQ=tr(tB)`
  animation-delay: -0.7s;
  top: 0;
  right: 0;
`,t0=tr(tB)`
  animation-delay: -0.4s;
  right: 0;
  bottom: 0;
`,t1=tr(tB)`
  animation-delay: -0.1s;
  left: 0;
  bottom: 0;
`,t5=({style:e=tn,color:t,size:i="default",speed:s})=>(0,o.jsxs)(tT,{style:e,children:[(0,o.jsxs)(tX,{children:[(0,o.jsx)(tW,{color:t,size:i,speed:s}),(0,o.jsx)(tM,{color:t,size:i,speed:s}),(0,o.jsx)(tH,{color:t,size:i,speed:s}),(0,o.jsx)(tq,{color:t,size:i,speed:s})]}),(0,o.jsxs)(tF,{children:[(0,o.jsx)(tZ,{color:t,size:i,speed:s}),(0,o.jsx)(tU,{color:t,size:i,speed:s}),(0,o.jsx)(tV,{color:t,size:i,speed:s}),(0,o.jsx)(tJ,{color:t,size:i,speed:s})]}),(0,o.jsxs)(tG,{children:[(0,o.jsx)(tK,{color:t,size:i,speed:s}),(0,o.jsx)(tQ,{color:t,size:i,speed:s}),(0,o.jsx)(t0,{color:t,size:i,speed:s}),(0,o.jsx)(t1,{color:t,size:i,speed:s})]})]}),t2=ta`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
`,t4=tr.div`
  width: 150px;
  height: 150px;
  text-align: center;
`,t6=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  margin-top: calc(50% -  ${e=>tl[e.size]||tl.default} / 2);
  background-color: ${e=>e.color||"#00adb5"};
  border-radius: 100%;
  display: inline-block;
  animation: ${t2} ${e=>e.speed||1.4}s infinite ease-in-out;
  animation-fill-mode: both;
`,t3=tr(t6)`
  animation-delay: -0.48s;
`,t8=tr(t6)`
  animation-delay: -0.32s;
`,t9=tr(t6)`
  animation-delay: -0.16s;

`,t7=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(t4,{style:e,children:[(0,o.jsx)(t3,{color:t,size:s,speed:i}),(0,o.jsx)(t8,{color:t,size:s,speed:i}),(0,o.jsx)(t9,{color:t,size:s,speed:i})]}),ie="#f9c094",it=ta`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ii=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  animation: ${it} ${e=>e.speed||8}s infinite ease-in-out;
`,io=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  margin: auto;
`,is=tr(io)`
  animation: ${e=>(e=>ta`
  0% {
    background: ${ie};
  }
  25% {
    background: ${e};
  }
  50% {
    background: ${e};
  }
  75% {
    background: ${e};
  }
  100% {
    background: ${ie};
  }
`)(e.color||"#00adb5")} ${e=>e.speed/4||2}s infinite ease-in-out;
`,ir=tr(io)`
  animation: ${e=>(e=>ta`
  0% {
    background: ${e};
  }
  25% {
    background: ${ie};
  }
  50% {
    background: ${e};
  }
  75% {
    background: ${e};
  }
  100% {
    background: ${e};
  }
`)(e.color||"#00adb5")} ${e=>e.speed/4||2}s infinite ease-in-out;
`,ia=tr(io)`
  animation: ${e=>(e=>ta`
  0% {
    background: ${e};
  }
  25% {
    background: ${e};
  }
  50% {
    background: ${ie};
  }
  75% {
    background: ${e};
  }
  100% {
    background: ${e};
  }
`)(e.color||"#00adb5")} ${e=>e.speed/4||2}s infinite ease-in-out;
`,il=tr(io)`
  animation: ${e=>(e=>ta`
  0% {
    background: ${e};
  }
  25% {
    background: ${e};
  }
  50% {
    background: ${e};
  }
  75% {
    background: ${ie};
  }
  100% {
    background: ${e};
  }
`)(e.color||"#00adb5")} ${e=>e.speed/4||2}s infinite ease-in-out;
`,id=({style:e=tn,speed:t,size:i="default",color:s})=>(0,o.jsxs)(ii,{style:e,speed:t,size:i,children:[(0,o.jsx)(is,{speed:t,size:i,color:s}),(0,o.jsx)(ir,{speed:t,size:i,color:s}),(0,o.jsx)(il,{speed:t,size:i,color:s}),(0,o.jsx)(ia,{speed:t,size:i,color:s})]}),ic=ta`
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`,ip=ta`
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`,iu=tr.div`
    width: ${e=>td[e.size]||td.default};
    height: ${e=>td[e.size]||td.default};
    &:before {
      content: '';
      width:${e=>td[e.size]||td.default};
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: calc(${e=>td[e.size]||td.default} + 10px) ;
      left: 0;
      border-radius: 50%;
      animation: ${ip} ${e=>e.speed||.5}s linear infinite;
    }
    &:after {
      content: '';
      width: ${e=>td[e.size]||td.default};
      height:${e=>td[e.size]||td.default};
      background: ${e=>e.color||"#00adb5"};
      animation: ${ic} ${e=>e.speed||.5}s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
`,ih=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(iu,{style:e,color:t,speed:i,size:s}),ig=ta`
  0% {
    transform: translateX(-50%) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(125%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(300%) rotate(45deg) scale(0);
  }
`,im=tr.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`,ix=tr.div`
    height: ${e=>td[e.size]||td.default};
    width: ${e=>td[e.size]||td.default};
    background-color:  ${e=>e.color||"#00adb5"};
    position: absolute;
    margin: auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: ${ig} ${e=>e.speed||3}s linear infinite;
`,ib=tr(ix)`
 animation-delay:  calc(${e=>e.speed||3}s * 2 / -1.5);
`,iz=tr(ix)`
 animation-delay:  calc(${e=>e.speed||3}s * 3 / -1.5);
`,i$=tr(ix)`
 animation-delay:  calc(${e=>e.speed||3}s * 4 / -1.5);
`,iy=({style:e=tn,color:t,size:i="default",speed:s})=>(0,o.jsxs)(im,{style:e,children:[(0,o.jsx)(ib,{color:t,size:i,speed:s}),(0,o.jsx)(iz,{color:t,size:i,speed:s}),(0,o.jsx)(i$,{color:t,size:i,speed:s})]}),iv=ta`
  50%,
  100% {
    transform: translateX(95%);
  }
`,iw=ta`
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
`,ij=tr.div`
  width: ${e=>"small"===e.size?50:"large"===e.size?68:59}px;
  height:  ${e=>"small"===e.size?50:"large"===e.size?68:59}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`,ik=tr.div`
   width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background: ${e=>e.color||"#00adb5"};
`,iS=tr(ik)`
  transform: translateX(-100%);
  animation: ${iv} ${e=>e.speed||1}s ease-in alternate infinite ;
`,iC=tr(ik)`
  transform: translateX(-95%);
  animation: ${iw} ${e=>e.speed||1}s ease-out alternate infinite ;
`,iA=({style:e=tn,color:t,speed:i,size:s})=>(0,o.jsxs)(ij,{style:e,size:s,children:[(0,o.jsx)(iS,{color:t,speed:i,size:s}),(0,o.jsx)(ik,{color:t,size:s}),(0,o.jsx)(iC,{color:t,speed:i,size:s})]}),iI=ta`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,iP=tr.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`,iR=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background: ${e=>e.color||"#00adb5"};
  animation: ${iI} ${e=>e.speed||.8}s ease-in-out alternate infinite;
`,iE=tr(iR)`
  animation-delay: -${e=>e.speed/2||.4}s;
`,iN=tr(iR)`
  animation-delay:  -${e=>e.speed/4||.2}s;
`,iL=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(iP,{style:e,children:[(0,o.jsx)(iE,{color:t,speed:i,size:s}),(0,o.jsx)(iN,{color:t,speed:i,size:s}),(0,o.jsx)(iR,{color:t,speed:i,size:s})]}),iY=ta`
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-180deg) rotateX(-180deg);
  }
`,i_=tr.div`
  perspective: 120px;
  width: 120px;
  height: 120px;
  position: relative;
`,iO=tr.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  transform: rotate(0);
  background: ${e=>e.color||"#00adb5"};
  animation: ${iY} ${e=>e.speed||1}s infinite;
`,iT=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(i_,{style:e,children:(0,o.jsx)(iO,{color:t,speed:i,size:s})}),iD=ta`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`,iB=tr.div`
  width: ${e=>"small"===e.size?40:"large"===e.size?60:50}px;
  height: ${e=>"small"===e.size?40:"large"===e.size?60:50}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`,iX=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height:${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background: ${e=>e.color||"#00adb5"};
  animation: ${iD} ${e=>e.speed||.8}s ease-in-out alternate infinite;
`,iF=tr(iX)`
  animation-delay: -${e=>e.speed/2||.4}s;
`,iG=tr(iX)`
  animation-delay:  -${e=>e.speed/4||.2}s;
`,iW=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(iB,{style:e,size:s,children:[(0,o.jsx)(iF,{color:t,speed:i,size:s}),(0,o.jsx)(iG,{color:t,speed:i,size:s}),(0,o.jsx)(iX,{color:t,speed:i,size:s})]}),iM=ta`
  to {
    opacity: 0.3;
  }
`,iH=tr.div`
   height: calc( ${e=>td[e.size]||td.default} * 2) ;
    width: calc( ${e=>td[e.size]||td.default} * 2) ;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  > div:nth-child(2) > div:nth-child(4) {
    animation-delay: ${e=>e.speed*(1/6)||.25}s;
  }
  > div:nth-of-type(3),
  > div:nth-of-type(5),
  > div:nth-of-type(7) {
    animation-delay: ${e=>e.speed/3||.5}s;
  }
  > div:nth-of-type(6),
  > div:nth-of-type(8) {
    animation-delay: ${e=>e.speed/2||.75}s;
  }
  > div:nth-of-type(9) {
    animation-delay: ${e=>e.speed*(2/3)||1}s;
  }
`,iq=tr.div`
   height: calc( ${e=>td[e.size]||td.default} / 4) ;
    width:calc( ${e=>td[e.size]||td.default} / 4) ;
  background-color: ${e=>e.color||"#00adb5"};
  border-radius: 50%;
animation: ${iM} ${e=>e.speed||1.5}s alternate ease-in-out infinite;
`,iZ=({style:e=tn,color:t,size:i="default",speed:s})=>(0,o.jsx)(iH,{style:e,speed:s,children:Array.from(Array(9)).map((e,r)=>(0,o.jsx)(iq,{size:i,color:t,speed:s},r))}),iU=ta`
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`,iV=tr.div`
  height: 0;
  width: 4px;
  border-width: 0 4px ${e=>"small"===e.size?40:"large"===e.size?60:50}px 4px;
  border-style: none solid solid;
  border-color: transparent transparent ${e=>e.color||"#00adb5"};
  position: relative;
  padding-top: 25px;
`,iJ=tr.div`
  height: 0;
  width: 2px;
  border-width: ${e=>"small"===e.size?24:"large"===e.size?40:30}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${e=>e.color||"#00adb5"} transparent transparent;
  transform-origin: 0 -2px;
  transform: rotate(60deg);
  position: absolute;
`,iK=tr.div`
  height: 0;
  width: 2px;
  border-width: ${e=>"small"===e.size?24:"large"===e.size?40:30}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${e=>e.color||"#00adb5"} transparent transparent;
  transform-origin: 2px -1px;
  transform: rotate(180deg);
  position: absolute;
`,iQ=tr.div`
  height: 0;
  width: 2px;
  border-width: ${e=>"small"===e.size?24:"large"===e.size?40:30}px 2px 0px 2px;
  border-style: solid solid none;
  border-color: ${e=>e.color||"#00adb5"} transparent transparent;
  transform-origin: 5px 0;
  transform: rotate(300deg);
  position: absolute;
`,i0=tr.div`
  width: 4px;
  height: 4px;
  border: 3px ${e=>e.color||"#00adb5"} solid;
  background: #fff;
  border-radius: 5px;
  transform: translateX(-3px) translateY(-4px);
  position:absolute;
`,i1=tr.div`
  position: relative;
  animation: ${iU} ${e=>e.speed||5}s infinite linear;
`,i5=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(iV,{style:e,color:t,size:s,children:[(0,o.jsx)(i0,{color:t}),(0,o.jsxs)(i1,{speed:i,children:[(0,o.jsx)(iJ,{color:t,size:s}),(0,o.jsx)(iK,{color:t,size:s}),(0,o.jsx)(iQ,{color:t,size:s})]})]}),i2=ta`
	0% {
		-webkit-transform: scale(0.1);
		opacity: 1;
	}
	50% {
		-webkit-transform: scale(1);
		opacity: 0.5;
	}
	100% {
		-webkit-transform: scale(1.5);
		opacity: 0.1;
	}
`,i4=tr.div`
  height: ${e=>td[e.size]||td.default};
  width: ${e=>td[e.size]||td.default};
  border-radius:${e=>tc[e.size]||tc.default};
  background:  ${e=>e.color||"#00adb5"};
  animation: ${i2}  ${e=>e.speed||2}s linear infinite;
`,i6=({style:e=tn,speed:t,color:i,size:s="default"})=>(0,o.jsx)(i4,{style:e,speed:t,color:i,size:s}),i3=ta`
  0% {
    transform: translateY(0) scaleX(1.2) scaleY(0.8);
  }
  25% {
    transform: translateY(-10px) scaleX(1) scaleY(1);
  }
  100% {
    background-color: #f9c094;
    transform: translateY(-40px);
  }
`,i8=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  position: relative;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,i9=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background-color: ${e=>e.color||"#00adb5"};
  animation: ${i3} ${e=>e.speed||.5}s ease-out infinite alternate;
`,i7=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${e=>e.color||"#00adb5"};
`,oe=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(i8,{style:e,size:s,children:[(0,o.jsx)(i9,{color:t,speed:i,size:s}),(0,o.jsx)(i7,{color:t,size:s})]}),ot=ta`
  0% {
    width: 0;
  }
  50% {
    width: 40px;
  }
  100% {
    width: 0;
  }
`,oi=ta`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(60px);
  }
`,oo=tr.div`
  width: ${e=>"small"===e.size?68:"large"===e.size?88:80}px;
  height: ${e=>"small"===e.size?68:"large"===e.size?88:80}px;
  position: relative;
  transform: rotateZ(45deg);
  > div:nth-of-type(1) {
    top: 30%;
    left: 25%;
    animation-delay: 0s;
  }
  > div:nth-of-type(2) {
    top: 10%;
    left: 0%;
    animation-delay: 0.8s;
  }
  > div:nth-of-type(3) {
    top: 15%;
    left: 10%;
    animation-delay: 0.5s;
  }
  > div:nth-of-type(4) {
    top: 25%;
    left: 30%;
    animation-delay: 1.6s;
  }
  > div:nth-of-type(5) {
    top: 40%;
    left: 4%;
    animation-delay: 3.2s;
  }
  > div:nth-of-type(6) {
    top: 55%;
    left: 18%;
    animation-delay: 1.2s;
  }
  > div:nth-of-type(7) {
    top: 66%;
    left: 3%;
    animation-delay: 0.4s;
  }
  > div:nth-of-type(8) {
    top: 77%;
    left: 24%;
    animation-delay: 2s;
  }
  > div:nth-of-type(9) {
    top: 83%;
    left: 30%;
    animation-delay: 1s;
  }
`,os=tr.div`
  height: 2px;
  background: linear-gradient(-45deg, ${e=>e.color||"#00adb5"}, rgba(0, 0, 255, 0));
  position: absolute;
  border-radius: 50%;
  animation: ${ot} ${e=>e.speed||3}s ease-in-out infinite, ${oi} ${e=>e.speed||3}s ease-in-out infinite;
`,or=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(oo,{style:e,size:s,children:Array.from(Array(9)).map((e,s)=>(0,o.jsx)(os,{color:t,speed:i},s))}),oa=ta`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`,on=ta`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`,ol=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  position: relative;
  overflow: hidden;
  animation: ${oa} ${e=>e.speed||2.4}s linear infinite;
  > div {
    width: ${e=>tl[e.size]||tl[e.size]};
    height: ${e=>tl[e.size]||tl[e.size]};
    border-radius: 50%;
    position: absolute;
    background-color: ${e=>e.color||"#00adb5"};
    animation: ${on} ${e=>e.speed||2.4}s linear infinite alternate;
  }
  > div:nth-of-type(1) {
    animation-delay: 0s;
  }
  > div:nth-of-type(2) {
    animation-delay: ${e=>e.speed/3||.8}s;
  }
  > div:nth-of-type(3) {
    animation-delay: ${e=>e.speed/3*2||1.6}s;
  }
  > div:nth-of-type(4) {
    animation-delay: ${e=>e.speed/3*3||2.4}s;
  }
`,od=tr.div`
  left: 0;
  top: 0;
`,oc=tr.div`
  right: 0;
  top: 0;
`,op=tr.div`
  left: 0;
  bottom: 0;
`,of=tr.div`
  right: 0;
  bottom: 0;
`,ou=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(ol,{style:e,speed:i,color:t,size:s,children:[(0,o.jsx)(od,{color:t,speed:i,size:s}),(0,o.jsx)(oc,{color:t,speed:i,size:s}),(0,o.jsx)(op,{color:t,speed:i,size:s}),(0,o.jsx)(of,{color:t,speed:i,size:s})]}),oh=ta`
  0% {
    transform: translateY(-8px);
  }

  50% {
    transform: translateY(12px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-8px);
  }
`,og=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  position: relative;
  /* overflow: hidden; */
`,om=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,ox=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  border-radius: 100%;
  position: relative;
  z-index: 1;
  background-color: ${e=>e.color||"#00adb5"};
  animation: ${oh} ${e=>e.speed||2}s 0s infinite;
`,ob=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  border-radius: 100%;
  position: relative;
  background-color: ${e=>e.inColor||"#f9c094"};
  animation: ${oh} ${e=>e.speed||2}s -${e=>e.speed/2||1}s infinite;
`,oz=({style:e=tn,color:t,inColor:i,speed:s,size:r="default"})=>(0,o.jsx)(og,{style:e,size:r,children:(0,o.jsxs)(om,{children:[(0,o.jsx)(ox,{color:t,speed:s,size:r}),(0,o.jsx)(ob,{inColor:i,speed:s,size:r})]})}),o$=ta`
  50% {
    transform: rotate(360deg) scale(0.7);
  }
`,oy=tr.div`
  width: ${e=>"small"===e.size?40:"large"===e.size?60:50}px;
  height: ${e=>"small"===e.size?40:"large"===e.size?60:50}px;
  position: relative;
  /* overflow: hidden; */
  > div:nth-child(1) {
    height: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 0);
    width: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 0);
    top: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 0);
    left: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 0);
    animation: ${o$} ${e=>e.speed||2}s infinite;
    animation-delay: calc(${e=>e.speed||2}s * 0.1 * 4);
    z-index: 5;
  }
  > div:nth-child(2) {
    height: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 1);
    width: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 1);
    top: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 1);
    left: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 1);
    animation: ${o$} ${e=>e.speed||2}s infinite;
    animation-delay: calc(${e=>e.speed||2}s * 0.1 * 3);
    z-index: 4;
  }
  > div:nth-child(3) {
    height: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 2);
    width: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 2);
    top: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 2);
    left: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 2);
    animation: ${o$} ${e=>e.speed||2}s infinite;
    animation-delay: calc(${e=>e.speed||2}s * 0.1 * 2);
    z-index: 3;
  }
  > div:nth-child(4) {
    height: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 3);
    width: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 3);
    top: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 3);
    left: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 3);
    animation: ${o$} ${e=>e.speed||2}s infinite;
    animation-delay: calc(${e=>e.speed||2}s * 0.1 * 1);
    z-index: 2;
  }
  > div:nth-child(5) {
    height: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 4);
    width: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px - ${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.2 * 4);
    top: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 4);
    left: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.1 * 4);
    animation: ${o$} ${e=>e.speed||2}s infinite;
    animation-delay: calc(${e=>e.speed||2}s * 0.1 * 0);
    z-index: 1;
  }
`,ov=tr.div`
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  border: calc(${e=>"small"===e.size?40:"large"===e.size?60:50}px * 0.05) solid transparent;
  border-top-color: ${e=>e.color||"#00adb5"};
  border-left-color: ${e=>e.color||"#00adb5"};
`,ow=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(oy,{style:e,speed:i,size:s,children:Array.from([,,,,,]).map((e,r)=>(0,o.jsx)(ov,{color:t,speed:i,size:s},r))}),oj=ta`
  100% {
    transform: rotate(360deg);
  }
`,ok=tr.div`
  width: ${e=>"small"===e.size?44:"large"===e.size?56:50}px;
  height: ${e=>"small"===e.size?44:"large"===e.size?56:50}px;
  position: relative;
  /* overflow: hidden; */
`,oS=tr.div`
  width: ${e=>"small"===e.size?2:"large"===e.size?6:4}px;;
  height: ${e=>"small"===e.size?2:"large"===e.size?6:4}px;;
  border-radius: 100%;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${e=>"small"===e.size?-1:"large"===e.size?-3:-2}px;
  margin-top: ${e=>"small"===e.size?-1:"large"===e.size?-3:-2}px;
`,oC=tr.div`
  width: ${e=>"small"===e.size?24:"large"===e.size?36:30}px;
  height: ${e=>"small"===e.size?24:"large"===e.size?36:30}px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${e=>"small"===e.size?-12:"large"===e.size?-18:-15}px;
  margin-top: ${e=>"small"===e.size?-12:"large"===e.size?-18:-15}px;
  box-sizing: border-box;
  animation: ${oj} ${e=>e.speed||2}s linear infinite;
`,oA=tr.div`
  width: ${e=>"small"===e.size?4:"large"===e.size?8:6}px;
  height: ${e=>"small"===e.size?4:"large"===e.size?8:6}px;
  border-radius: 100%;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: ${e=>+("small"===e.size||"large"===e.size)}px;
  top: ${e=>"small"===e.size?1:"large"===e.size?3:2}px;
`,oI=tr.div`
  width: ${e=>"small"===e.size?54:"large"===e.size?66:60}px;
  height: ${e=>"small"===e.size?54:"large"===e.size?66:60}px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: ${e=>"small"===e.size?-27:"large"===e.size?-33:-30}px;
  margin-top: ${e=>"small"===e.size?-27:"large"===e.size?-33:-30}px;
  box-sizing: border-box;
  animation: ${oj} ${e=>1.5*e.speed||3}s linear infinite;
`,oP=tr.div`
  width: ${e=>"small"===e.size?6:"large"===e.size?10:8}px;
  height: ${e=>"small"===e.size?6:"large"===e.size?10:8}px;
  border-radius: 100%;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: ${e=>"small"===e.size?6:"large"===e.size?8:7}px;
  top: ${e=>"small"===e.size?1:"large"===e.size?3:2}px;
`,oR=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(ok,{style:e,size:s,children:[(0,o.jsx)(oS,{color:t,size:s}),(0,o.jsx)(oC,{color:t,speed:i,size:s,children:(0,o.jsx)(oA,{color:t,size:s})}),(0,o.jsx)(oI,{color:t,speed:i,size:s,children:(0,o.jsx)(oP,{color:t,size:s})})]}),oE=ta`
  0% {
    transform: translateY(68px);
  }
  10%,
  50% {
    transform: translateY(0);
  }
  60%,
  100% {
    transform: translateY(-68px);
  }
`,oN=ta`
  0%, 
  40% {
    transform: translateY(68px);
  }
  50%,
  90% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-68px);
  }
`,oL=ta`
  0%, 
  10% {
    transform: translateY(68px);
  }
  20%,
  60% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(-68px);
  }
`,oY=ta`
  0%, 
  20% {
    transform: translateY(68px);
  }
  30%,
  70% {
    transform: translateY(0);
  }
  80%,
  100% {
    transform: translateY(-68px);
  }
`,o_=ta`
  0%, 
  30% {
    transform: translateY(68px);
  }
  40%,
  80% {
    transform: translateY(0);
  }
  90%,
  100% {
    transform: translateY(-68px);
  }
`,oO=tr.div`
  width: ${e=>"small"===e.size?16:"large"===e.size?24:20}px;
  height: ${e=>"small"===e.size?60:"large"===e.size?68:64}px;
  position: relative;
  overflow: hidden;
`,oT=tr.div`
  height: 0;
	width: 1px;
	border-bottom: ${e=>"small"===e.size?60:"large"===e.size?68:64}px solid ${e=>e.color||"#00adb5"};
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: ${oE} ${e=>e.speed||4}s ease infinite;
`,oD=tr.div`
  height: 0;
	width: 1px;
	border-bottom: ${e=>"small"===e.size?60:"large"===e.size?68:64}px solid ${e=>e.color||"#00adb5"};
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: ${oN} ${e=>e.speed||4}s ease infinite;
`,oB=tr.div`
  height: 1px;
  width: 18px;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 10px;
  animation: ${oL} ${e=>e.speed||4}s ease infinite;
`,oX=tr.div`
  height: 1px;
  width: 18px;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 30px;
  animation: ${oY} ${e=>e.speed||4}s ease infinite;
`,oF=tr.div`
  height: 1px;
  width: 18px;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: 50px;
  animation: ${o_} ${e=>e.speed||4}s ease infinite;
`,oG=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(oO,{style:e,children:[(0,o.jsx)(oT,{color:t,speed:i,size:s}),(0,o.jsx)(oD,{color:t,speed:i,size:s}),(0,o.jsx)(oB,{color:t,speed:i,size:s}),(0,o.jsx)(oX,{color:t,speed:i,size:s}),(0,o.jsx)(oF,{color:t,speed:i,size:s})]}),oW=ta`
  0% {
    transform: rotate(45deg) scale(1);
  }
  20% {
    transform: rotate(45deg) scale(1.1);
  }
  40% {
    transform: rotate(45deg) scale(1);
  }
  60% {
    transform: rotate(45deg) scale(1.2);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
`,oM=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`,oH=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  background-color: ${e=>e.color||"#00adb5"};
  position: relative;
  transform: rotate(45deg);
  animation: ${oW} ${e=>e.speed||2}s ease infinite;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${e=>e.color||"#00adb5"};
    position: absolute;
    left: -50%;
    bottom: 0;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${e=>e.color||"#00adb5"};
    position: absolute;
    top: -50%;
    right: 0;
  }
`,oq=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(oM,{style:e,size:s,children:(0,o.jsx)(oH,{color:t,speed:i,size:s})}),oZ=ta`
  0%,
  20% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  60%,
  70% {
    transform: rotate(180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
  }
`,oU=ta`
  0%,
  50% {
    transform: rotate(0deg) translateX(0);
    opacity: 0;
  }
  51% {
    transform: rotate(0deg) translateX(0);
    opacity: 1;
  }
  70% {
    transform: rotate(0deg) translateX(-100%);
    opacity: 1;
  }
  90% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: rotate(180deg) translateX(-100%);
    opacity: 1;
  }
`,oV=ta`
  0%,
  51% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
`,oJ=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: ${e=>td[e.size]||td.default};
  position: relative;
  /* overflow: hidden; */
`,oK=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  background-color: ${e=>e.color||"#00adb5"};
  animation: ${oZ} ${e=>e.speed||3}s ease infinite;
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: right top;
`,oQ=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  background-color: ${e=>e.color||"#00adb5"};
  animation: ${oU} ${e=>e.speed||3}s ease infinite;
  position: absolute;
  left: ${e=>tl[e.size]||tl[e.size]};
  bottom: ${e=>tl[e.size]||tl[e.size]};
  transform-origin: left bottom;
`,o0=tr.div`
  width: ${e=>tl[e.size]||tl[e.size]};
  height: ${e=>tl[e.size]||tl[e.size]};
  background-color: ${e=>e.color||"#00adb5"};
  animation: ${oV} ${e=>e.speed||3}s ease infinite;
  position: absolute;
  left: ${e=>tl[e.size]||tl[e.size]};
  bottom: 0;
`,o1=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsxs)(oJ,{style:e,size:s,children:[(0,o.jsx)(oK,{size:s,color:t,speed:i}),(0,o.jsx)(oQ,{size:s,color:t,speed:i}),(0,o.jsx)(o0,{size:s,color:t,speed:i})]}),o5=ta`
  0% {
    opacity: 0.3;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  65% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`,o2=ta`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%)
  }
`,o4=tr.div`
  width: ${e=>"small"===e.size?56:"large"===e.size?64:60}px;
  height: ${e=>"small"===e.size?12:"large"===e.size?20:16}px;
  position: relative;
  overflow: hidden;
`;tr.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.color||"#00adb5"};
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  animation: ${o2} ${e=>e.speed||4}s linear infinite;
`;let o6=tr.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  >div {
    animation: ${o5} ${e=>e.speed||4}s ease-in-out infinite;
  }
  >div:nth-of-type(8) {
    animation-delay: 0s;
  }
  >div:nth-of-type(7) {
    animation-delay: ${e=>e.speed/16*1||.25}s;
  }
  >div:nth-of-type(6) {
    animation-delay: ${e=>e.speed/16*2||.5}s;
  }
  >div:nth-of-type(5) {
    animation-delay: ${e=>e.speed/16*3||.75}s;
  }
  >div:nth-of-type(4) {
    animation-delay: ${e=>e.speed/16*4||1}s;
  }
  >div:nth-of-type(3) {
    animation-delay: ${e=>e.speed/16*5||1.25}s;
  }
  >div:nth-of-type(2) {
    animation-delay: ${e=>e.speed/16*6||1.5}s;
  }
  >div:nth-of-type(1) {
    animation-delay: ${e=>e.speed/16*7||1.75}s;
  }
`,o3=tr.div`
  width: 12.5%;
  height: 100%;
  background-color: ${e=>e.color||"#00adb5"};
`,o8=({style:e=tn,color:t,speed:i,size:s="default"})=>(0,o.jsx)(o4,{style:e,speed:i,color:t,size:s,children:(0,o.jsx)(o6,{children:Array.from(Array(8)).map((e,r)=>(0,o.jsx)(o3,{speed:i,color:t,size:s},r))})}),o9=ta`
  0% {
    transform: scale(1);
  }
  50%,
    75% {
    transform: scale(2.5);
  }
  78%, 100% {
    opacity: 0;
  }
`,o7=tr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  overflow: hidden;
  animation-delay: 1s;
`,se=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height: ${e=>tl[e.size]||tl.default};
  border-radius: 50%;
  background-color: ${e=>e.color||"#00adb5"};
  margin:  7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: ${e=>tl[e.size]||tl.default};
    height: ${e=>tl[e.size]||tl.default};
    border-radius: 50%;
    background-color:  ${e=>e.color||"#00adb5"};
    opacity: 0.7;
    animation: ${o9} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: ${e=>e.delay}ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`,st=({speed:e,color:t,style:i=tn,size:s="default"})=>(0,o.jsxs)(o7,{style:i,children:[(0,o.jsx)(se,{delay:"250",speed:e,color:t,size:s}),(0,o.jsx)(se,{delay:"500",speed:e,color:t,size:s}),(0,o.jsx)(se,{delay:"750",speed:e,color:t,size:s}),(0,o.jsx)(se,{delay:"1000",speed:e,color:t,size:s})]}),si=tr.div`
  width: ${e=>"small"===e.size?60:"large"===e.size?100:80}px;
  height: 8px;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  overflow: hidden;
`,so=tr.span`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: ${e=>e.color||"#00adb5"};
  animation: ${e=>(e=>ta`
    0%{
          transform: translate(-${e}px);
      }
      50%{
          transform: translate(0);
      }
      100%{
          transform: translate(${e}px);
      }
`)("small"===e.size?60:"large"===e.size?100:80)} ${e=>e.speed||2}s linear infinite;
`,ss=({speed:e,color:t,style:i=tn,size:s="default"})=>(0,o.jsx)(si,{style:i,color:t,size:s,children:(0,o.jsx)(so,{speed:e,style:i,color:t,size:s})}),sr=ta`
  0%{
    }
    100%{
        margin-left: 92px;
    }
`,sa=tr.div`
  width: 100px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
  position: relative;
  background: ${e=>e.color||"#00adb5"};
`,sn=tr.div`
  width: ${e=>tl[e.size]||tl.default};
  height:${e=>tl[e.size]||tl.default};
  margin-top: ${e=>"small"===e.size?-3:(e.size,-5)}px;
  border-radius: 50%;
  background: ${e=>e.color||"#00adb5"};
  position: absolute;
  margin-left: -8px;
  animation: ${sr} ${e=>e.speed||1}s ease-in infinite alternate;
`,sl=({speed:e,color:t,style:i=tn,size:s="default"})=>(0,o.jsx)(sa,{style:i,speed:e,color:t,children:(0,o.jsx)(sn,{speed:e,color:t,size:s})}),sd=ta`
 0%{
   height: 0px;
  },
  100%{
    height: 6px;
  }
`,sc=tr.div`
  height: ${e=>td[e.size]||td.default};
  width: ${e=>td[e.size]||td.default};
  border: 1px ${e=>e.color||"#00adb5"}  solid;
  border-radius: 0px 0px 5px 5px;
  position: relative;
  &::after {
    content: '';
    width: 5px;
    height: 12px;
    position: absolute;
    border: 1px solid ${e=>e.color||"#00adb5"};
    border-left: none;
    border-radius: 0px ${e=>td[e.size]||td.default} ${e=>td[e.size]||td.default} 0px;
    top: 4px;
    left: ${e=>td[e.size]||td.default};
  }
  &::before {
    content: '';
    width: 1px;
    height: 6px;
    position: absolute;
    background-color: ${e=>e.color||"#00adb5"};
    top: -10px;
    left: ${e=>"small"===e.size?6:"large"===e.size?12:8}px;
    box-shadow: 5px 0px 0px 0px ${e=>e.color||"#00adb5"}, 5px -5px 0px 0px ${e=>e.color||"#00adb5"}, 10px 0px 0px 0px ${e=>e.color||"#00adb5"};
    animation: ${sd} ${e=>e.speed||1}s linear infinite alternate;
  }
`,sp=({style:e=tn,color:t,size:i="default",speed:s})=>(0,o.jsx)(sc,{style:e,color:t,size:i,speed:s}),sf=tr.div`
  width: ${e=>td[e.size]||td.default};
  height: 14px;
  border: 1px #fff solid;
  border-radius: 2px;
  position: relative;
  animation: ${e=>((e,t)=>ta`
    0%{box-shadow: inset 0px 0px 0px ${e};}
    100%{box-shadow: inset ${t} 0px 0px ${e}}
`)(e.color||"#00adb5",td[e.size]||td.default)}
    ${e=>e.speed||4}s linear infinite;
  &::after {
    width: 2px;
    height: 7px;
    background-color: #fff;
    border-radius: 0px 1px 1px 0px;
    position: absolute;
    content: '';
    top: 2px;
    right: -4px;
  }
`,su=({style:e=tn,color:t,size:i="default",speed:s})=>(0,o.jsx)(sf,{style:e,color:t,size:i,speed:s}),sh=ta`
 0% {
 transform: rotate(0deg);
}
 100% {
 transform: rotate(-360deg);
}
`;tr.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
  border: 8px dotted ${e=>e.color||"#00adb5"} ;
  transition: all 1s ease;
  animation: ${sh} ${e=>e.speed||1}s linear infinite;
  border-bottom-width: 1px;
  border-bottom-color: ${e=>e.color||"#00adb5"} ;
  border-left-width: 2px;
  border-left-color:  ${e=>e.color||"#00adb5"} ;
  border-top-width: 3px;
  border-right-width: 4px;
  border-top-color:  ${e=>e.color||"#00adb5"} ;
`,tr.div`
  position: absolute;
  top: 45px;
  left: 25px;
  width: 0px;
  height: 0px;
  border-right: 12px solid transparent;
  border-top: 12px solid ${e=>e.color||"#00adb5"} ;
  border-left: 12px solid ${e=>e.color||"#00adb5"} ;
  border-bottom: 12px solid ${e=>e.color||"#00adb5"} ;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;let sg=ta`
 0% {
 top: 19px;
 left: 19px;
}
 100% {
}
`;tr.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
`;let sm=tr.div`
  position: absolute;
  animation: ${sg} ${e=>e.speed||1}s ease alternate infinite;
  transform: scale(0.2);
  &::before {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: ${e=>e.color||"#00adb5"} ;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &::after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background:${e=>e.color||"#00adb5"} ;
    border-radius: 50px 50px 0 0;
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;tr(sm)`
  top: 0;
  left: 30px;
`,tr(sm)`
  left: 60px;
  top: 30px;
`,tr(sm)`
  top: 60px;
  left: 30px;
`,tr(sm)`
  left: 0;
  top: 30px;
`;let sx=ta`
	100% {
	transform:rotate(360deg)
}
`,sb=ta`
	0%,100% {
	transform:scale(0)
}
50% {
	transform:scale(1)
}
`;tr.div`
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  animation: ${sx} 2s linear infinite;
`;let sz=tr.div`
	position:absolute;
	top:0;
	width:25px;
	height:25px;
	border-radius:100%;
	background-color: ${e=>e.color||"#00adb5"};
  animation: ${sb} ${e=>e.speed||2}s ease-in-out infinite;
`;tr(sz)``,tr(sz)`
  animation-delay: -${e=>e.speed/2||1}s;
  top:auto;
	bottom:0;
`;let s$=({index:e=0,size:t="large",color:i="#fff"})=>{let r=(0,s.useMemo)(()=>[(0,o.jsx)(i6,{size:t,color:i},"BabelLoading"),(0,o.jsx)(id,{size:t,color:i},"BlockLoading"),(0,o.jsx)(iT,{size:t,color:i},"BlockReserveLoading"),(0,o.jsx)(ih,{size:t,color:i},"BoxLoading"),(0,o.jsx)(t_,{size:t,color:i},"CircleLoading"),(0,o.jsx)(iy,{size:t,color:i},"CircleToBlockLoading"),(0,o.jsx)(tz,{size:t,color:i},"CommonLoading"),(0,o.jsx)(iL,{size:t,color:i},"DisappearedLoading"),(0,o.jsx)(t5,{size:t,color:i},"LoopCircleLoading"),(0,o.jsx)(iZ,{size:t,color:i},"NineCellLoading"),(0,o.jsx)(iA,{size:t,color:i},"TouchBallLoading"),(0,o.jsx)(t7,{size:t,color:i},"TransverseLoading"),(0,o.jsx)(tA,{size:t,color:i},"WaveLoading"),(0,o.jsx)(iW,{size:t,color:i},"WaveTopBottomLoading"),(0,o.jsx)(i5,{size:t,color:i},"WindMillLoading"),(0,o.jsx)(oe,{size:t,color:i},"JumpCircleLoading"),(0,o.jsx)(or,{size:t,color:i},"MeteorRainLoading"),(0,o.jsx)(ou,{size:t,color:i},"RotateCircleLoading"),(0,o.jsx)(oz,{size:t,color:i},"StickyBallLoading"),(0,o.jsx)(ow,{size:t,color:i},"SemipolarLoading"),(0,o.jsx)(oR,{size:t,color:i},"SolarSystemLoading"),(0,o.jsx)(oG,{size:t,color:i},"LadderLoading"),(0,o.jsx)(oq,{size:t,color:i},"HeartBoomLoading"),(0,o.jsx)(o1,{size:t,color:i},"RollBoxLoading"),(0,o.jsx)(o8,{size:t,color:i},"RectGraduallyShowLoading"),(0,o.jsx)(st,{size:t,color:i},"PointSpreadLoading"),(0,o.jsx)(ss,{size:t,color:i},"ThreeHorseLoading"),(0,o.jsx)(sl,{size:t,color:i},"PassThrouthLoading"),(0,o.jsx)(sp,{size:t,color:i},"CoffeeLoading"),(0,o.jsx)(su,{size:t,color:i},"BatteryLoading")],[i,t]);return(0,o.jsx)(o.Fragment,{children:r.at(e%r.length)})},sy={position:"fixed",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",zIndex:9999},sv={position:"absolute",paddingTop:"128px",top:"50%",left:"50%",fontSize:"1.6rem",fontWeight:"bold",color:"white",transform:"translate(-50%, -50%)"},sw=({active:e=!0,number:t=-1,style:i={},className:s="",text:r="",textStyle:a={},textClassName:n=""})=>{if(!e)return null;let l=0;return l=t>=0?~~t:0|((e=1)=>{let t=new Uint8Array(1);return window?.crypto&&window?.crypto?.getRandomValues&&window.crypto.getRandomValues(t),t[0]%e})(30),(0,o.jsxs)("div",{"data-testid":"loading-container",style:{...sy,...i},className:s,children:[(0,o.jsx)(s$,{index:l}),(0,o.jsx)("span",{style:{...sv,...a},className:n,children:r||"Loading..."})]})}}}]);