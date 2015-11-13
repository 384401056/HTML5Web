/**
 * Created by Administrator on 2015/11/3.
 */

var pb;
var currentNum = 0;

$(document).ready(function(){
    $("#accordion").accordion();


    //自动补全
    var strArray = ["android","ios","html5","java","c"];//数据来源。
    $("#tags").autocomplete({
        source:strArray
    });

    //日期选择
    $("#datepicker").datepicker();

    //对话框
    $("#dialog" ).dialog({ autoOpen: false });//默认不显示。
    //$("#dialog" ).dialog({ hide: { effect: "explode", duration: 1000 } });//关闭时的动画效果
    $("#dialog").dialog({ buttons: [ { text: "确定", click: function() { //对话框中的按钮设置
        $( this ).dialog( "close" ); }} ]
    });

    $("#btn").button();
    $("#btn").on("click",function(){
        $("#dialog" ).dialog("open");
    });

    //=================进度条==========================
    pb = $("#pb");
    pb.progressbar({max:100}); //设置进度条的最大值。
    setInterval(changeProgressBar,100);//定时器，100毫秒执行一次changeprogressbar方法。

});

//改变进度条。
function changeProgressBar(){
    currentNum++;
    if(currentNum>=100){
        currentNum=0;
    }
    pb.progressbar("option","value",currentNum);//设置进度条的当前值。
}















