       var m = true;
	   var h = true;
       function command(num) {
	    // alert(num);
	        var resultDom = document.getElementById("result");
	        var str; 
	        str = resultDom.innerText;
	    // alert(str);
	        str = ((str == "0")?"":str);
	        str += num;
	        resultDom.innerText = str;
        }
        function dian(d){
        	if (m) {
        		var resultDom = document.getElementById("result");
        	    var i = resultDom.innerText;
        	    i = i + ".";    
        	    resultDom.innerText = i;
        	    m = false;
        	}    
        }
        function fuhao(c){
        	if (h) {
        		var resultDom = document.getElementById("result");
        	    var i = resultDom.innerText;
                i = i + c;    
        	    resultDom.innerText = i;
        	    h = false;
        	}
        }
        function equal(){
        	var resultDom = document.getElementById("result");
        	var i = resultDom.innerText;
        	var r = eval(i);
        	resultDom.innerText = r;
        	h = true;
        	var r = resultDom.innerText;
        	// alert(r);
        	// m = r.indexOf(".") == -1?true:false;
        	// alert(m);
        }
        function qc(){
        	var resultDom = document.getElementById("result");
        	resultDom.innerText = 0;
            m = true;
		    h = true;
        }
       