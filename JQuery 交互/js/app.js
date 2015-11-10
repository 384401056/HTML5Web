/**
 * Created by Administrator on 2015/11/3.
 */
$(document).ready(function(){
    //==============可以拖动================
    $("#div01").draggable();
    $("#div02").draggable();
    $("#div03").draggable();


    $("#div05").draggable();

    //==============可以被放置===================
    $("#div04").droppable();
    //添加被放置事件
    $("#div04").on("drop",function(event,ui){
        //alert(event);
        //$("#div04").text("Drop 事件");
        $("#div04").css("border-color","#FF000F");
    });

    //==============可缩放=======================
    $("#div06").resizable();


    //==============使ul元素可被选择===============
    $("#selector").selectable();

    $("#btn01").button();
    $("#btn01").on("click",function(){
        if($("#right").hasClass("ui-selected")){
            alert("回答正确！")
        }else{
            alert("对不起，请重新选择！")
        }
    })

    //================使ul元素可重新排序=============
    $("#sortable").sortable();

});













