/* menu.js */

/** MENU **/
$(function(){
	$("#main_menu h3").click(function(){
		var $li=$(this).parent("li");
		var $children=$(this).next("div").children(".sub").children("ul").children("li");
		var $lis=$li.parent("ul").children("li");

		if($li.attr("class")=="active"){
			$li.removeClass("active");
			$children.removeClass("active");
		}else{
			$lis.removeClass("active"); 
			$li.addClass("active");
		}
	});
	
	$(".sub h4").click(function(){
		var $li=$(this).parent("li");
		var $lis=$li.parent("ul").children("li");

	   if($li.attr("class")=="active"){
			$li.removeClass("active");
		}else{
			$lis.removeClass("active"); 
			$li.addClass("active");
		}
	});
});
/** //MENU **/


/** BRAND **/
$(function(){
    $(".swiper-slide >div >div").click(function(){ 
        //로고
        $(".swiper-slide >div >div").removeClass("active");
        $(this).addClass("active");

        //제품
        var liIndexP=$(this).parents(".swiper-slide").index(); 
        var liIndex=$(this).index(); 
        
        $("#img_wrap >div >img").removeClass("active");
        $(this).parents("#bg_brand").children("#img_wrap").children("div").eq(liIndexP).children("img").eq(liIndex).addClass("active");
        
        /*liIndex=0;*/
    });
}); 




/** //BRAND **/
