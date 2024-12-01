/* acodian_menu2.js */

/*메뉴를 클릭하면 나머지 메뉴는 닫히고 클릭한 메뉴만 열리게 하고 만약에 마지막에 누를 메뉴가 현재 누를 메뉴랑 일치할때 메뉴가 닫히게*/

$(function(){
	var liIndex=-1;
	
	$("#main_nav > li > h3").click(function(){
		var $thisLi = $(this).parent("li");

		$("#main_nav > li").removeClass("active");

		if(liIndex==$thisLi.index()){
			$thisLi.removeClass("active");/*같으면 지우고*/
			liIndex=-1;
		}else{
			$thisLi.addClass("active");/*다르면 열리고*/
			liIndex=$thisLi.index();
		}

	});

	$("label.btn_close").click(function(){
		$("#main_nav > li").removeClass("active");
		liIndex=-1;
	});
});