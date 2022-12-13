(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,u,l=t(0),s=t.n(l),d=t(10),f=t.n(d),b=(t(18),t(2)),p=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},x=function(n,e,t){for(var r=t.x,o=t.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!e[c+n.pos.y+o]||!e[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==e[c+n.pos.y+o][i+n.pos.x+r][1]))return!0},j=t(3),O=t(4),h=t.p+"static/media/bg.d63cfd51.png",m=O.a.div(r||(r=Object(j.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"])),h),g=O.a.div(o||(o=Object(j.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]))),v=t(8),y={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},w=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return y[e]},S=function(n,e){var t=Object(l.useState)(p()),r=Object(b.a)(t,2),o=r[0],c=r[1],i=Object(l.useState)(0),a=Object(b.a)(i,2),u=a[0],s=a[1];return Object(l.useEffect)((function(){s(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(s((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[o,c,u]},k=t.p+"static/media/sfx-3.64e0d371.mp3",A=O.a.div(c||(c=Object(j.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),I=t(1),J=function(n){var e=n.type;return Object(I.jsx)(A,{type:e,color:y[e].color,children:console.log("rerender")})},E=s.a.memo(J),L=O.a.div(i||(i=Object(j.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),T=function(n){var e=n.stage;return Object(I.jsx)(L,{width:e[0].length,height:e.length,children:e.map((function(n){return n.map((function(n,e){return Object(I.jsx)(E,{type:n[0]},e)}))}))})},Z=O.a.div(a||(a=Object(j.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),z=function(n){var e=n.gameOver,t=n.text;return Object(I.jsx)(Z,{gameOver:e,children:t})},C=O.a.button(u||(u=Object(j.a)(["\n    box-sizing: border-box;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    border: none;\n    color: #fff;\n    background: #333;\n    font-family: Pixel;\n    font-size: 1rem;\n    outline: none;\n    cursor: pointer;\n"]))),G=function(n){var e=n.callback;return Object(I.jsx)(C,{onClick:e,children:"Start Game"})};var M=t.p+"static/media/GameA.a4704621.mp3",N=t.p+"static/media/battle-city-sfx-6.fb0cb09e.mp3",R=function(){var n=Object(l.useState)(null),e=Object(b.a)(n,2),t=e[0],r=e[1],o=Object(l.useState)(!1),c=Object(b.a)(o,2),i=c[0],a=c[1],u=function(){var n=Object(l.useState)({pos:{x:0,y:0},tetromino:y[0].shape,collided:!1}),e=Object(b.a)(n,2),t=e[0],r=e[1],o=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(l.useCallback)((function(){r({pos:{x:4,y:0},tetromino:w().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(v.a)(Object(v.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},c,function(n,e){var c=JSON.parse(JSON.stringify(t));c.tetromino=o(c.tetromino,e);for(var i=c.pos.x,a=1;x(c,n,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-e),void(c.pos.x=i);r(c)}]}(),s=Object(b.a)(u,4),d=s[0],f=s[1],j=s[2],O=s[3],h=S(d,j),A=Object(b.a)(h,3),J=A[0],E=A[1],L=function(n){var e=Object(l.useState)(0),t=Object(b.a)(e,2),r=t[0],o=t[1],c=Object(l.useState)(0),i=Object(b.a)(c,2),a=i[0],u=i[1],s=Object(l.useState)(0),d=Object(b.a)(s,2),f=d[0],p=d[1],x=[40,100,300,1200],j=new Audio(k),O=Object(l.useCallback)((function(){n>0&&(j.play(),o((function(e){return e+x[n-1]*(f+1)})),u((function(e){return e+n})))}),[f,x,n]);return Object(l.useEffect)((function(){O()}),[O,n,r]),[r,o,a,u,f,p]}(A[2]),Z=Object(b.a)(L,6),C=Z[0],R=Z[1],K=Z[2],P=Z[3],B=Z[4],D=Z[5],H=new Audio(M);new Audio(N),new Audio(k);console.log("re-render");var U=function(n){x(d,J,{x:n,y:0})||f({x:n,y:0})},V=function(){K>10*(B+1)&&(D((function(n){return n+1})),r(1e3/(B+1)+200)),x(d,J,{x:0,y:1})?(d.pos.y<1&&(console.log("GAME OVER!!!"),H.stop(),a(!0),r(null)),f({x:0,y:0,collided:!0})):f({x:0,y:1,collided:!1})},q=function(n){var e=n.keyCode;i||(37===e?U(-1):39===e?U(1):40===e?(console.log("interval off"),r(null),V()):38===e&&O(J,1))};return function(n,e){var t=Object(l.useRef)();Object(l.useEffect)((function(){t.current=n}),[n]),Object(l.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){V()}),t),Object(I.jsx)(m,{role:"button",tabIndex:"0",onKeyDown:function(n){return q(n)},onKeyUp:function(n){var e=n.keyCode;i||40===e&&r(1e3/(B+1)+200)},children:Object(I.jsxs)(g,{children:[Object(I.jsx)(T,{stage:J}),Object(I.jsxs)("aside",{children:[i?Object(I.jsx)(z,{gameOver:i,text:"Game Over"}):Object(I.jsxs)("div",{children:[Object(I.jsx)(z,{text:"Score: ".concat(C)}),Object(I.jsx)(z,{text:"Rows: ".concat(K)}),Object(I.jsx)(z,{text:"Level: ".concat(B)})]}),Object(I.jsx)(G,{callback:function(){H.play(),H.loop=!0,E(p()),r(1e3),j(),R(0),P(0),D(0),a(!1)}})]})]})})};var K=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(R,{})})};f.a.render(Object(I.jsx)(K,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0b0e2ef3.chunk.js.map