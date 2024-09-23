import { Produto } from './Produto';

export class Carrinho {
    private produtos: { produto: Produto; quantidade: number }[] = [];

    adicionar(produto: Produto, quantidade: number) {
        if (quantidade <= 0) {
            throw new Error("Quantidade deve ser maior que zero.");
        }
        this.produtos.push({ produto, quantidade });
        console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
    }

    editar(produto: Produto, novaQuantidade: number) {
        const item = this.produtos.find(p => p.produto.id === produto.id);
        if (item) {
            if (novaQuantidade <= 0) {
                throw new Error("Nova quantidade deve ser maior que zero.");
            }
            item.quantidade = novaQuantidade;
            console.log(`Quantidade do produto ${produto.nome} atualizada.`);
        }
    }

    excluir(produto: Produto) {
        this.produtos = this.produtos.filter(p => p.produto.id !== produto.id);
        console.log(`Produto ${produto.nome} removido do carrinho.`);
    }

    listar(): void {
        this.produtos.forEach(item => {
            console.log(`Produto: ${item.produto.nome}, Quantidade: ${item.quantidade}`);
        });
    }

    calcularTotal(): number {
        let total = 0;
        this.produtos.forEach(item => {
            total += item.produto.preco * item.quantidade;
        });
        return total;
    }
}