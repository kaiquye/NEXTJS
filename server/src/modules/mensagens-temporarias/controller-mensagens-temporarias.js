const Services = require('./services-mensagens-temporarias')

class Controller {
    async Criar(req, res) {
        try {
            let { mensagens, equipe, colaborador } = req.body;
            const Erro = await Services.Criar(mensagens, equipe, new Date(), colaborador)
            if (Erro instanceof Error) return res.status(400).json({ error: Erro.message, ok: false })
            return res.status(200).json({ error: 'Mensagem temporaria salva com sucesso !', ok: true })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()