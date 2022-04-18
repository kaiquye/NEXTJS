const Services = require('./services-mensagens')

class Controller {
    async Criar(req, res) {
        console.log(req.body)
        try {
            let { mensagens, equipe } = req.body;
            await Services.Criar(mensagens, equipe)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()