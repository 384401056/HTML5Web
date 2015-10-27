/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("button").click(function(){
        //$("p").text("元素Text的属性被修改了");//通过元素名来选择。
        //$("#p2").text("元素Text的属性被修改了");//通过id来选择。
        $(".p3").text("元素Text的属性被修改了");//通过class来选择。
    });
});