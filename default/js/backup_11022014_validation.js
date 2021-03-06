$(document).ready(function(){	
	
	
	var email_reg_exp= /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
	var LetNumSpec=/^[0-9a-zA-Z_-]+$/;
	var number=/^[0-9]+$/;
	var amount=/^[0-9.]+$/;
	var alpha=/^[a-zA-Z]+$/;
	var alphanum=/^[a-zA-Z0-9]+$/;
	var alphaspace=/^[a-z A-Z]+$/;
	
	var content_email=/^\b\w+\@\w+[\.\w+]+\b$/;
	
	 validate_signup();
	 validate_quicksignup();
	 validate_login();
	 validate_forget();
	 validate_reset();
	 validate_edit_account();
	 validate_change_passsword();
	 validate_offer_task();
	 validate_askquestion();
	 validate_postmessage();
	   
	
	//global vars
$('#quicksign_up').click( function() {		
		alert("hi");
		 validate_quicksignup();	
 });	
$('#sign_up').click( function() {		
		
		 validate_signup();	
 });

$('#loginbtn').click( function() {		
		
		 validate_login();	
 });
$('#forgetbtn').click( function() {		
		
		 validate_forget();	
 });	
	
$('#resetbtn').click( function() {		
		
		 validate_reset();	
 });	
	
	
	
$('#editbtn').click( function() {		
		
		 validate_edit_account();	
 });	
	
$('#changepasswordbtn').click( function() {		
		
		 validate_change_passsword();	
 });	

$('#offerTaskbtn').click( function() {		
		
		 validate_offer_task();	
 });	

$('#askQuestionbtn').click( function() {		
		
		 validate_askquestion();	
 });

$('#posMessagebtn').click( function() {		
		
		 validate_postmessage();	
 });
	
	function validate_quicksignup()
	{
		var form = $("#quicksignupForm");
		var email = $("#email");
		var zip_code = $("#zip_code");
		
		
		email.focus(function() {  
			
			emailTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			full_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
		} );
		
		zip_code.focus(function() {  
			zip_codeTR.addClass('field_main');  
			emailTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			full_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
		} );
				
		email.blur(validateEmail);
		zip_code.blur(validateZipcode);
		
		//On key up		
		email.keyup(validateEmail);
		zip_code.keyup(validateZipcode);
		
		form.submit(function(){
			if(validateEmail() & validateZipcode())
				return true
			else
				return false;
		});
	}
	function validate_signup()
	{
	
	
		
		var form = $("#signupForm");
		
		var full_name = $("#full_name");
		var full_nameInfo = $("#full_nameInfo");
		var full_nameTR = $("#full_nameTR");
				
		var zip_code = $("#zip_code");
		var zip_codeInfo = $("#zip_codeInfo");
		var zip_codeTR = $("#zip_codeTR");
		
		var mobile_no = $("#mobile_no");
		var mobile_noInfo = $("#mobile_noInfo");		
		var mobile_noTR = $("#mobile_noTR");		
		
		var email = $("#email");
		var emailInfo = $("#emailInfo");
		var emailTR = $("#emailTR");
		
		var password = $("#password");
		var passwordInfo = $("#passwordInfo");
		var passwordTR = $("#passwordTR");
		
		
		//On click		
		email.focus(function() {  
			
			emailTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			full_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
		} );
		
		password.focus(function() {  
			passwordTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			emailTR.removeClass('field_main');	
			full_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main');  
		} );
		
		mobile_no.focus(function() {  
			mobile_noTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			emailTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			full_nameTR.removeClass('field_main');
 		} );
		
		
		zip_code.focus(function() {  
			zip_codeTR.addClass('field_main');  
			emailTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			full_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
		} );
		
		full_name.focus(function() {  
			full_nameTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			emailTR.removeClass('field_main');
			passwordTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main');  
	} );
		
		
		
		//On blur
		full_name.blur(validateFullName);		
		zip_code.blur(validateZipcode);
		mobile_no.blur(validateMobile);
		email.blur(validateEmail);
		password.blur(validatePassword);
		
		
		//On key up
		full_name.keyup(validateFullName);		
		zip_code.keyup(validateZipcode);
		mobile_no.keyup(validateMobile);
		//email.keyup(validateEmail);
		password.keyup(validatePassword);
		
		
		
		
		//On Submitting
		form.submit(function(){
			if(validateFullName() & validateEmail() & validatePassword() & validateZipcode() & validateMobile())
				return true
			else
				return false;
		});
		
	
	
	
	
	//validation functions
	
	
	
	
	
	function checkAvailability()
	{	
		
		var email = $("#email");
		var emailInfo = $("#emailInfo");
	
           
                // show our holding text in the validation message space
                emailInfo.removeClass('error1');
				emailInfo.html('<img src="'+baseThemeUrl+'/images/ajax-loader.gif" height="16" width="16" /> checking availability...');
				
			
          var res = $.ajax({						
						type: 'POST',
                        url: baseUrl+'home/checkemailavailability',
                        data: 'email=' + email.val(),
                        dataType: 'json', 
						cache: false,
						async: false                     
                    }).responseText;
		  
	
				return res;	
              
        
	}
	
	
	function validateEmail()
	{
	
		//testing regular expression
		var a = $("#email").val();
		var filter = email_reg_exp;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error1");
			emailInfo.text("E-mail address is valid!");
			emailInfo.removeClass("error1");
			emailInfo.addClass("success");
			
			
			var chk=checkAvailability();
			
			var obj = jQuery.parseJSON(chk);

			if(obj.ok==true)
			{				
				
				email.removeClass("error1");
				emailInfo.text("E-mail address is available!");
				emailInfo.addClass("success");
				
				return true;
			}
			else
			{
				email.addClass("error1");
				emailInfo.text("E-mail address is not available!");
				emailInfo.addClass("error1");
				return false;
			}
			
			
		}
		
		//if it's NOT valid
		else{
			email.addClass("error1");
			emailInfo.text("Type a valid e-mail please :P");
			emailInfo.addClass("error1");
			return false;
		}
	}
	
	
	
	function validatePassword()
	{
		
		var a = $("#password");	

		//it's NOT valid
		if(password.val().length <8){
			password.addClass("error1");
			passwordInfo.text("At least 8 characters is required");
			passwordInfo.addClass("error1");
			return false;
		}
		//it's valid
		else{			
			password.removeClass("error1");
			passwordInfo.text("Remember your password");
			passwordInfo.removeClass("error1");
			passwordInfo.addClass("success");
			return true;
		}
	}
	
	
	function validateFullName()
	{	
		
		var a = $("#full_name").val();
		var filter = alphaspace;
			
		if(full_name.val()=='')
		{
			full_name.addClass("error1");
			full_nameInfo.text("Enter Full name!");
			full_nameInfo.addClass("error1");
			
			return false;
			
		}
		//if it's NOT valid
		else if(full_name.val().length < 4){
			full_name.addClass("error1");
			full_nameInfo.text("We want names with more than 4 letters!");
			full_nameInfo.addClass("error1");
			return false;
		}
		
		
		//if it's valid
		else{
			
			
			
			//if it's valid number
			if(filter.test(a)){
				full_name.removeClass("error1");
				full_nameInfo.text("Full name is valid");
				full_nameInfo.removeClass("error1");
				full_nameInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				full_name.addClass("error1");
				full_nameInfo.text("Enter valid full name.");
				full_nameInfo.addClass("error1");
				return false;
			}
			
			
		}
	}
	
	
	
	function validateMobile()
	{
		
		//testing regular expression
		var a = $("#mobile_no").val();
		var filter = number;
		
		if(mobile_no.val()!='')
		{
		
		/*if(mobile_no.val()=='')
		{
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 10 digit mobile number!");
			mobile_noInfo.addClass("error1");
			
			return false;
			
		}
	
		else*/ if(mobile_no.val().length <= 11 )
		{		
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 11 digit mobile number!");
			mobile_noInfo.addClass("error1");
			return false;
		} 
		
		else if(mobile_no.val().length > 11 )
		{		
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 11 digit mobile number!");
			mobile_noInfo.addClass("error1");
			return false;
		} 
		
		else {
			
			//if it's valid number
			if(filter.test(a)){
				mobile_no.removeClass("error1");
				mobile_noInfo.text("Enter Valid Mobile number!");
				mobile_noInfo.removeClass("error1");		
				mobile_noInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				mobile_no.addClass("error1");
				mobile_noInfo.text("Enter valid 11 digit mobile number.");
				mobile_noInfo.addClass("error1");
				return false;
			}
		}
		
		
		} else {  return true; }	
	}
	
	
	function validateZipcode()
	{
		
		//testing regular expression
		var a = $("#zip_code").val();
		var filter = alphanum;
		
		if(zip_code.val()=='')
		{
			zip_code.addClass("error1");
			zip_codeInfo.text("Enter valid postal code number!");
			zip_codeInfo.addClass("error1");
			
			return false;
			
		}
	
		else if(zip_code.val().length < 4 )
		{		
			zip_code.addClass("error1");
			zip_codeInfo.text("Enter valid postal code number!");
			zip_codeInfo.addClass("error1");
			return false;
		} 
		
		else {
			
			//if it's valid number
			if(filter.test(a)){
				zip_code.removeClass("error1");
				zip_codeInfo.text("Valid postal code number.");
				zip_codeInfo.removeClass("error1");	
				zip_codeInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				zip_code.addClass("error1");
				zip_codeInfo.text("Enter valid postal code number.");
				zip_codeInfo.addClass("error1");
				return false;
			}
		}
	}
	

	
	
	
	}
	
	
	function validate_login()
	{
	
	
		
		var form = $("#loginForm");	
		
	
		var login_email = $("#login_email");
		var loginemailInfo = $("#loginemailInfo");
		var loginEmailTR = $("#loginEmailTR");
		
		var login_password = $("#login_password");
		var loginPasswordInfo = $("#loginPasswordInfo");
		var loginPasswordTR = $("#loginPasswordTR");
		
		
		
		//On click		
		login_email.focus(function() {  
			
			loginEmailTR.addClass('field_main'); 
			loginPasswordTR.removeClass('field_main');
		} );
		
		login_password.focus(function() {  
			loginEmailTR.removeClass('field_main'); 
			loginPasswordTR.addClass('field_main');
		} );
		
		
		
		
		//On blur
		
		login_email.blur(validateEmail);
		login_password.blur(validatePassword);
	
		login_password.keyup(validatePassword);
		
		
		//On Submitting
		form.submit(function(){
			if(validateEmail() & validatePassword())
				return true
			else
				return false;
		});
		
	
	
	
	
	
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#login_email").val();
		var filter = email_reg_exp;
		//if it's valid email
		if(filter.test(a)){
			login_email.removeClass("error1");			
			loginemailInfo.text("E-mail address is valid!");
			loginemailInfo.removeClass("error1");
			loginemailInfo.addClass("success");
			return true;
		}
		//if it's NOT valid
		else{
			login_email.addClass("error1");
			loginemailInfo.text("Type a valid e-mail please :P");
			loginemailInfo.addClass("error1");
			return false;
		}
	}
	
	function validatePassword(){
		var a = $("#login_password");
	

		//it's NOT valid
		if(login_password.val().length <8){
			login_password.addClass("error1");
			loginPasswordInfo.text("At least 8 characters is required.");
			loginPasswordInfo.addClass("error1");
			return false;
		}
		//it's valid
		else{			
			login_password.removeClass("error1");
			loginPasswordInfo.text("Password is valid.");
			loginPasswordInfo.removeClass("error1");
			loginPasswordInfo.addClass("success");
			return true;
		}
	}
	
	
	
	
	}
	
	
	function validate_forget()
	{
	
	
		
		var form = $("#forgetForm");	
		
	
		var forget_email = $("#forget_email");
		var forgetEmailInfo = $("#forgetEmailInfo");
		var forgetEmailTR = $("#forgetEmailTR");
		
	
		
		//On click		
		forget_email.focus(function() {  
			
			forgetEmailTR.addClass('field_main'); 
		
		} );
		
		
		
		//On blur
		
		forget_email.blur(validateEmail);
		
	
	
		forget_email.keyup(validateEmail);
		
		
		//On Submitting
		form.submit(function(){
			if(validateEmail())
				return true
			else
				return false;
		});
		
	
	
	
	
	
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#forget_email").val();
		var filter = email_reg_exp;
		//if it's valid email
		if(filter.test(a)){
			forget_email.removeClass("error1");			
			forgetEmailInfo.text("E-mail address is valid!");
			forgetEmailInfo.removeClass("error1");
			forgetEmailInfo.addClass("success");
			return true;
		}
		//if it's NOT valid
		else{
			forget_email.addClass("error1");
			forgetEmailInfo.text("Type a valid e-mail please :P");
			forgetEmailInfo.addClass("error1");
			return false;
		}
	}
	

	
	}
	
	
	
	function validate_reset()
	{
		
		
		
		
		var form = $("#resetForm");	
		
	
		var new_password = $("#new_password");
		var newpasswordInfo = $("#newpasswordInfo");
		var newpasswordTR = $("#newpasswordTR");
		
		
		var confirm_password = $("#confirm_password");
		var confirmpasswordInfo = $("#confirmpasswordInfo");
		var confirmpasswordTR = $("#confirmpasswordTR");
		
	
		
		//On click		
		new_password.focus(function() {  
			
			newpasswordTR.addClass('field_main'); 
			confirmpasswordTR.removeClass('field_main'); 
		
		} );
		
		confirm_password.focus(function() {  
			
			confirmpasswordTR.addClass('field_main'); 
			newpasswordTR.removeClass('field_main'); 
		
		} );
		
		
		
		//On blur
		
		new_password.blur(validatePass1);
		confirm_password.blur(validatePass2);
		
	
	
		new_password.keyup(validatePass1);
		confirm_password.keyup(validatePass2);
		
		
		//On Submitting
		form.submit(function(){
			if(validatePass1() & validatePass2())
				return true
			else
				return false;
		});
		
	
	
	
	
		
		function validatePass1(){
		var a = $("#new_password");
		var b = $("#confirm_password");

		//it's NOT valid
		if(new_password.val().length <7){
			new_password.addClass("error1");
			newpasswordInfo.text("At least 8 characters is required.");
			newpasswordInfo.addClass("error1");
			return false;
		}
		//it's valid
		else{			
			new_password.removeClass("error1");
			newpasswordInfo.text("New Password is valid.");
			newpasswordInfo.removeClass("error1");
			newpasswordInfo.addClass("success");
			validatePass2();
			return true;
		}
	}
	function validatePass2(){
		var a = $("#new_password");
		var b = $("#confirm_password");
		//are NOT valid
		if( new_password.val() != confirm_password.val() ){
			confirm_password.addClass("error1");
			confirmpasswordInfo.text("Passwords doesn't match!");
			confirmpasswordInfo.addClass("error1");
			return false;
		}
		//are valid
		else{
			confirm_password.removeClass("error1");
			confirmpasswordInfo.text("Confirm password is match.");
			confirmpasswordInfo.removeClass("error1");
			confirmpasswordInfo.addClass("success");
			return true;
		}
	}
	
	
		
	}
	
	
	
	
	function validate_edit_account()
	{
	
	
		
		var form = $("#editForm");
		
		var first_name = $("#first_name");
		var first_nameInfo = $("#first_nameInfo");
		var first_nameTR = $("#first_nameTR");
		
		
		var last_name = $("#last_name");
		var last_nameInfo = $("#last_nameInfo");
		var last_nameTR = $("#last_nameTR");
				
		var zip_code = $("#zip_code");
		var zip_codeInfo = $("#zip_codeInfo");
		var zip_codeTR = $("#zip_codeTR");
		
		var mobile_no = $("#mobile_no");
		var mobile_noInfo = $("#mobile_noInfo");		
		var mobile_noTR = $("#mobile_noTR");		
		
		var email = $("#email");
		var emailInfo = $("#emailInfo");
		var emailTR = $("#emailTR");
		
		var phone_no = $("#phone_no");
		var phone_noInfo = $("#phone_noInfo");
		var phone_noTR = $("#phone_noTR");
		
		
		//On click		
		email.focus(function() {  
			
			emailTR.addClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			first_nameTR.removeClass('field_main');
			last_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
			phone_noTR.removeClass('field_main'); 
		} );
		
		last_name.focus(function() {  
			emailTR.removeClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			first_nameTR.removeClass('field_main');
			last_nameTR.addClass('field_main');
			mobile_noTR.removeClass('field_main'); 
			phone_noTR.removeClass('field_main'); 
		} );
		
		first_name.focus(function() {  
			emailTR.removeClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			first_nameTR.addClass('field_main');
			last_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
			phone_noTR.removeClass('field_main'); 
		} );
		
		mobile_no.focus(function() {  
			emailTR.removeClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			first_nameTR.removeClass('field_main');
			last_nameTR.removeClass('field_main');
			mobile_noTR.addClass('field_main'); 
			phone_noTR.removeClass('field_main'); 
 		} );
		
		
		phone_no.focus(function() {  
			emailTR.removeClass('field_main'); 
			zip_codeTR.removeClass('field_main');
			first_nameTR.removeClass('field_main');
			last_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
			phone_noTR.addClass('field_main'); 
 		} );
		
		
		zip_code.focus(function() {  
			zip_codeTR.addClass('field_main');  
			emailTR.removeClass('field_main'); 
			first_nameTR.removeClass('field_main');
			last_nameTR.removeClass('field_main');
			mobile_noTR.removeClass('field_main'); 
			phone_noTR.removeClass('field_main'); 
		} );
		
		
		
		
		
		//On blur
		first_name.blur(validateFirstName);		
		last_name.blur(validateLastName);		
		zip_code.blur(validateZipcode);
		mobile_no.blur(validateMobile);
		phone_no.blur(validatePhone);
		email.blur(validateEmail);
		
		
		
		//On key up
		first_name.keyup(validateFirstName);		
		last_name.keyup(validateLastName);		
		zip_code.keyup(validateZipcode);
		mobile_no.keyup(validateMobile);
		phone_no.keyup(validatePhone);
		email.keyup(validateEmail);
	
		
		
		
		
		//On Submitting
		form.submit(function(){
			if(validateFirstName() & validateLastName()  & validateEmail() & validatePhone() & validateZipcode() & validateMobile())
				return true
			else
				return false;
		});
		
	
	
	
	
	//validation functions
	
	
	
	
	
	
	function validateEmail()
	{
	
		//testing regular expression
		var a = $("#email").val();
		var filter = email_reg_exp;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error1");
			emailInfo.text("E-mail address is valid!");
			emailInfo.removeClass("error1");
			emailInfo.addClass("success");
			
			return true;
		
			
			
		}
		
		//if it's NOT valid
		else{
			email.addClass("error1");
			emailInfo.text("Type a valid e-mail please :P");
			emailInfo.addClass("error1");
			return false;
		}
	}
	
	
	
	
	
	function validateFirstName()
	{	
		
		var a = $("#first_name").val();
		var filter = alpha;
			
		if(first_name.val()=='')
		{
			first_name.addClass("error1");
			first_nameInfo.text("Enter First name!");
			first_nameInfo.addClass("error1");
			
			return false;
			
		}
		//if it's NOT valid
		else if(first_name.val().length < 4){
			first_name.addClass("error1");
			first_nameInfo.text("We want names with more than 4 letters!");
			first_nameInfo.addClass("error1");
			return false;
		}
		
		
		//if it's valid
		else{
			
			
			
			//if it's valid number
			if(filter.test(a)){
				first_name.removeClass("error1");
				first_nameInfo.text("First name is valid");
				first_nameInfo.removeClass("error1");
				first_nameInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				first_name.addClass("error1");
				first_nameInfo.text("Enter valid first name.");
				first_nameInfo.addClass("error1");
				return false;
			}
			
			
		}
	}
	
	
	
	function validateLastName()
	{	
		
		var a = $("#last_name").val();
		var filter = alpha;
			
		if(last_name.val()=='')
		{
			last_name.addClass("error1");
			last_nameInfo.text("Enter Last name!");
			last_nameInfo.addClass("error1");
			
			return false;
			
		}
		//if it's NOT valid
		else if(last_name.val().length < 4){
			last_name.addClass("error1");
			last_nameInfo.text("We want names with more than 4 letters!");
			last_nameInfo.addClass("error1");
			return false;
		}
		
		
		//if it's valid
		else{
			
			
			
			//if it's valid number
			if(filter.test(a)){
				last_name.removeClass("error1");
				last_nameInfo.text("Last name is valid");
				last_nameInfo.removeClass("error1");
				last_nameInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				last_name.addClass("error1");
				last_nameInfo.text("Enter valid Last name.");
				last_nameInfo.addClass("error1");
				return false;
			}
			
			
		}
	}
	
	
	
	
	
	function validateMobile()
	{
		
		//testing regular expression
		var a = $("#mobile_no").val();
		var filter = number;
		
		if(mobile_no.val()!='')
		{
		/*if(mobile_no.val()=='')
		{
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 10 digit mobile number!");
			mobile_noInfo.addClass("error1");
			
			return false;
			
		}
	
		else*/ if(mobile_no.val().length <= 9 )
		{		
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 10 digit mobile number!");
			mobile_noInfo.addClass("error1");
			return false;
		} 
		
		else if(mobile_no.val().length > 10 )
		{		
			mobile_no.addClass("error1");
			mobile_noInfo.text("Enter valid 10 digit mobile number!");
			mobile_noInfo.addClass("error1");
			return false;
		} 
		
		else {
			
			//if it's valid number
			if(filter.test(a)){
				mobile_no.removeClass("error1");
				mobile_noInfo.text("Valid mobile number.");
				mobile_noInfo.removeClass("error1");		
				mobile_noInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				mobile_no.addClass("error1");
				mobile_noInfo.text("Enter valid 10 digit mobile number.");
				mobile_noInfo.addClass("error1");
				return false;
			}
		}
		
		} else { return true; }
	}
	
	function validatePhone()
	{
		
		//testing regular expression
		var a = $("#phone_no").val();
		var filter = number;
		
		
	
		
		
		
	 if(phone_no.val().length > 1 )
	 {
			//if it's valid number
			if(filter.test(a))
			{
				
				
				
				 if(phone_no.val().length > 15 )
				{		
					phone_no.addClass("error1");
					phone_noInfo.text("Enter valid and less than 15 digit phone number!");
					phone_noInfo.addClass("error1");
					return false;
				} 
				
				
				 else { phone_no.removeClass("error1");
						phone_noInfo.text("Valid phone number.");
						phone_noInfo.removeClass("error1");		
						phone_noInfo.addClass("success");
						return true;
						
				 }
		
		   }
		   //if it's NOT valid
			else{
				phone_no.addClass("error1");
				phone_noInfo.text("Enter valid phone number.");
				phone_noInfo.addClass("error1");
				return false;
			}
		   
		
		}
		
		else
		{
			return true;	
		}
			
		
	}
	
	
	function validateZipcode()
	{
		
		//testing regular expression
		var a = $("#zip_code").val();
		var filter = alphanum;
		
		if(zip_code.val()=='')
		{
			zip_code.addClass("error1");
			zip_codeInfo.text("Enter valid postal code number!");
			zip_codeInfo.addClass("error1");
			
			return false;
			
		}
	
		else if(zip_code.val().length < 4 )
		{		
			zip_code.addClass("error1");
			zip_codeInfo.text("Enter valid postal code number!");
			zip_codeInfo.addClass("error1");
			return false;
		} 
		
		else {
			
			//if it's valid number
			if(filter.test(a)){
				zip_code.removeClass("error1");
				zip_codeInfo.text("Valid postal code number.");
				zip_codeInfo.removeClass("error1");	
				zip_codeInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				zip_code.addClass("error1");
				zip_codeInfo.text("Enter valid postal code number.");
				zip_codeInfo.addClass("error1");
				return false;
			}
		}
	}
	

	
	
	
	}
	
	
	
		function validate_change_passsword()
	{
	
	
		
		var form = $("#changepasswordForm");
		
		
		
		var password = $("#password");
		var passwordInfo = $("#passwordInfo");
		var passwordTR = $("#passwordTR");
		
		
		//On click		
		
		password.focus(function() {  
			passwordTR.addClass('field_main'); 
			 
		} );
		
	
		
		//On blur
		
		password.blur(validatePassword);
		
		
		//On key up
	
		password.keyup(validatePassword);
		
		
		
		
		//On Submitting
		form.submit(function(){
			if(validatePassword())
				return true
			else
				return false;
		});
		
	
	
	//validation functions
	
	function validatePassword()
	{
		
		var a = $("#password");	

		//it's NOT valid
		if(password.val().length <8){
			password.addClass("error1");
			passwordInfo.text("At least 8 characters is required");
			passwordInfo.addClass("error1");
			return false;
		}
		//it's valid
		else{			
			password.removeClass("error1");
			passwordInfo.text("Ey! Remember: your password");
			passwordInfo.removeClass("error1");
			passwordInfo.addClass("success");
			return true;
		}
	}
	
	
	
	
	}
	
	
	
	function validate_offer_task()
	{
		
		
		
		var form = $("#offerTaskForm");	
		
	
		var offer_amount = $("#offer_amount");
		var offer_amountInfo = $("#offer_amountInfo");
		var offer_amountTR = $("#offer_amountTR");
		
		var task_comment = $("#task_comment");
		var task_commentInfo = $("#task_commentInfo");
		var task_commentTR = $("#task_commentTR");
		
		
		
		//On click		
		offer_amount.focus(function() {  
			
			offer_amountTR.addClass('field_main'); 
			task_commentTR.removeClass('field_main');
		} );
		
		task_comment.focus(function() {  
			offer_amountTR.removeClass('field_main'); 
			task_commentTR.addClass('field_main');
		} );
		
		
		
		
		//On blur
		
		offer_amount.blur(validateAmount);
		//task_comment.blur(validateComment);
	
		offer_amount.keyup(validateAmount);
		//task_comment.keyup(validateComment);
		
		
		
		//On Submitting
		form.submit(function(){
			if(validateAmount() & validateComment())
				return true
			else
				return false;
		});
		
	
	
		
	
	
	
		function validateAmount()
		{
		
		//testing regular expression
		var a = $("#offer_amount").val();
		var filter = amount;
		
		if(offer_amount.val()=='')
		{
			offer_amount.addClass("error1");
			offer_amountInfo.text("Enter valid offer amount!");
			offer_amountInfo.addClass("error1");
			
			return false;
			
		}
	
		else if(offer_amount.val().length < 1 )
		{		
			offer_amount.addClass("error1");
			offer_amountInfo.text("Enter valid offer amount!");
			offer_amountInfo.addClass("error1");
			return false;
		} 
		
		
		
		else {
			
			//if it's valid number
			if(filter.test(a)){
				offer_amount.removeClass("error1");
				offer_amountInfo.text("Valid offer amount.");
				offer_amountInfo.removeClass("error1");		
				offer_amountInfo.addClass("success");
				return true;
			}
			//if it's NOT valid
			else{
				offer_amount.addClass("error1");
				offer_amountInfo.text("Enter valid offer amount.");
				offer_amountInfo.addClass("error1");
				return false;
			}
		}
	}
	
	
	
		function checkcontentemail()
		{	
			
				var task_comment = $("#task_comment");
				var task_commentInfo = $("#task_commentInfo");
		
			   
					// show our holding text in the validation message space
					
				
			  var res = $.ajax({						
							type: 'POST',
							url: baseUrl+'task/checkcontentemail',
							data: 'task_comment=' + task_comment.val(),
							dataType: 'json', 
							cache: false,
							async: false                     
						}).responseText;
			  
		
					return res;	
				  
			
		}
	
	
	
		function validateComment()
		{
			//it's NOT valid
			if(trim(task_comment.val()).length < 10){
				task_commentInfo.addClass("error1");
				task_commentInfo.text("Enter valid Description.");
				return false;
			}
			//it's valid
			else{		
			
			
					   	
			var chk=checkcontentemail();
			
			var obj = jQuery.parseJSON(chk);
			
			
			
				if(obj.ok==false)
				{	
				
						task_commentInfo.addClass("error1");
						task_commentInfo.text("You can not write email address in message!");
						task_commentInfo.addClass("error1");					
						
						return false;
					
					
					
				}
				else
				{
					
					task_commentInfo.removeClass("error1");
					task_commentInfo.text("Offer Description is valid.");
					task_commentInfo.addClass("success");
					return true;
				}
				
				
				
			}
		}
		
	}
	
	
	function validate_askquestion()
	{
		
		
		
		var form = $("#askQuestionForm");	
		
	
	
		
		var task_comment = $("#task_comment");
		var task_commentInfo = $("#task_commentInfo");
		var task_commentTR = $("#task_commentTR");
		
		
		
	
		task_comment.focus(function() {  
			task_commentTR.addClass('field_main');
		} );
		
		
		
		
		//On blur
		
		
		//task_comment.blur(validateComment);
	
		
		//task_comment.keyup(validateComment);
		
		
		
		//On Submitting
		form.submit(function(){
			if(validateComment())
				return true
			else
				return false;
		});
		
		
		
		
		function checkcontentemail()
		{	
			
			var task_comment = $("#task_comment");
			var task_commentInfo = $("#task_commentInfo");
		
			   
					// show our holding text in the validation message space
					
				
			  var res = $.ajax({						
							type: 'POST',
							url: baseUrl+'task/checkcontentemail',
							data: 'task_comment=' + task_comment.val(),
							dataType: 'json', 
							cache: false,
							async: false                     
						}).responseText;
			  
		
					return res;	
				  
			
		}
	
	
		function validateComment()
		{
			
			var a = task_comment.val();
			var filter = content_email;
		
			
			//it's NOT valid
			if(trim(task_comment.val()).length < 10){
				task_commentInfo.addClass("error1");
				task_commentInfo.text("Enter valid Comment.");
				return false;
			}
		
			
			//it's valid
			else{		
			
			
			   	
			var chk=checkcontentemail();
			
			var obj = jQuery.parseJSON(chk);
			
			
			
				if(obj.ok==false)
				{	
				
					task_commentInfo.addClass("error1");
						task_commentInfo.text("You can not write email address in message!");
						task_commentInfo.addClass("error1");
						
						
						return false;
					
					
					
				}
				else
				{
					
						task_commentInfo.removeClass("error1");
						task_commentInfo.text("Comment is valid.");
						task_commentInfo.addClass("success");
						return true;
						
				}
			}
		}
		
	}
	
	
	function validate_postmessage()
	{
		
		
		
		var form = $("#posMessageForm");	
		
	
	
		
		var task_comment = $("#task_comment");
		var task_commentInfo = $("#task_commentInfo");
		var task_commentTR = $("#task_commentTR");
		
		
		
	
		task_comment.focus(function() {  
			task_commentTR.addClass('field_main');
		} );
		
		
		
		
		//On blur
		
		
	//	task_comment.blur(validateComment);
	
		
		//task_comment.keyup(validateComment);
		
		
		
		//On Submitting
		form.submit(function(){
			if(validateComment())
				return true
			else
				return false;
		});
		
	
	
	
		function validateComment()
		{
			//it's NOT valid
			if(trim(task_comment.val()).length < 10){
				task_commentInfo.addClass("error1");
				task_commentInfo.text("Enter valid Comment.");
				return false;
			}
			//it's valid
			else{			
				task_commentInfo.removeClass("error1");
				task_commentInfo.text("Comment is valid.");
				task_commentInfo.addClass("success");
				return true;
			}
		}
		
	}
	
	

});