/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){

    $("#btn1").click(function(){

        //Ajax请求.
        //$.get("http://localhost:8080/Struts2Test/login",function(data){
        //    $("#span1").text(data);
        //    console.log(data);
        //});

        //Ajax请求.
        $.post("http://localhost:8080/Struts2Test/login",function(data){//如果成功执行的函数
            $("#span1").text(data);
            console.log(data);
        }).error(function(){//如果出错，执行的函数。
            $("#span1").text("加载错误！！！");
        });

        //Ajax请求.
        //$.ajax({
        //    url: "http://localhost:8080/Struts2Test/login",
        //    success: success,
        //    dataType: "text"
        //});

    });

    //function success(response,status,xhr){
    //    console.log(response);
    //    console.log(status);
    //    console.log(xhr);
    //}

});


















