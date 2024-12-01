/* banner_slider.js */
var leftValue;
var imgLength;
var imgWidth;
var liIndex;
var bCheck;

$(function(){
    //요소초기화
    init();
    
    //이벤트 초기화
    initEventListener();
    
    //타이머함수 호출
    onMove();
});

function init(){
    this.leftValue=0;
    this.imgLength=$(".imgs >img").length;
    this.imgWidth=$(".imgs_wrap >.imgs >img").width();

    this.liIndex=0;
    this.bCheck=true;
    
    $(".imgs").css({width:this.imgWidth*this.imgLength+"px"});
}

function initEventListener(){

    $(".buttons >li").click(function(){
        liIndex=$(this).index(); 
        
        liCount(liIndex);
    });

}

function onMove(){
    timerID=setInterval(function(){
    },5000);
}

function liCount(nIndex){
    $(".buttons >li").removeClass("active");
    $(".buttons >li >a").removeClass("active");
    $(".buttons >li").eq(nIndex).addClass("active");
    $(".buttons >li >a").eq(nIndex).addClass("active");
    
    $(".imgs").css({
            left:-imgWidth*nIndex+"px"
        });
}



/* MOBLIE */
$(function(){
	var leftValue=0;

    $("#best_mobile >.btn_prev").stop().animate({
        opacity:0
    });
    
	$("#best_mobile >.btn_next").click(function(){
		$("#best_mobile >.btn_prev").stop().animate({
			opacity:1
		},500);

		leftValue-=320;

		if(leftValue<=-1280){
			leftValue=-1280;
			$("#best_mobile >.btn_next").stop().animate({
				opacity: 0
			},500);
		}

		$("#best_mobile >#m_item > ul").stop().animate({
			left:leftValue
		},500);
	
	});


	$("#best_mobile >.btn_prev").click(function(){
		$("#best_mobile >.btn_next").stop().animate({
			opacity:1
		},500);

		leftValue+=320;

		if(leftValue>=0){
			leftValue=0;
			$("#best_mobile >.btn_prev").stop().animate({
				opacity: 0
			},500);
		}

		$("#m_item > ul").stop().animate({
			left:leftValue
		},500);
	
	});
});




