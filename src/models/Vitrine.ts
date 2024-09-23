import { Produto } from "./produto";

export class Vitrine {
    destaques: Produto[] = [];
    categorias: Map<string, Produto[]> = new Map();

    adicionarDestaque(produto: Produto) {
        this.destaques.push(produto);
        console.log(`Produto ${produto.nome} adicionado aos destaques.`);
    }

    adicionarCategoria(categoria: string, produto: Produto) {
        if (!this.categorias.has(categoria)) {
            this.categorias.set(categoria, []);
        }
        this.categorias.get(categoria)?.push(produto);
        console.log(`Produto ${produto.nome} adicionado à categoria ${categoria}.`);
    }

    listarDestaque() {
        console.log('Produtos em destaque:');
        this.destaques.forEach(produto => {
            console.log(`${produto.nome} - R$ ${produto.preco}`);
        });
    }

    listarPromocoes() {
        console.log('Produtos em promoção:');
    }

    listarCategoria(categoria: string) {
        const produtos = this.categorias.get(categoria) || [];
        if (produtos.length === 0) {
            console.log(`Nenhum produto encontrado na categoria ${categoria}.`);
            return;
        }

        produtos.forEach(produto => {
            console.log(`${produto.nome} - R$ ${produto.preco}`);
        });
    }
}