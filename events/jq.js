//writing with js including onclick fun1() in button tag
/*function fun1(){
     document.getElementById("img1").style.width="200px" //js syntax
}*/



//writing function directly using 

 /*$("button").click(fun1);
 function fun1(){
    $("#img1").css('width','200px')
 }*/

 //writing in less code
/*$("button").click(function(){
    $("#img1").css('width','200px');
})*/

//its perfect js file we use ready event
 /*$(document).ready(function(){
    $("button").click(function(){//we can also use dblclick
        $("#img1").css('width','200px');
    })
})
*/

$(document).ready(function(){
    $("#img1").mouseenter(function(){
        $("#img1").css('width','200px');
    })
    $("#img1").mouseleave(function(){
        $("#img1").css('width','400px');
    })
})


