import{p as c,D as C,R as i,a as v}from"./index-afbb3dd9.js";var o=function(){return(o=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++)for(var e in n=arguments[a])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)};function I(){for(var t=0,n=0,a=arguments.length;n<a;n++)t+=arguments[n].length;var r=Array(t),e=0;for(n=0;n<a;n++)for(var l=arguments[n],p=0,h=l.length;p<h;p++,e++)r[e]=l[p];return r}var D=function(t){return i.createElement("svg",o({viewBox:"0 0 426.667 426.667",width:18,height:18},t),i.createElement("path",{d:"M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z",fill:"#6ac259"}))},j=function(t){return i.createElement("svg",o({viewBox:"0 0 310.285 310.285",width:18,height:18},t),i.createElement("path",{d:"M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z",fill:"#FFDA44"}))},N=function(t){return i.createElement("div",o({className:"ct-icon-loading"},t))},B=function(t){return i.createElement("svg",o({viewBox:"0 0 23.625 23.625",width:18,height:18},t),i.createElement("path",{d:"M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z",fill:"#006DF0"}))},R=function(t){return i.createElement("svg",o({viewBox:"0 0 51.976 51.976",width:18,height:18},t),i.createElement("path",{d:"M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z",fill:"#D80027"}))},F={success:D,warn:j,loading:N,info:B,error:R},H={success:"#6EC05F",info:"#1271EC",warn:"#FED953",error:"#D60A2E",loading:"#0088ff"},w=function(t){var n,a,r,e,l="margin"+((t.position||"top-center").includes("bottom")?"Bottom":"Top"),p=["ct-toast",t.onClick?" ct-cursor-pointer":"","ct-toast-"+t.type].join(" "),h=(((a=t.bar)===null||a===void 0?void 0:a.size)||"3px")+" "+(((r=t.bar)===null||r===void 0?void 0:r.style)||"solid")+" "+(((e=t.bar)===null||e===void 0?void 0:e.color)||H[t.type]),d=F[t.type],m=v.useState(((n={opacity:0})[l]=-15,n)),u=m[0],x=m[1],s=o({paddingLeft:t.heading?25:void 0,minHeight:t.heading?50:void 0,borderLeft:h},u),y=function(){var g;x(((g={opacity:0})[l]="-15px",g)),setTimeout(function(){t.onHide(t.id,t.position)},300)};v.useEffect(function(){var g,A=setTimeout(function(){var E;x(((E={opacity:1})[l]="15px",E))},50);return t.hideAfter!==0&&(g=setTimeout(function(){y()},1e3*t.hideAfter)),function(){clearTimeout(A),g&&clearTimeout(g)}},[]),v.useEffect(function(){t.show||y()},[t.show]);var z={tabIndex:0,onClick:t.onClick,onKeyPress:function(g){g.keyCode===13&&t.onClick(g)}};return i.createElement("div",o({className:p,role:t.role?t.role:"status",style:s},t.onClick?z:{}),t.renderIcon?t.renderIcon():i.createElement(d,null),i.createElement("div",{className:t.heading?"ct-text-group-heading":"ct-text-group"},t.heading&&i.createElement("h4",{className:"ct-heading"},t.heading),i.createElement("div",{className:"ct-text"},t.text)))};w.propTypes={type:c.string.isRequired,text:c.oneOfType([c.string,c.node]).isRequired,show:c.bool,onHide:c.func,id:c.oneOfType([c.string,c.number]),hideAfter:c.number,heading:c.string,position:c.string,renderIcon:c.func,bar:c.shape({}),onClick:c.func,role:c.string},w.defaultProps={id:void 0,show:!0,onHide:void 0,hideAfter:3,heading:void 0,position:"top-center",renderIcon:void 0,bar:{},onClick:void 0,role:"status"};var T=function(t){return t.replace(/-([a-z])/g,function(n){return n[1].toUpperCase()})},L={topLeft:[],topCenter:[],topRight:[],bottomLeft:[],bottomCenter:[],bottomRight:[]},b=function(t){var n=t.toast,a=t.hiddenID,r=v.useState(L),e=r[0],l=r[1];v.useEffect(function(){n&&l(function(d){var m,u=T(n.position||"top-center");return o(o({},d),((m={})[u]=I(d[u],[n]),m))})},[n]);var p=function(d,m){l(function(u){var x,s=T(m||"top-center");return o(o({},u),((x={})[s]=u[s].filter(function(y){return y.id!==d}),x))})},h=["Left","Center","Right"];return i.createElement(i.Fragment,null,["top","bottom"].map(function(d){return i.createElement("div",{key:"row_"+d,className:"ct-row"},h.map(function(m){var u=""+d+m,x=["ct-group",d==="bottom"?"ct-flex-bottom":""].join(" ");return i.createElement("div",{key:u,className:x},e[u].map(function(s){return i.createElement(w,o({key:u+"_"+s.id},s,{id:s.id,text:s.text,type:s.type,onClick:s.onClick,hideAfter:s.hideAfter,show:a!==s.id,onHide:p}))}))}))}))};function O(t,n){n===void 0&&(n={});var a=n.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}b.propTypes={toast:c.shape({}),hiddenID:c.number},b.defaultProps={toast:void 0,hiddenID:void 0};var S=`#ct-container {
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0px;
	left: 0px;
	z-index: 2000;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	pointer-events: none;
}

.ct-row {
	display: flex;
	justify-content: space-between;
}

.ct-group {
	flex: 1;
	margin: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.ct-group:first-child {
	align-items: flex-start;
}

.ct-group:last-child {
	align-items: flex-end;
}

.ct-flex-bottom {
	justify-content: flex-end;
}

.ct-toast {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 20px;
	background-color: #fff;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	color: #000;
	border-radius: 4px;
	margin: 0px;
	opacity: 1;
	transition: 0.3s all ease-in-out;
	min-height: 45px;
	pointer-events: all;
}

.ct-toast:focus {
	outline: none;
}

.ct-toast svg {
	min-width: 18px;
}

.ct-cursor-pointer {
	cursor: pointer;
}

.ct-icon-loading {
	display: inline-block;
	width: 20px;
	height: 20px;
}

.ct-icon-loading:after {
	content: ' ';
	display: block;
	width: 14px;
	height: 14px;
	margin: 1px;
	border-radius: 50%;
	border: 2px solid #0088ff;
	border-color: #0088ff transparent #0088ff transparent;
	animation: ct-icon-loading 1.2s linear infinite;
}

@keyframes ct-icon-loading {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.ct-text-group {
	margin-left: 15px;
}

.ct-text-group-heading {
	margin-left: 25px;
}

.ct-heading {
	font-size: 18px;
	margin: 0px;
	margin-bottom: 5px;
}

.ct-text {
	font-size: 14px;
}

@media (max-width: 768px) {
	.ct-row {
		justify-content: flex-start;
		flex-direction: column;
		margin: 7px 0px;
	}

	.ct-group {
		flex: none;
		margin: 0px;
	}

	.ct-toast {
		margin: 8px 15px;
		width: initial;
	}
}
`;O(S);var k=0,f=function(t,n){var a,r,e=document.getElementById(((a=n)===null||a===void 0?void 0:a.toastContainerID)||"ct-container");e||((e=document.createElement("div")).id="ct-container",document.body.appendChild(e)),k+=1;var l=1e3*(((r=n)===null||r===void 0?void 0:r.hideAfter)===void 0?3:n.hideAfter),p=o({id:k,text:t},n);C.render(i.createElement(b,{toast:p}),e);var h=new Promise(function(d){setTimeout(function(){d()},l)});return h.hide=function(){C.render(i.createElement(b,{hiddenID:p.id}),e)},h};f.success=function(t,n){return f(t,o(o({},n),{type:"success"}))},f.warn=function(t,n){return f(t,o(o({},n),{type:"warn"}))},f.info=function(t,n){return f(t,o(o({},n),{type:"info"}))},f.error=function(t,n){return f(t,o(o({},n),{type:"error"}))},f.loading=function(t,n){return f(t,o(o({},n),{type:"loading"}))};export{f as c};
