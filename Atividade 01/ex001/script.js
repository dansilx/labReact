const btn = document.getElementById("btn")

btn.addEventListener('click', function() {
    const input = document.getElementById("number").value
    const number = Number(input)

    if (!Number.isInteger(number) || number <= 0) {
        alert("Insira um numero inteiro e positivo!")
    }
    else if (number % 2 == 0)
    { 
        alert(`${number} é um número par!`)
    }
    else 
    { 
        alert(`${number} é um número ímpar!`)        
    }
})