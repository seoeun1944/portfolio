/* poster_slider.js */

$(function(){
    var nStep=$("#sns_slider >.imgs_wrap >ul >li").outerWidth();
    var leftValue=0;
    var maxLeftValue=0;
    
    setInterval(function(){
        maxLeftValue=$("#sns_slider >.imgs_wrap").outerWidth()-$("#sns_slider .imgs_wrap >ul").outerWidth();
        
        if(leftValue <= maxLeftValue){
            leftValue=maxLeftValue;
            $("#sns_slider .imgs_wrap >ul").css({left:leftValue});
        }else{
             $("#sns_slider .btn_next").css({background:"url(images/btn_sns_next_a.png)"});
        }
    },50);
    
    $("#sns_slider .btn_next").click(function(){
        $("#sns_slider .btn_prev").css({background:"url(images/btn_sns_prev_a.png)"});
        
        leftValue-=nStep;
        if(leftValue <= maxLeftValue){
            leftValue=maxLeftValue;
            $("#sns_slider .btn_next").css({background:"url(images/btn_sns_next_n.png)"});
        }
        $("#sns_slider >.imgs_wrap >ul").css({left:leftValue});
    });
    
    $("#sns_slider .btn_prev").click(function(){
        $("#sns_slider .btn_next").css({background:"url(images/btn_sns_next_a.png)"});
        
        leftValue+=nStep;
        if(leftValue >= 0){
            leftValue=0;
            $("#sns_slider .btn_prev").css({background:"url(images/btn_sns_prev_n.png)"});
        }
        $("#sns_slider >.imgs_wrap >ul").css({left:leftValue});
    });
    
});