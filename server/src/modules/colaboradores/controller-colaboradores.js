const Services = require('./services-colaboradores')
const Util = require('./Utils');

class Controller {
    async Criar(req, res) {
        console.log(req.body)
        try {
            let { nome, cpf, equipe } = req.body;
            Util.validarCPF(cpf)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new Controller()