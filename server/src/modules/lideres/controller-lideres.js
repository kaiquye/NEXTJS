const Services = require('./services-lideres')

class Controller {
    async Criar(req, res) {
        console.log(req.body)
        try {
            let { nome, cpf, tipoAcesso, equipe } = req.body;
            await Services.Criar(nome, cpf, tipoAcesso, equipe)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
} 
module.exports = new Controller()