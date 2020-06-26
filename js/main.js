 //记录当前的位置
 var curImg = 0;
 //获取轮播图照片的个数
 var imgLength = document.getElementById("banner").getElementsByTagName("li").length
        
 //设置底部第一个选中按钮的样式
 var bottomli = document.getElementById("bottom"+curImg);
	 bottomli.setAttribute("style","background-color:grey");

 var time = setInterval(bannerImg,3000);
 //轮播图
 function bannerImg(){if(curImg<imgLength-1){curImg++;}else{curImg = 0;}

 document.getElementById("banner"+curImg).setAttribute("class","on");
if(curImg==0){document.getElementById("banner"+2).setAttribute("class","out");}
else{document.getElementById("banner"+(curImg-1)).setAttribute("class","out");}

//设置底下的圆形，一开始全部设为白色
 for(var i = 0 ;i < 3 ; i++){document.getElementById("bottom"+i).setAttribute("style","background-color:white")}

//设置选中的样式
 document.getElementById("bottom"+curImg).setAttribute("style","background-color:grey");}

//点击下一张
document.getElementById("nexImg").onclick = function(){

//清除时间定时器
clearInterval(time);bannerImg();time = setInterval(bannerImg,3000);}

//点击上一张
document.getElementById("preImg").onclick = function(){
clearInterval(time);

if(curImg==0)
{curImg = imgLength-1;}else{curImg--;}
document.getElementById("banner"+curImg).setAttribute("class","on");
if(curImg==imgLength-1)
{document.getElementById("banner"+0).setAttribute("class","out");}else{document.getElementById("banner"+(curImg+1)).setAttribute("class","out");}

for(var i = 0 ; i < 3 ; i ++){document.getElementById("bottom"+i).setAttribute("style","background-color:white");}
document.getElementById("bottom"+curImg).setAttribute("style","background-color:grey");time = setInterval(bannerImg,3000)}