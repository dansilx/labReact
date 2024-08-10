for (i=1;i <= 6; i++) {
    document.write(`<h${i}>Olá Sala!</h${i}>`);
}

let nome = prompt("Digite o seu nome:");
if(confirm("Quer ver seu nome?")) {
    alert("Seu nome é: " + nome);
};

x = 10;
console.log(x);
console.log(typeof(x));