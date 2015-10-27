/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    //===================事件类型====================

    $("#btn01").click(function(){
        alert("单击事件!");
    });

    $("#btn02").dblclick(function(){
        alert("双击事件!");
    });

    $("#btn03").mouseenter(function(){
        alert("鼠标进入事件!");
    });

    $("#btn04").mouseleave(function(){
        alert("鼠标离开事件!");
    });



    //===================事件绑定====================

    //事件的绑定。JQuery的事件绑定可以多个事件都得到执行。on与bind一样，官方推荐用on
    //$("#btn05").bind("click",click01);
    //$("#btn05").bind("click",click02);
    $("#btn05").on("click",click01);
    $("#btn05").on("click",click02);
    //解除所有绑定事件。
    //$("#btn05").unbind("click");
    //解除某一个绑定事件。off与unbind一样。
    $("#btn05").off("click",click02);

    function click01(){
        console.log("click01");
    }

    function click02(){
        console.log("click02");
    }



    //===================事件冒泡====================

    //设置body事件
    $("body").on("click",bodyClick);
    function bodyClick(event){
        console.log(event);
    }

    //设置div事件
    $("#div1").on("click",divClick);
    function divClick(event){
        console.log(event);
        //event.stopPropagation();//阻止父级事件冒泡。此时事件只从P->DIV 不会执行BODY的事件。

    }

    //设置p事件
    $("#p1").on("click",pClick);

    function pClick(event){
        console.log(event);
        event.stopImmediatePropagation();//阻止所有的事件冒泡。元素的同级事件也会被阻止。
    }


    //=====================自定义事件对象=======================

    var myBtn = $("#btn07");

    myBtn.click(function(event){
        var e = jQuery.Event("MyEvent");//创建一个自定义的事件对象.
        myBtn.trigger(e);
        event.stopPropagation();
        console.log(event);
    });

    //绑定自定义事件
    myBtn.on("MyEvent",function(event){
       console.log(event);
    });








});