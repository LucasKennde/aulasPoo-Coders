import { Produto } from './Produto';

export class Roupa extends Produto {

    constructor(
        nome: string, 
        departamento:string, 
        id: number, 
        preco: number, 
        foto: string, 
        public tamanho: string, 
        public cor: string) {

        super(nome,departamento, id, preco, foto);

             
    }

    mostarDetalhes() {
        console.log(`Nome: ${this.nome} | Tamanho: ${this.tamanho} | Cor: ${this.cor} | Preço: R$ ${this.preco}`);
    }
}


