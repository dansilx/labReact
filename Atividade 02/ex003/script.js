function palindromo(str) {

    let strLimpa = ''
    for (let i = 0; i < str.length; i++)
    {
        let char = str[i]
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) 
        {
            strLimpa += char;
        }
        else if (char >= 'A' && char <= 'Z')
        {
            strLimpa += String.fromCharCode(char.charCodeAt(0) + 32)
        }
    }
    
    let len = strLimpa.length
    for (let i = 0; i < len / 2; i++) 
    {
        if (strLimpa[i] !== strLimpa[len - 1 - i])
        {
            return false
        }
    }
    return true
}

function checkPalindromo() {
    let inputStr = document.getElementById("inputStr").value
    let resultadTexto = palindromo(inputStr) 
    if(resultadTexto == true) 
    {
        alert("É um palíndromo!")
    }
    else
    {
        alert("Não é um palíndromo!")
    }
}