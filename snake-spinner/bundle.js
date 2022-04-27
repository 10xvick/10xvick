(()=>{"use strict";var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{X:()=>i});const e={canvas:{x:0,y:0,width:50,height:50},player:{x:25,y:0,width:1,height:1,direction:39,cells:[],speed:1,speedinterval:10,intervalcount:0,initiallength:5},fruit:{x:25,y:25,width:1,height:1},game:{score:0}},i=document.getElementById("gamecanvas").getContext("2d");new class{constructor(){this.interval=null,this.utility={step:function(t,e){return[{x:e.x,y:e.y},...t.slice(0,-1)]},speedup:{},eat:t=>{const{player:i,fruit:n,game:a}=e;i.x>=n.x&&i.x<=n.x&&i.y>=n.y&&i.y<=n.y&&(n.x=this.utility.randomrange(0,e.canvas.width),n.y=this.utility.randomrange(0,e.canvas.height),a.score++,i.cells.push(t))},randomrange:function(t,e){const i=Math.random();return Math.floor(e*i+t)}},this.oninit(),this.interval=setInterval((()=>this.update()),100);const{player:t}=e;Array(t.initiallength).fill(0).forEach(((i,n)=>{t.cells.push((t=>({x:e.player.x-t*e.player.width,y:0}))(n))}))}oninit(){}update(){const{player:t,canvas:i,game:n}=e;switch(t.x>=i.width-t.width&&(t.x=0),t.y>=i.height-t.height&&(t.y=0),t.x+t.width<=0&&(t.x=i.width-t.width),t.y+t.height<=0&&(t.y=i.height-t.height),t.direction){case 37:t.x-=t.speed;break;case 38:t.y-=t.speed;break;case 39:t.x+=t.speed;break;case 40:t.y+=t.speed}const a=t.cells[t.cells.length-1];if(console.log(this.utility.step),t.cells=this.utility.step(t.cells,t),n.score,t.intervalcount++,t.intervalcount>t.speedinterval){t.intervalcount=0,this.interval&&clearInterval(this.interval);const e=Math.min(10+n.score/100,50);this.interval=setInterval((()=>this.update()),1e3/e)}this.utility.eat(a)}},new class{constructor(){this.animationframe()}animationframe(){requestAnimationFrame((()=>this.animationframe())),this.render()}render(){const{player:t,fruit:n,canvas:a}=e;i.fillStyle="#ffff",i.fillRect(a.x,a.y,a.width,a.height),i.fillStyle="Black",i.fillRect(t.x,t.y,t.width,t.height),i.fillRect(n.x,n.y,n.width,n.height),t.cells.forEach((e=>{i.fillRect(e.x,e.y,t.width,t.height)}))}},new class{constructor(){document.addEventListener("keydown",this.keydown)}keydown(t){e.player.direction=t.keyCode}}})();
