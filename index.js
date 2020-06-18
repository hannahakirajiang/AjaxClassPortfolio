// JavaScript Document
$(document).ready(function(){
	'use strict';
	//use jQuery ajax call
	$.ajax({
		url:"index.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			//empity the div on the screen
			$("#contents").empty();
			//fond each records - friends is the name of the table
			$(xml).find("Step").each(function(){
				//create the set of data using fields in xml
				var info = ""
				
				+ "<strong>Project Name:</strong>"
				+ "<br>"
				+ $(this).find("Name").text() 
				+ "<br>"
				+ "<br><strong>Description:</strong>"
				+ "<br>"
				+ $(this).find("Des").text()
				+ "<br>"
				+ "<br><strong>Link: </strong>"
				+ "<br>"
				+ $(this).find("link").text()
				+ "<p></p>"
				+ "<hr>";
			//add yje info to the div on the page
				$("#contents").append(info);
			});
			
		}
		
	});
});