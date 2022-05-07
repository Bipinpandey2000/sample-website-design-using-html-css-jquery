function customFunc(){
	<!-- alert('hi5'); -->
	var q=prompt('Enter your Name?');
	var s=confirm('are you sure your name is '+q+' ?');
	if(s!==false){
		alert('congrats! Your Name is '+q+' .');
	}else{
		alert('sorry! you entered wrong ?');
	}	
}	
function customFunc1(){
	var a = document.getElementById('body_container');
	//alert(a.innerHTML);
	var b = document.getElementById('left');
	//b.innerHTML = a.innerHTML;
	//a.innerHTML = "Hi1";
	//b.innerHTML = "Hi2";
	a.style.backgroundColor = "pink";
	b.style.fontSize = "20px";
}
function customFunc2(){
	var a = document.getElementsByTagName("p");
	//alert (a[0].innerHTML);
	//alert (a.length);
	for(var i=0; i < a.length; i++){
		//a[i].innerHTML = i;
		a[i].style.color = "red";
	}
}