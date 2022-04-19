const Services = require('./services-mensagens-temporarias')

class Controller {
    async Criar(req, res) {
        console.log('teste2',req.body)
        try {
            let { mensagens, equipe } = req.body;
            await Services.Criar(mensagens, equipe, new Date())
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()