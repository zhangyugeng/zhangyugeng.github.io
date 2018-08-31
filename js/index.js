/**
 * Created by Administrator on 2018/8/28.
 */
$(function (){
      var width= $(".banner").width();
    var picUl=$(".banner ul:first");
    var pointUl=$(".banner ul:last");
    var index=1;
    var ani=function(){
        picUl.animate({transform:"translateX("+ -index*width +"px)"},500,function(){
            if(index==9){
                index=1;
            }
            point(index);
            picUl.css({
                transform:"translateX("+ -index*width +"px)"
            })
        })
    };
    var time=setInterval(function(){
        index++;
        ani();
    },1000);

    var point=function(index){
        var li=pointUl.find("li");
        li.removeClass("now");
        for(var i=0;i<li.length;i++){
            if(index==i+1){
                li[i].className="now";
            }
        }

    };

    $(".banner").on('swipeLeft',function(){
        clearInterval(time);
        index++;
        ani();
    });

    $(".banner").on('swipeRight',function () {
        clearInterval(time);
        index --;
        ani();
    });

});