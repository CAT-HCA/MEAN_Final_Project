//document on load event listener
$(document).ready(() => {
	//login button click event
	$("#updateBtn").click(() => {
		//getting user data to post
		let data = {
			username: $("#confUpdateUsername")
				.val()
				.trim(),
			password: $("#confUpdatePassword")
				.val()
				.trim(),
			email: $("#updateEmail")
				.val()
				.trim(),
		};
		console.log(data);
		//calling function to validate form
		let validationResult = validateForm(data);
		//if form validates... move forward with loggin in user
		if (validationResult == true) {
			//calling helper function to make post
			updateUser(data);
		}
	});
	//login form reset button
	$("#cancelUpdateBtn").click(() => {
		//calling function to clear all fields and errors
		clearFields();
	});
	//link to register button that appears if credentials are not correct
	$("#deleteProfileBtn").click(() => {
		showError(confirmDeleteDiv);
		$("#confirmDelBtn").click(() => {
			deleteUser(localStorage.getItem("ID"));
		});
	});
});

//function to make post call to http://localhost:3000/users/login to login user
function updateUser(data) {
	//function to hide username not found div w/ button
	hideMsg();
	$.ajax({
		type: "PUT",
		url: "http://localhost:3000/users/update",
		data: data,
		success: res => {
			if (res) {
				console.log(res);
				//function to empty field values
				emptyFields();
			} else {
				//function to empty field val errors
				emptyErrors();
				//function to show an applicable error message
				//pass in errorDiv (either register user div or field val errors)
				showError("#confirmDeleteDiv");
			}
		},
	});
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
		errorArray[errorArray.length] = "Please enter your username.";
	}
	//validating password
	if (data.password == "") {
		errorArray[errorArray.length] = "Please enter your password.";
	}
	//error handling
	if (errorArray.length == 0) {
		return true;
	}
	if (errorArray.length > 0) {
		//function to show an applicable error message
		//pass in errorDiv (either register user div or field val errors)
		showError("#errorMessageDiv");
		for (let i = 0; i < errorArray.length; i++) {
			$("<li>" + errorArray[i] + "</li>").appendTo($("#errorMessages"));
		}
		return false;
	}
}

//function to clear all fields and errors
function clearFields() {
	//function to empty field val errors
	emptyErrors();
	//function to hide username not found div w/ button
	hideMsg();
	//function to empty field values
	emptyFields();
}

//function to show an applicable error message
//pass in errorDiv (either register user div or field val errors)
function showError(errorDiv) {
	$(errorDiv)
		.addClass("bg-success border border-success rounded w-100 p-1")
		.css("display", "inline-block");
}

//function to empty field val errors
function emptyErrors() {
	$("#errorMessages").empty();
	$("#errorMessageDiv").removeClass("bg-success border border-success rounded w-100");
}

//function to empty field values
function emptyFields() {
	$("#confUpdateUsername").val("");
	$("#confUpdatePassword").val("");
	$("#updateEmail").val("");
}

//function to hide username not found div w/ button
function hideMsg() {
	$("#confirmDeleteDiv").css("display", "none");
}

function deleteUser(ID) {
	$.ajax({
		type: "DELETE",
		url: "http://localhost:3000/users/delete/" + ID,
		success:res => {
			if (res) {
				localStorage.clear();
				//redirects to home page
				window.location.href = "/";
			} else {
				//function to empty field val errors
				emptyErrors();
				//function to show an applicable error message
				//pass in errorDiv (either register user div or field val errors)
				showError("#errorMessageDiv");
			}
		},
	});
}
