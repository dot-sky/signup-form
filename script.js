const inputs = document.querySelectorAll(".form-field input");
inputs.forEach((elem) => {
    elem.addEventListener("focusout", () =>{
        if (!elem.checkValidity()){
            elem.style.color = "blue";
        }
        else{
            elem.style.color = "green";
        }
    })
})