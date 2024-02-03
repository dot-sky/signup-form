const BLANK_SPACE = "\u00A0";

const inputs = document.querySelectorAll(".form-field input");
inputs.forEach((elem) => {
    elem.addEventListener("focusout", () =>{
        if (!elem.checkValidity()){
            elem.nextElementSibling.textContent = "*Invalid input";
            elem.classList.add("invalid-input");
        }
        else{
            elem.classList.remove("invalid-input");
            elem.classList.add("valid-input");
            elem.nextElementSibling.textContent = BLANK_SPACE;
        }
    })
})