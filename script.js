function validatePassword() {
    const pwd1 = mainPwdInput.value.trim();
    const pwd2 = confPwdInput.value.trim();
    if (pwd1.length >= 6) {
        return pwd1 === pwd2;
    }
    return false;
}
const BLANK_SPACE = "\u00A0";

const inputs = document.querySelectorAll(".form-field input");
const pwdInputs = document.querySelectorAll("input[type=password]");
const mainPwdInput = pwdInputs[0];
const confPwdInput = pwdInputs[1];
const pwdErrorLabel = mainPwdInput.nextElementSibling;

pwdInputs.forEach((elem) => {
    elem.addEventListener("focusout", () => {
        if (!validatePassword()) {
            pwdInputs.forEach((inputElem) => {
                inputElem.classList.add("invalid-input");
                inputElem.classList.remove("valid-input");
                if (mainPwdInput.value.trim().length < 6) {
                    pwdErrorLabel.textContent = "Password needs to be longer";
                    inputElem.setCustomValidity("Password needs to be at least"
                        + " 6 characters long");
                }
                else {
                    pwdErrorLabel.textContent = "Passwords do not match";
                    inputElem.setCustomValidity("Passwords do not match");
                }
            })
        }
        else {
            pwdInputs.forEach((inputElem) => {
                inputElem.classList.add("valid-input");
                inputElem.classList.remove("invalid-input");
                inputElem.setCustomValidity("");
            })
            pwdErrorLabel.textContent = BLANK_SPACE;
        }
    });
})
inputs.forEach((elem) => {
    elem.addEventListener("focusout", () => {
        if (elem.getAttribute("type") === "password")
            return;
        if (!elem.checkValidity()) {
            const errorLabel = elem.nextElementSibling;
            const input = elem.getAttribute("id");
            switch (input) {
                case "phone":
                    errorLabel.textContent = "Enter a valid phone number";
                    break;
                case "email":
                    errorLabel.textContent = "Enter a valid email";
                    break;
                default:
                    errorLabel.textContent = "This field can't be left empty";
                    break;
            }
            elem.classList.add("invalid-input");
            elem.classList.remove("valid-input");
        }
        else {
            elem.classList.remove("invalid-input");
            elem.classList.add("valid-input");
            elem.nextElementSibling.textContent = BLANK_SPACE;
        }
    })
})