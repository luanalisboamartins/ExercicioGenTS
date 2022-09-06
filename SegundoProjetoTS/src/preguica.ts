import { animal } from "./animal";

export class preguica extends animal{
    locomocao() {
        console.log("A preguiça sobe em arvores")
    }
    emitirSom() {
       console.log("O som que a preguiça faz é: som de preguiça")
    }
    exibirDados() {
        console.log(`O nome da preguiça é: ${this.nome}\n` +
        `Sua idade é: ${this.idade}`)
    }

    
}