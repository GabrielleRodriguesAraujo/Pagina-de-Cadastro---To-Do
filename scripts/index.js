const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

/* Vamos adicionar um addEventListener para quando dermos um submit no form. E como o botton desse projeto está do tipo submit, quando clicarmo SVGFEMergeNodeElement, o EVENTO submit será executado. */

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

/*essa função abaixo, executara as validações do formulario. Terá o comportamento da bordinha verde e vermelha. Essa função chamará outras funções que irão alterar a class do for-contol para error ou succsess*/
function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    /*agora iremos verificar um input por vez.
    1º caso, se for vazio ela chamará uma segunda função que será SetErrorFor, que passaremos dentro dela o input que queremos validar, que no caso é o username e passaremos um segundo parametro que será a mensagem de erro "o nome de usuário é obrigatório"*/

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório.")
    } else{
        setSuccessFor(username)
    }

    // 2ª Caso, iremos verificar se o emial é vazio

    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatório")
    }else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.")
    }
    else{
        setSuccessFor(email)
    }

    if(passwordValue ===""){
        setErrorFor(password, "A senha é obrigatória.")
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.")
    }else{
        setSuccessFor(password)
    }
    
    if (passwordConfirmationValue ===""){
        setErrorFor(passwordConfirmationValue, "A confirmação de senha é obritória")
    } else if(passwordConfirmationValue !== passwordConfirmationValue){
        setSuccessFor(passwordConfirmation, "As senhas não conferem.")
    }else{
        setSuccessFor(passwordConfirmation); 
    }

    const formControls = form.querySelectorAll(".form-control");
  
    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
      });
    

    if(formIsValid){
        console.log("O formulário está 100% válido!");
    }
       
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    /*Aqui pegaremos a tag small que é a mensagem de erro e que está dentro do form-control*/

    small.innerText = message;
    
    formControl.className = "form-control error"

}

function setSuccessFor(input){
    const formControl = input.parentElement;

    /*Add a classe de sucesso*/
    formControl.className = "form-control success"

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }




