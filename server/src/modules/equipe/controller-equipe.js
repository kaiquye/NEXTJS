const Services = require('./services-equipe')

class Controller {
    async Criar(req, res) {
        console.log(req.body)
        try {
            let { nome } = req.body;
            await Services.Criar(nome)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()