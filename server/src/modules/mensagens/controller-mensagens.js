const Services = require('./services-mensagens')

class Controller {
    async Criar(req, res) {
        try {
            console.log('nonva mensagem')
            let { mensagens, equipe } = req.body;
            const Erro = await Services.Criar(mensagens, equipe)
            if (Erro instanceof Error) return res.status(400).json({ error: Erro.message, ok: false })
            return res.status(201).json({ message: 'Mensagem criada com sucesso', ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message, ok: false })
        }
    }

    async BuscarTodos(req, res) {
        try {
            console.log('000000000000000000')
            let { equipe } = req.params;
            console.log('equipe', equipe)
            const Mensagens = await Services.BuscarTodos(equipe)
            if (Mensagens instanceof Error) return res.status(400).json({ error: Mensagens.message, ok: false })
            return res.status(201).json({ message: Mensagens, ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message, ok: false })
        }
    }
}
module.exports = new Controller()