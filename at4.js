let salario = parseInt(prompt('Digite o seu salário'))

if(salario > 1250){
    let Aumento = (salario * 10/100)+ salario;
    alert (Aumento)
}else{
    let Aumento2 = (salario * 15/100) + salario
    alert(Aumento2)
}