function biaodan() {
	// alert("检测");
    var k1;
    var k2;
    var k3;
    var k4;
    var k5;
    var k6;
    var k7;
    var k8;
	var xa = document.getElementById("a1").value;
    // alert(xa);
    var ya = document.getElementById("a");
    if (xa.length<2 && xa.length>0) {ya.innerHTML = "至少两个字符"; k1 = false;}
    else if (xa == "") {ya.innerHTML = "此处为必填";k1 = false;}
    else
        {ya.innerHTML = "√";k1 = true;}
        

    var xb = document.getElementById("b1").value;
    // alert(xb);
    var yb = document.getElementById("b");
    var j1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    // alert(j1);
    if ((!j1.test(xb)) && (xb != "")) {yb.innerHTML = "身份证格式有误"; k2 = false;}
    else if (xb == "") {yb.innerHTML = "此处为必填"; k2 = false;}
    else
        {yb.innerHTML = "√"; k2 = true;}
    
    
    var xc = document.getElementById("c1").value;
    var yc = document.getElementById("c");
    var j2 = /^1[3|4|5|7|8]{1}[0-9]{9}$/;
    if ((!j2.test(xc)) && xc != "") {yc.innerHTML = "输入格式有误"; k3 = false;}
    else if (xc == "") {yc.innerHTML = "此处为必填"; k3 = false;}
    else
        {yc.innerHTML = "√"; k3 = true;}
   

    var xq = document.getElementById("qq").value;
    var yq = document.getElementById("d");
    var j3 = /^[1-9]{1}[0-9]{4,14}$/;
    if ((!j3.test(xq)) && xq != "") {yq.innerHTML ="该QQ号无效"; k4 = false;}
    else if (xq == "") {yq.innerHTML = "此处为必填"; k4 = false;}
    else
        {yq.innerHTML = "√"; k4 = true;}
    

    var xe = document.getElementById("e1").value;
    var ye = document.getElementById("e");
    var j4 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if ((!j4.test(xe)) && xe != "") {ye.innerHTML = "输入格式有误"; k5 = false;}
    else if (xe == "") {ye.innerHTML = "此处为必填"; k5 = false;}
    else
        {ye.innerHTML = "√"; k5 = true;}
    

    var xf = document.getElementById("f1").value;
    var yf = document.getElementById("f");
    if (xf.length<8 && xf.length>0) {yf.innerHTML = "密码不能少于八位"; k6 = false;}
    else if (xf.length>16) {yf.innerHTML = "密码不能多于十六位"; k6 = false;}
    else if (xf == "") {yf.innerHTML = "此处为必填"; k6 = false;}
    else
        {yf.innerHTML = "√"; k6 = true;}
    


    
    var xg = document.getElementById("g1").value;
    var yg = document.getElementById("g");
    if ((xf != xg) && xg != "") {yg.innerHTML = "密码不匹配"; k7 = false;}
    else if (xg == "") {yg.innerHTML = "此处为必填"; k7 = false;}
    else
        {yg.innerHTML = "√"; k7 = true;}
    

    var xh = document.getElementById("qr");
    var yh = document.getElementById("h");
    if (xh.checked == true) {yh.innerHTML = "";k8 = true;}
    else
        { yh.innerHTML = "（此处为必选才可注册）";
    k8=false;}


    if (k1 && k2 && k3 && k4 && k5 && k6 && k7 && k8)
        alert("恭喜，注册成功！"); 
    else
        alert("注册失败！请按提示修改");
}	