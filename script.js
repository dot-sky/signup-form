function validatePassword(){
    let pwd1 = pwdInput.value.trim();
    let pwd2 = pwdConfInput.value.trim();
    console.log(pwd1);
    console.log(pwd2);
    if(pwd1.length !== 0){
        return pwd1 === pwd2;
    }
    return false;
}
const BLANK_SPACE = "\u00A0";

const inputs = document.querySelectorAll(".form-field input");
const pwdInputs = document.querySelectorAll("input[type=password]");
let pwdInput = pwdInputs[0];
let pwdConfInput = pwdInputs[1];
pwdInputs.forEach((elem) => {
    elem.addEventListener("focusout", () => {
        console.log(elem)
        if (!validatePassword()){
            pwdInput.setCustomValidity("invalid");
            pwdConfInput.setCustomValidity("invalid");
        }
        else{
            console.log("match")
            pwdInput.setCustomValidity("");
            pwdConfInput.setCustomValidity("");
        }
    });
})
inputs.forEach((elem) => {
    elem.addEventListener("focusout", () => {
        if (!elem.checkValidity()) {
            const input = elem.getAttribute("id");
            const errorLabel= elem.nextElementSibling;
            switch (input) {
                case "name":
                    errorLabel.textContent = "This field can't be left empty";
                    break;
                case "email":
                    errorLabel.textContent = "Enter a valid email";
                    break;
                case "pwd":
                    errorLabel.textContent = "Passwords do not match";
                    break;
                case "pwd-conf":
                    errorLabel.textContent = BLANK_SPACE;
                    break;
                default:
                    errorLabel.textContent = "Invalid input";
                    break;
            }
            elem.classList.add("invalid-input");
        }
        else {
            elem.classList.remove("invalid-input");
            elem.classList.add("valid-input");
            elem.nextElementSibling.textContent = BLANK_SPACE;
        }
    })
})