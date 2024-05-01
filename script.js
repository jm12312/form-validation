let name_inp = document.getElementById("name1");
let email_inp = document.getElementById("email");
let pass_inp = document.getElementById("password");
let date_inp = document.getElementById("date");
let mobile_inp = document.getElementById("mobile");
let address_inp = document.getElementById("address");
let pincode_inp = document.getElementById("pincode");
let country_inp = document.getElementById("country");

let body = document.body
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate_form() == false) {
        body.innerHTML = `
        <pre><h1>Done!</h1>
        Name: ${name_inp.value}
        Email: ${email_inp.value}
        Password: ${pass_inp.value}
        Date: ${date_inp.value}
        Mobile: ${mobile_inp.value}
        Address: ${address_inp.value}
        Pincode: ${pincode_inp.value}
        Country: ${country_inp.value}
        </pre>`;
        document.body.style.background = "gray";
    }
})
function setError(elem, mssg) {
    let p = elem.parentElement;
    let c = p.querySelector("div");
    c.innerText = mssg;
    c.classList.add("error");
    c.classList.remove("success");
}
function removeError(elem) {
    let p = elem.parentElement;
    let c = p.querySelector("div");
    c.innerText = "";
    c.classList.add("success");
    c.classList.remove("error");
}
function checkEmail(e) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

    return re.test(String(e).toLowerCase());
}
function checkpass(e) {
    let re = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(String(e));
}
function checknum(e){
    let re = /^[0-9]{10}$/;
    return re.test(String(e));
}
function checkpin(e){
    let re = /^[0-9]{6}$/;
    return re.test(String(e));
}
function validate_form() {
    let error = false;
    if (name_inp.value.trim() === "") {
        setError(name_inp, "Please enter your name");
        error = true;
    }
    else {
        removeError(name_inp);
    }
    if (email_inp.value.trim() === "") {
        setError(email_inp, "Please enter your email");
        error = true;
    }
    else if (!checkEmail(email_inp.value.trim())) {
        setError(email_inp, "Incorrect email address");
        error = true;
    }
    else {
        removeError(email_inp);
    }
    if (pass_inp.value.trim() === "") {
        setError(pass_inp, "Please enter a password");
        error = true;
    }
    else if (!checkpass(pass_inp.value.trim())) {
        setError(pass_inp, "Password should include an uppercase a lowercase a special character a digit and should have length of 6-16 characters");
        error = true;
    }
    else {
        removeError(pass_inp);
    }
    if (date_inp.value.trim() === "") {
        setError(date_inp, "Please enter your date of birth");
        error = true;
    }
    else {
        removeError(date_inp);
    }
    if (mobile_inp.value.trim() === "") {
        setError(mobile_inp, "Please enter your mobile number");
        error = true;
    }
    else if (!checknum(mobile_inp.value.trim())) {
        setError(mobile_inp, "Invalid mobile number");
        error = true;
    }
    else {
        removeError(mobile_inp);
    }
    if (address_inp.value.trim() === "") {
        setError(address_inp, "Please enter your address");
        error = true;
    }
    else {
        removeError(address_inp);
    }
    if (pincode_inp.value.trim() === "") {
        setError(pincode_inp, "Please enter your pincode");
        error = true;
    }
    else if (!checkpin(pincode_inp.value.trim())) {
        setError(pincode_inp, "Invalid pincode");
        error = true;
    }
    else {
        removeError(pincode_inp);
    }
    if (country_inp.value.trim() === "") {
        setError(country_inp, "Please enter your country");
        error = true;
    }
    else {
        removeError(country_inp);
    }
    return error;
}