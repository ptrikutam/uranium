(function(){function e(a,b){var c;if(typeof a==n){var l=a,g=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;c={};var d=/^<([A-Z][A-Z0-9]*)([^>]*)>(.*)<\/\1>/i,e,j;j=0;if(d.test(l)){result=d.exec(l);g=result[1];if(result[2]!=="")for(l=result[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);j<l.length;j++)d=l[j].replace(/^\s*|\s*$/g,""),d!==""&&d!==" "&&(d=d.split("="),c[d[0]]=d[1].replace(/(["']?)/g,""));l=result[3]}g=m.createElement(g);for(e in c)j=m.createAttribute(e),
j.nodeValue=c[e],g.setAttributeNode(j);g.innerHTML=l;c=g}else c=a;return c}function k(a){var b=/\S/;a.each(function(a){for(var l=a.firstChild,g=-1,d;l;){d=l.nextSibling;if(l.nodeType==3&&!b.test(l.nodeValue))a.removeChild(l);else if(d!=null&&d.data!=null)l.nodeIndex=++g;l=d}})}function d(a){if(a._xuiEventID)return a._xuiEventID[0];return a._xuiEventID=[++d.id]}function g(a,b){var c=cache[a]=cache[a]||{};return c[b]=c[b]||[]}function s(a,b,c){var l=d(a),b=g(l,b),l=function(b){c.call(a,b)===!1&&(b.preventDefault(),
b.stopPropagation())};l.handler=c;b.push(l);return l}function h(a,b){if(m.defaultView&&m.defaultView.getComputedStyle)return m.defaultView.getComputedStyle(a,"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));else if(a.currentStyle)return b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),a.currentStyle[b]}var i,p=this,n=new String("string"),m=p.document,v=/^#?([\w-]+)$/,C=/^#/,D=/<([\w:]+)/,q=function(a){return[].slice.call(a,0)};try{q(m.documentElement.childNodes)}catch(G){q=
function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}p.x$=p.xui=i=function(a,b){return new i.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,d=0;if(typeof a=="function")for(;d<c;d++)a.call(b,this[d],d,this)};i.fn=i.prototype={extend:function(a){for(var b in a)i.fn[b]=a[b]},find:function(a,b){var c=[],d;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(q(i(a,b)))}).reduce(c);else if(b=b||m,typeof a==n)v.test(a)&&b.getElementById&&b.getElementsByTagName?
(c=C.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):D.test(a)?(d=m.createElement("i"),d.innerHTML=a,q(d.childNodes).forEach(function(a){c.push(a)})):c=p.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=q(c);else if(a instanceof Array)c=a;else if(a.toString()=="[object NodeList]")c=q(a);else{if(a.nodeName||a===p)c=[a]}else return this;return this.set(c)},set:function(a){var b=i();b.cache=q(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,
b){var c=[],a=a||q(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=i(a);return this.filter(function(){var a=this,d=null;b.each(function(b){d=d||b==a});return d})},filter:function(a){var b=[];return this.each(function(c,d){a.call(c,d)&&b.push(c)}).set(b)},not:function(a){var b=q(this);return this.filter(function(c){var d;i(a).each(function(a){return d=b[c]!=a});return d})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===
!1)break;return this}};i.fn.find.prototype=i.fn;i.extend=i.fn.extend;i.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});var c=function(){var b={};"duration after easing".split(" ").forEach(function(c){a[c]&&(b[c]=a[c],delete a[c])});return b}(a),d=function(a){var b=[],c;if(typeof a!=n){for(c in a)b.push(c+":"+a[c]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,d,c,b)})}});i.extend({xhr:function(a,b,c){function d(){h.readyState==4&&(delete e.xmlHttpRequest,
(h.status===0||h.status==200)&&h.handleResp(),/^[45]/.test(h.status)&&h.handleError())}/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var g=c?c:{};if(typeof c=="function")g={},g.callback=c;var e=this,h=new XMLHttpRequest,c=g.method||"get",j=g.async||!1,x=g.data||null,i=0;h.queryString=x;h.open(c,b,j);if(g.headers)for(;i<g.headers.length;i++)h.setRequestHeader(g.headers[i].name,g.headers[i].value);h.handleResp=g.callback!=null?g.callback:function(){e.html(a,this.responseText)};
h.handleError=g.error&&typeof g.error=="function"?g.error:function(){};if(j)h.onreadystatechange=d,this.xmlHttpRequest=h;h.send(x);j||d();return this}});i.extend({html:function(a,b){k(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");return this.each(function(c){var d,g=0;if(a=="inner")if(typeof b==n){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(d=c.length;g<d;g++)eval(c[g].text)}else c.innerHTML="",c.appendChild(b);else a==
"outer"?c.parentNode.replaceChild(e(b,c),c):a=="top"?c.insertBefore(e(b,c),c.firstChild):a=="bottom"?c.insertBefore(e(b,c),null):a=="remove"?c.parentNode.removeChild(c):a=="before"?c.parentNode.insertBefore(e(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(e(b,c.parentNode),c.nextSibling)})},append:function(a){return this.html(a,"bottom")},prepend:function(a){return this.html(a,"top")},attr:function(a,b){if(arguments.length==2)return this.each(function(c){c.setAttribute(a,b)});else{var c=
[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});i.extend({touch:function(a){var b=m.createElement("i");return a in b||b.setAttribute&&b.setAttribute(a,"return;")||!1}("ontouchstart"),on:function(a,b){return this.each(function(c){p.addEventListener?c.addEventListener(a,s(c,a,b),!1):c.attachEvent("on"+a,b)})},un:function(a){return this.each(function(b){for(var c=d(b),e=g(c,a),h=e.length;h--;)b.removeEventListener(a,e[h],!1);delete cache[c]})},fire:function(a,b){return this.each(function(c){if(c==
m&&!c.dispatchEvent)c=m.documentElement;var d=m.createEvent("HTMLEvents");d.initEvent(a,!0,!0);d.data=b||{};d.eventName=a;c.dispatchEvent(d)})}});d.id=1;var E=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;i.extend({setStyle:function(a,b){return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){return b===void 0?h(this[0],a):this.each(function(c){b(h(c,a))})},addClass:function(a){return this.each(function(b){if(w(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(E,"")})},hasClass:function(a,
b){return b===void 0&&this.length==1?w(a).test(this[0].className):this.length&&this.each(function(c){w(a).test(c.className)&&b(c)})},removeClass:function(a){if(a===void 0)this.each(function(a){a.className=""});else{var b=w(a);this.each(function(a){a.className=a.className.replace(b,"$1")})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var y={},w=function(a){var b=y[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),y[a]=b);return b};(function(a,b){function c(a,b,c){return(a+
(b-a)*c).toFixed(3)}function d(a,b,c){for(var g=2,e,j,h=[],i=[];e=3,j=arguments[g-1],g--;)if(j.substr(0,1)=="r")for(j=j.match(/\d+/g);e--;)h.push(~~j[e]);else for(j.length==4&&(j="#"+j.substr(1,1)+j.substr(1,1)+j.substr(2,1)+j.substr(2,1)+j.substr(3,1)+j.substr(3,1));e--;)h.push(parseInt(j.substr(1+e*2,2),16));for(;e--;)g=~~(h[e+3]+(h[e]-h[e+3])*c),i.push(g<0?0:g>255?255:g);return"rgb("+i.join(",")+")"}function g(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:d,u:""}:{v:b,
f:c,u:a}}function e(a){var b={},c=j.length,d;h.innerHTML='<div style="'+a+'"></div>';for(a=h.childNodes[0].style;c--;)if(d=a[j[c]])b[j[c]]=g(d);return b}var h=m.createElement("div"),j="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,d){var a=typeof a=="string"?m.getElementById(a):a,c=c||{},j=e(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),h,i={},k=+new Date,f=c.duration||200,z=k+f,A,F=c.easing||function(f){return-Math.cos(f*Math.PI)/2+0.5};for(h in j)i[h]=g(b[h]);A=setInterval(function(){var b=+new Date,g=b>z?1:(b-k)/f;for(h in j)a.style[h]=j[h].f(i[h].v,j[h].v,F(g))+j[h].u;b>z&&(clearInterval(A),c.after&&c.after(),d&&setTimeout(d,1))},10)}})("emile",this);(function(){function a(f,a,b,c,d,g){for(var d=
0,i=c.length;d<i;d++){var h=c[d];if(h){for(var h=h[f],j=!1;h;){if(h.sizcache===b){j=c[h.sizset];break}if(h.nodeType===1&&!g)h.sizcache=b,h.sizset=d;if(h.nodeName.toLowerCase()===a){j=h;break}h=h[f]}c[d]=j}}}function b(f,a,b,c,d,g){for(var d=0,h=c.length;d<h;d++){var i=c[d];if(i){for(var i=i[f],e=!1;i;){if(i.sizcache===b){e=c[i.sizset];break}if(i.nodeType===1){if(!g)i.sizcache=b,i.sizset=d;if(typeof a!=="string"){if(i===a){e=!0;break}}else if(j.filter(a,[i]).length>0){e=i;break}}i=i[f]}c[d]=e}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,g=Object.prototype.toString,h=!1,e=!0;[0,0].sort(function(){e=!1;return 0});var j=function(f,a,b,d){var b=b||[],h=a=a||m;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!f||typeof f!=="string")return b;var o=[],e,s,l,n,p=!0,r=j.isXML(a),B=f,u;do if(c.exec(""),e=c.exec(B))if(B=e[3],o.push(e[1]),e[2]){n=e[3];break}while(e);if(o.length>1&&k.exec(f))if(o.length===2&&
i.relative[o[0]])s=v(o[0]+o[1],a);else for(s=i.relative[o[0]]?[a]:j(o.shift(),a);o.length;)f=o.shift(),i.relative[f]&&(f+=o.shift()),s=v(f,s);else if(!d&&o.length>1&&a.nodeType===9&&!r&&i.match.ID.test(o[0])&&!i.match.ID.test(o[o.length-1])&&(e=j.find(o.shift(),a,r),a=e.expr?j.filter(e.expr,e.set)[0]:e.set[0]),a){e=d?{expr:o.pop(),set:q(d)}:j.find(o.pop(),o.length===1&&(o[0]==="~"||o[0]==="+")&&a.parentNode?a.parentNode:a,r);s=e.expr?j.filter(e.expr,e.set):e.set;for(o.length>0?l=q(s):p=!1;o.length;)e=
u=o.pop(),i.relative[u]?e=o.pop():u="",e==null&&(e=a),i.relative[u](l,e,r)}else l=[];l||(l=s);l||j.error(u||f);if(g.call(l)==="[object Array]")if(p)if(a&&a.nodeType===1)for(f=0;l[f]!=null;f++)l[f]&&(l[f]===!0||l[f].nodeType===1&&j.contains(a,l[f]))&&b.push(s[f]);else for(f=0;l[f]!=null;f++)l[f]&&l[f].nodeType===1&&b.push(s[f]);else b.push.apply(b,l);else q(l,b);n&&(j(n,h,b,d),j.uniqueSort(b));return b};j.uniqueSort=function(f){if(t&&(h=e,f.sort(t),h))for(var a=1;a<f.length;a++)f[a]===f[a-1]&&f.splice(a--,
1);return f};j.matches=function(f,a){return j(f,null,null,a)};j.find=function(f,a,b){var c;if(!f)return[];for(var d=0,g=i.order.length;d<g;d++){var e=i.order[d],h;if(h=i.leftMatch[e].exec(f)){var j=h[1];h.splice(1,1);if(j.substr(j.length-1)!=="\\"&&(h[1]=(h[1]||"").replace(/\\/g,""),c=i.find[e](h,a,b),c!=null)){f=f.replace(i.match[e],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:f}};j.filter=function(f,a,b,c){for(var d=f,g=[],h=a,e,l,s=a&&a[0]&&j.isXML(a[0]);f&&a.length;){for(var k in i.filter)if((e=
i.leftMatch[k].exec(f))!=null&&e[2]){var m=i.filter[k],n,p;p=e[1];l=!1;e.splice(1,1);if(p.substr(p.length-1)!=="\\"){h===g&&(g=[]);if(i.preFilter[k])if(e=i.preFilter[k](e,h,b,g,c,s)){if(e===!0)continue}else l=n=!0;if(e)for(var q=0;(p=h[q])!=null;q++)if(p){n=m(p,e,q,h);var r=c^!!n;b&&n!=null?r?l=!0:h[q]=!1:r&&(g.push(p),l=!0)}if(n!==void 0){b||(h=g);f=f.replace(i.match[k],"");if(!l)return[];break}}}if(f===d)if(l==null)j.error(f);else break;d=f}return h};j.error=function(f){throw"Syntax error, unrecognized expression: "+
f;};var i=j.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(f){return f.getAttribute("href")}},relative:{"+":function(f,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,d=f.length,g;c<d;c++)if(g=f[c]){for(;(g=g.previousSibling)&&g.nodeType!==1;);f[c]=b||g&&g.nodeName.toLowerCase()===a?g||!1:g===a}b&&j.filter(a,f,!0)},">":function(f,a){var b=typeof a==="string",c,d=0,g=f.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<g;d++){if(c=
f[d])b=c.parentNode,f[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<g;d++)(c=f[d])&&(f[d]=b?c.parentNode:c.parentNode===a);b&&j.filter(a,f,!0)}},"":function(f,c,g){var e=d++,h=b,i;typeof c==="string"&&!/\W/.test(c)&&(i=c=c.toLowerCase(),h=a);h("parentNode",c,e,f,i,g)},"~":function(f,c,g){var h=d++,e=b,i;typeof c==="string"&&!/\W/.test(c)&&(i=c=c.toLowerCase(),e=a);e("previousSibling",c,h,f,i,g)}},find:{ID:function(f,a,b){if(typeof a.getElementById!=="undefined"&&!b)return(f=a.getElementById(f[1]))?
[f]:[]},NAME:function(f,a){if(typeof a.getElementsByName!=="undefined"){for(var b=[],c=a.getElementsByName(f[1]),d=0,g=c.length;d<g;d++)c[d].getAttribute("name")===f[1]&&b.push(c[d]);return b.length===0?null:b}},TAG:function(f,a){return a.getElementsByTagName(f[1])}},preFilter:{CLASS:function(f,a,b,c,d,g){f=" "+f[1].replace(/\\/g,"")+" ";if(g)return f;for(var g=0,e;(e=a[g])!=null;g++)e&&(d^(e.className&&(" "+e.className+" ").replace(/[\t\n]/g," ").indexOf(f)>=0)?b||c.push(e):b&&(a[g]=!1));return!1},
ID:function(f){return f[1].replace(/\\/g,"")},TAG:function(f){return f[1].toLowerCase()},CHILD:function(f){if(f[1]==="nth"){var a=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(f[2]==="even"&&"2n"||f[2]==="odd"&&"2n+1"||!/\D/.test(f[2])&&"0n+"+f[2]||f[2]);f[2]=a[1]+(a[2]||1)-0;f[3]=a[3]-0}f[0]=d++;return f},ATTR:function(f,a,b,c,d,g){a=f[1].replace(/\\/g,"");!g&&i.attrMap[a]&&(f[1]=i.attrMap[a]);f[2]==="~="&&(f[4]=" "+f[4]+" ");return f},PSEUDO:function(f,a,b,d,g){if(f[1]==="not")if((c.exec(f[3])||"").length>1||
/^\w/.test(f[3]))f[3]=j(f[3],null,null,a);else return f=j.filter(f[3],a,b,1^g),b||d.push.apply(d,f),!1;else if(i.match.POS.test(f[0])||i.match.CHILD.test(f[0]))return!0;return f},POS:function(f){f.unshift(!0);return f}},filters:{enabled:function(f){return f.disabled===!1&&f.type!=="hidden"},disabled:function(f){return f.disabled===!0},checked:function(f){return f.checked===!0},selected:function(f){return f.selected===!0},parent:function(f){return!!f.firstChild},empty:function(f){return!f.firstChild},
has:function(f,a,b){return!!j(b[3],f).length},header:function(f){return/h\d/i.test(f.nodeName)},text:function(f){return"text"===f.type},radio:function(f){return"radio"===f.type},checkbox:function(f){return"checkbox"===f.type},file:function(f){return"file"===f.type},password:function(f){return"password"===f.type},submit:function(f){return"submit"===f.type},image:function(f){return"image"===f.type},reset:function(f){return"reset"===f.type},button:function(f){return"button"===f.type||f.nodeName.toLowerCase()===
"button"},input:function(f){return/input|select|textarea|button/i.test(f.nodeName)}},setFilters:{first:function(f,a){return a===0},last:function(f,a,b,c){return a===c.length-1},even:function(f,a){return a%2===0},odd:function(f,a){return a%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var g=b[1],e=i.filters[g];if(e)return e(a,c,b,d);else if(g==="contains")return(a.textContent||
a.innerText||j.getText([a])||"").indexOf(b[3])>=0;else if(g==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else j.error("Syntax error, unrecognized expression: "+g)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],g=b[3];if(c===1&&g===0)return!0;var e=b[0],h=a.parentNode;if(h&&(h.sizcache!==
e||!a.nodeIndex)){for(var i=0,d=h.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++i;h.sizcache=e}d=a.nodeIndex-g;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=i.attrHandle[c]?i.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",g=b[2],e=b[4];return c==null?g==="!=":g==="="?d===e:g==="*="?d.indexOf(e)>=0:g==="~="?(" "+d+" ").indexOf(e)>=0:!e?d&&c!==!1:g==="!="?d!==e:g==="^="?d.indexOf(e)===0:g==="$="?d.substr(d.length-e.length)===e:g==="|="?d===e||d.substr(0,e.length+1)===e+"-":!1},POS:function(a,b,c,d){var g=i.setFilters[b[2]];if(g)return g(a,c,b,d)}}},k=i.match.POS,s=function(a,b){return"\\"+(b-0+1)},n;for(n in i.match)i.match[n]=RegExp(i.match[n].source+/(?![^\[]*\])(?![^\(]*\))/.source),i.leftMatch[n]=RegExp(/(^(?:.|\r|\n)*?)/.source+
i.match[n].source.replace(/\\(\d+)/g,s));var q=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(m.documentElement.childNodes,0)}catch(r){q=function(a,b){var c=b||[],d=0;if(g.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var e=a.length;d<e;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var t;m.documentElement.compareDocumentPosition?t=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(h=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(h=!0);return c}:"sourceIndex"in m.documentElement?t=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(h=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(h=!0);return c}:m.createRange&&(t=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(h=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,d);c===0&&(h=!0);return c});j.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=j.getText(c.childNodes));return b};(function(){var a=m.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=m.documentElement;c.insertBefore(a,c.firstChild);if(m.getElementById(b))i.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},i.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=m.createElement("div");a.appendChild(m.createComment(""));if(a.getElementsByTagName("*").length>0)i.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")i.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();m.querySelectorAll&&function(){var a=j,b=m.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){j=function(b,c,d,g){c=c||m;if(!g&&c.nodeType===
9&&!j.isXML(c))try{return q(c.querySelectorAll(b),d)}catch(e){}return a(b,c,d,g)};for(var c in a)j[c]=a[c];b=null}}();(function(){var a=m.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))i.order.splice(1,0,"CLASS"),i.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();j.contains=m.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};j.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var v=function(a,b){for(var c=[],d="",g,e=b.nodeType?[b]:b;g=i.match.PSEUDO.exec(a);)d+=g[0],a=a.replace(i.match.PSEUDO,"");a=i.relative[a]?a+"*":a;g=0;for(var h=e.length;g<h;g++)j(a,e[g],c);return j.filter(d,c)};p.Sizzle=j})();var r;if(!r)r=
function(a,b,c){if(Object.prototype.toString.call(b)!=="[object RegExp]")return r._nativeSplit.call(a,b,c);var d=[],g=0,e=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.sticky?"y":""),b=RegExp(b.source,e+"g"),h,i,k;a+="";r._compliantExecNpcg||(h=RegExp("^"+b.source+"$(?!\\s)",e));if(c===void 0||+c<0)c=Infinity;else if(c=Math.floor(+c),!c)return[];for(;i=b.exec(a);){e=i.index+i[0].length;if(e>g&&(d.push(a.slice(g,i.index)),!r._compliantExecNpcg&&i.length>1&&i[0].replace(h,function(){for(var a=1;a<arguments.length-
2;a++)arguments[a]===void 0&&(i[a]=void 0)}),i.length>1&&i.index<a.length&&Array.prototype.push.apply(d,i.slice(1)),k=i[0].length,g=e,d.length>=c))break;b.lastIndex===i.index&&b.lastIndex++}g===a.length?(k||!b.test(""))&&d.push(""):d.push(a.slice(g));return d.length>c?d.slice(0,c):d},r._compliantExecNpcg=/()??/.exec("")[1]===void 0,r._nativeSplit=String.prototype.split;try{"a".split(/a/)}catch(H){String.prototype.split=function(a,b){return r(this,a,b)}}})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(e){Ur.initialize({type:"DOMContentLoaded"},e);Ur.loaded?Ur.initialize({type:"load"},e):window.addEventListener("load",function(k){Ur.initialize(k,e)},!1)},initialize:function(e,k){var d=e.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(k===void 0)k=document.body;for(name in d)(new d[name]).initialize(k);if(e.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(e){e()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(e,k){if(e!==void 0){var d=e.length||0,g=0;if(typeof k=="function")for(;g<d;g++)k.call(k,e[g],g,e)}},offset:function(e){typeof(e=="undefined")&&(e=this[0]);for(cumulative_left=cumulative_top=0;e.offsetParent;)cumulative_top+=e.offsetTop,cumulative_left+=e.offsetLeft,e=e.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(e,k){return e.parentNode!=window.document?x$().find_set_ancestor(e.parentNode,k):null},find_set_ancestor:function(e,
k){var d=x$(e).attr("data-ur-set")[0];return d!==void 0?k==void 0?e:d==k?e:x$().find_next_ancestor(e,k):x$().find_next_ancestor(e,k)},get_unique_uranium_id:function(){var e=0;return function(){e+=1;return e}}(),find_elements:function(e,k){var d={};this.each(function(d,e,h){return function(){x$().helper_find(this,d,e,h)}}(e,k,d));return d},helper_find:function(e,k,d,g){x$(e).find("*[data-ur-"+k+"-component]").each(function(){var e=!0,h=x$(this).attr("data-ur-id")[0];if(h!==void 0)g[h]===void 0&&(g[h]=
{});else{var i=x$().find_set_ancestor(this,k);if(x$(i).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;i!==null?(h=x$(i).attr("data-ur-id")[0],h===void 0&&(h=x$().get_unique_uranium_id(),x$(i).attr("data-ur-id",h)),g[h]===void 0&&(g[h]={}),g[h].set=i):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),e=!1)}i=x$(this).attr("data-ur-"+k+"-component");i===void 0&&(e=!1);if(e)if(d!==void 0&&d[i]!==void 0)d[i](g[h],this,i);else g[h][i]=this});return g}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function e(d,g){d.content===void 0&&(d.content=[]);d.content.push(g)}function k(){this.component_constructors={content:e}}k.prototype.find=function(d){d=x$(d).find_elements("toggler",this.component_constructors);for(toggler_id in d){var g=d[toggler_id];if(g.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var e=x$(g.button).attr("data-ur-state")[0];e===void 0&&(x$(g.button).attr("data-ur-state","disabled"),
e="disabled");g.content===void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(g.content,function(d){x$(d).attr("data-ur-state")[0]===void 0&&x$(d).attr("data-ur-state",e)})}}return d};k.prototype.construct_button_callback=function(d,g){return function(e){var e=e.currentTarget,h=x$(e).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(e).attr("data-ur-state",h);x$(g).attr("data-ur-state",h);x$().iterate(d,function(d){var g=x$(d).attr("data-ur-state")[0]===
"enabled"?"disabled":"enabled";x$(d).attr("data-ur-state",g)})}};k.prototype.initialize=function(d){d=this.find(d);for(name in d){var g=d[name];x$(g.button).click(this.construct_button_callback(g.content,g.set));x$(g.set).attr("data-ur-state","enabled")}};return k}();Ur.QuickLoaders.tabs=function(){function e(d){this.elements=d;this.setup_callbacks()}function k(){}e.prototype.setup_callbacks=function(){var d=null;for(tab_id in this.elements.buttons){var e=this.elements.buttons[tab_id],h=this.elements.contents[tab_id];d===null&&(d=tab_id);if(h===void 0){console.log("Ur error -- no matching tab content for tab button");return}h=x$(e).attr("data-ur-state")[0];h!==void 0&&h=="enabled"&&(d=-1);var i=this;x$(e).on("click",function(d){d=x$(d.target).attr("data-ur-tab-id")[0];
for(tab_id in i.elements.buttons){var e=i.elements.buttons[tab_id],g=i.elements.contents[tab_id];tab_id!==d?(x$(e).attr("data-ur-state","disabled"),x$(g).attr("data-ur-state","disabled")):(x$(e).attr("data-ur-state","enabled"),x$(g).attr("data-ur-state","enabled"))}})}d!==null&&d!==-1&&(e=this.elements.buttons[d],h=this.elements.contents[d],x$(e).attr("data-ur-state","enabled"),x$(h).attr("data-ur-state","enabled"))};var d={button:function(d,e){d.buttons===void 0&&(d.buttons={});var h=x$(e).attr("data-ur-tab-id")[0];
h===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.buttons[h]=e},content:function(d,e){d.contents===void 0&&(d.contents={});var h=x$(e).attr("data-ur-tab-id")[0];h===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.contents[h]=e}};k.prototype.initialize=function(g){g=x$(g).find_elements("tabs",d);console.log("raw tabs:",g);Ur.Widgets.tabs={};for(name in g)Ur.Widgets.tabs[name]=new e(g[name])};return k}();Ur.QuickLoaders["select-list"]=function(){function e(d,e){this.select=d;this.list=e;this.initialize()}function k(){this.SelectLists={}}e.prototype.initialize=function(){x$(this.list).click(function(d){return function(e){d.trigger_option(e)}}(this))};e.prototype.trigger_option=function(d){var e=d.target,k="";x$().iterate(this.list.children,function(d){d==e?(x$(d).attr("data-ur-state","enabled"),k=x$(d).attr("value")):x$(d).attr("data-ur-state","disabled")});this.select.value=k;return!0};k.prototype.initialize=
function(d){d=x$(d).find_elements("select-list");for(name in d){var g=d[name];this.SelectLists[name]=new e(d[name].select,d[name].content);x$(g.set).attr("data-ur-state","enabled")}};return k}();Ur.QuickLoaders["select-buttons"]=function(){function e(d){this.select=d.select;this.increment=d.increment;this.decrement=d.decrement;this.initialize()}function k(){}e.prototype.initialize=function(){x$(this.increment).click(function(d){return function(e){d.trigger_option(e,1)}}(this));x$(this.decrement).click(function(d){return function(e){d.trigger_option(e,-1)}}(this))};e.prototype.trigger_option=function(d,e){if(x$(d.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var k={},h=this.select.value,
i={prev:null,next:null};x$().iterate(this.select.children,function(d,e){x$(d).attr("value")[0]==h&&(k={element:d,index:e});typeof k.index=="undefined"&&(i.prev=x$(d).attr("value")[0]);e==k.index+1&&(i.next=x$(d).attr("value")[0])});var p=this.select.children.length,n=k.index+e;n==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");n==p-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(n<
0||n==p)return!1;this.select.value=i[e==1?"next":"prev"];return!0};k.prototype.initialize=function(d){d=x$(d).find_elements("select-buttons");for(name in d)new e(d[name]),x$(d[name].set).attr("data-ur-state","enabled")};return k}();
