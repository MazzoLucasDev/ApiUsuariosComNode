let produtos = [];
let idAtual = 0;

export const getProduto = (req,res) => {
    return res.status(200).json({mensagem: "Lista:", produtos})
}

export const postProduto = (req, res) => {
    const {nome,preco,categoria} = req.body;
    const newProduct = {
        id: idAtual++,
        nome,
        preco,
        categoria
    }
    produtos.push(newProduct);
    return res.status(201).json({mensagem: "Produto criado com sucesso!", newProduct});
}

export const getProdutoById = (req,res) => {
    const id = parseInt(req.params.id);

    const findProduct = produtos.find ((produto) => produto.id === id);

    if (!findProduct) {
        return res.status(404).json({erro: "Produto nao encontrado!"});
    }

    return res.status(200).json({mensagem: "Produto encontrado: ",findProduct});
}

export const putProduto = (req,res) => {
    const id = parseInt(req.params.id);
    const findProduct = produtos.find ((produto) => produto.id === id);

    if (!findProduct) {
        return res.status(404).json({erro: "Produto nao encontrado!"});
    }
    const {nome, preco, categoria} = req.body;
    if (!nome || preco == null || typeof preco !== "number" || !categoria) {
        return res.status(400).json({erro: "Preencha todos os campos necessarios!"});
    }
    findProduct.nome = nome;
    findProduct.preco = preco;
    findProduct.categoria = categoria;

    return res.status(200).json({mensagem: "Produto atualizado com sucesso!", findProduct});
}

export const deleteProduto = (req,res) => {
    const id = parseInt(req.params.id);

    const index = produtos.findIndex((produto) => produto.id === id)
    if (index === -1) {
        return res.status(404).json({erro: "Produto nao encontrado!"})
    }

    produtos.splice(index,1);
    return res.status(200).json({mensagem: "Produto deletado!"})

}