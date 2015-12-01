/**
 * Created by Gaoyanbin on 2015/12/1.
 */

//用于方便查找元素的方法
function $(id){
    return typeof id =="string"?document.getElementById(id):id;
}

window.onload = function(){
    //获取tab_title元素下的所有li元素.
    var titleNames = $("tab_title").getElementsByTagName("li");
    //获取tab_content元素下的所有div.
    var contentNames = $("tab_content").getElementsByTagName("div");

    //alert(contentNames.length);
    //如果标题数量与内容数量不相同，则退出。
    if(titleNames.length != contentNames.length){
        return;
    }

    for(var i=0;i<titleNames.length;i++){
        titleNames[i].id = i;

        titleNames[i].onmouseover = function(){
            //清除所有li元素的class名（去除选中样式）和display属性。
            for(var j=0;j<titleNames.length;j++){
                titleNames[j].className = "";
                contentNames[j].style.display = "none";
            }
            this.className = "select";
            contentNames[this.id].style.display = "block";
        }
    }

}