require('dotenv').config();
const jwt = require('jsonwebtoken');

class Auth {

    CriarTokenColaborador(data) {
        const token = jwt.sign({ data }, process.env.SECRET, { expiresIn: process.env.EXPIRESIN });
        console.log(token)
        return token
    }

    CriarTokenLider(data) {
        console.log('validarlider', data)
        const token = jwt.sign({ data }, process.env.SECRET, { expiresIn: process.env.EXPIRESIN });
        console.log(token)
        return token
    }

    ValidarColaborador(req, res, next) {
        const Token = req.headers['x-custom-header'];
        if (!Token) {
            return res.status(401).json({ message: 'Token não informado.' });
        }
        try {
            const data = jwt.verify(Token, process.env.SECRET);
            console.log(data.data.acesso)
            if (data.data.acesso === process.env.colaborador) {
                return next();
            }
            throw new Error()
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: 'Usuario não tem permisão.' });
        }
    }

    ValidarLider(req, res, next) {
        console.log('Validando....')
        const Token = req.headers['x-custom-header'];
        if (!Token) {
            return res.status(401).json({ message: 'Token não informado.' });
        }
        try {
            const data = jwt.verify(Token, process.env.SECRET);
            if (data.data.Acesso === 'Lider') {
                return next();
            }
            throw new Error('usuario não é lider')
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: 'Usuario não tem permisão.' });
        }
    }

    UsuarioAuth(req, res) {
        const Token = req.headers['x-custom-header'];
        if (!Token) {
            return res.status(401).json({ message: 'Token não informado.', ok: false });
        }
        try {
            const data = jwt.verify(Token, process.env.SECRET);
            if (data) {
                console.log('--///////////////////--', data)
                const { Equipe_id, Acesso, cpf, id } = data.data;
                return res.status(200).json({ message: 'Esse usuario é bom.', Equipe_id, Acesso, cpf, id, ok: true });
            }
            throw new Error('')
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: 'Usuario não tem permisão.', ok: false });
        }
    }
}
module.exports = new Auth();
