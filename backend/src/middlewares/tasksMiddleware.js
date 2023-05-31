const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined){
        return res.status(400).json({ message: 'o campo "titulo" é obrigatório ! '})
    }

    if (body.title == ''){
        return res.status(400).json({ message: 'o campo "titulo" nao pode ser vazio ! '})
    }

    next();
}

const validateFieldStatus = (req, res, next) => {
    const {body} = req;

    if (body.status == undefined){
        return res.status(400).json({ message: 'o campo "status" é obrigatório ! '})
    }

    if (body.status == ''){
        return res.status(400).json({ message: 'o campo "status" nao pode ser vazio ! '})
    }

    next();
}

module.exports = {
    validateBody,
    validateFieldStatus,
}