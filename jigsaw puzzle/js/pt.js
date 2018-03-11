window.onload = function(){
var picture = document.getElementById('picture');
// alert(picture)
var div = picture.getElementsByTagName('div');
var imgArr = picture.getElementsByTagName('img');
// alert(imgArr)
var restart = document.getElementById('restart');
var changepicture = document.getElementById('change-picture');
var j;

//实现随机打乱，并可还原
randomimg = function(){
for (var k = 0; k < 50; k++) {
	 //随机打乱
	    var a = Math.floor(Math.random()*9);//0~9
	    // alert(a)
	    var Arr = [1,3];
	    var arr = Arr[Math.floor(Math.random()*Arr.length)];//随机取1或3
        // alert(arr)
        if(arr == 1 && a+1 != 3 && a+1 != 6 && a+1 < 9) {
        	// alert('1')
        	var aj = a+1;
        	// alert(aj)
        	var myNumone = parseInt(div[a].children[0].getAttribute('num'));
        	var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
        	// alert(myNumone)
        	// alert(myNumtwo)
        	div[a].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
        	div[a].children[0].setAttribute('num',myNumtwo)
        	div[aj].innerHTML = '<img src="images/' + myNumone + '.jpg">';
        	div[aj].children[0].setAttribute('num',myNumone);
// 
        }
        if (arr == 3 && a+3 < 9){
        	var aj = a+3;
        	// alert(aj)
        	var myNumone = parseInt(div[a].children[0].getAttribute('num'));
        	var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
        	div[a].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
        	div[a].children[0].setAttribute('num',myNumtwo);
        	div[aj].innerHTML = '<img src="images/' + myNumone + '.jpg">';
        	div[aj].children[0].setAttribute('num',myNumone);
        }
    }
}

//点击两张图片，实现图片之间的交换
    var n = 0;
    var myNumOne;
    var myNumTwo;
    var huoquId;
    var onep;
    for (var i = 0; i < imgArr.length; i++) {
    	// alert('1')
    	// var that = this;
        div[i].id = i;
        div[i].onclick = function(){

        		    var p = div[this.id].getAttribute('index');
 	                var myNum = parseInt(imgArr[this.id].getAttribute('num'));
 	                // alert(myNum)
 	                n++;
 	                //第一次点击
 	                if (n%2 == 1) {
 	                	myNumOne = myNum;
 	                	huoquId = this.id;
 	                	onep = p;
 	                	// alert(huoquId)
 	                }
 	                //第二次点击，只能在第一次点击的图片的相邻图片点击
 	                if (n%2 == 0 && (Math.abs(onep-p) == 1) || (Math.abs(onep-p) == 3)){
 	                	myNumTwo = myNum;
 	                	// alert(myNumOne)
 	                	
 	                	div[this.id].innerHTML = '<img src="images/' + myNumOne + '.jpg">';
 	                	div[this.id].children[0].setAttribute('num',myNumOne);
 	                	div[huoquId].innerHTML = '<img src="images/' + myNumTwo + '.jpg">';
 	                	div[huoquId].children[0].setAttribute('num',myNumTwo);
 	                }
    //判断是否成功
    var c = 0;
    for (var i = 0; i < div.length; i++) {
    	var divnum = parseInt(div[i].getAttribute('index'));
    	// alert(divnum)
    	var imgnum = parseInt(div[i].children[0].getAttribute('num'));
    	// alert(imgnum)
    	//判断所有div中的'index'值是否与对应img中的'num'的值相等
    	if (divnum == imgnum) {
    		c++;
    		if (c == 9) {
    			alert('游戏成功');
    		   }
    	    }
         }
      }
  }
        
} 


    