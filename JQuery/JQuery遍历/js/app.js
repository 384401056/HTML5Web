/**
 * Created by Gaoyanbin on 2015/10/27.
 */
/**文档加载完成后的事件*/
$(document).ready(function(){
    /**
     * 向下遍历
     * children()方法只能遍历其直接子元素，可以指定名字也可不指定。
     * find()方法要可以遍历其所有子元素，但是要指定名字
     */
    $("#div1").children().css("border","5px solid red");
    //$("#div1").find("#div2").css("border","5px solid green");
    //$("#div1").find("#div4").css("border","5px solid red");


    /**
     * 向上遍历
     * parent()方法只能遍历其直接父元素，可以指定名字也可不指定。
     * parents()方法要可以遍历其所有父元素,不指定名字则为所有父元素(包括html)。
     * parentsUntil()方法不指定参数时与parents()相同，当指定元素时，代表从本元素(不包括)开始到
     * 指定元素(不包括)之间的所有父元素。
     */
    //$("#p2").parent().css("border","5px solid red");
    //$("#p2").parents("body").css("border","5px solid red");
    $("#p2").parentsUntil("#div10").css("border","5px solid red");


    /**
     * 同级遍历
     * siblings()方法遍历除自身以外的所有同级元素。
     * next()方法遍历自身后面的每一个元素。
     * nextAll()方法遍历后面所有的元素，可以通过名字指定一个元素
     * nextUntil()方法没有参数与nextAll()相同，代参数就是区间遍历。
     *
     * prev()方法与上面相同，中是方向为向上。
     */
    //$("h3").siblings().css("border","5px solid red");
    //$("h3").next().css("border","5px solid red");
    //$("h3").nextAll().css("border","5px solid red");
    //$("h3").nextAll("h5").css("border","5px solid red");
    //$("h2").nextUntil().css("border","5px solid red");
    $("h3").prev().css("border","5px solid red");


    /**
     * 过滤
     * first()
     * last()
     */

    $("div a").first().css("background","#FFFF00");

});


















