/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){
    //加载htm文件片断
    $("body").load("../html/box.htm",function(content,status,complete){
        console.log(content);//片断内容
        console.log(status);//加载状态。
        console.log(complete);//完成。

        if(status!="success"){
            $("body").text("加载失败!");
        }else{
            //加载JS文件。
            $.getScript("../js/my.js").complete(function(){//加载js完成时执行.
                my();//执行my.js中的函数。
            }).error(function(){//加载js失败时执行。
                $("body").text("加载htm成功，但是加载my.js失败了!");
            });
        }
    });
});


















