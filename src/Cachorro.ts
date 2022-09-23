import { Animal } from "./Animal";
import { EmitirSom } from "./IEmitirSom";

class Cachorro extends Animal implements EmitirSom {

    constructor (nome: string, idade: number) {
        super(nome, idade);
    }
    emitirSom(): void {
        console.log ('Au au');
    }

}

export { Cachorro };