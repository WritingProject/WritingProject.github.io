$(function(){
 var variablevalue = 0;
 $("button").click(function({
   if(variablevalue < 1){
    test++;
     $(".title").animate({marginTop: "500"},10000);
   },else{
    test--;
    $(".title").animate({marginTop: "0"},10000);
   };
 }));
});
