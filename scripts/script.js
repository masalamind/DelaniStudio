$(document).ready(function() {

    $(".card-img").click(function(){     
    
        let termId = $(this).attr("id");
        let termDefinitionId = termId + "-txt";        
           
        $('#' + termDefinitionId).toggle(1000); 
        
        
    })

  
    $(".portfolio-item").hover(function(){     
    
        let termId = $(this).attr("id");
        let termDefinitionId = termId + "-desc";     
       
        $('#' + termDefinitionId).toggle(1000);  
                
    })

    
  
    $("#emailForm").submit(function(e) {
      
        let name =  $("#name").val();        

        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('email-btn')

        function alert(message, type) {

            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            alertPlaceholder.append(wrapper)
        }

        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
            alert(name + " ,we have received your message. Thank you for reaching out to us", 'success');

            })
        }
    
        e.preventDefault();
  
    });



});
  







