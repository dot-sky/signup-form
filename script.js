const BLANK_SPACE = "\u00A0";

const inputs = document.querySelectorAll(".form-field input");
inputs.forEach((elem) => {
    elem.addEventListener("focusout", () => {
        if (!elem.checkValidity()) {
            const input = elem.getAttribute("id");
            const errorLabel= elem.nextElementSibling;
            console.log(input);
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