/**
 * Created by Gaoyanbin on 2015/10/29.
 */


$(document).ready(function(){

    $("#btnAppend").click(function(){
        var p = $("#p1");
        p.append(" 这是追加到末尾的内容.");
        //p.after(" 这是追加到末尾的内容.")//会换行添加
    });

    $("#btnPrepend").click(function(){
        var p = $("#p1");
        p.prepend(" 这是追加到开始的内容.");
        //p.before(" 这是追加到开始的内容.");//会换行添加
    });


    var text1;
    var text2;
    var text3;
    $("#btnAdd").click(function(){
        /**
         * 添加有三种
         * 1.html
         * 2.JQuery
         * 3.DOM
         */
        text1 = "<p>Html方式添加的元素<p/>";
        text2 = $("<p>JQuery方式添加的元素<p/>");
        text3 = document.createElement("p")
        text3.innerHTML = "DOM方式添加的元素";
        $("body").append(text1,text2,text3);

    });

    $("#btndel").click(function(){
        $("p").remove();
    });
});