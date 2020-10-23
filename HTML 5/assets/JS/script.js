let nome = document.querySelector("#nome")

let nickename = document.querySelector("#nickename")

let email = document.querySelector("#email")

let pFavorito = document.querySelector("#pFavorito")

let  obs = document.querySelector("#obs")


nome.style.width = '100%'
nickename.style.width = '100%'
email.style.width = '100%'
pFavorito.style.width = '100%'
obs.style.width = '100%'

function validarNome()
{   
    let txt = document.querySelector("#txt_nome")
       
    if (nome.value.length < 3)
    {
        txt.innerHTML = "Nome Invalido"
        txt.style.color="red"
    } 

    else

    {
        txt.innerHTML = "Nome Valido"
        txt.style.color="blue"
    }


}

function validarEmail()
{
   let txt = document.querySelector("#email")

    if (email.value.indexOf("@") == - 1)
    {
        txt.innerHTML = "E-mail Invalido"
        txt.style.color="red"
    }

    else

    {
        txt.innerHTML = "E-mail Valido"
        txt.style.color="blue"
    }
}

function validarPersonagem()
{

}