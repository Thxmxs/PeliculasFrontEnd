import Swal from 'sweetalert2';

export const confirmar =(onConfirm:any, titulo: string =" Desea borrar el registro ?",textoBotonConfirmacion:string = 'Borrar') =>{

    Swal.fire({title:titulo,icon:'warning',showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:textoBotonConfirmacion})
    .then((result) =>{
        if(result.isConfirmed){
            onConfirm();
        }
    })

}