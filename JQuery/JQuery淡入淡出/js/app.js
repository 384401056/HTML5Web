/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){
    //淡入按钮事件
    $("#btn_fadeIn").click(function(){
        $("div").fadeIn(1000);
    });

    //淡出按钮事件
    $("#btn_fadeOut").click(function(){
        $("div").fadeOut(1000);
    });

    //淡入/淡出切换
    $("#btn_fadeToggle").click(function(){
        $("div").fadeToggle(1000);
    });

    //淡入到多少值
    $("#btn_fadeTo").click(function(){
        $("div").fadeTo(1000,0.2);
    });
});