$(function(){
 var title = $(".title");
 $("button").click(function({
   if(title.css("margin-top") == "0px"){
    test++;
     title.animate({"margin-top": "500"},10000);
   } else {
    test--;
    title.animate({"margin-top": "0"},10000);
   };
 }));
});
