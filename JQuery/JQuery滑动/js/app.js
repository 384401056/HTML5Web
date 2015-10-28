/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){
    //滑入
    $("#div1").click(function(){
        $("#div4").slideDown(1000);
    });

    //滑出
    $("#div2").click(function(){
        $("#div4").slideUp(1000);
    });

    //滑入/滑出切换
    $("#div3").click(function(){
        $("#div4").slideToggle(1000);
    });

});