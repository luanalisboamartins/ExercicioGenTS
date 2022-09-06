import { animal } from "./animal";

export class cavalo extends animal{
    locomocao() {
        console.log("O cavalo Galopa")
    }
    emitirSom() {
        console.log("O som que o cavalo faz é: iiirrrrí, rilinchin")
    }
    exibirDados() {
       console.log(`O nome do cavalo é: ${this.nome}\n` +
       `Sua idade é: ${this.idade}`)
    }

    
}