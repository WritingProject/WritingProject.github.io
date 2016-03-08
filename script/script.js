var title = $(".title");
$(function(){
 $("button").click(function({
   if(title.css("margin-top") == "0px"){
     title.animate({"margin-top": "500"},10000);
   } else {
    title.animate({"margin-top": "0"},10000);
   };
 }));
});
