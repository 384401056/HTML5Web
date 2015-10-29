/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("#btn1").click(function(){
        alert($("#text").text());//获取元素Text内容。
    });

    $("#btn2").click(function(){
        alert($("#text").html());//获取元素html内容。
    });

    $("#btn3").click(function(){
        alert($("#input1").val());//获取元素value。
    });

    $("#btn4").click(function(){
        var a = $("#a1");
        //获取元素属性。
        alert("href: "+a.attr("href")+"\n"+"id: "+ a.attr("id")+"\n");
    });



    $("#btnSet1").click(function(){
        var a = $("#p2");
        a.text("被设置后的元素内容。")
    });
    $("#btnSet2").click(function(){
        var a = $("#input2");
        a.val("被设置后的元素value")
    });
    $("#btnSet3").click(function(){
        var a = $("#a2");
        a.text("腾讯");
        a.attr({
            "href":"http://www.qq.com",
            "title":"tengxun"
        });
    });

    //===================通过回调函数来设置文字、内容和属性=======================
    
    $("#btnSet4").click(function(){
       var a = $("#p3");
        //function的第一个参数为元素下标，每二个参数为原来的text
        a.text(function (i,text) {
            return  text+" 这是新加入的内容。元素下标:"+i;
        });
    });

    $("#btnSet5").click(function(){
        var a = $("#input3");

        //function的第一个参数为元素下标，每二个参数为原来的value
        a.val(function(i,value){
           return value+"这是新的内容。元素下标:"+i;
        });
    });

    $("#btnSet6").click(function(){
        var a = $("#a3");

        //function的第一个参数为元素下标，每二个参数为原来的属性值
        a.attr("href",function(i,href){
           return "http://www.qq.com"+href+i;
        });
    });
});