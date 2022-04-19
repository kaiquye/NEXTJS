const Services = require('./services-lideres')

class Controller {
    async Criar(req, res) {
        console.log(req.body)
        try {
            let { nome, cpf, equipe } = req.body;
            const Erro = await Services.Criar(nome, cpf, equipe)
            if (Erro instanceof Error) return res.status(400).json({ error: Erro.message, ok: false })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async CriarToken(req, res) {
        console.log(req.body)
        try {
            let { nome, cpf } = req.body;
            const Token = await Services.CriarToken(nome, cpf)
            if (Token instanceof Error) return res.status(400).json({ error: Token.message, ok: false })
            return res.status(201).json({ Token: Token, ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()