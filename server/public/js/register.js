//document on load event listener
$(document).ready(() => {
	//register button click event
	$("#regBtn").click(() => {
		//getting user data to post
		let data = {
			username: $("#registerUsername")
				.val()
				.trim(),
			password: $("#registerPassword")
				.val()
				.trim(),
			email: $("#registerEmail")
				.val()
				.trim(),
			confpassword: $("#regConfPassword")
				.val()
				.trim(),
		};
		//calling function to validate form
		let validationResult = validateForm(data);
		//if form validates... move forward with creating member
		if (validationResult == true) {
			//calling helper function to make post
			postNewUser(data);
		}
	});
	//register form reset button
	$("#regResetBtn").click(() => {
		clearFields();
	});
	//link to login button that appears if username or email is a dupe
	$("#goToLoginBtn").click(() => {
		//redirects to login page
		window.location.href = "/users/login";
	});
});

//function to make post call to http://localhost:3000/users/register to register user
function postNewUser(data) {
	//function to hide dupe username div w/ button
	hideMsg();
	$.post("http://localhost:3000/users/register", data, function() {})
		//if post success, access login page
		.done(function(res) {
			if (res) {
				//function to empty field values
				emptyFields();
				window.location.href = "/users/login";
			} else {
				//function to empty field val errors
				emptyErrors();
				//function to show an applicable error message
				//pass in errorDiv (either login user div or field val errors)
				showError("#alreadyRegDiv");
			}
		});
}

function clearFields() {
	//function to empty field val errors
	emptyErrors();
	//function to empty field values
	emptyFields();
	//function to hide dupe username div w/ button
	hideMsg();
}
function clearFields() {
	emptyErrors();
	hideMsg();
	emptyFields();
}
//function to show an applicable error message
//pass in errorDiv (either login user div or field val errors)
function showError(errorDiv) {
	$(errorDiv)
		.addClass("bg-success border border-success rounded w-100 p-1")
		.css("display", "inline-block");
}
//function to empty field val errors
function emptyErrors() {
	$("#errorMessages").empty();
	$("#errorMessageDiv").removeClass("bg-success border border-success rounded w-100 p-1");
}
//function to empty field values
function emptyFields() {
	$("#registerEmail").val("");
	$("#registerUsername").val("");
	$("#registerPassword").val("");
	$("#regConfPassword").val("");
}
//function to hide dupe username div w/ button
function hideMsg() {
	$("#alreadyRegDiv").css("display", "none");
}

//function to validate form fields
function validateForm(data) {
	//function to empty field val errors
	emptyErrors();
	//function to hide username not found div w/ button
	hideMsg();
	let errorArray = [];
	//validating email
	let emailPattern = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
	let result = emailPattern.test(data.email);
	if (data.email == "" || result != true) {
		errorArray[errorArray.length] = "Please enter a valid email address.";
	}
	//validating username
	if (data.username == "") {
		errorArray[errorArray.length] = "Please enter a valid username.";
	}
	//validating passwords match
	if (data.password == "" || data.confpassword == "") {
		errorArray[errorArray.length] = "Please enter a password and password confirmation.";
	}
	if (data.password !== data.confpassword) {
		errorArray[errorArray.length] = "Your password and confirmation do not match.";
	}
	//error handling
	if (errorArray.length == 0) {
		return true;
	}
	if (errorArray.length > 0) {
		//function to show an applicable error message
		//pass in errorDiv (either login user div or field val errors)
		showError("#errorMessageDiv");
		for (let i = 0; i < errorArray.length; i++) {
			$("<li>" + errorArray[i] + "</li>").appendTo($("#errorMessages"));
		}
		return false;
	}
}
