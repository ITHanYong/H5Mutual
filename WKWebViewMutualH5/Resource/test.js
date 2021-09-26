
function jsToOcFunction1()
{
   window.webkit.messageHandlers.jsToOcNoPrams.postMessage({});
}

function jsToOcFunction2()
{
    window.webkit.messageHandlers.jsToOcWithPrams.postMessage({"params":"我是参数"});
}

function showAlert()
{
    alert("被OC截获到了");
}

//图片点击事件
function clickImage()
{
    alert("欢迎你关注我！点击了图片");
}

//OC调用JS改变背景色
function changeColor(parameter)
{
    document.body.style.backgroundColor = randomColor();
<!--        alert(parameter);-->
}

//随机生成颜色
function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}

// 切换图片
function changePicture(id, path) {
    var image = document.getElementById(id);
    image.src = path;
}
