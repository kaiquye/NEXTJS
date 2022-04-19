class Utils {
    VerificarCamposNullos(campos) {
        console.log('campos', campos)
        for (let i = 0; campos.length > i; i++) {
            if (!campos[i]) {
                return new Error('Preencha todos os campos');
            }
        }
        return false;
    }

}
module.exports = new Utils;