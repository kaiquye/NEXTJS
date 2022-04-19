const Check = require('yup')

class Utils {
    // nome, cpf, equipe
    async CheckForm() {
        let check = Check.object().shape({
            nome: Check.string('nome invalido').required('nome obrigatorio').min(2, 'nome muito curto'),
            cpf
        })
    }
    validarCPF() {
        var CalcularDigitosVerificadores = 0;
        const cpf = '02154026699'
        var va1 = 0;
        for (let i = 0; i <= 8; i++) {
            CalcularDigitosVerificadores += (Number(cpf[i]) * (10 - i))
            // console.log(Number(cpf[i]) + '*' + (10 - i))
        }
        var resto = (CalcularDigitosVerificadores * 10) % 11;

        //funcionando 
        if (resto !== parseInt(cpf.substring(9, 10))) {
            console.log('Cpf invalido ! ')
            return false;
        }
        var CalcularDigitosVerificadores2 = 0;
        for (let i = 0; i <= 9; i++) {
            // console.log(Number(cpf[i]) + "*" + (11 - i))
            CalcularDigitosVerificadores2 += (Number(cpf[i]) * (11 - i))
        }
        var resto2 = (CalcularDigitosVerificadores2 * 10) % 11;
        // console.log(resto2)
        if (resto2 != parseInt(cpf.substring(10, 11))) {
            console.log('Cpf invalido ! ')
            return false
        }
    return true
    }
}
module.exports = new Utils;