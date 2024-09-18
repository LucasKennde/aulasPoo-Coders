class Produto {
    constructor(
        public nome: string,
        public departamento: string,
        public id: number,
        public preco: number,
        public foto: string
    ) {}

    novo() {
        console.log(`Produto ${this.nome} criado.`);
    }

    editar(novoNome: string, novoPreco: number): void {
        this.nome = novoNome;
        this.preco = novoPreco;
        console.log(`Produto ${this.id} editado.`);
    }

    excluir() {
        console.log(`Produto ${this.id} excluído.`);
    }
}



class Carrinho {
    private produtos: { produto: Produto; quantidade: number }[] = [];

    adicionar(produto: Produto, quantidade: number) {
        this.produtos.push({ produto, quantidade });
        console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
    }

    editar(produto: Produto, novaQuantidade: number) {
        const item = this.produtos.find(p => p.produto.id === produto.id);
        if (item) {
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

class Checkout {
    constructor(
        private enderecoEntrega: string,
        private formaPagamento: string,
        private carrinho: Carrinho
    ) {}

    processarPagamento() {
        const total = this.carrinho.calcularTotal();
        console.log(`Pagamento de R$ ${total} processado com ${this.formaPagamento}.`);
    }

    atualizaEstoque() {
        console.log(`Estoque atualizado após a compra.`);
    }
}

class Vitrine {
    private destaques: Produto[] = [];
    private categorias: Map<string, Produto[]> = new Map();

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

//Criando o Fluxo de caixa
const produto1 = new Produto('Camisa', 'Roupas', 1, 50, 'foto1.jpg');
const produto2 = new Produto('Tênis', 'Calçados', 2, 200, 'foto2.jpg');

// Testando Carrinho
const carrinho = new Carrinho();
carrinho.adicionar(produto1, 2);
carrinho.adicionar(produto2, 1);
carrinho.listar();

// Checkout
const checkout = new Checkout('Rua ABC, 123', 'Cartão de Crédito', carrinho);
checkout.processarPagamento();
checkout.atualizaEstoque();

// Aqui é o teste da vitrine
const vitrine = new Vitrine();
vitrine.adicionarDestaque(produto1);
vitrine.adicionarCategoria('Roupas', produto1);
vitrine.adicionarCategoria('Calçados', produto2);

// Listando os produtos da vritrine
vitrine.listarDestaque();
vitrine.listarCategoria('Roupas');
vitrine.listarCategoria('Calçados');
