

$(".portfolio-item").click(function(){     
    
    let termId = $(this).attr("id");
    let termDefinitionId = termId + "-desc";

   
    console.log($('#' + termDefinitionId));    
    $('#' + termDefinitionId).show(1000);   


})




$(".card-text").click(function(){     
    
    let termId = $(this).attr("id");
    $('#' + termId).hide(1000);   
   

})
