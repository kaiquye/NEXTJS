const Services = require('./services-colaboradores')
const Util = require('./Utils');

class Controller {
    async Criar(req, res) {
        console.log('colaborador', req.body)
        try {
            let { nome, cpf, equipe } = req.body;
            if (!nome, !cpf, !equipe) return res.status(400).json({ error: 'Campos fazios. ', ok: false })
            const Erro = await Services.Criar(nome, cpf, equipe);
            if (Erro instanceof Error) return res.status(400).json({ error: Erro.message, ok: false })
            return res.status(201).json({ message: 'Colaborador criado com sucesso ! ', ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async CriarTokenColaborador(req, res) {
        try {
            let { nome, cpf } = req.body;
            const { Token, Acesso } = await Services.Buscar(nome, cpf);
            if (Token instanceof Error) return res.status(400).json({ error: Token.message, ok: false })
            return res.status(201).json({ Token, ...Acesso, ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async BuscarTodos(req, res) {
        try {
            let { id } = req.params;
            console.log(req.params)
            const Colaboradores = await Services.BuscarTodos(id);
            if (Colaboradores instanceof Error) return res.status(400).json({ error: Colaboradores.message, ok: false })
            console.log(Colaboradores)
            return res.status(201).json({ Colaboradores, ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()