/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){
    $("#btn_hide").click(function(){
       $("#p1").hide(300);//设置隐藏时间为1秒。
    });

    $("#btn_show").click(function(){
        $("#p1").show(300);//设置显示时间为1秒。
    });

    $("#btn_swich").click(function () {
        $("#p1").toggle(300);
    });
});