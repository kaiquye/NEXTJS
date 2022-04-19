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
        const cpf = '12345678009'
        var va1 = 0;
        for (let i = 0; i <= 8; i++) {
            CalcularDigitosVerificadores += (Number(cpf[i]) * (10 - i))
            // console.log(Number(cpf[i]) + '*' + (10 - i))
        }
        var resto = (CalcularDigitosVerificadores * 10) % 11;

        //funcionando daqui para cima
        // if (resto !== parseInt(strCpf.substring(9, 10))) {
        //     return false;
        // }
        var CalcularDigitosVerificadores2 = 0;
        for (let i = 0; i <= 9; i++) {
            console.log(Number(cpf[i]) + "*" + (11 - i))
            CalcularDigitosVerificadores2 += (Number(cpf[i]) * (11 - i))
        }
        var resto2 = (CalcularDigitosVerificadores2 * 10) % 11;
        console.log(resto2)
        if (resto2 != parseInt(cpf.substring(10, 11))) {
            return console.log('nao')
        }
        console.log('sim')
        // resto = CalcularDigitosVerificadores2 % 11
        // if (resto === 10 || resto === 11 || resto < 2) {
        //     resto = 0;
        // } else {
        //     resto = 11 - resto;
        // }
        // if (resto !== parseInt(strCpf.substring(9, 10))) {
        //     return false;
        // }

    }
    ValidarCpf() {
        var soma = 0;

        for (var i = 1; i <= 9; i++) {
            soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        }

        var resto = soma % 11;

        if (resto === 10 || resto === 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }

        if (resto !== parseInt(strCpf.substring(9, 10))) {
            return false;
        }

        soma = 0;

        for (var i = 1; i <= 10; i++) {
            soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;

        if (resto === 10 || resto === 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }

        if (resto !== parseInt(strCpf.substring(10, 11))) {
            return false;
        }

        return true;
    }
}
module.exports = new Utils;