import { Animal } from "./Animal";
import { EmitirSom } from "./IEmitirSom";

class Cavalo extends Animal implements EmitirSom {
    
    constructor (nome: string, idade: number) {
        super(nome, idade);
    }
    emitirSom(): void {
        console.log ('Muuuu')
    }
}

export { Cavalo };