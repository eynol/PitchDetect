parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KD0T":[function(require,module,exports) {
module.exports="/file_example_OOG_1MG.9c355f92.ogg";
},{}],"SxI6":[function(require,module,exports) {
"use strict";var e=n(require("../sounds/file_example_OOG_1MG.ogg"));function n(e){return e&&e.__esModule?e:{default:e}}window.AudioContext=window.AudioContext||window.webkitAudioContext;var t,o,a,r,i,l,c,d,u,s,m,f=document.querySelector.bind(document),w=null,g=!1,v=null,A=null,p=null,h=null;function M(){alert("Stream generation failed.")}function y(e,n){try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia(e,n,M)}catch(t){alert("getUserMedia threw exception :"+t)}}function T(e){h=w.createMediaStreamSource(e),(A=w.createAnalyser()).fftSize=2048,h.connect(A),I()}function F(){return g?(v.stop(0),v=null,A=null,g=!1,window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame),window.cancelAnimationFrame(m),"play oscillator"):(v=w.createOscillator(),(A=w.createAnalyser()).fftSize=4096,v.connect(A),A.connect(w.destination),v.start(0),g=!0,s=!1,I(),"stop")}function k(){g&&(v.stop(0),v=null,A=null,g=!1,window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame),window.cancelAnimationFrame(m)),y({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"}}},T)}function b(){return g?(v.stop(0),v=null,A=null,g=!1,window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame),window.cancelAnimationFrame(m),"start"):((v=w.createBufferSource()).buffer=p,v.loop=!0,(A=w.createAnalyser()).fftSize=2048,v.connect(A),A.connect(w.destination),v.start(0),g=!0,s=!1,I(),"stop")}window.onload=function(){w=new AudioContext,u=Math.max(4,Math.floor(w.sampleRate/5e3));var n=new XMLHttpRequest;n.open("GET",e.default,!0),n.responseType="arraybuffer",n.onload=function(){w.decodeAudioData(n.response,function(e){p=e})},n.send(),o=document.getElementById("detector"),a=document.getElementById("output"),(t=document.getElementById("waveform"))&&((r=t.getContext("2d")).strokeStyle="black",r.lineWidth=1),i=document.getElementById("pitch"),l=document.getElementById("note"),c=document.getElementById("detune"),d=document.getElementById("detune_amt"),o.ondragenter=function(){return this.classList.add("droptarget"),!1},o.ondragleave=function(){return this.classList.remove("droptarget"),!1},o.ondrop=function(e){this.classList.remove("droptarget"),e.preventDefault(),p=null;var n=new FileReader;return n.onload=function(e){w.decodeAudioData(e.target.result,function(e){p=e},function(){alert("error loading!")})},n.onerror=function(e){alert("Error: "+n.error)},n.readAsArrayBuffer(e.dataTransfer.files[0]),!1}},f("#useDemo").addEventListener("click",b),f("#useLive").addEventListener("click",k),f("#useOscill").addEventListener("click",F);var E=1024,x=new Float32Array(E),C=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function S(e){var n=Math.log(e/440)/Math.log(2)*12;return Math.round(n)+69}function L(e){return 440*Math.pow(2,(e-69)/12)}function B(e,n){return Math.floor(1200*Math.log(e/L(n))/Math.log(2))}var q=0,D=.9;function G(e,n){for(var t=e.length,o=Math.floor(t/2),a=-1,r=0,i=0,l=!1,c=new Array(o),d=0;d<t;d++){var u=e[d];i+=u*u}if((i=Math.sqrt(i/t))<.01)return-1;for(var s=1,m=q;m<o;m++){var f=0;for(d=0;d<o;d++)f+=Math.abs(e[d]-e[d+m]);if(f=1-f/o,c[m]=f,f>D&&f>s)l=!0,f>r&&(r=f,a=m);else if(l){return n/(a+8*((c[a+1]-c[a-1])/c[a]))}s=f}return r>.01?n/a:-1}function I(e){new Array;A.getFloatTimeDomainData(x);var n=G(x,w.sampleRate);if(t&&r){r.clearRect(0,0,512,256),r.strokeStyle="red",r.beginPath(),r.moveTo(0,0),r.lineTo(0,256),r.moveTo(128,0),r.lineTo(128,256),r.moveTo(256,0),r.lineTo(256,256),r.moveTo(384,0),r.lineTo(384,256),r.moveTo(512,0),r.lineTo(512,256),r.stroke(),r.strokeStyle="black",r.beginPath(),r.moveTo(0,x[0]);for(var a=1;a<512;a++)r.lineTo(a,128+128*x[a]);r.stroke()}if(o&&i&&l&&c&&d){if(-1==n)o.className="vague",i.innerText="--",l.innerText="-",c.className="",d.innerText="--";else{o.className="confident";var u=n;i.innerText=Math.round(u);var s=S(u);l.innerHTML=C[s%12];var f=B(u,s);0==f?(c.className="",d.innerHTML="--"):(c.className=f<0?"flat":"sharp",d.innerHTML=Math.abs(f))}window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),m=window.requestAnimationFrame(I)}}
},{"../sounds/file_example_OOG_1MG.ogg":"KD0T"}]},{},["SxI6"], null)
//# sourceMappingURL=/pitchdetect.2482c1f4.js.map