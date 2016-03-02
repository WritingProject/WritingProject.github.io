$(function(){
 var test = 0;
 $("button").click(function({
   if(test==0){
    test++;
     $(".title").animate({marginTop: "500"},10000);
   },else{
    test--;
    $(".title").animate({marginTop: "0"},10000);
   };
 }));
});
