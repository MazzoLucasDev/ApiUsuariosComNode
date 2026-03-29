

export const validarProduto = (req, res ,next) => {
    const {nome,preco, categoria} = req.body;

    if (!nome) {
        return res.status(400).json({erro: "Nome é obrigatório!"});
    }

    if (preco == null) {
        return res.status(400).json({erro: "Preco é obrigatório!"});
    }

    if (!categoria){
        return res.status(400).json({erro: "Categoria é obrigatório!"});
    }

    if (preco <= 0) {
        return res.status(400).json({erro: "Preco tem que ser maior que zero!"});
    }

    if (typeof preco !== "number") {
        return res.status(400).json({erro: "Preco deve ser um número!"});
    }

    next();
}