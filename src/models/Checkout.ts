import { Carrinho } from "./Carrinho";

export class Checkout {
    constructor(
        enderecoEntrega: string,
        formaPagamento: string,
        carrinho: Carrinho
    ) {
        this.enderecoEntrega = enderecoEntrega;
        this.formaPagamento = formaPagamento;
        this.carrinho = carrinho;
    }

    enderecoEntrega: string;
    formaPagamento: string;
    carrinho: Carrinho;

    processarPagamento() {
        const total = this.carrinho.calcularTotal();
        console.log(`Pagamento de R$ ${total} processado com ${this.formaPagamento}.`);
    }

    atualizaEstoque() {
        console.log(`Estoque atualizado após a compra.`);
    }
}