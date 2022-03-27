const form=document.querySelector('#create-account-form');
const usernameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const phoneNumberInput=document.querySelector('#phonenumber');
const passwordInput=document.querySelector('#password');
const confirmPasswordInput=document.querySelector('#confirm-password');

function submitFunction(){
	alert("Thank you for filling the form!");
}
function validateName(){
	//username
	if(usernameInput.value.trim()==''){
		setError(usernameInput,'Name cannot be blank');
	}else if(usernameInput.value.trim().length<5||usernameInput.value.trim().length>15){
		setError(usernameInput,'Name must be min 5 & max 15 characters');
	}else{
		setSuccess(usernameInput);
	}
}
function validateEmail(){
	//email
	if(emailInput.value.trim()==''){
		setError(emailInput,'Email cannot be blank');
	}else if(isEmailValid(emailInput.value)){
		setSuccess(emailInput);
	}else{
		setError(emailInput,'Invalid email');
	}
}
function validatePhone(){
	//phone number
	if(phoneNumberInput.value.trim()==''){
	   	setError(phoneNumberInput,'Phone number cannot be blank');
    }else if(!isPhoneNumber(phoneNumberInput.value)){
	   	setError(phoneNumberInput,'Invalid Phone number');
    }else{
	   	setSuccess(phoneNumberInput);
	}
}
function validatePassword(){
	//password
	if(passwordInput.value.trim()==''){
		setError(passwordInput,'Password cannot be blank');
	}else if (!isPassword(passwordInput.value)) {
		setError(passwordInput,'Invalid Password');
	}else{
		setSuccess(passwordInput);
	}
}
function validateConfirmPassword(){
	//confirm password
	if(confirmPasswordInput.value.trim()==''){
		setError(confirmPasswordInput,'Confirm Password cannot be blank');
	}else if (confirmPasswordInput.value!==passwordInput.value){
		setError(confirmPasswordInput,'Password does not match');
	}else{
		setSuccess(confirmPasswordInput);
	}
}

function setError(element,errorMessage){
	const parent=element.parentElement;
	if(parent.classList.contains('success')){
		parent.classList.remove('success');
	}
	parent.classList.add('error');
	const paragraph=parent.querySelector('p');
	paragraph.textContent=errorMessage;
}
function setSuccess(element){
	const parent=element.parentElement;
	if(parent.classList.contains('error')){
		parent.classList.remove('error');
	}
	parent.classList.add('success');
}

function isEmailValid(email){
	const reg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return reg.test(email);
}
function isPhoneNumber(phonenumber){
	const phoneNumberPattern= /^(0|[+91]{3})?[7-9][0-9]{9}$/;
	return phoneNumberPattern.test(phonenumber);
}
function isPassword(password){
	var passwordPattern= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
	return passwordPattern.test(password);
}  
