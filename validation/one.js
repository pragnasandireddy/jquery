$(function(){
    var $registrationform = $('#registration')
    /*$validator.addMethod("noSpace",function(value,element){
        return value=="" || value.trim().length !=0
    },"spaces are not allowed");*/
    if($registrationform.length){
        $registrationform.validate({
            rules:{
                //username is the name of the textbox
                username: {
                    required: true,
                    //alphanumeric is the custom method, we defined in the above
                    //alphanumeric: true,
                    //noSpace: true
                },
                useremail: {
                    required: true,
                    customEmail: true
                },
                password: {
                    required: true
                },
                confirm: {
                    required: true,
                    equalTo: '#password'
                },
                gender: {
                    required: true
                },
                country: {
                    required: true
                }
        },
        message:{
        username: {
            //error message for the required field
            required: 'Please enter username!'
        },
        useremail: {
            required: 'Please enter email!',
            //error message for the email field
            email: 'Please enter valid email!'
        },
        password: {
            required: 'Please enter password!'
        },
        confirm: {
            required: 'Please enter confirm password!',
            equalTo: 'Please enter same password!'
        },
        country: {
            required: 'Please select country!'
        }
    },
    errorPlacement: function(error, element) 
    {
      if (element.is(":radio")) 
      {
          error.appendTo(element.parents('.gender'));
      }
      else if(element.is(":checkbox")){
          error.appendTo(element.parents('.agree'));
      }
      else 
      { 
          error.insertAfter( element );
      }
      
     }
    })

    }
});