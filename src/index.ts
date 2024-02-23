let nome :string = "Miguel"
let sobrenome = "Martinazzo"
let idade = 22
let booleanoF = false
let booleanoT = true
let numero = 10
let numeroDecimal = 10.1


console.log(typeof nome)
console.log(typeof numero)
console.log(typeof booleanoF)
console.log(nome + " " +sobrenome + " " + idade)
console.log(numero + numeroDecimal)

let teste

console.log(typeof teste)

//Array

let notas: number[] = []
let paises: Array<string>

let cidades = [
    'Sao Paulo',
    'Jundiai',
    'Itatiba'
]

console.log("A melhor cidade é:", cidades[1])
console.log("Tem", cidades.length,"cidades")

cidades.forEach(i => console.log("A cidade atual é", i))
notas.push(15)


console.log("1º numero:", notas[0])
console.log("Tem", notas.length,"numero")

// Object - Tipos Complexos

const aluno : {
    nome: string,
    nota: number,
    ativo: boolean,
    escola:{
        nome: string,
        materias: string[]
    }
} = {nome:"aluno",nota: 1,ativo:false,escola:{ nome:  "UniAnchieta", materias: ["Programacao","Matematica"]}}

console.log(aluno)

//null e undefined

let variavelSemTipo = null
console.log("valor de variavelSemTipo", variavelSemTipo)

if(variavelSemTipo === null){
    console.log("É null")
}

if(variavelSemTipo === undefined){
    console.log("É undefined")
}