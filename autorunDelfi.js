
document.addEventListener("DOMContentLoaded", RemoveDelfiShit, false);
			
function RemoveDelfiShit(event){

	
	var timer = setInterval(ClickBtn, 100);

	var DFirst = document.getElementById("notification-close");
	var DSecond = document.getElementsByClassName('C-ad-block-layer-content__heading-decoration--close C-button');
	//var CookieRibbon = document.getElementById("cookie_ribbon");

	function ClickBtn(){ 

    	if(DSecond.length > 0){
    		DSecond[0].click();
			console.log("Delfi Second Buy Notification removed!");
    	}

    	if(DFirst){
    		DFirst.click();
    		console.log("Delfi Buy Notification removed!");
    	}

    	/*if(CookieRibbon.style.display !== "none"){
    		CookieRibbon.style.display = "none";
    		console.log("Cookie Ribbon removed!");
    		
    	}*/

    	
  	
	}

	
	


}









