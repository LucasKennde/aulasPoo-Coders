export class Produto {
    private _nome: string;
    private _departamento: string;
    private _id: number;
    private _preco: number;
    private _foto: string;

    constructor(nome: string, departamento: string, id: number, preco: number, foto: string) {
        this._nome = nome;
        this._departamento = departamento;
        this._id = id;
        this._preco = preco;
        this._foto = foto;
    }


    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        if (!value) {
            throw new Error("Nome do produto não pode ser vazio.");
        }
        this._nome = value;
    }

    get departamento(): string {
        return this._departamento;
    }

    set departamento(value: string) {
        if (!value) {
            throw new Error("Departamento não pode ser vazio.");
        }
        this._departamento = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        if (value <= 0) {
            throw new Error("ID deve ser um número positivo.");
        }
        this._id = value;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(value: number) {
        if (value <= 0) {
            throw new Error("Preço deve ser maior que zero.");
        }
        this._preco = value;
    }

    get foto(): string {
        return this._foto;
    }

    set foto(value: string) {
        if (!value) {
            throw new Error("Foto não pode ser vazia.");
        }
        this._foto = value;
    }

    novo() {
        console.log(`Produto ${this._nome} criado.`);
    }

    editar(novoNome: string, novoPreco: number): void {
        this._nome = novoNome;
        this._preco = novoPreco;
        console.log(`Produto ${this.id} editado.`);
    }

    excluir() {
        console.log(`Produto ${this.id} excluído.`);
    }
}