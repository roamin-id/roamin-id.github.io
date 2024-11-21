/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="169";const Si="",Jt="srgb",pi="srgb-linear",ia="display-p3",Hs="display-p3-linear",Rs="linear",nt="srgb",Ls="rec709",Ps="p3";const Da="300 es";class fn{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(i)===-1&&n[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ua=1234567;const Cn=Math.PI/180,Vn=180/Math.PI;function pn(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function _t(t,e,i){return Math.max(e,Math.min(i,t))}function na(t,e){return(t%e+e)%e}function td(t,e,i,n,s){return n+(t-e)*(s-n)/(i-e)}function id(t,e,i){return t!==e?(i-t)/(e-t):0}function Rn(t,e,i){return(1-i)*t+i*e}function nd(t,e,i,n){return Rn(t,e,1-Math.exp(-i*n))}function sd(t,e=1){return e-Math.abs(na(t,e*2)-e)}function rd(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function ad(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function od(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ld(t,e){return t+Math.random()*(e-t)}function cd(t){return t*(.5-Math.random())}function hd(t){t!==void 0&&(Ua=t);let e=Ua+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dd(t){return t*Cn}function ud(t){return t*Vn}function fd(t){return(t&t-1)===0&&t!==0}function pd(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function md(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gd(t,e,i,n,s){const r=Math.cos,a=Math.sin,o=r(i/2),l=a(i/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*p,o*c);break;case"YZY":t.set(l*p,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*p,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Je={DEG2RAD:Cn,RAD2DEG:Vn,generateUUID:pn,clamp:_t,euclideanModulo:na,mapLinear:td,inverseLerp:id,lerp:Rn,damp:nd,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:dd,radToDeg:ud,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:Tt,denormalize:sn};class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,n=this.y,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(i,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const n=Math.cos(i),s=Math.sin(i),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,i,n,s,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,c)}set(e,i,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=i,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],_=n[8],x=s[0],d=s[3],f=s[6],T=s[1],S=s[4],w=s[7],F=s[2],C=s[5],b=s[8];return r[0]=a*x+o*T+l*F,r[3]=a*d+o*S+l*C,r[6]=a*f+o*w+l*b,r[1]=c*x+h*T+u*F,r[4]=c*d+h*S+u*C,r[7]=c*f+h*w+u*b,r[2]=p*x+m*T+_*F,r[5]=p*d+m*S+_*C,r[8]=p*f+m*w+_*b,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return i*a*h-i*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,_=i*u+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(h*i-s*l)*x,e[5]=(s*r-o*i)*x,e[6]=m*x,e[7]=(n*l-c*i)*x,e[8]=(a*i-n*r)*x,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+i,0,0,1),this}scale(e,i){return this.premultiply(ar.makeScale(e,i)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,i){return this.premultiply(ar.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new De;function Ho(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Is(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vd(){const t=Is("canvas");return t.style.display="block",t}const Na={};function ws(t){t in Na||(Na[t]=!0,console.warn(t))}function _d(t,e,i){return new Promise(function(n,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}function xd(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Md(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fa=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oa=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vn={[pi]:{transfer:Rs,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Jt]:{transfer:nt,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hs]:{transfer:Rs,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Oa),fromReference:t=>t.applyMatrix3(Fa)},[ia]:{transfer:nt,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Oa),fromReference:t=>t.applyMatrix3(Fa).convertLinearToSRGB()}},Ed=new Set([pi,Hs]),We={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ed.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,i){if(this.enabled===!1||e===i||!e||!i)return t;const n=vn[e].toReference,s=vn[i].fromReference;return s(n(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return vn[t].primaries},getTransfer:function(t){return t===Si?Rs:vn[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(vn[e].luminanceCoefficients)}};function cn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function or(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wi;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=Is("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Wi}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Is("canvas");i.width=e.width,i.height=e.height;const n=i.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return n.putImageData(s,0,0),i}else if(e.data){const i=e.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(cn(i[n]/255)*255):i[n]=cn(i[n]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lr(s[a].image)):r.push(lr(s[a]))}else r=lr(s);n.url=r}return i||(e.images[this.uuid]=n),n}}function lr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Sd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Et extends fn{constructor(e=Et.DEFAULT_IMAGE,i=Et.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=Et.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=pn(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=300;Et.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,i=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,s){return this.x=e,this.y=i,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],x=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const S=(c+1)/2,w=(m+1)/2,F=(f+1)/2,C=(h+p)/4,b=(u+x)/4,O=(_+d)/4;return S>w&&S>F?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=b/n):w>F?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=O/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=b/r,s=O/r),this.set(n,s,r,i),this}let T=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(d-_)/T,this.y=(u-x)/T,this.z=(p-h)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(i,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends fn{constructor(e=1,i=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new lt(0,0,e,i),this.scissorTest=!1,this.viewport=new lt(0,0,e,i);const s={width:e,height:i,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,n=1){if(this.width!==e||this.height!==i||this.depth!==n){this.width=e,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=i,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Vo(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Td{constructor(e=1,i=1,n={}){super(e,i,n),this.isWebGLRenderTarget=!0}}class Go extends Et{constructor(e=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends Et{constructor(e=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=n,this._w=s}static slerpFlat(e,i,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[i+0]=l,e[i+1]=c,e[i+2]=h,e[i+3]=u;return}if(o===1){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=x;return}if(u!==x||l!==p||c!==m||h!==_){let d=1-o;const f=l*p+c*m+h*_+u*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const F=Math.sqrt(S),C=Math.atan2(F,f*T);d=Math.sin(d*C)/F,o=Math.sin(o*C)/F}const w=o*T;if(l=l*d+p*w,c=c*d+m*w,h=h*d+_*w,u=u*d+x*w,d===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[i]=l,e[i+1]=c,e[i+2]=h,e[i+3]=u}static multiplyQuaternionsFlat(e,i,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return e[i]=o*_+h*u+l*m-c*p,e[i+1]=l*_+h*p+c*u-o*m,e[i+2]=c*_+h*m+o*p-l*u,e[i+3]=h*_-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,n,s){return this._x=e,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"YZX":this._x=p*h*u+c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u-p*m*_;break;case"XZY":this._x=p*h*u-c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const n=i/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,n=i[0],s=i[4],r=i[8],a=i[1],o=i[5],l=i[9],c=i[2],h=i[6],u=i[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let n=e.dot(i)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,i/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const n=e._x,s=e._y,r=e._z,a=e._w,o=i._x,l=i._y,c=i._z,h=i._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-i;return this._w=m*a+i*this._w,this._x=m*n+i*this._x,this._y=m*s+i*this._y,this._z=m*r+i*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-i)*h)/c,p=Math.sin(i*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,i,n){return this.copy(e).slerp(i,n)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(i),r*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,i=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ba.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const i=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*i-r*s),u=2*(r*n-a*i);return this.x=i+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(i,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const n=e.x,s=e.y,r=e.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return i*i+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){const s=Math.sin(i)*e;return this.x=s*Math.sin(n),this.y=Math.cos(i)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new I,Ba=new Vi;class mn{constructor(e=new I(1/0,1/0,1/0),i=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i+=3)this.expandByPoint(Wt.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,n=e.count;i<n;i++)this.expandByPoint(Wt.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const n=Wt.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(i===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,n;return e.normal.x>0?(i=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),i<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_n),is.subVectors(this.max,_n),Xi.subVectors(e.a,_n),qi.subVectors(e.b,_n),Yi.subVectors(e.c,_n),gi.subVectors(qi,Xi),vi.subVectors(Yi,qi),Pi.subVectors(Xi,Yi);let i=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Pi.z,Pi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Pi.z,0,-Pi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Pi.y,Pi.x,0];return!hr(i,Xi,qi,Yi,is)||(i=[1,0,0,0,1,0,0,0,1],!hr(i,Xi,qi,Yi,is))?!1:(ns.crossVectors(gi,vi),i=[ns.x,ns.y,ns.z],hr(i,Xi,qi,Yi,is))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,ts=new mn,Xi=new I,qi=new I,Yi=new I,gi=new I,vi=new I,Pi=new I,_n=new I,is=new I,ns=new I,Ii=new I;function hr(t,e,i,n,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ii.fromArray(t,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=i.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ad=new mn,xn=new I,dr=new I;class sa{constructor(e=new I,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const n=this.center;i!==void 0?n.copy(i):Ad.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const n=this.center.distanceToSquared(e);return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xn.subVectors(e,this.center);const i=xn.lengthSq();if(i>this.radius*this.radius){const n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(xn,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xn.copy(e.center).add(dr)),this.expandByPoint(xn.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new I,ur=new I,ss=new I,_i=new I,fr=new I,rs=new I,pr=new I;class Wo{constructor(e=new I,i=new I(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,i),oi.distanceToSquared(e))}distanceSqToSegment(e,i,n,s){ur.copy(e).add(i).multiplyScalar(.5),ss.copy(i).sub(e).normalize(),_i.copy(this.origin).sub(ur);const r=e.distanceTo(i)*.5,a=-this.direction.dot(ss),o=_i.dot(this.direction),l=-_i.dot(ss),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,p,m,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){const x=1/h;u*=x,p*=x,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ur).addScaledVector(ss,p),m}intersectSphere(e,i){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?n:null}intersectPlane(e,i){const n=this.distanceToPlane(e);return n===null?null:this.at(n,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,i,n,s,r){fr.subVectors(i,e),rs.subVectors(n,e),pr.crossVectors(fr,rs);let a=this.direction.dot(pr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(_i,rs));if(l<0)return null;const c=o*this.direction.dot(fr.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(pr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,i,n,s,r,a,o,l,c,h,u,p,m,_,x,d){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,c,h,u,p,m,_,x,d)}set(e,i,n,s,r,a,o,l,c,h,u,p,m,_,x,d){const f=this.elements;return f[0]=e,f[4]=i,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=_,f[11]=x,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){const i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*u,_=o*h,x=o*u;i[0]=l*h,i[4]=-l*u,i[8]=c,i[1]=m+_*c,i[5]=p-x*c,i[9]=-o*l,i[2]=x-p*c,i[6]=_+m*c,i[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,_=c*h,x=c*u;i[0]=p+x*o,i[4]=_*o-m,i[8]=a*c,i[1]=a*u,i[5]=a*h,i[9]=-o,i[2]=m*o-_,i[6]=x+p*o,i[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,_=c*h,x=c*u;i[0]=p-x*o,i[4]=-a*u,i[8]=_+m*o,i[1]=m+_*o,i[5]=a*h,i[9]=x-p*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*u,_=o*h,x=o*u;i[0]=l*h,i[4]=_*c-m,i[8]=p*c+x,i[1]=l*u,i[5]=x*c+p,i[9]=m*c-_,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,_=o*l,x=o*c;i[0]=l*h,i[4]=x-p*u,i[8]=_*u+m,i[1]=u,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=m*u+_,i[10]=p-x*u}else if(e.order==="XZY"){const p=a*l,m=a*c,_=o*l,x=o*c;i[0]=l*h,i[4]=-u,i[8]=c*h,i[1]=p*u+x,i[5]=a*h,i[9]=m*u-_,i[2]=_*u-m,i[6]=o*h,i[10]=x*u+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,i,n){const s=this.elements;return Ut.subVectors(e,i),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),xi.crossVectors(n,Ut),xi.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),xi.crossVectors(n,Ut)),xi.normalize(),as.crossVectors(Ut,xi),s[0]=xi.x,s[4]=as.x,s[8]=Ut.x,s[1]=xi.y,s[5]=as.y,s[9]=Ut.y,s[2]=xi.z,s[6]=as.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],_=n[2],x=n[6],d=n[10],f=n[14],T=n[3],S=n[7],w=n[11],F=n[15],C=s[0],b=s[4],O=s[8],ee=s[12],g=s[1],E=s[5],V=s[9],k=s[13],G=s[2],j=s[6],B=s[10],J=s[14],H=s[3],oe=s[7],le=s[11],ve=s[15];return r[0]=a*C+o*g+l*G+c*H,r[4]=a*b+o*E+l*j+c*oe,r[8]=a*O+o*V+l*B+c*le,r[12]=a*ee+o*k+l*J+c*ve,r[1]=h*C+u*g+p*G+m*H,r[5]=h*b+u*E+p*j+m*oe,r[9]=h*O+u*V+p*B+m*le,r[13]=h*ee+u*k+p*J+m*ve,r[2]=_*C+x*g+d*G+f*H,r[6]=_*b+x*E+d*j+f*oe,r[10]=_*O+x*V+d*B+f*le,r[14]=_*ee+x*k+d*J+f*ve,r[3]=T*C+S*g+w*G+F*H,r[7]=T*b+S*E+w*j+F*oe,r[11]=T*O+S*V+w*B+F*le,r[15]=T*ee+S*k+w*J+F*ve,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],_=e[3],x=e[7],d=e[11],f=e[15];return _*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*m-n*l*m)+x*(+i*l*m-i*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+i*c*u-i*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-i*l*u+i*o*p+s*a*u-n*a*p+n*l*h)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=i,s[14]=n),this}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],_=e[12],x=e[13],d=e[14],f=e[15],T=u*d*c-x*p*c+x*l*m-o*d*m-u*l*f+o*p*f,S=_*p*c-h*d*c-_*l*m+a*d*m+h*l*f-a*p*f,w=h*x*c-_*u*c+_*o*m-a*x*m-h*o*f+a*u*f,F=_*u*l-h*x*l-_*o*p+a*x*p+h*o*d-a*u*d,C=i*T+n*S+s*w+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(x*p*r-u*d*r-x*s*m+n*d*m+u*s*f-n*p*f)*b,e[2]=(o*d*r-x*l*r+x*s*c-n*d*c-o*s*f+n*l*f)*b,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*m-n*l*m)*b,e[4]=S*b,e[5]=(h*d*r-_*p*r+_*s*m-i*d*m-h*s*f+i*p*f)*b,e[6]=(_*l*r-a*d*r-_*s*c+i*d*c+a*s*f-i*l*f)*b,e[7]=(a*p*r-h*l*r+h*s*c-i*p*c-a*s*m+i*l*m)*b,e[8]=w*b,e[9]=(_*u*r-h*x*r-_*n*m+i*x*m+h*n*f-i*u*f)*b,e[10]=(a*x*r-_*o*r+_*n*c-i*x*c-a*n*f+i*o*f)*b,e[11]=(h*o*r-a*u*r-h*n*c+i*u*c+a*n*m-i*o*m)*b,e[12]=F*b,e[13]=(h*x*s-_*u*s+_*n*p-i*x*p-h*n*d+i*u*d)*b,e[14]=(_*o*s-a*x*s-_*n*l+i*x*l+a*n*d-i*o*d)*b,e[15]=(a*u*s-h*o*s+h*n*l-i*u*l-a*n*p+i*o*p)*b,this}scale(e){const i=this.elements,n=e.x,s=e.y,r=e.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const n=Math.cos(i),s=Math.sin(i),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,i,s,1,0,0,0,0,1),this}compose(e,i,n){const s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,_=r*u,x=a*h,d=a*u,f=o*u,T=l*c,S=l*h,w=l*u,F=n.x,C=n.y,b=n.z;return s[0]=(1-(x+f))*F,s[1]=(m+w)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(p+f))*C,s[6]=(d+T)*C,s[7]=0,s[8]=(_+S)*b,s[9]=(d-T)*b,s[10]=(1-(p+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,i,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,h=1/a,u=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,i.setFromRotationMatrix(Xt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,i,n,s,r,a,o=2e3){const l=this.elements,c=2*r/(i-e),h=2*r/(n-s),u=(i+e)/(i-e),p=(n+s)/(n-s);let m,_;if(o===2e3)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===2001)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,n,s,r,a,o=2e3){const l=this.elements,c=1/(i-e),h=1/(n-s),u=1/(a-r),p=(i+e)*c,m=(n+s)*h;let _,x;if(o===2e3)_=(a+r)*u,x=-2*u;else if(o===2001)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}}const $i=new I,Xt=new st,Cd=new I(0,0,0),Rd=new I(1,1,1),xi=new I,as=new I,Ut=new I,ka=new st,za=new Vi;class si{constructor(e=0,i=0,n=0,s=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,s=this._order){return this._x=e,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(i){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ka,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ld=0;const Ha=new I,ji=new Vi,li=new st,os=new I,Mn=new I,Pd=new I,Id=new Vi,Va=new I(1,0,0),Ga=new I(0,1,0),Wa=new I(0,0,1),Xa={type:"added"},Dd={type:"removed"},Zi={type:"childadded",child:null},mr={type:"childremoved",child:null};class Rt extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,i=new si,n=new Vi,s=new I(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ji.setFromAxisAngle(e,i),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,i){return ji.setFromAxisAngle(e,i),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Va,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,i){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Va,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?os.copy(e):os.set(e,i,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Mn,os,this.up):li.lookAt(os,Mn,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(li),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xa),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Dd),mr.child=e,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xa),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(i){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new I,ci=new I,gr=new I,hi=new I,Ki=new I,Ji=new I,qa=new I,vr=new I,_r=new I,xr=new I,Mr=new lt,Er=new lt,Sr=new lt;class $t{constructor(e=new I,i=new I,n=new I){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,s){s.subVectors(n,i),qt.subVectors(e,i),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,i,n,s,r){qt.subVectors(s,i),ci.subVectors(n,i),gr.subVectors(e,i);const a=qt.dot(qt),o=qt.dot(ci),l=qt.dot(gr),c=ci.dot(ci),h=ci.dot(gr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,i,n,s){return this.getBarycoord(e,i,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,i,n,s,r,a,o,l){return this.getBarycoord(e,i,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,i,n,s,r,a){return Mr.setScalar(0),Er.setScalar(0),Sr.setScalar(0),Mr.fromBufferAttribute(e,i),Er.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mr,r.x),a.addScaledVector(Er,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,i,n,s){return qt.subVectors(n,i),ci.subVectors(e,i),qt.cross(ci).dot(s)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,s){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,i,n,s){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),qt.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return $t.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,i,n,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const n=this.a,s=this.b,r=this.c;let a,o;Ki.subVectors(s,n),Ji.subVectors(r,n),vr.subVectors(e,n);const l=Ki.dot(vr),c=Ji.dot(vr);if(l<=0&&c<=0)return i.copy(n);_r.subVectors(e,s);const h=Ki.dot(_r),u=Ji.dot(_r);if(h>=0&&u<=h)return i.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(Ki,a);xr.subVectors(e,r);const m=Ki.dot(xr),_=Ji.dot(xr);if(_>=0&&m<=_)return i.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),i.copy(n).addScaledVector(Ji,o);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return qa.subVectors(r,s),o=(u-h)/(u-h+(m-_)),i.copy(s).addScaledVector(qa,o);const f=1/(d+x+p);return a=x*f,o=p*f,i.copy(n).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ls={h:0,s:0,l:0};function yr(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}class Ze{constructor(e,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,n)}set(e,i,n){if(i===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,i,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,i),this}setRGB(e,i,n,s=We.workingColorSpace){return this.r=e,this.g=i,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,i,n,s=We.workingColorSpace){if(e=na(e,1),i=_t(i,0,1),n=_t(n,0,1),i===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+i):n+i-n*i,a=2*n-r;this.r=yr(a,r,e+1/3),this.g=yr(a,r,e),this.b=yr(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,i=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,i);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(r,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jt){const n=Xo[e.toLowerCase()];return n!==void 0?this.setHex(n,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return We.fromWorkingColorSpace(yt.copy(this),e),Math.round(_t(yt.r*255,0,255))*65536+Math.round(_t(yt.g*255,0,255))*256+Math.round(_t(yt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=We.workingColorSpace){We.fromWorkingColorSpace(yt.copy(this),i);const n=yt.r,s=yt.g,r=yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,i=We.workingColorSpace){return We.fromWorkingColorSpace(yt.copy(this),i),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Jt){We.fromWorkingColorSpace(yt.copy(this),e);const i=yt.r,n=yt.g,s=yt.b;return e!==Jt?`color(${e} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,i,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+i,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,n){return this.r=e.r+(i.r-e.r)*n,this.g=e.g+(i.g-e.g)*n,this.b=e.b+(i.b-e.b)*n,this}lerpHSL(e,i){this.getHSL(Mi),e.getHSL(ls);const n=Rn(Mi.h,ls.h,i),s=Rn(Mi.s,ls.s,i),r=Rn(Mi.l,ls.l,i);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ze;Ze.NAMES=Xo;let Ud=0;class Vs extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const n=e[i];if(n===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(i){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let n=null;if(i!==null){const s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xn extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new I,cs=new Ue;class ii{constructor(e,i,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,n){e*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=i.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)cs.fromBufferAttribute(this,i),cs.applyMatrix3(e),this.setXY(i,cs.x,cs.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)ht.fromBufferAttribute(this,i),ht.applyMatrix3(e),this.setXYZ(i,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let i=0,n=this.count;i<n;i++)ht.fromBufferAttribute(this,i),ht.applyMatrix4(e),this.setXYZ(i,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let i=0,n=this.count;i<n;i++)ht.fromBufferAttribute(this,i),ht.applyNormalMatrix(e),this.setXYZ(i,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let i=0,n=this.count;i<n;i++)ht.fromBufferAttribute(this,i),ht.transformDirection(e),this.setXYZ(i,ht.x,ht.y,ht.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let n=this.array[e*this.itemSize+i];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,i,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+i]=n,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=sn(i,this.array)),i}setX(e,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=sn(i,this.array)),i}setY(e,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=sn(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=sn(i,this.array)),i}setW(e,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,n){return e*=this.itemSize,this.normalized&&(i=Tt(i,this.array),n=Tt(n,this.array)),this.array[e+0]=i,this.array[e+1]=n,this}setXYZ(e,i,n,s){return e*=this.itemSize,this.normalized&&(i=Tt(i,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,i,n,s,r){return e*=this.itemSize,this.normalized&&(i=Tt(i,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class qo extends ii{constructor(e,i,n){super(new Uint16Array(e),i,n)}}class Yo extends ii{constructor(e,i,n){super(new Uint32Array(e),i,n)}}class ni extends ii{constructor(e,i,n){super(new Float32Array(e),i,n)}}let Nd=0;const kt=new st,wr=new Rt,Qi=new I,Nt=new mn,En=new mn,pt=new I;class Ci extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ho(e)?Yo:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,i,n){return kt.makeTranslation(e,i,n),this.applyMatrix4(kt),this}scale(e,i,n){return kt.makeScale(e,i,n),this.applyMatrix4(kt),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ni(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,s=i.length;n<s;n++){const r=i[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),i)for(let r=0,a=i.length;r<a;r++){const o=i[r];En.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,En.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,En.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(En.min),Nt.expandByPoint(En.max))}Nt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(i)for(let r=0,a=i.length;r<a;r++){const o=i[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),pt.add(Qi)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,s=i.normal,r=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new I,l[O]=new I;const c=new I,h=new I,u=new I,p=new Ue,m=new Ue,_=new Ue,x=new I,d=new I;function f(O,ee,g){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,ee),u.fromBufferAttribute(n,g),p.fromBufferAttribute(r,O),m.fromBufferAttribute(r,ee),_.fromBufferAttribute(r,g),h.sub(c),u.sub(c),m.sub(p),_.sub(p);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(E),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(E),o[O].add(x),o[ee].add(x),o[g].add(x),l[O].add(d),l[ee].add(d),l[g].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,ee=T.length;O<ee;++O){const g=T[O],E=g.start,V=g.count;for(let k=E,G=E+V;k<G;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new I,w=new I,F=new I,C=new I;function b(O){F.fromBufferAttribute(s,O),C.copy(F);const ee=o[O];S.copy(ee),S.sub(F.multiplyScalar(F.dot(ee))).normalize(),w.crossVectors(C,ee);const E=w.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,ee=T.length;O<ee;++O){const g=T[O],E=g.start,V=g.count;for(let k=E,G=E+V;k<G;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),x=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(i,_),r.fromBufferAttribute(i,x),a.fromBufferAttribute(i,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=i.count;p<m;p+=3)s.fromBufferAttribute(i,p+0),r.fromBufferAttribute(i,p+1),a.fromBufferAttribute(i,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)pt.fromBufferAttribute(e,i),pt.normalize(),e.setXYZ(i,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let f=0;f<h;f++)p[_++]=c[m++]}return new ii(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);i.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,n);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(i));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(i))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new st,Di=new Wo,hs=new sa,$a=new I,ds=new I,us=new I,fs=new I,Tr=new I,ps=new I,ja=new I,ms=new I;class Ot extends Rt{constructor(e=new Ci,i=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,i){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;i.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Tr.fromBufferAttribute(u,e),a?ps.addScaledVector(Tr,h):ps.addScaledVector(Tr.sub(i),h))}i.add(ps)}return i}raycast(e,i){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(hs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(hs,$a)===null||Di.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(Ya.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,i,Di)))}_computeIntersections(e,i,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const d=p[_],f=a[d.materialIndex],T=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,F=S;w<F;w+=3){const C=o.getX(w),b=o.getX(w+1),O=o.getX(w+2);s=gs(this,f,e,n,c,h,u,C,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,i.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=_,f=x;d<f;d+=3){const T=o.getX(d),S=o.getX(d+1),w=o.getX(d+2);s=gs(this,a,e,n,c,h,u,T,S,w),s&&(s.faceIndex=Math.floor(d/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const d=p[_],f=a[d.materialIndex],T=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,F=S;w<F;w+=3){const C=w,b=w+1,O=w+2;s=gs(this,f,e,n,c,h,u,C,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,i.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,f=x;d<f;d+=3){const T=d,S=d+1,w=d+2;s=gs(this,a,e,n,c,h,u,T,S,w),s&&(s.faceIndex=Math.floor(d/3),i.push(s))}}}}function Fd(t,e,i,n,s,r,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===0,o),l===null)return null;ms.copy(o),ms.applyMatrix4(t.matrixWorld);const c=i.ray.origin.distanceTo(ms);return c<i.near||c>i.far?null:{distance:c,point:ms.clone(),object:t}}function gs(t,e,i,n,s,r,a,o,l,c){t.getVertexPosition(o,ds),t.getVertexPosition(l,us),t.getVertexPosition(c,fs);const h=Fd(t,e,i,n,ds,us,fs,ja);if(h){const u=new I;$t.getBarycoord(ja,ds,us,fs,u),s&&(h.uv=$t.getInterpolatedAttribute(s,o,l,c,u,new Ue)),r&&(h.uv1=$t.getInterpolatedAttribute(r,o,l,c,u,new Ue)),a&&(h.normal=$t.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};$t.getNormal(ds,us,fs,p.normal),h.face=p,h.barycoord=u}return h}class qn extends Ci{constructor(e=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;_("z","y","x",-1,-1,n,i,e,a,r,0),_("z","y","x",1,-1,n,i,-e,a,r,1),_("x","z","y",1,1,e,n,i,s,a,2),_("x","z","y",1,-1,e,n,-i,s,a,3),_("x","y","z",1,-1,e,i,n,s,r,4),_("x","y","z",-1,-1,e,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(h,3)),this.setAttribute("uv",new ni(u,2));function _(x,d,f,T,S,w,F,C,b,O,ee){const g=w/b,E=F/O,V=w/2,k=F/2,G=C/2,j=b+1,B=O+1;let J=0,H=0;const oe=new I;for(let le=0;le<B;le++){const ve=le*E-k;for(let Ve=0;Ve<j;Ve++){const $e=Ve*g-V;oe[x]=$e*T,oe[d]=ve*S,oe[f]=G,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[d]=0,oe[f]=C>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ve/b),u.push(1-le/O),J+=1}}for(let le=0;le<O;le++)for(let ve=0;ve<b;ve++){const Ve=p+ve+j*le,$e=p+ve+j*(le+1),W=p+(ve+1)+j*(le+1),Z=p+(ve+1)+j*le;l.push(Ve,$e,Z),l.push($e,W,Z),H+=6}o.addGroup(m,H,ee),m+=H,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dn(t){const e={};for(const i in t){e[i]={};for(const n in t[i]){const s=t[i][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=s.clone():Array.isArray(s)?e[i][n]=s.slice():e[i][n]=s}}return e}function bt(t){const e={};for(let i=0;i<t.length;i++){const n=dn(t[i]);for(const s in n)e[s]=n[s]}return e}function Od(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function $o(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Bd={clone:dn,merge:bt};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dn(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?i.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?i.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[s]={type:"m4",value:a.toArray()}:i.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}}class jo extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=2e3}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new I,Za=new Ue,Ka=new Ue;class Ht extends jo{constructor(e=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Vn*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vn*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,i){return this.getViewBounds(e,Za,Ka),i.subVectors(Ka,Za)}setViewOffset(e,i,n,s,r,a){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cn*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,i-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const en=-90,tn=1;class Hd extends Rt{constructor(e,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(en,tn,e,i);s.layers=this.layers,this.add(s);const r=new Ht(en,tn,e,i);r.layers=this.layers,this.add(r);const a=new Ht(en,tn,e,i);a.layers=this.layers,this.add(a);const o=new Ht(en,tn,e,i);o.layers=this.layers,this.add(o);const l=new Ht(en,tn,e,i);l.layers=this.layers,this.add(l);const c=new Ht(en,tn,e,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[n,s,r,a,o,l]=i;for(const c of i)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of i)this.add(c),c.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(i,r),e.setRenderTarget(n,1,s),e.render(i,a),e.setRenderTarget(n,2,s),e.render(i,o),e.setRenderTarget(n,3,s),e.render(i,l),e.setRenderTarget(n,4,s),e.render(i,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(i,h),e.setRenderTarget(u,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zo extends Et{constructor(e,i,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],i=i!==void 0?i:301,super(e,i,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vd extends bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qn(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:dn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=i;const a=new Ot(s,r),o=i.minFilter;return i.minFilter===1008&&(i.minFilter=1006),new Hd(1,10,this).update(e,a),i.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,i,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(i,n,s);e.setRenderTarget(r)}}const br=new I,Gd=new I,Wd=new De;class Oi{constructor(e=new I(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,n,s){return this.normal.set(e,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,n){const s=br.subVectors(n,i).cross(Gd.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const n=e.delta(br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:i.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const i=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return i<0&&n>0||n<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const n=i||Wd.getNormalMatrix(e),s=this.coplanarPoint(br).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new sa,vs=new I;class aa{constructor(e=new Oi,i=new Oi,n=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,i,n,s,r,a]}set(e,i,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(i),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const i=this.planes;for(let n=0;n<6;n++)i[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,i=2e3){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],_=s[9],x=s[10],d=s[11],f=s[12],T=s[13],S=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,d-m,w-f).normalize(),n[1].setComponents(l+r,p+c,d+m,w+f).normalize(),n[2].setComponents(l+a,p+h,d+_,w+T).normalize(),n[3].setComponents(l-a,p-h,d-_,w-T).normalize(),n[4].setComponents(l-o,p-u,d-x,w-S).normalize(),i===2e3)n[5].setComponents(l+o,p+u,d+x,w+S).normalize();else if(i===2001)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ui.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const i=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const i=this.planes;for(let n=0;n<6;n++){const s=i[n];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let t=null,e=!1,i=null,n=null;function s(r,a){i(r,a),n=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&i!==null&&(n=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){i=r},setContext:function(r){t=r}}}function Xd(t){const e=new WeakMap;function i(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<u.length;m++){const _=u[p],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,u[p]=x)}u.length=p+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Yn extends Ci{constructor(e=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:s};const r=e/2,a=i/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=i/l,m=[],_=[],x=[],d=[];for(let f=0;f<h;f++){const T=f*p-a;for(let S=0;S<c;S++){const w=S*u-r;_.push(w,-T,0),x.push(0,0,1),d.push(S/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const S=T+c*f,w=T+c*(f+1),F=T+1+c*(f+1),C=T+1+c*f;m.push(S,w,C),m.push(w,F,C)}this.setIndex(m),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ru=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:$d,alphamap_pars_fragment:jd,alphatest_fragment:Zd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:Qd,batching_pars_vertex:eu,batching_vertex:tu,begin_vertex:iu,beginnormal_vertex:nu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:hu,color_fragment:du,color_pars_fragment:uu,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:gu,defaultnormal_vertex:vu,displacementmap_pars_vertex:_u,displacementmap_vertex:xu,emissivemap_fragment:Mu,emissivemap_pars_fragment:Eu,colorspace_fragment:Su,colorspace_pars_fragment:yu,envmap_fragment:wu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:bu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Bu,envmap_vertex:Cu,fog_vertex:Ru,fog_pars_vertex:Lu,fog_fragment:Pu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:ku,lights_toon_pars_fragment:zu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Ku,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:ef,map_particle_pars_fragment:tf,metalnessmap_fragment:nf,metalnessmap_pars_fragment:sf,morphinstance_vertex:rf,morphcolor_vertex:af,morphnormal_vertex:of,morphtarget_pars_vertex:lf,morphtarget_vertex:cf,normal_fragment_begin:hf,normal_fragment_maps:df,normal_pars_fragment:uf,normal_pars_vertex:ff,normal_vertex:pf,normalmap_pars_fragment:mf,clearcoat_normal_fragment_begin:gf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:xf,opaque_fragment:Mf,packing:Ef,premultiplied_alpha_fragment:Sf,project_vertex:yf,dithering_fragment:wf,dithering_pars_fragment:Tf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:Cf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Lf,shadowmask_pars_fragment:Pf,skinbase_vertex:If,skinning_pars_vertex:Df,skinning_vertex:Uf,skinnormal_vertex:Nf,specularmap_fragment:Ff,specularmap_pars_fragment:Of,tonemapping_fragment:Bf,tonemapping_pars_fragment:kf,transmission_fragment:zf,transmission_pars_fragment:Hf,uv_pars_fragment:Vf,uv_pars_vertex:Gf,uv_vertex:Wf,worldpos_vertex:Xf,background_vert:qf,background_frag:Yf,backgroundCube_vert:$f,backgroundCube_frag:jf,cube_vert:Zf,cube_frag:Kf,depth_vert:Jf,depth_frag:Qf,distanceRGBA_vert:ep,distanceRGBA_frag:tp,equirect_vert:ip,equirect_frag:np,linedashed_vert:sp,linedashed_frag:rp,meshbasic_vert:ap,meshbasic_frag:op,meshlambert_vert:lp,meshlambert_frag:cp,meshmatcap_vert:hp,meshmatcap_frag:dp,meshnormal_vert:up,meshnormal_frag:fp,meshphong_vert:pp,meshphong_frag:mp,meshphysical_vert:gp,meshphysical_frag:vp,meshtoon_vert:_p,meshtoon_frag:xp,points_vert:Mp,points_frag:Ep,shadow_vert:Sp,shadow_frag:yp,sprite_vert:wp,sprite_frag:Tp},te={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ei={basic:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:bt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:bt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:bt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:bt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:bt([te.points,te.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:bt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:bt([te.common,te.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:bt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:bt([te.sprite,te.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:bt([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:bt([te.lights,te.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ei.physical={uniforms:bt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const _s={r:0,b:0,g:0},Ni=new si,bp=new st;function Ap(t,e,i,n,s,r,a){const o=new Ze(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?i:e).get(S)),S}function x(T){let S=!1;const w=_(T);w===null?f(o,l):w&&w.isColor&&(f(w,1),S=!0);const F=t.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function d(T,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Ot(new qn(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:dn(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(S.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Ni)),h.material.toneMapped=We.getTransfer(w.colorSpace)!==nt,(u!==w||p!==w.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,u=w,p=w.version,m=t.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ot(new Yn(2,2),new ui({name:"BackgroundMaterial",uniforms:dn(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=We.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||p!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,u=w,p=w.version,m=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(_s,$o(t)),n.buffers.color.setClear(_s.r,_s.g,_s.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:x,addToRenderList:d}}function Cp(t,e){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(g,E,V,k,G){let j=!1;const B=u(k,V,E);r!==B&&(r=B,c(r.object)),j=m(g,k,V,G),j&&_(g,k,V,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(g,E,V,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(g){return t.bindVertexArray(g)}function h(g){return t.deleteVertexArray(g)}function u(g,E,V){const k=V.wireframe===!0;let G=n[g.id];G===void 0&&(G={},n[g.id]=G);let j=G[E.id];j===void 0&&(j={},G[E.id]=j);let B=j[k];return B===void 0&&(B=p(l()),j[k]=B),B}function p(g){const E=[],V=[],k=[];for(let G=0;G<i;G++)E[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:g,attributes:{},index:null}}function m(g,E,V,k){const G=r.attributes,j=E.attributes;let B=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){const le=G[H];let ve=j[H];if(ve===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ve=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ve=g.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function _(g,E,V,k){const G={},j=E.attributes;let B=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){let le=j[H];le===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(le=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(le=g.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),G[H]=ve,B++}r.attributes=G,r.attributesNum=B,r.index=k}function x(){const g=r.newAttributes;for(let E=0,V=g.length;E<V;E++)g[E]=0}function d(g){f(g,0)}function f(g,E){const V=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;V[g]=1,k[g]===0&&(t.enableVertexAttribArray(g),k[g]=1),G[g]!==E&&(t.vertexAttribDivisor(g,E),G[g]=E)}function T(){const g=r.newAttributes,E=r.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==g[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function S(g,E,V,k,G,j,B){B===!0?t.vertexAttribIPointer(g,E,V,G,j):t.vertexAttribPointer(g,E,V,k,G,j)}function w(g,E,V,k){x();const G=k.attributes,j=V.getAttributes(),B=E.defaultAttributeValues;for(const J in j){const H=j[J];if(H.location>=0){let oe=G[J];if(oe===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(oe=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(oe=g.instanceColor)),oe!==void 0){const le=oe.normalized,ve=oe.itemSize,Ve=e.get(oe);if(Ve===void 0)continue;const $e=Ve.buffer,W=Ve.type,Z=Ve.bytesPerElement,me=W===t.INT||W===t.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Le=ce.stride,we=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)f(H.location+Oe,ce.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)d(H.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,ve/H.locationSize,W,le,Le*Z,(we+ve/H.locationSize*Oe)*Z,me)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)f(H.location+ce,oe.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)d(H.location+ce);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ce=0;ce<H.locationSize;ce++)S(H.location+ce,ve/H.locationSize,W,le,ve*Z,ve/H.locationSize*ce*Z,me)}}else if(B!==void 0){const le=B[J];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(H.location,le);break;case 3:t.vertexAttrib3fv(H.location,le);break;case 4:t.vertexAttrib4fv(H.location,le);break;default:t.vertexAttrib1fv(H.location,le)}}}}T()}function F(){O();for(const g in n){const E=n[g];for(const V in E){const k=E[V];for(const G in k)h(k[G].object),delete k[G];delete E[V]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;const E=n[g.id];for(const V in E){const k=E[V];for(const G in k)h(k[G].object),delete k[G];delete E[V]}delete n[g.id]}function b(g){for(const E in n){const V=n[E];if(V[g.id]===void 0)continue;const k=V[g.id];for(const G in k)h(k[G].object),delete k[G];delete V[g.id]}}function O(){ee(),a=!0,r!==s&&(r=s,c(r.object))}function ee(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:ee,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:T}}function Rp(t,e,i){let n;function s(c){n=c}function r(c,h){t.drawArrays(n,c,h),i.update(h,n,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(n,c,h,u),i.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];i.update(m,n,1)}function l(c,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<p.length;x++)i.update(_,n,p[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lp(t,e,i,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==1023&&n.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const O=b===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==1009&&n.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==1015&&!O)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=i.logarithmicDepthBuffer===!0,p=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),d=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:F,maxSamples:C}}function Pp(t){const e=this;let i=null,n=0,s=!1,r=!1;const a=new Oi,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){i=h(u,p,0)},this.setState=function(u,p,m){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,f=t.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const T=r?0:n,S=T*4;let w=f.clippingState||null;l.value=w,w=h(_,p,S,m);for(let F=0;F!==S;++F)w[F]=i[F];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const f=m+x*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<f)&&(d=new Float32Array(f));for(let S=0,w=m;S!==x;++S,w+=4)a.copy(u[S]).applyMatrix4(T,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Ip(t){let e=new WeakMap;function i(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return i(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vd(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),i(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Dp extends jo{constructor(e=-1,i=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+i,l=s-i;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const on=4,Ja=[.125,.215,.35,.446,.526,.582],ki=20,Ar=new Dp,Qa=new Ze;let Cr=null,Rr=0,Lr=0,Pr=!1;const Bi=(1+Math.sqrt(5))/2,nn=1/Bi,eo=[new I(-Bi,nn,0),new I(Bi,nn,0),new I(-nn,0,Bi),new I(nn,0,Bi),new I(0,Bi,-nn),new I(0,Bi,nn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class to{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,n=.1,s=100){Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),i>0&&this._blur(r,0,0,i),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Rr,Lr),this._renderer.xr.enabled=Pr,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=i||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:pi,depthBuffer:!1},s=io(e,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(e,i,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Up(r)),this._blurMaterial=Np(r,e,i)}return s}_compileMaterial(e){const i=new Ot(this._lodPlanes[0],e);this._renderer.compile(i,Ar)}_sceneToCubeUV(e,i,n,s){const o=new Ht(90,1,i,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Qa),h.toneMapping=0,h.autoClear=!1;const m=new Xn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Ot(new qn,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(Qa),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;xs(s,T*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=d}_textureToCubeUV(e,i){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(i,0,0,3*l,2*l),n.setRenderTarget(i),n.render(a,Ar)}_applyPMREM(e){const i=this._renderer,n=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eo[(s-r-1)%eo.length];this._blur(e,r-1,r,a,o)}i.autoClear=n}_blur(e,i,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,i,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,i,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ki-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):ki;d>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ki}`);const f=[];let T=0;for(let b=0;b<ki;++b){const O=b/x,ee=Math.exp(-O*O/2);f.push(ee),b===0?T+=ee:b<d&&(T+=2*ee)}for(let b=0;b<f.length;b++)f[b]=f[b]/T;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const w=this._sizeLods[s],F=3*w*(s>S-on?s-S+on:0),C=4*(this._cubeSize-w);xs(i,F,C,3*w,2*w),l.setRenderTarget(i),l.render(u,Ar)}}function Up(t){const e=[],i=[],n=[];let s=t;const r=t-on+1+Ja.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);i.push(o);let l=1/o;a>t-on?l=Ja[a-t+on-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,d=2,f=1,T=new Float32Array(x*_*m),S=new Float32Array(d*_*m),w=new Float32Array(f*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,O=C>2?0:-1,ee=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];T.set(ee,x*_*C),S.set(p,d*_*C);const g=[C,C,C,C,C,C];w.set(g,f*_*C)}const F=new Ci;F.setAttribute("position",new ii(T,x)),F.setAttribute("uv",new ii(S,d)),F.setAttribute("faceIndex",new ii(w,f)),e.push(F),s>on&&s--}return{lodPlanes:e,sizeLods:i,sigmas:n}}function io(t,e,i){const n=new bi(t,e,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(t,e,i,n,s){t.viewport.set(e,i,n,s),t.scissor.set(e,i,n,s)}function Np(t,e,i){const n=new Float32Array(ki),s=new I(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function no(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fp(t){let e=new WeakMap,i=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return i===null&&(i=new to(t)),u=c?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(i===null&&(i=new to(t)),u=c?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:a}}function Op(t){const e={};function i(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(n)}return e[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const s=i(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bp(t,e,i,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let d=0,f=x.length;d<f;d++)e.remove(x[d])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,i.memory.geometries++),p}function l(u){const p=u.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,f=x.length;d<f;d++)e.update(x[d],t.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let S=0,w=T.length;S<w;S+=3){const F=T[S+0],C=T[S+1],b=T[S+2];p.push(F,C,C,b,b,F)}}else if(_!==void 0){const T=_.array;x=_.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const F=S+0,C=S+1,b=S+2;p.push(F,C,C,b,b,F)}}else return;const d=new(Ho(p)?Yo:qo)(p,1);d.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,d)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kp(t,e,i){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(n,m,r,p*a),i.update(m,n,1)}function c(p,m,_){_!==0&&(t.drawElementsInstanced(n,m,r,p*a,_),i.update(m,n,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];i.update(d,n,1)}function u(p,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],x[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,x,0,_);let f=0;for(let T=0;T<_;T++)f+=m[T];for(let T=0;T<x.length;T++)i.update(f,n,x[T])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zp(t){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(r/3);break;case t.LINES:i.lines+=o*(r/2);break;case t.LINE_STRIP:i.lines+=o*(r-1);break;case t.LINE_LOOP:i.lines+=o*r;break;case t.POINTS:i.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:s,update:n}}function Hp(t,e,i){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let ee=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",ee)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let w=o.attributes.position.count*S,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*F*4*u),b=new Go(C,w,F,u);b.type=1015,b.needsUpdate=!0;const O=S*4;for(let g=0;g<u;g++){const E=d[g],V=f[g],k=T[g],G=w*F*4*g;for(let j=0;j<E.count;j++){const B=j*O;m===!0&&(s.fromBufferAttribute(E,j),C[G+B+0]=s.x,C[G+B+1]=s.y,C[G+B+2]=s.z,C[G+B+3]=0),_===!0&&(s.fromBufferAttribute(V,j),C[G+B+4]=s.x,C[G+B+5]=s.y,C[G+B+6]=s.z,C[G+B+7]=0),x===!0&&(s.fromBufferAttribute(k,j),C[G+B+8]=s.x,C[G+B+9]=s.y,C[G+B+10]=s.z,C[G+B+11]=k.itemSize===4?s.w:1)}}p={count:u,texture:b,size:new Ue(w,F)},n.set(o,p),o.addEventListener("dispose",ee)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function Vp(t,e,i,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:r,dispose:a}}class Jo extends Et{constructor(e,i,n,s,r,a,o,l,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Qo=new Et,ro=new Jo(1,1),el=new Go,tl=new bd,il=new Zo,ao=[],oo=[],lo=new Float32Array(16),co=new Float32Array(9),ho=new Float32Array(4);function gn(t,e,i){const n=t[0];if(n<=0||n>0)return t;const s=e*i;let r=ao[s];if(r===void 0&&(r=new Float32Array(s),ao[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(r,o)}return r}function ut(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function ft(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function Gs(t,e){let i=oo[e];i===void 0&&(i=new Int32Array(e),oo[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function Gp(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function Wp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ut(i,e))return;t.uniform2fv(this.addr,e),ft(i,e)}}function Xp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ut(i,e))return;t.uniform3fv(this.addr,e),ft(i,e)}}function qp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ut(i,e))return;t.uniform4fv(this.addr,e),ft(i,e)}}function Yp(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ut(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),ft(i,e)}else{if(ut(i,n))return;ho.set(n),t.uniformMatrix2fv(this.addr,!1,ho),ft(i,n)}}function $p(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ut(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),ft(i,e)}else{if(ut(i,n))return;co.set(n),t.uniformMatrix3fv(this.addr,!1,co),ft(i,n)}}function jp(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ut(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),ft(i,e)}else{if(ut(i,n))return;lo.set(n),t.uniformMatrix4fv(this.addr,!1,lo),ft(i,n)}}function Zp(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function Kp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ut(i,e))return;t.uniform2iv(this.addr,e),ft(i,e)}}function Jp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ut(i,e))return;t.uniform3iv(this.addr,e),ft(i,e)}}function Qp(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ut(i,e))return;t.uniform4iv(this.addr,e),ft(i,e)}}function em(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function tm(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ut(i,e))return;t.uniform2uiv(this.addr,e),ft(i,e)}}function im(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ut(i,e))return;t.uniform3uiv(this.addr,e),ft(i,e)}}function nm(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ut(i,e))return;t.uniform4uiv(this.addr,e),ft(i,e)}}function sm(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ro.compareFunction=515,r=ro):r=Qo,i.setTexture2D(e||r,s)}function rm(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(e||tl,s)}function am(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(e||il,s)}function om(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(e||el,s)}function lm(t){switch(t){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return $p;case 35676:return jp;case 5124:case 35670:return Zp;case 35667:case 35671:return Kp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return em;case 36294:return tm;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}function cm(t,e){t.uniform1fv(this.addr,e)}function hm(t,e){const i=gn(e,this.size,2);t.uniform2fv(this.addr,i)}function dm(t,e){const i=gn(e,this.size,3);t.uniform3fv(this.addr,i)}function um(t,e){const i=gn(e,this.size,4);t.uniform4fv(this.addr,i)}function fm(t,e){const i=gn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function pm(t,e){const i=gn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function mm(t,e){const i=gn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function gm(t,e){t.uniform1iv(this.addr,e)}function vm(t,e){t.uniform2iv(this.addr,e)}function _m(t,e){t.uniform3iv(this.addr,e)}function xm(t,e){t.uniform4iv(this.addr,e)}function Mm(t,e){t.uniform1uiv(this.addr,e)}function Em(t,e){t.uniform2uiv(this.addr,e)}function Sm(t,e){t.uniform3uiv(this.addr,e)}function ym(t,e){t.uniform4uiv(this.addr,e)}function wm(t,e,i){const n=this.cache,s=e.length,r=Gs(i,s);ut(n,r)||(t.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)i.setTexture2D(e[a]||Qo,r[a])}function Tm(t,e,i){const n=this.cache,s=e.length,r=Gs(i,s);ut(n,r)||(t.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)i.setTexture3D(e[a]||tl,r[a])}function bm(t,e,i){const n=this.cache,s=e.length,r=Gs(i,s);ut(n,r)||(t.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)i.setTextureCube(e[a]||il,r[a])}function Am(t,e,i){const n=this.cache,s=e.length,r=Gs(i,s);ut(n,r)||(t.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(e[a]||el,r[a])}function Cm(t){switch(t){case 5126:return cm;case 35664:return hm;case 35665:return dm;case 35666:return um;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return vm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return Mm;case 36294:return Em;case 36295:return Sm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Am}}class Rm{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.setValue=lm(i.type)}}class Lm{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Cm(i.type)}}class Pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,i[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function uo(t,e){t.seq.push(e),t.map[e.id]=e}function Im(t,e,i){const n=t.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uo(i,c===void 0?new Rm(o,t,e):new Lm(o,t,e));break}else{let u=i.map[o];u===void 0&&(u=new Pm(o),uo(i,u)),i=u}}}class Ts{constructor(e,i){this.seq=[],this.map={};const n=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(i,s),a=e.getUniformLocation(i,r.name);Im(r,a,this)}}setValue(e,i,n,s){const r=this.map[i];r!==void 0&&r.setValue(e,n,s)}setOptional(e,i,n){const s=i[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,i,n,s){for(let r=0,a=i.length;r!==a;++r){const o=i[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,i){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in i&&n.push(a)}return n}}function fo(t,e,i){const n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}const Dm=37297;let Um=0;function Nm(t,e){const i=t.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,i.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}function Fm(t){const e=We.getPrimaries(We.workingColorSpace),i=We.getPrimaries(t);let n;switch(e===i?n="":e===Ps&&i===Ls?n="LinearDisplayP3ToLinearSRGB":e===Ls&&i===Ps&&(n="LinearSRGBToLinearDisplayP3"),t){case pi:case Hs:return[n,"LinearTransferOETF"];case Jt:case ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[n,"LinearTransferOETF"]}}function po(t,e,i){const n=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return i.toUpperCase()+`

`+s+`

`+Nm(t.getShaderSource(e),a)}else return s}function Om(t,e){const i=Fm(e);return`vec4 ${t}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Bm(t,e){let i;switch(e){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="Cineon";break;case 4:i="ACESFilmic";break;case 6:i="AgX";break;case 7:i="Neutral";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ms=new I;function km(){We.getLuminanceCoefficients(Ms);const t=Ms.x.toFixed(4),e=Ms.y.toFixed(4),i=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zm(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tn).join(`
`)}function Hm(t){const e=[];for(const i in t){const n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function Vm(t,e){const i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function Tn(t){return t!==""}function mo(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(t){return t.replace(Gm,Xm)}const Wm=new Map;function Xm(t,e){let i=Ie[e];if(i===void 0){const n=Wm.get(e);if(n!==void 0)i=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Or(i)}const qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(t){return t.replace(qm,Ym)}function Ym(t,e,i,n){let s="";for(let r=parseInt(e);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _o(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $m(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Jm(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:n,maxMip:i}}function Qm(t,e,i,n){const s=t.getContext(),r=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=$m(i),c=jm(i),h=Zm(i),u=Km(i),p=Jm(i),m=zm(i),_=Hm(r),x=s.createProgram();let d,f,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Tn).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Tn).join(`
`),f.length>0&&(f+=`
`)):(d=[_o(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tn).join(`
`),f=[_o(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?Ie.tonemapping_pars_fragment:"",i.toneMapping!==0?Bm("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Om("linearToOutputTexel",i.outputColorSpace),km(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tn).join(`
`)),a=Or(a),a=mo(a,i),a=go(a,i),o=Or(o),o=mo(o,i),o=go(o,i),a=vo(a),o=vo(o),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",i.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+d+a,w=T+f+o,F=fo(s,s.VERTEX_SHADER,S),C=fo(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,C),i.index0AttributeName!==void 0?s.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(E){if(t.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(F).trim(),G=s.getShaderInfoLog(C).trim();let j=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,F,C);else{const J=po(s,F,"vertex"),H=po(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+J+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||G==="")&&(B=!1);B&&(E.diagnostics={runnable:j,programLog:V,vertexShader:{log:k,prefix:d},fragmentShader:{log:G,prefix:f}})}s.deleteShader(F),s.deleteShader(C),O=new Ts(s,x),ee=Vm(s,x)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let ee;this.getAttributes=function(){return ee===void 0&&b(this),ee};let g=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Dm)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Um++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}let eg=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(i),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let n=i.get(e);return n===void 0&&(n=new Set,i.set(e,n)),n}_getShaderStage(e){const i=this.shaderCache;let n=i.get(e);return n===void 0&&(n=new ig(e),i.set(e,n)),n}}class ig{constructor(e){this.id=eg++,this.code=e,this.usedTimes=0}}function ng(t,e,i,n,s,r,a){const o=new ra,l=new tg,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,E,V,k,G){const j=k.fog,B=G.geometry,J=g.isMeshStandardMaterial?k.environment:null,H=(g.isMeshStandardMaterial?i:e).get(g.envMap||J),oe=H&&H.mapping===306?H.image.height:null,le=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const ve=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ve=ve!==void 0?ve.length:0;let $e=0;B.morphAttributes.position!==void 0&&($e=1),B.morphAttributes.normal!==void 0&&($e=2),B.morphAttributes.color!==void 0&&($e=3);let W,Z,me,ce;if(le){const Ct=ei[le];W=Ct.vertexShader,Z=Ct.fragmentShader}else W=g.vertexShader,Z=g.fragmentShader,l.update(g),me=l.getVertexShaderID(g),ce=l.getFragmentShaderID(g);const Le=t.getRenderTarget(),we=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,Ke=!!g.map,Be=!!g.matcap,A=!!H,Pt=!!g.aoMap,Ne=!!g.lightMap,ze=!!g.bumpMap,be=!!g.normalMap,tt=!!g.displacementMap,Re=!!g.emissiveMap,y=!!g.metalnessMap,v=!!g.roughnessMap,D=g.anisotropy>0,q=g.clearcoat>0,$=g.dispersion>0,X=g.iridescence>0,_e=g.sheen>0,ie=g.transmission>0,he=D&&!!g.anisotropyMap,He=q&&!!g.clearcoatMap,K=q&&!!g.clearcoatNormalMap,de=q&&!!g.clearcoatRoughnessMap,Ae=X&&!!g.iridescenceMap,Ce=X&&!!g.iridescenceThicknessMap,ue=_e&&!!g.sheenColorMap,Fe=_e&&!!g.sheenRoughnessMap,Pe=!!g.specularMap,Qe=!!g.specularColorMap,R=!!g.specularIntensityMap,re=ie&&!!g.transmissionMap,z=ie&&!!g.thicknessMap,Y=!!g.gradientMap,ne=!!g.alphaMap,ae=g.alphaTest>0,ke=!!g.alphaHash,ct=!!g.extensions;let At=0;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(At=t.toneMapping);const Ge={shaderID:le,shaderType:g.type,shaderName:g.name,vertexShader:W,fragmentShader:Z,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:we,instancingColor:we&&G.instanceColor!==null,instancingMorph:we&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:pi,alphaToCoverage:!!g.alphaToCoverage,map:Ke,matcap:Be,envMap:A,envMapMode:A&&H.mapping,envMapCubeUVHeight:oe,aoMap:Pt,lightMap:Ne,bumpMap:ze,normalMap:be,displacementMap:m&&tt,emissiveMap:Re,normalMapObjectSpace:be&&g.normalMapType===1,normalMapTangentSpace:be&&g.normalMapType===0,metalnessMap:y,roughnessMap:v,anisotropy:D,anisotropyMap:he,clearcoat:q,clearcoatMap:He,clearcoatNormalMap:K,clearcoatRoughnessMap:de,dispersion:$,iridescence:X,iridescenceMap:Ae,iridescenceThicknessMap:Ce,sheen:_e,sheenColorMap:ue,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Qe,specularIntensityMap:R,transmission:ie,transmissionMap:re,thicknessMap:z,gradientMap:Y,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:ne,alphaTest:ae,alphaHash:ke,combine:g.combine,mapUv:Ke&&d(g.map.channel),aoMapUv:Pt&&d(g.aoMap.channel),lightMapUv:Ne&&d(g.lightMap.channel),bumpMapUv:ze&&d(g.bumpMap.channel),normalMapUv:be&&d(g.normalMap.channel),displacementMapUv:tt&&d(g.displacementMap.channel),emissiveMapUv:Re&&d(g.emissiveMap.channel),metalnessMapUv:y&&d(g.metalnessMap.channel),roughnessMapUv:v&&d(g.roughnessMap.channel),anisotropyMapUv:he&&d(g.anisotropyMap.channel),clearcoatMapUv:He&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:K&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&d(g.sheenRoughnessMap.channel),specularMapUv:Pe&&d(g.specularMap.channel),specularColorMapUv:Qe&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:re&&d(g.transmissionMap.channel),thicknessMapUv:z&&d(g.thicknessMap.channel),alphaMapUv:ne&&d(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||D),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Ke||ne),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:$e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:At,decodeVideoTexture:Ke&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ct&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&g.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function T(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const V in g.defines)E.push(V),E.push(g.defines[V]);return g.isRawShaderMaterial===!1&&(S(E,g),w(E,g),E.push(t.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function S(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function w(g,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),g.push(o.mask)}function F(g){const E=x[g.type];let V;if(E){const k=ei[E];V=Bd.clone(k.uniforms)}else V=g.uniforms;return V}function C(g,E){let V;for(let k=0,G=h.length;k<G;k++){const j=h[k];if(j.cacheKey===E){V=j,++V.usedTimes;break}}return V===void 0&&(V=new Qm(t,E,g,r),h.push(V)),V}function b(g){if(--g.usedTimes===0){const E=h.indexOf(g);h[E]=h[h.length-1],h.pop(),g.destroy()}}function O(g){l.remove(g)}function ee(){l.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:F,acquireProgram:C,releaseProgram:b,releaseShaderCache:O,programs:h,dispose:ee}}function sg(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:i,remove:n,update:s,dispose:r}}function rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xo(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mo(){const t=[];let e=0;const i=[],n=[],s=[];function r(){e=0,i.length=0,n.length=0,s.length=0}function a(u,p,m,_,x,d){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},t[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=d),e++,f}function o(u,p,m,_,x,d){const f=a(u,p,m,_,x,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):i.push(f)}function l(u,p,m,_,x,d){const f=a(u,p,m,_,x,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):i.unshift(f)}function c(u,p){i.length>1&&i.sort(u||rg),n.length>1&&n.sort(p||xo),s.length>1&&s.sort(p||xo)}function h(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ag(){let t=new WeakMap;function e(n,s){const r=t.get(n);let a;return r===void 0?(a=new Mo,t.set(n,[a])):s>=r.length?(a=new Mo,r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function og(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new I,color:new Ze};break;case"SpotLight":i={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":i={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=i,i}}}function lg(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}let cg=0;function hg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dg(t){const e=new og,i=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new st,a=new st;function o(c){let h=0,u=0,p=0;for(let ee=0;ee<9;ee++)n.probe[ee].set(0,0,0);let m=0,_=0,x=0,d=0,f=0,T=0,S=0,w=0,F=0,C=0,b=0;c.sort(hg);for(let ee=0,g=c.length;ee<g;ee++){const E=c[ee],V=E.color,k=E.intensity,G=E.distance,j=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=V.r*k,u+=V.g*k,p+=V.b*k;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],k);b++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,H=i.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=E.shadow.matrix,T++}n.directional[m]=B,m++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(V).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[x]=B;const J=E.shadow;if(E.map&&(n.spotLightMap[F]=E.map,F++,J.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[x]=J.matrix,E.castShadow){const H=i.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=j,w++}x++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(V).multiplyScalar(k),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[d]=B,d++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const J=E.shadow,H=i.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=E.shadow.matrix,S++}n.point[_]=B,_++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(k),B.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[f]=B,f++}}d>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const O=n.hash;(O.directionalLength!==m||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==d||O.hemiLength!==f||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=d,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,O.directionalLength=m,O.pointLength=_,O.spotLength=x,O.rectAreaLength=d,O.hemiLength=f,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=b,n.version=cg++)}function l(c,h){let u=0,p=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const S=c[f];if(S.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(S.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:n}}function Eo(t){const e=new dg(t),i=[],n=[];function s(h){c.camera=h,i.length=0,n.length=0}function r(h){i.push(h)}function a(h){n.push(h)}function o(){e.setup(i)}function l(h){e.setupView(i,h)}const c={lightsArray:i,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ug(t){let e=new WeakMap;function i(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Eo(t),e.set(s,[o])):r>=a.length?(o=new Eo(t),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:i,dispose:n}}class fg extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pg extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vg(t,e,i){let n=new aa;const s=new Ue,r=new Ue,a=new lt,o=new fg({depthPacking:3201}),l=new pg,c={},h=i.maxTextureSize,u={0:1,1:0,2:2},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ci;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(C,b,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const ee=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=f!==3&&this.type===3,G=f===3&&this.type!==3;for(let j=0,B=C.length;j<B;j++){const J=C[j],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||k===!0||G===!0){const ve=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new bi(s.x,s.y,ve),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const le=H.getViewportCount();for(let ve=0;ve<le;ve++){const Ve=H.getViewport(ve);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),V.viewport(a),H.updateMatrices(J,ve),n=H.getFrustum(),w(b,O,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===3&&T(H,O),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,t.setRenderTarget(ee,g,E)};function T(C,b){const O=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bi(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,O,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,O,m,x,null)}function S(C,b,O,ee){let g=null;const E=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)g=E;else if(g=O.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=g.uuid,k=b.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let j=G[k];j===void 0&&(j=g.clone(),G[k]=j,b.addEventListener("dispose",F)),g=j}if(g.visible=b.visible,g.wireframe=b.wireframe,ee===3?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:u[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,O.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=t.properties.get(g);V.light=O}return g}function w(C,b,O,ee,g){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const k=e.update(C),G=C.material;if(Array.isArray(G)){const j=k.groups;for(let B=0,J=j.length;B<J;B++){const H=j[B],oe=G[H.materialIndex];if(oe&&oe.visible){const le=S(C,oe,ee,g);C.onBeforeShadow(t,C,b,O,k,le,H),t.renderBufferDirect(O,null,k,le,C,H),C.onAfterShadow(t,C,b,O,k,le,H)}}}else if(G.visible){const j=S(C,G,ee,g);C.onBeforeShadow(t,C,b,O,k,j,null),t.renderBufferDirect(O,null,k,j,C,null),C.onAfterShadow(t,C,b,O,k,j,null)}}const V=C.children;for(let k=0,G=V.length;k<G;k++)w(V[k],b,O,ee,g)}function F(C){C.target.removeEventListener("dispose",F);for(const O in c){const ee=c[O],g=C.target.uuid;g in ee&&(ee[g].dispose(),delete ee[g])}}}const _g={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function xg(t){function e(){let R=!1;const re=new lt;let z=null;const Y=new lt(0,0,0,0);return{setMask:function(ne){z!==ne&&!R&&(t.colorMask(ne,ne,ne,ne),z=ne)},setLocked:function(ne){R=ne},setClear:function(ne,ae,ke,ct,At){At===!0&&(ne*=ct,ae*=ct,ke*=ct),re.set(ne,ae,ke,ct),Y.equals(re)===!1&&(t.clearColor(ne,ae,ke,ct),Y.copy(re))},reset:function(){R=!1,z=null,Y.set(-1,0,0,0)}}}function i(){let R=!1,re=!1,z=null,Y=null,ne=null;return{setReversed:function(ae){re=ae},setTest:function(ae){ae?me(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ae){z!==ae&&!R&&(t.depthMask(ae),z=ae)},setFunc:function(ae){if(re&&(ae=_g[ae]),Y!==ae){switch(ae){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ae}},setLocked:function(ae){R=ae},setClear:function(ae){ne!==ae&&(t.clearDepth(ae),ne=ae)},reset:function(){R=!1,z=null,Y=null,ne=null}}}function n(){let R=!1,re=null,z=null,Y=null,ne=null,ae=null,ke=null,ct=null,At=null;return{setTest:function(Ge){R||(Ge?me(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ge){re!==Ge&&!R&&(t.stencilMask(Ge),re=Ge)},setFunc:function(Ge,Ct,ri){(z!==Ge||Y!==Ct||ne!==ri)&&(t.stencilFunc(Ge,Ct,ri),z=Ge,Y=Ct,ne=ri)},setOp:function(Ge,Ct,ri){(ae!==Ge||ke!==Ct||ct!==ri)&&(t.stencilOp(Ge,Ct,ri),ae=Ge,ke=Ct,ct=ri)},setLocked:function(Ge){R=Ge},setClear:function(Ge){At!==Ge&&(t.clearStencil(Ge),At=Ge)},reset:function(){R=!1,re=null,z=null,Y=null,ne=null,ae=null,ke=null,ct=null,At=null}}}const s=new e,r=new i,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,_=!1,x=null,d=null,f=null,T=null,S=null,w=null,F=null,C=new Ze(0,0,0),b=0,O=!1,ee=null,g=null,E=null,V=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=B>=2);let H=null,oe={};const le=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Ve=new lt().fromArray(le),$e=new lt().fromArray(ve);function W(R,re,z,Y){const ne=new Uint8Array(4),ae=t.createTexture();t.bindTexture(R,ae),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<z;ke++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(re+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return ae}const Z={};Z[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),me(t.DEPTH_TEST),r.setFunc(3),Ne(!1),ze(1),me(t.CULL_FACE),A(0);function me(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function ce(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Le(R,re){return h[R]!==re?(t.bindFramebuffer(R,re),h[R]=re,R===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=re),R===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=re),!0):!1}function we(R,re){let z=p,Y=!1;if(R){z=u.get(re),z===void 0&&(z=[],u.set(re,z));const ne=R.textures;if(z.length!==ne.length||z[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,ke=ne.length;ae<ke;ae++)z[ae]=t.COLOR_ATTACHMENT0+ae;z.length=ne.length,Y=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,Y=!0);Y&&t.drawBuffers(z)}function Oe(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const Ke={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};Ke[103]=t.MIN,Ke[104]=t.MAX;const Be={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function A(R,re,z,Y,ne,ae,ke,ct,At,Ge){if(R===0){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(me(t.BLEND),_=!0),R!==5){if(R!==x||Ge!==O){if((d!==100||S!==100)&&(t.blendEquation(t.FUNC_ADD),d=100,S=100),Ge)switch(R){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}f=null,T=null,w=null,F=null,C.set(0,0,0),b=0,x=R,O=Ge}return}ne=ne||re,ae=ae||z,ke=ke||Y,(re!==d||ne!==S)&&(t.blendEquationSeparate(Ke[re],Ke[ne]),d=re,S=ne),(z!==f||Y!==T||ae!==w||ke!==F)&&(t.blendFuncSeparate(Be[z],Be[Y],Be[ae],Be[ke]),f=z,T=Y,w=ae,F=ke),(ct.equals(C)===!1||At!==b)&&(t.blendColor(ct.r,ct.g,ct.b,At),C.copy(ct),b=At),x=R,O=!1}function Pt(R,re){R.side===2?ce(t.CULL_FACE):me(t.CULL_FACE);let z=R.side===1;re&&(z=!z),Ne(z),R.blending===1&&R.transparent===!1?A(0):A(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){ee!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),ee=R)}function ze(R){R!==0?(me(t.CULL_FACE),R!==g&&(R===1?t.cullFace(t.BACK):R===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),g=R}function be(R){R!==E&&(j&&t.lineWidth(R),E=R)}function tt(R,re,z){R?(me(t.POLYGON_OFFSET_FILL),(V!==re||k!==z)&&(t.polygonOffset(re,z),V=re,k=z)):ce(t.POLYGON_OFFSET_FILL)}function Re(R){R?me(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function y(R){R===void 0&&(R=t.TEXTURE0+G-1),H!==R&&(t.activeTexture(R),H=R)}function v(R,re,z){z===void 0&&(H===null?z=t.TEXTURE0+G-1:z=H);let Y=oe[z];Y===void 0&&(Y={type:void 0,texture:void 0},oe[z]=Y),(Y.type!==R||Y.texture!==re)&&(H!==z&&(t.activeTexture(z),H=z),t.bindTexture(R,re||Z[R]),Y.type=R,Y.texture=re)}function D(){const R=oe[H];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){Ve.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Ve.copy(R))}function ue(R){$e.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),$e.copy(R))}function Fe(R,re){let z=l.get(re);z===void 0&&(z=new WeakMap,l.set(re,z));let Y=z.get(R);Y===void 0&&(Y=t.getUniformBlockIndex(re,R.name),z.set(R,Y))}function Pe(R,re){const Y=l.get(re).get(R);o.get(re)!==Y&&(t.uniformBlockBinding(re,Y,R.__bindingPointIndex),o.set(re,Y))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},H=null,oe={},h={},u=new WeakMap,p=[],m=null,_=!1,x=null,d=null,f=null,T=null,S=null,w=null,F=null,C=new Ze(0,0,0),b=0,O=!1,ee=null,g=null,E=null,V=null,k=null,Ve.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:me,disable:ce,bindFramebuffer:Le,drawBuffers:we,useProgram:Oe,setBlending:A,setMaterial:Pt,setFlipSided:Ne,setCullFace:ze,setLineWidth:be,setPolygonOffset:tt,setScissorTest:Re,activeTexture:y,bindTexture:v,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:de,texImage3D:Ae,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:He,texStorage3D:K,texSubImage2D:X,texSubImage3D:_e,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:Ce,viewport:ue,reset:Qe}}function So(t,e,i,n){const s=Mg(n);switch(i){case 1021:return t*e;case 1024:return t*e;case 1025:return t*e*2;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Mg(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Eg(t,e,i,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Is("canvas")}function x(y,v,D){let q=1;const $=Re(y);if(($.width>D||$.height>D)&&(q=D/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(q*$.width),_e=Math.floor(q*$.height);u===void 0&&(u=_(X,_e));const ie=v?_(X,_e):u;return ie.width=X,ie.height=_e,ie.getContext("2d").drawImage(y,0,0,X,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+_e+")."),ie}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function d(y){return y.generateMipmaps&&y.minFilter!==1003&&y.minFilter!==1006}function f(y){t.generateMipmap(y)}function T(y,v,D,q,$=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=v;if(v===t.RED&&(D===t.FLOAT&&(X=t.R32F),D===t.HALF_FLOAT&&(X=t.R16F),D===t.UNSIGNED_BYTE&&(X=t.R8)),v===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.R8UI),D===t.UNSIGNED_SHORT&&(X=t.R16UI),D===t.UNSIGNED_INT&&(X=t.R32UI),D===t.BYTE&&(X=t.R8I),D===t.SHORT&&(X=t.R16I),D===t.INT&&(X=t.R32I)),v===t.RG&&(D===t.FLOAT&&(X=t.RG32F),D===t.HALF_FLOAT&&(X=t.RG16F),D===t.UNSIGNED_BYTE&&(X=t.RG8)),v===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RG8UI),D===t.UNSIGNED_SHORT&&(X=t.RG16UI),D===t.UNSIGNED_INT&&(X=t.RG32UI),D===t.BYTE&&(X=t.RG8I),D===t.SHORT&&(X=t.RG16I),D===t.INT&&(X=t.RG32I)),v===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGB8UI),D===t.UNSIGNED_SHORT&&(X=t.RGB16UI),D===t.UNSIGNED_INT&&(X=t.RGB32UI),D===t.BYTE&&(X=t.RGB8I),D===t.SHORT&&(X=t.RGB16I),D===t.INT&&(X=t.RGB32I)),v===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),D===t.UNSIGNED_INT&&(X=t.RGBA32UI),D===t.BYTE&&(X=t.RGBA8I),D===t.SHORT&&(X=t.RGBA16I),D===t.INT&&(X=t.RGBA32I)),v===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),v===t.RGBA){const _e=$?Rs:We.getTransfer(q);D===t.FLOAT&&(X=t.RGBA32F),D===t.HALF_FLOAT&&(X=t.RGBA16F),D===t.UNSIGNED_BYTE&&(X=_e===nt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(y,v){let D;return y?v===null||v===1014||v===1020?D=t.DEPTH24_STENCIL8:v===1015?D=t.DEPTH32F_STENCIL8:v===1012&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?D=t.DEPTH_COMPONENT24:v===1015?D=t.DEPTH_COMPONENT32F:v===1012&&(D=t.DEPTH_COMPONENT16),D}function w(y,v){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function F(y){const v=y.target;v.removeEventListener("dispose",F),b(v),v.isVideoTexture&&h.delete(v)}function C(y){const v=y.target;v.removeEventListener("dispose",C),ee(v)}function b(y){const v=n.get(y);if(v.__webglInit===void 0)return;const D=y.source,q=p.get(D);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(y),Object.keys(q).length===0&&p.delete(D)}n.remove(y)}function O(y){const v=n.get(y);t.deleteTexture(v.__webglTexture);const D=y.source,q=p.get(D);delete q[v.__cacheKey],a.memory.textures--}function ee(y){const v=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)t.deleteFramebuffer(v.__webglFramebuffer[q][$]);else t.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)t.deleteFramebuffer(v.__webglFramebuffer[q]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=y.textures;for(let q=0,$=D.length;q<$;q++){const X=n.get(D[q]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(D[q])}n.remove(y)}let g=0;function E(){g=0}function V(){const y=g;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),g+=1,y}function k(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function G(y,v){const D=n.get(y);if(y.isVideoTexture&&be(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(D,y,v);return}}i.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+v)}function j(y,v){const D=n.get(y);if(y.version>0&&D.__version!==y.version){$e(D,y,v);return}i.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+v)}function B(y,v){const D=n.get(y);if(y.version>0&&D.__version!==y.version){$e(D,y,v);return}i.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+v)}function J(y,v){const D=n.get(y);if(y.version>0&&D.__version!==y.version){W(D,y,v);return}i.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+v)}const H={1e3:t.REPEAT,1001:t.CLAMP_TO_EDGE,1002:t.MIRRORED_REPEAT},oe={1003:t.NEAREST,1004:t.NEAREST_MIPMAP_NEAREST,1005:t.NEAREST_MIPMAP_LINEAR,1006:t.LINEAR,1007:t.LINEAR_MIPMAP_NEAREST,1008:t.LINEAR_MIPMAP_LINEAR},le={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ve(y,v){if(v.type===1015&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,H[v.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,H[v.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,H[v.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,oe[v.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(y,v){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",F));const q=v.source;let $=p.get(q);$===void 0&&($={},p.set(q,$));const X=k(v);if(X!==y.__cacheKey){$[X]===void 0&&($[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[X].usedTimes++;const _e=$[y.__cacheKey];_e!==void 0&&($[y.__cacheKey].usedTimes--,_e.usedTimes===0&&O(v)),y.__cacheKey=X,y.__webglTexture=$[X].texture}return D}function $e(y,v,D){let q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=t.TEXTURE_3D);const $=Ve(y,v),X=v.source;i.bindTexture(q,y.__webglTexture,t.TEXTURE0+D);const _e=n.get(X);if(X.version!==_e.__version||$===!0){i.activeTexture(t.TEXTURE0+D);const ie=We.getPrimaries(We.workingColorSpace),he=v.colorSpace===Si?null:We.getPrimaries(v.colorSpace),He=v.colorSpace===Si||ie===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let K=x(v.image,!1,s.maxTextureSize);K=tt(v,K);const de=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type);let Ce=T(v.internalFormat,de,Ae,v.colorSpace,v.isVideoTexture);ve(q,v);let ue;const Fe=v.mipmaps,Pe=v.isVideoTexture!==!0,Qe=_e.__version===void 0||$===!0,R=X.dataReady,re=w(v,K);if(v.isDepthTexture)Ce=S(v.format===1027,v.type),Qe&&(Pe?i.texStorage2D(t.TEXTURE_2D,1,Ce,K.width,K.height):i.texImage2D(t.TEXTURE_2D,0,Ce,K.width,K.height,0,de,Ae,null));else if(v.isDataTexture)if(Fe.length>0){Pe&&Qe&&i.texStorage2D(t.TEXTURE_2D,re,Ce,Fe[0].width,Fe[0].height);for(let z=0,Y=Fe.length;z<Y;z++)ue=Fe[z],Pe?R&&i.texSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,Ae,ue.data):i.texImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,de,Ae,ue.data);v.generateMipmaps=!1}else Pe?(Qe&&i.texStorage2D(t.TEXTURE_2D,re,Ce,K.width,K.height),R&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,de,Ae,K.data)):i.texImage2D(t.TEXTURE_2D,0,Ce,K.width,K.height,0,de,Ae,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Qe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ce,Fe[0].width,Fe[0].height,K.depth);for(let z=0,Y=Fe.length;z<Y;z++)if(ue=Fe[z],v.format!==1023)if(de!==null)if(Pe){if(R)if(v.layerUpdates.size>0){const ne=So(ue.width,ue.height,v.format,v.type);for(const ae of v.layerUpdates){const ke=ue.data.subarray(ae*ne/ue.data.BYTES_PER_ELEMENT,(ae+1)*ne/ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,ae,ue.width,ue.height,1,de,ke,0,0)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,K.depth,de,ue.data,0,0)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Ce,ue.width,ue.height,K.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?R&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,K.depth,de,Ae,ue.data):i.texImage3D(t.TEXTURE_2D_ARRAY,z,Ce,ue.width,ue.height,K.depth,0,de,Ae,ue.data)}else{Pe&&Qe&&i.texStorage2D(t.TEXTURE_2D,re,Ce,Fe[0].width,Fe[0].height);for(let z=0,Y=Fe.length;z<Y;z++)ue=Fe[z],v.format!==1023?de!==null?Pe?R&&i.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,ue.data):i.compressedTexImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?R&&i.texSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,Ae,ue.data):i.texImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,de,Ae,ue.data)}else if(v.isDataArrayTexture)if(Pe){if(Qe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ce,K.width,K.height,K.depth),R)if(v.layerUpdates.size>0){const z=So(K.width,K.height,v.format,v.type);for(const Y of v.layerUpdates){const ne=K.data.subarray(Y*z/K.data.BYTES_PER_ELEMENT,(Y+1)*z/K.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,K.width,K.height,1,de,Ae,ne)}v.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,de,Ae,K.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,K.width,K.height,K.depth,0,de,Ae,K.data);else if(v.isData3DTexture)Pe?(Qe&&i.texStorage3D(t.TEXTURE_3D,re,Ce,K.width,K.height,K.depth),R&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,de,Ae,K.data)):i.texImage3D(t.TEXTURE_3D,0,Ce,K.width,K.height,K.depth,0,de,Ae,K.data);else if(v.isFramebufferTexture){if(Qe)if(Pe)i.texStorage2D(t.TEXTURE_2D,re,Ce,K.width,K.height);else{let z=K.width,Y=K.height;for(let ne=0;ne<re;ne++)i.texImage2D(t.TEXTURE_2D,ne,Ce,z,Y,0,de,Ae,null),z>>=1,Y>>=1}}else if(Fe.length>0){if(Pe&&Qe){const z=Re(Fe[0]);i.texStorage2D(t.TEXTURE_2D,re,Ce,z.width,z.height)}for(let z=0,Y=Fe.length;z<Y;z++)ue=Fe[z],Pe?R&&i.texSubImage2D(t.TEXTURE_2D,z,0,0,de,Ae,ue):i.texImage2D(t.TEXTURE_2D,z,Ce,de,Ae,ue);v.generateMipmaps=!1}else if(Pe){if(Qe){const z=Re(K);i.texStorage2D(t.TEXTURE_2D,re,Ce,z.width,z.height)}R&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ae,K)}else i.texImage2D(t.TEXTURE_2D,0,Ce,de,Ae,K);d(v)&&f(q),_e.__version=X.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function W(y,v,D){if(v.image.length!==6)return;const q=Ve(y,v),$=v.source;i.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+D);const X=n.get($);if($.version!==X.__version||q===!0){i.activeTexture(t.TEXTURE0+D);const _e=We.getPrimaries(We.workingColorSpace),ie=v.colorSpace===Si?null:We.getPrimaries(v.colorSpace),he=v.colorSpace===Si||_e===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!He&&!K?de[Y]=x(v.image[Y],!0,s.maxCubemapSize):de[Y]=K?v.image[Y].image:v.image[Y],de[Y]=tt(v,de[Y]);const Ae=de[0],Ce=r.convert(v.format,v.colorSpace),ue=r.convert(v.type),Fe=T(v.internalFormat,Ce,ue,v.colorSpace),Pe=v.isVideoTexture!==!0,Qe=X.__version===void 0||q===!0,R=$.dataReady;let re=w(v,Ae);ve(t.TEXTURE_CUBE_MAP,v);let z;if(He){Pe&&Qe&&i.texStorage2D(t.TEXTURE_CUBE_MAP,re,Fe,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){z=de[Y].mipmaps;for(let ne=0;ne<z.length;ne++){const ae=z[ne];v.format!==1023?Ce!==null?Pe?R&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,ae.width,ae.height,Ce,ae.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,Fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?R&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,ae.width,ae.height,Ce,ue,ae.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,Fe,ae.width,ae.height,0,Ce,ue,ae.data)}}}else{if(z=v.mipmaps,Pe&&Qe){z.length>0&&re++;const Y=Re(de[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,re,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(K){Pe?R&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,Ce,ue,de[Y].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,de[Y].width,de[Y].height,0,Ce,ue,de[Y].data);for(let ne=0;ne<z.length;ne++){const ke=z[ne].image[Y].image;Pe?R&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,ke.width,ke.height,Ce,ue,ke.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,Fe,ke.width,ke.height,0,Ce,ue,ke.data)}}else{Pe?R&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,ue,de[Y]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ce,ue,de[Y]);for(let ne=0;ne<z.length;ne++){const ae=z[ne];Pe?R&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,Ce,ue,ae.image[Y]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,Fe,Ce,ue,ae.image[Y])}}}d(v)&&f(t.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Z(y,v,D,q,$,X){const _e=r.convert(D.format,D.colorSpace),ie=r.convert(D.type),he=T(D.internalFormat,_e,ie,D.colorSpace);if(!n.get(v).__hasExternalTextures){const K=Math.max(1,v.width>>X),de=Math.max(1,v.height>>X);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?i.texImage3D($,X,he,K,de,v.depth,0,_e,ie,null):i.texImage2D($,X,he,K,de,0,_e,ie,null)}i.bindFramebuffer(t.FRAMEBUFFER,y),ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,$,n.get(D).__webglTexture,0,Ne(v)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,$,n.get(D).__webglTexture,X),i.bindFramebuffer(t.FRAMEBUFFER,null)}function me(y,v,D){if(t.bindRenderbuffer(t.RENDERBUFFER,y),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=S(v.stencilBuffer,$),_e=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=Ne(v);ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,X,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,X,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,X,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,y)}else{const q=v.textures;for(let $=0;$<q.length;$++){const X=q[$],_e=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),he=T(X.internalFormat,_e,ie,X.colorSpace),He=Ne(v);D&&ze(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,he,v.width,v.height):ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,he,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,he,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(t.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const q=n.get(v.depthTexture).__webglTexture,$=Ne(v);if(v.depthTexture.format===1026)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(v.depthTexture.format===1027)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Le(y){const v=n.get(y),D=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ce(v.__webglFramebuffer,y)}else if(D){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=t.createRenderbuffer(),me(v.__webglDepthbuffer[q],y,!1);else{const $=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,X)}}else if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),me(v.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,$)}i.bindFramebuffer(t.FRAMEBUFFER,null)}function we(y,v,D){const q=n.get(y);v!==void 0&&Z(q.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Le(y)}function Oe(y){const v=y.texture,D=n.get(y),q=n.get(v);y.addEventListener("dispose",C);const $=y.textures,X=y.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=v.version,a.memory.textures++),X){D.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ie]=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[ie][he]=t.createFramebuffer()}else D.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)D.__webglFramebuffer[ie]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(_e)for(let ie=0,he=$.length;ie<he;ie++){const He=n.get($[ie]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&ze(y)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const he=$[ie];D.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ie]);const He=r.convert(he.format,he.colorSpace),K=r.convert(he.type),de=T(he.internalFormat,He,K,he.colorSpace,y.isXRRenderTarget===!0),Ae=Ne(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,D.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),me(D.__webglDepthRenderbuffer,y,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){i.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ve(t.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Z(D.__webglFramebuffer[ie][he],y,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,he);else Z(D.__webglFramebuffer[ie],y,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(v)&&f(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(_e){for(let ie=0,he=$.length;ie<he;ie++){const He=$[ie],K=n.get(He);i.bindTexture(t.TEXTURE_2D,K.__webglTexture),ve(t.TEXTURE_2D,He),Z(D.__webglFramebuffer,y,He,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),d(He)&&f(t.TEXTURE_2D)}i.unbindTexture()}else{let ie=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ie=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ie,q.__webglTexture),ve(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Z(D.__webglFramebuffer[he],y,v,t.COLOR_ATTACHMENT0,ie,he);else Z(D.__webglFramebuffer,y,v,t.COLOR_ATTACHMENT0,ie,0);d(v)&&f(ie),i.unbindTexture()}y.depthBuffer&&Le(y)}function Ke(y){const v=y.textures;for(let D=0,q=v.length;D<q;D++){const $=v[D];if(d($)){const X=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=n.get($).__webglTexture;i.bindTexture(X,_e),f(X),i.unbindTexture()}}}const Be=[],A=[];function Pt(y){if(y.samples>0){if(ze(y)===!1){const v=y.textures,D=y.width,q=y.height;let $=t.COLOR_BUFFER_BIT;const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=n.get(y),ie=v.length>1;if(ie)for(let he=0;he<v.length;he++)i.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let he=0;he<v.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[he]);const He=n.get(v[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,D,q,0,0,D,q,$,t.NEAREST),l===!0&&(Be.length=0,A.length=0,Be.push(t.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Be.push(X),A.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,A)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let he=0;he<v.length;he++){i.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,_e.__webglColorRenderbuffer[he]);const He=n.get(v[he]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,He,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Ne(y){return Math.min(s.maxSamples,y.samples)}function ze(y){const v=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function tt(y,v){const D=y.colorSpace,q=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==pi&&D!==Si&&(We.getTransfer(D)===nt?(q!==1023||$!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function Re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=we,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ze}function Sg(t,e){function i(n,s=Si){let r;const a=We.getTransfer(s);if(n===1009)return t.UNSIGNED_BYTE;if(n===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return t.BYTE;if(n===1011)return t.SHORT;if(n===1012)return t.UNSIGNED_SHORT;if(n===1013)return t.INT;if(n===1014)return t.UNSIGNED_INT;if(n===1015)return t.FLOAT;if(n===1016)return t.HALF_FLOAT;if(n===1021)return t.ALPHA;if(n===1022)return t.RGB;if(n===1023)return t.RGBA;if(n===1024)return t.LUMINANCE;if(n===1025)return t.LUMINANCE_ALPHA;if(n===1026)return t.DEPTH_COMPONENT;if(n===1027)return t.DEPTH_STENCIL;if(n===1028)return t.RED;if(n===1029)return t.RED_INTEGER;if(n===1030)return t.RG;if(n===1031)return t.RG_INTEGER;if(n===1033)return t.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}class yg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zi extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const n of e.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=i.getJointPose(x,n),f=this._getHandJoint(c,x);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=i.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=i.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[i.jointName]=n,e.add(n)}return e.joints[i.jointName]}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=i.texture,(i.depthNear!=n.depthNear||i.depthFar!=n.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,n=new ui({vertexShader:Tg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ot(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends fn{constructor(e,i){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,_=null;const x=new Ag,d=i.getContextAttributes();let f=null,T=null;const S=[],w=[],F=new Ue;let C=null;const b=new Ht;b.layers.enable(1),b.viewport=new lt;const O=new Ht;O.layers.enable(2),O.viewport=new lt;const ee=[b,O],g=new yg;g.layers.enable(1),g.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=S[W];return Z===void 0&&(Z=new Dr,S[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=S[W];return Z===void 0&&(Z=new Dr,S[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=S[W];return Z===void 0&&(Z=new Dr,S[W]=Z),Z.getHandSpace()};function k(W){const Z=w.indexOf(W.inputSource);if(Z===-1)return;const me=S[Z];me!==void 0&&(me.update(W.inputSource,W.frame,c||a),me.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let W=0;W<S.length;W++){const Z=w[W];Z!==null&&(w[W]=null,S[W].disconnect(Z))}E=null,V=null,x.reset(),e.setRenderTarget(f),m=null,p=null,u=null,s=null,T=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await i.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,i,Z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new bi(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,me=null,ce=null;d.depth&&(ce=d.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=d.stencil?1027:1026,me=d.stencil?1020:1014);const Le={colorFormat:i.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,i),p=u.createProjectionLayer(Le),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new bi(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new Jo(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let Z=0;Z<W.removed.length;Z++){const me=W.removed[Z],ce=w.indexOf(me);ce>=0&&(w[ce]=null,S[ce].disconnect(me))}for(let Z=0;Z<W.added.length;Z++){const me=W.added[Z];let ce=w.indexOf(me);if(ce===-1){for(let we=0;we<S.length;we++)if(we>=w.length){w.push(me),ce=we;break}else if(w[we]===null){w[we]=me,ce=we;break}if(ce===-1)break}const Le=S[ce];Le&&Le.connect(me)}}const B=new I,J=new I;function H(W,Z,me){B.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const ce=B.distanceTo(J),Le=Z.projectionMatrix.elements,we=me.projectionMatrix.elements,Oe=Le[14]/(Le[10]-1),Ke=Le[14]/(Le[10]+1),Be=(Le[9]+1)/Le[5],A=(Le[9]-1)/Le[5],Pt=(Le[8]-1)/Le[0],Ne=(we[8]+1)/we[0],ze=Oe*Pt,be=Oe*Ne,tt=ce/(-Pt+Ne),Re=tt*-Pt;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Re),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const y=Oe+tt,v=Ke+tt,D=ze-Re,q=be+(ce-Re),$=Be*Ke/v*y,X=A*Ke/v*y;W.projectionMatrix.makePerspective(D,q,$,X,y,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Z=W.near,me=W.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(me=x.depthFar)),g.near=O.near=b.near=Z,g.far=O.far=b.far=me,(E!==g.near||V!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,V=g.far);const ce=W.parent,Le=g.cameras;oe(g,ce);for(let we=0;we<Le.length;we++)oe(Le[we],ce);Le.length===2?H(g,b,O):g.projectionMatrix.copy(b.projectionMatrix),le(W,g,ce)};function le(W,Z,me){me===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Vn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let ve=null;function Ve(W,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const me=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ce=!1;me.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let we=0;we<me.length;we++){const Oe=me[we];let Ke=null;if(m!==null)Ke=m.getViewport(Oe);else{const A=u.getViewSubImage(p,Oe);Ke=A.viewport,we===0&&(e.setRenderTargetTextures(T,A.colorTexture,p.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(T))}let Be=ee[we];Be===void 0&&(Be=new Ht,Be.layers.enable(we),Be.viewport=new lt,ee[we]=Be),Be.matrix.fromArray(Oe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Oe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),we===0&&(g.matrix.copy(Be.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(Be)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const we=u.getDepthInformation(me[0]);we&&we.isValid&&we.texture&&x.init(e,we,s.renderState)}}for(let me=0;me<S.length;me++){const ce=w[me],Le=S[me];ce!==null&&Le!==void 0&&Le.update(ce,Z,c||a)}ve&&ve(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const $e=new Ko;$e.setAnimationLoop(Ve),this.setAnimationLoop=function(W){ve=W},this.dispose=function(){}}}const Fi=new si,Rg=new st;function Lg(t,e){function i(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,$o(t)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,T,S,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,w)):f.isMeshMatcapMaterial?(r(d,f),_(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),x(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,T,S):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,i(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,i(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===1&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,i(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===1&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,i(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,i(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,w=T.envMapRotation;S&&(d.envMap.value=S,Fi.copy(w),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),d.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Fi)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,i(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,T,S){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*T,d.scale.value=S*.5,f.map&&(d.map.value=f.map,i(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,i(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,T){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function x(d,f){const T=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(t,e,i,n){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const w=S.program;n.uniformBlockBinding(T,w)}function c(T,S){let w=s[T.id];w===void 0&&(_(T),w=h(T),s[T.id]=w,T.addEventListener("dispose",d));const F=S.program;n.updateUBOMapping(T,F);const C=e.render.frame;r[T.id]!==C&&(p(T),r[T.id]=C)}function h(T){const S=u();T.__bindingPointIndex=S;const w=t.createBuffer(),F=T.__size,C=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,F,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,w),w}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const S=s[T.id],w=T.uniforms,F=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,b=w.length;C<b;C++){const O=Array.isArray(w[C])?w[C]:[w[C]];for(let ee=0,g=O.length;ee<g;ee++){const E=O[ee];if(m(E,C,ee,F)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let j=0;j<k.length;j++){const B=k[j],J=x(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,V+G,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(T,S,w,F){const C=T.value,b=S+"_"+w;if(F[b]===void 0)return typeof C=="number"||typeof C=="boolean"?F[b]=C:F[b]=C.clone(),!0;{const O=F[b];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return F[b]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(T){const S=T.uniforms;let w=0;const F=16;for(let b=0,O=S.length;b<O;b++){const ee=Array.isArray(S[b])?S[b]:[S[b]];for(let g=0,E=ee.length;g<E;g++){const V=ee[g],k=Array.isArray(V.value)?V.value:[V.value];for(let G=0,j=k.length;G<j;G++){const B=k[G],J=x(B),H=w%F,oe=H%J.boundary,le=H+oe;w+=oe,le!==0&&F-le<J.storage&&(w+=F-le),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=J.storage}}}const C=w%F;return C>0&&(w+=F-C),T.__size=w,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function d(T){const S=T.target;S.removeEventListener("dispose",d);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const T in s)t.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Ig{constructor(e={}){const{canvas:i=vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const f=[],T=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=0,this.toneMappingExposure=1;const S=this;let w=!1,F=0,C=0,b=null,O=-1,ee=null;const g=new lt,E=new lt;let V=null;const k=new Ze(0);let G=0,j=i.width,B=i.height,J=1,H=null,oe=null;const le=new lt(0,0,j,B),ve=new lt(0,0,j,B);let Ve=!1;const $e=new aa;let W=!1,Z=!1;const me=new st,ce=new st,Le=new I,we=new lt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Be(){return b===null?J:1}let A=n;function Pt(M,L){return i.getContext(M,L)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ta}`),i.addEventListener("webglcontextlost",Y,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",ae,!1),A===null){const L="webgl2";if(A=Pt(L,M),A===null)throw Pt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ne,ze,be,tt,Re,y,v,D,q,$,X,_e,ie,he,He,K,de,Ae,Ce,ue,Fe,Pe,Qe,R;function re(){Ne=new Op(A),Ne.init(),Pe=new Sg(A,Ne),ze=new Lp(A,Ne,e,Pe),be=new xg(A),ze.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),tt=new zp(A),Re=new sg,y=new Eg(A,Ne,be,Re,ze,Pe,tt),v=new Ip(S),D=new Fp(S),q=new Xd(A),Qe=new Cp(A,q),$=new Bp(A,q,tt,Qe),X=new Vp(A,$,q,tt),Ce=new Hp(A,ze,y),K=new Pp(Re),_e=new ng(S,v,D,Ne,ze,Qe,K),ie=new Lg(S,Re),he=new ag,He=new ug(Ne),Ae=new Ap(S,v,D,be,X,p,l),de=new vg(S,X,ze),R=new Pg(A,tt,ze,be),ue=new Rp(A,Ne,tt),Fe=new kp(A,Ne,tt),tt.programs=_e.programs,S.capabilities=ze,S.extensions=Ne,S.properties=Re,S.renderLists=he,S.shadowMap=de,S.state=be,S.info=tt}re();const z=new Cg(S,A);this.xr=z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(j,B,!1))},this.getSize=function(M){return M.set(j,B)},this.setSize=function(M,L,U=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,B=L,i.width=Math.floor(M*J),i.height=Math.floor(L*J),U===!0&&(i.style.width=M+"px",i.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(j*J,B*J).floor()},this.setDrawingBufferSize=function(M,L,U){j=M,B=L,J=U,i.width=Math.floor(M*U),i.height=Math.floor(L*U),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(g)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,L,U,N){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,L,U,N),be.viewport(g.copy(le).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,L,U,N){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,L,U,N),be.scissor(E.copy(ve).multiplyScalar(J).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){be.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,L=!0,U=!0){let N=0;if(M){let P=!1;if(b!==null){const Q=b.texture.format;P=Q===1033||Q===1031||Q===1029}if(P){const Q=b.texture.type,se=Q===1009||Q===1014||Q===1012||Q===1020||Q===1017||Q===1018,pe=Ae.getClearColor(),ge=Ae.getClearAlpha(),ye=pe.r,Te=pe.g,xe=pe.b;se?(m[0]=ye,m[1]=Te,m[2]=xe,m[3]=ge,A.clearBufferuiv(A.COLOR,0,m)):(_[0]=ye,_[1]=Te,_[2]=xe,_[3]=ge,A.clearBufferiv(A.COLOR,0,_))}else N|=A.COLOR_BUFFER_BIT}L&&(N|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(N|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Y,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),He.dispose(),Re.dispose(),v.dispose(),D.dispose(),X.dispose(),Qe.dispose(),R.dispose(),_e.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ta),z.removeEventListener("sessionend",ba),Li.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=tt.autoReset,L=de.enabled,U=de.autoUpdate,N=de.needsUpdate,P=de.type;re(),tt.autoReset=M,de.enabled=L,de.autoUpdate=U,de.needsUpdate=N,de.type=P}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const L=M.target;L.removeEventListener("dispose",ke),ct(L)}function ct(M){At(M),Re.remove(M)}function At(M){const L=Re.get(M).programs;L!==void 0&&(L.forEach(function(U){_e.releaseProgram(U)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,U,N,P,Q){L===null&&(L=Oe);const se=P.isMesh&&P.matrixWorld.determinant()<0,pe=Kh(M,L,U,N,P);be.setMaterial(N,se);let ge=U.index,ye=1;if(N.wireframe===!0){if(ge=$.getWireframeAttribute(U),ge===void 0)return;ye=2}const Te=U.drawRange,xe=U.attributes.position;let je=Te.start*ye,it=(Te.start+Te.count)*ye;Q!==null&&(je=Math.max(je,Q.start*ye),it=Math.min(it,(Q.start+Q.count)*ye)),ge!==null?(je=Math.max(je,0),it=Math.min(it,ge.count)):xe!=null&&(je=Math.max(je,0),it=Math.min(it,xe.count));const at=it-je;if(at<0||at===1/0)return;Qe.setup(P,N,pe,U,ge);let It,Xe=ue;if(ge!==null&&(It=q.get(ge),Xe=Fe,Xe.setIndex(It)),P.isMesh)N.wireframe===!0?(be.setLineWidth(N.wireframeLinewidth*Be()),Xe.setMode(A.LINES)):Xe.setMode(A.TRIANGLES);else if(P.isLine){let Ee=N.linewidth;Ee===void 0&&(Ee=1),be.setLineWidth(Ee*Be()),P.isLineSegments?Xe.setMode(A.LINES):P.isLineLoop?Xe.setMode(A.LINE_LOOP):Xe.setMode(A.LINE_STRIP)}else P.isPoints?Xe.setMode(A.POINTS):P.isSprite&&Xe.setMode(A.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Xe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Xe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ee=P._multiDrawStarts,vt=P._multiDrawCounts,qe=P._multiDrawCount,Gt=ge?q.get(ge).bytesPerElement:1,Gi=Re.get(N).currentProgram.getUniforms();for(let Dt=0;Dt<qe;Dt++)Gi.setValue(A,"_gl_DrawID",Dt),Xe.render(Ee[Dt]/Gt,vt[Dt])}else if(P.isInstancedMesh)Xe.renderInstances(je,at,P.count);else if(U.isInstancedBufferGeometry){const Ee=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,vt=Math.min(U.instanceCount,Ee);Xe.renderInstances(je,at,vt)}else Xe.render(je,at)};function Ge(M,L,U){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,es(M,L,U),M.side=0,M.needsUpdate=!0,es(M,L,U),M.side=2):es(M,L,U)}this.compile=function(M,L,U=null){U===null&&(U=M),d=He.get(U),d.init(L),T.push(d),U.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),M!==U&&M.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();const N=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Q=P.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const pe=Q[se];Ge(pe,U,P),N.add(pe)}else Ge(Q,U,P),N.add(Q)}),T.pop(),d=null,N},this.compileAsync=function(M,L,U=null){const N=this.compile(M,L,U);return new Promise(P=>{function Q(){if(N.forEach(function(se){Re.get(se).currentProgram.isReady()&&N.delete(se)}),N.size===0){P(M);return}setTimeout(Q,10)}Ne.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ct=null;function ri(M){Ct&&Ct(M)}function Ta(){Li.stop()}function ba(){Li.start()}const Li=new Ko;Li.setAnimationLoop(ri),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(M){Ct=M,z.setAnimationLoop(M),M===null?Li.stop():Li.start()},z.addEventListener("sessionstart",Ta),z.addEventListener("sessionend",ba),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,L,b),d=He.get(M,T.length),d.init(L),T.push(d),ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$e.setFromProjectionMatrix(ce),Z=this.localClippingEnabled,W=K.init(this.clippingPlanes,Z),x=he.get(M,f.length),x.init(),f.push(x),z.enabled===!0&&z.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&ir(Q,L,-1/0,S.sortObjects)}ir(M,L,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(H,oe),Ke=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ke&&Ae.addToRenderList(x,M),this.info.render.frame++,W===!0&&K.beginShadows();const U=d.state.shadowsArray;de.render(U,M,L),W===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=x.opaque,P=x.transmissive;if(d.setupLights(),L.isArrayCamera){const Q=L.cameras;if(P.length>0)for(let se=0,pe=Q.length;se<pe;se++){const ge=Q[se];Ca(N,P,M,ge)}Ke&&Ae.render(M);for(let se=0,pe=Q.length;se<pe;se++){const ge=Q[se];Aa(x,M,ge,ge.viewport)}}else P.length>0&&Ca(N,P,M,L),Ke&&Ae.render(M),Aa(x,M,L);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(S,M,L),Qe.resetDefaultState(),O=-1,ee=null,T.pop(),T.length>0?(d=T[T.length-1],W===!0&&K.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ir(M,L,U,N){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){N&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const se=X.update(M),pe=M.material;pe.visible&&x.push(M,se,pe,U,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){const se=X.update(M),pe=M.material;if(N&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),we.copy(se.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(pe)){const ge=se.groups;for(let ye=0,Te=ge.length;ye<Te;ye++){const xe=ge[ye],je=pe[xe.materialIndex];je&&je.visible&&x.push(M,se,je,U,we.z,xe)}}else pe.visible&&x.push(M,se,pe,U,we.z,null)}}const Q=M.children;for(let se=0,pe=Q.length;se<pe;se++)ir(Q[se],L,U,N)}function Aa(M,L,U,N){const P=M.opaque,Q=M.transmissive,se=M.transparent;d.setupLightsView(U),W===!0&&K.setGlobalState(S.clippingPlanes,U),N&&be.viewport(g.copy(N)),P.length>0&&Qn(P,L,U),Q.length>0&&Qn(Q,L,U),se.length>0&&Qn(se,L,U),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ca(M,L,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new bi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const Q=d.state.transmissionRenderTarget[N.id],se=N.viewport||g;Q.setSize(se.z,se.w);const pe=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(k),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),Ke&&Ae.render(U);const ge=S.toneMapping;S.toneMapping=0;const ye=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),W===!0&&K.setGlobalState(S.clippingPlanes,N),Qn(M,U,N),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xe=0,je=L.length;xe<je;xe++){const it=L[xe],at=it.object,It=it.geometry,Xe=it.material,Ee=it.group;if(Xe.side===2&&at.layers.test(N.layers)){const vt=Xe.side;Xe.side=1,Xe.needsUpdate=!0,Ra(at,U,N,It,Xe,Ee),Xe.side=vt,Xe.needsUpdate=!0,Te=!0}}Te===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}S.setRenderTarget(pe),S.setClearColor(k,G),ye!==void 0&&(N.viewport=ye),S.toneMapping=ge}function Qn(M,L,U){const N=L.isScene===!0?L.overrideMaterial:null;for(let P=0,Q=M.length;P<Q;P++){const se=M[P],pe=se.object,ge=se.geometry,ye=N===null?se.material:N,Te=se.group;pe.layers.test(U.layers)&&Ra(pe,L,U,ge,ye,Te)}}function Ra(M,L,U,N,P,Q){M.onBeforeRender(S,L,U,N,P,Q),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(S,L,U,N,M,Q),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,S.renderBufferDirect(U,L,N,P,M,Q),P.side=0,P.needsUpdate=!0,S.renderBufferDirect(U,L,N,P,M,Q),P.side=2):S.renderBufferDirect(U,L,N,P,M,Q),M.onAfterRender(S,L,U,N,P,Q)}function es(M,L,U){L.isScene!==!0&&(L=Oe);const N=Re.get(M),P=d.state.lights,Q=d.state.shadowsArray,se=P.state.version,pe=_e.getParameters(M,P.state,Q,L,U),ge=_e.getProgramCacheKey(pe);let ye=N.programs;N.environment=M.isMeshStandardMaterial?L.environment:null,N.fog=L.fog,N.envMap=(M.isMeshStandardMaterial?D:v).get(M.envMap||N.environment),N.envMapRotation=N.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,ye===void 0&&(M.addEventListener("dispose",ke),ye=new Map,N.programs=ye);let Te=ye.get(ge);if(Te!==void 0){if(N.currentProgram===Te&&N.lightsStateVersion===se)return Pa(M,pe),Te}else pe.uniforms=_e.getUniforms(M),M.onBeforeCompile(pe,S),Te=_e.acquireProgram(pe,ge),ye.set(ge,Te),N.uniforms=pe.uniforms;const xe=N.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=K.uniform),Pa(M,pe),N.needsLights=Qh(M),N.lightsStateVersion=se,N.needsLights&&(xe.ambientLightColor.value=P.state.ambient,xe.lightProbe.value=P.state.probe,xe.directionalLights.value=P.state.directional,xe.directionalLightShadows.value=P.state.directionalShadow,xe.spotLights.value=P.state.spot,xe.spotLightShadows.value=P.state.spotShadow,xe.rectAreaLights.value=P.state.rectArea,xe.ltc_1.value=P.state.rectAreaLTC1,xe.ltc_2.value=P.state.rectAreaLTC2,xe.pointLights.value=P.state.point,xe.pointLightShadows.value=P.state.pointShadow,xe.hemisphereLights.value=P.state.hemi,xe.directionalShadowMap.value=P.state.directionalShadowMap,xe.directionalShadowMatrix.value=P.state.directionalShadowMatrix,xe.spotShadowMap.value=P.state.spotShadowMap,xe.spotLightMatrix.value=P.state.spotLightMatrix,xe.spotLightMap.value=P.state.spotLightMap,xe.pointShadowMap.value=P.state.pointShadowMap,xe.pointShadowMatrix.value=P.state.pointShadowMatrix),N.currentProgram=Te,N.uniformsList=null,Te}function La(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Pa(M,L){const U=Re.get(M);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function Kh(M,L,U,N,P){L.isScene!==!0&&(L=Oe),y.resetTextureUnits();const Q=L.fog,se=N.isMeshStandardMaterial?L.environment:null,pe=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pi,ge=(N.isMeshStandardMaterial?D:v).get(N.envMap||se),ye=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Te=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),xe=!!U.morphAttributes.position,je=!!U.morphAttributes.normal,it=!!U.morphAttributes.color;let at=0;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=S.toneMapping);const It=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Xe=It!==void 0?It.length:0,Ee=Re.get(N),vt=d.state.lights;if(W===!0&&(Z===!0||M!==ee)){const Bt=M===ee&&N.id===O;K.setState(N,M,Bt)}let qe=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==vt.state.version||Ee.outputColorSpace!==pe||P.isBatchedMesh&&Ee.batching===!1||!P.isBatchedMesh&&Ee.batching===!0||P.isBatchedMesh&&Ee.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ee.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ee.instancing===!1||!P.isInstancedMesh&&Ee.instancing===!0||P.isSkinnedMesh&&Ee.skinning===!1||!P.isSkinnedMesh&&Ee.skinning===!0||P.isInstancedMesh&&Ee.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ee.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ee.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ee.instancingMorph===!1&&P.morphTexture!==null||Ee.envMap!==ge||N.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==K.numPlanes||Ee.numIntersection!==K.numIntersection)||Ee.vertexAlphas!==ye||Ee.vertexTangents!==Te||Ee.morphTargets!==xe||Ee.morphNormals!==je||Ee.morphColors!==it||Ee.toneMapping!==at||Ee.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,Ee.__version=N.version);let Gt=Ee.currentProgram;qe===!0&&(Gt=es(N,L,P));let Gi=!1,Dt=!1,nr=!1;const ot=Gt.getUniforms(),mi=Ee.uniforms;if(be.useProgram(Gt.program)&&(Gi=!0,Dt=!0,nr=!0),N.id!==O&&(O=N.id,Dt=!0),Gi||ee!==M){ze.reverseDepthBuffer?(me.copy(M.projectionMatrix),xd(me),Md(me),ot.setValue(A,"projectionMatrix",me)):ot.setValue(A,"projectionMatrix",M.projectionMatrix),ot.setValue(A,"viewMatrix",M.matrixWorldInverse);const Bt=ot.map.cameraPosition;Bt!==void 0&&Bt.setValue(A,Le.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ot.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,Dt=!0,nr=!0)}if(P.isSkinnedMesh){ot.setOptional(A,P,"bindMatrix"),ot.setOptional(A,P,"bindMatrixInverse");const Bt=P.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ot.setValue(A,"boneTexture",Bt.boneTexture,y))}P.isBatchedMesh&&(ot.setOptional(A,P,"batchingTexture"),ot.setValue(A,"batchingTexture",P._matricesTexture,y),ot.setOptional(A,P,"batchingIdTexture"),ot.setValue(A,"batchingIdTexture",P._indirectTexture,y),ot.setOptional(A,P,"batchingColorTexture"),P._colorsTexture!==null&&ot.setValue(A,"batchingColorTexture",P._colorsTexture,y));const sr=U.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ce.update(P,U,Gt),(Dt||Ee.receiveShadow!==P.receiveShadow)&&(Ee.receiveShadow=P.receiveShadow,ot.setValue(A,"receiveShadow",P.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(mi.envMap.value=ge,mi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&L.environment!==null&&(mi.envMapIntensity.value=L.environmentIntensity),Dt&&(ot.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ee.needsLights&&Jh(mi,nr),Q&&N.fog===!0&&ie.refreshFogUniforms(mi,Q),ie.refreshMaterialUniforms(mi,N,J,B,d.state.transmissionRenderTarget[M.id]),Ts.upload(A,La(Ee),mi,y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ts.upload(A,La(Ee),mi,y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ot.setValue(A,"center",P.center),ot.setValue(A,"modelViewMatrix",P.modelViewMatrix),ot.setValue(A,"normalMatrix",P.normalMatrix),ot.setValue(A,"modelMatrix",P.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Bt=N.uniformsGroups;for(let rr=0,ed=Bt.length;rr<ed;rr++){const Ia=Bt[rr];R.update(Ia,Gt),R.bind(Ia,Gt)}}return Gt}function Jh(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Qh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,L,U){Re.get(M.texture).__webglTexture=L,Re.get(M.depthTexture).__webglTexture=U;const N=Re.get(M);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const U=Re.get(M);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,U=0){b=M,F=L,C=U;let N=!0,P=null,Q=!1,se=!1;if(M){const ge=Re.get(M);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),N=!1;else if(ge.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(ge.__hasExternalTextures)y.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const xe=M.depthTexture;if(ge.__boundDepthTexture!==xe){if(xe!==null&&Re.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(se=!0);const Te=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?P=Te[L][U]:P=Te[L],Q=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?P=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?P=Te[U]:P=Te,g.copy(M.viewport),E.copy(M.scissor),V=M.scissorTest}else g.copy(le).multiplyScalar(J).floor(),E.copy(ve).multiplyScalar(J).floor(),V=Ve;if(be.bindFramebuffer(A.FRAMEBUFFER,P)&&N&&be.drawBuffers(M,P),be.viewport(g),be.scissor(E),be.setScissorTest(V),Q){const ge=Re.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge.__webglTexture,U)}else if(se){const ge=Re.get(M.texture),ye=L||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.__webglTexture,U||0,ye)}O=-1},this.readRenderTargetPixels=function(M,L,U,N,P,Q,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){be.bindFramebuffer(A.FRAMEBUFFER,pe);try{const ge=M.texture,ye=ge.format,Te=ge.type;if(!ze.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-N&&U>=0&&U<=M.height-P&&A.readPixels(L,U,N,P,Pe.convert(ye),Pe.convert(Te),Q)}finally{const ge=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(M,L,U,N,P,Q,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){const ge=M.texture,ye=ge.format,Te=ge.type;if(!ze.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-N&&U>=0&&U<=M.height-P){be.bindFramebuffer(A.FRAMEBUFFER,pe);const xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,xe),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),A.readPixels(L,U,N,P,Pe.convert(ye),Pe.convert(Te),0);const je=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,je);const it=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await _d(A,it,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(xe),A.deleteSync(it),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,U=0){M.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const N=Math.pow(2,-U),P=Math.floor(M.image.width*N),Q=Math.floor(M.image.height*N),se=L!==null?L.x:0,pe=L!==null?L.y:0;y.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,U,0,0,se,pe,P,Q),be.unbindTexture()},this.copyTextureToTexture=function(M,L,U=null,N=null,P=0){M.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1],L=arguments[2],P=arguments[3]||0,U=null);let Q,se,pe,ge,ye,Te;U!==null?(Q=U.max.x-U.min.x,se=U.max.y-U.min.y,pe=U.min.x,ge=U.min.y):(Q=M.image.width,se=M.image.height,pe=0,ge=0),N!==null?(ye=N.x,Te=N.y):(ye=0,Te=0);const xe=Pe.convert(L.format),je=Pe.convert(L.type);y.setTexture2D(L,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const it=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),It=A.getParameter(A.UNPACK_SKIP_PIXELS),Xe=A.getParameter(A.UNPACK_SKIP_ROWS),Ee=A.getParameter(A.UNPACK_SKIP_IMAGES),vt=M.isCompressedTexture?M.mipmaps[P]:M.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,ge),M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,P,ye,Te,Q,se,xe,je,vt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,P,ye,Te,vt.width,vt.height,xe,vt.data):A.texSubImage2D(A.TEXTURE_2D,P,ye,Te,Q,se,xe,je,vt),A.pixelStorei(A.UNPACK_ROW_LENGTH,it),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,It),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ee),P===0&&L.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(M,L,U=null,N=null,P=0){M.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,M=arguments[2],L=arguments[3],P=arguments[4]||0);let Q,se,pe,ge,ye,Te,xe,je,it;const at=M.isCompressedTexture?M.mipmaps[P]:M.image;U!==null?(Q=U.max.x-U.min.x,se=U.max.y-U.min.y,pe=U.max.z-U.min.z,ge=U.min.x,ye=U.min.y,Te=U.min.z):(Q=at.width,se=at.height,pe=at.depth,ge=0,ye=0,Te=0),N!==null?(xe=N.x,je=N.y,it=N.z):(xe=0,je=0,it=0);const It=Pe.convert(L.format),Xe=Pe.convert(L.type);let Ee;if(L.isData3DTexture)y.setTexture3D(L,0),Ee=A.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)y.setTexture2DArray(L,0),Ee=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const vt=A.getParameter(A.UNPACK_ROW_LENGTH),qe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Gt=A.getParameter(A.UNPACK_SKIP_PIXELS),Gi=A.getParameter(A.UNPACK_SKIP_ROWS),Dt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ge),A.pixelStorei(A.UNPACK_SKIP_ROWS,ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te),M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Ee,P,xe,je,it,Q,se,pe,It,Xe,at.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(Ee,P,xe,je,it,Q,se,pe,It,at.data):A.texSubImage3D(Ee,P,xe,je,it,Q,se,pe,It,Xe,at),A.pixelStorei(A.UNPACK_ROW_LENGTH,vt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,qe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Gt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Gi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt),P===0&&L.generateMipmaps&&A.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){F=0,C=0,b=null,be.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===ia?"display-p3":"srgb",i.unpackColorSpace=We.workingColorSpace===Hs?"display-p3":"srgb"}}class Br extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Dg extends Et{constructor(e,i,n,s,r,a,o,l,c){super(e,i,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ug{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const n=this.getUtoTmapping(e);return this.getPoint(n,i)}getPoints(e=5){const i=[];for(let n=0;n<=e;n++)i.push(this.getPoint(n/e));return i}getSpacedPoints(e=5){const i=[];for(let n=0;n<=e;n++)i.push(this.getPointAt(n/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let n,s=this.getPoint(0),r=0;i.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),i.push(r),s=n;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const n=this.getLengths();let s=0;const r=n.length;let a;i?a=i:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(e,i){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=i||(a.isVector2?new Ue:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,i){const n=this.getUtoTmapping(e);return this.getTangent(n,i)}computeFrenetFrames(e,i){const n=new I,s=[],r=[],a=[],o=new I,l=new st;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(i===!0){let m=Math.acos(_t(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function yo(t,e,i,n,s){const r=(n-e)*.5,a=(s-i)*.5,o=t*t,l=t*o;return(2*i-2*n+r+a)*l+(-3*i+3*n-2*r-a)*o+r*t+i}class Ng extends Ug{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Ue){const n=i,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yo(o,l.x,c.x,h.x,u.x),yo(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let i=0,n=e.points.length;i<n;i++){const s=e.points[i];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,n=this.points.length;i<n;i++){const s=this.points[i];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,n=e.points.length;i<n;i++){const s=e.points[i];this.points.push(new Ue().fromArray(s))}return this}}class $n extends Ci{constructor(e=1,i=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,p=new I,m=[],_=[],x=[],d=[];for(let f=0;f<=n;f++){const T=[],S=f/n;let w=0;f===0&&a===0?w=.5/i:f===n&&l===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const C=F/i;u.x=-e*Math.cos(s+C*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),d.push(C+w,1-S),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<i;T++){const S=h[f][T+1],w=h[f][T],F=h[f+1][T],C=h[f+1][T+1];(f!==0||a>0)&&m.push(S,w,C),(f!==n-1||l<Math.PI)&&m.push(w,F,C)}this.setIndex(m),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const kr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Fg{constructor(e,i,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Og=new Fg;let la=class{constructor(e){this.manager=e!==void 0?e:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const n=this;return new Promise(function(s,r){n.load(e,s,i,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";const wo=new st;class Bg{constructor(e,i,n=0,s=1/0){this.ray=new Wo(e,i),this.near=n,this.far=s,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return wo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wo),this}intersectObject(e,i=!0,n=[]){return zr(e,this,n,i),n.sort(To),n}intersectObjects(e,i=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zr(e[s],this,n,i);return n.sort(To),n}}function To(t,e){return t.distance-e.distance}function zr(t,e,i,n){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(s=!1),s===!0&&n===!0){const r=t.children;for(let a=0,o=r.length;a<o;a++)zr(r[a],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/*!
 * Photo Sphere Viewer 5.11.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var kg=Object.defineProperty,ca=(t,e)=>{for(var i in e)kg(t,i,{get:e[i],enumerable:!0})},un={};ca(un,{ACTIONS:()=>cl,ANIMATION_MIN_DURATION:()=>Hr,CAPTURE_EVENTS_CLASS:()=>jn,CTRLZOOM_TIMEOUT:()=>ll,DBLCLICK_DELAY:()=>rl,DEFAULT_TRANSITION:()=>nl,EASINGS:()=>bs,ICONS:()=>jt,IDS:()=>xt,KEY_CODES:()=>mt,LONGTOUCH_DELAY:()=>al,MOVE_THRESHOLD:()=>sl,SPHERE_RADIUS:()=>Hi,TWOFINGERSOVERLAY_DELAY:()=>ol,VIEWER_DATA:()=>Ai});var zg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,Hg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Vg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Gg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Wg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Xg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,Yg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,$g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,nl=1500,Hr=500,sl=4,rl=300,al=500,ol=100,ll=2e3,Hi=10,Ai="photoSphereViewer",jn="psv--capture-event",cl=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(cl||{}),xt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},mt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},jt={arrow:zg,close:Hg,download:Vg,fullscreenIn:Gg,fullscreenOut:Wg,info:Xg,menu:qg,zoomIn:Yg,zoomOut:$g},bs={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},fe={};ca(fe,{Animation:()=>Os,Dynamic:()=>bn,MultiDynamic:()=>Pl,PressHandler:()=>$s,Slider:()=>Dl,SliderDirection:()=>Il,addClasses:()=>ha,angle:()=>dl,applyEulerInverse:()=>qr,checkClosedShadowDom:()=>Rl,checkStylesheet:()=>Cl,checkVersion:()=>ga,cleanCssPosition:()=>bl,clone:()=>Xs,createTexture:()=>Xr,cssPositionIsOrdered:()=>ma,dasherize:()=>Qg,deepEqual:()=>yl,deepmerge:()=>El,distance:()=>hl,exitFullscreen:()=>Ml,firstNonNull:()=>Kt,getAbortError:()=>Gr,getAngle:()=>fl,getClosest:()=>ml,getConfigParser:()=>Ys,getElement:()=>pl,getEventTarget:()=>Ds,getMatchingTarget:()=>gl,getPosition:()=>vl,getShortestArc:()=>ul,getStyleProperty:()=>ti,getTouchData:()=>Vr,getXMPValue:()=>Ft,greatArcDistance:()=>Zg,hasParent:()=>Jg,invertResolvableBoolean:()=>qs,isAbortError:()=>Tl,isEmpty:()=>Sl,isExtendedPosition:()=>pa,isFullscreenEnabled:()=>_l,isNil:()=>gt,isPlainObject:()=>ua,logWarn:()=>et,mergePanoData:()=>Ll,parseAngle:()=>Qt,parsePoint:()=>ev,parseSpeed:()=>Al,removeClasses:()=>Kg,requestFullscreen:()=>xl,resolveBoolean:()=>fa,speedToDuration:()=>Wr,sum:()=>jg,throttle:()=>da,toggleClass:()=>Ws,wrap:()=>Ln});function Ln(t,e){let i=t%e;return i<0&&(i+=e),i}function jg(t){return t.reduce((e,i)=>e+i,0)}function hl(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function dl(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function ul(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function fl(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function Zg([t,e],[i,n]){t-i>Math.PI?t-=2*Math.PI:t-i<-Math.PI&&(t+=2*Math.PI);const s=(i-t)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function pl(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Ws(t,e,i){i===void 0?t.classList.toggle(e):i?t.classList.add(e):i||t.classList.remove(e)}function ha(t,e){t.classList.add(...e.split(" ").filter(i=>!!i))}function Kg(t,e){t.classList.remove(...e.split(" ").filter(i=>!!i))}function Jg(t,e){let i=t;do{if(i===e)return!0;i=i.parentElement}while(i);return!1}function ml(t,e){if(!(t!=null&&t.matches))return null;let i=t;do{if(i.matches(e))return i;i=i.parentElement}while(i);return null}function Ds(t){return(t==null?void 0:t.composedPath()[0])||null}function gl(t,e){return t?t.composedPath().find(i=>!(i instanceof HTMLElement)&&!(i instanceof SVGElement)?!1:i.matches(e)):null}function vl(t){let e=0,i=0,n=t;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,i+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,i-=window.scrollY,{x:e,y:i}}function ti(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Vr(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},i={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:hl(e,i),angle:dl(e,i),center:{x:(e.x+i.x)/2,y:(e.y+i.y)/2}}}var Us;function _l(t,e=!1){return e?t===Us:document.fullscreenElement===t}function xl(t,e=!1){e?(Us=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function Ml(t=!1){t?(Us.classList.remove("psv-fullscreen-emulation"),Us=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Qg(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,i)=>(i>0?"-":"")+e.toLowerCase())}function da(t,e){let i=!1;return function(...n){i||(i=!0,setTimeout(()=>{t.apply(this,n),i=!1},e))}}function ua(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function El(t,e){const i=e;return function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{typeof r[a]!="object"||!r[a]||!ua(r[a])?s[a]=r[a]:r[a]!==i&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a]))})):s=r,s}(t,e)}function Xs(t){return El(null,t)}function Sl(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function gt(t){return t==null}function Kt(...t){for(const e of t)if(!gt(e))return e;return null}function yl(t,e){if(t===e)return!0;if(bo(t)&&bo(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i of Object.keys(t))if(!yl(t[i],e[i]))return!1;return!0}else return!1}function bo(t){return typeof t=="object"&&t!==null}var Se=class wl extends Error{constructor(e,i){var n;super(i&&i instanceof Error?`${e}: ${i.message}`:e),this.name="PSVError",(n=Error.captureStackTrace)==null||n.call(Error,this,wl)}};function fa(t,e){ua(t)?(e(t.initial,!0),t.promise.then(i=>e(i,!1))):e(t,!0)}function qs(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Gr(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Tl(t){return(t==null?void 0:t.name)==="AbortError"}function et(t){console.warn(`PhotoSphereViewer: ${t}`)}function pa(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,i])=>t[e]!==void 0&&t[i]!==void 0)}function Ft(t,e,i=!0){let n=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=t.match("GPano:"+e+'="(.*?)"'),n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var Ao={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ns=["left","center","right"],Fs=["top","center","bottom"],Co=[...Ns,...Fs],zt="center";function ev(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Ao[e[0]]?e=[e[0],zt]:e=[e[0],e[0]]);const i=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Ao[s]||s),i||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function bl(t,{allowCenter:e,cssOrder:i}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===zt?t=[zt,zt]:Ns.indexOf(t[0])!==-1?t=[zt,t[0]]:Fs.indexOf(t[0])!==-1&&(t=[t[0],zt])),t.length!==2||Co.indexOf(t[0])===-1||Co.indexOf(t[1])===-1?(et(`Unparsable position ${t}`),null):!e&&t[0]===zt&&t[1]===zt?(et("Invalid position center center"),null):(i&&!ma(t)&&(t=[t[1],t[0]]),t[1]===zt&&Ns.indexOf(t[0])!==-1&&(t=[zt,t[0]]),t[0]===zt&&Fs.indexOf(t[1])!==-1&&(t=[t[1],zt]),t)):null}function ma(t){return Fs.indexOf(t[0])!==-1&&Ns.indexOf(t[1])!==-1}function Al(t){let e;if(typeof t=="string"){const i=t.toString().trim();let n=parseFloat(i.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=i.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Je.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new Se(`Unknown speed unit "${s}"`)}}else e=t;return e}function Wr(t,e){if(typeof t!="number"){const i=Al(t);return e/Math.abs(i)*1e3}else return Math.abs(t)}function Qt(t,e=!1,i=e){let n;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Se(`Unknown angle "${t}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=Je.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new Se(`Unknown angle unit "${a}"`)}else n=r}else if(typeof t=="number"&&!isNaN(t))n=t;else throw new Se(`Unknown angle "${t}"`);return n=Ln(e?n+Math.PI:n,Math.PI*2),e?Je.clamp(n-Math.PI,-Math.PI/(i?2:1),Math.PI/(i?2:1)):n}function Xr(t,e=!1){const i=new Et(t);return i.needsUpdate=!0,i.minFilter=e?1008:1006,i.generateMipmaps=e,i.anisotropy=e?2:1,i}var Ro=new Vi;function qr(t,e){Ro.setFromEuler(e).invert(),t.applyQuaternion(Ro)}function Ys(t,e){const i=function(n){const s=Xs({...t,...n}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:t[a]});else if(!(a in t)){et(`Unknown option ${a}`);continue}r[a]=o}return r};return i.defaults=t,i.parsers=e||{},i}function Cl(t,e){ti(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function ga(t,e,i){e&&e!==i&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${i}`)}function Rl(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Ll(t,e,i,n){if(!i&&!n){const r=Math.max(t,e*2),a=Math.round(r/2),o=Math.round((r-t)/2),l=Math.round((a-e)/2);i={fullWidth:r,fullHeight:a,croppedWidth:t,croppedHeight:e,croppedX:o,croppedY:l}}const s={isEquirectangular:!0,fullWidth:Kt(i==null?void 0:i.fullWidth,n==null?void 0:n.fullWidth),fullHeight:Kt(i==null?void 0:i.fullHeight,n==null?void 0:n.fullHeight),croppedWidth:Kt(i==null?void 0:i.croppedWidth,n==null?void 0:n.croppedWidth,t),croppedHeight:Kt(i==null?void 0:i.croppedHeight,n==null?void 0:n.croppedHeight,e),croppedX:Kt(i==null?void 0:i.croppedX,n==null?void 0:n.croppedX,0),croppedY:Kt(i==null?void 0:i.croppedY,n==null?void 0:n.croppedY,0),poseHeading:Kt(i==null?void 0:i.poseHeading,n==null?void 0:n.poseHeading,0),posePitch:Kt(i==null?void 0:i.posePitch,n==null?void 0:n.posePitch,0),poseRoll:Kt(i==null?void 0:i.poseRoll,n==null?void 0:n.poseRoll,0),initialHeading:n==null?void 0:n.initialHeading,initialPitch:n==null?void 0:n.initialPitch,initialFov:n==null?void 0:n.initialFov};return!s.fullWidth&&s.fullHeight?s.fullWidth=s.fullHeight*2:(!s.fullWidth||!s.fullHeight)&&(s.fullWidth=s.fullWidth??t,s.fullHeight=s.fullHeight??e),(s.croppedWidth!==t||s.croppedHeight!==e)&&et(`Invalid panoData, croppedWidth/croppedHeight is not coherent with the loaded image.
        panoData: ${s.croppedWidth}x${s.croppedHeight}, image: ${t}x${e}`),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(et("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(et("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(et("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(et("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(et("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Os=class{constructor(t){this.easing=bs.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:bs[t.easing]||bs.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,i={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);i[n]=r}this.options.onTick(i,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(i[n]=s.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},bn=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Se("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?Ln(t,this.max):Je.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?Ln(t,this.max):Je.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let i=null;return this.current>this.target&&this.currentSpeed?i=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(i=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),i!==null&&(i=this.wrap?Ln(i,this.max):Je.clamp(i,this.min,this.max),i!==this.current)?(this.current=i,this.fn&&this.fn(this.current),!0):!1}},Pl=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,i])=>(t[e]=i.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].goto(n,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((i,n)=>(i[n]=t[n]+this.dynamics[n].current,i),{}));else for(const[i,n]of Object.entries(t))this.dynamics[i].step(n,e)}roll(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].roll(n,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[i,n]of Object.entries(t))e=this.dynamics[i].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const i of Object.values(this.dynamics))e=i.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},$s=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Il=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Il||{}),Dl=class{constructor(t,e,i){this.container=t,this.direction=e,this.listener=i,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,i){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Je.clamp((n.bottom-e)/n.height,0,1):s=Je.clamp((t-n.left)/n.width,0,1),this.listener({value:s,click:!i,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},Me={};ca(Me,{BeforeAnimateEvent:()=>_a,BeforeRenderEvent:()=>Pn,BeforeRotateEvent:()=>Hl,ClickEvent:()=>Wl,ConfigChangedEvent:()=>Lt,DoubleClickEvent:()=>jl,FullscreenEvent:()=>In,HideNotificationEvent:()=>Dn,HideOverlayEvent:()=>ic,HidePanelEvent:()=>yi,HideTooltipEvent:()=>oc,KeypressEvent:()=>wi,LoadProgressEvent:()=>uc,ObjectEnterEvent:()=>Kc,ObjectEvent:()=>js,ObjectHoverEvent:()=>ih,ObjectLeaveEvent:()=>$r,PanoramaErrorEvent:()=>Mc,PanoramaLoadEvent:()=>mc,PanoramaLoadedEvent:()=>Yr,PositionUpdatedEvent:()=>Un,ReadyEvent:()=>Fn,RenderEvent:()=>Ic,RollUpdatedEvent:()=>Nn,ShowNotificationEvent:()=>On,ShowOverlayEvent:()=>Oc,ShowPanelEvent:()=>Ti,ShowTooltipEvent:()=>Vc,SizeUpdatedEvent:()=>Bn,StopAllEvent:()=>kn,TransitionDoneEvent:()=>yc,ViewerEvent:()=>Ye,ZoomUpdatedEvent:()=>di});var va=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Ul=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,i){super.addEventListener(t,e,i)}removeEventListener(t,e,i){super.removeEventListener(t,e,i)}},Ye=class extends va{},Nl=class Fl extends Ye{constructor(e,i){super(Fl.type,!0),this.position=e,this.zoomLevel=i}};Nl.type="before-animate";var _a=Nl,Ol=class Bl extends Ye{constructor(e,i){super(Bl.type),this.timestamp=e,this.elapsed=i}};Ol.type="before-render";var Pn=Ol,kl=class zl extends Ye{constructor(e){super(zl.type,!0),this.position=e}};kl.type="before-rotate";var Hl=kl,Vl=class Gl extends Ye{constructor(e){super(Gl.type),this.data=e}};Vl.type="click";var Wl=Vl,Xl=class ql extends Ye{constructor(e){super(ql.type),this.options=e}containsOptions(...e){return e.some(i=>this.options.includes(i))}};Xl.type="config-changed";var Lt=Xl,Yl=class $l extends Ye{constructor(e){super($l.type),this.data=e}};Yl.type="dblclick";var jl=Yl,Zl=class Kl extends Ye{constructor(e){super(Kl.type),this.fullscreenEnabled=e}};Zl.type="fullscreen";var In=Zl,Jl=class Ql extends Ye{constructor(e){super(Ql.type),this.notificationId=e}};Jl.type="hide-notification";var Dn=Jl,ec=class tc extends Ye{constructor(e){super(tc.type),this.overlayId=e}};ec.type="hide-overlay";var ic=ec,nc=class sc extends Ye{constructor(e){super(sc.type),this.panelId=e}};nc.type="hide-panel";var yi=nc,rc=class ac extends Ye{constructor(e){super(ac.type),this.tooltipData=e}};rc.type="hide-tooltip";var oc=rc,lc=class cc extends Ye{constructor(e,i){super(cc.type,!0),this.key=e,this.originalEvent=i}};lc.type="key-press";var wi=lc,hc=class dc extends Ye{constructor(e){super(dc.type),this.progress=e}};hc.type="load-progress";var uc=hc,fc=class pc extends Ye{constructor(e){super(pc.type),this.panorama=e}};fc.type="panorama-load";var mc=fc,gc=class vc extends Ye{constructor(e){super(vc.type),this.data=e}};gc.type="panorama-loaded";var Yr=gc,_c=class xc extends Ye{constructor(e,i){super(xc.type),this.panorama=e,this.error=i}};_c.type="panorama-error";var Mc=_c,Ec=class Sc extends Ye{constructor(e){super(Sc.type),this.completed=e}};Ec.type="transition-done";var yc=Ec,wc=class Tc extends Ye{constructor(e){super(Tc.type),this.position=e}};wc.type="position-updated";var Un=wc,bc=class Ac extends Ye{constructor(e){super(Ac.type),this.roll=e}};bc.type="roll-updated";var Nn=bc,Cc=class Rc extends Ye{constructor(){super(Rc.type)}};Cc.type="ready";var Fn=Cc,Lc=class Pc extends Ye{constructor(){super(Pc.type)}};Lc.type="render";var Ic=Lc,Dc=class Uc extends Ye{constructor(e){super(Uc.type),this.notificationId=e}};Dc.type="show-notification";var On=Dc,Nc=class Fc extends Ye{constructor(e){super(Fc.type),this.overlayId=e}};Nc.type="show-overlay";var Oc=Nc,Bc=class kc extends Ye{constructor(e){super(kc.type),this.panelId=e}};Bc.type="show-panel";var Ti=Bc,zc=class Hc extends Ye{constructor(e,i){super(Hc.type),this.tooltip=e,this.tooltipData=i}};zc.type="show-tooltip";var Vc=zc,Gc=class Wc extends Ye{constructor(e){super(Wc.type),this.size=e}};Gc.type="size-updated";var Bn=Gc,Xc=class qc extends Ye{constructor(){super(qc.type)}};Xc.type="stop-all";var kn=Xc,Yc=class $c extends Ye{constructor(e){super($c.type),this.zoomLevel=e}};Yc.type="zoom-updated";var di=Yc,js=class extends Ye{constructor(t,e,i,n,s){super(t),this.originalEvent=e,this.object=i,this.viewerPoint=n,this.userDataKey=s}},jc=class Zc extends js{constructor(e,i,n,s){super(Zc.type,e,i,n,s)}};jc.type="enter-object";var Kc=jc,Jc=class Qc extends js{constructor(e,i,n,s){super(Qc.type,e,i,n,s)}};Jc.type="leave-object";var $r=Jc,eh=class th extends js{constructor(e,i,n,s){super(th.type,e,i,n,s)}};eh.type="hover-object";var ih=eh,xa=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Se("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Se("Current adapter does not support texture coordinates.")}};xa.supportsDownload=!1;function Lo(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof xa)return ga(e.id,e.VERSION,"5.11.1"),e}return null}var Sn=`${Ai}_touchSupport`,Mt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=nv(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=tv();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=iv(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Mt.isWebGLSupported)throw new Se("WebGL 2 is not supported.");if(Mt.maxTextureWidth===0)throw new Se("Unable to detect system capabilities")}};function tv(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function iv(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Sn in localStorage&&(t=localStorage[Sn]==="true");const e=new Promise(i=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[Sn]=!1,i(!1)},r=()=>{n(),localStorage[Sn]=!0,i(!0)},a=()=>{n(),localStorage[Sn]=t,i(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:t,promise:e}}function nv(t){let e=t,i=!1;for(;e>1024&&!i;){const n=document.createElement("canvas"),s=n.getContext("2d");n.width=e,n.height=e/2,s.fillStyle="white",s.fillRect(0,0,1,1);try{s.getImageData(0,0,1,1).data[0]>0&&(i=!0)}catch{}n.width=0,n.height=0,i||(e/=2)}if(i)return e;throw new Se("Unable to detect system capabilities")}var sv=Ys({backgroundColor:null,interpolateBackground:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Je.isPowerOfTwo(t))throw new Se("EquirectangularAdapter resolution must be power of two.");return t},backgroundColor:t=>(t&&et("EquirectangularAdapter.backgroundColor is deprecated, use 'canvasBackground' main option instead."),t),interpolateBackground:t=>(t&&et("EquirectangularAdapter.interpolateBackground is not supported anymore."),!1)}),Zn=class extends xa{constructor(t,e){super(t),this.config=sv(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.config.backgroundColor&&(t.config.canvasBackground=e.backgroundColor)}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(gt(t.textureX)||gt(t.textureY))throw new Se("Texture position is missing 'textureX' or 'textureY'");const i=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,n=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-n}}sphericalCoordsToTextureCoords(t,e){const i=t.yaw/Math.PI/2*e.fullWidth,n=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?i+e.fullWidth/2:i-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-n)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,i,n=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Se("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:i}:s={data:i,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?h=>this.viewer.loader.setProgress(h):null,s.path),a=n?await this.loadXMP(r):null,o=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(o,a));const l=Ll(o.width,o.height,s.data,a),c=this.createEquirectangularTexture(o);return{panorama:t,texture:c,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),i=e.indexOf("<x:xmpmeta");if(i===-1)return null;const n=e.indexOf("</x:xmpmeta>",i);if(n===-1)return null;const s=e.substring(i,n);return s.includes("GPano:")?{fullWidth:Ft(s,"FullPanoWidthPixels"),fullHeight:Ft(s,"FullPanoHeightPixels"),croppedWidth:Ft(s,"CroppedAreaImageWidthPixels"),croppedHeight:Ft(s,"CroppedAreaImageHeightPixels"),croppedX:Ft(s,"CroppedAreaLeftPixels"),croppedY:Ft(s,"CroppedAreaTopPixels"),poseHeading:Ft(s,"PoseHeadingDegrees",!1),posePitch:Ft(s,"PosePitchDegrees",!1),poseRoll:Ft(s,"PoseRollDegrees",!1),initialHeading:Ft(s,"InitialViewHeadingDegrees",!1),initialPitch:Ft(s,"InitialViewPitchDegrees",!1),initialFov:Ft(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,i)=>{const n=new FileReader;n.onload=()=>e(n.result),n.onerror=i,n.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>Mt.maxTextureWidth){const e=Math.min(1,Mt.maxCanvasWidth/t.width),i=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),n=i.getContext("2d");return this.config.blur&&(n.filter=`blur(${i.width/2048}px)`),n.drawImage(t,0,0,i.width,i.height),Xr(i)}return Xr(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,i=t.croppedWidth/t.fullWidth*2*Math.PI,n=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new $n(Hi,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,i,n,s).scale(-1,1,1),a=new Xn({depthTest:!1,depthWrite:!1});return new Ot(r,a)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};Zn.id="equirectangular";Zn.VERSION="5.11.1";Zn.supportsDownload=!0;var nh=class extends Zn{constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1})}async loadTexture(t,e){const i=await super.loadTexture(t,e,null,!1);return i.panoData=null,i}createMesh(){const t=new $n(Hi,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),i=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const a=s*3+r,o=i.getX(a),l=i.getY(a),c=i.getZ(a),h=.947;if(s<e.count/6){const u=o===0&&c===0?1:Math.acos(l)/Math.sqrt(o*o+c*c)*(2/Math.PI);e.setXY(a,o*(h/4)*u+1/4,c*(h/2)*u+1/2)}else{const u=o===0&&c===0?1:Math.acos(-l)/Math.sqrt(o*o+c*c)*(2/Math.PI);e.setXY(a,-o*(h/4)*u+3/4,c*(h/2)*u+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const n=new Xn({depthTest:!1,depthWrite:!1});return new Ot(t,n)}};nh.id="dual-fisheye";nh.VERSION="5.11.1";var Ri=class sh{constructor(e,i){this.parent=e,this.children=[],this.container=document.createElement("div"),this.state={visible:!0},this.viewer=e instanceof sh?e.viewer:e,this.container.className=i.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(i=>i.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},rv=Ys({id:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),wt=class extends Ri{constructor(t,e){super(t,{className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=rv(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",i=>{this.state.enabled&&this.onClick(),i.stopPropagation()}),this.container.addEventListener("keydown",i=>{i.key===mt.Enter&&this.state.enabled&&(this.onClick(),i.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){fa(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Ws(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,ha(this.container.querySelector("svg"),"psv-button-svg")}},av=class extends wt{constructor(t,e){var i,n;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(n=(i=e.content).attachViewer)==null||n.call(i,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Gn=class extends wt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.info}),this.mode=0,this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(On.type,this),this.viewer.addEventListener(yi.type,this),this.viewer.addEventListener(Ti.type,this),this.viewer.addEventListener(Lt.type,this)}destroy(){this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(On.type,this),this.viewer.removeEventListener(yi.type,this),this.viewer.removeEventListener(Ti.type,this),this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){if(t instanceof Lt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof Dn?e=this.mode===1:t instanceof On?e=this.mode===1&&t.notificationId!==xt.DESCRIPTION:t instanceof yi?e=this.mode===2:t instanceof Ti&&(e=this.mode===2&&t.panelId!==xt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),i=e&&!e.isVisible(),n=!!this.viewer.config.description;i||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(xt.DESCRIPTION);break;case 2:this.viewer.panel.hide(xt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:xt.DESCRIPTION,content:(this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:"")+this.viewer.config.description})):(this.mode=1,this.viewer.notification.show({id:xt.DESCRIPTION,content:this.viewer.config.caption}))}};Gn.id="description";var rh=class extends wt{constructor(t){super(t,{className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:jt.download}),this.viewer.addEventListener(Lt.type,this)}destroy(){this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){t instanceof Lt&&t.containsOptions("downloadUrl")&&this.checkSupported()}onClick(){const t=document.createElement("a");t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop(),t.target="_blank",this.viewer.container.appendChild(t),t.click(),setTimeout(()=>{this.viewer.container.removeChild(t)},100)}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}};rh.id="download";var ah=class extends wt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.fullscreenIn,iconActive:jt.fullscreenOut}),this.viewer.addEventListener(In.type,this)}destroy(){this.viewer.removeEventListener(In.type,this),super.destroy()}handleEvent(t){t instanceof In&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};ah.id="fullscreen";var ov="psvButton",lv=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${jt.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(i=>`
    <li data-psv-button="${i.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${i.content}</span>
      <span class="psv-panel-menu-item-label">${i.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,As=class extends wt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.menu}),this.viewer.addEventListener(Ti.type,this),this.viewer.addEventListener(yi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Ti.type,this),this.viewer.removeEventListener(yi.type,this),super.destroy()}handleEvent(t){t instanceof Ti?this.toggleActive(t.panelId===xt.MENU):t instanceof yi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:xt.MENU,content:lv(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?ml(t,".psv-panel-menu-item"):void 0,i=e?e.dataset[ov]:void 0;i&&(this.viewer.navbar.getButton(i).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(xt.MENU)}};As.id="menu";function cv(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return jt.arrow.replace("rotate(0",`rotate(${e}`)}var Kn=class extends wt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:cv(e)}),this.direction=e,this.handler=new $s,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===mt.Enter&&this.__onMouseDown();break;case"keyup":t.key===mt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return qs(Mt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Kn.groupId="move";var oh=class extends Kn{constructor(t){super(t,1)}};oh.id="moveDown";var lh=class extends Kn{constructor(t){super(t,2)}};lh.id="moveLeft";var ch=class extends Kn{constructor(t){super(t,3)}};ch.id="moveRight";var hh=class extends Kn{constructor(t){super(t,0)}};hh.id="moveUp";var Ma=class extends wt{constructor(t,e,i){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=i,this.handler=new $s,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===mt.Enter&&this.__onMouseDown();break;case"keyup":t.key===mt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return qs(Mt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Ma.groupId="zoom";var dh=class extends Ma{constructor(t){super(t,jt.zoomIn,0)}};dh.id="zoomIn";var uh=class extends Ma{constructor(t){super(t,jt.zoomOut,1)}};uh.id="zoomOut";var Ea=class extends wt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Dl(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(ti(this.container,"max-width"),10),this.viewer.addEventListener(di.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Fn.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(di.type,this),this.viewer.removeEventListener(Fn.type,this),super.destroy()}handleEvent(t){t instanceof di?this.__moveZoomValue(t.zoomLevel):t instanceof Fn&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return qs(Mt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Ea.id="zoomRange";Ea.groupId="zoom";var fh=class extends Ul{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Zs=class extends fh{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},i=this.constructor,n=i.configParser,s=i.readonlyOptions,r=i.id;for(let[a,o]of Object.entries(t)){if(!(a in n.defaults)){et(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){et(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:e,defValue:n.defaults[a]})),this.config[a]=o}}};Zs.readonlyOptions=[];function jr(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof fh)return ga(e.id,e.VERSION,"5.11.1"),e}return null}var fi={panorama:null,container:null,adapter:[Zn,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",rendererParameters:{alpha:!0,antialias:!0},withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[mt.ArrowUp]:"ROTATE_UP",[mt.ArrowDown]:"ROTATE_DOWN",[mt.ArrowRight]:"ROTATE_RIGHT",[mt.ArrowLeft]:"ROTATE_LEFT",[mt.PageUp]:"ZOOM_IN",[mt.PageDown]:"ZOOM_OUT",[mt.Plus]:"ZOOM_IN",[mt.Minus]:"ZOOM_OUT"}},Po={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Zr={container:t=>{if(!t)throw new Se("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Lo(t[0]),t[1]]:t=[Lo(t),null]:t=e,!t[0])throw new Se("An undefined value was given for adapter.");if(!t[0].id)throw new Se("Adapter has no id.");return t[0].id==="little-planet"&&(et("LittlePlanetAdapter support has been removed, use `{ fisheye: 2, maxFov: 130 }` to achieve similar effect."),t=e),t},defaultYaw:t=>Qt(t),defaultPitch:t=>Qt(t,!0),defaultZoomLvl:t=>Je.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(et("maxFov cannot be lower than minFov"),t=e.maxFov),Je.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Je.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...fi.lang,...t}),keyboard:t=>t?typeof t=="object"?(et("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):t==="always"?"always":"fullscreen":!1,keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,i)=>{if(Array.isArray(e)?e=[jr(e[0]),e[1]]:e=[jr(e),null],!e[0])throw new Se(`An undefined value was given for plugin ${i}.`);if(!e[0].id)throw new Se(`Plugin ${i} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Xs(fi.navbar):typeof t=="string"?t.split(/[ ,]/):t},hv=Ys(fi,Zr),ln=class extends wt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Gn.id,!1))==null||t.autoSize(!0)}};ln.id="caption";var Kr={},Bs={};function Ks(t,e){if(!t.id)throw new Se("Button id is required");if(Kr[t.id]=t,t.groupId&&(Bs[t.groupId]=Bs[t.groupId]||[]).push(t),e){const i=fi.navbar;switch(e){case"start":i.unshift(t.id);break;case"end":i.push(t.id);break;default:{const[n,s]=e.split(":"),r=i.indexOf(n);if(!n||!s||r===-1)throw new Se(`Invalid defaultPosition ${e}`);i.splice(r+(s==="right"?1:0),0,t.id)}}}}[uh,Ea,dh,Gn,ln,rh,ah,lh,ch,hh,oh].forEach(t=>Ks(t));var dv=class extends Ri{constructor(t){super(t,{className:`psv-navbar ${jn}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(ln.id)!==-1&&t.indexOf(Gn.id)===-1&&t.splice(t.indexOf(ln.id),0,Gn.id),t.forEach(e=>{typeof e=="object"?new av(this,e):Kr[e]?new Kr[e](this):Bs[e]?Bs[e].forEach(i=>{new i(this)}):et(`Unknown button ${e}`)}),new As(this),this.children.forEach(e=>{e instanceof wt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof ln?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const i=this.children.find(n=>n instanceof wt&&n.id===t);return!i&&e&&et(`button "${t}" not found in the navbar`),i}autoSize(){var n;this.children.forEach(s=>{s instanceof wt&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const i=[];this.children.forEach(s=>{s.isVisible()&&s instanceof wt&&(e+=s.width,s.collapsable&&i.push(s))}),e!==0&&(t<e&&i.length>0?(i.forEach(s=>s.collapse()),this.collapsed=i,this.getButton(As.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(As.id).hide(!1)),(n=this.getButton(ln.id,!1))==null||n.autoSize())}};kr.enabled=!1;var rn={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){kr.enabled&&(et("ThreeJS cache should be disabled"),kr.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,i){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=i,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],i)=>{i>0&&(Date.now()-e>=this.ttl*1e3||i>=this.maxItems)&&delete this.items[t]})}},uv=class extends Ri{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=ti(this.loader,"color"),this.color=ti(this.canvas,"color"),this.border=parseInt(ti(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(ti(this.loader,"--psv-loader-tickness"),10),this.viewer.addEventListener(Lt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){t instanceof Lt&&t.containsOptions("loadingImg","loadingTxt")&&this.__updateContent()}setProgress(t){const e=Math.min(t,99.999)/100*Math.PI*2,i=this.size/2,n=i,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+i,o=-Math.cos(e)*r+i,l=t>50?"1":"0";this.canvas.innerHTML=`
            <circle cx="${i}" cy="${i}" r="${i}" fill="${this.color}"/>
            <path d="M ${n} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}" 
                  fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.dispatchEvent(new uc(Math.round(t)))}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const i=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=i+"px",e.style.maxHeight=i+"px",this.loader.appendChild(e)}}},fv=class extends Ri{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Se("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new On(t.id)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Dn(e))}}},pv=class extends Ri{constructor(t){super(t,{className:`psv-overlay ${jn}`}),this.state={visible:!1,contentId:null,dissmisable:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(wi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(wi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dissmisable&&(this.hide(),t.stopPropagation()):t instanceof wi&&this.isVisible()&&this.state.dissmisable&&t.key===mt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Se("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dissmisable=t.dissmisable!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Oc(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new ic(e))}}},mv=200,Ur="psv-panel-content--no-interaction",gv=class extends Ri{constructor(t){super(t,{className:`psv-panel ${jn}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const i=document.createElement("div");i.className="psv-panel-close-button",i.innerHTML=jt.close,i.title=t.config.lang.close,this.container.appendChild(i),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),this.container.addEventListener("wheel",n=>n.stopPropagation()),i.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(wi.type,this)}destroy(){this.viewer.removeEventListener(wi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case wi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Se("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Ws(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=i=>{t.clickHandler(Ds(i))},this.state.keyHandler=i=>{i.key===mt.Enter&&t.clickHandler(Ds(i))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var i;(i=this.content.querySelector("a,button,[tabindex]"))==null||i.focus()},300)),this.viewer.dispatchEvent(new Ti(t.id))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.state.clickHandler=null),this.viewer.dispatchEvent(new yi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Ur))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Ur)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===mt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Ur)}__resize(t,e){const i=t,n=e,s=Math.max(mv,this.container.offsetWidth-(i-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=i,this.state.mouseY=n}},vv=class extends Ri{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",i=>i.stopPropagation()),this.container.addEventListener("mousedown",i=>i.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Se("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Se("Initialized tooltip cannot be re-initialized");t.className&&ha(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Vc(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.state.arrow=parseInt(ti(this.arrow,"border-top-width"),10),this.state.border=parseInt(ti(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var o;if(this.state.state!==1&&this.state.state!==3)throw new Se("Uninitialized tooltip cannot be moved");t.box=t.box??((o=this.state.config)==null?void 0:o.box)??{width:0,height:0},this.state.config=t;const e=this.container,i=this.arrow,n={posClass:bl(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,t);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const l=ma(n.posClass);s&&(n.posClass[l?0:1]=s),r&&(n.posClass[l?1:0]=r),this.__computeTooltipPosition(n,t)}e.style.top=n.top+"px",e.style.left=n.left+"px",i.style.top=n.arrowTop+"px",i.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new oc(this.state.data));const t=parseFloat(ti(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const i=this.state.arrow,n=e.top,s=t.height,r=e.left,a=t.width,o=i+this.state.border,l=e.box.width/2+i*2,c=e.box.height/2+i*2;switch(t.posClass.join("-")){case"top-left":t.top=n-c-s,t.left=r+o-a,t.arrowTop=s,t.arrowLeft=a-o-i;break;case"top-center":t.top=n-c-s,t.left=r-a/2,t.arrowTop=s,t.arrowLeft=a/2-i;break;case"top-right":t.top=n-c-s,t.left=r-o,t.arrowTop=s,t.arrowLeft=i;break;case"bottom-left":t.top=n+c,t.left=r+o-a,t.arrowTop=-i*2,t.arrowLeft=a-o-i;break;case"bottom-center":t.top=n+c,t.left=r-a/2,t.arrowTop=-i*2,t.arrowLeft=a/2-i;break;case"bottom-right":t.top=n+c,t.left=r-o,t.arrowTop=-i*2,t.arrowLeft=i;break;case"left-top":t.top=n+o-s,t.left=r-l-a,t.arrowTop=s-o-i,t.arrowLeft=a;break;case"center-left":t.top=n-s/2,t.left=r-l-a,t.arrowTop=s/2-i,t.arrowLeft=a;break;case"left-bottom":t.top=n-o,t.left=r-l-a,t.arrowTop=i,t.arrowLeft=a;break;case"right-top":t.top=n+o-s,t.left=r+l,t.arrowTop=s-o-i,t.arrowLeft=-i*2;break;case"center-right":t.top=n-s/2,t.left=r+l,t.arrowTop=s/2-i,t.arrowLeft=-i*2;break;case"right-bottom":t.top=n-o,t.left=r+l,t.arrowTop=i,t.arrowLeft=-i*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(i=>{i.complete||e.push(new Promise(n=>{i.onload=n,i.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.move(this.state.config)}})}}},_v=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Jn=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},Yt=new I,Es=new si(0,0,0,"ZXY"),xv=class extends Jn{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Je.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Je.radToDeg(2*Math.atan(Math.tan(Je.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Je.radToDeg(2*Math.atan(Math.tan(Je.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,i){const n=!gt(e),s=!gt(i),r={};let a=null;if(n){const o=this.viewer.getPosition(),l=ul(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:e.pitch},a=Wr(t,fl(o,e))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(i-o);r.zoom={start:o,end:i},a===null&&(a=Wr(t,Math.PI/4*l/100))}return a===null?typeof t=="number"?a=t:a=Hr:a=Math.max(Hr,a),{duration:a,properties:r}}textureCoordsToSphericalCoords(t){var i;if(!((i=this.state.textureData)!=null&&i.panoData))throw new Se("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!Es.equals(this.viewer.renderer.panoramaPose)||!Es.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Yt),Yt.applyEuler(this.viewer.renderer.panoramaPose),Yt.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Yt)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Se("Current adapter does not support texture coordinates or no texture has been loaded");return(!Es.equals(this.viewer.renderer.panoramaPose)||!Es.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,Yt),qr(Yt,this.viewer.renderer.sphereCorrection),qr(Yt,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(Yt)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,i=Hi){return e||(e=new I),e.x=i*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=i*Math.sin(t.pitch),e.z=i*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),i=Math.atan2(t.x,t.z);return{yaw:i<0?-i:Math.PI*2-i,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(i=>i.object.userData[Ai]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,Yt),this.vector3ToViewerCoords(Yt)}isPointVisible(t){let e,i;if(t instanceof I)e=t,i=this.vector3ToViewerCoords(t);else if(pa(t))e=this.sphericalCoordsToVector3(t,Yt),i=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&i.x>=0&&i.x<=this.viewer.state.size.width&&i.y>=0&&i.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Se("Position is missing 'yaw' or 'pitch'");return{yaw:Qt(t.yaw),pitch:Qt(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:Qt((t==null?void 0:t.pan)||0),tilt:Qt((t==null?void 0:t.tilt)||0,!0),roll:Qt((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Je.degToRad((t==null?void 0:t.poseHeading)||0),tilt:Je.degToRad((t==null?void 0:t.posePitch)||0),roll:Je.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(gt(t.zoom)&&!gt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),gt(t.position)&&!gt(e.initialHeading)&&!gt(e.initialPitch)&&(t={...t,position:{yaw:Qt(e.initialHeading),pitch:Qt(e.initialPitch,!0)}})),t}},Mv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,Ev=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Js=class ph{constructor(){this.$=ph.IDLE}is(...e){return e.some(i=>this.$&i)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Js.IDLE=0;Js.CLICK=1;Js.MOVING=2;var dt=Js,Sv=class extends Jn{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new dt,this.keyHandler=new $s,this.resizeObserver=new ResizeObserver(da(()=>this.viewer.autoSize(),50)),this.moveThreshold=sl*Mt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Pn.type,this),this.viewer.addEventListener(kn.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Pn.type,this),this.viewer.removeEventListener(kn.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case Pn.type:this.__applyMoveDelta();break;case kn.type:this.__clearMoveDelta();break}if(!gl(t,"."+jn))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var i;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===mt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(xt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new wi(t.key,t))||!this.state.keyboardEnabled)return;const e=(i=this.config.keyboardActions)==null?void 0:i[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(dt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY}__onMouseUp(t){this.step.is(dt.CLICK,dt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(dt.CLICK,dt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(dt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},al))):t.touches.length===2&&(this.step.set(dt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(dt.CLICK,dt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(dt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:xt.TWO_FINGERS,image:Mv,title:this.config.lang.twoFingers})},ol));else if(this.step.is(dt.CLICK,dt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(xt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:xt.CTRL_ZOOM,image:Ev,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(xt.CTRL_ZOOM),ll);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new In(t))}__resetMove(){this.step.set(dt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Vr(t);this.step.set(dt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,i,n=!1){this.step.is(dt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,i,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,i,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(c=>c.object.userData[Ai]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:n,originalEvent:i,target:Ds(i),clientX:t,clientY:e,viewerX:r,viewerY:a,yaw:c.yaw,pitch:c.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Ai])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new jl(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Wl(h)),this.data.dblclickData=Xs(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},rl))}}__handleObjectsEvents(t){if(!Sl(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=vl(this.viewer.container),i={x:t.clientX-e.x,y:t.clientY-e.y},n=this.viewer.renderer.getIntersections(i),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(t,r,i,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,$r),this.state.objectsObservers[r]=null),a?s(o.object,r,ih):(this.state.objectsObservers[r]=o.object,s(o.object,r,Kc))):a&&(s(a,r,$r),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(dt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(dt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(dt.MOVING)){const i=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(i/this.state.size.width)*Je.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Je.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(dt.MOVING)){t.preventDefault();const e=Vr(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Mt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var Ss=new Ue,Io=new st,Do=new mn,yv=class extends Jn{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new Ig(this.config.rendererParameters),this.renderer.setPixelRatio(Mt.pixelRatio),this.renderer.outputColorSpace=pi,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Br,this.camera=new Ht(50,16/9,.1,2*Hi),this.camera.matrixAutoUpdate=!1;const e=new Ot(new $n(Hi).scale(-1,1,1),new Xn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Ai]:!0},this.scene.add(e),this.raycaster=new Bg,this.frustum=new aa,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.viewer.addEventListener(Bn.type,this),this.viewer.addEventListener(di.type,this),this.viewer.addEventListener(Un.type,this),this.viewer.addEventListener(Nn.type,this),this.viewer.addEventListener(Lt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Bn.type,this),this.viewer.removeEventListener(di.type,this),this.viewer.removeEventListener(Un.type,this),this.viewer.removeEventListener(Nn.type,this),this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){switch(t.type){case Bn.type:this.__onSizeUpdated();break;case di.type:this.__onZoomUpdated();break;case Un.type:this.__onPositionUpdated();break;case Nn.type:this.__onPositionUpdated();break;case Lt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new Pn(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Ic))}setTexture(t){this.meshContainer||(this.meshContainer=new zi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const i=this.viewer.dataHelper.cleanPanoramaPose(t),n=(i.pan?1:0)+(i.tilt?1:0)+(i.roll?1:0);!An.useNewAnglesOrder&&n>1&&(et("'panoData' Euler angles have changed in version 5.11.0."),et("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),An.useNewAnglesOrder?e.rotation.set(i.tilt,i.pan,i.roll,"YXZ"):e.rotation.set(-i.tilt,-i.pan,-i.roll,"ZXY")}setSphereCorrection(t,e=this.meshContainer){const i=this.viewer.dataHelper.cleanSphereCorrection(t),n=(i.pan?1:0)+(i.tilt?1:0)+(i.roll?1:0);!An.useNewAnglesOrder&&n>1&&(et("'sphereCorrection' Euler angles have changed in version 5.11.0."),et("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),An.useNewAnglesOrder?e.rotation.set(i.tilt,i.pan,i.roll,"YXZ"):e.rotation.set(i.tilt,i.pan,i.roll,"ZXY")}transition(t,e){const i=!gt(e.position),n=!gt(e.zoom),s=new _a(i?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(s);const r=new zi,a=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(a,t,!0),this.viewer.adapter.setTextureOpacity(a,0),this.setPanoramaPose(t.panoData,a),this.setSphereCorrection(e.sphereCorrection,r),i&&e.transition==="fade-only"){const h=this.viewer.getPosition(),u=new I(0,1,0);r.rotateOnWorldAxis(u,s.position.yaw-h.yaw);const p=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();r.rotateOnWorldAxis(p,s.position.pitch-h.pitch)}r.add(a),this.scene.add(r),this.renderer.setRenderTarget(new bi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:o,properties:l}=this.viewer.dataHelper.getAnimationProperties(e.speed,e.transition===!0?s.position:null,s.zoomLevel),c=new Os({properties:{...l,opacity:{start:0,end:1}},duration:o,easing:"inOutCubic",onTick:h=>{this.viewer.adapter.setTextureOpacity(a,h.opacity),i&&e.transition===!0&&this.viewer.dynamics.position.setValue({yaw:h.yaw,pitch:h.pitch}),n&&this.viewer.dynamics.zoom.setValue(h.zoom),this.viewer.needsUpdate()}});return c.then(h=>{r.remove(a),this.scene.remove(r),h?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=a,this.meshContainer.add(a),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),i&&e.transition==="fade-only"&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(a))}),c}getIntersections(t){var i;Ss.x=2*t.x/this.state.size.width-1,Ss.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Ss,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(n=>n.object.visible).filter(n=>n.object.isMesh&&!!n.object.userData);return(i=this.customRenderer)!=null&&i.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Ss)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(Io.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Io),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Do.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Do)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=i=>{var n;(n=i.map)==null||n.dispose(),i.uniforms&&Object.values(i.uniforms).forEach(s=>{var r,a;(a=(r=s.value)==null?void 0:r.dispose)==null||a.call(r)}),i.dispose()};t.traverse(i=>{var n,s;(n=i.geometry)==null||n.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(r=>{e(r)}):e(i.material)),i instanceof Br||(s=i.dispose)==null||s.call(i),i!==t&&this.cleanScene(i)})}},wv=class extends la{load(t,e,i,n,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),c=l?parseInt(l):0,h=c!==0;let u=0;const p=new ReadableStream({start(m){_();function _(){o.read().then(({done:x,value:d})=>{if(x)m.close();else{u+=d.byteLength;const f=new ProgressEvent("progress",{lengthComputable:h,loaded:u,total:c});i(f),m.enqueue(d),_()}}).catch(x=>{n(x)})}}});return new Response(p)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{e(a)}).catch(a=>{n(a)})}},Tv=class extends la{load(t,e,i,n){const s=document.createElement("img");function r(){l(),e(this)}function a(c){if(l(),n!=null&&n.aborted){const h=new Error;h.name="AbortError",h.message="The operation was aborted.",i(h)}else i(c)}function o(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",a,!1),n==null||n.removeEventListener("abort",o,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",a,!1),n==null||n.addEventListener("abort",o,!1),!t.startsWith("data:")&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),s.src=t,s}},bv=class extends Jn{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new wv,this.imageLoader=new Tv,this.config.withCredentials&&(this.fileLoader.setWithCredentials(!0),this.imageLoader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,i){const n=rn.get(t,i);if(n){if(n instanceof Blob)return e==null||e(100),Promise.resolve(n);rn.remove(t,i)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),new Promise((s,r)=>{let a=0;e==null||e(a),this.fileLoader.load(t,o=>{a=100,e==null||e(a),rn.add(t,i,o),s(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,e==null||e(a))}},o=>{r(o)},this.__getAbortSignal(i))})}loadImage(t,e,i){const n=rn.get(t,i);return n?(e==null||e(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?new Promise((s,r)=>{this.imageLoader.load(t,a=>{rn.add(t,i,a),s(a)},a=>{r(a)},this.__getAbortSignal(i))}):this.loadFile(t,e,i).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,i)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=i,n.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Se("Current adapter does not support preload"))}__getAbortSignal(t){var e;return t?((e=this.abortCtrl[t])!=null&&e.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},Av=class extends Jn{constructor(t){super(t),this.zoom=new bn(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new di(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Pl(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new Un(e))},{yaw:new bn(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new bn(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new bn(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Nn(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Je.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Je.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},Cv=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,Hi),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},An=class extends Ul{constructor(t){var e,i,n;if(super(),this.plugins={},this.children=[],this.onResize=da(()=>this.navbar.autoSize(),500),this.parent=pl(t.container),!this.parent)throw new Se('"container" element not found.');this.parent[Ai]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Rl(this.parent),Cl(this.container,"core"),this.state=new Cv,this.config=hv(t),this.__setSize(this.config.size),this.overlay=new pv(this);try{Mt.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}rn.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new yv(this),this.textureLoader=new bv(this),this.eventsHandler=new Sv(this),this.dataHelper=new xv(this),this.dynamics=new Av(this),(i=(e=this.adapter).init)==null||i.call(e),this.loader=new uv(this),this.navbar=new dv(this),this.panel=new gv(this),this.notification=new fv(this),this.autoSize(),this.setCursor(null),fa(Mt.isTouchEnabled,s=>{Ws(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(n=s.init)==null||n.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama):this.loader.show())}destroy(){var t,e,i,n,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[a,o]of Object.entries(this.plugins))o.destroy(),delete this.plugins[a];this.children.slice().forEach(a=>a.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(i=this.textureLoader)==null||i.destroy(),(n=this.dataHelper)==null||n.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[Ai]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Fn)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=jr(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return _l(this.parent,Mt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Bn(this.getSize())),this.onResize())}setPanorama(t,e={}){var s;this.textureLoader.abortLoading(),(s=this.state.transitionAnimation)==null||s.cancel(),this.state.ready||["sphereCorrection","panoData"].forEach(r=>{r in e||(e[r]=this.config[r])}),e.transition===void 0&&(e.transition=!0),e.speed===void 0&&(e.speed=nl),e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description;const i=r=>{if(Tl(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new Mc(t,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new mc(t));const n=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),Gr();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!gt(a.zoom)||!gt(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!e.transition||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=n.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Yr(r)),gt(a.zoom)||this.zoom(a.zoom),gt(a.position)||this.rotate(a.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=n.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Yr(r)),this.state.transitionAnimation=this.renderer.transition(r,a),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new yc(r)),!r)throw Gr()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[i,n]of Object.entries(t)){if(!(i in fi)){et(`Unknown option ${i}`);continue}if(i in Po){et(Po[i]);continue}switch(i in Zr&&(n=Zr[i](n,{rawConfig:e,defValue:fi[i]})),this.config[i]=n,i){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new di(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Lt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:xt.ERROR,image:_v,title:t,dissmisable:!1})}hideError(){this.overlay.hide(xt.ERROR)}rotate(t){const e=new Hl(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=pa(t),i=!gt(t.zoom),n=new _a(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,n.position,n.zoomLevel);return s?(this.state.animation=new Os({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),i&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),i&&this.zoom(n.zoomLevel),new Os(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){const e=t;["width","height"].forEach(i=>{t&&e[i]&&(/^[0-9.]+$/.test(e[i])&&(e[i]+="px"),this.parent.style[i]=e[i])})}enterFullscreen(){this.isFullscreenEnabled()||xl(this.parent,Mt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Ml(Mt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new vv(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new kn),this.disableIdleTimer(),this.stopAnimation()}};An.useNewAnglesOrder=!0;/*!
 * Photo Sphere Viewer / Markers Plugin 5.11.1
 * @copyright 2015-2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Rv=Object.defineProperty,Lv=(t,e)=>{for(var i in e)Rv(t,i,{get:e[i],enumerable:!0})},Pv={};Lv(Pv,{EnterMarkerEvent:()=>Th,GotoMarkerDoneEvent:()=>Jr,HideMarkersEvent:()=>zn,LeaveMarkerEvent:()=>Sh,MarkerVisibilityEvent:()=>vh,MarkersPluginEvent:()=>Vt,RenderMarkersListEvent:()=>Wh,SelectMarkerEvent:()=>Ch,SelectMarkerListEvent:()=>Ph,SetMarkersEvent:()=>kh,ShowMarkersEvent:()=>Hn,UnselectMarkerEvent:()=>Uh});var Vt=class extends va{},mh=class gh extends Vt{constructor(e,i){super(gh.type),this.marker=e,this.visible=i}};mh.type="marker-visibility";var vh=mh,_h=class xh extends Vt{constructor(e){super(xh.type),this.marker=e}};_h.type="goto-marker-done";var Jr=_h,Mh=class Eh extends Vt{constructor(e){super(Eh.type),this.marker=e}};Mh.type="leave-marker";var Sh=Mh,yh=class wh extends Vt{constructor(e){super(wh.type),this.marker=e}};yh.type="enter-marker";var Th=yh,bh=class Ah extends Vt{constructor(e,i,n){super(Ah.type),this.marker=e,this.doubleClick=i,this.rightClick=n}};bh.type="select-marker";var Ch=bh,Rh=class Lh extends Vt{constructor(e){super(Lh.type),this.marker=e}};Rh.type="select-marker-list";var Ph=Rh,Ih=class Dh extends Vt{constructor(e){super(Dh.type),this.marker=e}};Ih.type="unselect-marker";var Uh=Ih,Nh=class Fh extends Vt{constructor(){super(Fh.type)}};Nh.type="hide-markers";var zn=Nh,Oh=class Bh extends Vt{constructor(e){super(Bh.type),this.markers=e}};Oh.type="set-markers";var kh=Oh,zh=class Hh extends Vt{constructor(){super(Hh.type)}};zh.type="show-markers";var Hn=zh,Vh=class Gh extends Vt{constructor(e){super(Gh.type),this.markers=e}};Vh.type="render-markers-list";var Wh=Vh,Iv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Wn=class extends wt{constructor(t){super(t,{className:"psv-markers-button",icon:Iv,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(Hn.type,this),this.plugin.addEventListener(zn.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(Hn.type,this),this.plugin.removeEventListener(zn.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof Hn?this.toggleActive(!0):t instanceof zn&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Wn.id="markers";var Xh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,ks="http://www.w3.org/2000/svg",rt="psvMarker",Dv=fe.dasherize(rt),yn="marker",an="markersList",Qr={amount:2,duration:100,easing:"linear"},Uv=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
 <h1 class="psv-panel-menu-title">${Xh} ${e}</h1>
 <ul class="psv-panel-menu-list">
   ${t.map(i=>`
   <li data-${Dv}="${i.id}" class="psv-panel-menu-item" tabindex="0">
     ${i.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${i.definition}"/></span>`:""}
     <span class="psv-panel-menu-item-label">${i.getListContent()}</span>
   </li>
   `).join("")}
 </ul>
</div>
`,Qs=class extends wt{constructor(t){super(t,{className:" psv-markers-list-button",icon:Xh,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(Me.ShowPanelEvent.type,this),this.viewer.addEventListener(Me.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(Me.ShowPanelEvent.type,this),this.viewer.removeEventListener(Me.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof Me.ShowPanelEvent?this.toggleActive(t.panelId===an):t instanceof Me.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Qs.id="markersList";var Uo=new I,Nv=new Vi,No=new I,Fv=class extends Rt{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},Zt=new st,Ov=new st,Bv=class{constructor(t={}){const e=this;let i,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=t.element!==void 0?t.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",o.appendChild(l);const c=document.createElement("div");c.style.transformStyle="preserve-3d",l.appendChild(c),this.getSize=function(){return{width:i,height:n}},this.render=function(x,d){const f=d.projectionMatrix.elements[5]*r;d.view&&d.view.enabled?(l.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(n/d.view.height)}px )`,l.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):l.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let T,S;d.isOrthographicCamera&&(T=-(d.right+d.left)/2,S=(d.top+d.bottom)/2);const w=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,F=d.isOrthographicCamera?`scale( ${w} )scale(`+f+")translate("+h(T)+"px,"+h(S)+"px)"+u(d.matrixWorldInverse):`scale( ${w} )translateZ(`+f+"px)"+u(d.matrixWorldInverse),b=(d.isPerspectiveCamera?"perspective("+f+"px) ":"")+F+"translate("+s+"px,"+r+"px)";a.camera.style!==b&&(c.style.transform=b,a.camera.style=b),_(x,x,d)},this.setSize=function(x,d){i=x,n=d,s=i/2,r=n/2,o.style.width=x+"px",o.style.height=d+"px",l.style.width=x+"px",l.style.height=d+"px",c.style.width=x+"px",c.style.height=d+"px"};function h(x){return Math.abs(x)<1e-10?0:x}function u(x){const d=x.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function p(x){const d=x.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function m(x){x.isCSS3DObject&&(x.element.style.display="none");for(let d=0,f=x.children.length;d<f;d++)m(x.children[d])}function _(x,d,f,T){if(x.visible===!1){m(x);return}if(x.isCSS3DObject){const S=x.layers.test(f.layers)===!0,w=x.element;if(w.style.display=S===!0?"":"none",S===!0){x.onBeforeRender(e,d,f);let F;x.isCSS3DSprite?(Zt.copy(f.matrixWorldInverse),Zt.transpose(),x.rotation2D!==0&&Zt.multiply(Ov.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose(Uo,Nv,No),Zt.setPosition(Uo),Zt.scale(No),Zt.elements[3]=0,Zt.elements[7]=0,Zt.elements[11]=0,Zt.elements[15]=1,F=p(Zt)):F=p(x.matrixWorld);const C=a.objects.get(x);if(C===void 0||C.style!==F){w.style.transform=F;const b={style:F};a.objects.set(x,b)}w.parentNode!==c&&c.appendChild(w),x.onAfterRender(e,d,f)}}for(let S=0,w=x.children.length;S<w;S++)_(x.children[S],d,f)}}},kv=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new Bv({element:this.element}),this.scene=new Br,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(i=>{const n=i.target[rt];n.config.visible&&(n.viewportIntersection=i.isIntersecting)})},{root:this.element}),t.addEventListener(Me.ReadyEvent.type,this,{once:!0}),t.addEventListener(Me.SizeUpdatedEvent.type,this),t.addEventListener(Me.RenderEvent.type,this)}handleEvent(t){switch(t.type){case Me.ReadyEvent.type:case Me.SizeUpdatedEvent.type:this.updateSize();break;case Me.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(Me.ReadyEvent.type,this),this.viewer.removeEventListener(Me.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Me.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},Cs=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(Cs||{});function ea(t,e=!1){const i=[];if(Object.keys(Cs).forEach(n=>{t[n]&&i.push(n)}),i.length===0&&!e)throw new Se(`missing marker content, either ${Object.keys(Cs).join(", ")}`);if(i.length>1)throw new Se(`multiple marker content, either ${Object.keys(Cs).join(", ")}`);return i[0]}var qh=class{constructor(t,e,i){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!i.id)throw new Se("missing marker id");this.type=ea(i),this.createElement(),this.update(i)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=ea(t,!0);if(e!==void 0&&e!==this.type)throw new Se(`cannot change marker ${t.id} type`);if(fe.isExtendedPosition(t)&&(fe.logWarn('Use the "position" property to configure the position of a marker'),t.position=this.viewer.dataHelper.cleanPosition(t)),"width"in t&&"height"in t&&(fe.logWarn('Use the "size" property to configure the size of a marker'),t.size={width:t.width,height:t.height}),this.config=fe.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),fe.isNil(this.config.visible)&&(this.config.visible=!0),fe.isNil(this.config.zIndex)&&(this.config.zIndex=1),fe.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const i=this.config.rotation;typeof i=="object"?this.config.rotation={yaw:i.yaw?fe.parseAngle(i.yaw,!0,!1):0,pitch:i.pitch?fe.parseAngle(i.pitch,!0,!1):0,roll:i.roll?fe.parseAngle(i.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:fe.parseAngle(i,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=fe.parsePoint(this.config.anchor)}getListContent(){var t;return this.config.listContent?this.config.listContent:(t=this.config.tooltip)!=null&&t.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,i=!1){var n;if(this.state.visible&&((n=this.config.tooltip)!=null&&n.content)&&this.state.position2D){const s={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const r=fe.getPosition(this.viewer.container);s.top=e-r.y+10,s.left=t-r.x,s.box={width:20,height:20}}else s.top=this.state.position2D.y,s.left=this.state.position2D.x;else{const r=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let a=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(a*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),s.top=r.y-o*this.state.anchor.y+o/2,s.left=r.x-a*this.state.anchor.x+a/2,s.box={width:a,height:o}}this.tooltip?i?this.tooltip.update(this.config.tooltip.content,s):this.tooltip.move(s):this.tooltip=this.viewer.createTooltip(s)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},Sa=class extends qh{get domElement(){return this.element}constructor(t,e,i){super(t,e,i)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&fe.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},zs=class extends Sa{constructor(t,e,i){super(t,e,i)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===i}),n):null}update(t){if(super.update(t),!fe.isExtendedPosition(this.config.position))throw new Se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new Se(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Qr:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Je.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const i=t.firstElementChild.getBoundingClientRect();this.state.size={width:i.width,height:i.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:i}){i!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*un.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Je.degToRad(this.viewer.state.hFov)/2,o=Math.abs(fe.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*un.EASINGS.outQuad(Math.max(0,(a-o)/a))}}i&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},zv=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,Hv=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,Vv=class extends ui{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=(t==null?void 0:t.enabled)===!0,t!=null&&t.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t==null?void 0:t.map},repeat:{value:new Ue(1,1)},offset:{value:new Ue(0,0)},alpha:{value:(t==null?void 0:t.alpha)??1},keying:{value:!1},color:{value:new Ze(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:Hv,fragmentShader:zv}),this.chromaKey=t==null?void 0:t.chromaKey}};function Gv({src:t,withCredentials:e,muted:i,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=i,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function Wv(t,e,i){const[n,s]=t,[r,a]=e,o=fe.greatArcDistance(t,e),l=Math.sin((1-i)*o)/Math.sin(o),c=Math.sin(i*o)/Math.sin(o),h=l*Math.cos(s)*Math.cos(n)+c*Math.cos(a)*Math.cos(r),u=l*Math.cos(s)*Math.sin(n)+c*Math.cos(a)*Math.sin(r),p=l*Math.sin(s)+c*Math.sin(a);return[Math.atan2(u,h),Math.atan2(p,Math.sqrt(h*h+u*u))]}function Yh(t){const e=[t[0]];let i=0;for(let n=1;n<t.length;n++){const s=t[n-1][0]-t[n][0];s>Math.PI?i+=1:s<-Math.PI&&(i-=1),e.push([t[n][0]+i*2*Math.PI,t[n][1]])}return e}function $h(t){const i=Yh(t).reduce((n,s)=>[n[0]+s[0],n[1]+s[1]]);return[fe.parseAngle(i[0]/t.length),i[1]/t.length]}function Xv(t){const e=Yh(t);let i=0;const n=[];for(let r=0;r<e.length-1;r++){const a=fe.greatArcDistance(e[r],e[r+1])*un.SPHERE_RADIUS;n.push(a),i+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>i/2){const a=(i/2-s)/n[r];return Wv(e[r],e[r+1],a)}s+=n[r]}return e[Math.round(e.length/2)]}var ys=new I,Fo=new I,Nr=new I,Oo=new I,Bo=new I,ko=new I;function qv(t,e,i){ys.copy(i).normalize(),Fo.crossVectors(t,e).normalize(),Nr.crossVectors(Fo,t).normalize(),Oo.copy(t).multiplyScalar(-ys.dot(Nr)),Bo.copy(Nr).multiplyScalar(ys.dot(t));const n=new I().addVectors(Oo,Bo).normalize();return ko.crossVectors(n,ys),n.applyAxisAngle(ko,.01).multiplyScalar(un.SPHERE_RADIUS)}var Yv=class extends qh{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,i){super(t,e,i)}is3d(){return!0}createElement(){const t=new Vv({alpha:0}),e=new Yn(1,1),i=new Ot(e,t);i.userData={[rt]:this},Object.defineProperty(i,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(n){this.userData[rt].config.visible=n}}),this.element=new zi().add(i),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){var s,r,a;super.update(t);const e=this.threeMesh,i=e.parent,n=e.material;if(fe.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(l){throw new Se(`invalid marker ${this.id} position`,l)}if(!this.config.size)throw new Se(`missing marker ${this.id} size`);if(this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,i.position),i.lookAt(0,i.position.y,0),this.config.orientation)switch(fe.logWarn('Marker#orientation is deprecated, use "rotation.yaw" or "rotation.pitch" instead'),e.rotateZ(-this.config.rotation.roll),this.config.orientation){case"horizontal":i.rotateX(this.state.position.pitch<0?-Math.PI/2:Math.PI/2);break;case"vertical-left":i.rotateY(-Math.PI*.4);break;case"vertical-right":i.rotateY(Math.PI*.4);break}else e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const o=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(l=>{const c=new I;return c.fromBufferAttribute(o,l),e.localToWorld(c)})}else{if(((s=this.config.position)==null?void 0:s.length)!==4)throw new Se(`missing marker ${this.id} position`);let o;try{o=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u))}catch(u){throw new Se(`invalid marker ${this.id} position`,u)}const l=o.map(u=>this.viewer.dataHelper.sphericalCoordsToVector3(u)),c=$h(o.map(({yaw:u,pitch:p})=>[u,p]));this.state.position={yaw:c[0],pitch:c[1]},this.state.positions3D=l;const h=e.geometry.getAttribute("position");[l[0],l[1],l[3],l[2]].forEach((u,p)=>{h.setX(p,u.x),h.setY(p,u.y),h.setZ(p,u.z)}),h.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){(r=n.map)==null||r.dispose();const o=Gv({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials,muted:!0,autoplay:this.config.autoplay??!0}),l=new Dg(o);n.map=l,n.alpha=0,o.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,fe.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:o.videoWidth,height:o.videoHeight},this.__setTextureWrap(n)))},{once:!0}),o.autoplay&&o.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){(a=n.map)==null||a.dispose();const o=new Et;n.map=o,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(l=>{this.viewer&&(fe.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:l.width,height:l.height},this.__setTextureWrap(n)),o.image=l,o.anisotropy=4,o.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[rt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const i=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u)),n=fe.greatArcDistance([i[0].yaw,i[0].pitch],[i[1].yaw,i[1].pitch]),s=fe.greatArcDistance([i[3].yaw,i[3].pitch],[i[2].yaw,i[2].pitch]),r=fe.greatArcDistance([i[1].yaw,i[1].pitch],[i[2].yaw,i[2].pitch]),a=fe.greatArcDistance([i[0].yaw,i[0].pitch],[i[3].yaw,i[3].pitch]),o=(n+s)/(r+a),l=e.width/e.height;let c=0,h=0;o<l?c=l-o:h=1/l-1/o,t.repeat.set(1-c,1-h),t.offset.set(c/2,h/2)}},$v=class extends Sa{constructor(t,e,i){super(t,e,i),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new Fv(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(t){this.userData[rt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){var s,r;const i=this.domElement;if(this.state.size={width:i.offsetWidth,height:i.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const a=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return(r=(s=this.config.elementLayer).updateMarker)==null||r.call(s,{marker:this,position:a,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),a}else return null}update(t){if(super.update(t),!fe.isExtendedPosition(this.config.position))throw new Se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new Se(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,i=this.domElement;i.classList.add("psv-marker--css3d"),i.childNodes.forEach(n=>n.remove()),i.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},jv=class extends zs{constructor(t,e,i){super(t,e,i)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){var i,n;const e=super.render(t);return e&&this.type==="element"&&((n=(i=this.config.element).updateMarker)==null||n.call(i,{marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size})),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new Se(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(i=>i.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},Zv=class extends Sa{constructor(t,e,i){super(t,e,i)}createElement(){this.element=document.createElementNS(ks,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const i=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-i.x},${a.y-i.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${i.x} ${i.y})`),i}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([n,s])=>{e.setAttributeNS(null,fe.dasherize(n),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let n=this.config[this.type];if(!Array.isArray(n[0]))for(let s=0;s<n.length;s++)n.splice(s,2,[n[s],n[s+1]]);if(Array.isArray(n[0][0])||(n=[n]),this.isPolyline&&n.length>1)throw new Se("polylines cannot have holes");this.isPixels?this.definition=n.map(s=>s.map(r=>{const a=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]});return[a.yaw,a.pitch]})):this.definition=n.map(s=>s.map(r=>[fe.parseAngle(r[0]),fe.parseAngle(r[1],!0)]))}catch(n){throw new Se(`invalid marker ${this.id} position`,n)}const i=this.isPolygon?$h(this.coords[0]):Xv(this.coords[0]);this.state.position={yaw:i[0],pitch:i[1]},this.positions3D=this.coords.map(n=>n.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,i=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return i.forEach((s,r)=>{s.visible||[r===0?i[e-1]:i[r-1],r===e-1?i[0]:i[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{i.splice(s.index,0,{vector:qv(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),i.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},Kv=class extends zs{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,i){super(t,e,i)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(ks,t);this.element=document.createElementNS(ks,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([i,n])=>{e.setAttributeNS(null,i,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([i,n])=>{e.setAttributeNS(null,fe.dasherize(i),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},Jv=fe.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=Qr),typeof t=="number"&&(t={amount:t}),{...Qr,...t}):null}});function Qv(t){switch(ea(t,!1)){case"image":case"html":case"element":return jv;case"imageLayer":case"videoLayer":return Yv;case"elementLayer":return $v;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return Zv;case"square":case"rect":case"circle":case"ellipse":case"path":return Kv;default:throw new Se("invalid marker type")}}var er=class extends Zs{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.svgContainer=document.createElementNS(ks,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new kv(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",this)}init(){super.init(),fe.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(Me.ClickEvent.type,this),this.viewer.addEventListener(Me.DoubleClickEvent.type,this),this.viewer.addEventListener(Me.RenderEvent.type,this),this.viewer.addEventListener(Me.ConfigChangedEvent.type,this),this.viewer.addEventListener(Me.ObjectEnterEvent.type,this),this.viewer.addEventListener(Me.ObjectHoverEvent.type,this),this.viewer.addEventListener(Me.ObjectLeaveEvent.type,this),this.viewer.addEventListener(Me.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(Me.ClickEvent.type,this),this.viewer.removeEventListener(Me.DoubleClickEvent.type,this),this.viewer.removeEventListener(Me.RenderEvent.type,this),this.viewer.removeEventListener(Me.ObjectEnterEvent.type,this),this.viewer.removeEventListener(Me.ObjectHoverEvent.type,this),this.viewer.removeEventListener(Me.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(Me.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){var e;switch(t.type){case Me.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case Me.RenderEvent.type:this.renderMarkers();break;case Me.ClickEvent.type:this.__onClick(t,!1);break;case Me.DoubleClickEvent.type:this.__onClick(t,!0);break;case Me.ObjectEnterEvent.type:case Me.ObjectLeaveEvent.type:case Me.ObjectHoverEvent.type:if(t.userDataKey===rt){const i=t.originalEvent,n=t.object.userData[rt];switch(t.type){case Me.ObjectEnterEvent.type:(e=n.config.style)!=null&&e.cursor?this.viewer.setCursor(n.config.style.cursor):(n.config.tooltip||n.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(i,n);break;case Me.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(n);break;case Me.ObjectHoverEvent.type:this.__onHoverMarker(i,n);break}}break;case"mouseenter":{const i=this.__getTargetMarker(fe.getEventTarget(t));this.__onEnterMarker(t,i);break}case"mouseleave":{const i=this.__getTargetMarker(fe.getEventTarget(t));this.__onLeaveMarker(i);break}case"mousemove":{const i=this.__getTargetMarker(fe.getEventTarget(t),!0);this.__onHoverMarker(t,i);break}case"contextmenu":t.preventDefault();break}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new Hn)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new zn)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new Se(`marker "${t.id}" already exists`);const i=new(Qv(t))(this.viewer,this,t);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new Se(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){var n;const i=this.getMarker(t.id);i.update(t),e&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&((n=i.config.tooltip)==null?void 0:n.trigger)==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const i=this.getMarker(t);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(i=>this.removeMarker(i,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t==null||t.forEach(i=>{this.addMarker(i,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const i=this.getMarker(t);return e?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new Jr(i))}):(this.viewer.rotate(i.state.position),fe.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new Jr(i)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const i=this.getMarker(t);i.config.visible=fe.isNil(e)?!i.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:yn,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(yn)}toggleMarkersList(){this.viewer.panel.isVisible(an)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&t.push(i)});const e=new Wh(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:an,content:Uv(t,this.viewer.config.lang[Wn.id]),noMargin:!0,clickHandler:i=>{const n=fe.getClosest(i,".psv-panel-menu-item"),s=n?n.dataset[rt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new Ph(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(an)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(n=>{let s=n.config.visible,r=!1,a=null;s&&(a=n.render({viewerPosition:e,zoomLevel:t,hoveringMarker:i}),s=!!a),r=n.state.visible!==s,n.state.visible=s,n.state.position2D=a,n.domElement&&fe.toggleClass(n.domElement,"psv-marker--visible",s),s?n.state.staticTooltip?n.showTooltip():n!==this.state.hoveringMarker&&n.hideTooltip():n.hideTooltip(),r&&(this.dispatchEvent(new vh(n,s)),(n.is3d()||n.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const i=e?fe.getClosest(t,".psv-marker"):t;return i?i[rt]:void 0}else return Array.isArray(t)?t.map(i=>i.userData[rt]).filter(i=>!!i).sort((i,n)=>n.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(t,e){var i;e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Th(e)),e instanceof zs&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&((i=e.config.tooltip)==null?void 0:i.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){var e;t&&(this.dispatchEvent(new Sh(t)),t instanceof zs&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&((e=t.config.tooltip)==null?void 0:e.trigger)==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){var i;e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&((i=e.config.tooltip)==null?void 0:i.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){var r,a;const i=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new Uh(this.state.currentMarker)),this.viewer.panel.hide(yn),!this.state.showAllTooltips&&((r=this.state.currentMarker.config.tooltip)==null?void 0:r.trigger)==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new Ch(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(((a=s.config.tooltip)==null?void 0:a.trigger)==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new kh(this.getMarkers()))}__refreshUi(){var e,i;const t=Object.values(this.markers).filter(n=>!n.config.hideList).length;t===0?(this.viewer.panel.isVisible(an)||this.viewer.panel.isVisible(yn))&&this.viewer.panel.hide():this.viewer.panel.isVisible(an)?this.showMarkersList():this.viewer.panel.isVisible(yn)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),(e=this.viewer.navbar.getButton(Wn.id,!1))==null||e.toggle(t>0),(i=this.viewer.navbar.getButton(Qs.id,!1))==null||i.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};er.id="markers";er.VERSION="5.11.1";er.configParser=Jv;er.readonlyOptions=["markers"];fi.lang[Wn.id]="Markers";fi.lang[Qs.id]="Markers list";Ks(Wn,"caption:left");Ks(Qs,"caption:left");/*!
 * Photo Sphere Viewer / Autorotate Plugin 5.11.1
 * @copyright 2015-2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var e_=Object.defineProperty,t_=(t,e)=>{for(var i in e)e_(t,i,{get:e[i],enumerable:!0})},i_={};t_(i_,{AutorotateEvent:()=>hn});var jh=class Zh extends va{constructor(e){super(Zh.type),this.autorotateEnabled=e}};jh.type="autorotate";var hn=jh,n_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.898-1-.102 0-.202-.1-.202-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.399 2.7.899.1 0 .2.101.2.199C6.3 34.4 12.9 39 20.5 39c7.602 0 14.102-4.6 16.9-11.1 0-.102.1-.102.199-.2 1.699-.601 2.699-1 2.801-1l.6-.3V14.3l-.5-.2zM6.701 11.5C9.7 7 14.8 4 20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.799-1-8.799-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5zM25.1 20.3L18.7 24c-.3.2-.7 0-.7-.5v-7.4c0-.4.4-.6.7-.4l6.399 3.8c.301.1.301.6.001.8zm9.4 8.901A16.421 16.421 0 0 1 20.5 37c-5.9 0-11.1-3.1-14-7.898-.2-.302.1-.602.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.602-2 .298-.1.5.198.398.499z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,s_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.899-1-.101 0-.2-.1-.2-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.4 2.7.9.1 0 .2.1.2.199C6.3 34.4 12.9 39 20.5 39c7.601 0 14.101-4.6 16.9-11.1 0-.101.1-.101.2-.2 1.699-.6 2.699-1 2.8-1l.6-.3V14.3l-.5-.2zM20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.8-1-8.8-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5C9.7 7 14.8 4 20.5 4zm0 33c-5.9 0-11.1-3.1-14-7.899-.2-.301.1-.601.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.601-2 .3-.1.5.2.399.5A16.422 16.422 0 0 1 20.5 37zm18.601-12.1c0 .1-.101.3-.2.3-2.5.9-10.4 3.6-18.4 3.6-7.1 0-15.6-2.699-18.3-3.6C2.1 25.2 2 25 2 24.9V16c0-.1.1-.3.2-.3 2.6-.9 10.6-3.6 18.2-3.6 7.5 0 15.899 2.7 18.5 3.6.1 0 .2.2.2.3v8.9z"/><path d="M18.7 24l6.4-3.7c.3-.2.3-.7 0-.8l-6.4-3.8c-.3-.2-.7 0-.7.4v7.4c0 .5.4.7.7.5z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,ya=class extends wt{constructor(t){var e;super(t,{className:"psv-autorotate-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:s_,iconActive:n_}),this.plugin=this.viewer.getPlugin("autorotate"),(e=this.plugin)==null||e.addEventListener(hn.type,this)}destroy(){var t;(t=this.plugin)==null||t.removeEventListener(hn.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof hn&&this.toggleActive(t.autorotateEnabled)}onClick(){this.plugin.isEnabled()&&this.plugin.disableOnIdle(),this.plugin.toggle()}};ya.id="autorotate";var r_=fe.getConfigParser({autostartDelay:2e3,autostartOnIdle:!0,autorotateSpeed:fe.parseSpeed("2rpm"),autorotatePitch:null,autorotateZoomLvl:null,keypoints:null,startFromClosest:!0},{autostartOnIdle:(t,{rawConfig:e})=>t&&fe.isNil(e.autostartDelay)?(fe.logWarn("autostartOnIdle requires a non null autostartDelay"),!1):t,autorotateSpeed:t=>fe.parseSpeed(t),autorotatePitch:t=>fe.isNil(t)?null:fe.parseAngle(t,!0),autorotateZoomLvl:t=>fe.isNil(t)?null:Je.clamp(t,0,100)}),Fr=16;function wn(t){return[t.yaw,t.pitch]}var tr=class extends Zs{constructor(t,e){super(t,e),this.state={initialStart:!0,disableOnIdle:!1,enabled:!1,idx:-1,curve:[],startStep:null,endStep:null,startTime:null,stepDuration:null,remainingPause:null,lastTime:null,tooltip:null},this.state.initialStart=!fe.isNil(this.config.autostartDelay)}init(){super.init(),this.video=this.viewer.getPlugin("video"),this.markers=this.viewer.getPlugin("markers"),this.config.keypoints&&(this.setKeypoints(this.config.keypoints),delete this.config.keypoints),this.viewer.addEventListener(Me.StopAllEvent.type,this),this.viewer.addEventListener(Me.BeforeRenderEvent.type,this),this.video||this.viewer.addEventListener(Me.KeypressEvent.type,this)}destroy(){this.viewer.removeEventListener(Me.StopAllEvent.type,this),this.viewer.removeEventListener(Me.BeforeRenderEvent.type,this),this.viewer.removeEventListener(Me.KeypressEvent.type,this),delete this.video,delete this.markers,delete this.keypoints,super.destroy()}handleEvent(t){switch(t.type){case Me.StopAllEvent.type:this.stop();break;case Me.BeforeRenderEvent.type:{this.__beforeRender(t.timestamp);break}case Me.KeypressEvent.type:this.__onKeyPress(t.originalEvent);break}}setKeypoints(t){if(!t)this.keypoints=null;else{if(t.length<2)throw new Se("At least two points are required");this.keypoints=t.map((e,i)=>{const n={position:null,markerId:null,pause:0,tooltip:null};let s;if(typeof e=="string"?n.markerId=e:fe.isExtendedPosition(e)?s=e:(n.markerId=e.markerId,n.pause=e.pause,s=e.position,e.tooltip&&typeof e.tooltip=="object"?n.tooltip=e.tooltip:typeof e.tooltip=="string"&&(n.tooltip={content:e.tooltip})),n.markerId){if(!this.markers)throw new Se(`Keypoint #${i} references a marker but the markers plugin is not loaded`);const r=this.markers.getMarker(n.markerId);n.position=wn(r.state.position)}else if(s)n.position=wn(this.viewer.dataHelper.cleanPosition(s));else throw new Se(`Keypoint #${i} is missing marker or position`);return n})}this.isEnabled()&&(this.stop(),this.start())}isEnabled(){return this.state.enabled}start(){this.isEnabled()||(this.viewer.stopAll(),this.keypoints?this.config.startFromClosest&&this.__shiftKeypoints():this.__animate(),this.state.initialStart=!1,this.state.disableOnIdle=!1,this.state.enabled=!0,this.dispatchEvent(new hn(!0)))}stop(){this.isEnabled()&&(this.__hideTooltip(),this.__reset(),this.viewer.stopAnimation(),this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.state.enabled=!1,this.dispatchEvent(new hn(!1)))}toggle(){this.isEnabled()?this.stop():this.start()}reverse(){this.isEnabled()&&!this.keypoints&&(this.config.autorotateSpeed=-this.config.autorotateSpeed,this.__animate())}disableOnIdle(){this.state.disableOnIdle=!0}__animate(){let t;fe.isNil(this.config.autorotateZoomLvl)?t=Promise.resolve(!0):t=this.viewer.animate({zoom:this.config.autorotateZoomLvl,speed:`${this.viewer.config.zoomSpeed*2}rpm`}),t.then(e=>{e&&(this.viewer.dynamics.position.roll({yaw:this.config.autorotateSpeed<0},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed)),fe.isNil(this.config.autorotatePitch)||this.viewer.dynamics.position.goto({pitch:this.config.autorotatePitch},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed)))})}__reset(){this.state.idx=-1,this.state.curve=[],this.state.startStep=null,this.state.endStep=null,this.state.startTime=null,this.state.stepDuration=null,this.state.remainingPause=null,this.state.lastTime=null,this.state.tooltip=null}__beforeRender(t){(this.state.initialStart||this.config.autostartOnIdle&&!this.state.disableOnIdle)&&this.viewer.state.idleTime>0&&t-this.viewer.state.idleTime>this.config.autostartDelay&&this.start(),this.isEnabled()&&this.keypoints&&(this.state.startTime||(this.state.endStep=wn(this.viewer.getPosition()),this.__nextStep(),this.state.startTime=t,this.state.lastTime=t),this.__nextFrame(t))}__shiftKeypoints(){const t=wn(this.viewer.getPosition()),e=this.__findMinIndex(this.keypoints,i=>fe.greatArcDistance(i.position,t));this.keypoints.push(...this.keypoints.splice(0,e))}__incrementIdx(){this.state.idx++,this.state.idx===this.keypoints.length&&(this.state.idx=0)}__showTooltip(){const t=this.keypoints[this.state.idx];if(t.tooltip){const e=this.viewer.dataHelper.vector3ToViewerCoords(this.viewer.state.direction);this.state.tooltip=this.viewer.createTooltip({content:t.tooltip.content,position:t.tooltip.position,top:e.y,left:e.x})}else if(t.markerId){const e=this.markers.getMarker(t.markerId);e.showTooltip(),this.state.tooltip=e.tooltip}}__hideTooltip(){if(this.state.tooltip){const t=this.keypoints[this.state.idx];t.tooltip?this.state.tooltip.hide():t.markerId&&this.markers.getMarker(t.markerId).hideTooltip(),this.state.tooltip=null}}__nextPoint(){const t=[];if(this.state.idx===-1){const s=wn(this.viewer.getPosition());t.push(s,s,this.keypoints[0].position,this.keypoints[1].position)}else for(let s=-1;s<3;s++){const r=this.state.idx+s<0?this.keypoints[this.keypoints.length-1]:this.keypoints[(this.state.idx+s)%this.keypoints.length];t.push(r.position)}const e=[new Ue(t[0][0],t[0][1])];let i=0;for(let s=1;s<=3;s++){const r=t[s-1][0]-t[s][0];r>Math.PI?i+=1:r<-Math.PI&&(i-=1),i!==0&&s===1&&(e[0].x-=i*2*Math.PI,i=0),e.push(new Ue(t[s][0]+i*2*Math.PI,t[s][1]))}const n=new Ng(e).getPoints(Fr*3).map(s=>[s.x,s.y]);this.state.curve=n.slice(Fr+1,Fr*2+1),this.state.idx!==-1?(this.state.remainingPause=this.keypoints[this.state.idx].pause,this.state.remainingPause?this.__showTooltip():this.__incrementIdx()):this.__incrementIdx()}__nextStep(){this.state.curve.length===0&&(this.__nextPoint(),this.state.endStep[0]=fe.parseAngle(this.state.endStep[0])),this.state.startStep=this.state.endStep,this.state.endStep=this.state.curve.shift();const t=fe.greatArcDistance(this.state.startStep,this.state.endStep);this.state.stepDuration=t*1e3/Math.abs(this.config.autorotateSpeed),t===0&&this.__nextStep()}__nextFrame(t){const e=t-this.state.lastTime;if(this.state.lastTime=t,this.state.remainingPause){if(this.state.remainingPause=Math.max(0,this.state.remainingPause-e),this.state.remainingPause>0)return;this.__hideTooltip(),this.__incrementIdx(),this.state.startTime=t}let i=(t-this.state.startTime)/this.state.stepDuration;i>=1&&(this.__nextStep(),i=0,this.state.startTime=t),this.viewer.rotate({yaw:this.state.startStep[0]+(this.state.endStep[0]-this.state.startStep[0])*i,pitch:this.state.startStep[1]+(this.state.endStep[1]-this.state.startStep[1])*i})}__findMinIndex(t,e){let i=0,n=Number.MAX_VALUE;return t.forEach((s,r)=>{const a=e(s);a<n&&(n=a,i=r)}),i}__onKeyPress(t){this.viewer.state.keyboardEnabled&&t.key===un.KEY_CODES.Space&&!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey&&(this.toggle(),t.preventDefault())}};tr.id="autorotate";tr.VERSION="5.11.1";tr.configParser=r_;tr.readonlyOptions=["keypoints"];Ks(ya,"start");fi.lang[ya.id]="Automatic rotation";/*!
 * Photo Sphere Viewer / Compass Plugin 5.11.1
 * @copyright 2015-2024 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var a_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(61, 61, 61, .5)"/><path fill="rgba(255, 255, 255, .7)" d="M50 97.1A47 47 0 0 1 32.5 6.5l.8 1.8a45 45 0 1 0 33.4 0l.8-1.8A47 47 0 0 1 50 97Zm0-42a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm4-41.7h-1.6a.4.4 0 0 1-.4-.2l-4.6-7.7V13a.3.3 0 0 1-.3.3h-1.6a.3.3 0 0 1-.3-.3V1.8a.3.3 0 0 1 .3-.3h1.6a.3.3 0 0 1 .4.2L52 9.4V1.8a.3.3 0 0 1 .3-.3H54c.2 0 .3 0 .3.3V13c0 .2-.1.3-.3.3Z"/></svg>
`,zo=1/40,o_=class extends Ri{constructor(t,e){super(t,{}),this.plugin=e,this.state={visible:!0,mouse:null,mousedown:!1,markers:[]},this.background=document.createElement("div"),this.canvas=document.createElement("canvas"),this.container.appendChild(this.background),this.container.appendChild(this.canvas),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("mousemove",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseup",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("touchmove",this),this.container.addEventListener("touchend",this),this.applyConfig(),this.hide()}get config(){return this.plugin.config}handleEvent(t){var e,i;if(this.config.navigation)switch(t.type){case"mouseenter":case"mousemove":case"touchmove":this.state.mouse=((e=t.changedTouches)==null?void 0:e[0])||t,this.state.mousedown?this.click():this.update(),t.stopPropagation(),t.preventDefault();break;case"mousedown":case"touchstart":this.state.mousedown=!0,t.stopPropagation(),t.preventDefault();break;case"mouseup":case"touchend":this.state.mouse=((i=t.changedTouches)==null?void 0:i[0])||t,this.state.mousedown=!1,this.click(),t.changedTouches&&(this.state.mouse=null,this.update()),t.stopPropagation(),t.preventDefault();break;case"mouseleave":this.state.mouse=null,this.state.mousedown=!1,this.update();break}}destroy(){this.canvas.width=0,this.canvas.height=0,super.destroy()}applyConfig(){this.container.className=`psv-compass psv-compass--${this.config.position.join("-")}`,this.config.className&&this.container.classList.add(this.config.className),this.background.innerHTML=this.config.backgroundSvg,this.container.style.width=this.config.size,this.container.style.marginTop=this.config.position[0]==="center"?`calc(-${this.config.size} / 2)`:"",this.container.style.marginLeft=this.config.position[1]==="center"?`calc(-${this.config.size} / 2)`:""}show(){super.show(),this.update()}setMarkers(t){this.state.markers=t,this.update()}update(){var s;if(!this.isVisible())return;this.canvas.width=this.container.clientWidth*Mt.pixelRatio,this.canvas.height=this.container.clientWidth*Mt.pixelRatio;const t=this.canvas.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height);const e=this.viewer.getPosition().yaw,i=Je.degToRad(this.viewer.state.hFov);this.__drawCone(t,this.config.coneColor,e,i);const n=this.__getMouseAngle();n!==null&&this.__drawCone(t,this.config.navigationColor,n,i),this.state.markers.forEach(r=>{this.__drawMarker(t,r)}),(s=this.config.hotspots)==null||s.forEach(r=>{"yaw"in r&&!("pitch"in r)&&(r.pitch=0);const a=this.viewer.dataHelper.cleanPosition(r);this.__drawPoint(t,r.color||this.config.hotspotColor,a.yaw,a.pitch)})}click(){const t=this.__getMouseAngle();t!==null&&this.viewer.rotate({yaw:t,pitch:this.config.resetPitch?this.viewer.config.defaultPitch:this.viewer.getPosition().pitch})}__drawCone(t,e,i,n){const s=i-Math.PI/2-n/2,r=s+n,a=this.canvas.width/2;t.beginPath(),t.moveTo(a,a),t.lineTo(a+Math.cos(s)*a,a+Math.sin(s)*a),t.arc(a,a,a,s,r,!1),t.lineTo(a,a),t.fillStyle=e,t.fill()}__drawMarker(t,e){let i=this.config.hotspotColor;if(typeof e.data.compass=="string"&&(i=e.data.compass),e.isPoly())t.beginPath(),e.definition[0].forEach(([n,s],r)=>{const a=n-Math.PI/2,o=(s+Math.PI/2)/Math.PI,l=this.canvas.width/2;t[r===0?"moveTo":"lineTo"](l+Math.cos(a)*l*o,l+Math.sin(a)*l*o)}),e.type.startsWith("polygon")?(t.fillStyle=i,t.fill()):(t.strokeStyle=i,t.lineWidth=Math.max(1,this.canvas.width*zo/2),t.stroke());else{const n=e.state.position;this.__drawPoint(t,i,n.yaw,n.pitch)}}__drawPoint(t,e,i,n){const s=i-Math.PI/2,r=(n+Math.PI/2)/Math.PI,a=this.canvas.width/2,o=Math.max(2,this.canvas.width*zo);t.beginPath(),t.ellipse(a+Math.cos(s)*a*r,a+Math.sin(s)*a*r,o,o,0,0,Math.PI*2),t.fillStyle=e,t.fill()}__getMouseAngle(){if(!this.state.mouse)return null;const t=this.container.getBoundingClientRect(),e=this.state.mouse.clientX-t.left-t.width/2,i=this.state.mouse.clientY-t.top-t.width/2;return Math.sqrt(e*e+i*i)>t.width/2?null:Math.atan2(i,e)+Math.PI/2}},l_=fe.getConfigParser({size:"120px",position:["top","left"],backgroundSvg:a_,coneColor:"rgba(255, 255, 255, 0.5)",navigation:!0,resetPitch:!1,navigationColor:"rgba(255, 0, 0, 0.2)",hotspots:[],hotspotColor:"rgba(0, 0, 0, 0.5)",className:null},{position:(t,{defValue:e})=>fe.cleanCssPosition(t,{allowCenter:!0,cssOrder:!0})||e}),wa=class extends Zs{constructor(t,e){super(t,e),this.component=new o_(this.viewer,this)}init(){super.init(),fe.checkStylesheet(this.viewer.container,"compass-plugin"),this.markers=this.viewer.getPlugin("markers"),this.viewer.addEventListener(Me.RenderEvent.type,this),this.viewer.addEventListener(Me.ReadyEvent.type,this,{once:!0}),this.markers&&this.markers.addEventListener("set-markers",this)}destroy(){this.viewer.removeEventListener(Me.RenderEvent.type,this),this.viewer.removeEventListener(Me.ReadyEvent.type,this),this.markers&&this.markers.removeEventListener("set-markers",this),this.component.destroy(),delete this.markers,super.destroy()}setOptions(t){super.setOptions(t),this.component.applyConfig(),this.component.update()}handleEvent(t){switch(t.type){case Me.ReadyEvent.type:this.component.show();break;case Me.RenderEvent.type:this.component.update();break;case"set-markers":this.component.setMarkers(t.markers.filter(e=>{var i;return(i=e.data)==null?void 0:i.compass}));break}}hide(){this.component.hide()}show(){this.component.show()}setHotspots(t){this.config.hotspots=t,this.component.update()}clearHotspots(){this.setHotspots(null)}};wa.id="compass";wa.VERSION="5.11.1";wa.configParser=l_;const h_=(t,e)=>`
  <div
    style="
      width: 40px;
      height: 40px;
      background-color: ${t};
      border-radius: 30%;
      margin: auto;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 1px;
    "
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="${e}" fill="white" />
    </svg>
  </div>

  <div
    style="
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${t};
    margin: auto;
  "
  ></div>

  <div style="display: flex; flex-direction: column-reverse; align-items: center">
    <div
      style="width: 1px; height: 40px; background-color: #fff; margin-top: 5px"
    ></div>
    <div
      style="
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 5;
        margin: auto;
      "
    ></div>
  </div>
`;export{tr as A,wa as C,er as M,An as V,h_ as c};
