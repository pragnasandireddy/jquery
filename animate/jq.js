/* jQuery .animate */

// .animate( properties [, duration ] [, easing ] [, complete ] )

// .animate( properties, options )
$(document).ready(function(){
  $( "#go" ).click(function() {
    $( "#block" ).animate({
      opacity: .5,
      marginLeft: "+=50",
      height: "400px"
    }, 3000, "linear", function() {
      $( this ).after( "<div>Animation complete.</div>" );
    });
  });
})

  
  // $( "#go" ).click(function() {
  //   $( "#block" )
  //     .animate({ width: "90%" }, 1000)
  //     .animate({ fontSize: "40px" }, 1000)
  //     .animate({ borderLeftWidth: "30px" }, 1000)
  // });
  