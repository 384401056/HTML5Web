/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("div").addClass("style1");


    //$("div").mouseenter(function(){
    //    $("div").css({
    //        "color":"#FF000F",
    //        "border-color":"#FF000F",
    //        "border-radius":"8px"
    //    });
    //});
    //
    //$("div").mouseleave(function(){
    //    $("div").css({
    //        "color":"#29b22d",
    //        "border-color":"#29b22d",
    //        "border-radius":"8px"
    //    });
    //});

    $("div").click(function(){
        $("div").toggleClass("style2")//在前面加载的样式和本次定义的样式之间切换。
    });
});