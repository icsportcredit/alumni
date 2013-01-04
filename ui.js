// JavaScript Document
$(document).ready(function(){
  $("button").click(function(){
    $("h2").hide();
  });
  
  //FOR TESTING
  //alert('working'); 
  
  //$('#content').load('pages/index.php');
  
  $('ul#nav li a').click(function() {
   var page = $(this).attr('href');
	 $('#content').load(page + '.html');
	 return false; 	
  });
   
});

function toggle_element(element,speed){
	$(element).toggle(speed);
}
