let users = [];
let idAtual = 0;

export const getUser = (req, res) => {
    return res.status(200).json({mensagem : "Lista:" , users});
}

export const postUser = (req, res) => {
    const {nome, email} = req.body;
    if (!nome || !email) {
        return res.status(400).json({erro: "Nome e email sao obrigatórios!"});
    }
    const newUser = {
        id: idAtual++,
        nome,
        email
    };
    users.push(newUser);
    return res.status(201).json({mensagem: "Registro criado!" , newUser});
}

export const putUser = (req,res) => {
    const id = parseInt(req.params.id);

    const userFind = users.find((user) => user.id === id);
    if (!userFind) {
        return res.status(404).json({erro: "User nao encontrado!"})
    }
    const {nome, email} = req.body;

    if (!nome || !email) {
        return res.status(400).json({erro: "Nome e email sao obrigatorios!"})
    }
    userFind.nome = nome;
    userFind.email = email;
    
    return res.status(200).json({mensagem: "Registro atualizado com sucesso!" , userFind});
}

export const deleteUser = (req,res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return res.status(404).json({erro: "User nao encontrado!"});
    }
    users.splice(index, 1);
    return res.status(200).json({mensagem: "User deletado com sucesso!"});
}

export const getUserById = (req,res) => {
    const id = parseInt(req.params.id);
    
    const userFind = users.find((user) => user.id === id);
    if (!userFind) {
        return res.status(404).json({erro: "User nao encontrado!"});
    }
    return res.status(200).json({mensagem: "User encontrado!", userFind});
}