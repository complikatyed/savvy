$(document).ready(function(){
    $("#menubar").mmenu();
    var API = $("#menubar").data( "mmenu" );
      
      $("#menubutton").click(function() {
         API.open();
      });
    
});