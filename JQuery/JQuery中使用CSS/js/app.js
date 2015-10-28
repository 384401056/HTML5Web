/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("div").click(function(){
        $("div").css("border-radius","0px");
    });

    $("div").mouseenter(function(){
        $("div").css("color","#FF000F").css("border-color","#FF000F").css("border-radius","8px");
    });

    $("div").mouseleave(function(){
        $("div").css("color","#000000").css("border-color","#29b22d").css("border-radius","8px");
    });
});