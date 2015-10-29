/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("button").click(function(){
       $("div").slideDown(300,function(){
           $("#p1").text("DIV打开了");
       })
    });


});