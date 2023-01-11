//changing of colour using div tag selector ,onclick fun
function fun2(){
    //$("div").css("background-color","orange");//using element selector
    //$("#p1").css("font-style","italic");// using id selector we can change single line
    //$(".para").css("font-style","italic");//using class selector we can access different elements
    //$("#div1,#div3").css("background-color","yellow");//using id selector accessing diff elements
    //$("#div1,li").css("background-color","yellow");//using id selector and element selector same time 
    //$("div>p").fadeToggle();// it removes all the element having div-tag parent and p-tag child
    //$("p:first").fadeToggle();//first line fades
    //$("p:second").fadeToggle();//second line fades
   // $("li:even").fadeToggle();//even in list evement  fades
       $("#div1,li").fadeToggle();

   //$("li:odd").fadeToggle();//odd in list evement  fades
} 