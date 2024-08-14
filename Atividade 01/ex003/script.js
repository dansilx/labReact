const btn = document.getElementById("btn")

btn.addEventListener('click', function(event) {
    event.preventDefault()

    const input = document.getElementById("number").value
    const number = Number(input)

    if (!Number.isInteger(number) || number <= 0) 
    {
        alert("Insira um numero inteiro e positivo!")
        return
    }
    else
    { 
        alert(fat(number))
    }
})

function fat(num) {
    if (num <= 1) return 1
    return num * fat(num - 1)
}