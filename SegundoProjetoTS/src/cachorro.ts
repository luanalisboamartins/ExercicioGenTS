import { animal } from "./animal";



export class cachorro extends animal{
    locomocao() {
        console.log("O cachorro corre")
    }

    emitirSom() {
        console.log("O som que o cachorro faz é: AUAU")
    }
    exibirDados() {
        console.log(`O nome do cachorro é: ${this.nome}\n` +
        `Sua idade é: ${this.idade}`)
    }
    
     
}

