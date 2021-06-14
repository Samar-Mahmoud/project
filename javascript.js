function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("topnav").style.padding = "8px 5px";
        document.getElementById("topnav").style.height = "90px";
        document.getElementById("logo").style.fontSize = "8px";
        document.getElementById("icon").style.padding = "8px";
    } else {
        document.getElementById("topnav").style.padding = "20px 10px";
        document.getElementById("topnav").style.height = "115px";
        document.getElementById("logo").style.fontSize = "15px";
        document.getElementById("icon").style.padding = "12px";
    }
}

window.onload = pageLoad;
function pageLoad() {
    var contactForm = document.getElementById("register");
    register.onsubmit = validate;
}
function validate() {
    var check = true;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var mail = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var cname = document.getElementById("cname").value;
    var ccnum = document.getElementById("ccnum").value;
    if (fname == "" || lname == "") {
        alert("Name is required!");
        check = false;
    }
    if (gender == "") {
        alert("Gender is required!");
        check = false;
    }
    if (address == "") {
        alert("Address is required!");
        check = false;
    }
    if (phone == "") {
        alert("Mobile phone is required!");
        check = false;
    }
    if (mail == "") {
        alert("E-mail is required!");
        check = false;
    }
    if (password == "") {
        alert("Password is required!");
        check = false;
    }
    if (cname == "") {
        alert("Name on card is required!");
        check = false;
    }
    if (ccnum == "") {
        alert("Card number is required!");
        check = false;
    }

    if (!fname.match(/^[A-Za-z ]+$/) || !lname.match(/^[A-Za-z ]+$/)) {
        alert("only letters or space allowed in name field");
        check = false;
    }
    if (!mail.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
        alert("Email is not valid");
        check = false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Z])(?!.*\s).{8}$/)) {
        alert("Password is not valid.\nIt must include only 8 characters, uppercase and lowercase characters, at least 1 digit, 1 special character, and no white space.");
        check = false;
    }
    // if (!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
    if (!phone.match(/^[0-9]{11}$/)) {
        alert("Phone is not valid");
        check = false;
    }
    if (!ccnum.match(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/)) {
        alert("Card number is not valid");
        check = false;
    }
    if(check == true) {alert("Thank you!");}
    return check;
}
