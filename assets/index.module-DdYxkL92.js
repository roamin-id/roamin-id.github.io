/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="169";const yn="",Jt="srgb",mn="srgb-linear",Zr="display-p3",zs="display-p3-linear",Cs="linear",it="srgb",Rs="rec709",Ls="p3";const Aa="300 es";class ui{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const bi=Math.PI/180,zi=180/Math.PI;function fi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[n&63|128]+St[n>>8&255]+"-"+St[n>>16&255]+St[n>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function _t(t,e,n){return Math.max(e,Math.min(n,t))}function Kr(t,e){return(t%e+e)%e}function Yh(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function $h(t,e,n){return t!==e?(n-t)/(e-t):0}function Ai(t,e,n){return(1-n)*t+n*e}function jh(t,e,n,i){return Ai(t,e,1-Math.exp(-n*i))}function Zh(t,e=1){return e-Math.abs(Kr(t,e*2)-e)}function Kh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Jh(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Qh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ed(t,e){return t+Math.random()*(e-t)}function td(t){return t*(.5-Math.random())}function nd(t){t!==void 0&&(Ca=t);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function id(t){return t*bi}function sd(t){return t*zi}function rd(t){return(t&t-1)===0&&t!==0}function ad(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ld(t,e,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),p=a((e-i)/2),m=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*p,o*c);break;case"YZY":t.set(l*p,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*p,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ve={DEG2RAD:bi,RAD2DEG:zi,generateUUID:fi,clamp:_t,euclideanModulo:Kr,mapLinear:Yh,inverseLerp:$h,lerp:Ai,damp:jh,pingpong:Zh,smoothstep:Kh,smootherstep:Jh,randInt:Qh,randFloat:ed,randFloatSpread:td,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:ad,floorPowerOfTwo:od,setQuaternionFromProperEuler:ld,normalize:wt,denormalize:si};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,s,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],_=i[8],x=s[0],d=s[3],f=s[6],T=s[1],S=s[4],w=s[7],F=s[2],C=s[5],b=s[8];return r[0]=a*x+o*T+l*F,r[3]=a*d+o*S+l*C,r[6]=a*f+o*w+l*b,r[1]=c*x+h*T+u*F,r[4]=c*d+h*S+u*C,r[7]=c*f+h*w+u*b,r[2]=p*x+m*T+_*F,r[5]=p*d+m*S+_*C,r[8]=p*f+m*w+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,_=n*u+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=p*x,e[4]=(h*n-s*l)*x,e[5]=(s*r-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(nr.makeScale(e,n)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,n){return this.premultiply(nr.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new De;function No(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ps(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cd(){const t=Ps("canvas");return t.style.display="block",t}const Ra={};function ys(t){t in Ra||(Ra[t]=!0,console.warn(t))}function hd(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function dd(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const La=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pa=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gi={[mn]:{transfer:Cs,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Jt]:{transfer:it,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[zs]:{transfer:Cs,primaries:Ls,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Pa),fromReference:t=>t.applyMatrix3(La)},[Zr]:{transfer:it,primaries:Ls,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pa),fromReference:t=>t.applyMatrix3(La).convertLinearToSRGB()}},fd=new Set([mn,zs]),Xe={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fd.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=gi[e].toReference,s=gi[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return gi[t].primaries},getTransfer:function(t){return t===yn?Cs:gi[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(gi[e].luminanceCoefficients)}};function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ir(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xn;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=Ps("canvas")),Xn.width=e.width,Xn.height=e.height;const i=Xn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xn}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ps("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ci(n[i]/255)*255):n[i]=ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class Fo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function sr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class Et extends ui{constructor(e=Et.DEFAULT_IMAGE,n=Et.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=Et.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=fi(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=300;Et.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],x=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,w=(m+1)/2,F=(f+1)/2,C=(h+p)/4,b=(u+x)/4,O=(_+d)/4;return S>w&&S>F?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=b/i):w>F?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=C/s,r=O/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=b/r,s=O/r),this.set(i,s,r,n),this}let T=Math.sqrt((d-_)*(d-_)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(d-_)/T,this.y=(u-x)/T,this.z=(p-h)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends ui{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Et(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fo(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends vd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Oo extends Et{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Et{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(u!==x||l!==p||c!==m||h!==_){let d=1-o;const f=l*p+c*m+h*_+u*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const F=Math.sqrt(S),C=Math.atan2(F,f*T);d=Math.sin(d*C)/F,o=Math.sin(o*C)/F}const w=o*T;if(l=l*d+p*w,c=c*d+m*w,h=h*d+_*w,u=u*d+x*w,d===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return e[n]=o*_+h*u+l*m-c*p,e[n+1]=l*_+h*p+c*u-o*m,e[n+2]=c*_+h*m+o*p-l*u,e[n+3]=h*_-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),p=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"YZX":this._x=p*h*u+c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u-p*m*_;break;case"XZY":this._x=p*h*u-c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ia.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new I,Ia=new Gn;class pi{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(r,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),es.copy(i.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),ts.subVectors(this.max,vi),qn.subVectors(e.a,vi),Yn.subVectors(e.b,vi),$n.subVectors(e.c,vi),vn.subVectors(Yn,qn),_n.subVectors($n,Yn),In.subVectors(qn,$n);let n=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-In.z,In.y,vn.z,0,-vn.x,_n.z,0,-_n.x,In.z,0,-In.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!ar(n,qn,Yn,$n,ts)||(n=[1,0,0,0,1,0,0,0,1],!ar(n,qn,Yn,$n,ts))?!1:(ns.crossVectors(vn,_n),n=[ns.x,ns.y,ns.z],ar(n,qn,Yn,$n,ts))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,es=new pi,qn=new I,Yn=new I,$n=new I,vn=new I,_n=new I,In=new I,vi=new I,ts=new I,ns=new I,Dn=new I;function ar(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Dn.fromArray(t,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=e.dot(Dn),c=n.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xd=new pi,_i=new I,or=new I;class Jr{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const n=_i.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(_i,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(or)),this.expandByPoint(_i.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new I,lr=new I,is=new I,xn=new I,cr=new I,ss=new I,hr=new I;class Bo{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,n),ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){lr.copy(e).add(n).multiplyScalar(.5),is.copy(n).sub(e).normalize(),xn.copy(this.origin).sub(lr);const r=e.distanceTo(n)*.5,a=-this.direction.dot(is),o=xn.dot(this.direction),l=-xn.dot(is),c=xn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){const x=1/h;u*=x,p*=x,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lr).addScaledVector(is,p),m}intersectSphere(e,n){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),s=ln.dot(ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,n,i,s,r){cr.subVectors(n,e),ss.subVectors(i,e),hr.crossVectors(cr,ss);let a=this.direction.dot(hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const l=o*this.direction.dot(ss.crossVectors(xn,ss));if(l<0)return null;const c=o*this.direction.dot(cr.cross(xn));if(c<0||l+c>a)return null;const h=-o*xn.dot(hr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,s,r,a,o,l,c,h,u,p,m,_,x,d){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,u,p,m,_,x,d)}set(e,n,i,s,r,a,o,l,c,h,u,p,m,_,x,d){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=_,f[11]=x,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*u,_=o*h,x=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=m+_*c,n[5]=p-x*c,n[9]=-o*l,n[2]=x-p*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,_=c*h,x=c*u;n[0]=p+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=x+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,_=c*h,x=c*u;n[0]=p-x*o,n[4]=-a*u,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=x-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*u,_=o*h,x=o*u;n[0]=l*h,n[4]=_*c-m,n[8]=p*c+x,n[1]=l*u,n[5]=x*c+p,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*h,n[4]=x-p*u,n[8]=_*u+m,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*u+_,n[10]=p-x*u}else if(e.order==="XZY"){const p=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=p*u+x,n[5]=a*h,n[9]=m*u-_,n[2]=_*u-m,n[6]=o*h,n[10]=x*u+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Ed)}lookAt(e,n,i){const s=this.elements;return Ut.subVectors(e,n),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Mn.crossVectors(i,Ut),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Mn.crossVectors(i,Ut)),Mn.normalize(),rs.crossVectors(Ut,Mn),s[0]=Mn.x,s[4]=rs.x,s[8]=Ut.x,s[1]=Mn.y,s[5]=rs.y,s[9]=Ut.y,s[2]=Mn.z,s[6]=rs.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],_=i[2],x=i[6],d=i[10],f=i[14],T=i[3],S=i[7],w=i[11],F=i[15],C=s[0],b=s[4],O=s[8],ee=s[12],g=s[1],E=s[5],V=s[9],k=s[13],G=s[2],j=s[6],B=s[10],J=s[14],H=s[3],oe=s[7],le=s[11],ge=s[15];return r[0]=a*C+o*g+l*G+c*H,r[4]=a*b+o*E+l*j+c*oe,r[8]=a*O+o*V+l*B+c*le,r[12]=a*ee+o*k+l*J+c*ge,r[1]=h*C+u*g+p*G+m*H,r[5]=h*b+u*E+p*j+m*oe,r[9]=h*O+u*V+p*B+m*le,r[13]=h*ee+u*k+p*J+m*ge,r[2]=_*C+x*g+d*G+f*H,r[6]=_*b+x*E+d*j+f*oe,r[10]=_*O+x*V+d*B+f*le,r[14]=_*ee+x*k+d*J+f*ge,r[3]=T*C+S*g+w*G+F*H,r[7]=T*b+S*E+w*j+F*oe,r[11]=T*O+S*V+w*B+F*le,r[15]=T*ee+S*k+w*J+F*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],_=e[3],x=e[7],d=e[11],f=e[15];return _*(+r*l*u-s*c*u-r*o*p+i*c*p+s*o*m-i*l*m)+x*(+n*l*m-n*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+n*c*u-n*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+f*(-s*o*h-n*l*u+n*o*p+s*a*u-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],_=e[12],x=e[13],d=e[14],f=e[15],T=u*d*c-x*p*c+x*l*m-o*d*m-u*l*f+o*p*f,S=_*p*c-h*d*c-_*l*m+a*d*m+h*l*f-a*p*f,w=h*x*c-_*u*c+_*o*m-a*x*m-h*o*f+a*u*f,F=_*u*l-h*x*l-_*o*p+a*x*p+h*o*d-a*u*d,C=n*T+i*S+s*w+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(x*p*r-u*d*r-x*s*m+i*d*m+u*s*f-i*p*f)*b,e[2]=(o*d*r-x*l*r+x*s*c-i*d*c-o*s*f+i*l*f)*b,e[3]=(u*l*r-o*p*r-u*s*c+i*p*c+o*s*m-i*l*m)*b,e[4]=S*b,e[5]=(h*d*r-_*p*r+_*s*m-n*d*m-h*s*f+n*p*f)*b,e[6]=(_*l*r-a*d*r-_*s*c+n*d*c+a*s*f-n*l*f)*b,e[7]=(a*p*r-h*l*r+h*s*c-n*p*c-a*s*m+n*l*m)*b,e[8]=w*b,e[9]=(_*u*r-h*x*r-_*i*m+n*x*m+h*i*f-n*u*f)*b,e[10]=(a*x*r-_*o*r+_*i*c-n*x*c-a*i*f+n*o*f)*b,e[11]=(h*o*r-a*u*r-h*i*c+n*u*c+a*i*m-n*o*m)*b,e[12]=F*b,e[13]=(h*x*s-_*u*s+_*i*p-n*x*p-h*i*d+n*u*d)*b,e[14]=(_*o*s-a*x*s-_*i*l+n*x*l+a*i*d-n*o*d)*b,e[15]=(a*u*s-h*o*s+h*i*l-n*u*l-a*i*p+n*o*p)*b,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,_=r*u,x=a*h,d=a*u,f=o*u,T=l*c,S=l*h,w=l*u,F=i.x,C=i.y,b=i.z;return s[0]=(1-(x+f))*F,s[1]=(m+w)*F,s[2]=(_-S)*F,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(p+f))*C,s[6]=(d+T)*C,s[7]=0,s[8]=(_+S)*b,s[9]=(d-T)*b,s[10]=(1-(p+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=jn.set(s[0],s[1],s[2]).length();const a=jn.set(s[4],s[5],s[6]).length(),o=jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,h=1/a,u=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,n.setFromRotationMatrix(Xt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=2e3){const l=this.elements,c=2*r/(n-e),h=2*r/(i-s),u=(n+e)/(n-e),p=(i+s)/(i-s);let m,_;if(o===2e3)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===2001)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=2e3){const l=this.elements,c=1/(n-e),h=1/(i-s),u=1/(a-r),p=(n+e)*c,m=(i+s)*h;let _,x;if(o===2e3)_=(a+r)*u,x=-2*u;else if(o===2001)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jn=new I,Xt=new st,Md=new I(0,0,0),Ed=new I(1,1,1),Mn=new I,rs=new I,Ut=new I,Da=new st,Ua=new Gn;class rn{constructor(e=0,n=0,i=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Qr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const Na=new I,Zn=new Gn,cn=new st,as=new I,xi=new I,yd=new I,wd=new Gn,Fa=new I(1,0,0),Oa=new I(0,1,0),Ba=new I(0,0,1),ka={type:"added"},Td={type:"removed"},Kn={type:"childadded",child:null},dr={type:"childremoved",child:null};class Rt extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,n=new rn,i=new Gn,s=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zn.setFromAxisAngle(e,n),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,n){return Zn.setFromAxisAngle(e,n),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,n){return Na.copy(e).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?as.copy(e):as.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(xi,as,this.up):cn.lookAt(as,xi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(cn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ka),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Td),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ka),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new I,hn=new I,ur=new I,dn=new I,Jn=new I,Qn=new I,za=new I,fr=new I,pr=new I,mr=new I,gr=new lt,vr=new lt,_r=new lt;class $t{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),qt.subVectors(e,n),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){qt.subVectors(s,n),hn.subVectors(i,n),ur.subVectors(e,n);const a=qt.dot(qt),o=qt.dot(hn),l=qt.dot(ur),c=hn.dot(hn),h=hn.dot(ur),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return gr.setScalar(0),vr.setScalar(0),_r.setScalar(0),gr.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,i),_r.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(vr,r.y),a.addScaledVector(_r,r.z),a}static isFrontFacing(e,n,i,s){return qt.subVectors(i,n),hn.subVectors(e,n),qt.cross(hn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return $t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;Jn.subVectors(s,i),Qn.subVectors(r,i),fr.subVectors(e,i);const l=Jn.dot(fr),c=Qn.dot(fr);if(l<=0&&c<=0)return n.copy(i);pr.subVectors(e,s);const h=Jn.dot(pr),u=Qn.dot(pr);if(h>=0&&u<=h)return n.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Jn,a);mr.subVectors(e,r);const m=Jn.dot(mr),_=Qn.dot(mr);if(_>=0&&m<=_)return n.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Qn,o);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return za.subVectors(r,s),o=(u-h)/(u-h+(m-_)),n.copy(s).addScaledVector(za,o);const f=1/(d+x+p);return a=x*f,o=p*f,n.copy(i).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},os={h:0,s:0,l:0};function xr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Xe.workingColorSpace){if(e=Kr(e,1),n=_t(n,0,1),i=_t(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=xr(a,r,e+1/3),this.g=xr(a,r,e),this.b=xr(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,n=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){const i=ko[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Xe.fromWorkingColorSpace(yt.copy(this),e),Math.round(_t(yt.r*255,0,255))*65536+Math.round(_t(yt.g*255,0,255))*256+Math.round(_t(yt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.fromWorkingColorSpace(yt.copy(this),n);const i=yt.r,s=yt.g,r=yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(yt.copy(this),n),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Jt){Xe.fromWorkingColorSpace(yt.copy(this),e);const n=yt.r,i=yt.g,s=yt.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(En),this.setHSL(En.h+e,En.s+n,En.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(En),e.getHSL(os);const i=Ai(En.h,os.h,n),s=Ai(En.s,os.s,n),r=Ai(En.l,os.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ke;Ke.NAMES=ko;let bd=0;class Hs extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wi extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new I,ls=new ke;class nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ls.fromBufferAttribute(this,n),ls.applyMatrix3(e),this.setXY(n,ls.x,ls.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=si(n,this.array)),n}setX(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=si(n,this.array)),n}setY(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=si(n,this.array)),n}setW(e,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class zo extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ho extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ad=0;const kt=new st,Mr=new Rt,ei=new I,Nt=new pi,Mi=new pi,pt=new I;class Rn extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?Ho:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,n,i){return kt.makeTranslation(e,n,i),this.applyMatrix4(kt),this}scale(e,n,i){return kt.makeScale(e,n,i),this.applyMatrix4(kt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,Mi.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Mi.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Mi.min),Nt.expandByPoint(Mi.max))}Nt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pt));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(e,c),pt.add(ei)),s=Math.max(s,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new I,l[O]=new I;const c=new I,h=new I,u=new I,p=new ke,m=new ke,_=new ke,x=new I,d=new I;function f(O,ee,g){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,ee),u.fromBufferAttribute(i,g),p.fromBufferAttribute(r,O),m.fromBufferAttribute(r,ee),_.fromBufferAttribute(r,g),h.sub(c),u.sub(c),m.sub(p),_.sub(p);const E=1/(m.x*_.y-_.x*m.y);isFinite(E)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(E),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(E),o[O].add(x),o[ee].add(x),o[g].add(x),l[O].add(d),l[ee].add(d),l[g].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,ee=T.length;O<ee;++O){const g=T[O],E=g.start,V=g.count;for(let k=E,G=E+V;k<G;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new I,w=new I,F=new I,C=new I;function b(O){F.fromBufferAttribute(s,O),C.copy(F);const ee=o[O];S.copy(ee),S.sub(F.multiplyScalar(F.dot(ee))).normalize(),w.crossVectors(C,ee);const E=w.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,E)}for(let O=0,ee=T.length;O<ee;++O){const g=T[O],E=g.start,V=g.count;for(let k=E,G=E+V;k<G;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),x=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)s.fromBufferAttribute(n,p+0),r.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pt.fromBufferAttribute(e,n),pt.normalize(),e.setXYZ(n,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,_=0;for(let x=0,d=l.length;x<d;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let f=0;f<h;f++)p[_++]=c[m++]}return new nn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new st,Un=new Bo,cs=new Jr,Va=new I,hs=new I,ds=new I,us=new I,Er=new I,fs=new I,Ga=new I,ps=new I;class Ot extends Rt{constructor(e=new Rn,n=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Er.fromBufferAttribute(u,e),a?fs.addScaledVector(Er,h):fs.addScaledVector(Er.sub(n),h))}n.add(fs)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(cs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(cs,Va)===null||Un.origin.distanceToSquared(Va)>(e.far-e.near)**2))&&(Ha.copy(r).invert(),Un.copy(e.ray).applyMatrix4(Ha),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Un)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const d=p[_],f=a[d.materialIndex],T=Math.max(d.start,m.start),S=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,F=S;w<F;w+=3){const C=o.getX(w),b=o.getX(w+1),O=o.getX(w+2);s=ms(this,f,e,i,c,h,u,C,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,n.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=_,f=x;d<f;d+=3){const T=o.getX(d),S=o.getX(d+1),w=o.getX(d+2);s=ms(this,a,e,i,c,h,u,T,S,w),s&&(s.faceIndex=Math.floor(d/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const d=p[_],f=a[d.materialIndex],T=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,F=S;w<F;w+=3){const C=w,b=w+1,O=w+2;s=ms(this,f,e,i,c,h,u,C,b,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,n.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=_,f=x;d<f;d+=3){const T=d,S=d+1,w=d+2;s=ms(this,a,e,i,c,h,u,T,S,w),s&&(s.faceIndex=Math.floor(d/3),n.push(s))}}}}function Cd(t,e,n,i,s,r,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===0,o),l===null)return null;ps.copy(o),ps.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ps);return c<n.near||c>n.far?null:{distance:c,point:ps.clone(),object:t}}function ms(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,hs),t.getVertexPosition(l,ds),t.getVertexPosition(c,us);const h=Cd(t,e,n,i,hs,ds,us,Ga);if(h){const u=new I;$t.getBarycoord(Ga,hs,ds,us,u),s&&(h.uv=$t.getInterpolatedAttribute(s,o,l,c,u,new ke)),r&&(h.uv1=$t.getInterpolatedAttribute(r,o,l,c,u,new ke)),a&&(h.normal=$t.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};$t.getNormal(hs,ds,us,p.normal),h.face=p,h.barycoord=u}return h}class Xi extends Rn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;_("z","y","x",-1,-1,i,n,e,a,r,0),_("z","y","x",1,-1,i,n,-e,a,r,1),_("x","z","y",1,1,e,i,n,s,a,2),_("x","z","y",1,-1,e,i,-n,s,a,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function _(x,d,f,T,S,w,F,C,b,O,ee){const g=w/b,E=F/O,V=w/2,k=F/2,G=C/2,j=b+1,B=O+1;let J=0,H=0;const oe=new I;for(let le=0;le<B;le++){const ge=le*E-k;for(let Ge=0;Ge<j;Ge++){const je=Ge*g-V;oe[x]=je*T,oe[d]=ge*S,oe[f]=G,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[d]=0,oe[f]=C>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ge/b),u.push(1-le/O),J+=1}}for(let le=0;le<O;le++)for(let ge=0;ge<b;ge++){const Ge=p+ge+j*le,je=p+ge+j*(le+1),W=p+(ge+1)+j*(le+1),Z=p+(ge+1)+j*le;l.push(Ge,je,Z),l.push(je,W,Z),H+=6}o.addGroup(m,H,ee),m+=H,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Tt(t){const e={};for(let n=0;n<t.length;n++){const i=di(t[n]);for(const s in i)e[s]=i[s]}return e}function Rd(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vo(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ld={clone:di,merge:Tt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Go extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=2e3}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new I,Wa=new ke,Xa=new ke;class Ht extends Go{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,n){return this.getViewBounds(e,Wa,Xa),n.subVectors(Xa,Wa)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bi*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ti=-90,ni=1;class Dd extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(ti,ni,e,n);s.layers=this.layers,this.add(s);const r=new Ht(ti,ni,e,n);r.layers=this.layers,this.add(r);const a=new Ht(ti,ni,e,n);a.layers=this.layers,this.add(a);const o=new Ht(ti,ni,e,n);o.layers=this.layers,this.add(o);const l=new Ht(ti,ni,e,n);l.layers=this.layers,this.add(l);const c=new Ht(ti,ni,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,p,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wo extends Et{constructor(e,n,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:301,super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends An{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wo(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=n;const a=new Ot(s,r),o=n.minFilter;return n.minFilter===1008&&(n.minFilter=1006),new Dd(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}const Sr=new I,Nd=new I,Fd=new De;class Bn{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Sr.subVectors(i,n).cross(Nd.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Sr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Fd.getNormalMatrix(e),s=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Jr,gs=new I;class ea{constructor(e=new Bn,n=new Bn,i=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=2e3){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],_=s[9],x=s[10],d=s[11],f=s[12],T=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-r,p-c,d-m,w-f).normalize(),i[1].setComponents(l+r,p+c,d+m,w+f).normalize(),i[2].setComponents(l+a,p+h,d+_,w+T).normalize(),i[3].setComponents(l-a,p-h,d-_,w-T).normalize(),i[4].setComponents(l-o,p-u,d-x,w-S).normalize(),n===2e3)i[5].setComponents(l+o,p+u,d+x,w+S).normalize();else if(n===2001)i[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(gs.x=s.normal.x>0?e.max.x:e.min.x,gs.y=s.normal.y>0?e.max.y:e.min.y,gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xo(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Od(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<u.length;m++){const _=u[p],x=u[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,u[p]=x)}u.length=p+1;for(let m=0,_=u.length;m<_;m++){const x=u[m];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class qi extends Rn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=n/l,m=[],_=[],x=[],d=[];for(let f=0;f<h;f++){const T=f*p-a;for(let S=0;S<c;S++){const w=S*u-r;_.push(w,-T,0),x.push(0,0,1),d.push(S/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const S=T+c*f,w=T+c*(f+1),F=T+1+c*(f+1),C=T+1+c*f;m.push(S,w,C),m.push(w,F,C)}this.setIndex(m),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
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
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ou=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cu=`vec3 transformedNormal = objectNormal;
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
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`
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
}`,gu=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Ou=`
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yu=`#if defined( USE_POINTS_UV )
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
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kf=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
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
}`,Xf=`#if DEPTH_PACKING == 3200
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
}`,qf=`#define DISTANCE
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
}`,Yf=`#define DISTANCE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Qf=`uniform vec3 diffuse;
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,np=`#define MATCAP
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
}`,ip=`#define MATCAP
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
}`,sp=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,op=`#define PHONG
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
}`,lp=`#define STANDARD
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
}`,cp=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,dp=`#define TOON
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
}`,up=`uniform float size;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 color;
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
}`,gp=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:zd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:$d,beginnormal_vertex:jd,bsdfs:Zd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:tu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:du,emissivemap_fragment:uu,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:vu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Lu,envmap_vertex:Mu,fog_vertex:Eu,fog_pars_vertex:Su,fog_fragment:yu,fog_pars_fragment:wu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:bu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Cu,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Iu,lights_phong_fragment:Du,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:ku,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Gu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:$u,metalnessmap_pars_fragment:ju,morphinstance_vertex:Zu,morphcolor_vertex:Ku,morphnormal_vertex:Ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:ef,normal_fragment_begin:tf,normal_fragment_maps:nf,normal_pars_fragment:sf,normal_pars_vertex:rf,normal_vertex:af,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:lf,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:hf,iridescence_pars_fragment:df,opaque_fragment:uf,packing:ff,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:vf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Sf,shadowmask_pars_fragment:yf,skinbase_vertex:wf,skinning_pars_vertex:Tf,skinning_vertex:bf,skinnormal_vertex:Af,specularmap_fragment:Cf,specularmap_pars_fragment:Rf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Pf,transmission_fragment:If,transmission_pars_fragment:Df,uv_pars_fragment:Uf,uv_pars_vertex:Nf,uv_vertex:Ff,worldpos_vertex:Of,background_vert:Bf,background_frag:kf,backgroundCube_vert:zf,backgroundCube_frag:Hf,cube_vert:Vf,cube_frag:Gf,depth_vert:Wf,depth_frag:Xf,distanceRGBA_vert:qf,distanceRGBA_frag:Yf,equirect_vert:$f,equirect_frag:jf,linedashed_vert:Zf,linedashed_frag:Kf,meshbasic_vert:Jf,meshbasic_frag:Qf,meshlambert_vert:ep,meshlambert_frag:tp,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:sp,meshnormal_frag:rp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:lp,meshphysical_frag:cp,meshtoon_vert:hp,meshtoon_frag:dp,points_vert:up,points_frag:fp,shadow_vert:pp,shadow_frag:mp,sprite_vert:gp,sprite_frag:vp},te={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},en={basic:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Tt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Tt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Tt([te.points,te.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Tt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Tt([te.common,te.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Tt([te.sprite,te.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Tt([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Tt([te.lights,te.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const vs={r:0,b:0,g:0},Fn=new rn,_p=new st;function xp(t,e,n,i,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?n:e).get(S)),S}function x(T){let S=!1;const w=_(T);w===null?f(o,l):w&&w.isColor&&(f(w,1),S=!0);const F=t.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function d(T,S){const w=_(S);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Ot(new Xi(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:di(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fn.copy(S.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(Fn)),h.material.toneMapped=Xe.getTransfer(w.colorSpace)!==it,(u!==w||p!==w.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,u=w,p=w.version,m=t.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ot(new qi(2,2),new fn({name:"BackgroundMaterial",uniforms:di(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||p!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,u=w,p=w.version,m=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(vs,Vo(t)),i.buffers.color.setClear(vs.r,vs.g,vs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:x,addToRenderList:d}}function Mp(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(g,E,V,k,G){let j=!1;const B=u(k,V,E);r!==B&&(r=B,c(r.object)),j=m(g,k,V,G),j&&_(g,k,V,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(g,E,V,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(g){return t.bindVertexArray(g)}function h(g){return t.deleteVertexArray(g)}function u(g,E,V){const k=V.wireframe===!0;let G=i[g.id];G===void 0&&(G={},i[g.id]=G);let j=G[E.id];j===void 0&&(j={},G[E.id]=j);let B=j[k];return B===void 0&&(B=p(l()),j[k]=B),B}function p(g){const E=[],V=[],k=[];for(let G=0;G<n;G++)E[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:g,attributes:{},index:null}}function m(g,E,V,k){const G=r.attributes,j=E.attributes;let B=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){const le=G[H];let ge=j[H];if(ge===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function _(g,E,V,k){const G={},j=E.attributes;let B=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){let le=j[H];le===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(le=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(le=g.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),G[H]=ge,B++}r.attributes=G,r.attributesNum=B,r.index=k}function x(){const g=r.newAttributes;for(let E=0,V=g.length;E<V;E++)g[E]=0}function d(g){f(g,0)}function f(g,E){const V=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;V[g]=1,k[g]===0&&(t.enableVertexAttribArray(g),k[g]=1),G[g]!==E&&(t.vertexAttribDivisor(g,E),G[g]=E)}function T(){const g=r.newAttributes,E=r.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==g[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function S(g,E,V,k,G,j,B){B===!0?t.vertexAttribIPointer(g,E,V,G,j):t.vertexAttribPointer(g,E,V,k,G,j)}function w(g,E,V,k){x();const G=k.attributes,j=V.getAttributes(),B=E.defaultAttributeValues;for(const J in j){const H=j[J];if(H.location>=0){let oe=G[J];if(oe===void 0&&(J==="instanceMatrix"&&g.instanceMatrix&&(oe=g.instanceMatrix),J==="instanceColor"&&g.instanceColor&&(oe=g.instanceColor)),oe!==void 0){const le=oe.normalized,ge=oe.itemSize,Ge=e.get(oe);if(Ge===void 0)continue;const je=Ge.buffer,W=Ge.type,Z=Ge.bytesPerElement,pe=W===t.INT||W===t.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Le=ce.stride,we=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)f(H.location+Fe,ce.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)d(H.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Fe=0;Fe<H.locationSize;Fe++)S(H.location+Fe,ge/H.locationSize,W,le,Le*Z,(we+ge/H.locationSize*Fe)*Z,pe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)f(H.location+ce,oe.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)d(H.location+ce);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ce=0;ce<H.locationSize;ce++)S(H.location+ce,ge/H.locationSize,W,le,ge*Z,ge/H.locationSize*ce*Z,pe)}}else if(B!==void 0){const le=B[J];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(H.location,le);break;case 3:t.vertexAttrib3fv(H.location,le);break;case 4:t.vertexAttrib4fv(H.location,le);break;default:t.vertexAttrib1fv(H.location,le)}}}}T()}function F(){O();for(const g in i){const E=i[g];for(const V in E){const k=E[V];for(const G in k)h(k[G].object),delete k[G];delete E[V]}delete i[g]}}function C(g){if(i[g.id]===void 0)return;const E=i[g.id];for(const V in E){const k=E[V];for(const G in k)h(k[G].object),delete k[G];delete E[V]}delete i[g.id]}function b(g){for(const E in i){const V=i[E];if(V[g.id]===void 0)continue;const k=V[g.id];for(const G in k)h(k[G].object),delete k[G];delete V[g.id]}}function O(){ee(),a=!0,r!==s&&(r=s,c(r.object))}function ee(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:ee,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:T}}function Ep(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];n.update(m,i,1)}function l(c,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<p.length;x++)n.update(_,i,p[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==1023&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const O=b===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==1009&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==1015&&!O)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),d=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:F,maxSamples:C}}function yp(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Bn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){n=h(u,p,0)},this.setState=function(u,p,m){const _=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,f=t.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const T=r?0:i,S=T*4;let w=f.clippingState||null;l.value=w,w=h(_,p,S,m);for(let F=0;F!==S;++F)w[F]=n[F];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,_){const x=u!==null?u.length:0;let d=null;if(x!==0){if(d=l.value,_!==!0||d===null){const f=m+x*4,T=p.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<f)&&(d=new Float32Array(f));for(let S=0,w=m;S!==x;++S,w+=4)a.copy(u[S]).applyMatrix4(T,o),a.normal.toArray(d,w),d[w+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function wp(t){let e=new WeakMap;function n(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ud(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Tp extends Go{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const oi=4,qa=[.125,.215,.35,.446,.526,.582],zn=20,yr=new Tp,Ya=new Ke;let wr=null,Tr=0,br=0,Ar=!1;const kn=(1+Math.sqrt(5))/2,ii=1/kn,$a=[new I(-kn,ii,0),new I(kn,ii,0),new I(-ii,0,kn),new I(ii,0,kn),new I(0,kn,-ii),new I(0,kn,ii),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){wr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wr,Tr,br),this._renderer.xr.enabled=Ar,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:mn,depthBuffer:!1},s=Za(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=Ap(r,e,n)}return s}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,yr)}_sceneToCubeUV(e,n,i,s){const o=new Ht(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ya),h.toneMapping=0,h.autoClear=!1;const m=new Wi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Ot(new Xi,m);let x=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(Ya),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;_s(s,T*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,yr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$a[(s-r-1)%$a.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),x=r/_,d=isFinite(r)?1+Math.floor(h*x):zn;d>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zn}`);const f=[];let T=0;for(let b=0;b<zn;++b){const O=b/x,ee=Math.exp(-O*O/2);f.push(ee),b===0?T+=ee:b<d&&(T+=2*ee)}for(let b=0;b<f.length;b++)f[b]=f[b]/T;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-i;const w=this._sizeLods[s],F=3*w*(s>S-oi?s-S+oi:0),C=4*(this._cubeSize-w);_s(n,F,C,3*w,2*w),l.setRenderTarget(n),l.render(u,yr)}}function bp(t){const e=[],n=[],i=[];let s=t;const r=t-oi+1+qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let l=1/o;a>t-oi?l=qa[a-t+oi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,x=3,d=2,f=1,T=new Float32Array(x*_*m),S=new Float32Array(d*_*m),w=new Float32Array(f*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,O=C>2?0:-1,ee=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];T.set(ee,x*_*C),S.set(p,d*_*C);const g=[C,C,C,C,C,C];w.set(g,f*_*C)}const F=new Rn;F.setAttribute("position",new nn(T,x)),F.setAttribute("uv",new nn(S,d)),F.setAttribute("faceIndex",new nn(w,f)),e.push(F),s>oi&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Za(t,e,n){const i=new An(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Ap(t,e,n){const i=new Float32Array(zn),s=new I(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ta(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ja(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function Cp(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new ja(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(n===null&&(n=new ja(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Rp(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lp(t,e,n,i){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let d=0,f=x.length;d<f;d++)e.remove(x[d])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,n.memory.geometries++),p}function l(u){const p=u.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const x=m[_];for(let d=0,f=x.length;d<f;d++)e.update(x[d],t.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,_=u.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let S=0,w=T.length;S<w;S+=3){const F=T[S+0],C=T[S+1],b=T[S+2];p.push(F,C,C,b,b,F)}}else if(_!==void 0){const T=_.array;x=_.version;for(let S=0,w=T.length/3-1;S<w;S+=3){const F=S+0,C=S+1,b=S+2;p.push(F,C,C,b,b,F)}}else return;const d=new(No(p)?Ho:zo)(p,1);d.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,d)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pp(t,e,n){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,r,p*a),n.update(m,i,1)}function c(p,m,_){_!==0&&(t.drawElementsInstanced(i,m,r,p*a,_),n.update(m,i,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];n.update(d,i,1)}function u(p,m,_,x){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],x[f]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,_);let f=0;for(let T=0;T<_;T++)f+=m[T];for(let T=0;T<x.length;T++)n.update(f,i,x[T])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ip(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Dp(t,e,n){const i=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let ee=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",ee)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),x===!0&&(S=3);let w=o.attributes.position.count*S,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*F*4*u),b=new Oo(C,w,F,u);b.type=1015,b.needsUpdate=!0;const O=S*4;for(let g=0;g<u;g++){const E=d[g],V=f[g],k=T[g],G=w*F*4*g;for(let j=0;j<E.count;j++){const B=j*O;m===!0&&(s.fromBufferAttribute(E,j),C[G+B+0]=s.x,C[G+B+1]=s.y,C[G+B+2]=s.z,C[G+B+3]=0),_===!0&&(s.fromBufferAttribute(V,j),C[G+B+4]=s.x,C[G+B+5]=s.y,C[G+B+6]=s.z,C[G+B+7]=0),x===!0&&(s.fromBufferAttribute(k,j),C[G+B+8]=s.x,C[G+B+9]=s.y,C[G+B+10]=s.z,C[G+B+11]=k.itemSize===4?s.w:1)}}p={count:u,texture:b,size:new ke(w,F)},i.set(o,p),o.addEventListener("dispose",ee)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function Up(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}class qo extends Et{constructor(e,n,i,s,r,a,o,l,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yo=new Et,Qa=new qo(1,1),$o=new Oo,jo=new _d,Zo=new Wo,eo=[],to=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function mi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=eo[s];if(r===void 0&&(r=new Float32Array(s),eo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vs(t,e){let n=to[e];n===void 0&&(n=new Int32Array(e),to[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Np(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Fp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2fv(this.addr,e),ft(n,e)}}function Op(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ut(n,e))return;t.uniform3fv(this.addr,e),ft(n,e)}}function Bp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4fv(this.addr,e),ft(n,e)}}function kp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ft(n,e)}else{if(ut(n,i))return;so.set(i),t.uniformMatrix2fv(this.addr,!1,so),ft(n,i)}}function zp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ft(n,e)}else{if(ut(n,i))return;io.set(i),t.uniformMatrix3fv(this.addr,!1,io),ft(n,i)}}function Hp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ft(n,e)}else{if(ut(n,i))return;no.set(i),t.uniformMatrix4fv(this.addr,!1,no),ft(n,i)}}function Vp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2iv(this.addr,e),ft(n,e)}}function Wp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ut(n,e))return;t.uniform3iv(this.addr,e),ft(n,e)}}function Xp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4iv(this.addr,e),ft(n,e)}}function qp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Yp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ut(n,e))return;t.uniform2uiv(this.addr,e),ft(n,e)}}function $p(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ut(n,e))return;t.uniform3uiv(this.addr,e),ft(n,e)}}function jp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ut(n,e))return;t.uniform4uiv(this.addr,e),ft(n,e)}}function Zp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Qa.compareFunction=515,r=Qa):r=Yo,n.setTexture2D(e||r,s)}function Kp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||jo,s)}function Jp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Zo,s)}function Qp(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||$o,s)}function em(t){switch(t){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return kp;case 35675:return zp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function tm(t,e){t.uniform1fv(this.addr,e)}function nm(t,e){const n=mi(e,this.size,2);t.uniform2fv(this.addr,n)}function im(t,e){const n=mi(e,this.size,3);t.uniform3fv(this.addr,n)}function sm(t,e){const n=mi(e,this.size,4);t.uniform4fv(this.addr,n)}function rm(t,e){const n=mi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function am(t,e){const n=mi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function om(t,e){const n=mi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lm(t,e){t.uniform1iv(this.addr,e)}function cm(t,e){t.uniform2iv(this.addr,e)}function hm(t,e){t.uniform3iv(this.addr,e)}function dm(t,e){t.uniform4iv(this.addr,e)}function um(t,e){t.uniform1uiv(this.addr,e)}function fm(t,e){t.uniform2uiv(this.addr,e)}function pm(t,e){t.uniform3uiv(this.addr,e)}function mm(t,e){t.uniform4uiv(this.addr,e)}function gm(t,e,n){const i=this.cache,s=e.length,r=Vs(n,s);ut(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||Yo,r[a])}function vm(t,e,n){const i=this.cache,s=e.length,r=Vs(n,s);ut(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||jo,r[a])}function _m(t,e,n){const i=this.cache,s=e.length,r=Vs(n,s);ut(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Zo,r[a])}function xm(t,e,n){const i=this.cache,s=e.length,r=Vs(n,s);ut(i,r)||(t.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||$o,r[a])}function Mm(t){switch(t){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return um;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}class Em{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=em(n.type)}}class Sm{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mm(n.type)}}class ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function ro(t,e){t.seq.push(e),t.map[e.id]=e}function wm(t,e,n){const i=t.name,s=i.length;for(Cr.lastIndex=0;;){const r=Cr.exec(i),a=Cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ro(n,c===void 0?new Em(o,t,e):new Sm(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new ym(o),ro(n,u)),n=u}}}class ws{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);wm(r,a,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function ao(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Tm=37297;let bm=0;function Am(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Cm(t){const e=Xe.getPrimaries(Xe.workingColorSpace),n=Xe.getPrimaries(t);let i;switch(e===n?i="":e===Ls&&n===Rs?i="LinearDisplayP3ToLinearSRGB":e===Rs&&n===Ls&&(i="LinearSRGBToLinearDisplayP3"),t){case mn:case zs:return[i,"LinearTransferOETF"];case Jt:case Zr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function oo(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Am(t.getShaderSource(e),a)}else return s}function Rm(t,e){const n=Cm(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Lm(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xs=new I;function Pm(){Xe.getLuminanceCoefficients(xs);const t=xs.x.toFixed(4),e=xs.y.toFixed(4),n=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Dm(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Um(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function yi(t){return t!==""}function lo(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function co(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ir(t){return t.replace(Nm,Om)}const Fm=new Map;function Om(t,e){let n=Ie[e];if(n===void 0){const i=Fm.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ir(n)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(t){return t.replace(Bm,km)}function km(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uo(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function zm(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Wm(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Xm(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=zm(n),c=Hm(n),h=Vm(n),u=Gm(n),p=Wm(n),m=Im(n),_=Dm(r),x=s.createProgram();let d,f,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yi).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yi).join(`
`),f.length>0&&(f+=`
`)):(d=[uo(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),f=[uo(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Ie.tonemapping_pars_fragment:"",n.toneMapping!==0?Lm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Rm("linearToOutputTexel",n.outputColorSpace),Pm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yi).join(`
`)),a=Ir(a),a=lo(a,n),a=co(a,n),o=Ir(o),o=lo(o,n),o=co(o,n),a=ho(a),o=ho(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",n.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+d+a,w=T+f+o,F=ao(s,s.VERTEX_SHADER,S),C=ao(s,s.FRAGMENT_SHADER,w);s.attachShader(x,F),s.attachShader(x,C),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(E){if(t.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(F).trim(),G=s.getShaderInfoLog(C).trim();let j=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,F,C);else{const J=oo(s,F,"vertex"),H=oo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+J+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||G==="")&&(B=!1);B&&(E.diagnostics={runnable:j,programLog:V,vertexShader:{log:k,prefix:d},fragmentShader:{log:G,prefix:f}})}s.deleteShader(F),s.deleteShader(C),O=new ws(s,x),ee=Um(s,x)}let O;this.getUniforms=function(){return O===void 0&&b(this),O};let ee;this.getAttributes=function(){return ee===void 0&&b(this),ee};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Tm)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $m(e),n.set(e,i)),i}}class $m{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function jm(t,e,n,i,s,r,a){const o=new Qr,l=new Ym,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,E,V,k,G){const j=k.fog,B=G.geometry,J=g.isMeshStandardMaterial?k.environment:null,H=(g.isMeshStandardMaterial?n:e).get(g.envMap||J),oe=H&&H.mapping===306?H.image.height:null,le=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ge=ge!==void 0?ge.length:0;let je=0;B.morphAttributes.position!==void 0&&(je=1),B.morphAttributes.normal!==void 0&&(je=2),B.morphAttributes.color!==void 0&&(je=3);let W,Z,pe,ce;if(le){const Ct=en[le];W=Ct.vertexShader,Z=Ct.fragmentShader}else W=g.vertexShader,Z=g.fragmentShader,l.update(g),pe=l.getVertexShaderID(g),ce=l.getFragmentShaderID(g);const Le=t.getRenderTarget(),we=G.isInstancedMesh===!0,Fe=G.isBatchedMesh===!0,Qe=!!g.map,Oe=!!g.matcap,A=!!H,Pt=!!g.aoMap,Ue=!!g.lightMap,ze=!!g.bumpMap,be=!!g.normalMap,tt=!!g.displacementMap,Re=!!g.emissiveMap,y=!!g.metalnessMap,v=!!g.roughnessMap,D=g.anisotropy>0,q=g.clearcoat>0,$=g.dispersion>0,X=g.iridescence>0,ve=g.sheen>0,ne=g.transmission>0,he=D&&!!g.anisotropyMap,He=q&&!!g.clearcoatMap,K=q&&!!g.clearcoatNormalMap,de=q&&!!g.clearcoatRoughnessMap,Ae=X&&!!g.iridescenceMap,Ce=X&&!!g.iridescenceThicknessMap,ue=ve&&!!g.sheenColorMap,Ne=ve&&!!g.sheenRoughnessMap,Pe=!!g.specularMap,et=!!g.specularColorMap,R=!!g.specularIntensityMap,re=ne&&!!g.transmissionMap,z=ne&&!!g.thicknessMap,Y=!!g.gradientMap,ie=!!g.alphaMap,ae=g.alphaTest>0,Be=!!g.alphaHash,ct=!!g.extensions;let At=0;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(At=t.toneMapping);const We={shaderID:le,shaderType:g.type,shaderName:g.name,vertexShader:W,fragmentShader:Z,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Fe,batchingColor:Fe&&G._colorsTexture!==null,instancing:we,instancingColor:we&&G.instanceColor!==null,instancingMorph:we&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:mn,alphaToCoverage:!!g.alphaToCoverage,map:Qe,matcap:Oe,envMap:A,envMapMode:A&&H.mapping,envMapCubeUVHeight:oe,aoMap:Pt,lightMap:Ue,bumpMap:ze,normalMap:be,displacementMap:m&&tt,emissiveMap:Re,normalMapObjectSpace:be&&g.normalMapType===1,normalMapTangentSpace:be&&g.normalMapType===0,metalnessMap:y,roughnessMap:v,anisotropy:D,anisotropyMap:he,clearcoat:q,clearcoatMap:He,clearcoatNormalMap:K,clearcoatRoughnessMap:de,dispersion:$,iridescence:X,iridescenceMap:Ae,iridescenceThicknessMap:Ce,sheen:ve,sheenColorMap:ue,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:et,specularIntensityMap:R,transmission:ne,transmissionMap:re,thicknessMap:z,gradientMap:Y,opaque:g.transparent===!1&&g.blending===1&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:Be,combine:g.combine,mapUv:Qe&&d(g.map.channel),aoMapUv:Pt&&d(g.aoMap.channel),lightMapUv:Ue&&d(g.lightMap.channel),bumpMapUv:ze&&d(g.bumpMap.channel),normalMapUv:be&&d(g.normalMap.channel),displacementMapUv:tt&&d(g.displacementMap.channel),emissiveMapUv:Re&&d(g.emissiveMap.channel),metalnessMapUv:y&&d(g.metalnessMap.channel),roughnessMapUv:v&&d(g.roughnessMap.channel),anisotropyMapUv:he&&d(g.anisotropyMap.channel),clearcoatMapUv:He&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:K&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&d(g.sheenRoughnessMap.channel),specularMapUv:Pe&&d(g.specularMap.channel),specularColorMapUv:et&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:re&&d(g.transmissionMap.channel),thicknessMapUv:z&&d(g.thicknessMap.channel),alphaMapUv:ie&&d(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||D),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Qe||ie),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:At,decodeVideoTexture:Qe&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===it,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===2,flipSided:g.side===1,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ct&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&g.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function T(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const V in g.defines)E.push(V),E.push(g.defines[V]);return g.isRawShaderMaterial===!1&&(S(E,g),w(E,g),E.push(t.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function S(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function w(g,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),g.push(o.mask)}function F(g){const E=x[g.type];let V;if(E){const k=en[E];V=Ld.clone(k.uniforms)}else V=g.uniforms;return V}function C(g,E){let V;for(let k=0,G=h.length;k<G;k++){const j=h[k];if(j.cacheKey===E){V=j,++V.usedTimes;break}}return V===void 0&&(V=new Xm(t,E,g,r),h.push(V)),V}function b(g){if(--g.usedTimes===0){const E=h.indexOf(g);h[E]=h[h.length-1],h.pop(),g.destroy()}}function O(g){l.remove(g)}function ee(){l.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:F,acquireProgram:C,releaseProgram:b,releaseShaderCache:O,programs:h,dispose:ee}}function Zm(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Km(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fo(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function po(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,p,m,_,x,d){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:x,group:d},t[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=x,f.group=d),e++,f}function o(u,p,m,_,x,d){const f=a(u,p,m,_,x,d);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):n.push(f)}function l(u,p,m,_,x,d){const f=a(u,p,m,_,x,d);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):n.unshift(f)}function c(u,p){n.length>1&&n.sort(u||Km),i.length>1&&i.sort(p||fo),s.length>1&&s.sort(p||fo)}function h(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jm(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new po,t.set(i,[a])):s>=r.length?(a=new po,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Qm(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ke};break;case"SpotLight":n={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function eg(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tg=0;function ng(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ig(t){const e=new Qm,n=eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new st,a=new st;function o(c){let h=0,u=0,p=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let m=0,_=0,x=0,d=0,f=0,T=0,S=0,w=0,F=0,C=0,b=0;c.sort(ng);for(let ee=0,g=c.length;ee<g;ee++){const E=c[ee],V=E.color,k=E.intensity,G=E.distance,j=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=V.r*k,u+=V.g*k,p+=V.b*k;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],k);b++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,H=n.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=E.shadow.matrix,T++}i.directional[m]=B,m++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(V).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[x]=B;const J=E.shadow;if(E.map&&(i.spotLightMap[F]=E.map,F++,J.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=J.matrix,E.castShadow){const H=n.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=j,w++}x++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(V).multiplyScalar(k),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=B,d++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const J=E.shadow,H=n.get(E);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=E.shadow.matrix,S++}i.point[_]=B,_++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(k),B.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[f]=B,f++}}d>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==m||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==d||O.hemiLength!==f||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==F||O.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=d,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+F-C,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,O.directionalLength=m,O.pointLength=_,O.spotLength=x,O.rectAreaLength=d,O.hemiLength=f,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=F,O.numLightProbes=b,i.version=tg++)}function l(c,h){let u=0,p=0,m=0,_=0,x=0;const d=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const S=c[f];if(S.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(S.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:o,setupView:l,state:i}}function mo(t){const e=new ig(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sg(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new mo(t),e.set(s,[o])):r>=a.length?(o=new mo(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class rg extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function cg(t,e,n){let i=new ea;const s=new ke,r=new ke,a=new lt,o=new rg({depthPacking:3201}),l=new ag,c={},h=n.maxTextureSize,u={0:1,1:0,2:2},p=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:og,fragmentShader:lg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(C,b,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const ee=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=f!==3&&this.type===3,G=f===3&&this.type!==3;for(let j=0,B=C.length;j<B;j++){const J=C[j],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||k===!0||G===!0){const ge=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new An(s.x,s.y,ge),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const le=H.getViewportCount();for(let ge=0;ge<le;ge++){const Ge=H.getViewport(ge);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),V.viewport(a),H.updateMatrices(J,ge),i=H.getFrustum(),w(b,O,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===3&&T(H,O),H.needsUpdate=!1}f=this.type,d.needsUpdate=!1,t.setRenderTarget(ee,g,E)};function T(C,b){const O=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new An(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,O,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,O,m,x,null)}function S(C,b,O,ee){let g=null;const E=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)g=E;else if(g=O.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=g.uuid,k=b.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let j=G[k];j===void 0&&(j=g.clone(),G[k]=j,b.addEventListener("dispose",F)),g=j}if(g.visible=b.visible,g.wireframe=b.wireframe,ee===3?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:u[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,O.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=t.properties.get(g);V.light=O}return g}function w(C,b,O,ee,g){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===3)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const k=e.update(C),G=C.material;if(Array.isArray(G)){const j=k.groups;for(let B=0,J=j.length;B<J;B++){const H=j[B],oe=G[H.materialIndex];if(oe&&oe.visible){const le=S(C,oe,ee,g);C.onBeforeShadow(t,C,b,O,k,le,H),t.renderBufferDirect(O,null,k,le,C,H),C.onAfterShadow(t,C,b,O,k,le,H)}}}else if(G.visible){const j=S(C,G,ee,g);C.onBeforeShadow(t,C,b,O,k,j,null),t.renderBufferDirect(O,null,k,j,C,null),C.onAfterShadow(t,C,b,O,k,j,null)}}const V=C.children;for(let k=0,G=V.length;k<G;k++)w(V[k],b,O,ee,g)}function F(C){C.target.removeEventListener("dispose",F);for(const O in c){const ee=c[O],g=C.target.uuid;g in ee&&(ee[g].dispose(),delete ee[g])}}}const hg={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function dg(t){function e(){let R=!1;const re=new lt;let z=null;const Y=new lt(0,0,0,0);return{setMask:function(ie){z!==ie&&!R&&(t.colorMask(ie,ie,ie,ie),z=ie)},setLocked:function(ie){R=ie},setClear:function(ie,ae,Be,ct,At){At===!0&&(ie*=ct,ae*=ct,Be*=ct),re.set(ie,ae,Be,ct),Y.equals(re)===!1&&(t.clearColor(ie,ae,Be,ct),Y.copy(re))},reset:function(){R=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let R=!1,re=!1,z=null,Y=null,ie=null;return{setReversed:function(ae){re=ae},setTest:function(ae){ae?pe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ae){z!==ae&&!R&&(t.depthMask(ae),z=ae)},setFunc:function(ae){if(re&&(ae=hg[ae]),Y!==ae){switch(ae){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=ae}},setLocked:function(ae){R=ae},setClear:function(ae){ie!==ae&&(t.clearDepth(ae),ie=ae)},reset:function(){R=!1,z=null,Y=null,ie=null}}}function i(){let R=!1,re=null,z=null,Y=null,ie=null,ae=null,Be=null,ct=null,At=null;return{setTest:function(We){R||(We?pe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(We){re!==We&&!R&&(t.stencilMask(We),re=We)},setFunc:function(We,Ct,an){(z!==We||Y!==Ct||ie!==an)&&(t.stencilFunc(We,Ct,an),z=We,Y=Ct,ie=an)},setOp:function(We,Ct,an){(ae!==We||Be!==Ct||ct!==an)&&(t.stencilOp(We,Ct,an),ae=We,Be=Ct,ct=an)},setLocked:function(We){R=We},setClear:function(We){At!==We&&(t.clearStencil(We),At=We)},reset:function(){R=!1,re=null,z=null,Y=null,ie=null,ae=null,Be=null,ct=null,At=null}}}const s=new e,r=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,_=!1,x=null,d=null,f=null,T=null,S=null,w=null,F=null,C=new Ke(0,0,0),b=0,O=!1,ee=null,g=null,E=null,V=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=B>=2);let H=null,oe={};const le=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Ge=new lt().fromArray(le),je=new lt().fromArray(ge);function W(R,re,z,Y){const ie=new Uint8Array(4),ae=t.createTexture();t.bindTexture(R,ae),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<z;Be++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(re+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return ae}const Z={};Z[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),r.setFunc(3),Ue(!1),ze(1),pe(t.CULL_FACE),A(0);function pe(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function ce(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Le(R,re){return h[R]!==re?(t.bindFramebuffer(R,re),h[R]=re,R===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=re),R===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=re),!0):!1}function we(R,re){let z=p,Y=!1;if(R){z=u.get(re),z===void 0&&(z=[],u.set(re,z));const ie=R.textures;if(z.length!==ie.length||z[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Be=ie.length;ae<Be;ae++)z[ae]=t.COLOR_ATTACHMENT0+ae;z.length=ie.length,Y=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,Y=!0);Y&&t.drawBuffers(z)}function Fe(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const Qe={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};Qe[103]=t.MIN,Qe[104]=t.MAX;const Oe={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function A(R,re,z,Y,ie,ae,Be,ct,At,We){if(R===0){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),R!==5){if(R!==x||We!==O){if((d!==100||S!==100)&&(t.blendEquation(t.FUNC_ADD),d=100,S=100),We)switch(R){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}f=null,T=null,w=null,F=null,C.set(0,0,0),b=0,x=R,O=We}return}ie=ie||re,ae=ae||z,Be=Be||Y,(re!==d||ie!==S)&&(t.blendEquationSeparate(Qe[re],Qe[ie]),d=re,S=ie),(z!==f||Y!==T||ae!==w||Be!==F)&&(t.blendFuncSeparate(Oe[z],Oe[Y],Oe[ae],Oe[Be]),f=z,T=Y,w=ae,F=Be),(ct.equals(C)===!1||At!==b)&&(t.blendColor(ct.r,ct.g,ct.b,At),C.copy(ct),b=At),x=R,O=!1}function Pt(R,re){R.side===2?ce(t.CULL_FACE):pe(t.CULL_FACE);let z=R.side===1;re&&(z=!z),Ue(z),R.blending===1&&R.transparent===!1?A(0):A(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){ee!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),ee=R)}function ze(R){R!==0?(pe(t.CULL_FACE),R!==g&&(R===1?t.cullFace(t.BACK):R===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),g=R}function be(R){R!==E&&(j&&t.lineWidth(R),E=R)}function tt(R,re,z){R?(pe(t.POLYGON_OFFSET_FILL),(V!==re||k!==z)&&(t.polygonOffset(re,z),V=re,k=z)):ce(t.POLYGON_OFFSET_FILL)}function Re(R){R?pe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function y(R){R===void 0&&(R=t.TEXTURE0+G-1),H!==R&&(t.activeTexture(R),H=R)}function v(R,re,z){z===void 0&&(H===null?z=t.TEXTURE0+G-1:z=H);let Y=oe[z];Y===void 0&&(Y={type:void 0,texture:void 0},oe[z]=Y),(Y.type!==R||Y.texture!==re)&&(H!==z&&(t.activeTexture(z),H=z),t.bindTexture(R,re||Z[R]),Y.type=R,Y.texture=re)}function D(){const R=oe[H];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){Ge.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Ge.copy(R))}function ue(R){je.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),je.copy(R))}function Ne(R,re){let z=l.get(re);z===void 0&&(z=new WeakMap,l.set(re,z));let Y=z.get(R);Y===void 0&&(Y=t.getUniformBlockIndex(re,R.name),z.set(R,Y))}function Pe(R,re){const Y=l.get(re).get(R);o.get(re)!==Y&&(t.uniformBlockBinding(re,Y,R.__bindingPointIndex),o.set(re,Y))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},H=null,oe={},h={},u=new WeakMap,p=[],m=null,_=!1,x=null,d=null,f=null,T=null,S=null,w=null,F=null,C=new Ke(0,0,0),b=0,O=!1,ee=null,g=null,E=null,V=null,k=null,Ge.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pe,disable:ce,bindFramebuffer:Le,drawBuffers:we,useProgram:Fe,setBlending:A,setMaterial:Pt,setFlipSided:Ue,setCullFace:ze,setLineWidth:be,setPolygonOffset:tt,setScissorTest:Re,activeTexture:y,bindTexture:v,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:de,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:He,texStorage3D:K,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:Ce,viewport:ue,reset:et}}function go(t,e,n,i){const s=ug(i);switch(n){case 1021:return t*e;case 1024:return t*e;case 1025:return t*e*2;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ug(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function fg(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Ps("canvas")}function x(y,v,D){let q=1;const $=Re(y);if(($.width>D||$.height>D)&&(q=D/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(q*$.width),ve=Math.floor(q*$.height);u===void 0&&(u=_(X,ve));const ne=v?_(X,ve):u;return ne.width=X,ne.height=ve,ne.getContext("2d").drawImage(y,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+ve+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function d(y){return y.generateMipmaps&&y.minFilter!==1003&&y.minFilter!==1006}function f(y){t.generateMipmap(y)}function T(y,v,D,q,$=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=v;if(v===t.RED&&(D===t.FLOAT&&(X=t.R32F),D===t.HALF_FLOAT&&(X=t.R16F),D===t.UNSIGNED_BYTE&&(X=t.R8)),v===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.R8UI),D===t.UNSIGNED_SHORT&&(X=t.R16UI),D===t.UNSIGNED_INT&&(X=t.R32UI),D===t.BYTE&&(X=t.R8I),D===t.SHORT&&(X=t.R16I),D===t.INT&&(X=t.R32I)),v===t.RG&&(D===t.FLOAT&&(X=t.RG32F),D===t.HALF_FLOAT&&(X=t.RG16F),D===t.UNSIGNED_BYTE&&(X=t.RG8)),v===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RG8UI),D===t.UNSIGNED_SHORT&&(X=t.RG16UI),D===t.UNSIGNED_INT&&(X=t.RG32UI),D===t.BYTE&&(X=t.RG8I),D===t.SHORT&&(X=t.RG16I),D===t.INT&&(X=t.RG32I)),v===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGB8UI),D===t.UNSIGNED_SHORT&&(X=t.RGB16UI),D===t.UNSIGNED_INT&&(X=t.RGB32UI),D===t.BYTE&&(X=t.RGB8I),D===t.SHORT&&(X=t.RGB16I),D===t.INT&&(X=t.RGB32I)),v===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),D===t.UNSIGNED_INT&&(X=t.RGBA32UI),D===t.BYTE&&(X=t.RGBA8I),D===t.SHORT&&(X=t.RGBA16I),D===t.INT&&(X=t.RGBA32I)),v===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),v===t.RGBA){const ve=$?Cs:Xe.getTransfer(q);D===t.FLOAT&&(X=t.RGBA32F),D===t.HALF_FLOAT&&(X=t.RGBA16F),D===t.UNSIGNED_BYTE&&(X=ve===it?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(y,v){let D;return y?v===null||v===1014||v===1020?D=t.DEPTH24_STENCIL8:v===1015?D=t.DEPTH32F_STENCIL8:v===1012&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?D=t.DEPTH_COMPONENT24:v===1015?D=t.DEPTH_COMPONENT32F:v===1012&&(D=t.DEPTH_COMPONENT16),D}function w(y,v){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function F(y){const v=y.target;v.removeEventListener("dispose",F),b(v),v.isVideoTexture&&h.delete(v)}function C(y){const v=y.target;v.removeEventListener("dispose",C),ee(v)}function b(y){const v=i.get(y);if(v.__webglInit===void 0)return;const D=y.source,q=p.get(D);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(y),Object.keys(q).length===0&&p.delete(D)}i.remove(y)}function O(y){const v=i.get(y);t.deleteTexture(v.__webglTexture);const D=y.source,q=p.get(D);delete q[v.__cacheKey],a.memory.textures--}function ee(y){const v=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)t.deleteFramebuffer(v.__webglFramebuffer[q][$]);else t.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)t.deleteFramebuffer(v.__webglFramebuffer[q]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=y.textures;for(let q=0,$=D.length;q<$;q++){const X=i.get(D[q]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(y)}let g=0;function E(){g=0}function V(){const y=g;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),g+=1,y}function k(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function G(y,v){const D=i.get(y);if(y.isVideoTexture&&be(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(D,y,v);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+v)}function j(y,v){const D=i.get(y);if(y.version>0&&D.__version!==y.version){je(D,y,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+v)}function B(y,v){const D=i.get(y);if(y.version>0&&D.__version!==y.version){je(D,y,v);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+v)}function J(y,v){const D=i.get(y);if(y.version>0&&D.__version!==y.version){W(D,y,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+v)}const H={1e3:t.REPEAT,1001:t.CLAMP_TO_EDGE,1002:t.MIRRORED_REPEAT},oe={1003:t.NEAREST,1004:t.NEAREST_MIPMAP_NEAREST,1005:t.NEAREST_MIPMAP_LINEAR,1006:t.LINEAR,1007:t.LINEAR_MIPMAP_NEAREST,1008:t.LINEAR_MIPMAP_LINEAR},le={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ge(y,v){if(v.type===1015&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,H[v.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,H[v.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,H[v.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,oe[v.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(y,v){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",F));const q=v.source;let $=p.get(q);$===void 0&&($={},p.set(q,$));const X=k(v);if(X!==y.__cacheKey){$[X]===void 0&&($[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[X].usedTimes++;const ve=$[y.__cacheKey];ve!==void 0&&($[y.__cacheKey].usedTimes--,ve.usedTimes===0&&O(v)),y.__cacheKey=X,y.__webglTexture=$[X].texture}return D}function je(y,v,D){let q=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=t.TEXTURE_3D);const $=Ge(y,v),X=v.source;n.bindTexture(q,y.__webglTexture,t.TEXTURE0+D);const ve=i.get(X);if(X.version!==ve.__version||$===!0){n.activeTexture(t.TEXTURE0+D);const ne=Xe.getPrimaries(Xe.workingColorSpace),he=v.colorSpace===yn?null:Xe.getPrimaries(v.colorSpace),He=v.colorSpace===yn||ne===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let K=x(v.image,!1,s.maxTextureSize);K=tt(v,K);const de=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type);let Ce=T(v.internalFormat,de,Ae,v.colorSpace,v.isVideoTexture);ge(q,v);let ue;const Ne=v.mipmaps,Pe=v.isVideoTexture!==!0,et=ve.__version===void 0||$===!0,R=X.dataReady,re=w(v,K);if(v.isDepthTexture)Ce=S(v.format===1027,v.type),et&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,Ce,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,Ce,K.width,K.height,0,de,Ae,null));else if(v.isDataTexture)if(Ne.length>0){Pe&&et&&n.texStorage2D(t.TEXTURE_2D,re,Ce,Ne[0].width,Ne[0].height);for(let z=0,Y=Ne.length;z<Y;z++)ue=Ne[z],Pe?R&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,Ae,ue.data):n.texImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,de,Ae,ue.data);v.generateMipmaps=!1}else Pe?(et&&n.texStorage2D(t.TEXTURE_2D,re,Ce,K.width,K.height),R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,de,Ae,K.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,K.width,K.height,0,de,Ae,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ce,Ne[0].width,Ne[0].height,K.depth);for(let z=0,Y=Ne.length;z<Y;z++)if(ue=Ne[z],v.format!==1023)if(de!==null)if(Pe){if(R)if(v.layerUpdates.size>0){const ie=go(ue.width,ue.height,v.format,v.type);for(const ae of v.layerUpdates){const Be=ue.data.subarray(ae*ie/ue.data.BYTES_PER_ELEMENT,(ae+1)*ie/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,ae,ue.width,ue.height,1,de,Be,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,K.depth,de,ue.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Ce,ue.width,ue.height,K.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,K.depth,de,Ae,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Ce,ue.width,ue.height,K.depth,0,de,Ae,ue.data)}else{Pe&&et&&n.texStorage2D(t.TEXTURE_2D,re,Ce,Ne[0].width,Ne[0].height);for(let z=0,Y=Ne.length;z<Y;z++)ue=Ne[z],v.format!==1023?de!==null?Pe?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?R&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ue.width,ue.height,de,Ae,ue.data):n.texImage2D(t.TEXTURE_2D,z,Ce,ue.width,ue.height,0,de,Ae,ue.data)}else if(v.isDataArrayTexture)if(Pe){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Ce,K.width,K.height,K.depth),R)if(v.layerUpdates.size>0){const z=go(K.width,K.height,v.format,v.type);for(const Y of v.layerUpdates){const ie=K.data.subarray(Y*z/K.data.BYTES_PER_ELEMENT,(Y+1)*z/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,K.width,K.height,1,de,Ae,ie)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,de,Ae,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,K.width,K.height,K.depth,0,de,Ae,K.data);else if(v.isData3DTexture)Pe?(et&&n.texStorage3D(t.TEXTURE_3D,re,Ce,K.width,K.height,K.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,de,Ae,K.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,K.width,K.height,K.depth,0,de,Ae,K.data);else if(v.isFramebufferTexture){if(et)if(Pe)n.texStorage2D(t.TEXTURE_2D,re,Ce,K.width,K.height);else{let z=K.width,Y=K.height;for(let ie=0;ie<re;ie++)n.texImage2D(t.TEXTURE_2D,ie,Ce,z,Y,0,de,Ae,null),z>>=1,Y>>=1}}else if(Ne.length>0){if(Pe&&et){const z=Re(Ne[0]);n.texStorage2D(t.TEXTURE_2D,re,Ce,z.width,z.height)}for(let z=0,Y=Ne.length;z<Y;z++)ue=Ne[z],Pe?R&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,de,Ae,ue):n.texImage2D(t.TEXTURE_2D,z,Ce,de,Ae,ue);v.generateMipmaps=!1}else if(Pe){if(et){const z=Re(K);n.texStorage2D(t.TEXTURE_2D,re,Ce,z.width,z.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ae,K)}else n.texImage2D(t.TEXTURE_2D,0,Ce,de,Ae,K);d(v)&&f(q),ve.__version=X.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function W(y,v,D){if(v.image.length!==6)return;const q=Ge(y,v),$=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+D);const X=i.get($);if($.version!==X.__version||q===!0){n.activeTexture(t.TEXTURE0+D);const ve=Xe.getPrimaries(Xe.workingColorSpace),ne=v.colorSpace===yn?null:Xe.getPrimaries(v.colorSpace),he=v.colorSpace===yn||ve===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!He&&!K?de[Y]=x(v.image[Y],!0,s.maxCubemapSize):de[Y]=K?v.image[Y].image:v.image[Y],de[Y]=tt(v,de[Y]);const Ae=de[0],Ce=r.convert(v.format,v.colorSpace),ue=r.convert(v.type),Ne=T(v.internalFormat,Ce,ue,v.colorSpace),Pe=v.isVideoTexture!==!0,et=X.__version===void 0||q===!0,R=$.dataReady;let re=w(v,Ae);ge(t.TEXTURE_CUBE_MAP,v);let z;if(He){Pe&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Ne,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){z=de[Y].mipmaps;for(let ie=0;ie<z.length;ie++){const ae=z[ie];v.format!==1023?Ce!==null?Pe?R&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,ae.width,ae.height,Ce,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,ae.width,ae.height,Ce,ue,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Ne,ae.width,ae.height,0,Ce,ue,ae.data)}}}else{if(z=v.mipmaps,Pe&&et){z.length>0&&re++;const Y=Re(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(K){Pe?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,Ce,ue,de[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,de[Y].width,de[Y].height,0,Ce,ue,de[Y].data);for(let ie=0;ie<z.length;ie++){const Be=z[ie].image[Y].image;Pe?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,Be.width,Be.height,Ce,ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Ne,Be.width,Be.height,0,Ce,ue,Be.data)}}else{Pe?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,ue,de[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,Ce,ue,de[Y]);for(let ie=0;ie<z.length;ie++){const ae=z[ie];Pe?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,Ce,ue,ae.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Ne,Ce,ue,ae.image[Y])}}}d(v)&&f(t.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Z(y,v,D,q,$,X){const ve=r.convert(D.format,D.colorSpace),ne=r.convert(D.type),he=T(D.internalFormat,ve,ne,D.colorSpace);if(!i.get(v).__hasExternalTextures){const K=Math.max(1,v.width>>X),de=Math.max(1,v.height>>X);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,X,he,K,de,v.depth,0,ve,ne,null):n.texImage2D($,X,he,K,de,0,ve,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,$,i.get(D).__webglTexture,0,Ue(v)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,$,i.get(D).__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(y,v,D){if(t.bindRenderbuffer(t.RENDERBUFFER,y),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=S(v.stencilBuffer,$),ve=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=Ue(v);ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,X,v.width,v.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,X,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,X,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,y)}else{const q=v.textures;for(let $=0;$<q.length;$++){const X=q[$],ve=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),he=T(X.internalFormat,ve,ne,X.colorSpace),He=Ue(v);D&&ze(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,he,v.width,v.height):ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,he,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,he,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const q=i.get(v.depthTexture).__webglTexture,$=Ue(v);if(v.depthTexture.format===1026)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(v.depthTexture.format===1027)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Le(y){const v=i.get(y),D=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ce(v.__webglFramebuffer,y)}else if(D){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=t.createRenderbuffer(),pe(v.__webglDepthbuffer[q],y,!1);else{const $=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),pe(v.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,$)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(y,v,D){const q=i.get(y);v!==void 0&&Z(q.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Le(y)}function Fe(y){const v=y.texture,D=i.get(y),q=i.get(v);y.addEventListener("dispose",C);const $=y.textures,X=y.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=v.version,a.memory.textures++),X){D.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ne]=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[ne][he]=t.createFramebuffer()}else D.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)D.__webglFramebuffer[ne]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ve)for(let ne=0,he=$.length;ne<he;ne++){const He=i.get($[ne]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&ze(y)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const he=$[ne];D.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);const He=r.convert(he.format,he.colorSpace),K=r.convert(he.type),de=T(he.internalFormat,He,K,he.colorSpace,y.isXRRenderTarget===!0),Ae=Ue(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,D.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(D.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ge(t.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Z(D.__webglFramebuffer[ne][he],y,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else Z(D.__webglFramebuffer[ne],y,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(v)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ne=0,he=$.length;ne<he;ne++){const He=$[ne],K=i.get(He);n.bindTexture(t.TEXTURE_2D,K.__webglTexture),ge(t.TEXTURE_2D,He),Z(D.__webglFramebuffer,y,He,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),d(He)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,q.__webglTexture),ge(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)Z(D.__webglFramebuffer[he],y,v,t.COLOR_ATTACHMENT0,ne,he);else Z(D.__webglFramebuffer,y,v,t.COLOR_ATTACHMENT0,ne,0);d(v)&&f(ne),n.unbindTexture()}y.depthBuffer&&Le(y)}function Qe(y){const v=y.textures;for(let D=0,q=v.length;D<q;D++){const $=v[D];if(d($)){const X=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get($).__webglTexture;n.bindTexture(X,ve),f(X),n.unbindTexture()}}}const Oe=[],A=[];function Pt(y){if(y.samples>0){if(ze(y)===!1){const v=y.textures,D=y.width,q=y.height;let $=t.COLOR_BUFFER_BIT;const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(y),ne=v.length>1;if(ne)for(let he=0;he<v.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<v.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const He=i.get(v[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,D,q,0,0,D,q,$,t.NEAREST),l===!0&&(Oe.length=0,A.length=0,Oe.push(t.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Oe.push(X),A.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,A)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<v.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const He=i.get(v[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Ue(y){return Math.min(s.maxSamples,y.samples)}function ze(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function tt(y,v){const D=y.colorSpace,q=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==mn&&D!==yn&&(Xe.getTransfer(D)===it?(q!==1023||$!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function Re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=we,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ze}function pg(t,e){function n(i,s=yn){let r;const a=Xe.getTransfer(s);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1024)return t.LUMINANCE;if(i===1025)return t.LUMINANCE_ALPHA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class mg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const d=n.getJointPose(x,i),f=this._getHandJoint(c,x);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`;class xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fn({vertexShader:vg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends ui{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,_=null;const x=new xg,d=n.getContextAttributes();let f=null,T=null;const S=[],w=[],F=new ke;let C=null;const b=new Ht;b.layers.enable(1),b.viewport=new lt;const O=new Ht;O.layers.enable(2),O.viewport=new lt;const ee=[b,O],g=new mg;g.layers.enable(1),g.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=S[W];return Z===void 0&&(Z=new Rr,S[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=S[W];return Z===void 0&&(Z=new Rr,S[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=S[W];return Z===void 0&&(Z=new Rr,S[W]=Z),Z.getHandSpace()};function k(W){const Z=w.indexOf(W.inputSource);if(Z===-1)return;const pe=S[Z];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||a),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let W=0;W<S.length;W++){const Z=w[W];Z!==null&&(w[W]=null,S[W].disconnect(Z))}E=null,V=null,x.reset(),e.setRenderTarget(f),m=null,p=null,u=null,s=null,T=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const Z={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,Z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new An(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Z=null,pe=null,ce=null;d.depth&&(ce=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=d.stencil?1027:1026,pe=d.stencil?1020:1014);const Le={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,n),p=u.createProjectionLayer(Le),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),T=new An(p.textureWidth,p.textureHeight,{format:1023,type:1009,depthTexture:new qo(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let Z=0;Z<W.removed.length;Z++){const pe=W.removed[Z],ce=w.indexOf(pe);ce>=0&&(w[ce]=null,S[ce].disconnect(pe))}for(let Z=0;Z<W.added.length;Z++){const pe=W.added[Z];let ce=w.indexOf(pe);if(ce===-1){for(let we=0;we<S.length;we++)if(we>=w.length){w.push(pe),ce=we;break}else if(w[we]===null){w[we]=pe,ce=we;break}if(ce===-1)break}const Le=S[ce];Le&&Le.connect(pe)}}const B=new I,J=new I;function H(W,Z,pe){B.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const ce=B.distanceTo(J),Le=Z.projectionMatrix.elements,we=pe.projectionMatrix.elements,Fe=Le[14]/(Le[10]-1),Qe=Le[14]/(Le[10]+1),Oe=(Le[9]+1)/Le[5],A=(Le[9]-1)/Le[5],Pt=(Le[8]-1)/Le[0],Ue=(we[8]+1)/we[0],ze=Fe*Pt,be=Fe*Ue,tt=ce/(-Pt+Ue),Re=tt*-Pt;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Re),W.translateZ(tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const y=Fe+tt,v=Qe+tt,D=ze-Re,q=be+(ce-Re),$=Oe*Qe/v*y,X=A*Qe/v*y;W.projectionMatrix.makePerspective(D,q,$,X,y,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Z=W.near,pe=W.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),g.near=O.near=b.near=Z,g.far=O.far=b.far=pe,(E!==g.near||V!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,V=g.far);const ce=W.parent,Le=g.cameras;oe(g,ce);for(let we=0;we<Le.length;we++)oe(Le[we],ce);Le.length===2?H(g,b,O):g.projectionMatrix.copy(b.projectionMatrix),le(W,g,ce)};function le(W,Z,pe){pe===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let ge=null;function Ge(W,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ce=!1;pe.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let we=0;we<pe.length;we++){const Fe=pe[we];let Qe=null;if(m!==null)Qe=m.getViewport(Fe);else{const A=u.getViewSubImage(p,Fe);Qe=A.viewport,we===0&&(e.setRenderTargetTextures(T,A.colorTexture,p.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(T))}let Oe=ee[we];Oe===void 0&&(Oe=new Ht,Oe.layers.enable(we),Oe.viewport=new lt,ee[we]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(g.matrix.copy(Oe.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(Oe)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const we=u.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&x.init(e,we,s.renderState)}}for(let pe=0;pe<S.length;pe++){const ce=w[pe],Le=S[pe];ce!==null&&Le!==void 0&&Le.update(ce,Z,c||a)}ge&&ge(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const je=new Xo;je.setAnimationLoop(Ge),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const On=new rn,Eg=new st;function Sg(t,e){function n(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Vo(t)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,T,S,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,w)):f.isMeshMatcapMaterial?(r(d,f),_(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),x(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,T,S):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,n(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,n(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,n(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===1&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,n(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===1&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,n(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,n(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,w=T.envMapRotation;S&&(d.envMap.value=S,On.copy(w),On.x*=-1,On.y*=-1,On.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(On)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,n(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,T,S){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*T,d.scale.value=S*.5,f.map&&(d.map.value=f.map,n(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,n(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,n(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,n(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,T){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function x(d,f){const T=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yg(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const w=S.program;i.uniformBlockBinding(T,w)}function c(T,S){let w=s[T.id];w===void 0&&(_(T),w=h(T),s[T.id]=w,T.addEventListener("dispose",d));const F=S.program;i.updateUBOMapping(T,F);const C=e.render.frame;r[T.id]!==C&&(p(T),r[T.id]=C)}function h(T){const S=u();T.__bindingPointIndex=S;const w=t.createBuffer(),F=T.__size,C=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,F,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,w),w}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){const S=s[T.id],w=T.uniforms,F=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,b=w.length;C<b;C++){const O=Array.isArray(w[C])?w[C]:[w[C]];for(let ee=0,g=O.length;ee<g;ee++){const E=O[ee];if(m(E,C,ee,F)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let j=0;j<k.length;j++){const B=k[j],J=x(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,V+G,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(T,S,w,F){const C=T.value,b=S+"_"+w;if(F[b]===void 0)return typeof C=="number"||typeof C=="boolean"?F[b]=C:F[b]=C.clone(),!0;{const O=F[b];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return F[b]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(T){const S=T.uniforms;let w=0;const F=16;for(let b=0,O=S.length;b<O;b++){const ee=Array.isArray(S[b])?S[b]:[S[b]];for(let g=0,E=ee.length;g<E;g++){const V=ee[g],k=Array.isArray(V.value)?V.value:[V.value];for(let G=0,j=k.length;G<j;G++){const B=k[G],J=x(B),H=w%F,oe=H%J.boundary,le=H+oe;w+=oe,le!==0&&F-le<J.storage&&(w+=F-le),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=J.storage}}}const C=w%F;return C>0&&(w+=F-C),T.__size=w,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function d(T){const S=T.target;S.removeEventListener("dispose",d);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const T in s)t.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class wg{constructor(e={}){const{canvas:n=cd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,d=null;const f=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=0,this.toneMappingExposure=1;const S=this;let w=!1,F=0,C=0,b=null,O=-1,ee=null;const g=new lt,E=new lt;let V=null;const k=new Ke(0);let G=0,j=n.width,B=n.height,J=1,H=null,oe=null;const le=new lt(0,0,j,B),ge=new lt(0,0,j,B);let Ge=!1;const je=new ea;let W=!1,Z=!1;const pe=new st,ce=new st,Le=new I,we=new lt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Oe(){return b===null?J:1}let A=i;function Pt(M,L){return n.getContext(M,L)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jr}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",ae,!1),A===null){const L="webgl2";if(A=Pt(L,M),A===null)throw Pt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,ze,be,tt,Re,y,v,D,q,$,X,ve,ne,he,He,K,de,Ae,Ce,ue,Ne,Pe,et,R;function re(){Ue=new Rp(A),Ue.init(),Pe=new pg(A,Ue),ze=new Sp(A,Ue,e,Pe),be=new dg(A),ze.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),tt=new Ip(A),Re=new Zm,y=new fg(A,Ue,be,Re,ze,Pe,tt),v=new wp(S),D=new Cp(S),q=new Od(A),et=new Mp(A,q),$=new Lp(A,q,tt,et),X=new Up(A,$,q,tt),Ce=new Dp(A,ze,y),K=new yp(Re),ve=new jm(S,v,D,Ue,ze,et,K),ne=new Sg(S,Re),he=new Jm,He=new sg(Ue),Ae=new xp(S,v,D,be,X,p,l),de=new cg(S,X,ze),R=new yg(A,tt,ze,be),ue=new Ep(A,Ue,tt),Ne=new Pp(A,Ue,tt),tt.programs=ve.programs,S.capabilities=ze,S.extensions=Ue,S.properties=Re,S.renderLists=he,S.shadowMap=de,S.state=be,S.info=tt}re();const z=new Mg(S,A);this.xr=z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(j,B,!1))},this.getSize=function(M){return M.set(j,B)},this.setSize=function(M,L,U=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,B=L,n.width=Math.floor(M*J),n.height=Math.floor(L*J),U===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(j*J,B*J).floor()},this.setDrawingBufferSize=function(M,L,U){j=M,B=L,J=U,n.width=Math.floor(M*U),n.height=Math.floor(L*U),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(g)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,L,U,N){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,L,U,N),be.viewport(g.copy(le).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,L,U,N){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,L,U,N),be.scissor(E.copy(ge).multiplyScalar(J).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(M){be.setScissorTest(Ge=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,L=!0,U=!0){let N=0;if(M){let P=!1;if(b!==null){const Q=b.texture.format;P=Q===1033||Q===1031||Q===1029}if(P){const Q=b.texture.type,se=Q===1009||Q===1014||Q===1012||Q===1020||Q===1017||Q===1018,fe=Ae.getClearColor(),me=Ae.getClearAlpha(),Ee=fe.r,Te=fe.g,_e=fe.b;se?(m[0]=Ee,m[1]=Te,m[2]=_e,m[3]=me,A.clearBufferuiv(A.COLOR,0,m)):(_[0]=Ee,_[1]=Te,_[2]=_e,_[3]=me,A.clearBufferiv(A.COLOR,0,_))}else N|=A.COLOR_BUFFER_BIT}L&&(N|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(N|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),He.dispose(),Re.dispose(),v.dispose(),D.dispose(),X.dispose(),et.dispose(),R.dispose(),ve.dispose(),z.dispose(),z.removeEventListener("sessionstart",xa),z.removeEventListener("sessionend",Ma),Pn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=tt.autoReset,L=de.enabled,U=de.autoUpdate,N=de.needsUpdate,P=de.type;re(),tt.autoReset=M,de.enabled=L,de.autoUpdate=U,de.needsUpdate=N,de.type=P}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Be(M){const L=M.target;L.removeEventListener("dispose",Be),ct(L)}function ct(M){At(M),Re.remove(M)}function At(M){const L=Re.get(M).programs;L!==void 0&&(L.forEach(function(U){ve.releaseProgram(U)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,U,N,P,Q){L===null&&(L=Fe);const se=P.isMesh&&P.matrixWorld.determinant()<0,fe=Gh(M,L,U,N,P);be.setMaterial(N,se);let me=U.index,Ee=1;if(N.wireframe===!0){if(me=$.getWireframeAttribute(U),me===void 0)return;Ee=2}const Te=U.drawRange,_e=U.attributes.position;let Ze=Te.start*Ee,nt=(Te.start+Te.count)*Ee;Q!==null&&(Ze=Math.max(Ze,Q.start*Ee),nt=Math.min(nt,(Q.start+Q.count)*Ee)),me!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,me.count)):_e!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,_e.count));const at=nt-Ze;if(at<0||at===1/0)return;et.setup(P,N,fe,U,me);let It,qe=ue;if(me!==null&&(It=q.get(me),qe=Ne,qe.setIndex(It)),P.isMesh)N.wireframe===!0?(be.setLineWidth(N.wireframeLinewidth*Oe()),qe.setMode(A.LINES)):qe.setMode(A.TRIANGLES);else if(P.isLine){let xe=N.linewidth;xe===void 0&&(xe=1),be.setLineWidth(xe*Oe()),P.isLineSegments?qe.setMode(A.LINES):P.isLineLoop?qe.setMode(A.LINE_LOOP):qe.setMode(A.LINE_STRIP)}else P.isPoints?qe.setMode(A.POINTS):P.isSprite&&qe.setMode(A.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)qe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))qe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xe=P._multiDrawStarts,vt=P._multiDrawCounts,Ye=P._multiDrawCount,Gt=me?q.get(me).bytesPerElement:1,Wn=Re.get(N).currentProgram.getUniforms();for(let Dt=0;Dt<Ye;Dt++)Wn.setValue(A,"_gl_DrawID",Dt),qe.render(xe[Dt]/Gt,vt[Dt])}else if(P.isInstancedMesh)qe.renderInstances(Ze,at,P.count);else if(U.isInstancedBufferGeometry){const xe=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,vt=Math.min(U.instanceCount,xe);qe.renderInstances(Ze,at,vt)}else qe.render(Ze,at)};function We(M,L,U){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,Qi(M,L,U),M.side=0,M.needsUpdate=!0,Qi(M,L,U),M.side=2):Qi(M,L,U)}this.compile=function(M,L,U=null){U===null&&(U=M),d=He.get(U),d.init(L),T.push(d),U.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),M!==U&&M.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights();const N=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Q=P.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const fe=Q[se];We(fe,U,P),N.add(fe)}else We(Q,U,P),N.add(Q)}),T.pop(),d=null,N},this.compileAsync=function(M,L,U=null){const N=this.compile(M,L,U);return new Promise(P=>{function Q(){if(N.forEach(function(se){Re.get(se).currentProgram.isReady()&&N.delete(se)}),N.size===0){P(M);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ct=null;function an(M){Ct&&Ct(M)}function xa(){Pn.stop()}function Ma(){Pn.start()}const Pn=new Xo;Pn.setAnimationLoop(an),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(M){Ct=M,z.setAnimationLoop(M),M===null?Pn.stop():Pn.start()},z.addEventListener("sessionstart",xa),z.addEventListener("sessionend",Ma),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,L,b),d=He.get(M,T.length),d.init(L),T.push(d),ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),je.setFromProjectionMatrix(ce),Z=this.localClippingEnabled,W=K.init(this.clippingPlanes,Z),x=he.get(M,f.length),x.init(),f.push(x),z.enabled===!0&&z.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Js(Q,L,-1/0,S.sortObjects)}Js(M,L,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(H,oe),Qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Qe&&Ae.addToRenderList(x,M),this.info.render.frame++,W===!0&&K.beginShadows();const U=d.state.shadowsArray;de.render(U,M,L),W===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=x.opaque,P=x.transmissive;if(d.setupLights(),L.isArrayCamera){const Q=L.cameras;if(P.length>0)for(let se=0,fe=Q.length;se<fe;se++){const me=Q[se];Sa(N,P,M,me)}Qe&&Ae.render(M);for(let se=0,fe=Q.length;se<fe;se++){const me=Q[se];Ea(x,M,me,me.viewport)}}else P.length>0&&Sa(N,P,M,L),Qe&&Ae.render(M),Ea(x,M,L);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(S,M,L),et.resetDefaultState(),O=-1,ee=null,T.pop(),T.length>0?(d=T[T.length-1],W===!0&&K.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Js(M,L,U,N){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||je.intersectsSprite(M)){N&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const se=X.update(M),fe=M.material;fe.visible&&x.push(M,se,fe,U,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||je.intersectsObject(M))){const se=X.update(M),fe=M.material;if(N&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),we.copy(se.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=se.groups;for(let Ee=0,Te=me.length;Ee<Te;Ee++){const _e=me[Ee],Ze=fe[_e.materialIndex];Ze&&Ze.visible&&x.push(M,se,Ze,U,we.z,_e)}}else fe.visible&&x.push(M,se,fe,U,we.z,null)}}const Q=M.children;for(let se=0,fe=Q.length;se<fe;se++)Js(Q[se],L,U,N)}function Ea(M,L,U,N){const P=M.opaque,Q=M.transmissive,se=M.transparent;d.setupLightsView(U),W===!0&&K.setGlobalState(S.clippingPlanes,U),N&&be.viewport(g.copy(N)),P.length>0&&Ji(P,L,U),Q.length>0&&Ji(Q,L,U),se.length>0&&Ji(se,L,U),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Sa(M,L,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new An(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=d.state.transmissionRenderTarget[N.id],se=N.viewport||g;Q.setSize(se.z,se.w);const fe=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(k),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),Qe&&Ae.render(U);const me=S.toneMapping;S.toneMapping=0;const Ee=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),W===!0&&K.setGlobalState(S.clippingPlanes,N),Ji(M,U,N),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let _e=0,Ze=L.length;_e<Ze;_e++){const nt=L[_e],at=nt.object,It=nt.geometry,qe=nt.material,xe=nt.group;if(qe.side===2&&at.layers.test(N.layers)){const vt=qe.side;qe.side=1,qe.needsUpdate=!0,ya(at,U,N,It,qe,xe),qe.side=vt,qe.needsUpdate=!0,Te=!0}}Te===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}S.setRenderTarget(fe),S.setClearColor(k,G),Ee!==void 0&&(N.viewport=Ee),S.toneMapping=me}function Ji(M,L,U){const N=L.isScene===!0?L.overrideMaterial:null;for(let P=0,Q=M.length;P<Q;P++){const se=M[P],fe=se.object,me=se.geometry,Ee=N===null?se.material:N,Te=se.group;fe.layers.test(U.layers)&&ya(fe,L,U,me,Ee,Te)}}function ya(M,L,U,N,P,Q){M.onBeforeRender(S,L,U,N,P,Q),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(S,L,U,N,M,Q),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,S.renderBufferDirect(U,L,N,P,M,Q),P.side=0,P.needsUpdate=!0,S.renderBufferDirect(U,L,N,P,M,Q),P.side=2):S.renderBufferDirect(U,L,N,P,M,Q),M.onAfterRender(S,L,U,N,P,Q)}function Qi(M,L,U){L.isScene!==!0&&(L=Fe);const N=Re.get(M),P=d.state.lights,Q=d.state.shadowsArray,se=P.state.version,fe=ve.getParameters(M,P.state,Q,L,U),me=ve.getProgramCacheKey(fe);let Ee=N.programs;N.environment=M.isMeshStandardMaterial?L.environment:null,N.fog=L.fog,N.envMap=(M.isMeshStandardMaterial?D:v).get(M.envMap||N.environment),N.envMapRotation=N.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",Be),Ee=new Map,N.programs=Ee);let Te=Ee.get(me);if(Te!==void 0){if(N.currentProgram===Te&&N.lightsStateVersion===se)return Ta(M,fe),Te}else fe.uniforms=ve.getUniforms(M),M.onBeforeCompile(fe,S),Te=ve.acquireProgram(fe,me),Ee.set(me,Te),N.uniforms=fe.uniforms;const _e=N.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_e.clippingPlanes=K.uniform),Ta(M,fe),N.needsLights=Xh(M),N.lightsStateVersion=se,N.needsLights&&(_e.ambientLightColor.value=P.state.ambient,_e.lightProbe.value=P.state.probe,_e.directionalLights.value=P.state.directional,_e.directionalLightShadows.value=P.state.directionalShadow,_e.spotLights.value=P.state.spot,_e.spotLightShadows.value=P.state.spotShadow,_e.rectAreaLights.value=P.state.rectArea,_e.ltc_1.value=P.state.rectAreaLTC1,_e.ltc_2.value=P.state.rectAreaLTC2,_e.pointLights.value=P.state.point,_e.pointLightShadows.value=P.state.pointShadow,_e.hemisphereLights.value=P.state.hemi,_e.directionalShadowMap.value=P.state.directionalShadowMap,_e.directionalShadowMatrix.value=P.state.directionalShadowMatrix,_e.spotShadowMap.value=P.state.spotShadowMap,_e.spotLightMatrix.value=P.state.spotLightMatrix,_e.spotLightMap.value=P.state.spotLightMap,_e.pointShadowMap.value=P.state.pointShadowMap,_e.pointShadowMatrix.value=P.state.pointShadowMatrix),N.currentProgram=Te,N.uniformsList=null,Te}function wa(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=ws.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Ta(M,L){const U=Re.get(M);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function Gh(M,L,U,N,P){L.isScene!==!0&&(L=Fe),y.resetTextureUnits();const Q=L.fog,se=N.isMeshStandardMaterial?L.environment:null,fe=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,me=(N.isMeshStandardMaterial?D:v).get(N.envMap||se),Ee=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Te=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),_e=!!U.morphAttributes.position,Ze=!!U.morphAttributes.normal,nt=!!U.morphAttributes.color;let at=0;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(at=S.toneMapping);const It=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,qe=It!==void 0?It.length:0,xe=Re.get(N),vt=d.state.lights;if(W===!0&&(Z===!0||M!==ee)){const Bt=M===ee&&N.id===O;K.setState(N,M,Bt)}let Ye=!1;N.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==vt.state.version||xe.outputColorSpace!==fe||P.isBatchedMesh&&xe.batching===!1||!P.isBatchedMesh&&xe.batching===!0||P.isBatchedMesh&&xe.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xe.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xe.instancing===!1||!P.isInstancedMesh&&xe.instancing===!0||P.isSkinnedMesh&&xe.skinning===!1||!P.isSkinnedMesh&&xe.skinning===!0||P.isInstancedMesh&&xe.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xe.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xe.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xe.instancingMorph===!1&&P.morphTexture!==null||xe.envMap!==me||N.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==K.numPlanes||xe.numIntersection!==K.numIntersection)||xe.vertexAlphas!==Ee||xe.vertexTangents!==Te||xe.morphTargets!==_e||xe.morphNormals!==Ze||xe.morphColors!==nt||xe.toneMapping!==at||xe.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,xe.__version=N.version);let Gt=xe.currentProgram;Ye===!0&&(Gt=Qi(N,L,P));let Wn=!1,Dt=!1,Qs=!1;const ot=Gt.getUniforms(),gn=xe.uniforms;if(be.useProgram(Gt.program)&&(Wn=!0,Dt=!0,Qs=!0),N.id!==O&&(O=N.id,Dt=!0),Wn||ee!==M){ze.reverseDepthBuffer?(pe.copy(M.projectionMatrix),dd(pe),ud(pe),ot.setValue(A,"projectionMatrix",pe)):ot.setValue(A,"projectionMatrix",M.projectionMatrix),ot.setValue(A,"viewMatrix",M.matrixWorldInverse);const Bt=ot.map.cameraPosition;Bt!==void 0&&Bt.setValue(A,Le.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ot.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,Dt=!0,Qs=!0)}if(P.isSkinnedMesh){ot.setOptional(A,P,"bindMatrix"),ot.setOptional(A,P,"bindMatrixInverse");const Bt=P.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ot.setValue(A,"boneTexture",Bt.boneTexture,y))}P.isBatchedMesh&&(ot.setOptional(A,P,"batchingTexture"),ot.setValue(A,"batchingTexture",P._matricesTexture,y),ot.setOptional(A,P,"batchingIdTexture"),ot.setValue(A,"batchingIdTexture",P._indirectTexture,y),ot.setOptional(A,P,"batchingColorTexture"),P._colorsTexture!==null&&ot.setValue(A,"batchingColorTexture",P._colorsTexture,y));const er=U.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&Ce.update(P,U,Gt),(Dt||xe.receiveShadow!==P.receiveShadow)&&(xe.receiveShadow=P.receiveShadow,ot.setValue(A,"receiveShadow",P.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(gn.envMap.value=me,gn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&L.environment!==null&&(gn.envMapIntensity.value=L.environmentIntensity),Dt&&(ot.setValue(A,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&Wh(gn,Qs),Q&&N.fog===!0&&ne.refreshFogUniforms(gn,Q),ne.refreshMaterialUniforms(gn,N,J,B,d.state.transmissionRenderTarget[M.id]),ws.upload(A,wa(xe),gn,y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ws.upload(A,wa(xe),gn,y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ot.setValue(A,"center",P.center),ot.setValue(A,"modelViewMatrix",P.modelViewMatrix),ot.setValue(A,"normalMatrix",P.normalMatrix),ot.setValue(A,"modelMatrix",P.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Bt=N.uniformsGroups;for(let tr=0,qh=Bt.length;tr<qh;tr++){const ba=Bt[tr];R.update(ba,Gt),R.bind(ba,Gt)}}return Gt}function Wh(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Xh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,L,U){Re.get(M.texture).__webglTexture=L,Re.get(M.depthTexture).__webglTexture=U;const N=Re.get(M);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const U=Re.get(M);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,U=0){b=M,F=L,C=U;let N=!0,P=null,Q=!1,se=!1;if(M){const me=Re.get(M);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),N=!1;else if(me.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(me.__hasExternalTextures)y.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _e=M.depthTexture;if(me.__boundDepthTexture!==_e){if(_e!==null&&Re.has(_e)&&(M.width!==_e.image.width||M.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(se=!0);const Te=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?P=Te[L][U]:P=Te[L],Q=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?P=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?P=Te[U]:P=Te,g.copy(M.viewport),E.copy(M.scissor),V=M.scissorTest}else g.copy(le).multiplyScalar(J).floor(),E.copy(ge).multiplyScalar(J).floor(),V=Ge;if(be.bindFramebuffer(A.FRAMEBUFFER,P)&&N&&be.drawBuffers(M,P),be.viewport(g),be.scissor(E),be.setScissorTest(V),Q){const me=Re.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,U)}else if(se){const me=Re.get(M.texture),Ee=L||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.__webglTexture,U||0,Ee)}O=-1},this.readRenderTargetPixels=function(M,L,U,N,P,Q,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){be.bindFramebuffer(A.FRAMEBUFFER,fe);try{const me=M.texture,Ee=me.format,Te=me.type;if(!ze.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-N&&U>=0&&U<=M.height-P&&A.readPixels(L,U,N,P,Pe.convert(Ee),Pe.convert(Te),Q)}finally{const me=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,L,U,N,P,Q,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){const me=M.texture,Ee=me.format,Te=me.type;if(!ze.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-N&&U>=0&&U<=M.height-P){be.bindFramebuffer(A.FRAMEBUFFER,fe);const _e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,_e),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),A.readPixels(L,U,N,P,Pe.convert(Ee),Pe.convert(Te),0);const Ze=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,Ze);const nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await hd(A,nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,_e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(_e),A.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,U=0){M.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const N=Math.pow(2,-U),P=Math.floor(M.image.width*N),Q=Math.floor(M.image.height*N),se=L!==null?L.x:0,fe=L!==null?L.y:0;y.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,U,0,0,se,fe,P,Q),be.unbindTexture()},this.copyTextureToTexture=function(M,L,U=null,N=null,P=0){M.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1],L=arguments[2],P=arguments[3]||0,U=null);let Q,se,fe,me,Ee,Te;U!==null?(Q=U.max.x-U.min.x,se=U.max.y-U.min.y,fe=U.min.x,me=U.min.y):(Q=M.image.width,se=M.image.height,fe=0,me=0),N!==null?(Ee=N.x,Te=N.y):(Ee=0,Te=0);const _e=Pe.convert(L.format),Ze=Pe.convert(L.type);y.setTexture2D(L,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),It=A.getParameter(A.UNPACK_SKIP_PIXELS),qe=A.getParameter(A.UNPACK_SKIP_ROWS),xe=A.getParameter(A.UNPACK_SKIP_IMAGES),vt=M.isCompressedTexture?M.mipmaps[P]:M.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,me),M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,P,Ee,Te,Q,se,_e,Ze,vt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,P,Ee,Te,vt.width,vt.height,_e,vt.data):A.texSubImage2D(A.TEXTURE_2D,P,Ee,Te,Q,se,_e,Ze,vt),A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,It),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,xe),P===0&&L.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(M,L,U=null,N=null,P=0){M.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,M=arguments[2],L=arguments[3],P=arguments[4]||0);let Q,se,fe,me,Ee,Te,_e,Ze,nt;const at=M.isCompressedTexture?M.mipmaps[P]:M.image;U!==null?(Q=U.max.x-U.min.x,se=U.max.y-U.min.y,fe=U.max.z-U.min.z,me=U.min.x,Ee=U.min.y,Te=U.min.z):(Q=at.width,se=at.height,fe=at.depth,me=0,Ee=0,Te=0),N!==null?(_e=N.x,Ze=N.y,nt=N.z):(_e=0,Ze=0,nt=0);const It=Pe.convert(L.format),qe=Pe.convert(L.type);let xe;if(L.isData3DTexture)y.setTexture3D(L,0),xe=A.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)y.setTexture2DArray(L,0),xe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const vt=A.getParameter(A.UNPACK_ROW_LENGTH),Ye=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Gt=A.getParameter(A.UNPACK_SKIP_PIXELS),Wn=A.getParameter(A.UNPACK_SKIP_ROWS),Dt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,me),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ee),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Te),M.isDataTexture||M.isData3DTexture?A.texSubImage3D(xe,P,_e,Ze,nt,Q,se,fe,It,qe,at.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(xe,P,_e,Ze,nt,Q,se,fe,It,at.data):A.texSubImage3D(xe,P,_e,Ze,nt,Q,se,fe,It,qe,at),A.pixelStorei(A.UNPACK_ROW_LENGTH,vt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ye),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Gt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Dt),P===0&&L.generateMipmaps&&A.generateMipmap(xe),be.unbindTexture()},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){F=0,C=0,b=null,be.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zr?"display-p3":"srgb",n.unpackColorSpace=Xe.workingColorSpace===zs?"display-p3":"srgb"}}class Dr extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Tg extends Et{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:1006,this.magFilter=r!==void 0?r:1006,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class bg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let s=0;const r=i.length;let a;n?a=n:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],p=i[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=n||(a.isVector2?new ke:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,s=[],r=[],a=[],o=new I,l=new st;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_t(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(n===!0){let m=Math.acos(_t(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vo(t,e,n,i,s){const r=(i-e)*.5,a=(s-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}class $v extends bg{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ke){const i=n,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(vo(o,l.x,c.x,h.x,u.x),vo(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new ke().fromArray(s))}return this}}class Yi extends Rn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,p=new I,m=[],_=[],x=[],d=[];for(let f=0;f<=i;f++){const T=[],S=f/i;let w=0;f===0&&a===0?w=.5/n:f===i&&l===Math.PI&&(w=-.5/n);for(let F=0;F<=n;F++){const C=F/n;u.x=-e*Math.cos(s+C*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),d.push(C+w,1-S),T.push(c++)}h.push(T)}for(let f=0;f<i;f++)for(let T=0;T<n;T++){const S=h[f][T+1],w=h[f][T],F=h[f+1][T],C=h[f+1][T+1];(f!==0||a>0)&&m.push(S,w,C),(f!==i-1||l<Math.PI)&&m.push(w,F,C)}this.setIndex(m),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ur={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Ag{constructor(e,n,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Cg=new Ag;let na=class{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";const _o=new st;class Rg{constructor(e,n,i=0,s=1/0){this.ray=new Bo(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return _o.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_o),this}intersectObject(e,n=!0,i=[]){return Nr(e,this,i,n),i.sort(xo),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nr(e[s],this,i,n);return i.sort(xo),i}}function xo(t,e){return t.distance-e.distance}function Nr(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let a=0,o=r.length;a<o;a++)Nr(r[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);/*!
 * Photo Sphere Viewer 5.11.5
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Lg=Object.defineProperty,ia=(t,e)=>{for(var n in e)Lg(t,n,{get:e[n],enumerable:!0})},Hi={};ia(Hi,{ACTIONS:()=>nl,ANIMATION_MIN_DURATION:()=>Fr,CAPTURE_EVENTS_CLASS:()=>$i,CTRLZOOM_TIMEOUT:()=>tl,DBLCLICK_DELAY:()=>Jo,EASINGS:()=>Ts,ICONS:()=>jt,IDS:()=>xt,KEY_CODES:()=>mt,LONGTOUCH_DELAY:()=>Qo,MOVE_THRESHOLD:()=>Ko,SPHERE_RADIUS:()=>Vn,TWOFINGERSOVERLAY_DELAY:()=>el,VIEWER_DATA:()=>Cn});var Pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,Ig='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Ng=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,Og=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,Bg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Fr=500,Ko=4,Jo=300,Qo=500,el=100,tl=2e3,Vn=10,Cn="photoSphereViewer",$i="psv--capture-event",nl=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(nl||{}),xt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},mt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},jt={arrow:Pg,close:Ig,download:Dg,fullscreenIn:Ug,fullscreenOut:Ng,info:Fg,menu:Og,zoomIn:Bg,zoomOut:kg},Ts={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},ye={};ia(ye,{Animation:()=>Fs,Dynamic:()=>wi,MultiDynamic:()=>wl,PressHandler:()=>Ys,Slider:()=>bl,SliderDirection:()=>Tl,addClasses:()=>sa,angle:()=>sl,applyEulerInverse:()=>Hr,checkClosedShadowDom:()=>Sl,checkStylesheet:()=>El,checkVersion:()=>ha,cleanCssPosition:()=>xl,clone:()=>Ws,createTexture:()=>zr,cssPositionIsOrdered:()=>ca,dasherize:()=>Wg,deepEqual:()=>gl,deepmerge:()=>pl,distance:()=>il,exitFullscreen:()=>fl,firstNonNull:()=>Kt,getAbortError:()=>Br,getAngle:()=>al,getClosest:()=>ll,getConfigParser:()=>qs,getElement:()=>ol,getEventTarget:()=>Is,getMatchingTarget:()=>cl,getPosition:()=>hl,getShortestArc:()=>rl,getStyleProperty:()=>tn,getTouchData:()=>Or,getXMPValue:()=>Ft,greatArcDistance:()=>Hg,hasParent:()=>Gg,invertResolvableBoolean:()=>Xs,isAbortError:()=>_l,isEmpty:()=>ml,isExtendedPosition:()=>la,isFullscreenEnabled:()=>dl,isNil:()=>gt,isPlainObject:()=>aa,logWarn:()=>Je,mergePanoData:()=>yl,parseAngle:()=>Qt,parsePoint:()=>Xg,parseSpeed:()=>Ml,removeClasses:()=>Vg,requestFullscreen:()=>ul,resolveBoolean:()=>oa,speedToDuration:()=>kr,sum:()=>zg,throttle:()=>ra,toggleClass:()=>Gs,wrap:()=>Ci});function Ci(t,e){let n=t%e;return n<0&&(n+=e),n}function zg(t){return t.reduce((e,n)=>e+n,0)}function il(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function sl(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function rl(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function al(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function Hg([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function ol(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Gs(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function sa(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function Vg(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function Gg(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function ll(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function Is(t){return(t==null?void 0:t.composedPath()[0])||null}function cl(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function hl(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function tn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Or(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:il(e,n),angle:sl(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var Ds;function dl(t,e=!1){return e?t===Ds:document.fullscreenElement===t}function ul(t,e=!1){e?(Ds=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function fl(t=!1){t?(Ds.classList.remove("psv-fullscreen-emulation"),Ds=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Wg(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function ra(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function aa(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function pl(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=i(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{typeof r[a]!="object"||!r[a]||!aa(r[a])?s[a]=r[a]:r[a]!==n&&(s[a]?i(s[a],r[a]):s[a]=i(null,r[a]))})):s=r,s}(t,e)}function Ws(t){return pl(null,t)}function ml(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function gt(t){return t==null}function Kt(...t){for(const e of t)if(!gt(e))return e;return null}function gl(t,e){if(t===e)return!0;if(Mo(t)&&Mo(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!gl(t[n],e[n]))return!1;return!0}else return!1}function Mo(t){return typeof t=="object"&&t!==null}var Me=class vl extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,vl)}};function oa(t,e){aa(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Xs(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Br(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function _l(t){return(t==null?void 0:t.name)==="AbortError"}function Je(t){console.warn(`PhotoSphereViewer: ${t}`)}function la(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function Ft(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var Eo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Us=["left","center","right"],Ns=["top","center","bottom"],So=[...Us,...Ns],zt="center";function Xg(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Eo[e[0]]?e=[e[0],zt]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Eo[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function xl(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===zt?t=[zt,zt]:Us.indexOf(t[0])!==-1?t=[zt,t[0]]:Ns.indexOf(t[0])!==-1&&(t=[t[0],zt])),t.length!==2||So.indexOf(t[0])===-1||So.indexOf(t[1])===-1?(Je(`Unparsable position ${t}`),null):!e&&t[0]===zt&&t[1]===zt?(Je("Invalid position center center"),null):(n&&!ca(t)&&(t=[t[1],t[0]]),t[1]===zt&&Us.indexOf(t[0])!==-1&&(t=[zt,t[0]]),t[0]===zt&&Ns.indexOf(t[1])!==-1&&(t=[t[1],zt]),t)):null}function ca(t){return Ns.indexOf(t[0])!==-1&&Us.indexOf(t[1])!==-1}function Ml(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ve.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Me(`Unknown speed unit "${s}"`)}}else e=t;return e}function kr(t,e){if(typeof t!="number"){const n=Ml(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function Qt(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Me(`Unknown angle "${t}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":i=Ve.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Me(`Unknown angle unit "${a}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new Me(`Unknown angle "${t}"`);return i=Ci(e?i+Math.PI:i,Math.PI*2),e?Ve.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function zr(t,e=!1){const n=new Et(t);return n.needsUpdate=!0,n.minFilter=e?1008:1006,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var yo=new Gn;function Hr(t,e){yo.setFromEuler(e).invert(),t.applyQuaternion(yo)}function qs(t,e){const n=function(i){const s=Ws({...t,...i}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:t[a]});else if(!(a in t)){Je(`Unknown option ${a}`);continue}r[a]=o}return r};return n.defaults=t,n.parsers=e||{},n}function El(t,e){tn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function ha(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function Sl(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function yl(t,e,n,i){if(!n&&!i){const r=Math.max(t,e*2),a=Math.round(r/2),o=Math.round((r-t)/2),l=Math.round((a-e)/2);n={fullWidth:r,fullHeight:a,croppedWidth:t,croppedHeight:e,croppedX:o,croppedY:l}}const s={isEquirectangular:!0,fullWidth:Kt(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:Kt(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:Kt(n==null?void 0:n.croppedWidth,i==null?void 0:i.croppedWidth,t),croppedHeight:Kt(n==null?void 0:n.croppedHeight,i==null?void 0:i.croppedHeight,e),croppedX:Kt(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX,0),croppedY:Kt(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY,0),poseHeading:Kt(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:Kt(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:Kt(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};return!s.fullWidth&&s.fullHeight?s.fullWidth=s.fullHeight*2:(!s.fullWidth||!s.fullHeight)&&(s.fullWidth=s.fullWidth??t,s.fullHeight=s.fullHeight??e),(s.croppedWidth!==t||s.croppedHeight!==e)&&Je(`Invalid panoData, croppedWidth/croppedHeight is not coherent with the loaded image.
        panoData: ${s.croppedWidth}x${s.croppedHeight}, image: ${t}x${e}`),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Je("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Je("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Je("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Je("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Je("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Fs=class{constructor(t){this.easing=Ts.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:Ts[t.easing]||Ts.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},wi=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Me("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?Ci(t,this.max):Ve.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?Ci(t,this.max):Ve.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?Ci(n,this.max):Ve.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},wl=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Ys=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Tl=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Tl||{}),bl=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=Ve.clamp((i.bottom-e)/i.height,0,1):s=Ve.clamp((t-i.left)/i.width,0,1),this.listener({value:s,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},Se={};ia(Se,{BeforeAnimateEvent:()=>da,BeforeRenderEvent:()=>Ri,BeforeRotateEvent:()=>Nl,ClickEvent:()=>Bl,ConfigChangedEvent:()=>Lt,DoubleClickEvent:()=>Gl,FullscreenEvent:()=>Li,HideNotificationEvent:()=>Pi,HideOverlayEvent:()=>Zl,HidePanelEvent:()=>wn,HideTooltipEvent:()=>tc,KeypressEvent:()=>Tn,LoadProgressEvent:()=>ac,ObjectEnterEvent:()=>Xc,ObjectEvent:()=>$s,ObjectHoverEvent:()=>Zc,ObjectLeaveEvent:()=>Vr,PanoramaErrorEvent:()=>pc,PanoramaLoadEvent:()=>cc,PanoramaLoadedEvent:()=>hi,PositionUpdatedEvent:()=>Ii,ReadyEvent:()=>Ui,RenderEvent:()=>bc,RollUpdatedEvent:()=>Di,ShowNotificationEvent:()=>Ni,ShowOverlayEvent:()=>Pc,ShowPanelEvent:()=>bn,ShowTooltipEvent:()=>Fc,SizeUpdatedEvent:()=>Fi,StopAllEvent:()=>Oi,TransitionDoneEvent:()=>vc,ViewerEvent:()=>$e,ZoomUpdatedEvent:()=>un});var Al=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Cl=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},$e=class extends Al{},Rl=class Ll extends $e{constructor(e,n){super(Ll.type,!0),this.position=e,this.zoomLevel=n}};Rl.type="before-animate";var da=Rl,Pl=class Il extends $e{constructor(e,n){super(Il.type),this.timestamp=e,this.elapsed=n}};Pl.type="before-render";var Ri=Pl,Dl=class Ul extends $e{constructor(e){super(Ul.type,!0),this.position=e}};Dl.type="before-rotate";var Nl=Dl,Fl=class Ol extends $e{constructor(e){super(Ol.type),this.data=e}};Fl.type="click";var Bl=Fl,kl=class zl extends $e{constructor(e){super(zl.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};kl.type="config-changed";var Lt=kl,Hl=class Vl extends $e{constructor(e){super(Vl.type),this.data=e}};Hl.type="dblclick";var Gl=Hl,Wl=class Xl extends $e{constructor(e){super(Xl.type),this.fullscreenEnabled=e}};Wl.type="fullscreen";var Li=Wl,ql=class Yl extends $e{constructor(e){super(Yl.type),this.notificationId=e}};ql.type="hide-notification";var Pi=ql,$l=class jl extends $e{constructor(e){super(jl.type),this.overlayId=e}};$l.type="hide-overlay";var Zl=$l,Kl=class Jl extends $e{constructor(e){super(Jl.type),this.panelId=e}};Kl.type="hide-panel";var wn=Kl,Ql=class ec extends $e{constructor(e){super(ec.type),this.tooltipData=e}};Ql.type="hide-tooltip";var tc=Ql,nc=class ic extends $e{constructor(e,n){super(ic.type,!0),this.key=e,this.originalEvent=n}};nc.type="key-press";var Tn=nc,sc=class rc extends $e{constructor(e){super(rc.type),this.progress=e}};sc.type="load-progress";var ac=sc,oc=class lc extends $e{constructor(e){super(lc.type),this.panorama=e}};oc.type="panorama-load";var cc=oc,hc=class dc extends $e{constructor(e){super(dc.type),this.data=e}};hc.type="panorama-loaded";var hi=hc,uc=class fc extends $e{constructor(e,n){super(fc.type),this.panorama=e,this.error=n}};uc.type="panorama-error";var pc=uc,mc=class gc extends $e{constructor(e){super(gc.type),this.completed=e}};mc.type="transition-done";var vc=mc,_c=class xc extends $e{constructor(e){super(xc.type),this.position=e}};_c.type="position-updated";var Ii=_c,Mc=class Ec extends $e{constructor(e){super(Ec.type),this.roll=e}};Mc.type="roll-updated";var Di=Mc,Sc=class yc extends $e{constructor(){super(yc.type)}};Sc.type="ready";var Ui=Sc,wc=class Tc extends $e{constructor(){super(Tc.type)}};wc.type="render";var bc=wc,Ac=class Cc extends $e{constructor(e){super(Cc.type),this.notificationId=e}};Ac.type="show-notification";var Ni=Ac,Rc=class Lc extends $e{constructor(e){super(Lc.type),this.overlayId=e}};Rc.type="show-overlay";var Pc=Rc,Ic=class Dc extends $e{constructor(e){super(Dc.type),this.panelId=e}};Ic.type="show-panel";var bn=Ic,Uc=class Nc extends $e{constructor(e,n){super(Nc.type),this.tooltip=e,this.tooltipData=n}};Uc.type="show-tooltip";var Fc=Uc,Oc=class Bc extends $e{constructor(e){super(Bc.type),this.size=e}};Oc.type="size-updated";var Fi=Oc,kc=class zc extends $e{constructor(){super(zc.type)}};kc.type="stop-all";var Oi=kc,Hc=class Vc extends $e{constructor(e){super(Vc.type),this.zoomLevel=e}};Hc.type="zoom-updated";var un=Hc,$s=class extends $e{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},Gc=class Wc extends $s{constructor(e,n,i,s){super(Wc.type,e,n,i,s)}};Gc.type="enter-object";var Xc=Gc,qc=class Yc extends $s{constructor(e,n,i,s){super(Yc.type,e,n,i,s)}};qc.type="leave-object";var Vr=qc,$c=class jc extends $s{constructor(e,n,i,s){super(jc.type,e,n,i,s)}};$c.type="hover-object";var Zc=$c,ua=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Me("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Me("Current adapter does not support texture coordinates.")}};ua.supportsDownload=!1;function wo(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof ua)return ha(e.id,e.VERSION,"5.11.5"),e}return null}var Ei=`${Cn}_touchSupport`,Mt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=$g(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=qg();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=Yg(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Mt.isWebGLSupported)throw new Me("WebGL 2 is not supported.");if(Mt.maxTextureWidth===0)throw new Me("Unable to detect system capabilities")}};function qg(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function Yg(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Ei in localStorage&&(t=localStorage[Ei]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{i(),localStorage[Ei]=!1,n(!1)},r=()=>{i(),localStorage[Ei]=!0,n(!0)},a=()=>{i(),localStorage[Ei]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:t,promise:e}}function $g(t){let e=t,n=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}r.width=0,r.height=0,n||(e/=2)}if(n)return e;throw new Me("Unable to detect system capabilities")}var jg=qs({backgroundColor:null,interpolateBackground:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Ve.isPowerOfTwo(t))throw new Me("EquirectangularAdapter resolution must be power of two.");return t},backgroundColor:t=>(t&&Je("EquirectangularAdapter.backgroundColor is deprecated, use 'canvasBackground' main option instead."),t),interpolateBackground:t=>(t&&Je("EquirectangularAdapter.interpolateBackground is not supported anymore."),!1)}),ji=class extends ua{constructor(t,e){super(t),this.config=jg(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.config.backgroundColor&&(t.config.canvasBackground=e.backgroundColor)}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(gt(t.textureX)||gt(t.textureY))throw new Me("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-i)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,n,i=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Me("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:n}:s={data:n,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?h=>this.viewer.loader.setProgress(h):null,s.path),a=i?await this.loadXMP(r):null,o=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(o,a));const l=yl(o.width,o.height,s.data,a),c=this.createEquirectangularTexture(o);return{panorama:t,texture:c,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta");if(n===-1)return null;const i=e.indexOf("</x:xmpmeta>",n);if(i===-1)return null;const s=e.substring(n,i);return s.includes("GPano:")?{fullWidth:Ft(s,"FullPanoWidthPixels"),fullHeight:Ft(s,"FullPanoHeightPixels"),croppedWidth:Ft(s,"CroppedAreaImageWidthPixels"),croppedHeight:Ft(s,"CroppedAreaImageHeightPixels"),croppedX:Ft(s,"CroppedAreaLeftPixels"),croppedY:Ft(s,"CroppedAreaTopPixels"),poseHeading:Ft(s,"PoseHeadingDegrees",!1),posePitch:Ft(s,"PosePitchDegrees",!1),poseRoll:Ft(s,"PoseRollDegrees",!1),initialHeading:Ft(s,"InitialViewHeadingDegrees",!1),initialPitch:Ft(s,"InitialViewPitchDegrees",!1),initialFov:Ft(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>Mt.maxTextureWidth){const e=Math.min(1,Mt.maxCanvasWidth/t.width),n=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),i=n.getContext("2d");return this.config.blur&&(i.filter=`blur(${n.width/2048}px)`),i.drawImage(t,0,0,n.width,n.height),zr(n)}return zr(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,n=t.croppedWidth/t.fullWidth*2*Math.PI,i=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new Yi(Vn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,n,i,s).scale(-1,1,1),a=new Wi({depthTest:!1,depthWrite:!1});return new Ot(r,a)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};ji.id="equirectangular";ji.VERSION="5.11.5";ji.supportsDownload=!0;var Kc=class extends ji{constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1})}async loadTexture(t,e){const n=await super.loadTexture(t,e,null,!1);return n.panoData=null,n}createMesh(){const t=new Yi(Vn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const a=s*3+r,o=n.getX(a),l=n.getY(a),c=n.getZ(a),h=.947;if(s<e.count/6){const u=o===0&&c===0?1:Math.acos(l)/Math.sqrt(o*o+c*c)*(2/Math.PI);e.setXY(a,o*(h/4)*u+1/4,c*(h/2)*u+1/2)}else{const u=o===0&&c===0?1:Math.acos(-l)/Math.sqrt(o*o+c*c)*(2/Math.PI);e.setXY(a,-o*(h/4)*u+3/4,c*(h/2)*u+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const i=new Wi({depthTest:!1,depthWrite:!1});return new Ot(t,i)}};Kc.id="dual-fisheye";Kc.VERSION="5.11.5";var Ln=class Jc{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Jc?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},Zg=qs({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),bt=class extends Ln{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=Zg(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===mt.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){oa(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Gs(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,sa(this.container.querySelector("svg"),"psv-button-svg")}},Kg=class extends bt{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},Vi=class extends bt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.info}),this.mode=0,this.viewer.addEventListener(Pi.type,this),this.viewer.addEventListener(Ni.type,this),this.viewer.addEventListener(wn.type,this),this.viewer.addEventListener(bn.type,this),this.viewer.addEventListener(Lt.type,this)}destroy(){this.viewer.removeEventListener(Pi.type,this),this.viewer.removeEventListener(Ni.type,this),this.viewer.removeEventListener(wn.type,this),this.viewer.removeEventListener(bn.type,this),this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){if(t instanceof Lt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof Pi?e=this.mode===1:t instanceof Ni?e=this.mode===1&&t.notificationId!==xt.DESCRIPTION:t instanceof wn?e=this.mode===2:t instanceof bn&&(e=this.mode===2&&t.panelId!==xt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(xt.DESCRIPTION);break;case 2:this.viewer.panel.hide(xt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:xt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:xt.DESCRIPTION,content:this.viewer.config.caption}))}};Vi.id="description";var Qc=class extends bt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:jt.download}),this.viewer.addEventListener(Lt.type,this),this.viewer.addEventListener(hi.type,this)}destroy(){this.viewer.removeEventListener(Lt.type,this),this.viewer.removeEventListener(hi.type,this),super.destroy()}handleEvent(t){t instanceof Lt?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof hi&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};Qc.id="download";var eh=class extends bt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.fullscreenIn,iconActive:jt.fullscreenOut}),this.viewer.addEventListener(Li.type,this)}destroy(){this.viewer.removeEventListener(Li.type,this),super.destroy()}handleEvent(t){t instanceof Li&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};eh.id="fullscreen";var Jg="psvButton",Qg=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${jt.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,bs=class extends bt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.menu}),this.viewer.addEventListener(bn.type,this),this.viewer.addEventListener(wn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(bn.type,this),this.viewer.removeEventListener(wn.type,this),super.destroy()}handleEvent(t){t instanceof bn?this.toggleActive(t.panelId===xt.MENU):t instanceof wn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:xt.MENU,content:Qg(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?ll(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[Jg]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(xt.MENU)}};bs.id="menu";function ev(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return jt.arrow.replace("rotate(0",`rotate(${e}`)}var Zi=class extends bt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ev(e)}),this.direction=e,this.handler=new Ys,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===mt.Enter&&this.__onMouseDown();break;case"keyup":t.key===mt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Xs(Mt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Zi.groupId="move";var th=class extends Zi{constructor(t){super(t,1)}};th.id="moveDown";var nh=class extends Zi{constructor(t){super(t,2)}};nh.id="moveLeft";var ih=class extends Zi{constructor(t){super(t,3)}};ih.id="moveRight";var sh=class extends Zi{constructor(t){super(t,0)}};sh.id="moveUp";var fa=class extends bt{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new Ys,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===mt.Enter&&this.__onMouseDown();break;case"keyup":t.key===mt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Xs(Mt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};fa.groupId="zoom";var rh=class extends fa{constructor(t){super(t,jt.zoomIn,0)}};rh.id="zoomIn";var ah=class extends fa{constructor(t){super(t,jt.zoomOut,1)}};ah.id="zoomOut";var pa=class extends bt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new bl(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(tn(this.container,"max-width"),10),this.viewer.addEventListener(un.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Ui.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(un.type,this),this.viewer.removeEventListener(Ui.type,this),super.destroy()}handleEvent(t){t instanceof un?this.__moveZoomValue(t.zoomLevel):t instanceof Ui&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Xs(Mt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};pa.id="zoomRange";pa.groupId="zoom";var oh=class extends Cl{constructor(t){super(),this.viewer=t}init(){}destroy(){}},ma=class extends oh{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[a,o]of Object.entries(t)){if(!(a in i.defaults)){Je(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){Je(`${r}: Option "${a}" cannot be updated`);continue}a in i.parsers&&(o=i.parsers[a](o,{rawConfig:e,defValue:i.defaults[a]})),this.config[a]=o}}};ma.readonlyOptions=[];function Gr(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof oh)return ha(e.id,e.VERSION,"5.11.5"),e}return null}var pn={panorama:null,container:null,adapter:[ji,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[mt.ArrowUp]:"ROTATE_UP",[mt.ArrowDown]:"ROTATE_DOWN",[mt.ArrowRight]:"ROTATE_RIGHT",[mt.ArrowLeft]:"ROTATE_LEFT",[mt.PageUp]:"ZOOM_IN",[mt.PageDown]:"ZOOM_OUT",[mt.Plus]:"ZOOM_IN",[mt.Minus]:"ZOOM_OUT"}},To={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Wr={container:t=>{if(!t)throw new Me("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[wo(t[0]),t[1]]:t=[wo(t),null]:t=e,!t[0])throw new Me("An undefined value was given for adapter.");if(!t[0].id)throw new Me("Adapter has no id.");return t[0].id==="little-planet"&&(Je("LittlePlanetAdapter support has been removed, use `{ fisheye: 2, maxFov: 130 }` to achieve similar effect."),t=e),t},defaultYaw:t=>Qt(t),defaultPitch:t=>Qt(t,!0),defaultZoomLvl:t=>Ve.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Je("maxFov cannot be lower than minFov"),t=e.maxFov),Ve.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Ve.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...pn.lang,...t}),keyboard:t=>t?typeof t=="object"?(Je("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):t==="always"?"always":"fullscreen":!1,keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[Gr(e[0]),e[1]]:e=[Gr(e),null],!e[0])throw new Me(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new Me(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Ws(pn.navbar):typeof t=="string"?t.split(/[ ,]/):t},tv=qs(pn,Wr),li=class extends bt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(Vi.id,!1))==null||t.autoSize(!0)}};li.id="caption";var Xr={},Os={};function ga(t,e){if(!t.id)throw new Me("Button id is required");if(Xr[t.id]=t,t.groupId&&(Os[t.groupId]=Os[t.groupId]||[]).push(t),e){const n=pn.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new Me(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[ah,pa,rh,Vi,li,Qc,eh,nh,ih,sh,th].forEach(t=>ga(t));var nv=class extends Ln{constructor(t){super(t,{className:`psv-navbar ${$i}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(li.id)!==-1&&t.indexOf(Vi.id)===-1&&t.splice(t.indexOf(li.id),0,Vi.id),t.forEach(e=>{typeof e=="object"?new Kg(this,e):Xr[e]?new Xr[e](this):Os[e]?Os[e].forEach(n=>{new n(this)}):Je(`Unknown button ${e}`)}),new bs(this),this.children.forEach(e=>{e instanceof bt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof li?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof bt&&i.id===t);return!n&&e&&Je(`button "${t}" not found in the navbar`),n}autoSize(){var i;this.children.forEach(s=>{s instanceof bt&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof bt&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(bs.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(bs.id).hide(!1)),(i=this.getButton(li.id,!1))==null||i.autoSize())}};Ur.enabled=!1;var ri={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){Ur.enabled&&(Je("ThreeJS cache should be disabled"),Ur.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},iv=class extends Ln{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=tn(this.loader,"color"),this.color=tn(this.canvas,"color"),this.border=parseInt(tn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(tn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Lt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){t instanceof Lt&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){const e=Ve.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+n,o=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}`),this.viewer.dispatchEvent(new ac(Math.round(t)))}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},sv=class extends Ln{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Ni(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Pi(e))}}},rv=class extends Ln{constructor(t){super(t,{className:`psv-overlay ${$i}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Tn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Tn.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Tn&&this.isVisible()&&this.state.dismissible&&t.key===mt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),"dissmisable"in t&&(Je('Replace "dissmisable" by "dismissible"'),t.dismissible=t.dissmisable),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Pc(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Zl(e))}}},av=200,Lr="psv-panel-content--no-interaction",ov=class extends Ln{constructor(t){super(t,{className:`psv-panel ${$i}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=jt.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Tn.type,this)}destroy(){this.viewer.removeEventListener(Tn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Tn.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Gs(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(Is(n))},this.state.keyHandler=n=>{n.key===mt.Enter&&t.clickHandler(Is(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new bn(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new wn(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Lr))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Lr)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===mt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Lr)}__resize(t,e){const n=t,i=e,s=Math.max(av,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},lv=class extends Ln{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Me("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Me("Initialized tooltip cannot be re-initialized");t.className&&sa(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Fc(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(tn(this.arrow,"border-top-width"),10),this.state.border=parseInt(tn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var o;if(this.state.state!==1&&this.state.state!==3)throw new Me("Uninitialized tooltip cannot be moved");t.box=t.box??((o=this.state.config)==null?void 0:o.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:xl(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const l=ca(i.posClass);s&&(i.posClass[l?0:1]=s),r&&(i.posClass[l?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const a=i.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new tc(this.state.data));const t=parseFloat(tn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,a=t.width,o=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-s,t.left=r+o-a,t.arrowTop=s,t.arrowLeft=a-o-n;break;case"top-center":t.top=i-c-s,t.left=r-a/2,t.arrowTop=s,t.arrowLeft=a/2-n;break;case"top-right":t.top=i-c-s,t.left=r-o,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=r+o-a,t.arrowTop=-n*2,t.arrowLeft=a-o-n;break;case"bottom-center":t.top=i+c,t.left=r-a/2,t.arrowTop=-n*2,t.arrowLeft=a/2-n;break;case"bottom-right":t.top=i+c,t.left=r-o,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+o-s,t.left=r-l-a,t.arrowTop=s-o-n,t.arrowLeft=a;break;case"center-left":t.top=i-s/2,t.left=r-l-a,t.arrowTop=s/2-n,t.arrowLeft=a;break;case"left-bottom":t.top=i-o,t.left=r-l-a,t.arrowTop=n,t.arrowLeft=a;break;case"right-top":t.top=i+o-s,t.left=r+l,t.arrowTop=s-o-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-o,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},cv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ki=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},Yt=new I,Ms=new rn(0,0,0,"ZXY"),hv=class extends Ki{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ve.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Ve.radToDeg(2*Math.atan(Math.tan(Ve.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!gt(e),s=!gt(n),r={};let a=null;if(i){const o=this.viewer.getPosition(),l=rl(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:e.pitch},a=kr(t,al(o,e))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(n-o);r.zoom={start:o,end:n},a===null&&(a=kr(t,Math.PI/4*l/100))}return a===null?typeof t=="number"?a=t:a=Fr:a=Math.max(Fr,a),{duration:a,properties:r}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??pn.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:t.transition==="fade-only"?(Je('PanoramaOptions transition "fade-only" value is deprecated, set transition.rotation=false instead.'),e={...n,rotation:!1}):typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,"speed"in t&&(Je("PanoramaOptions speed is deprecated, set transition.speed instead."),e&&(e.speed=t.speed)),e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new Me("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!Ms.equals(this.viewer.renderer.panoramaPose)||!Ms.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Yt),Yt.applyEuler(this.viewer.renderer.panoramaPose),Yt.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Yt)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Me("Current adapter does not support texture coordinates or no texture has been loaded");return(!Ms.equals(this.viewer.renderer.panoramaPose)||!Ms.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,Yt),Hr(Yt,this.viewer.renderer.sphereCorrection),Hr(Yt,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(Yt)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=Vn){return e||(e=new I),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[Cn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,Yt),this.vector3ToViewerCoords(Yt)}isPointVisible(t){let e,n;if(t instanceof I)e=t,n=this.vector3ToViewerCoords(t);else if(la(t))e=this.sphericalCoordsToVector3(t,Yt),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Me("Position is missing 'yaw' or 'pitch'");return{yaw:Qt(t.yaw),pitch:Qt(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:Qt((t==null?void 0:t.pan)||0),tilt:Qt((t==null?void 0:t.tilt)||0,!0),roll:Qt((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Ve.degToRad((t==null?void 0:t.poseHeading)||0),tilt:Ve.degToRad((t==null?void 0:t.posePitch)||0),roll:Ve.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(gt(t.zoom)&&!gt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),gt(t.position)&&!gt(e.initialHeading)&&!gt(e.initialPitch)&&(t={...t,position:{yaw:Qt(e.initialHeading),pitch:Qt(e.initialPitch,!0)}})),t}},dv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,uv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,js=class lh{constructor(){this.$=lh.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};js.IDLE=0;js.CLICK=1;js.MOVING=2;var dt=js,fv=class extends Ki{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new dt,this.keyHandler=new Ys,this.resizeObserver=new ResizeObserver(ra(()=>this.viewer.autoSize(),50)),this.moveThreshold=Ko*Mt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Ri.type,this),this.viewer.addEventListener(Oi.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Ri.type,this),this.viewer.removeEventListener(Oi.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case Ri.type:this.__applyMoveDelta();break;case Oi.type:this.__clearMoveDelta();break}if(!cl(t,"."+$i))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var n;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===mt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(xt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Tn(t.key,t))||!this.state.keyboardEnabled)return;const e=(n=this.config.keyboardActions)==null?void 0:n[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(dt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY}__onMouseUp(t){this.step.is(dt.CLICK,dt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(dt.CLICK,dt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(dt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},Qo))):t.touches.length===2&&(this.step.set(dt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(dt.CLICK,dt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(dt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:xt.TWO_FINGERS,image:dv,title:this.config.lang.twoFingers})},el));else if(this.step.is(dt.CLICK,dt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(xt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:xt.CTRL_ZOOM,image:uv,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(xt.CTRL_ZOOM),tl);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Li(t))}__resetMove(){this.step.set(dt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Or(t);this.step.set(dt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(dt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(c=>c.object.userData[Cn]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),h={rightclick:i,originalEvent:n,target:Is(n),clientX:t,clientY:e,viewerX:r,viewerY:a,yaw:c.yaw,pitch:c.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Cn])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Gl(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Bl(h)),this.data.dblclickData=Ws(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Jo))}}__handleObjectsEvents(t){if(!ml(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=hl(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(t,r,n,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=i.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,Vr),this.state.objectsObservers[r]=null),a?s(o.object,r,Zc):(this.state.objectsObservers[r]=o.object,s(o.object,r,Xc))):a&&(s(a,r,Vr),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(dt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(dt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(dt.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(n/this.state.size.width)*Ve.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Ve.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(dt.MOVING)){t.preventDefault();const e=Or(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Mt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Xe.enabled=!1;var Es=new ke,bo=new st,Ao=new pi,pv=class extends Ki{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new wg(this.config.rendererParameters),this.renderer.setPixelRatio(Mt.pixelRatio),this.renderer.outputColorSpace=mn,this.renderer.toneMapping=1,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Dr,this.camera=new Ht(50,16/9,.1,2*Vn),this.camera.matrixAutoUpdate=!1;const e=new Ot(new Yi(Vn).scale(-1,1,1),new Wi({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Cn]:!0},this.scene.add(e),this.raycaster=new Rg,this.frustum=new ea,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(Fi.type,this),this.viewer.addEventListener(un.type,this),this.viewer.addEventListener(Ii.type,this),this.viewer.addEventListener(Di.type,this),this.viewer.addEventListener(Lt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Fi.type,this),this.viewer.removeEventListener(un.type,this),this.viewer.removeEventListener(Ii.type,this),this.viewer.removeEventListener(Di.type,this),this.viewer.removeEventListener(Lt.type,this),super.destroy()}handleEvent(t){switch(t.type){case Fi.type:this.__onSizeUpdated();break;case un.type:this.__onZoomUpdated();break;case Ii.type:this.__onPositionUpdated();break;case Di.type:this.__onPositionUpdated();break;case Lt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new Ri(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new bc))}setTexture(t){this.meshContainer||(this.meshContainer=new Hn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t),i=(n.pan?1:0)+(n.tilt?1:0)+(n.roll?1:0);!Ti.useNewAnglesOrder&&i>1&&(Je("'panoData' Euler angles have changed in version 5.11.0."),Je("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),Ti.useNewAnglesOrder?e.rotation.set(n.tilt,n.pan,n.roll,"YXZ"):e.rotation.set(-n.tilt,-n.pan,-n.roll,"ZXY")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t),i=(n.pan?1:0)+(n.tilt?1:0)+(n.roll?1:0);!Ti.useNewAnglesOrder&&i>1&&(Je("'sphereCorrection' Euler angles have changed in version 5.11.0."),Je("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),Ti.useNewAnglesOrder?e.rotation.set(n.tilt,n.pan,n.roll,"YXZ"):e.rotation.set(n.tilt,n.pan,n.roll,"ZXY")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,s=!gt(e.position),r=!gt(e.zoom),a=new da(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new Hn,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,o),s&&!n.rotation){const p=this.viewer.getPosition(),m=new I(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-p.yaw);const _=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();o.rotateOnWorldAxis(_,a.position.pitch-p.pitch)}o.add(l),this.scene.add(o),this.renderer.setRenderTarget(new An),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:c,properties:h}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?a.position:null,i?a.zoomLevel:null),u=new Fs({properties:{...h,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:p=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?Ve.mapLinear(p.opacity,0,.5,1,0):Ve.mapLinear(p.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=n.effect==="black"?Ve.mapLinear(p.opacity,.5,1,0,1):Ve.mapLinear(p.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return u.then(p=>{o.remove(l),this.scene.remove(o),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),u}getIntersections(t){var n;Es.x=2*t.x/this.state.size.width-1,Es.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Es,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Es)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(bo.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(bo),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Ao.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Ao)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(s=>{var r,a;(a=(r=s.value)==null?void 0:r.dispose)==null||a.call(r)}),n.dispose()};t.traverse(n=>{var i,s;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{e(r)}):e(n.material)),n instanceof Dr||(s=n.dispose)==null||s.call(n),n!==t&&this.cleanScene(n)})}},mv=class extends na{load(t,e,n,i,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),c=l?parseInt(l):0,h=c!==0;let u=0;const p=new ReadableStream({start(m){_();function _(){o.read().then(({done:x,value:d})=>{if(x)m.close();else{u+=d.byteLength;const f=new ProgressEvent("progress",{lengthComputable:h,loaded:u,total:c});n(f),m.enqueue(d),_()}}).catch(x=>{i(x)})}}});return new Response(p)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{e(a)}).catch(a=>{i(a)})}},gv=class extends na{load(t,e,n,i){const s=document.createElement("img");function r(){l(),e(this)}function a(c){if(l(),i!=null&&i.aborted){const h=new Error;h.name="AbortError",h.message="The operation was aborted.",n(h)}else n(c)}function o(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",a,!1),i==null||i.removeEventListener("abort",o,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",a,!1),i==null||i.addEventListener("abort",o,!1),!t.startsWith("data:")&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),s.src=t,s}},vv=class extends Ki{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new mv,this.imageLoader=new gv,this.config.withCredentials&&(this.fileLoader.setWithCredentials(!0),this.imageLoader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,n){const i=ri.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);ri.remove(t,n)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),new Promise((s,r)=>{let a=0;e==null||e(a),this.fileLoader.load(t,o=>{a=100,e==null||e(a),ri.add(t,n,o),s(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,e==null||e(a))}},o=>{r(o)},this.__getAbortSignal(n))})}loadImage(t,e,n){const i=ri.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?new Promise((s,r)=>{this.imageLoader.load(t,a=>{ri.add(t,n,a),s(a)},a=>{r(a)},this.__getAbortSignal(n))}):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Me("Current adapter does not support preload"))}__getAbortSignal(t){var e;return t?((e=this.abortCtrl[t])!=null&&e.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},_v=class extends Ki{constructor(t){super(t),this.zoom=new wi(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new un(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new wl(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new Ii(e))},{yaw:new wi(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new wi(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new wi(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new Di(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ve.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ve.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},xv=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,Vn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Ti=class extends Cl{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.onResize=ra(()=>this.navbar.autoSize(),500),this.parent=ol(t.container),!this.parent)throw new Me('"container" element not found.');this.parent[Cn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Sl(this.parent),El(this.container,"core"),this.state=new xv,this.config=tv(t),this.__setSize(this.config.size),this.overlay=new rv(this);try{Mt.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}ri.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new pv(this),this.textureLoader=new vv(this),this.eventsHandler=new fv(this),this.dataHelper=new hv(this),this.dynamics=new _v(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new iv(this),this.navbar=new nv(this),this.panel=new ov(this),this.notification=new sv(this),this.autoSize(),this.setCursor(null),oa(Mt.isTouchEnabled,s=>{Gs(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(i=s.init)==null||i.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[a,o]of Object.entries(this.plugins))o.destroy(),delete this.plugins[a];this.children.slice().forEach(a=>a.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[Cn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Ui)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=Gr(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return dl(this.parent,Mt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Fi(this.getSize())),this.onResize())}setPanorama(t,e={}){var r;this.textureLoader.abortLoading(),(r=this.state.transitionAnimation)==null||r.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const i=a=>{if(_l(a))return!1;if(this.loader.hide(),this.state.loadingPromise=null,a)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(a),this.dispatchEvent(new pc(t,a)),a;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new cc(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(a=>{if(a.panorama!==this.config.panorama)throw this.adapter.disposeTexture(a),Br();const o=this.dataHelper.cleanPanoramaOptions(e,a.panoData);return(!gt(o.zoom)||!gt(o.position))&&this.stopAll(),{textureData:a,cleanOptions:o}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:a,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(a),this.renderer.setPanoramaPose(a.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new hi(a)),gt(o.zoom)||this.zoom(o.zoom),gt(o.position)||this.rotate(o.position)}).then(()=>i(),a=>i(a)):this.state.loadingPromise=s.then(({textureData:a,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new hi(a)),this.state.transitionAnimation=this.renderer.transition(a,o,n),this.state.transitionAnimation)).then(a=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new vc(a)),!a)throw Br()}).then(()=>i(),a=>i(a)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in pn)){Je(`Unknown option ${n}`);continue}if(n in To){Je(To[n]);continue}switch(n in Wr&&(i=Wr[n](i,{rawConfig:e,defValue:pn[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new un(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Lt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:xt.ERROR,image:cv,title:t,dismissible:!1})}hideError(){this.overlay.hide(xt.ERROR)}rotate(t){const e=new Nl(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=la(t),n=!gt(t.zoom),i=new da(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new Fs({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),n&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new Fs(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){const e=t;["width","height"].forEach(n=>{t&&e[n]&&(/^[0-9.]+$/.test(e[n])&&(e[n]+="px"),this.parent.style[n]=e[n])})}enterFullscreen(){this.isFullscreenEnabled()||ul(this.parent,Mt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&fl(Mt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new lv(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new Oi),this.disableIdleTimer(),this.stopAnimation()}};Ti.useNewAnglesOrder=!0;/*!
 * Photo Sphere Viewer / Markers Plugin 5.11.5
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Mv=Object.defineProperty,Ev=(t,e)=>{for(var n in e)Mv(t,n,{get:e[n],enumerable:!0})},Sv={};Ev(Sv,{EnterMarkerEvent:()=>xh,GotoMarkerDoneEvent:()=>qr,HideMarkersEvent:()=>Bi,LeaveMarkerEvent:()=>gh,MarkerVisibilityEvent:()=>dh,MarkersPluginEvent:()=>Vt,RenderMarkersListEvent:()=>Bh,SelectMarkerEvent:()=>Sh,SelectMarkerListEvent:()=>Th,SetMarkersEvent:()=>Dh,ShowMarkersEvent:()=>ki,UnselectMarkerEvent:()=>Ch});var Vt=class extends Al{},ch=class hh extends Vt{constructor(e,n){super(hh.type),this.marker=e,this.visible=n}};ch.type="marker-visibility";var dh=ch,uh=class fh extends Vt{constructor(e){super(fh.type),this.marker=e}};uh.type="goto-marker-done";var qr=uh,ph=class mh extends Vt{constructor(e){super(mh.type),this.marker=e}};ph.type="leave-marker";var gh=ph,vh=class _h extends Vt{constructor(e){super(_h.type),this.marker=e}};vh.type="enter-marker";var xh=vh,Mh=class Eh extends Vt{constructor(e,n,i){super(Eh.type),this.marker=e,this.doubleClick=n,this.rightClick=i}};Mh.type="select-marker";var Sh=Mh,yh=class wh extends Vt{constructor(e){super(wh.type),this.marker=e}};yh.type="select-marker-list";var Th=yh,bh=class Ah extends Vt{constructor(e){super(Ah.type),this.marker=e}};bh.type="unselect-marker";var Ch=bh,Rh=class Lh extends Vt{constructor(){super(Lh.type)}};Rh.type="hide-markers";var Bi=Rh,Ph=class Ih extends Vt{constructor(e){super(Ih.type),this.markers=e}};Ph.type="set-markers";var Dh=Ph,Uh=class Nh extends Vt{constructor(){super(Nh.type)}};Uh.type="show-markers";var ki=Uh,Fh=class Oh extends Vt{constructor(e){super(Oh.type),this.markers=e}};Fh.type="render-markers-list";var Bh=Fh,yv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Gi=class extends bt{constructor(t){super(t,{className:"psv-markers-button",icon:yv,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(ki.type,this),this.plugin.addEventListener(Bi.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(ki.type,this),this.plugin.removeEventListener(Bi.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof ki?this.toggleActive(!0):t instanceof Bi&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Gi.id="markers";var kh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Bs="http://www.w3.org/2000/svg",rt="psvMarker",wv=ye.dasherize(rt),Si="marker",ai="markersList",Yr={amount:2,duration:100,easing:"linear"},Tv=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${kh} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${t.map(n=>`
        <li data-${wv}="${n.id}" class="psv-panel-menu-item" tabindex="0">
          ${n.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${n.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${n.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Zs=class extends bt{constructor(t){super(t,{className:" psv-markers-list-button",icon:kh,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(Se.ShowPanelEvent.type,this),this.viewer.addEventListener(Se.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(Se.ShowPanelEvent.type,this),this.viewer.removeEventListener(Se.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof Se.ShowPanelEvent?this.toggleActive(t.panelId===ai):t instanceof Se.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Zs.id="markersList";var Co=new I,bv=new Gn,Ro=new I,Av=class extends Rt{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},Zt=new st,Cv=new st,Rv=class{constructor(t={}){const e=this;let n,i,s,r;const a={camera:{style:""},objects:new WeakMap},o=t.element!==void 0?t.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",o.appendChild(l);const c=document.createElement("div");c.style.transformStyle="preserve-3d",l.appendChild(c),this.getSize=function(){return{width:n,height:i}},this.render=function(x,d){const f=d.projectionMatrix.elements[5]*r;d.view&&d.view.enabled?(l.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(i/d.view.height)}px )`,l.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):l.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let T,S;d.isOrthographicCamera&&(T=-(d.right+d.left)/2,S=(d.top+d.bottom)/2);const w=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,F=d.isOrthographicCamera?`scale( ${w} )scale(`+f+")translate("+h(T)+"px,"+h(S)+"px)"+u(d.matrixWorldInverse):`scale( ${w} )translateZ(`+f+"px)"+u(d.matrixWorldInverse),b=(d.isPerspectiveCamera?"perspective("+f+"px) ":"")+F+"translate("+s+"px,"+r+"px)";a.camera.style!==b&&(c.style.transform=b,a.camera.style=b),_(x,x,d)},this.setSize=function(x,d){n=x,i=d,s=n/2,r=i/2,o.style.width=x+"px",o.style.height=d+"px",l.style.width=x+"px",l.style.height=d+"px",c.style.width=x+"px",c.style.height=d+"px"};function h(x){return Math.abs(x)<1e-10?0:x}function u(x){const d=x.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function p(x){const d=x.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function m(x){x.isCSS3DObject&&(x.element.style.display="none");for(let d=0,f=x.children.length;d<f;d++)m(x.children[d])}function _(x,d,f,T){if(x.visible===!1){m(x);return}if(x.isCSS3DObject){const S=x.layers.test(f.layers)===!0,w=x.element;if(w.style.display=S===!0?"":"none",S===!0){x.onBeforeRender(e,d,f);let F;x.isCSS3DSprite?(Zt.copy(f.matrixWorldInverse),Zt.transpose(),x.rotation2D!==0&&Zt.multiply(Cv.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose(Co,bv,Ro),Zt.setPosition(Co),Zt.scale(Ro),Zt.elements[3]=0,Zt.elements[7]=0,Zt.elements[11]=0,Zt.elements[15]=1,F=p(Zt)):F=p(x.matrixWorld);const C=a.objects.get(x);if(C===void 0||C.style!==F){w.style.transform=F;const b={style:F};a.objects.set(x,b)}w.parentNode!==c&&c.appendChild(w),x.onAfterRender(e,d,f)}}for(let S=0,w=x.children.length;S<w;S++)_(x.children[S],d,f)}}},Lv=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new Rv({element:this.element}),this.scene=new Dr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(n=>{const i=n.target[rt];i.config.visible&&(i.viewportIntersection=n.isIntersecting)})},{root:this.element}),t.addEventListener(Se.ReadyEvent.type,this,{once:!0}),t.addEventListener(Se.SizeUpdatedEvent.type,this),t.addEventListener(Se.RenderEvent.type,this)}handleEvent(t){switch(t.type){case Se.ReadyEvent.type:case Se.SizeUpdatedEvent.type:this.updateSize();break;case Se.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(Se.ReadyEvent.type,this),this.viewer.removeEventListener(Se.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Se.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},As=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(As||{});function $r(t,e=!1){const n=[];if(Object.keys(As).forEach(i=>{t[i]&&n.push(i)}),n.length===0&&!e)throw new Me(`missing marker content, either ${Object.keys(As).join(", ")}`);if(n.length>1)throw new Me(`multiple marker content, either ${Object.keys(As).join(", ")}`);return n[0]}var zh=class{constructor(t,e,n){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!n.id)throw new Me("missing marker id");this.type=$r(n),this.createElement(),this.update(n)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=$r(t,!0);if(e!==void 0&&e!==this.type)throw new Me(`cannot change marker ${t.id} type`);if(ye.isExtendedPosition(t)&&(ye.logWarn('Use the "position" property to configure the position of a marker'),t.position=this.viewer.dataHelper.cleanPosition(t)),"width"in t&&"height"in t&&(ye.logWarn('Use the "size" property to configure the size of a marker'),t.size={width:t.width,height:t.height}),this.config=ye.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),ye.isNil(this.config.visible)&&(this.config.visible=!0),ye.isNil(this.config.zIndex)&&(this.config.zIndex=1),ye.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const n=this.config.rotation;typeof n=="object"?this.config.rotation={yaw:n.yaw?ye.parseAngle(n.yaw,!0,!1):0,pitch:n.pitch?ye.parseAngle(n.pitch,!0,!1):0,roll:n.roll?ye.parseAngle(n.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:ye.parseAngle(n,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=ye.parsePoint(this.config.anchor)}getListContent(){var t;return this.config.listContent?this.config.listContent:(t=this.config.tooltip)!=null&&t.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,n=!1){var i;if(this.state.visible&&((i=this.config.tooltip)!=null&&i.content)&&this.state.position2D){const s={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const r=ye.getPosition(this.viewer.container);s.top=e-r.y+10,s.left=t-r.x,s.box={width:20,height:20}}else s.top=this.state.position2D.y,s.left=this.state.position2D.x;else{const r=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let a=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(a*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),s.top=r.y-o*this.state.anchor.y+o/2,s.left=r.x-a*this.state.anchor.x+a/2,s.box={width:a,height:o}}this.tooltip?n?this.tooltip.update(this.config.tooltip.content,s):this.tooltip.move(s):this.tooltip=this.viewer.createTooltip(s)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},va=class extends zh{get domElement(){return this.element}constructor(t,e,n){super(t,e,n)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&ye.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},ks=class extends va{constructor(t,e,n){super(t,e,n)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===n}),i):null}update(t){if(super.update(t),!ye.isExtendedPosition(this.config.position))throw new Me(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new Me(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Yr:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Ve.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const n=t.firstElementChild.getBoundingClientRect();this.state.size={width:n.width,height:n.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:n}){n!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*Hi.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Ve.degToRad(this.viewer.state.hFov)/2,o=Math.abs(ye.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*Hi.EASINGS.outQuad(Math.max(0,(a-o)/a))}}n&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},Pv=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,Iv=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,Dv=class extends fn{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=(t==null?void 0:t.enabled)===!0,t!=null&&t.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t==null?void 0:t.map},repeat:{value:new ke(1,1)},offset:{value:new ke(0,0)},alpha:{value:(t==null?void 0:t.alpha)??1},keying:{value:!1},color:{value:new Ke(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:Iv,fragmentShader:Pv}),this.chromaKey=t==null?void 0:t.chromaKey}};function Uv({src:t,withCredentials:e,muted:n,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=n,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function Nv(t,e,n){const[i,s]=t,[r,a]=e,o=ye.greatArcDistance(t,e),l=Math.sin((1-n)*o)/Math.sin(o),c=Math.sin(n*o)/Math.sin(o),h=l*Math.cos(s)*Math.cos(i)+c*Math.cos(a)*Math.cos(r),u=l*Math.cos(s)*Math.sin(i)+c*Math.cos(a)*Math.sin(r),p=l*Math.sin(s)+c*Math.sin(a);return[Math.atan2(u,h),Math.atan2(p,Math.sqrt(h*h+u*u))]}function Hh(t){const e=[t[0]];let n=0;for(let i=1;i<t.length;i++){const s=t[i-1][0]-t[i][0];s>Math.PI?n+=1:s<-Math.PI&&(n-=1),e.push([t[i][0]+n*2*Math.PI,t[i][1]])}return e}function Vh(t){const n=Hh(t).reduce((i,s)=>[i[0]+s[0],i[1]+s[1]]);return[ye.parseAngle(n[0]/t.length),n[1]/t.length]}function Fv(t){const e=Hh(t);let n=0;const i=[];for(let r=0;r<e.length-1;r++){const a=ye.greatArcDistance(e[r],e[r+1])*Hi.SPHERE_RADIUS;i.push(a),n+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>n/2){const a=(n/2-s)/i[r];return Nv(e[r],e[r+1],a)}s+=i[r]}return e[Math.round(e.length/2)]}var Ss=new I,Lo=new I,Pr=new I,Po=new I,Io=new I,Do=new I;function Ov(t,e,n){Ss.copy(n).normalize(),Lo.crossVectors(t,e).normalize(),Pr.crossVectors(Lo,t).normalize(),Po.copy(t).multiplyScalar(-Ss.dot(Pr)),Io.copy(Pr).multiplyScalar(Ss.dot(t));const i=new I().addVectors(Po,Io).normalize();return Do.crossVectors(i,Ss),i.applyAxisAngle(Do,.01).multiplyScalar(Hi.SPHERE_RADIUS)}var Bv=class extends zh{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,n){super(t,e,n)}is3d(){return!0}createElement(){const t=new Dv({alpha:0}),e=new qi(1,1),n=new Ot(e,t);n.userData={[rt]:this},Object.defineProperty(n,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(i){this.userData[rt].config.visible=i}}),this.element=new Hn().add(n),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){var s,r,a;super.update(t);const e=this.threeMesh,n=e.parent,i=e.material;if(ye.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(l){throw new Me(`invalid marker ${this.id} position`,l)}if(!this.config.size)throw new Me(`missing marker ${this.id} size`);if(this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,n.position),n.lookAt(0,n.position.y,0),this.config.orientation)switch(ye.logWarn('Marker#orientation is deprecated, use "rotation.yaw" or "rotation.pitch" instead'),e.rotateZ(-this.config.rotation.roll),this.config.orientation){case"horizontal":n.rotateX(this.state.position.pitch<0?-Math.PI/2:Math.PI/2);break;case"vertical-left":n.rotateY(-Math.PI*.4);break;case"vertical-right":n.rotateY(Math.PI*.4);break}else e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const o=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(l=>{const c=new I;return c.fromBufferAttribute(o,l),e.localToWorld(c)})}else{if(((s=this.config.position)==null?void 0:s.length)!==4)throw new Me(`missing marker ${this.id} position`);let o;try{o=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u))}catch(u){throw new Me(`invalid marker ${this.id} position`,u)}const l=o.map(u=>this.viewer.dataHelper.sphericalCoordsToVector3(u)),c=Vh(o.map(({yaw:u,pitch:p})=>[u,p]));this.state.position={yaw:c[0],pitch:c[1]},this.state.positions3D=l;const h=e.geometry.getAttribute("position");[l[0],l[1],l[3],l[2]].forEach((u,p)=>{h.setX(p,u.x),h.setY(p,u.y),h.setZ(p,u.z)}),h.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){(r=i.map)==null||r.dispose();const o=Uv({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials,muted:!0,autoplay:this.config.autoplay??!0}),l=new Tg(o);i.map=l,i.alpha=0,o.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,ye.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:o.videoWidth,height:o.videoHeight},this.__setTextureWrap(i)))},{once:!0}),o.autoplay&&o.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){(a=i.map)==null||a.dispose();const o=new Et;i.map=o,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(l=>{this.viewer&&(ye.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:l.width,height:l.height},this.__setTextureWrap(i)),o.image=l,o.anisotropy=4,o.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[rt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const n=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u)),i=ye.greatArcDistance([n[0].yaw,n[0].pitch],[n[1].yaw,n[1].pitch]),s=ye.greatArcDistance([n[3].yaw,n[3].pitch],[n[2].yaw,n[2].pitch]),r=ye.greatArcDistance([n[1].yaw,n[1].pitch],[n[2].yaw,n[2].pitch]),a=ye.greatArcDistance([n[0].yaw,n[0].pitch],[n[3].yaw,n[3].pitch]),o=(i+s)/(r+a),l=e.width/e.height;let c=0,h=0;o<l?c=l-o:h=1/l-1/o,t.repeat.set(1-c,1-h),t.offset.set(c/2,h/2)}},kv=class extends va{constructor(t,e,n){super(t,e,n),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new Av(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(t){this.userData[rt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){var s,r;const n=this.domElement;if(this.state.size={width:n.offsetWidth,height:n.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const a=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return(r=(s=this.config.elementLayer).updateMarker)==null||r.call(s,{marker:this,position:a,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),a}else return null}update(t){if(super.update(t),!ye.isExtendedPosition(this.config.position))throw new Me(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new Me(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,n=this.domElement;n.classList.add("psv-marker--css3d"),n.childNodes.forEach(i=>i.remove()),n.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},zv=class extends ks{constructor(t,e,n){super(t,e,n)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){var n,i;const e=super.render(t);return e&&this.type==="element"&&((i=(n=this.config.element).updateMarker)==null||i.call(n,{marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size})),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new Me(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(n=>n.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},Hv=class extends va{constructor(t,e,n){super(t,e,n)}createElement(){this.element=document.createElementNS(Bs,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const n=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-n.x},${a.y-n.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${n.x} ${n.y})`),n}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([i,s])=>{e.setAttributeNS(null,ye.dasherize(i),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let i=this.config[this.type];if(!Array.isArray(i[0]))for(let s=0;s<i.length;s++)i.splice(s,2,[i[s],i[s+1]]);if(Array.isArray(i[0][0])||(i=[i]),this.isPolyline&&i.length>1)throw new Me("polylines cannot have holes");this.isPixels?this.definition=i.map(s=>s.map(r=>{const a=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]});return[a.yaw,a.pitch]})):this.definition=i.map(s=>s.map(r=>[ye.parseAngle(r[0]),ye.parseAngle(r[1],!0)]))}catch(i){throw new Me(`invalid marker ${this.id} position`,i)}const n=this.isPolygon?Vh(this.coords[0]):Fv(this.coords[0]);this.state.position={yaw:n[0],pitch:n[1]},this.positions3D=this.coords.map(i=>i.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,n=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return n.forEach((s,r)=>{s.visible||[r===0?n[e-1]:n[r-1],r===e-1?n[0]:n[r+1]].forEach(o=>{o.visible&&i.push({visible:o.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{n.splice(s.index,0,{vector:Ov(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),n.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},Vv=class extends ks{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,n){super(t,e,n)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(Bs,t);this.element=document.createElementNS(Bs,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([n,i])=>{e.setAttributeNS(null,n,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([n,i])=>{e.setAttributeNS(null,ye.dasherize(n),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},Gv=ye.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=Yr),typeof t=="number"&&(t={amount:t}),{...Yr,...t}):null}});function Wv(t){switch($r(t,!1)){case"image":case"html":case"element":return zv;case"imageLayer":case"videoLayer":return Bv;case"elementLayer":return kv;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return Hv;case"square":case"rect":case"circle":case"ellipse":case"path":return Vv;default:throw new Me("invalid marker type")}}var Ks=class extends ma{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(Bs,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new Lv(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}init(){super.init(),ye.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(Se.ClickEvent.type,this),this.viewer.addEventListener(Se.DoubleClickEvent.type,this),this.viewer.addEventListener(Se.RenderEvent.type,this),this.viewer.addEventListener(Se.ConfigChangedEvent.type,this),this.viewer.addEventListener(Se.ObjectEnterEvent.type,this),this.viewer.addEventListener(Se.ObjectHoverEvent.type,this),this.viewer.addEventListener(Se.ObjectLeaveEvent.type,this),this.viewer.addEventListener(Se.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(Se.ClickEvent.type,this),this.viewer.removeEventListener(Se.DoubleClickEvent.type,this),this.viewer.removeEventListener(Se.RenderEvent.type,this),this.viewer.removeEventListener(Se.ObjectEnterEvent.type,this),this.viewer.removeEventListener(Se.ObjectHoverEvent.type,this),this.viewer.removeEventListener(Se.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(Se.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){var e;switch(t.type){case Se.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case Se.RenderEvent.type:this.renderMarkers();break;case Se.ClickEvent.type:this.__onClick(t,!1);break;case Se.DoubleClickEvent.type:this.__onClick(t,!0);break;case Se.ObjectEnterEvent.type:case Se.ObjectLeaveEvent.type:case Se.ObjectHoverEvent.type:if(t.userDataKey===rt){const n=t.originalEvent,i=t.object.userData[rt];switch(t.type){case Se.ObjectEnterEvent.type:(e=i.config.style)!=null&&e.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(n,i);break;case Se.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case Se.ObjectHoverEvent.type:this.__onHoverMarker(n,i);break}}break;case"mouseenter":{const n=this.__getTargetMarker(ye.getEventTarget(t));this.__onEnterMarker(t,n);break}case"mouseleave":{const n=this.__getTargetMarker(ye.getEventTarget(t));this.__onLeaveMarker(n);break}case"mousemove":{const n=this.__getTargetMarker(ye.getEventTarget(t),!0);this.__onHoverMarker(t,n);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new ki)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new Bi)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new Me(`marker "${t.id}" already exists`);const n=new(Wv(t))(this.viewer,this,t);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new Me(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){var i;const n=this.getMarker(t.id);n.update(t),e&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&((i=n.config.tooltip)==null?void 0:i.trigger)==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const n=this.getMarker(t);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(n=>this.removeMarker(n,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t==null||t.forEach(n=>{this.addMarker(n,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const n=this.getMarker(t);return e?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new qr(n))}):(this.viewer.rotate(n.state.position),ye.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new qr(n)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const n=this.getMarker(t);n.config.visible=ye.isNil(e)?!n.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Si,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Si)}toggleMarkersList(){this.viewer.panel.isVisible(ai)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&t.push(n)});const e=new Bh(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:ai,content:Tv(t,this.viewer.config.lang[Gi.id]),noMargin:!0,clickHandler:n=>{const i=ye.getClosest(n,".psv-panel-menu-item"),s=i?i.dataset[rt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new Th(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(ai)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(i=>{let s=i.config.visible,r=!1,a=null;s&&(a=i.render({viewerPosition:e,zoomLevel:t,hoveringMarker:n}),s=!!a),r=i.state.visible!==s,i.state.visible=s,i.state.position2D=a,i.domElement&&ye.toggleClass(i.domElement,"psv-marker--visible",s),s?i.state.staticTooltip?i.showTooltip():i!==this.state.hoveringMarker&&i.hideTooltip():i.hideTooltip(),r&&(this.dispatchEvent(new dh(i,s)),(i.is3d()||i.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const n=e?ye.getClosest(t,".psv-marker"):t;return n?n[rt]:void 0}else return Array.isArray(t)?t.map(n=>n.userData[rt]).filter(n=>!!n).sort((n,i)=>i.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(t,e){var n;e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new xh(e)),e instanceof ks&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){var e;t&&(this.dispatchEvent(new gh(t)),t instanceof ks&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&((e=t.config.tooltip)==null?void 0:e.trigger)==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){var n;e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){var r,a;const n=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new Ch(this.state.currentMarker)),this.viewer.panel.hide(Si),!this.state.showAllTooltips&&((r=this.state.currentMarker.config.tooltip)==null?void 0:r.trigger)==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new Sh(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(((a=s.config.tooltip)==null?void 0:a.trigger)==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new Dh(this.getMarkers()))}__refreshUi(){var e,n;const t=Object.values(this.markers).filter(i=>!i.config.hideList).length;t===0?(this.viewer.panel.isVisible(ai)||this.viewer.panel.isVisible(Si))&&this.viewer.panel.hide():this.viewer.panel.isVisible(ai)?this.showMarkersList():this.viewer.panel.isVisible(Si)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),(e=this.viewer.navbar.getButton(Gi.id,!1))==null||e.toggle(t>0),(n=this.viewer.navbar.getButton(Zs.id,!1))==null||n.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};Ks.id="markers";Ks.VERSION="5.11.5";Ks.configParser=Gv;Ks.readonlyOptions=["markers"];pn.lang[Gi.id]="Markers";pn.lang[Zs.id]="Markers list";ga(Gi,"caption:left");ga(Zs,"caption:left");/*!
 * Photo Sphere Viewer / Compass Plugin 5.11.5
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Xv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(61, 61, 61, .5)"/><path fill="rgba(255, 255, 255, .7)" d="M50 97.1A47 47 0 0 1 32.5 6.5l.8 1.8a45 45 0 1 0 33.4 0l.8-1.8A47 47 0 0 1 50 97Zm0-42a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm4-41.7h-1.6a.4.4 0 0 1-.4-.2l-4.6-7.7V13a.3.3 0 0 1-.3.3h-1.6a.3.3 0 0 1-.3-.3V1.8a.3.3 0 0 1 .3-.3h1.6a.3.3 0 0 1 .4.2L52 9.4V1.8a.3.3 0 0 1 .3-.3H54c.2 0 .3 0 .3.3V13c0 .2-.1.3-.3.3Z"/></svg>
`,Uo=1/40,qv=class extends Ln{constructor(t,e){super(t,{}),this.plugin=e,this.state={visible:!0,mouse:null,mousedown:!1,markers:[]},this.background=document.createElement("div"),this.canvas=document.createElement("canvas"),this.container.appendChild(this.background),this.container.appendChild(this.canvas),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("mousemove",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseup",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("touchmove",this),this.container.addEventListener("touchend",this),this.applyConfig(),this.hide()}get config(){return this.plugin.config}handleEvent(t){var e,n;if(this.config.navigation)switch(t.type){case"mouseenter":case"mousemove":case"touchmove":this.state.mouse=((e=t.changedTouches)==null?void 0:e[0])||t,this.state.mousedown?this.click():this.update(),t.stopPropagation(),t.preventDefault();break;case"mousedown":case"touchstart":this.state.mousedown=!0,t.stopPropagation(),t.preventDefault();break;case"mouseup":case"touchend":this.state.mouse=((n=t.changedTouches)==null?void 0:n[0])||t,this.state.mousedown=!1,this.click(),t.changedTouches&&(this.state.mouse=null,this.update()),t.stopPropagation(),t.preventDefault();break;case"mouseleave":this.state.mouse=null,this.state.mousedown=!1,this.update();break}}destroy(){this.canvas.width=0,this.canvas.height=0,super.destroy()}applyConfig(){this.container.className=`psv-compass psv-compass--${this.config.position.join("-")}`,this.config.className&&this.container.classList.add(this.config.className),this.background.innerHTML=this.config.backgroundSvg,this.container.style.width=this.config.size,this.container.style.marginTop=this.config.position[0]==="center"?`calc(-${this.config.size} / 2)`:"",this.container.style.marginLeft=this.config.position[1]==="center"?`calc(-${this.config.size} / 2)`:""}show(){super.show(),this.update()}setMarkers(t){this.state.markers=t,this.update()}update(){var s;if(!this.isVisible())return;this.canvas.width=this.container.clientWidth*Mt.pixelRatio,this.canvas.height=this.container.clientWidth*Mt.pixelRatio;const t=this.canvas.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height);const e=this.viewer.getPosition().yaw,n=Ve.degToRad(this.viewer.state.hFov);this.__drawCone(t,this.config.coneColor,e,n);const i=this.__getMouseAngle();i!==null&&this.__drawCone(t,this.config.navigationColor,i,n),this.state.markers.forEach(r=>{this.__drawMarker(t,r)}),(s=this.config.hotspots)==null||s.forEach(r=>{"yaw"in r&&!("pitch"in r)&&(r.pitch=0);const a=this.viewer.dataHelper.cleanPosition(r);this.__drawPoint(t,r.color||this.config.hotspotColor,a.yaw,a.pitch)})}click(){const t=this.__getMouseAngle();t!==null&&this.viewer.rotate({yaw:t,pitch:this.config.resetPitch?this.viewer.config.defaultPitch:this.viewer.getPosition().pitch})}__drawCone(t,e,n,i){const s=n-Math.PI/2-i/2,r=s+i,a=this.canvas.width/2;t.beginPath(),t.moveTo(a,a),t.lineTo(a+Math.cos(s)*a,a+Math.sin(s)*a),t.arc(a,a,a,s,r,!1),t.lineTo(a,a),t.fillStyle=e,t.fill()}__drawMarker(t,e){let n=this.config.hotspotColor;if(typeof e.data.compass=="string"&&(n=e.data.compass),e.isPoly())t.beginPath(),e.definition[0].forEach(([i,s],r)=>{const a=i-Math.PI/2,o=(s+Math.PI/2)/Math.PI,l=this.canvas.width/2;t[r===0?"moveTo":"lineTo"](l+Math.cos(a)*l*o,l+Math.sin(a)*l*o)}),e.type.startsWith("polygon")?(t.fillStyle=n,t.fill()):(t.strokeStyle=n,t.lineWidth=Math.max(1,this.canvas.width*Uo/2),t.stroke());else{const i=e.state.position;this.__drawPoint(t,n,i.yaw,i.pitch)}}__drawPoint(t,e,n,i){const s=n-Math.PI/2,r=(i+Math.PI/2)/Math.PI,a=this.canvas.width/2,o=Math.max(2,this.canvas.width*Uo);t.beginPath(),t.ellipse(a+Math.cos(s)*a*r,a+Math.sin(s)*a*r,o,o,0,0,Math.PI*2),t.fillStyle=e,t.fill()}__getMouseAngle(){if(!this.state.mouse)return null;const t=this.container.getBoundingClientRect(),e=this.state.mouse.clientX-t.left-t.width/2,n=this.state.mouse.clientY-t.top-t.width/2;return Math.sqrt(e*e+n*n)>t.width/2?null:Math.atan2(n,e)+Math.PI/2}},Yv=ye.getConfigParser({size:"120px",position:["top","left"],backgroundSvg:Xv,coneColor:"rgba(255, 255, 255, 0.5)",navigation:!0,resetPitch:!1,navigationColor:"rgba(255, 0, 0, 0.2)",hotspots:[],hotspotColor:"rgba(0, 0, 0, 0.5)",className:null},{position:(t,{defValue:e})=>ye.cleanCssPosition(t,{allowCenter:!0,cssOrder:!0})||e}),_a=class extends ma{constructor(t,e){super(t,e),this.component=new qv(this.viewer,this)}init(){super.init(),ye.checkStylesheet(this.viewer.container,"compass-plugin"),this.markers=this.viewer.getPlugin("markers"),this.viewer.addEventListener(Se.RenderEvent.type,this),this.viewer.addEventListener(Se.ReadyEvent.type,this,{once:!0}),this.markers&&this.markers.addEventListener("set-markers",this)}destroy(){this.viewer.removeEventListener(Se.RenderEvent.type,this),this.viewer.removeEventListener(Se.ReadyEvent.type,this),this.markers&&this.markers.removeEventListener("set-markers",this),this.component.destroy(),delete this.markers,super.destroy()}setOptions(t){super.setOptions(t),this.component.applyConfig(),this.component.update()}handleEvent(t){switch(t.type){case Se.ReadyEvent.type:this.component.show();break;case Se.RenderEvent.type:this.component.update();break;case"set-markers":this.component.setMarkers(t.markers.filter(e=>{var n;return(n=e.data)==null?void 0:n.compass}));break}}hide(){this.component.hide()}show(){this.component.show()}setHotspots(t){this.config.hotspots=t,this.component.update()}clearHotspots(){this.setHotspots(null)}};_a.id="compass";_a.VERSION="5.11.5";_a.configParser=Yv;export{bt as A,_a as C,pn as D,Ks as M,Me as P,$v as S,Al as T,Ti as V,Ve as a,ma as b,ke as c,Hi as d,Se as e,ga as r,ye as u};
