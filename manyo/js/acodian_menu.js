/* acodian_menu.js */

/*메뉴를 클릭하면 열리고 열린 메뉴를 클릭하면 닫히게*/

$(function(){

   /* var liAry=[false,false,false,false,false,false,false,false];*/
    var liAry=[];
    
    for( var i=0; i<$("#main_mav >li").length; i++){
        liAry[i]=false;
    }
    
    $("#main_nav >li >h3").click(function(){
        var liIndex = $(this).parent("li").index();
        
        liAry[liIndex]=!liAry[liIndex];//=! 반대로 true
        
        if(liAry[liIndex]){
            $(this).parent("li").addClass("active");
        }else{
            $(this).parent("li").removeClass("active");
        } 
    });
    
    /*메뉴 리셋 후 닫히도록*/
    $("label.btn_close").click(function(){
        for( var i=0; i<$("#main_mav >li").length; i++){
            liAry[i]=false;
        }
        
        $("#main_nav >li").removeClass("active");
    });
    
});

