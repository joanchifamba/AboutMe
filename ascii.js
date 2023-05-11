"use strict";
window.onload = loadJS;
var timer = null;
var txtAnimation; 
var animationArray = [];
var start = 0;
var end = 0;
var interval = 500;
var turbointerval = 250;
var i;
function loadJS()
{
	document.getElementById('btnPlay').addEventListener("click", play);
	document.getElementById('btnStop').addEventListener("click", stop);
	txtAnimation = document.getElementById("txtAnim");
	//document.biggerdeco.
}


function play ()
{
	var animation = document.getElementById('Animation');
	var selected = animation.options[animation.selectedIndex].value;
	
	if (selected == "Excercise")
	{
		//alert("excercise selected!");
		// get array
	 animationArray = EXERCISE.split("=====\n");
	 i = start;
	 end = animationArray.length;
	 //alert(animationArray[0]);
	 //alert(end);
	 if (timer === null) {
        timer = setInterval(animate,interval);
  }
		
		
		
		
		
		
	}
}


function animate()
{
	

	//var txtAnimation = document.getElementById("txtAnim");
	if ( i < end)
	{
		//alert(i);
		txtAnimation.value = animationArray[i];
		i++;
	}
	else
	{
		i = start;
		txtAnimation.value = animationArray[i];
	}
}

function stop ()
{
	
}