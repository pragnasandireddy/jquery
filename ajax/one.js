$(document).ready(function(){
    var form = $("#registration")

    $("#subbtn").click(function(){
        /*var name =$("#name").val();
        var email=$("#email").val();
        var password=$("#password").val();
        var number=$("#number").val();
        var gender=$("#gender").val();
        var country=$("#country").val();*/
       $.ajax( { 
            url:form.attr("action"),
            type:"post",
            data:$("#registration input").serialize(),
            success:function(data){
                console.log(data)
            }
            }) 
    })
    
})