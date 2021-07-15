function binGo() {
var x = passOne.value;
var y = passCnf.value;
    if( x == y ) {
        passOne.style.border = "1px solid green";       
        passCnf.style.border = "1px solid green";
    } else{
        passCnf.value = "";
        passCnf.style.border = "1px solid red";
        passCnf.placeholder = "Паролі не співпадають!";
    }
}
binGo();
document.getElementById("passOne").onkeyup = function() {
    var myInput = document.getElementById("passOne");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    capital.classList.add("invalid");
    length.classList.add("invalid");
    number.classList.add("invalid");
    letter.classList.add("invalid");
    var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
    }
    var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }
    var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
        if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
}
let lstEduCount = 0;
document.getElementById("addEdu").onclick = function () {
    let li = document.createElement("li");
    li.id = "edu" + lstEduCount;
    let inputName = document.createElement("input");
    inputName.name = "edu" + lstEduCount;
    inputName.placeholder = "Education";
    inputName.required = "Заповніть це поле";
    let inputSpec = document.createElement("input");
    inputSpec.type = "text";
    inputSpec.placeholder = "Speciality";
    inputSpec.required = "Заповніть це поле";
    let inputStart = document.createElement("input");
    inputStart.type = "date";
    inputStart.required = "Заповніть це поле";
    let inputEnd = document.createElement("input");
    inputEnd.type = "date";
    inputEnd.required = "Заповніть це поле";
    let btnRemove = document.createElement("button");
    btnRemove.innerText = "";
    btnRemove.type = "button";
    btnRemove.onclick = function () {
        this.parentNode.remove();
    }
    li.appendChild(inputName);
    li.appendChild(inputSpec);
    li.appendChild(inputStart);
    li.appendChild(inputEnd);
    li.appendChild(btnRemove);
    document.getElementById("lstEdu").appendChild(li);
    lstEduCount++;
}
var outImage ="imgFoto";
function preview_2(obj) {
    if( FileReader ) {
        var reader = new FileReader();
        reader.readAsDataURL(obj.files[0]);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                document.getElementById(outImage).src = image.src;
            };
        }
    } else {
      // Not supported
    }
}
let txtAr = document.getElementById("txtAr");
let cnt = document.getElementById("cnt");
txtAr.onkeypress = function () {
	if( txtAr.value.length < 100 ) {
		cnt.style.color = "red";
		cnt.innerText = "Залишилось ввести ще " + ( 100 - txtAr.value.length ) + " символів."
	}
	if( txtAr.value.length > 100 ) {
		cnt.innerText = "До максимального значення залишилось ще " + ( 300 - txtAr.value.length ) + " символів."
	} 
	if( txtAr.value.length == 300 ) {
		cnt.innerText = "Дякуємо за заповнення цього поля!"
	}
}
function checkPostalCode(key) {
	return (key >= '0' && key <= '9') || key =='Backspace';
}
function checkPhoneKey(key) {
	return (key >= '0' && key <= '9') || key == '+' || key =='(' || key == ')' || key =='-' || key =='Backspace';
}
