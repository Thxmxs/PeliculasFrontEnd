import * as Yup from 'yup';

export const validations = () => {
    Yup.addMethod(Yup.string,'primeraLetraMayuscula',function(){
        return this.test('primera-letra-mayuscula','La primera letra debe ser mayuscula',
        function(valor){
            if(valor && valor.length >0){
                const primerLetra = valor.substring(0,1);
                return primerLetra === primerLetra.toUpperCase();
            }
        })
    })
}
