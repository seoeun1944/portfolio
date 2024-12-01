/* banner_slider.js */

var leftValue;
var imgLength;
var imgWidth;
var timerID;
var liIndex;

$(function(){
	//요소초기화
	init();

	//이벤트 초기화
	initEventListener()

	//타이머함수 호출
	onMove();
});

function init(){
	this.leftValue=0;
	this.imgLength=$(".imgs > img").length;
	this.imgWidth=$(".imgs_wrap").width();
	this.timerID=0;
	this.liIndex=0;
	this.bCheck=true;
    // 1903 * 3
	$(".imgs").css({width:this.imgWidth*this.imgLength+"px"});
}

function initEventListener(){

	$(".btn_next").click(function(){
		liIndex++;

		if(liIndex>=imgLength){
			liIndex=0;
		}

		liCount(liIndex);
	});

	$(".btn_prev").click(function(){
		liIndex--;

		if(liIndex<0){
			liIndex=imgLength-1;
		}

		liCount(liIndex);
	});

	$(".buttons > li").click(function(){
		liIndex=$(this).index();

		liCount(liIndex);
	});

}

function onMove(){
	timerID=setInterval(function(){
		$(".btn_next").click();
	},5000);
}

function liCount(nIndex){
	$(".buttons > li").removeClass("active");
	$(".buttons > li").eq(nIndex).addClass("active");
	$(".imgs").css({
		left:-imgWidth*nIndex+"px"
	});
}
