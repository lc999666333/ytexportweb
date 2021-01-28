function geturl() {
    // var cururl = window.location.href;
    // var pobj=document.getElementsByTagName("main");
    // alert(2);

    // var strongobj=document.createElement('strong');
    // // alert(1);

    // var textobj=document.createTextNode("----我是使用原生Js实现的");
    // // alert(1);
    // document.append(textobj);
    // // pobj.appendChild(textobj);
    // // pobj.appendChild(strongobj.appendChild(textobj));
    // alert(3);
}

window.onload=function(){
    geturl();
}

 {/* //进行Iframe的自动撑开,让所有父页面的Iframe都自动适应包含页高度  */}
function autoHeight(){ 
var doc = document, 
p = window; 
while(p = p.parent){ 
var frames = p.frames, 
frame, 
i = 0; 
while(frame = frames[i++]){ 
if(frame.document == doc){ 
frame.frameElement.style.height = doc.body.scrollHeight + 'px'; // 这里一定要注意 火狐必须要加'px‘ 否则火狐无效 
doc = p.document; 
break; 
} 
} 
if(p == top){ 
break; 
} 
} 
} 
 