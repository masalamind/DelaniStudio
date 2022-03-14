

$(".portfolio-item").click(function(){     
    
    let termId = $(this).attr("id");
    let termDefinitionId = termId + "-desc";

   
    console.log($('#' + termDefinitionId));    
    $('#' + termDefinitionId).toggle(1000);  
    
    
})









