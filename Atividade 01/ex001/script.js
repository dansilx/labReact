const input = document.getElementById("number").value
const btn = document.getElementById("btn")

const number = Number(input)

btn.addEventListener('click', function(){
    if (!Number.isInteger(number) || number <= 0) {
        alert("Número incorreto!")
    } else {
        if (number % 2 == 0)
        { 
            alert("Número par!")
        }
        else 
        { 
            alert("Número ímpar!")
        }
    }
})
