import {db} from './FirebaseConfig';

const agregarGasto = ({categoria, descripcion, cantidad, fecha, uidUsuario}) => {
      db.collection('gastos').add({
            categoria: categoria,
            descripcion: descripcion,
            cantidad: cantidad, 
            fecha: fecha,
            uidUsuario: uidUsuario
      })
}

export default agregarGasto;