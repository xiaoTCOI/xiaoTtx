window.onload = function () {
	var xmlhttp = null;
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
	}
	xmlhttp.open("GET","http://rap.taobao.org/mockjsdata/22995/AjaxTask",true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.status>=200 && xmlhttp.status<300 || xmlhttp.status==304) {
			var d = xmlhttp.responseText;
			// alert(d);
			var content = JSON.parse(d);
			// alert(content.text);
			document.getElementById("messages").innerHTML = "<img src= " + content.image + ">"
			+ "<p>" + "姓名：" + content.name + "<br /><br />" 
			+ "学号：" + content.id + "<br /><br />" 
			+ "学校：" + content.school + "<br /><br />" 
			+ "课程：" + "<br /><br />" + "</p>"
			+ "<li>" + content.lesson[0] + "</li>"
			+ "<li>" + content.lesson[1] + "</li>"
			+ "<li>" + content.lesson[2] + "</li>";
			// document.getElementById("one").innerHTML = content.lesson[0];
			// document.getElementById("two").innerHTML = content.lesson[1];
			// document.getElementById("three").innerHTML = content.lesson[2];
		}
		else{
			alert("请求失败");
		}
	}
}