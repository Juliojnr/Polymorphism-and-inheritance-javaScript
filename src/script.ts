import PromptSync = require ("prompt-sync");
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { EmitirSom } from "./IEmitirSom";
import { Preguica } from "./Preguica";


const cachorro = new Cachorro('Bolt', 7);
const cavalo = new Cavalo ('Jack', 17);
const preguica = new Preguica ('Lima', 10);

function emitirSom (animal: EmitirSom){
    animal.emitirSom()
}

emitirSom(cachorro);
emitirSom(cavalo);
emitirSom(preguica);




