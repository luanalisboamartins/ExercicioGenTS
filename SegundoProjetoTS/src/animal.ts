export abstract class animal{

    nome: string
    idade: number


    constructor(
        nome:string,
        idade: number
    ){

        this.nome = nome
        this.idade = idade


    }

    abstract emitirSom(): void
    abstract exibirDados(): void
    abstract locomocao(): void
   

}