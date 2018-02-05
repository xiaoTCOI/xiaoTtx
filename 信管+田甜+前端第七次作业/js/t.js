function biaodan() {
	alert("innerHTML");
	try{
		var xa = document.getElementById("a1").value;
		if (xa.length>=2) throw"至少两个字符"
	}
    catch (err){
    	var ya = document.getElementById("a");
    	ya.innerHTML = err;
    }
	
}