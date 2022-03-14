

$(".portfolio-item").click(function(){     
    
    let termId = $(this).attr("id");
    let termDefinitionId = termId + "-desc";

   
    console.log($('#' + termDefinitionId));    
    $('#' + termDefinitionId).toggle(1000);  
    
    
})

$(document).ready(function() {

    // alert("Outside submit function is working");
  
    $("#emailForm").submit(function(e) {
      
        let name =  $("#name").val(); 
        let email = $("#email").val(); 
        let message = $("textarea").val();


        console.log("name: "+ name + " email: "+ email + "message: " + message);
      
    //   // alert("submit start is working");
      
    //   blanks.forEach(function(blank){ 
  
    //     // debugger;
    //     var userInput = $("input#" + blank).val();
    //     $("." + blank).text(userInput).val();
    //   });
      
      // alert("submit end is working");
  
      e.preventDefault();
  
    });
  });
  







