// JavaScript Document
<script>
(function() {
   'use strict';
   var a,b;
function init(){ 
   a=document.getElementById('keyboard').getElementsByTagName('input'); 

for(b=0;b<a.length;b++) {
if(a[b].type==='button') { 
   a[b].addEventListener('onclick',makeClickHandler(b));
   }
  }

document.getElementById('clear').onclick=function() {
   document.getElementById('text').value='';
  }
 }

function makeClickHandler(b) {
   a[b].onclick=function() {
if(a[b].id==='back') {
   document.getElementById('text').value=
   document.getElementById('text').value.replace(/.$/,'');
 }

else {

   document.getElementById('text').value+=this.value.toLowerCase();
   }
	   
	   
	   
	   
function upperCaseF(b){
	   a[b].onclick=function() {
if(a[b].id==='CL') {
    setTimeout(function(){
        b.value = b.value.toUpperCase();
    }, 1);
}	  
}	}		   
  
	   
	   
	   
  };
 }
   window.addEventListener?
   window.addEventListener('load',init,false):
   window.attachEvent('onload',init);
})();
</script>
