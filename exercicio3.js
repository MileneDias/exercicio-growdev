/*
    Exercício 3
        - Calcular a média da turma 
        - Imprimir o aluno com a maior Média
*/

const lista = [
    {
        "nome": "José",
        "media": 87
    },
    {
        "nome": "João",
        "media": 65
    },
    {
        "nome": "Maria",
        "media": 88
    },
    {
        "nome": "Sandra",
        "media": 75
    },    
    {
        "nome": "Bento",
        "media": 63
    },
    {
        "nome": "Josefa",
        "media": 78
    },    
];

// variavel para somar as médias
var soma = 0;
var maiorMedia = 0;
var nomeAluno = "";

//percorrer a lista de alunos
for (const aluno of lista) {
    soma += aluno.media;

    //a media do aluno é comparada com a última média testada
    //se for maior, a maior média é atualizada e seu nome também
    //repete isso para cada aluno até ficar o nome do aluno com a maior nota da lista
    if(aluno.media > maiorMedia){
        maiorMedia = aluno.media;
        nomeAluno = aluno.nome;
    }
}

console.log(soma / lista.length);

console.log("Maior media:", maiorMedia, nomeAluno);