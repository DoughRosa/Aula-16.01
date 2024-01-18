// Criação do objeto Produto
let Produto = {
    preco: 90,
    descricao: "Mouse"
  };
  
  // Exibindo os valores no console
  console.log("Preço: " + Produto.preco);
  console.log("Descrição: " + Produto.descricao);

  //exercicio 2

//Criação do objeto notebook

let Notebook = {
    Processador: "i7",
    Memoria:"16GB",
    Preco:"5000",
    Hd:"1TB",
    Ssd:"256GB"
  };
  
  // Por fim, mostre o nome e valor de cada atributo no console, 
  // exatamente como esta na atividade.
  
  console.log(`Processador: ${Notebook.Processador}
  Memoria: ${Notebook.Memoria}
  Preço: ${Notebook.Preco}
  HD: ${Notebook.Hd}
  Ssd: ${Notebook.Ssd}`);

  //Exercício 3

// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

// let aluno1 ={
//     nome: prompt("Qual o nome do aluno:"),
//     nota1: Number(prompt("insira a primeira nota:")),
//     nota2: Number(prompt("Insira a segunda nota:")),
// }

// let aluno2={...aluno1};

// aluno2.nome = prompt("Qual o nome do aluno:");
// aluno2.nota1 = Number(prompt("insira a primeira nota:"));
// aluno2.nota2 = Number(prompt("Insira a segunda nota:"));

// let mediaAluno1 = (aluno1.nota1+aluno1.nota2)/2;
// let mediaAluno2 = (aluno2.nota1+aluno2.nota2)/2;
// let mediaTurma = (mediaAluno1+mediaAluno2)/2;

// console.log(`Media ${aluno1.nome}: ${mediaAluno1}
// Media ${aluno2.nome}: ${mediaAluno2}
// Media da Turma: ${mediaTurma}`);

//Exercício 4
// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let cadastro = [];

do{
    let pessoas = {
        nome: prompt("Digite seu nome:"),
        idade: prompt("Digite sua idade:"),
        emprego: confirm("Você está empregado?"),
        };

    if (pessoas.emprego){
      pessoas.salario = Number(prompt("Digite seu salário:"));      
    } 

      cadastro.push(pessoas);

    var continuar = confirm("Deseja continuar cadastrando?");
    console.log(continuar);
    
  } while (continuar);

  let desempregados = cadastro.filter(pessoa => !pessoa.emprego);
let acima2500 = cadastro.filter(pessoa => pessoa.emprego && pessoa.salario >= 2500);
let abaixo2500 = cadastro.filter(pessoa => pessoa.emprego && pessoa.salario < 2500);

document.write("Pessoas desempregadas: <br>" + JSON.stringify(desempregados) + "<br>");
document.write("Salários acima de 2500: <br>" + JSON.stringify(acima2500) + "<br>");
document.write("Salários abaixo de 2500: <br>" + JSON.stringify(abaixo2500) + "<br>");