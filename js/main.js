const valueSlider = document.querySelector("#length-password"),
    slider = document.querySelector("#slider"),
    checkUpperCase = document.querySelector("#uppercase"),
    checkLowerCase = document.querySelector("#lowercase"),
    checkSymbols = document.querySelector("#symbols"),
    checkCaracteresSpecials = document.querySelector("#caracteres-specials"),
    caracteres = "abcdefghijklMNOPQRSTUVWXYZ",
    textPassword = document.querySelector("#password");

// Pegar o valor padrão do slider
valueSlider.innerHTML = slider.value;

slider.addEventListener("change", () => {
    valueSlider.innerHTML = slider.value
})

function generatorPassword() {
    let pass = ""

    for (i = 0, c = caracteres.length; i < slider.value; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * c))
    }

    textPassword.innerHTML = pass

   /*  if (checkUpperCase.checked && checkLowerCase.checked && checkSymbols.checked && checkCaracteresSpecials.checked) {
        
        const caracteresAll = "abcdefghijklMNOPQRSTUVWXYZ@#$%+-[]*~_:?"
        for (i = 0, c = caracteresAll.length; i < slider.value; i++) {
            pass += caracteresAll.charAt(Math.floor(Math.random() * c))
        }
        textPassword.innerHTML = pass
    } */

    const checkbox = [checkUpperCase, checkLowerCase, checkSymbols, checkCaracteresSpecials];

    if (checkUpperCase.checked) {
         /* const [firstCheck, ...rest] = checkbox;
        rest.forEach((el) => {
            el.setAttribute("disabled", "disabled")
        }) */
        textPassword.innerHTML = pass.toUpperCase();
    }

    /* if (!checkUpperCase.checked) {
        const [first, ...rest] = checkbox;
        rest.forEach(el => el.removeAttribute("disabled"))
    } */

    if (checkLowerCase.checked) {
        textPassword.innerHTML = pass.toLowerCase();
    }

    if(checkSymbols.checked) {
        textPassword.innerHTML = '@#$' + pass + '@#$%'
    }

    if(checkCaracteresSpecials.checked) {
        textPassword.innerHTML = '+-[]*~_:?' + pass + '+-[]'
    }
}

function checkAndUncheck(caller) {
    var checks = document.querySelectorAll('input[type="checkbox"]');
    checks.forEach(c => c.checked = (c == caller));
}

function copyPassword() {
    navigator.clipboard.writeText(textPassword.innerHTML);
    alert("Copied to clipboard!");
}
