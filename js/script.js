// JavaScript Document
//@Arman Grigoryan
//9/13/2016

$(document).ready(function(e) {
	$("#pagefinal").load('routing_guide.html #rg');
	
	$( "#pagefinal" ).on( "click", "#bnp", function() {
	 	$(".routing_guide").load('pre_chat_survey.html .pre_chat_survey');
	});
	function isValid(p) {
	  var phoneRe = /^[1-9]\d{2}[1-9]\d{2}\d{4}$/;
	  var digits = p.replace(/\D/g, "");
	  return (digits.match(phoneRe) !== null);
	}

	$( "#pagefinal" ).on( "change", "#state", function() {
		 if($(this).val()=="CA"){
		 	$("#rowstate").append('<div class="row" id="qfield"><label>Was your phone purchased in CA?</label><select class="form-control" id="question"><option value="">Select one</option><option value="yes">Yes</option><option value="no">No</option></select></div>');
		 	$(".pre_chat_survey").css("height", "height: 600px !important;");
		 }else{
			 $("#qfield").remove();
	     }
		 $("#state").removeClass("form-control-error");
			$("#state-error").hide();
	})

	$( "#pagefinal" ).on( "click", ".btn", function() {
	 	
	
		var name             = $("#name").val();
		var phone            = $("#phone").val();
		var state            = $("#state").val();
		var description      = $("#description").val();
		var flag = 0;
	
		if(name === false || name==""){
			$("#name").addClass("form-control-error");
			$("#name-error").remove();
			$("#name").parent(".row").append("<p class='error-text' id='name-error'>Full name is a required field</p>");
			flag++;
		}else{
			$("#name").removeClass("form-control-error");
			$("#name-error").hide();
		}
		if(phone === false || phone=="" || !isValid(phone)){
			$("#phone").addClass("form-control-error");
			$("#phone-error").remove();
			$("#phone").parent(".row").append("<p class='error-text' id='phone-error'>Please enter a valid phone number</p>");
			flag++
		}else{
			$("#phone").removeClass("form-control-error");
			$("#phone-error").hide();
		}
		if(state === false || state==""){
			$("#state").addClass("form-control-error");
			$("#state-error").remove();
			$("#state").parent(".row").append("<p class='error-text' id='state-error'>State is a required field</p>");
			flag++
		}else{
			$("#state").removeClass("form-control-error");
			$("#state-error").hide();
			var question             = $("#question").val();
			if(question === false || question==""){
				$("#question").addClass("form-control-error");
				flag++;
			}else{
				$("#question").removeClass("form-control-error");
			}
		
		}
		if(description === false || description==""){
			$("#description").addClass("form-control-error");
			$("#description-error").remove();
			$("#description").parent(".row").append("<p class='error-text' id='description-error'>Description is a required field</p>");
			flag++
		}else{
			$("#description").removeClass("form-control-error");
			$("#description-error").hide();
		}
		if(flag==0){
			$(".pre_chat_survey").html("<div class='headline'><h3>Congratulations!! You have reached the chat agent.</h3></div>");	
		}
	
	
	});
	
});