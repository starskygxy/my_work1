window.onload=function(){
	var oDiv=document.getElementById('nav_top');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aA=oUl.getElementsByTagName('a');
	var i=0;
		
	for(i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){

			for(i=0;i<aLi.length;i++){
				aLi[i].className='';
				aA[i].style.color='#000000';
			}
				this.className='action';
				aA[this.index].style.color='#9ddc29';
		}
	}




}