import { Animal } from "./Animal";
import { EmitirSom } from "./IEmitirSom";

class Preguica extends Animal implements EmitirSom {
    
    constructor (nome: string, idade: number) {
        super (nome, idade);
    }
    emitirSom(): void {
        console.log ('Emitiu som');
    }
}

export { Preguica };