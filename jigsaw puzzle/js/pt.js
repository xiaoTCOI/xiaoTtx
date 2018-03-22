window.onload = function(){
    var picture = document.getElementById('picture');
    var div = picture.getElementsByTagName('div');
    var imgArr = picture.getElementsByTagName('img');
    var restart = document.getElementById('restart');
    var changepicture = document.getElementById('change-picture');
    var j;
    //实现随机打乱，并可还原
    randomimg = function(){
        for (var K = 0; K < 20; K++) {
            for (var k = 0; k < 9; k++) {
            //随机打乱，空白图片与周围图片进行交换
                var Arr = [1,-1,-3,3];
                var arr = Arr[Math.floor(Math.random()*Arr.length)];//随机取1,-1,-3,3
                if (div[k].children[0].src=="") {
                    if (arr == 1) {
                        if (k+arr != 3 && k+arr != 6 && k+arr< 9) {
                            var aj = k+1;
                            var myNumone = parseInt(div[k].children[0].getAttribute('num'));
                            var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
                            // alert(myNumone)
                            div[k].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
                            div[k].children[0].setAttribute('num',myNumtwo)
                            div[aj].innerHTML = '<img' + '>';
                            div[aj].children[0].setAttribute('num',myNumone);
                        }
                    }
                    if (arr==-1) {
                        if (k+arr != 5 && k+arr != 2 && k > 0) {
                            var aj = k-1;
                            var myNumone = parseInt(div[k].children[0].getAttribute('num'));
                            var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
                            // alert(myNumone)
                            div[k].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
                            div[k].children[0].setAttribute('num',myNumtwo)
                            div[aj].innerHTML = '<img' + '>';
                            div[aj].children[0].setAttribute('num',myNumone);
                        }
                    }
                    if (arr==-3) {
                        if (k+arr >= 0) {
                            var aj = k-3;
                            var myNumone = parseInt(div[k].children[0].getAttribute('num'));
                            var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
                            // alert(myNumone)
                            div[k].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
                            div[k].children[0].setAttribute('num',myNumtwo)
                            div[aj].innerHTML = '<img' + '>';
                            div[aj].children[0].setAttribute('num',myNumone);
                        }
                    }
                    if (arr==3) {
                        if (k+arr < 9) {
                            var aj = k+3;
                            var myNumone = parseInt(div[k].children[0].getAttribute('num'));
                            var myNumtwo = parseInt(div[aj].children[0].getAttribute('num'));
                            div[k].innerHTML = '<img src="images/' + myNumtwo + '.jpg">';
                            div[k].children[0].setAttribute('num',myNumtwo)
                            div[aj].innerHTML = '<img' + '>';
                            div[aj].children[0].setAttribute('num',myNumone);
                        }
                    }
                }
            }
        }
    }
    var onep;
    for (var i = 0; i < imgArr.length; i++) {
        div[i].id = i;//点击空白图片周围一张图片，该图片与空白区进行交换
        div[i].onclick = function(){
            var p = div[this.id].getAttribute('index');
            var myNum = parseInt(imgArr[this.id].getAttribute('num'));
            var myNumOne = myNum;
            var hvalue;
            for (var h = 0; h < div.length; h++) {
                if (div[h].children[0].src=="") 
                    hvalue = h;
            }
            onep = div[hvalue].getAttribute('index');
            var sum = parseInt(onep) + parseInt(p);//取出onep和p中的值相加
            //实现只能点击空白图片周围图片才能交换
            if ((Math.abs(onep-p) == 1 && sum != 5 && sum != 11) || Math.abs(onep-p) == 3) {
                var myNumNull = parseInt(div[hvalue].children[0].getAttribute('num'));
                div[this.id].innerHTML = '<img' + '>';
                div[this.id].children[0].setAttribute('num',myNumNull);
                div[hvalue].innerHTML = '<img src="images/' + myNumOne + '.jpg">';
                div[hvalue].children[0].setAttribute('num',myNumOne);
            }
            //判断是否成功
            var c = 0;
            for (var i = 0; i < div.length; i++) {
                 var divnum = parseInt(div[i].getAttribute('index'));
                 var imgnum = parseInt(div[i].children[0].getAttribute('num'));
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
 


    